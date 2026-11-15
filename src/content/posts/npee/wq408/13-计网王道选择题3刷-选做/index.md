---
title: 计网王道选择题 3 刷（选做）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计网王道选择题 3 刷（选做）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.13
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计网王道选择题 3 刷（选做）

### 计网王道选择题 3 刷第 1 章

![1.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADEmrDVPPctcysIX-4qFgz4gyx6MQ6AALiEWsbgF8gVuLPae4swWo4AQADAgADeAADPQQ)

本题第 1 空错选为 C，最快的应该是电路交换，尽管电路交换需要时间建立连接，但是其独占了物理链路，所以时延最小。

![1.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADE2rDVw5KryW_u4DuCPSkQg-RlvMXAALlEWsbgF8gViDR_lhwNv0sAQADAgADeAADPQQ)

本题错选为 B。语义的意思是说每一个位置代表着什么，例如 ACK 含义是应答等。

![1.2.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADFGrDV0iohVpOCnXGSvkTb0EEocw_AALmEWsbgF8gVglQ5fxi3J_zAQADAgADeAADPQQ)

本题错选为 D，属于低级错误。这里是 OSI 参考模型，OSI 参考模型的网络层可以提供无连接服务和面向连接的服务，而不是传输层。

![1.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADFWrDV6CCV2z5-kjuxaItdtbp8Kr0AALnEWsbgF8gVoGtuhoyPgMLAQADAgADeAADPQQ)

会话层的作用是同步，可以理解为打断点；表示层的作用是数据格式加密，数据格式转换等。

这道题的第 3 空错选为会话层，回到本行开始的位置这件事完全就不是“网络”需要参与的，所以应该是应用层做的。

这么理解就会清晰很多。

![1.2.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADFmrDWKnR3p4ynRcguYIYeF0jxjDJAALpEWsbgF8gVlQjJSSmm9ZtAQADAgADeAADPQQ)

本题属于低级错误，没看完题目就选了。网络体系结构不需要完成的是实现细节。

### 计网王道选择题 3 刷第 2 章

![2.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADF2rDWOfwpnC57S4UqllWv-eu_SqRAALrEWsbgF8gVkFe0icr7OD_AQADAgADeAADPQQ)

本题属于低级错误，这道题没有细想 D 的意思，直接选了 C，C 属于背书错误，信号传输率指的是比特，而不是波特。

![2.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADGGrDWSKU8L3qnWCdm3ogsdqRyaK4AALsEWsbgF8gVl8zMboFTD1JAQADAgADeAADPQQ)

这两道题一起讲，上面那题是侥幸做对的。

在没有明确说一码元等于多少比特的时候，不需要考虑奈奎斯特定理，而第 12 题其实有暗示是 2 进制，所以说了，除了香农定理之外也要考虑奈奎斯特定理。

![2.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADGWrDWXDHnsfm-b42OLUYfRzdxLSKAALtEWsbgF8gVjFfER4Wx8qhAQADAgADeAADPQQ)

本题属于“背答案”，没有细想，在那里直接背答案，所以错了。

简单来讲，信号传播速度指的是信号传输率，也就是 RTT 相关，本题考虑的是发送时延。

### 计网王道选择题 3 刷第 3 章

![3.6.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADGmrDWcy1XafZX5JmdU7jxImF2OymAALvEWsbgF8gVitS53D8TVsIAQADAgADeAADPQQ)

本题属于低级错误，把错误看成选择正确的一项，然后选了 B。

![3.6.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADG2rDWf81wzZMLMutfcQkGqV0xyhNAALwEWsbgF8gVj2ELTtxU8oLAQADAgADeAADPQQ)

这道题知道 802.1q 帧需要多一个 4B 的 VLAN 位，但是把最短帧长多少，和最长帧长需求是多少搞混淆了。

对于 10Mbps 的以太网，硬性要求是最少 64B，不需要考虑其他东西，而最长数据帧是 1500B 恒定，对于 802.1 帧最长是 1518B（662n4），对于 802.1q 帧则是要多一个 4B，也就是 1522B，但是最短都是 64B。

![3.6.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADHGrDWnhtUVS1UosMeTr6SfSjXkW4AALxEWsbgF8gVhG8I9AYlAXHAQADAgADeAADPQQ)

理解向后兼容，这道题就很容易选出来 A 是对的了。

![3.6.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADHWrDWqKtz5-TBKm2bSMmG0GRtcb3AALyEWsbgF8gVuiCW214hdaJAQADAgADeAADPQQ)

有点忘了 CSMA/CA 协议以及其帧，回顾一下。

