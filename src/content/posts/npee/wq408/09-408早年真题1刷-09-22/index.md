---
title: 408 早年真题 1 刷（09-22）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 408 早年真题 1 刷（09-22）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.09
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 408 早年真题 1 刷（09-22）

- 完成时间：20260824-20261003
- 平均分：
- 平均作答时间：

### 408 真题 2009

- 完成时间：20260827
- 分数：147
  - 计网：-3
- 时间：135

![47 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAd1qx3K_-wABGUe1v-ElbZ3cCnwUNQQAAocQaxs_wThWNn0zLs4YUFUBAAMCAAN4AAM9BA)

![47 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAd5qx3LUsOyvPuwIVOpUqBZ3CwlymAACiBBrGz_BOFZrfvan7j3GCQEAAwIAA3gAAz0E)

路由与路由聚合

对于本网络，收到了丢弃即可，但是接口仍然要写上（-2）且对于第 3 问，只写了路由聚合，但是没有写具体的完整路由（-1）

### 408 真题 2010

- 完成时间：20260828
- 分数：135
  - 选择题：-4
  - 操作系统：-4-2
  - 计网：-5
- 时间：150

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA19qyOvKVsnZ2lvJdb_jcixgxh3dQAACOhNrG6T-SFYg7Mz5fomlpQEAAwIAA3gAAz0E)

排序算法（快排）

快排是看初始的序列，初始序列接近有序，那么会有问题，也就是说先划分后递归，所以递归并不是性能平静

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2RqyO3IDblSadfxSd8cmOekYJEGoAACehNrG6T-SFZkKZmxQ6OzaQEAAwIAA3kAAz0E)

数据类型转换

int->float->double 相关的问题，以及阶码溢出问题。需要注意的是，float 转 int 并不是直接改解释，而是需要进行实质性转换的

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5BqyejV58wmvCWSj8ZZzGHxSzYebQACsBFrG6T-UFZUyd-IXyf5ZQEAAwIAA3gAAz0E)

操作系统 1 磁盘以及磁盘相关的计算

磁盘的时延为：队伍处理 + 寻道 + 寻盘片。对于这道题，可能是略不严谨，这道题真正应该表述为 C-LOOK，不过也能做。我这道题忽略了两个地方，第一是没看题，请求队列那里需要时延（-1），第二是低级错误，0.5/100 然后单位竟然写成了 500ms（-1）。对于第二问，我写了优先级，答案是先来先服务，我的想法是除非一次性来非常多，不然基本都是先来先服务，这个不是很能理解，可能是低优先级饥饿，而且读取时间其实很短，即便优先级更紧急，也不会影响到太多的时间，而且优先级还更麻烦（-2）

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5Fqyejqot5jRqPRL335QaLO7OXV5wACsRFrG6T-UFaRqF_HHJHadAEAAwIAA3kAAz0E)

操作系统 2 页表的低级错误
  
没有转换成二进制，而是直接 7 写进去了（-2）

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5Jqyej-eycddQdOAzED_JCCVbKPLAACshFrG6T-UFaAkCUTVxJgRQEAAwIAA3gAAz0E)

数据传输率/信道利用率

数据传输率和信道利用率是两码事，这道题计算成了信道利用率，而不是数据传输率。（-5）

### 408 真题 2011

- 完成时间：20260830
- 分数：139
  - 选择题：-6
  - 算法：-1
  - 操作系统 PV：-3
  - 计网：-5
- 时间：/

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5VqygM_NWC0xHXM_R1DTZUe0n4XwwACtRFrG364UVZK5WJoS8FuYAEAAwIAA3kAAz0E)

关于队列 f 和 r 的推到

记反了，应该是 f 和 r 指向已经插入了第一个元素，然后 r 回退，而不是 f 回退

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5dqygT0fcBW1mThPoIMON-25XBUpAACvBFrG364UVaas4JYRKgKQQEAAwIAA3kAAz0E)

低级错误

涂卡图错了，C 涂成 D

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5tqygYHtcKWOY7frf-UZ9eXB0uklQACwRFrG364UVagSdGQGc6GiwEAAwIAA3gAAz0E)

