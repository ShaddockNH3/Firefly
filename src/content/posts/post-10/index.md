---
title: 基于 Telegraph 的图床配置
published: 2026-10-11
description: 基于 telegraph-Image 的图床配置与排杂
tags: [图床，Telegraph, Cloudflare, 教程，踩坑记录]
image: ./cover.png
category: Guide
draft: true
---

## 前言

首先进入 Github

https://github.com/x-dr/telegraph-Image

无限图片储存数量，你可以上传不限数量的图片

无需购买服务器，托管于 Cloudflare 的网络上，当使用量不超过 Cloudflare 的免费额度时，完全免费

## CloudFlare 配置

### worker 配置

### 建立 R1 数据库

使用大写，而不是小写，否则会出问题。

### 绑定域名

## Telegram 配置

自建一个 Telegram 群，

### Telegram Bot

向 Bot Father 申请一个。

### 回到 CloudFlare 上配置

### 绑定

至此，图床链路已经打通，可以通过拖拽上传的方式来尝试链接

## 本机配置

### 基于 Picgo

### 基于 Mac 快捷指令

```zsh
IMAGE_PATH="$1"

RESP=$(curl -s -F "file=@$IMAGE_PATH" https://img.attilio.cc/api/enableauthapi/tgchannel)

IMG_URL=$(echo "$RESP" | sed -n 's/.*"url"[ ]*:[ ]*"\([^"]*\)".*/\1/p' | sed 's/\\//g')

if [ -n "$IMG_URL" ]; then
    printf "![]($IMG_URL)" | pbcopy
    osascript -e 'display notification "已转为 Markdown！直接 Cmd+V 粘贴" with title "上传成功"'
else
    osascript -e "display alert \"上传失败，接口返回:\" message \"$RESP\""
fi
```

## 结语