CSMA/CA 协议是先等待 DIFS 的帧间间隔，然后再进行一系列操作，所以 A 肯定是错的，这道题经典没看完所有选项就选了。

然后对于后面一题，很显然是忘记了。

SIFS 是短帧间间隔，DIFS 是分隔每个会话的相当于，所以最后的长度应该是 SIFS < PIFS < DIFS，再不济也应该读题。

![3.6.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADHmrDWzLaVkX-mF_eJNOkrVkAATMaQgAC9RFrG4BfIFa-mJYNx2mALQEAAwIAA3gAAz0E)

这道题是纯粹的脑子抽了，依旧赶进度没仔细看题，能选出来按照用户名划分。

![3.7.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADH2rDW232JLafPlfzcaeb9HbYd8JAAAL2EWsbgF8gVjDKgU7PPkIQAQADAgADeAADPQQ)

本题错选为 D，主要是没有认真思考导致的。显然广域网采用点对点技术，而局域网一般采用 CSMA/CD 等方式。提供的服务都是转发数据，没什么区别，只不过一个数据量大一个数据量比前者而言相对小而已。

![3.7.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADIGrDXc8LrGm_hvmSjpLCSWRFKJgDAAL8EWsbgF8gVhqp06h3tB1oAQADAgADeAADPQQ)

背书题，错选为 B，PPP 协议是先 LCP 然后再 NCP，前者是配置数据链路选项协议，后者是配置网络层协议。

### 计网王道选择题 3 刷第 4 章

![4.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADIWrDXn0N5JQkGE0J7UiWAvslqlAhAAL-EWsbgF8gVuD9iPTr7xtdAQADAgADeAADPQQ)

属于低级错误，很显然这道题没看清楚 D 选项，不可能存在 256。

![4.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADImrDXx0jWFP3r16AmlPfNbenVFpAAAICEmsbgF8gVj9Csm9OvtCfAQADAgADeAADPQQ)

属于低级错误，把 IP 划分为子网显然减少了网络数量（因为需要额外的网络号和广播号）。一个子网内如果没配置 VLAN 的话，是一整个广播域。

![4.2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADI2rDX3VHDVxCX21VwhBoErAyBdPXAAIDEmsbgF8gVrpcL0Q95bsTAQADAgADeAADPQQ)

属于低级错误，CIDR 是路由聚合技术，显然不是 B。

![4.2.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADJGrDX6sYBcMNcrloDD3pcvsWcXHtAAIEEmsbgF8gVr-tHnOGlrNxAQADAgADeAADPQQ)

属于低级错误，没看到最前面的 12 和 13。

![4.2.43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADJWrDYCNxj7tTPXN_nU6Ho3DGbn_iAAIGEmsbgF8gVnEPpzw7ZhxvAQADAgADeAADPQQ)

我其实不知道这道题为什么做错了，子网掩码为 255.255.240.0，显然中间是 1111,0000，因为 240=255-15。对于甲，也就是 211.71.136.23，其第 3 组数是 1000,1000；对于乙，也就是 211.71.130.25，其第 3 组数是 1000,0010。显然这两个第三组数的前 4 位数是一样的，所以在同一个子网内，所以通过 ARP 协议拿到乙的 mac 地址之后然后直接转发。

![4.2.47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADJmrDYQ12BJnQuQ8WIWaiR0bG0BkDAAIHEmsbgF8gVu9xJve4GuJqAQADAgADeAADPQQ)

这道题错选为 B，混淆了 ICMP 差错报文发送条件。对于 TCP/IP 协议族的网络层，有差错校验的功能（没有差错控制），假设有数据错了，直接丢弃等待计时器归零重传即可。但是对于 TTL，当路由器发现 TTL=1 时，TTL-1 后，发现 TTL=0，所以直接丢弃，这时候是需要发送时间超过报文的。

![4.2.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADJ2rDY-bOXYeWTgGZnTXfT5ZiDxIeAAIOEmsbgF8gVgtS-O_Pq_lWAQADAgADeAADPQQ)

这道题错选为 B，知道 C 是对的，怎么可能会不选 A，所以很猎奇，也不知道自己那个时候怎么想的。

![4.2.54](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADKGrDZBYWX33k5NLn7XiOOVsNtmWJAAIPEmsbgF8gVtRxAmggO-GjAQADAgADeAADPQQ)

属于低级错误，77=64+13 而不是 +11。

![4.2.68](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADKWrDZDyqATnKYxU--njsi3PV3OLnAAIQEmsbgF8gVpQlQmtr7Z2HAQADAgADeAADPQQ)