简单路径的概念

简单路径指的是不包含重复自己的路径

算法，非最优解问题不大，-1。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Bqyi4kpHcYlq-alrbRVGgpvLsmJwAC2RJrG364UVbEmEJ2Al8-jQEAAwIAA3kAAz0E)

题意理解错误

这道题的最后一问意思是问怎么判断，数字电路那块，而不是直接说利用 OF（-1）

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Nqyi9u9iFh6s6Dq9rtJS_sWefwWQAC3xJrG364UVZDG8subEEaYQEAAwIAA3kAAz0E)

PV 操作

seat 释放错误（-1），也好像对 service 值理解错误（-2）

### 408 真题 2012

- 完成时间：20260830
- 分数：136
  - 选择题：-6
  - 操作系统：-7
  - 计网：-1
- 时间：150

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9xqy113N8DT-Oe3VxnOzS9a-FdhEAACKxVrG364YVaIAAGJAbnbZGwBAAMCAAN4AAM9BA)

地址总线，数据总线与控制总线

凡是“寄存器里的内容”、“按字节/字编码的信息”，统统是数据，必须走数据总线，凡是“单根专用引脚电平”、“离散的时序/握手触发脉冲”，才走控制总线

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_hqy2xj3TjkRtVANTKz_5yn1eAHGQACrhVrG364YVY6jE36daR5XAEAAwIAA3kAAz0E)

open 与 read 的具体流程

open 的参数是 pathname，打开方式（只读/只写，追加）以及权限掩码；read 的参数是 open 返回的文件描述符，buf 用户空间指针以及 count 期望读取的字节数。并且 open 和 read 都要变成内核态才能操作（其实想一下，read 本质也是搬文件）

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBANqy3CdLoFff_uhsvn010RVRKh2JQACvRVrG364YVaUHBmNcU9LfgEAAwIAA3kAAz0E)

网络地址/子网掩码

这道题属于低级错误，广播地址应该是全 1，而不是突然一下 0 然后后面 255

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAZqy3F-eEgvEO5VDftVkX8_1ZLdVAACwBVrG364YVYB-1VLlLWHRwEAAwIAA3kAAz0E)

cache 数据率，K 在不同体系下的含义，为什么 DMA 优先

总次数乘上交换的块的大小就是数据率，不需要考虑 4B（-2）。K 在本题含义是 1024，而不是 1000（-1）。DMA 优先级更高的原因是会导致 IO 数据丢失（-1）

这道题二刷依旧云里雾里，需要三刷。

![44 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDtqzPw8L_L0Pc-zkmfbjLdBYGOdDQAC4RJrG8y1YVZCks5whA2g-gEAAwIAA3kAAz0E)

![44 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDxqzPxWZ-1qz1A6WLmk6QH1oYH9cAAC4hJrG8y1YVbEh6-ge9TmzgEAAwIAA3kAAz0E)

低级错误

这道题其实想到了空哪，然后忘记放上去了（-3）一定要回来检查 + 想清楚谁是谁，谁在谁的后面等

[47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBApqy3HTO_bGLwoK0HUYuAoAAd_2db8AAscVaxt-uGFWaEDXb9PhXzIBAAMCAAN5AAM9BA)

（注意，题目的报文 3 的第二行，50f0,4380H 扫描错误，应该是 5010,4380H）

ttl 与路由器跳数，以及 16 进制

首先需要说明的是 16 进制问题，16 进制减法和 10 进制减法并不一样（借位得到的东西应该是 16，而不是 10。然后是 ttl 与跳数相关的问题，假设一开始是 10，到我手上是 5，那么经过了 10-5，为什么？是因为到我手上的时候，跳数并不会 -1。所以如果一开始是 10，那么发送方是 10，路由器 1 即将发送的时候是 9，路由器 2 即将发送的时候是 8，以此类推，路由器 5 即将发送的时候是 5，所以到手上的时候，我不需要转发，所以就是 5（-1）

### 408 真题 2013

- 完成时间：20260903
- 分数：144
  - 计组：-6
