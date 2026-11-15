---
title: DS 王道选择题 3 刷（选做）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · DS 王道选择题 3 刷（选做）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.1
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## DS 王道选择题 3 刷（选做）

只写了 6-8 章，前面的感觉没必要。

### DS 王道选择题 3 刷第 6 章

![6.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjdq7xVRk2hY6_iqSSO5r6K3kZUYBgACXhZrGwnUeFfvs3zvz8xYiQEAAwIAA3gAAz0E)

这道题当然是对的，不过我突然发现了一个新的解法，那就是不再用作图法，而是用握手定理。

边的两倍=度之和。

![6.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjhq7xqWgNPsqw-FzXy3bkFrltBBMgACYRZrGwnUeFfMrRmGM2WFTwEAAwIAA3gAAz0E)

有点猎奇了，语文阅读理解：

对角线上的意思不是对角线上方，而是对角线本身。

### DS 王道选择题 3 刷第 7 章

红黑树相关先跳了（17-22）

![7.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkdq8W06lUBkaLnKL3Hr0jjtb4b-ZQACGRNrG1ziiFeRaAbYdDuSlAEAAwIAA3gAAz0E)

卡特兰数，本题本质上在问具有 5 个结点的二叉树共有多少种不同的形态。

$$
 C_n = \frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}
$$

![7.3.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkhq8W-Gza3dvH3mmhQJToZ72AhoSAACJxNrG1ziiFeS4CwF3w3xSAEAAwIAA3gAAz0E)

以下结论的遗忘。

对于平衡二叉树，则需要满足整棵树左子树和右子树高只差的绝对值小于等于 1 即可，可以注意最少结点的平衡二叉树公式，即变式的斐波那契数列。对于高为 h 的 AVL 树，和标准斐波那契数列的关系是 N(h)=F(h+2)-1。标准斐波那契数列是 0,1,1,2,3,5,8,13,21。例如对于高为 5 的平衡二叉树，其最小应该是 13-1 即 12 的高度。

![7.3.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCklq8W-67Y02-8T2wprgWwABrsChlcMAAisTaxtc4ohX6AF38ydrAd0BAAMCAAN4AAM9BA)

没实质性分析 3，直接选。

以上两题都是真题，我觉得不应该。

本章第 4 节，写着写着突然意识到——如果计算最高的话，根节点要额外按 1 算。对于 5 阶 B 树，假设结点数有 x，计算其最大的高。

这么算，除了根节点有 2 个孩子之外，其他结点都取 m/2 向上取整个孩子，记为 a 个孩子，而每个孩子至少有 a-1 个关键字。

也就是 1+2(a-1)+2a(a-1)+2a^2(a-1)+...

此外还需要辨析清楚关键字和结点的区别，以及——

![7.4.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkZq8WT6ZHFb3ECH4Lr8DoiMAAG03OMAAvoSaxtc4ohXG8OdltTUTOYBAAMCAAN4AAM9BA)

叶结点的意思是空节点。

### DS 王道选择题 3 刷第 8 章

![8.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkNq8ECoIYDxxl2rZSRkTeiRpYyGeAACSBVrG1zigFcl8McLCfvQEQEAAwIAA3gAAz0E)

![8.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkFq8D8lKve7kFyRIfEhBLOB7JOM_wACRxVrG1zigFePByrbAqHA3QEAAwIAA3gAAz0E)

这两题放在一起讲。

对于快速排序最快的情形，是每次划分都划分成长度相近的情况，这个确实忘了。

![8.6.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkRq8GGjtv7sGJnO866rMPMWS79wZQACwhVrG1zigFeMulYp9sDwMwEAAwIAA3gAAz0E)

本题没选出来（不过大概知道是 A，因为 A 的后半部分是对的。

折半插入排序每次比较次数是固定的，是 log2m，m 为已排序好的数的个数。

![8.7.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCkVq8G2UIUZFEau2hzSHTdqTJ7l0EgAC6BVrG1zigFfa92KIUn4OewEAAwIAA3gAAz0E)

本题属于有点想当然了，没仔细思考。

对于 2 我确实有点忘了，对于 4 我则没有分析。
