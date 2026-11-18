# 腾讯文档同步说明

`fzu/overview` 这篇文章的正文**以腾讯文档的 markdown 文档为准**，仓库里的
`src/content/posts/fzu/overview/index.md` 是它的发布版本。

- 主文档：<https://docs.qq.com/markdown/DQ2d2enBXZ2ZKZmhF>（file_id `CgvzpWgfJfhE`）
- 图床文档：<https://docs.qq.com/doc/DQ1NZeWVMaFdQZFpB> —— **43 张图的实体挂在它下面，别删。**

脚本：`src/content/posts/fzu/sync-tencent-doc.py`（和 `overview/` 同级）。

## 改完文档之后

在 WorkBuddy 会话里（不能是普通终端，票是宿主注入的）：

```bash
python3 src/content/posts/fzu/sync-tencent-doc.py                  # 预览差异
python3 src/content/posts/fzu/sync-tencent-doc.py --write          # 写入 index.md
python3 src/content/posts/fzu/sync-tencent-doc.py --write --fetch-new   # 顺手把新图下进 assets/
```

`--write` 只替换正文，顶部 frontmatter（title / published / tags / category…）保留本地不动。
落盘后自己 `git add -A && git commit`。

## 图片怎么处理

腾讯文档里的图一律长这样：

```
https://docimg9.docs.qq.com/image/AgAABToPsWKCU4dNLDtKw75vhVpV_urw.png?w=1018&h=564
```

域名里的 `docimgN` 会变（docimg1 / docimg5 / docimg10…），那只是腾讯 COS 的节点编号，
不影响什么。你手贴进去的图和脚本用 API 传进去的图，存在同一个池子里，格式完全一样。

这些链接**开了防盗链**：Referer 是 `docs.qq.com` 才返回 200，博客域名和空 Referer 一律 403。
所以博客不能直接引用，脚本会下载每张图算 md5，拿 md5 去 `assets/` 里反查同内容的文件：

- 查到 → 换回 `./assets/原文件名`
- 查不到 → 留一行占位 `> 〔图：说明 —— 本地 assets 里没有，未同步〕`
  加 `--fetch-new` 才会下载进 `assets/`，文件名用内容哈希 `tx-xxxxxxxxxx.png`

## 新增图片

在腾讯文档里贴图之后，二选一：

1. 把原图放进 `src/content/posts/fzu/overview/assets/`，跑 `--write` 时按 md5 自动对上（推荐，文件名可控）
2. 什么都不放，跑 `--write --fetch-new`，脚本自己下载自己命名

## 坑

- **票只在 WorkBuddy 会话里有效。** 普通 Terminal 里跑会报「拉取失败：no_token」。
- **图床文档不能删。** 删了 43 张图在腾讯侧就没了，主文档的图全变破图。
- **markdown 文档只能读，不能写。** 这个接口对 `/markdown/` 类型没有写入能力——
  想用脚本整份覆盖，只能重新导入，而重新导入会生成**新的 `/markdown/` 地址**，
  群里、博客里发过的链接全废。所以：**内容改动在腾讯文档网页里手改**，链接就不会变。
  真要整份重导，改完记得同步更新脚本顶部的 `DOC_FILE_ID` / `DOC_URL`，以及正文里的相关链接。
- **脚本有保护**：拉回来的正文如果是空的会直接报错退出，不会把 index.md 清空。

## 换文档 / 换文章

脚本顶部 `DOC_FILE_ID`、`DOC_URL`、`POST_DIR` 三个常量，改这三行就能复用到别的文章。