- 时间：/

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDJqzMoiaOGZSiWTN8X1NCgZ2IMdfQACbhJrG8y1YVb6RCZwjakFEwEAAwIAA3kAAz0E)

IO 相关

漏了存储周期，启动一次总线，也就是送首地址 5ns，准备数据 40ns，发数据 8×5ns；

![44 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDNqzM87yCNB4etJ2otmkU7hMvryIQAChRJrG8y1YVZbhXp_miFE6QEAAwIAA3kAAz0E)

![44 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDRqzM9USyt4r-ecZRGXGl9_HonRugAChhJrG8y1YVaqCd4UB6zvdAEAAwIAA3gAAz0E)

指令相关，低级错误

200CH+FFC8H，而不是+C8H，这个需要尤其注意（-2），另外，注意指令寄存器（被多路选择器误导了（-1）

### 408 真题 2014

- 完成时间：20260905
- 分数：126
  - 选择题：-14
  - 数据结构：-1
  - 计组：-6
  - 操作系统：-3
- 时间：/

不对，感觉很不对，今天的数学卷子也做得不好。这份卷子选择题错太多了，而且都是比较低级的错误。感觉是最近状态有点不好？不，是没有集中注意力的原因。这份卷子我在做的时候甚至觉得很简单，那么为什么会导致这样呢？我认为是过度轻视以及没有检查。一定要检查，包括今天数学也是，没有检查。但是更本质的问题是没有紧张起来当真正的模拟。

还可以注意一下解题问题，这份卷子解题顺序十分随意，而且有没有认真思考每一个选项过去。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBENqzbuf7F2kR9PmGIIaORAt4bpRYgAC3RBrG8y1aVb6cakE8pl4cAEAAwIAA3kAAz0E)

语文阅读理解

阅读理解出了问题，这道题的意思是说，DRAM 的引脚总数，而不是说是整个地址的总数

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEVqzb_Qt3WWkcTxmP7hqnPzaMPlxAAC3xBrG8y1aVbv033cvIbGeAEAAwIAA3kAAz0E)

关于 offset 的理解

offset 存的时候只存本身，没有存 + “1”或者编码

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEtqzcRck5pcK3-Y9OrLuLtaIJXW6QAC7RBrG8y1aVavaX7hCapq1QEAAwIAA3kAAz0E)

语文阅读理解

阅读理解出了问题，响应和中断加起来共 100ns，而不是分别 100ns

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFBqzc57Beq0HYfBDpsy7pxZAoyKgAACAhFrG8y1aVbiPw6tFYKG9gEAAwIAA3kAAz0E)

语文阅读理解

并且这道题还没算完

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFZqzdP24PMAAccYiR8NdmWzCwPthQMAAhsRaxvMtWlWrUN-dmVd5jQBAAMCAAN4AAM9BA)

语文阅读理解

为会话层提供服务，而不是会话层为谁提供服务

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFhqzdUjiEwI7H4K0TUBfhL9_oaBvQACHhFrG8y1aVZWlmJCFVhPsgEAAwIAA3gAAz0E)

属于低级错误

被“背诵”的答案影响了

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBF1qzdmpnTNzbnxXWn1H5V3s_psxHQACLRFrG8y1aVar7Rxz6_isNAEAAwIAA3gAAz0E)

想当然

题目没读完

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBF9qzdxY0FAYN8NIXAzdvb6vWqh4ggACMxFrG8y1aVagSf4LIiDfRgEAAwIAA3kAAz0E)

低级错误

多 + 了一个 1（-1）

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGFqzdyJjH7dJzHo7O3oguX1vSR45wACNRFrG8y1aVZaXV8Pu59g_wEAAwIAA3kAAz0E)

对于指令的分析不准确，回滚回去没分析出来（-1）。

这个具体可以看二刷的时候，分析的比较明白。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGJqzdyjU1KaJ-FAdOK_Ze4-I7I42QACNhFrG8y1aVbJ9-DwdOVcSAEAAwIAA3kAAz0E)

cache 想当然以及对指令的理解

