#!/usr/bin/env python3
"""抓取碧蓝航线 wiki 数据，生成 src/data/azurlane/ 下的 JSON。

用法：
    python3 scripts/fetch-azurlane.py           # 全量重抓
    python3 scripts/fetch-azurlane.py --cache   # 复用 scripts/.cache 里的页面缓存

数据来源：
    舰船图鉴      https://wiki.biligame.com/blhx/舰船图鉴        （卡片：名称/阵营/稀有度/舰种/头像）
    角色页        wikitext 里的 |编号=                             （图鉴编号）
    文件          File:<船名>立绘.jpg                              （原始立绘，350×525）
    换装图鉴/旧版  wikitext 模板 {{换装图鉴列表|...}}              （换装全量 + 图片）

科技点与复制人需求来自同目录的 blhx-power 项目（可选，没有就留空）。
"""

import html
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://wiki.biligame.com/blhx/api.php"
H = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Accept": "application/json, text/html",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Referer": "https://wiki.biligame.com/blhx/",
}

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/data/azurlane"
CACHE = ROOT / "scripts/.cache"
for _cand in (
    os.environ.get("AZURLANE_POWER"),
    ROOT.parent / "shenmi/blhx-power/data/ships.json",
    ROOT.parent / "blhx-power/data/ships.json",
):
    if _cand and Path(_cand).exists():
        POWER = Path(_cand)
        break
else:
    POWER = Path("/nonexistent")

DISP = {
    "KizunaAI": "绊爱",
    "Atelier Ryza": "莱莎的炼金工房",
    "Atelier Yumia": "优米雅的炼金工房",
    "To LOVE-Ru": "出包王女",
    "BLACK★ROCK SHOOTER": "黑岩射手",
    "闪乱神乐NL": "闪乱神乐",
    "DanMachiV": "地城邂逅",
    "DateALiveV": "约会大作战",
    "2.5DimensionalSeduction": "2.5次元的诱惑",
    "NieRAutomata": "尼尔",
    "META-???,其他": "META",
}

CORE = ["白鹰", "皇家", "重樱", "铁血", "东煌", "撒丁帝国", "北方联合",
        "自由鸢尾", "维希教廷", "郁金王国", "晶环联盟", "META", "飓风", "其他"]
LINK = ["海王星", "哔哩哔哩", "传颂之物", "绊爱", "维纳斯假期", "偶像大师", "SSSS",
        "莱莎的炼金工房", "闪乱神乐", "出包王女", "黑岩射手", "优米雅的炼金工房",
        "地城邂逅", "约会大作战", "2.5次元的诱惑", "尼尔"]


def _req(url):
    return urllib.request.Request(url, headers=H)


def api(params):
    url = API + "?" + urllib.parse.urlencode(params)
    for i in range(4):
        try:
            with urllib.request.urlopen(_req(url), timeout=90) as r:
                return json.loads(r.read().decode("utf-8", "ignore"))
        except Exception as e:
            if i == 3:
                raise
            print(f"  重试 {i + 1}: {e}", flush=True)
            time.sleep(2 + i * 2)


def get_html(url):
    for i in range(4):
        try:
            with urllib.request.urlopen(_req(url), timeout=120) as r:
                return r.read().decode("utf-8", "ignore")
        except Exception as e:
            if i == 3:
                raise
            print(f"  重试 {i + 1}: {e}", flush=True)
            time.sleep(2 + i * 2)


def cached(name, url, use_cache):
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if use_cache and path.exists():
        return path.read_text(encoding="utf-8")
    text = get_html(url)
    path.write_text(text, encoding="utf-8")
    return text


def strip_thumb(url):
    return re.sub(r"/thumb(/[^/]+/[^/]+/[^/]+)/\d+px-[^/]+$", r"\1", url)


