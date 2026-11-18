#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从腾讯文档 markdown 文档拉回正文，同步到本地文章 index.md。

用法（必须在 WorkBuddy 会话里跑，见 docs/tencent-doc-sync.md）：

    python3 src/content/posts/fzu/sync-tencent-doc.py              # 只预览差异，不落盘
    python3 src/content/posts/fzu/sync-tencent-doc.py --write      # 写入 index.md
    python3 src/content/posts/fzu/sync-tencent-doc.py --write --fetch-new   # 顺便把新图下进 assets/

默认行为：
  - 保留本地 index.md 顶部的 frontmatter（title / tags / published 这些只活在博客里）
  - 正文整段用腾讯文档的内容替换
  - 腾讯图床链接（docimg*.docs.qq.com）会按图片内容 md5 反查本地 assets，
    命中就换回 ./assets/<文件名>（因为那些链接有防盗链，博客直接引用会 403）
  - 反查不到的图默认只留一个占位标记，加 --fetch-new 才会下载进 assets/
"""

import argparse
import difflib
import glob
import hashlib
import json
import os
import re
import sys
import urllib.request

# ── 配置 ────────────────────────────────────────────────────────────────
DOC_FILE_ID = "CgvzpWgfJfhE"                     # 腾讯文档 markdown 的 file_id
DOC_URL = "https://docs.qq.com/markdown/DQ2d2enBXZ2ZKZmhF"
POST_DIR = "src/content/posts/fzu/overview"      # 相对仓库根目录
INDEX = "index.md"
ASSETS = "assets"

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")


def repo_root():
    """往上找 package.json，这样脚本挪位置也不用改。"""
    cur = os.path.dirname(os.path.abspath(__file__))
    while cur != os.path.dirname(cur):
        if os.path.exists(os.path.join(cur, "package.json")):
            return cur
        cur = os.path.dirname(cur)
    sys.exit("没找到仓库根目录（没有 package.json）")


REPO = repo_root()


def load_tencentdocs():
    """在插件缓存里找 tencentdocs.py（版本目录会随插件升级变化，所以用 glob）。"""
    pattern = os.path.expanduser(
        "~/.workbuddy/plugins/cache/workbuddy-builtin/tencent-docs-plugin/*/skills/tencent-docs/tencentdocs.py")
    hits = sorted(glob.glob(pattern))
    if not hits:
        sys.exit("找不到 tencentdocs.py，腾讯文档插件没装或被移动了")
    sys.path.insert(0, os.path.dirname(hits[-1]))
    import tencentdocs
    return tencentdocs


def fetch_remote(td):
    rsp, err = td.call_tool("tencent-docs", "get_content", {"file_id": DOC_FILE_ID})
    if err:
        sys.exit(f"拉取失败：{err}（票据由 WorkBuddy 会话注入，普通终端里没有）")
    if "error" in rsp:
        sys.exit(f"拉取失败：{json.dumps(rsp['error'], ensure_ascii=False)}")
    text = rsp["result"]["content"][0]["text"]
    body = json.loads(text).get("content", "")
    if not body.strip():
        sys.exit("拉回来的正文是空的，拒绝继续（可能文档被清空了）")
    return body.replace("\r\n", "\n")


def md5_bytes(b):
    return hashlib.md5(b).hexdigest()


def index_local_assets(assets_dir):
    """md5 -> 文件名，用于把腾讯图床链接反查回本地文件。"""
    table = {}
    if not os.path.isdir(assets_dir):
        return table
    for name in sorted(os.listdir(assets_dir)):
        path = os.path.join(assets_dir, name)
        if not os.path.isfile(path):
            continue
        with open(path, "rb") as f:
            table[md5_bytes(f.read())] = name
    return table


def download(url):
    req = urllib.request.Request(url, headers={"Referer": "https://docs.qq.com/", "User-Agent": UA})
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    with opener.open(req, timeout=30) as resp:
        return resp.read()


def rewrite_images(body, assets_dir, fetch_new):
    table = index_local_assets(assets_dir)
    stats = {"local": 0, "matched": 0, "missing": [], "fetched": []}

    def rep(m):
        alt, url = m.group(1), m.group(2)
        if not url.startswith("http"):
            stats["local"] += 1
            return m.group(0)  # 已经是 ./assets/xxx 之类，原样保留
        try:
            data = download(url)
        except Exception as e:  # noqa: BLE001
            stats["missing"].append((alt, url, f"下载失败 {e}"))
            return f"> 〔图：{alt or '无说明'} —— 腾讯图床取不到，需人工补〕"

        digest = md5_bytes(data)
        if digest in table:
            stats["matched"] += 1
            return f"![{alt}](./assets/{table[digest]})"

        if fetch_new:
            ext = os.path.splitext(url.split("?")[0])[1] or ".png"
            name = f"tx-{digest[:10]}{ext}"
            with open(os.path.join(assets_dir, name), "wb") as f:
                f.write(data)
            table[digest] = name
            stats["fetched"].append(name)
            return f"![{alt}](./assets/{name})"

        stats["missing"].append((alt, url, "本地 assets 里没有这张图"))
        return f"> 〔图：{alt or '无说明'} —— 本地 assets 里没有，未同步〕"

    out = re.sub(r"!\[([^\]]*)\]\((https?://[^)]+)\)", rep, body)
    return out, stats


def split_frontmatter(text):
    """返回 (frontmatter 块, 正文)。frontmatter 块不带结尾换行，拼回去时要自己补。"""
    if text.startswith("---"):
        end = text.index("\n---", 3) + 4
        return text[:end], text[end:].lstrip("\n")
    return "", text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true", help="真的写入 index.md")
    ap.add_argument("--fetch-new", action="store_true", help="新图下载进 assets/")
    args = ap.parse_args()

    post_dir = os.path.join(REPO, POST_DIR)
    index_path = os.path.join(post_dir, INDEX)
    assets_dir = os.path.join(post_dir, ASSETS)

    td = load_tencentdocs()
    remote = fetch_remote(td)
    remote, stats = rewrite_images(remote, assets_dir, args.fetch_new)

    local = open(index_path, encoding="utf-8").read()
    front, local_body = split_frontmatter(local)

    diff = list(difflib.unified_diff(local_body.split("\n"), remote.split("\n"),
                                     "本地 index.md", "腾讯文档", lineterm="", n=2))
    print(f"图片：本地直引 {stats['local']}，反查到 {stats['matched']}，"
          f"缺失 {len(stats['missing'])}，新下载 {len(stats['fetched'])}")
    for alt, url, why in stats["missing"]:
        print(f"  · {alt or '无说明'}：{why}")

    if not diff:
        print("\n内容和腾讯文档一致，没什么可同步的。")
        return

    print(f"\n差异 {len(diff)} 行：")
    for line in diff[:200]:
        print(line[:180])
    if len(diff) > 200:
        print(f"... 还有 {len(diff) - 200} 行")

    if not args.write:
        print("\n这是预览。确认没问题加 --write 落盘。")
        return

    # frontmatter 块本身不带结尾换行，这里补一个空行，否则会和下面第一行标题粘在一起
    body = f"{front}\n\n{remote}" if front else remote
    open(index_path, "w", encoding="utf-8").write(body)
    print(f"\n已写入 {index_path}")


if __name__ == "__main__":
    main()