对于 cache，没有考虑指令 cache；对于指令部分，则是忽略了题干中所说的，指令已经在内存了，所以不会缺页。此外，这里的寄存器 5 位指的是寄存器编号有 5 位，而不是数据本身（-5）

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGNqzdy1xitqurSeBvDd4IszLPvCrwACNxFrG8y1aVbq_wceCXBTnAEAAwIAA3kAAz0E)

文件相关以及题目没写完

对这块的分析还是不对（链式分配答案对了但是分析是错的）对于直接插入，先读写移动 29 次，最后插入自己。对于链式，先读 29 次，插入自己后修改第 29 的指针，所以是 29+1+1。（-1）对于最后一问，没搞懂怎么看。其实很简单啊，由于总共是 4B，所以有 32 位，最多是 2^32 个，然后再乘上大小就好了（-2）

### 408 真题 2015

- 完成时间：20260905
- 分数：147
  - 选择题：-2
  - 计组：-1
- 时间：150

果然还是定时 + 集中注意力好用

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJlqzy5Xx-r5lBy6CQchzvTNDpiZEwACFhNrG7fmeVY7BlNlkbq-QgEAAwIAA3kAAz0E)

kmp 算法

遗忘以及轻视

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWxq2IrGPGUxgz7tGzl7WpBjmiESygAC9RNrG89ByVZkp7GfOjOjDwEAAwIAA3gAAz0E)

背答案

没有实质性分析（-1），写快了

### 408 真题 2016

- 完成时间：20260906
- 分数：122
  - 选择题：-14
  - DS：-2
  - 计组：-4
  - OS：-3
  - 计组：-5
- 时间：150

今天卷子也不对啊，为什么呢。感觉对于一些模型还是不够熟悉，理解还是不够深刻

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdNq3GW1MwdEXoqATxHNNaol4Kl7gAAClhBrG2MQ4Fbky8F0sJ6ujAEAAwIAA3cAAz0E)

拓扑排序

考研范围内的拓扑排序，如果对于邻接表的话，是先遍历一次（花费 e 的时间）然后开一个辅助数组存储

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0dq0ekMVIwn5TweD8qq_d8eJ7NEhQACrxBrG6jnkFYeR-ggmXeKPAEAAwIAA3kAAz0E)

PC 与指令的关系

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Nq0ffvuKkpYgr0Rf3Pxoj_q0zW1wACPBtrG-BrkFY0rRwWdOPt7wEAAwIAA3gAAz0E)

对线程与进程的理解

不同进程之间是单独的，但是同一个进程的线程是需要需要互斥访问的

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Rq0fh82X5peOV37CoC0ygWeNVjlwACPhtrG-BrkFZZVu7OG9oNugEAAwIAA3gAAz0E)

spooling 技术相关的背书

思考极端情况对于内存的影响

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Vq0fjI153pzhYtiN5Lmh9FtMSZzwACPxtrG-BrkFZjdGyOCduh3AEAAwIAA3gAAz0E)

管程相关的背书

其实也有和读者写者问题的理解

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdpq3IwgVd0PwNCl_AXLiBMwh5-akQAC6hFrG2MQ4FZ9E1lpAuA_qwEAAwIAA3cAAz0E)

第 36 题

一来一回

第 40 题

dns 解析

迭代查询本地域名服务器需要如何解析，www.abc.def.com，首先访问。得到顶级域名服务器.com，然后访问.com 得到 def.com，然后访问 def.com 得到 abc.def.com，然后访问 abc.def.com 得到 ip 地址

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdtq3Iw_G27aNbjxd-wYovOM3I0K-gAC6xFrG2MQ4FZfDf0ey4EXvgEAAwIAA3cAAz0E)

（-5，问题很大）

首先是辨析，这道题是基于 tcp 连接之后的，我认为有点歧义，不过暂且就这么做，这三分算是语文理解问题。第 8 个确认段到了之后，应该接收窗口是 12，拥塞窗口变为 9，窗口是 9（-3）而对于第 3 题就不应该了，辨析 mss 和具体序号（-1）。最后过一遍第 4 问（-1），第四问是记错了，服务端一定是要等到接收到 ack 之后才关

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdhq3HFAGxllTAnn6wHr4Zw4k91qPQACqRFrG2MQ4FaxjFHHSexJLAEAAwIAA3cAAz0E)