理解错题目意思了，题目里已经给了 /27，那就直接按照 /27 来算，所以应该选 D 而不是 B。

![4.4.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADKmrDZIX_32LDW92kHzKDyeUTITleAAIREmsbgF8gVhCLyn_625hcAQADAgADeAADPQQ)

属于背书题。

OSPF 协议使用 Hello 报文问候，使用 DD 报文查询数据库，使用 LSU 报文链路状态更新，使用 LSR 报文向邻居请求某些链路的状态信息。

而 BGP 协议才是通过 OPEN 报文问候，Update 报文更新，keepalive 和 notification 就不多说了。

### 计网王道选择题 3 刷第 5 章

![5.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADK2rDZdUs_GI2WK2AAoubzMW4rDOVAAISEmsbgF8gVq0JEDbtVLUrAQADAgADeAADPQQ)

对于第 14 题，再次辨析一下 ——

- 重传计时器：这个不必多说，指的是一段时间内没收到 ACK 激活
- 保活计时器：指的是建立 TCP 连接之后，长时间没有任何通信，发送问对方是否要持续
- 时间等待计时器：指的是客户端在收到服务端发来的最后一次 ack 后，等待 2MSL 时间
- 持续计时器：指的是窗口为 0 的时候探测

对于第 15 题没看懂题目意思，同时其实对 TCP 的理解依旧不够深刻。

TCP 的序号字段一个需要就代表 1B，而不是需要考虑首部等东西。

所以由 2^32B/40Gbps 即可得到答案（因为题目里说充分利用，所以不考虑首部）

![5.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADLGrDaBzXMOESqfsCygdGcb3LiIW-AAIgEmsbgF8gVoxgiq1q6zpCAQADAgADeAADPQQ)

这道题值得辨析。

对于 TCP 建立阶段，客户端消耗一个 seq 建立连接，同时服务端也要消耗一个 seq 来回复 ack。对于这道题，也就是 seq=211 的时候，不发送数据，而 seq=212 的时候，才携带第一个数据。

对于最后阶段，客户端得消耗一个 seq，发送 fin 给服务端，服务端回复一个 ack 后再自己发自己的，最后服务端不发了，给客户端发一条信息，客户端收到这条信息之后，进行第 4 次挥手，注意，由于消耗了一个 seq，所以最后得用倒数第二个的 seq+1 进行发送（尽管不携带信息，理论上不消耗 seq，假设后续还有数据，那么从这个 seq+1 开始）。

所以，由于最终 seq 是 985，所以第一次挥手是 984，所以有数据的最后一个是 983。

综上所述，最后答案是 983-212+1=772。

![5.3.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADLWrDaXCG471C9kHJUcO7RR4mbi5pAAIkEmsbgF8gVtrldSBkwFZfAQADAgADeAADPQQ)

属于低级错误，错选为 D，不多解释了。

![5.3.54](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADLmrDaZUGsKsc-BxgS0KM1L2ALKsGAAIlEmsbgF8gVgbHYOLYvKrXAQADAgADeAADPQQ)

辨析一下这几个时间点是什么。

对于四次挥手，客户端第一次挥手进入的等待时间叫 fin_wait_1，服务端收到 fin 后直到它发完数据的时间，啥也不是；客户端收到服务端的 ack 之后（也就是第二次挥手），等待的时间叫 fin_wait_2，服务端发完所有数据后，第三次挥手，服务端进入 close_wait 阶段，而客户端收到这个信息，等待最后 2msl 的时间，叫做 time_wait 阶段。

![5.3.59](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADL2rDajpiX0Qg0CdKRJxX0KR910LzAAImEmsbgF8gVhASpAS2_THmAQADAgADeAADPQQ)

这道题也值得研究，涉及到要不要考虑捎带 fin 的问题（本题错选为 C）

理论上，是需要考虑捎带 fin 的情况，但是这道题第二个发送数据的窗口是 2000B，如果需要捎带确认，那么需要多一个序号，而已经达到了上限 2000B，所以得额外需要一个 RTT 的时间来发送 fin。

### 计网王道选择题 3 刷第 6 章

![6.5.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADMGrDarb7uyw_9Q_B6WWUYkXThzetAAInEmsbgF8gVqTddxGR3H8oAQADAgADeAADPQQ)

属于语文阅读理解，得从 TCP 还没开始的时候算。（错选为 A）

### 计网王道选择题 3 刷 - 总结

总的来讲，为了赶进度导致很急（尤其是 3.6 和 4.2 节，都是匆匆做一遍然后也没检查，直接对的答案，做的也很赶）

对于其他的其实还行，主要问题还是集中在遗忘和概念理解上。
