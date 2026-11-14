---
title: "喵喵学习小助手"
slug: meow-politics-helper
published: 2026-11-14
order: 10
description: "福大政治课选择题的本地刷题工具：Go 后端 + Vue 3 前端，内置毛概、习概题库，也能自己加。"
image: "images/meow-cover.jpg"
status: "published"
tags:
  - Go
  - Vue 3
  - Naive UI
  - 单文件部署
link:
  - label: "GitHub"
    icon: "fa7-brands:github"
    value: "https://github.com/ShaddockNH3/Meow-Politics-Helper"
  - label: "下载"
    icon: "material-symbols:download"
    value: "https://github.com/ShaddockNH3/Meow-Politics-Helper/releases"
---

## 这是什么

福州大学政治课选择题的本地刷题工具。双击一个可执行文件就能用，题库、错题、设置全存在本机，不联网、不上传。

内置毛概和习概两门课，也可以自己建课程和章节。

## 三种模式

- 速刷：只出题干和选项，答完立刻下一题，适合考前过一遍
- 答题：完整进度和跳题面板，逐题看
- 错题回顾：只刷错过的，按课程分开记，不会混在一起

![答题页](/projects/meow-quiz.png)

## 技术栈

- 后端 Go 1.24 + Hertz，前端打包后 `go:embed` 进二进制
- 前端 Vue 3 + Vite + Naive UI，图标用 lucide
- `make build` 的顺序是先 `npm run build` 出 `web/dist`，再 `go build`，所以发布物就是一个文件

Windows 是 exe，macOS / Linux 下是 zip。

## 加题库不用改代码

在 `clean_outputs/` 下新建一个目录，塞 `0.json`、`1.json`……（每个文件是题目数组），再放一个 `meta.json` 写 `key` / `name`，启动时自动发现并加载。