不会最优解

（-2），问题不大

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdxq3JMGoQ8lSkj8fOXC0OtUObPCWAACBxJrG2MQ4Faoc4NlJUVUxQEAAwIAA3cAAz0E)

中断和设备相关

最后 20 个时钟周期不需要+，因为那个是用来发送的（-1），CPU 在中断做了什么，背书不会（-2）

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCd5q3JmYugELorx6bLbr_2y0UQjeRQACdBBrG2MQ6FbopkgDafg2-AEAAwIAA3cAAz0E)

辨析块号与真实的号

（-2），属于细节性问题

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCd9q3JuJXTst5ykQfvsP8kKoU836IAACdRBrG2MQ6FYGrhHZ6GBi1wEAAwIAA3cAAz0E)

最大的文件以及访问簇

最大文件想错，访问的簇由于是链接存储，所以可以随机访问，所以不需要访问 100

### 408 真题 2017

- 完成时间：20260907
- 分数：143
  - 选择题：-4
  - 计组：-1
  - 计网：-2
- 时间：120

之前的卷子我认为其实并没有完全按照时间来，是随便挑的时间。加油。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAhq02Gg6cuG16SeWVk1CxCnwbGojAACJRprG-BrmFZJeHMciwP4RwEAAwIAA3gAAz0E)

边界对齐

完全没有找到分析思路，没有从边界对齐去思考

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCZq1HtdDlYwu1a3HIC0_8PrW7oZmwACJxJrG1-fqVZ208Q9zbhH_AEAAwIAA3gAAz0E)

子网相关

想到了，但是选的 512。这里有俩字，可分配，所以应该 -2。如果问的是 IP 地址总数，地址空间大小，那么不需要 -2

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCxq1IFArpySZ_5CzY2TRWC8PmhwGwACOBJrG1-fqVbGdN07QXzIkQEAAwIAA3gAAz0E)

低级错误

正数的 float 第一位是 0，而不是 1（-1）

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCC1q1IOkwY-vZ3cKPeSKg7nLawNArgACPBJrG1-fqVbu9KTUIbwepAEAAwIAA3kAAz0E)

没有捋清楚块内地址是多少位以及 LRU 意味着什么

本题 LRU 是 1 位，而不是 3 位，搞清楚 LRU 意味着什么

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDBq1Ii-GPik2qdVq31a-n4VsrhDuAACRhJrG1-fqVZoBXpqlI6r5wEAAwIAA3gAAz0E)

回退 n 帧协议

回退 n 帧协议，我发给你 R1,1 和 R1,3，那么我会把 R1,3 丢了（-2）

### 408 真题 2018

- 完成时间：20260917
- 分数：142
  - 选择题：-6
  - 计组：-2
- 时间：120

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCE9q1QU5slC8mrv3m3L3OVQRaOCF1AACshNrG1-fqVanXKCnnk4wjAEAAwIAA3gAAz0E)

操作系统多任务

并发够用了，但是更深入也可以并行

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGBq1RCk3gaVt0CwQshNYOMdnTQ7uwACxRNrG1-fqVbVcDRUxcfRWwEAAwIAA3gAAz0E)

管程

对于 A 这个表述，实际上是入口锁。对于 C，条件变量没有值这个概念

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFVq1QrOm6TtidJrN5RBKNtcA1abJAACuBNrG1-fqVZmvksiM3obIgEAAwIAA3gAAz0E)

路由聚合低级错误

想当然直接选了，没有再看到底要缩多少位

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGVq1RKgufKUelaFNbIemCFvf2JTHgACyhNrG1-fqVbMR-LjngX3FwEAAwIAA3gAAz0E)

![44 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGZq1RKyQNj42lwwVjs3Epk_eUtikwACyxNrG1-fqVZPMD1bJc8MVAEAAwIAA3gAAz0E)