def main():
    use_cache = "--cache" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)

    # 1. 图鉴卡片
    print("[1/4] 图鉴卡片", flush=True)
    dex = cached("dex.html", "https://wiki.biligame.com/blhx/" + urllib.parse.quote("舰船图鉴"), use_cache)
    cards = re.findall(
        r'<div class="jntj-1 divsort"[^>]*data-param1="([^"]*)"[^>]*data-param2="([^"]*)"'
        r'[^>]*data-param3="([^"]*)"[^>]*>.*?<img alt="([^"]+?)头像\.jpg" src="([^"]+)"',
        dex,
    )
    ships, seen = [], set()
    for p1, rarity, faction, name, src in cards:
        name = html.unescape(name).strip()
        if not name or name in seen:
            continue
        seen.add(name)
        ships.append({
            "n": name,
            "f": DISP.get(faction, faction),
            "t": (p1.split(",")[-1] or "").strip(),
            "r": rarity,
            "g": "",
            "av": strip_thumb(src),
        })
    print(f"  {len(ships)} 艘", flush=True)
    names = [s["n"] for s in ships]

    # 2. 编号
    print("[2/4] 图鉴编号", flush=True)
    ids = {}
    for i in range(0, len(names), 50):
        d = api({
            "action": "query", "prop": "revisions", "rvslots": "main", "rvprop": "content",
            "titles": "|".join(names[i:i + 50]), "format": "json", "formatversion": "2",
        })
        for p in d.get("query", {}).get("pages", []):
            revs = p.get("revisions") or []
            if not revs:
                continue
            wt = revs[0]["slots"]["main"]["content"]
            m = re.search(r"\|\s*编号\s*=\s*([0-9A-Za-z\-]+)", wt)
            if m:
                ids[html.unescape(p["title"])] = m.group(1).strip()
        print(f"  {min(i + 50, len(names))}/{len(names)}", flush=True)
    for s in ships:
        s["i"] = ids.get(s["n"], "")

    # 3. 立绘（File: 会被规范化成 文件:，两种前缀都要剥）
    print("[3/4] 原始立绘", flush=True)
    arts = {}
    titles = [f"File:{n}立绘.jpg" for n in names]
    for i in range(0, len(titles), 50):
        d = api({
            "action": "query", "titles": "|".join(titles[i:i + 50]), "prop": "imageinfo",
            "iiprop": "url", "iiurlwidth": "440", "format": "json", "formatversion": "2",
        })
        for p in d.get("query", {}).get("pages", []):
            ii = p.get("imageinfo")
            if not ii:
                continue
            nm = re.sub(r"^(File|文件):", "", p["title"])
            arts[re.sub(r"立绘\.jpg$", "", nm)] = ii[0].get("thumburl") or ii[0]["url"]
        print(f"  {min(i + 50, len(names))}/{len(names)}", flush=True)

    # 3.5 改造 / 誓约 立绘
    print("[3.5/4] 改造与誓约立绘", flush=True)
    extra_art = {"改造": {}, "誓约": {}}
    for kind in ("改造", "誓约"):
        titles = [f"File:{n}{kind}.jpg" for n in names]
        for i in range(0, len(titles), 50):
            d = api({
                "action": "query", "titles": "|".join(titles[i:i + 50]), "prop": "imageinfo",
                "iiprop": "url", "iiurlwidth": "700", "format": "json", "formatversion": "2",
            })
            for p in d.get("query", {}).get("pages", []):
                ii = p.get("imageinfo")
                if not ii:
                    continue
                nm = re.sub(r"^(File|文件):", "", p["title"])
                nm = re.sub(f"{kind}\\.jpg$", "", nm)
                extra_art[kind][nm] = ii[0].get("thumburl") or ii[0]["url"]
        print(f"  {kind} {len(extra_art[kind])} 张", flush=True)

    # 4. 换装
    print("[4/4] 换装", flush=True)
    wiki = cached("skins.wiki", "https://wiki.biligame.com/blhx/index.php?title="
                  + urllib.parse.quote("换装图鉴/旧版") + "&action=raw", use_cache)
    page = cached("skins.html", "https://wiki.biligame.com/blhx/" + urllib.parse.quote("换装图鉴/旧版"), use_cache)
    imgs = {}
    for alt, src in re.findall(r'<img[^>]*alt="([^"]*)"[^>]*src="(https://patchwiki[^"]+)"', page):
        imgs[urllib.parse.unquote(alt)] = src

    skins = []
    for row in re.findall(r"\{\{换装图鉴列表\|(.+?)\}\}", wiki):
        p = [x.strip() for x in row.split("|")]
        if len(p) < 14:
            continue
        ship, _stype, _fac, name, seq, theme, price, _src, _diff, l2d, _bg, _pend, _note, date = p[:14]
        fname = f"{ship}{seq}.jpg"
        img = imgs.get(fname)
        if not img:
            continue
        skins.append({
            "s": ship,
            "n": name,
            "_seq": seq,
            "k": "L2D" if l2d.strip("\\") else "静态",
            "th": theme.strip("\\"),
            "y": date[:4] if date[:4].isdigit() else "",
            "d": date,
            "p": price.strip("\\"),
            "i": img,
        })
    # 页面里是 250px 缩略图，换成能取到的最大尺寸（原图不足 700px 时 wiki 会直接给原图）
    print("  取高清图", flush=True)
    uniq = sorted({f"{k['s']}{k['_seq']}.jpg" for k in skins})
    hd = {}
    for i in range(0, len(uniq), 50):
        d = api({
            "action": "query", "titles": "|".join(f"File:{f}" for f in uniq[i:i + 50]),
            "prop": "imageinfo", "iiprop": "url", "iiurlwidth": "700",
            "format": "json", "formatversion": "2",
        })
        for p in d.get("query", {}).get("pages", []):
            ii = p.get("imageinfo")
            if not ii:
                continue
            nm = re.sub(r"^(File|文件):", "", p["title"])
            hd[nm] = ii[0].get("thumburl") or ii[0]["url"]
        if i % 300 == 0:
            print(f"    {i}/{len(uniq)}", flush=True)
    for k in skins:
        k["i"] = hd.get(f"{k['s']}{k['_seq']}.jpg", k["i"])
    for k in skins:
        k.pop("_seq", None)
    print(f"  {len(skins)} 套", flush=True)

    # 5. 科技点 / 复制人（来自 blhx-power，缺了就留空）
    power = {}
    if POWER.exists():
        for s in json.loads(POWER.read_text(encoding="utf-8")):
            t = s.get("tech") or {}
            for k in {s.get("cn"), s.get("name")}:
                if k:
                    power[k] = {
                        "u": t.get("unlock", 0), "m": t.get("maxstar", 0), "l": t.get("lv120", 0),
                        "ub": (t.get("unlock_bonus") or "").strip(),
                        "lb": (t.get("lv120_bonus") or "").strip(),
                        "cp": s.get("copies") or 0,
                        "rt": bool(s.get("retrofit")),
                    }

    # 分组
    def group(s):
        if s["f"] == "META":
            return "META"
        if s["r"] in ("最高方案", "决战方案"):
            return "方案"
        if s["f"] in LINK:
            return "联动"
        if s["n"].endswith("改"):
            return "改造"
        if s["n"].startswith(("泛用型布里", "试作型布里", "特装型布里")):
            return "特殊"
        return "常规"

    detail = {}
    for s in ships:
        s["g"] = group(s)
        p = power.get(s["n"]) or {}
        detail[s["n"]] = {
            "art": arts.get(s["n"], ""),
            "refit": extra_art["改造"].get(s["n"], ""),
            "oath": extra_art["誓约"].get(s["n"], ""),
            "tch": {"u": p["u"], "m": p["m"], "l": p["l"], "ub": p["ub"], "lb": p["lb"]} if p else None,
            "cp": p.get("cp", 0),
            "rt": p.get("rt", False),
        }

    # 合并「X改」：可改造船只保留一条，按改造形态显示（稀有度/头像用改造后的）
    names_set = {s["n"] for s in ships}
    pairs = {n[:-1]: n for n in names_set if n.endswith("改") and n[:-1] in names_set}
    by_name = {s["n"]: s for s in ships}
    for base, alt in pairs.items():
        b, a = by_name.get(base), by_name.get(alt)
        if not b or not a:
            continue
        b["r"] = a["r"]
        b["av"] = a["av"] or b["av"]
        b["g"] = "改造"
        rec = detail.setdefault(base, {})
        rec["rt"] = True
        if not rec.get("art"):
            rec["art"] = detail.get(alt, {}).get("art", "")
        for k in skins:
            if k["s"] == alt:
                k["s"] = base
    ships = [s for s in ships if s["n"] not in set(pairs.values())]
    for n in pairs.values():
        detail.pop(n, None)
    print(f"  合并改造 {len(pairs)} 对", flush=True)

    order = {f: i for i, f in enumerate(CORE + LINK)}
    ships.sort(key=lambda s: (order.get(s["f"], 99),
                              int(s["i"]) if s["i"].isdigit() else 9999, s["n"]))

    def dump(name, obj):
        path = OUT / name
        path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"  {name}  {path.stat().st_size // 1024} KB", flush=True)

    dump("ships.json", ships)
    dump("detail.json", detail)
    dump("skins.json", skins)
    print(f"完成：船 {len(ships)}（有编号 {sum(1 for s in ships if s['i'])}），"
          f"换装 {len(skins)}，有立绘 {sum(1 for v in detail.values() if v['art'])}", flush=True)


if __name__ == "__main__":
    main()