没有捋清楚块内地址是多少位以及 LRU 意味着什么

本题 LRU 是 1 位，而不是 3 位，搞清楚 LRU 意味着什么

### 408 真题 2019

- 完成时间：20260917
- 分数：144
  - 选择题：-2
  - 计组：-3
  - 计网：-1
- 时间：150

这份卷子证明了检查还是很有用的。选择题检查出来了 4 个错的。但是我有点怀疑我能不能在考场上写完卷子，毕竟现在都是写做过的题，很神秘啊

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYpq2ejw0vSyMrJvD6O3xUpVRZy9vAACgxJrG89B0Vaw3EE0MjwFRgEAAwIAA3kAAz0E)

对“唤醒”理解有误

唤醒的意思是阻塞到就绪态

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeBq3ZfKiSt7jNxNs8tNufWLw7467AACnxJrG2MQ8FZg2FqSd4z8VwEAAwIAA3cAAz0E)

IO 相关

磁盘第 x 号，是从 0 开始计算的（默认）（-2）

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeNq3Z4qwAX6tp9lDIKBseP5ihvduwACphJrG2MQ8FZxpBGemm6iqwEAAwIAA3cAAz0E)

条件转移

注意条件这两个字（-1）

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeJq3ZzgRuedsb3UvTj-vdm6xjMtFQACoxJrG2MQ8FZJZ4NCwOjC1wEAAwIAA3cAAz0E)

低级错误

分析正确，然后 H3 发送，写的 H3 收（-1）

### 408 真题 2020

- 完成时间：20261001
- 分数：136
  - 选择题：-8
  - DS：-3
  - 计组：-2
  - OS：-1
- 时间：120

感觉有点不好，这份卷子选择题错了 4 个，而且我记得我这几天刷选择题的时候，有相当多的选择题掉进了 20 年的坑里。而且，这张卷子我还检查出了其他 4 道选择题，所以难以想象我当时直接做的时候会错多少个。总的来讲，一方面是确实十来天没写卷子了，另一方面是确实依旧有点分心。

可能还有一点，就是这两天晚上都在看小说，所以头有点痛。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQABatcMz6OjjhKb_kKjOT_Xuhu6sR0AAjETaxvGKrlWStcZ9jMzhUsBAAMCAAN4AAM9BA)

二叉树的顺序存储

必须得把那一行结点都存了，即便是后面没有数据

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQRq1w4CTZvySTVlxb05xfGLeahqxQACNhNrG8YquVYCHGAN5iP3yQEAAwIAA3gAAz0E)

拓扑排序

其实单纯是懒得分析导致的错误，没得说

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQhq1w_XGIuaWMoxBXjImzr5cu4ggAACPRNrG8YquVZ84o8tKkcHTAEAAwIAA3gAAz0E)

B 树的插入

属于低级错误，忘记 B 树可以有多个分叉了

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRRq1xoE8k2LDUOV2ryZfNSS7l8dcAACdRNrG8YquVY0QSdbybaouAEAAwIAA3gAAz0E)

中断相关

属于低级错误，辨析相应优先级和处理优先级，响应优先级是硬件决定的，处理优先级是中断屏蔽字决定的

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCStq1yQxexh9wbigqc8laafS4bKL2AACsBNrG8YquVbTjHbaJ7VEnwEAAwIAA3gAAz0E)

算法不会最优解

问题不大（-3）

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCS5q1zANXtg8js7epUZbZdA8Vg6YtwACBBRrG8YquVZeUkXdzO5NpgEAAwIAA3gAAz0E)

低级错误

题目要求是分析地址 2，分析的地址 1

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTBq1zBNFGf979IWmDY21rwqkRXAIAACCRRrG8YquVbW_K9UU-r8IgEAAwIAA3gAAz0E)

忽略页号

### 408 真题 2021

- 完成时间：20261002
- 分数：142
  - 选择题：-2
  - 计组：-2
  - OS：-3
  - 计网：-1
- 时间：150

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVxq2HEGKAy8Yfij08tLhjYuUebGugACqxNrG89ByVazf4yderBTewEAAwIAA3gAAz0E)

差分曼彻斯特编码

低级错误，直接想成曼彻斯特编码

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWVq2HZiz4PDV9ijo_j0FzAKSq_asgACwRNrG89ByVb_ESg_vqDRCQEAAwIAA3gAAz0E)

主存空间大小与计算错误

可寻址的主存空间大小，意思是整个空间大小，理解错了。另一个则是减法计算错误（-1-1）

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWZq2HZzdVk1U2cuXuCCJTwhRAlg_wACwhNrG89ByVajrsH4q9P_3QEAAwIAA3gAAz0E)

页表项位数

想多了（-1）

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWdq2HaEOIiAaAdehwqm7tJbrktaYgACwxNrG89ByVYBXaR2kUz9GwEAAwIAA3gAAz0E)

信号量互斥访问的原因

其实就是因为多个进程（-2）

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWlq2Ham023k0m6Gaawv5mhW0HKA6AACxRNrG89ByVYlf2rJCvcO2gEAAwIAA3gAAz0E)

链路不完整

从 DNS 到 UDP 到 IP 到 CSMA/CD，最后一个没说。（-1）

### 408 真题 2022

- 完成时间：20261003
- 分数：132
  - 选择题：-8
  - 计组：-9
  - 计网：-1
- 时间：120

检查还检查出来 2 选择题。总的来讲不应该，这张卷子暴露了我很多对模型的理解不充分，以及记忆的问题。所以复盘早年的卷子应该跟上了，这张卷子的第 43 题其实就跟 2009 年的卷子是差不多的。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZ1q2xz0i2MqTXZdVp0XZ3sNYX1qRQAClBFrG8ST2VafEyg8ZPvwygEAAwIAA3kAAz0E)

语文阅读理解

以及最后没有耐心了，这道题是不难的。这道题题面是判断定长和哈夫曼译码集的

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCb5q219RbMcS2x5GZyuLkvrG1keW0QACGRJrG8ST4VbqgkqNEgbdJwEAAwIAA3cAAz0E)

哈希表的影响方式

装填因子也影响，装填因子越大越容易

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaFq2yFFcyg_zrFXsA4T9CGAzIeokAACoBFrG8ST2VZ-k7-9_-3gjQEAAwIAA3kAAz0E)

低级错误，低级到我都不想写在这里。没看完选项直接想当然选的

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbRq21SSsRJ5yPvCIXKBxpllRvy8OAAC_xFrG8ST4VYaNCdV1Ogn3AEAAwIAA3cAAz0E)

默认网关

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWVq2HZiz4PDV9ijo_j0FzAKSq_asgACwRNrG89ByVb_ESg_vqDRCQEAAwIAA3gAAz0E)

默认网关不是给 nat 路由器，而是给最近的路由器

整道题目没理解什么意思

1，第二问没回答到点子上，单总线是为什么要使用暂存器的原因。2，理解错指令解析的全流程，指令通过 IR 解析给其他所有部件。3，多路选择器和地址译码器功能混淆，前者是总出 1，后者是 1 出多。4，理解错题目意思以及指令流动流程，整个流动流程应该是 PC 出来然后到 MAR，读，然后 MAR 到 IR，继而理解错后面多少个时钟周期的含义。5，没理解 CU 应该接谁，CU 解析的应该是标志，FR 不用多说，接 IR 的目的是为了看 jmp 等跳转。对于 MDR 等信号，CU 是发出者，通过总线发送即可，而 CU 需要接收 FR 等的信息来判断

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfZq3xK80UVQXQwKBPpiyDG3uSJIwAACUxhrG3KB-VaO7uI9f84BGgEAAwIAA3cAAz0E)

磁盘相关

没算扇区旋转时延，DMA 控制器对总线优先的原因没有解释清楚，应该从数据丢失的角度解释

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfRq3w8EzctYaDErh0OMGcApDoN1mQACTxhrG3KB-VaOlsBeQO6KbgEAAwIAA3cAAz0E)

CMCD/CA 协议

当前谁收，当前谁发，最开始来源于（或者最终要给谁）
