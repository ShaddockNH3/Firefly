---
title: 计网王道选择题 1 刷（补）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计网王道选择题 1 刷（补）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.04
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计网王道选择题 1 刷（补）

### 计网王道选择题 1 刷第 1 章

![1.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArpqyK5D9a2TEol7YRZoCh6HEXuMbwACTBJrG6T-SFYBA_72TcK6vQEAAwIAA3gAAz0E)

> 如下图所示，主机 H1 和 H2 之间有三种可选的交换方式——电路交换、报文交换和分组交换，其中电路交换建立电路连接的时间为 2s，报文交换和分组交换都要经过由一个路由器连接的链路，分组大小为 5kb。三种交换方式的数据传输速率均为 2.5kb/s，忽略所有的传播时延、分组开销和不可预料的线路延迟，下列说法中正确的是（ ）。
>
> - [图示] 图中文字：H1、H2、路由器、电路交换、报文交换和分组交换。左图标注「电路交换」，H1 与 H2 由一条链路直接相连；右图标注「报文交换和分组交换」，H1 经路由器与 H2 相连。
>
> - A. 若 H1 向 H2 发送 5kb 的数据，则电路交换最节省时间
> - B. 若 H1 向 H2 发送 500kb 的数据，则电路交换和分组交换的时间相同
> - C. 若 H1 向 H2 发送 10kb 的数据，则报文交换比分组交换更节省时间
> - D. 若 H1 向 H2 发送 15kb 的数据，则报文交换比电路交换更节省时间

本题错选为 A。

对于 A，H1 向 H2 发送 5kb 数据，使用电路交换，首先先电路连接 2s，然后传输数据 5kb/2.5kb/s=2s，总共需要 4s；使用报文交换，则需要经过两端链路，5kb/2.5kb/s=2s，2×2s=4s；使用分组交换，5kb/5kb=1 组，所以 4s，综上，A 可以说是对的，也可以说是错的。

对于 B，H1 向 H2 发送 500kb 的数据，使用电路交换，首先先电路连接 2s，然后传输数据 500kb/2.5kb/s=200s，所以总共需要 202s；使用分组交换，总共有 500kb/5kb=100 组，由于有 2 段链路，所以最后应该是 101×2s=202s。

对于 C，H1 向 H2 发送 10kb 的数据，使用报文交换，即 10kb/2.5kb/s=4s，所以总共需要 8s；使用分组交换，10kb/5kb=2 组，所以 3×2s=6s。

对于 D，H1 向 H2 发送 15kb 的数据，使用报文交换，即 15kb/2.5kb/s=6s，所以总共需要 12s；使用分组交换，15kb/5kb=3 组，所以需要 4×2s=8s。

![1.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArtqyK5gP0Thl8q6j0iL2jzZqyo1ZAACTRJrG6T-SFb896aLY-5BPQEAAwIAA3gAAz0E)

> OSI 参考模型中的实体指的是（ ）。
>
> - A. 实现各层功能的规则
> - B. 上下层之间进行交互时所要的信息
> - C. 各层中实现该层功能的软件或硬件
> - D. 同一节点中相邻两层相互作用的地方

本题错选为 A。本题为背书，实体指的是实现该层。

![1.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArxqyK56xMVU1Q_JJN1XU_BGs3DvcQACThJrG6T-SFa_WFYjQpWd4gEAAwIAA3gAAz0E)

> 负责将比特转换成电信号进行传输的层是（ ）。
>
> - A. 应用层
> - B. 网络层
> - C. 数据链路层
> - D. 物理层
>
> 下列关于 OSI 参考模型的物理层功能的描述中，错误的是（ ）。
>
> - A. 比特 0 和 1 使用何种电信号表示
> - B. 传输能否在两个方向上同时进行
> - C. 1 个比特持续多长时间
> - D. 避免快速发送方“淹没”慢速接收方

第 12 题错选为 A，为超级低级错误，脑子不知道怎么想的选的 D。

第 13 题错选为 A，对于 A，事实上是电气特性。这里辨析一下，机械特性指的是物理尺寸，电气特性指的是电压等，功能特性指的是什么线做什么，规程特性指的是时序。避免快速发送方淹没慢速接收方，指的是流量控制。

![1.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAr1qyK6X8oubL8H8LFHvgZwwPHHRXwACTxJrG6T-SFbeaRifpc1SdQEAAwIAA3gAAz0E)

> 下列能够最好地描述 OSI 参考模型的数据链路层功能的是（ ）。
>
> - A. 提供用户和网络的接口
> - B. 处理信号通过介质的传输
> - C. 控制报文通过网络的路由选择
> - D. 保证数据正确的顺序和完整性

本题错选为 A。A 是应用层的功能，需要记住，用户处在最高位；对于 B，B 是物理层的功能；对于 C，C 是网络层的功能。

![1.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAr5qyK-hTi3sV32xO0dgcDCUswJ-CQACURJrG6T-SFbEi3bJESMjhQEAAwIAA3gAAz0E)

> 在 OSI 参考模型中，提供流量控制功能的层是第（①）层；提供建立、维护和拆除端到端的连接的层是（②）；为数据分组提供在网络中路由功能的是（③）；传输层提供（④）的数据传送；为网络层实体提供数据发送和接收功能及过程的是（⑤）。
>
> - ① A. 1、2、3
> - B. 2、3、4
> - C. 3、4、5
> - D. 4、5、6
> - ② A. 物理层
> - B. 数据链路层
> - C. 会话层
> - D. 传输层
> - ③ A. 物理层
> - B. 数据链路层
> - C. 网络层
> - D. 传输层
> - ④ A. 主机进程之间
> - B. 网络之间
> - C. 数据链路之间
> - D. 物理线路之间
> - ⑤ A. 物理层
> - B. 数据链路层
> - C. 会话层
> - D. 传输层

本题第 5 空错选为 C。为网络实体提供，所以是为网络层提供服务，所以应该是数据链路层。

![1.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAr9qyK-34qgTGLPh5erdNcM_AsPL5gACUhJrG6T-SFay25-K1-LJ3gEAAwIAA3gAAz0E)

> 在 OSI 参考模型中，各层都有差错控制过程，指出以下每种差错发生在哪些层中：噪声使传输链路上的一个 0 变成 1 或一个 1 变成 0（①）。收到一个序号错误的目的帧（②）。一台打印机正在打印，突然收到一个错误指令要打印头回到本行的开始位置（③）。
>
> - ① A. 物理层
> - B. 网络层
> - C. 数据链路层
> - D. 会话层
> - ② A. 物理层
> - B. 网络层
> - C. 数据链路层
> - D. 会话层
> - ③ A. 物理层
> - B. 网络层
> - C. 应用层
> - D. 会话层

第 2 空错选为 B。差错控制再 OSI 模型在数据链路层，而且这道题说了序号错误的是帧。

![1.2.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsBqyK_OqpR8BEDxGQYgz-N2-emQdAACUxJrG6T-SFZAbyXCbNjBCwEAAwIAA3gAAz0E)

> 【2016 统考真题】在 OSI 参考模型中，路由器、交换机（Switch）、集线器（Hub）实现的最高功能层分别是（ ）。
>
> - A. 2、2、1
> - B. 2、2、2
> - C. 3、2、1
> - D. 3、2、2
>
> 【2017 统考真题】假设 OSI 参考模型的应用层欲发送 400B 的数据（无拆分），除物理层和应用层外，其他各层在封装 PDU 时均引入 20B 的额外开销，则应用层的数据传输效率约为（ ）。
>
> - A. 80%
> - B. 83%
> - C. 87%
> - D. 91%

第 33 题错选为 D。不说了。

第 34 题错选为 B。这道题需要捋清楚具体过程，把图画出来然后捋一遍就好了。

### 计网王道选择题 1 刷第 2 章

![2.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsFqyLADlBexgGGHMjgrk4qqmPrh0wACVBJrG6T-SFY7EJwYJLjb8wEAAwIAA3gAAz0E)

> 影响信道最大传输速率的因素主要有（ ）。
>
> - A. 信道带宽和信噪比
> - B. 码元传输速率和噪声功率
> - C. 频率特性和带宽
> - D. 发送功率和噪声功率

本题错选为 B。根据奈奎斯特定理，无噪声信道最大传输速率为 2Wlog2V，其中 W 为频率范围，V 为物理状态；根据香浓定理，有噪声信道最大传输速率为 Wlog2(1+S/N)，其中 W 为频率范围，S/N 为信噪比。所以

![2.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsJqyLAUzpE9NXVw2qtk83baf0SpcAACVRJrG6T-SFayowyykm1CsgEAAwIAA3gAAz0E)

> 在数据通信中使用曼彻斯特编码的主要原因是（ ）。
>
> - A. 实现对通信过程中传输错误的恢复
> - B. 实现对通信过程中收发双方的数据同步
> - C. 提高对数据的有效传输速率
> - D. 提高传输信号的抗干扰能力

本题错选为 D。更强的抗干扰能力为差分曼彻斯特编码，可以 10bastT 快速以太网默认采用的是差分曼彻斯特编码。

![2.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsNqyLAoMVZkKbVcmmRlmC3A0lfG7AACVhJrG6T-SFbDbrA0ywABBVgBAAMCAAN4AAM9BA)

> 某信道的波特率为 1000Baud，若令其数据传输速率达到 4kb/s，则一个信号码元所取的有效离散值个数为（ ）。
>
> - A. 2
> - B. 4
> - C. 8
> - D. 16

本题错选为 B。该题为无噪声的信道，且需要注意，4kb/s 不是最大传输速率，只是一个稀疏平常的值，所以 Wlog2V=4000，即 V=16。

![2.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsRqyLA8XFDB3BC9XUnq9MGd71E-IwACVxJrG6T-SFa1ioxFVKztGQEAAwIAA3gAAz0E)

> 已知某信道的信息传输速率为 64kb/s，一个载波信号码元有 4 个有效离散值，则该信道的波特率为（ ）。
>
> - A. 16kBaud
> - B. 32kBaud
> - C. 64kBaud
> - D. 128kBaud
>
> 有一个无噪声的 8kHz 信道，每个信号包含 8 级，每秒采样 24k 次，那么可以获得的最大传输速率是（ ）。
>
> - A. 24kb/s
> - B. 32kb/s
> - C. 48kb/s
> - D. 72kb/s

第 9 题错选为 A。某信道传输速率为 64kb/s，没说是最大的，所以就按照普通的算，所以 Wlog2V=64000 可得 W=32000，即有 32000Baud。

第 10 题没做出来。无噪声的 8kHz 信道，也就意味着 W 最大是 8kHz，每秒采样 24k 次，意味着每秒采样的 W 达到 24kHz，而最大只能是 8kHz，所以用 8kHz 算，2Wlog2V=2×8000×3=48000

![2.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsVqyLBTf8yGjIzQWadU6ej8U5TMvgACWBJrG6T-SFa_2M6Zmsy7vgEAAwIAA3gAAz0E)

> 二进制信号在信噪比为 127:1 的 4kHz 信道上传输，最大数据传输速率可以达到（ ）。
>
> - A. 28000b/s
> - B. 8000b/s
> - C. 4000b/s
> - D. 无限大

第 12 题错选为 A。考虑有噪声的信道，Wlog2(1+127/1)=4000×7；考虑无噪声的信道，2Wlog2V，注意这里题目说了是二进制信号，所以 V=2。如果 V=1，那么电线上只能由一种状态，显然无法表示信号。

![2.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsZqyLBm25pR0OznVjVurfqf4wxvUgACWRJrG6T-SFY1-lskwuehRAEAAwIAA3gAAz0E)

> 一个信道的信号功率是 0.14W，噪声功率是 0.02W，频率范围为 3.5 - 3.9MHz，则该信道的最高数据传输速率是（ ）。
>
> - A. 1.2Mb/s
> - B. 2.4Mb/s
> - C. 11.7Mb/s
> - D. 23.4Mb/s

本题错选为 C。这里的频率指的是频率范围，所以 W=0.4MHz。信噪比为 0.14/0.02=7。所以考虑无噪声的信道，2Wlog2V，由于没有给 V，所以先略去；考虑有噪声的信道，Wlog2(1+7)=3×0.4MHz=A。

![2.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsdqyLB4COZ00PBJlRlKOEEqzzJ2BAACWhJrG6T-SFZZ_Xuwihb2xgEAAwIAA3gAAz0E)

> 采用 8 种相位，每种相位各有两种幅度的 QAM 调制方法，在 1200Baud 的信息传输速率下能达到的数据传输速率为（ ）。
>
> - A. 2400b/s
> - B. 3600b/s
> - C. 9600b/s
> - D. 4800b/s
>
> 一个信道每 1/8s 采样一次，传输信号共有 16 种变化状态，最大数据传输速率是（ ）。
>
> - A. 16b/s
> - B. 32b/s
> - C. 48b/s
> - D. 64b/s
>
> 某信道的带宽为 10MHz，信噪比为 30dB，采用 QAM-32 调制方案。若将带宽提高到 20MHz，信噪比提高到 40dB，则信道的极限数据传输速率大约提高到原来的（ ）倍。
>
> - A. 2
> - B. 2.2
> - C. 2.4
> - D. 2.6

第 15 题错选为 B。8 相位两种幅度意味着 log2V=4，所以为 D。

第 16 题都没做出来。信道每 1/8s 变化一次，意味着 W=8Hz。需要注意的是，这里的 W=8Hz 是人为固定死的，而非频带宽度，所以只能用 8 去算。

第 17 他没做出来。考虑无噪声的信道，则 2Wlog232=2×10Mhz×5；而采用 Wlog2(1+S/N) 大于前者。所以最后是 2。

![2.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAshqyLCkGp1ic3uyqA_Xf7HLGdpKCQACWxJrG6T-SFZDNi92WhtEmgEAAwIAA3gAAz0E)

> 同轴电缆比双绞线的传输速率更快，得益于（ ）。
>
> - A. 同轴电缆的铜芯比双绞线的粗，能通过更大的电流
> - B. 同轴电缆的阻抗比较标准，减少了信号的衰减
> - C. 同轴电缆具有更高的屏蔽性，同时有更好的抗噪声性
> - D. 以上都正确

本题想当然直接选 D。让网速变快是让电压跳变频率更快以及波形更清晰；减少信号衰减并没有影响到传输速率。

这里辨析一下，粗同轴电缆 10BASE5，细同轴电缆 10BASE2（最长 185 米），10BASET 双绞线（早期双绞线屏蔽行不如同轴电缆）

![2.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAslqyLC1VQJpKulY-nDDx7cm1RJXGwACXBJrG6T-SFaciTnOJERynwEAAwIAA3gAAz0E)

> 以下关于单模光纤的说法中，正确的是（ ）。
>
> - A. 光纤越粗，数据传输速率越高
> - B. 光纤的直径减小到只有光的一个波长大小时，光沿直线传播
> - C. 光源是发光二极管或激光
> - D. 光纤是中空的

本题错选为 D。光纤越粗，也就是多模光纤，多模光纤只适合近距离传输，并且采用普通灯光即可；单模光纤得用昂贵的激光作为光源，传输距离非常长。对于多模光纤，三束光再同一时刻进入，但是由于射入∠不一样，所以时间就不一样。光纤里肯定不是空的，因为要全反射。

![2.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAspqyLDOgYYV9bNZz0ihnhptr6SBGAACXRJrG6T-SFYCyVBIZC_mYAEAAwIAA3gAAz0E)

> 以太网遵循 IEEE 802.3 标准，用粗缆组网时每段的长度不能大于 500m，超过 500m 时就要分段，段间相连利用的是（ ）。
>
> - A. 网络适配器
> - B. 中继器
> - C. 调制解调器
> - D. 网关

本题错选为 C。调制解调器是在解析的时候用的，而不是中继器。中继器的作用是放大和整形。

![2.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAstqyLDkTVSPmyACL_E0Wfdof5elQwACXhJrG6T-SFaf6lUbxuIYxgEAAwIAA3gAAz0E)

> 用集线器连接的工作站集合（ ）。
>
> - A. 同属一个冲突域，也同属一个广播域
> - B. 不同属一个冲突域，但同属一个广播域
> - C. 不同属一个冲突域，也不同属一个广播域
> - D. 同属一个冲突域，但不同属一个广播域
>
> 中继器可以用来连接（ ）。
>
> - A. 不同类型的局域网
> - B. 广域网和局域网
> - C. 不同介质的局域网
> - D. 不同协议的局域网

第 5 题错选为 D，为极其低级的错误

第 6 题错选为 D。不同协议的局域网指的是网络层的范畴，例如 IP 协议，早期的其他协议；不同类型的局域网，例如令牌环路网，以太网，显然不能转换（电信号的含义不同）且不同类型的局域网意思是物理拓扑不一样，例如总线型/环形/星形；局域网和广域网使用路由器。

### 计网王道选择题 1 刷第 3 章

![3.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAsxqyLEDxoA3nhFR0oLq_68JNTH6UgACXxJrG6T-SFZ76Xz2utr4IQEAAwIAA3gAAz0E)

> 下列选项中，不属于数据链路层协议功能的是（ ）。
>
> - A. 定义数据格式
> - B. 提供节点之间的可靠传输
> - C. 控制对物理传输介质的访问
> - D. 为终端节点隐蔽物理传输的细节

本题错选为。对于数据链路层这里考虑 OSI 模型，显然 AB 都是其功能。对于 D，显然 MAC 层需要根据物理层来设计，所以不可能屏蔽物理层，D 是网络层的功能。对于 C，需要理解介质控制子层也就是 MAC 的概念，例如以太网和令牌环的区别之类的。

![3.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAs1qyLERbhWR4x1TT59adlRM7fVjYQACYBJrG6T-SFZMHj8l16kXcQEAAwIAA3gAAz0E)

> 对于信道比较可靠且对实时性要求高的网络，数据链路层采用（ ）比较合适。
>
> - A. 无确认的无连接服务
> - B. 有确认的无连接服务
> - C. 无确认的面向连接服务
> - D. 有确认的面向连接服务

本题错选为 B。首先，这道题需要辨析，这里的“信道比较可靠”指的是信道本身可靠，而不是需要可靠。

![3.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAs5qyLEjnDxinuUMr7HLxAswDGCSwQACYRJrG6T-SFaBg5A5gK5pfAEAAwIAA3gAAz0E)

> 【2013 统考真题】HDLC 协议对 01111100 01111110 组帧后，对应的比特串为（ ）。
> （注：HDLC 协议已从最新大纲中删除。）
>
> - A. 01111100 00111110 10
> - B. 01111100 01111101 01111110
> - C. 01111100 01111101 0
> - D. 01111100 01111110 01111101

HDLC 协议采用零比特填充法，即用 0111 1110 作为帧的起始和结束，除了这两个之外，剩下的每遇到 5 个 1 就填充 1 个 0。

所以对于 0111 1100 0111 1110 组帧，也就是 0111 1100 0011 1110 10，即 A。
辨析一下四种组帧方案：

其一，字符填充法。采用特定字符，例如“5”来区分边界，主要的缺陷在于计数字段错误会导致灾难性后果。

其二，字符填充发，可以理解为 PPP 协议（异步 PPP）采用的方案。

其三，零比特填充法，即碰到连续的五个 1 就加一个 0，比如说同步 PPP 协议

其四，违规编码法，若采用曼彻斯特编码，那么必然中间会有 1 跳变至 0（代表 1），0 跳变至 1，如果没有跳变，那么意味着为边界，这样的好处是不用扫描。

![3.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAs9qyLFBckgF5szbiB0MsXQq7-YcYgACYhJrG6T-SFbQXluzx332-AEAAwIAA3gAAz0E)

> 【2025 统考真题】某差错编码的编码集为 {1001 1010, 0101 1100, 1111 0000, 0000 1111}，该差错编码的检错和纠错能力是（ ）。
>
> - A. 不超过 2 位错的 100% 检错、不超过 1 位错的纠错
> - B. 不超过 2 位错的 100% 检错、不超过 2 位错的纠错
> - C. 不超过 3 位错的 100% 检错、不超过 1 位错的纠错
> - D. 不超过 3 位错的 100% 检错、不超过 2 位错的纠错

需要注意的是，逗号才是分隔编码的，而不是空格与逗号都分隔。

这里捋一下编码这一章的概念，首先引入码距的概念，码距是两个编码之间异或出来为 1 的个数，任意两个有效字之间的码距的最小值即该编码集的码距。

而 l≥d+c+1，且 d≥c，其中 d 为检错，c 为纠错。

检错码常见的有两类，奇偶校验与循环冗余 CRC。对于奇偶校验码，有两种类型，奇校验与偶校验，最终的目的都是加一位，让 1 的个数为奇/偶。奇偶校验码只能校验奇数位的错误。

对于循环冗余 CRC，即首先约定一个 r+1 的生成式，然后在原始的式子后面+r 位 0，进行除法，这里的除法是模 2 除法，也就是期间的运算是异或，而不是正常的数值相减。最终得出的式子覆盖原本的 r 位。对于接收方，只需要运算一下，然后为 0，那么就可以了。

基于此，梳理一下校验。对于网络层的 IP 协议，ipv4 协议，其校验计算过程中引入的进位需要回卷，最终的出来的校验码取反码，作用范围为首部；ipv6 没有校验和。

对于传输层的 UDP，引入伪首部，对于伪首部以及全体进行求和，计算过程中引入的进位需要回卷，最终的出来的校验码取反码。对于 TCP，也需要引入伪首部，对整体进行与 UDP 类似的计算方法。

对于纠错码，主要是海明码。海明码的纠错 c=1，可以实现单比特纠错。也就是 $2^k \ge n+k+1$，其中 $k$ 为校验码位数，信息为为 $n$ 位。将校验位放在 $2^{i-1}$ 位上。举个例子。假设 n=4，则 k=3，所以对于海明码 H7H6H5H4H3H2H1，记 D 为信息位，P 为校验码，则 D4D3D2P3D1P2P1（校验码放在第 1，2，4 位）。对于信息位 1010，P1 校验 H3，H5，H7；P2 校验 H3，H6，H7；P3 校验 H4，H6，H7（P1 校验 H 位置所对应的最低位为 1）。将之分别异或可得校验位，最终演算的时候，P1 异或其校验的位，也就是 H3，H5，H7，最终需要 s1s2s3 均为 0，可得无错误，否则根据 s3s2s1 可以反推出某 1bit 错误。需要注意的是，这里所有数值都从 1 开始编码。

捋清楚了之后，来看这道题：显然码距为 4，所以 l≥d+c+1，且 d≥c，即 3≥d+c，所以可以反推出：d=3，c=0；d=2，c=1；d=1，c=1；d=1，c=0；d=0，c=0。由此可以判断出答案。
CRC 采用硬件计算，所以快，而 IP 那块如果再用的话，成本很高。

![3.4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtBqyLF71EMaJBU4LuwGpaC9WMwXtwACZBJrG6T-SFY0lWvbTQORZwEAAwIAA3gAAz0E)

> 下列情况中，会使停止 - 等待协议的效率变得很低的是（ ）。
>
> - A. 当源主机和目的主机之间的距离很近而且数据传输速率很高时
> - B. 当源主机和目的主机之间的距离很远而且数据传输速率很高时
> - C. 当源主机和目的主机之间的距离很近而且数据传输速率很低时
> - D. 当源主机和目的主机之间的距离很远而且数据传输速率很低时

本题错选为 D。本题想当然，没有具体情况具体分析。停止等待协议的使用场景主要是卫星链路，卫星链路源主机和目的主机距离间隔远，数据传输率低，误码率高。定量分析一下，假定忽略 ACK 帧的传输时延，则传输 1 个数据所需要的时间为 t+RTT，其中 t 为发送时延，效率=t/(t+RTT)，显然，当 t 变大的时候，即传输速率变低，整体效率变高；当 t 变小，即传输速率变高，整体效率变低。

![3.4.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtFqyLGPeM4wxF5GWbRyfEd7MqgG1wACZRJrG6T-SFZuoVVZyfzt0QEAAwIAA3gAAz0E)

> 下列关于连续 ARQ 的说法中，错误的是（ ）。
>
> - A. 发送方可以连续发送若干数据帧，而不是发完一个数据帧就停下来等待确认帧
> - B. 发送方收到了接收方发来的确认帧，还可以接着发送数据帧
> - C. 相比停止 - 等待协议，连续 ARQ 因为减少了等待时间，所以提高了信道利用率
> - D. 接收方可以不按序接收数据帧

本题错选为 C。连续 ARQ 主要有两种形式，回退 N 帧与选择重传协议。对于回退 N 帧协议，接收窗口只有 1，所以必须按序接收。

![3.4.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtJqyLGgmoSkE7XFz8g-x8LQflv-cgACZhJrG6T-SFZqXAEJeySpFQEAAwIAA3gAAz0E)

> 数据链路层采用选择重传协议（SR）传输数据，若帧序号采用 4 比特编号，接收窗口大小为 7，则发送窗口最大是（ ）。
>
> - A. 17
> - B. 8
> - C. 9
> - D. 10

本题错选为 B。这里是理解死板的问题，永远记住总窗口为 2^4=16，然后发送窗口 + 接收窗口≤16，所以本题发送窗口最大为 9。

![3.4.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtNqyLIFRSUtPdbnzAAB-wABDwABKp4ERAACaRJrG6T-SFYolBe8_TbdygEAAwIAA3gAAz0E)

> 采用滑动窗口机制对两个相邻节点 A 和 B 的通信过程进行流量控制。A 和 B 之间的数据传输速率为 20kb/s，数据帧和确认帧的长度都为 2000B，往返传播时延为 1400ms，采用 3 比特给数据帧编号，测得在 A 和 B 的通信过程中信道利用率大于 80%，则（ ）。
> （注：在 SR 协议中，默认发送窗口大小等于接收窗口大小。）
>
> - A. 节点 A、B 之间只能采用停止等待协议
> - B. 节点 A、B 之间只能采用 GBN 协议
> - C. 节点 A、B 之间只能采用 SR 协议
> - D. 节点 A、B 之间可以采用 GBN 协议或 SR 协议

本题错选为 C。2000B=16000bit，即发送时延为 16000/20000=0.8s=800ms。若采用停止等待协议，则传输一次数据的总时间为 RTT+800×2=1400+1600=3000ms，所以 800/3000<0.8；若采用 GBN 协议，采用 3bit 给数据帧编号，即发送窗口为 7，接收窗口为 1，~~假定采用发 7 个数据回 1 次帧，即总时间为 8×800+1400=7800ms，所以 8×800/7800=64/78>0/8~~；与后面的类似的做法，显然利用率=1；若采用 SR，则 NTd≥Td+RTT+Ta，所以利用率为 1。

![3.4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtRqyLI4PaKTia91B1T72lJXoml9wgACahJrG6T-SFb71SXXWitAtwEAAwIAA3gAAz0E)

> 假设两台主机之间采用后退 N 帧协议传输数据，数据传输速率为 16kb/s，单向传播时延为 250ms，数据帧的长度是 128B，确认帧的长度也是 128B，为使信道利用率达到最高，则帧序号的比特数至少为（ ）。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5

本题错选为 D。128B=128×8=1024。即 1024/16000=64ms，即 Td=Ta=64ms。为了使得信道利用率最高，即 NTd=Td+Ta+RTT，即 64N=64+64+500，向上取整，即 N=10，所以发送总窗口至少为 11，所以需要 4 位。

![3.4.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtVqyLJJ2tQSjD13lwNzeLHgB8uT8gACaxJrG6T-SFbVHHV0sFZYXAEAAwIAA3gAAz0E)

> 【2012 统考真题】两台主机之间的数据链路层采用后退 N 帧协议（GBN）传输数据，数据传输速率为 16kb/s，单向传播时延为 270ms，数据帧长范围是 128 ~ 512B，接收方总是以与数据帧等长的帧进行确认。为使信道利用率达到最高，帧序号的比特数至少为（ ）。
>
> - A. 5
> - B. 4
> - C. 3
> - D. 2
>
> 【2014 统考真题】主机甲与主机乙之间使用后退 N 帧协议（GBN）传输数据，主机甲的发送窗口尺寸为 1000，数据帧长为 1000B，信道带宽为 100Mb/s，主机乙每收到一个数据帧，就立即利用一个短帧（忽略其传输延迟）进行确认，若主机甲和主机乙之间的单向传播时延是 50ms，则主机甲可以达到的最大平均数据传输速率约为（ ）。
>
> - A. 10Mb/s
> - B. 20Mb/s
> - C. 80Mb/s
> - D. 100Mb/s
>
> 【2015 统考真题】主机甲通过 128kb/s 卫星链路，采用滑动窗口协议向主机乙发送数据，链路单向传播时延为 250ms，帧长为 1000B。不考虑确认帧的开销，为使链路利用率不小于 80%，帧序号的比特数至少是（ ）。
>
> - A. 3
> - B. 4
> - C. 7
> - D. 8

第 24 题不会做。显然，128B-512B=128×8bit-512×8bit，此时 Ta=Tb=64ms-256ms，所以 NTd=Td+Ta+RTT，即 N=(2T+540)/T。当 T=64ms 时，N 向上取整，即 N=11，所以发送总窗口为 12，所以至少为 4。

第 25 题不会做。显然，RTT=100ms，Td=8000/100M=0.08ms。NTd/(Td+RTT)=0.8，即 80%。

第 26 题不会做。显然，1000B=8000bit，Td=8000/128000=62.5ms，RTT=500ms，所以 NTd/(Td+RTT)≥0.8，向上取整可得 N=8。尤其需要注意，这里的 N 指的是发送窗口，接收窗口至少为 1，所以窗口总数至少为 9。

这几题最大的问题是不要双倍算时间。

![3.4.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtZqyLJghgz5QFhrCqBs_Z0iszD88wACbRJrG6T-SFba7j6qDb2oyAEAAwIAA3gAAz0E)

> 【2019 统考真题】对于滑动窗口协议，若分组序号采用 3 比特编号，发送窗口大小为 5，则接收窗口最大是（ ）。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5

本题错选为 C。和之前类似的错误。

![3.5.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtdqyLJ1QznOAAEiZRIxAAFGRF3Dhe0eAAJuEmsbpP5IVhKj68Vtfct1AQADAgADeAADPQQ)

> TDM 所用传输介质的性质是（ ）。（注：本题选项中的带宽是指信号的频率范围。）
>
> - A. 介质的带宽大于结合信号的位速率
> - B. 介质的带宽小于单个信号的带宽
> - C. 介质的位速率小于最小信号的带宽
> - D. 介质的位速率大于单个信号的位速率
>
> 从表面上看，FDM 比 TDM 能更好地利用信道的传输能力，但现在计算机网络更多地使用 TDM 而非 FDM，其原因是（ ）。
>
> - A. FDM 实际能力更差
> - B. TDM 可用于数字传输而 FDM 不行
> - C. FDM 技术不成熟
> - D. TDM 能更充分地利用带宽

第 4 题不会做。第 5 题错选为 D。借助这两道题理解一下复用的概念。为了提高效率以及节约成本，提出公用物理线路（信道）的概念。然而如何互不打扰？

复用的核心目的是最大化利用物理链路的容量。

模拟带宽：信号的频率范围。

数字带宽：数字的传输速率，每秒能传输多少个 bit。

FDM，频分复用，物理信道拥有很宽的频率范围，即模拟带宽，所以将之切为多块，每个人分到一个特定的频率区间。如果本身在 100Hz，即可以通过调制奇技术到其他地方。缺点是信号的频率边缘并非蒸汽切割，所以为了防止串，工程师必须在每个频道之间留出一道空白的频率区域，即卫带，
TDM，时分复用，每个人分固定的时间片。在 TDM 中，物理介质传输的是数字脉冲，如果有 4 个用户，每个用户每秒想发 1kb 的数据，那么物理介质每秒必须跑 4kb，即位速率必须大于单位用户位速率之和。其优化位统计时分复用，即 STDM，也就是动态分配时隙，代价是得多带上控制信息，即地址标签。

![3.5.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAthqyLKS0NGIQ86Q2SawihLR3ptgRAACbxJrG6T-SFYpNnJGBOKEAgEAAwIAA3gAAz0E)

> 下列关于令牌环网络的说法中，错误的是（ ）。
> I. 信道的利用率比较公平
> II. 重负载下信道利用率高
> III. 节点可以一直持有令牌，直至所要发送的数据传输完毕
> IV. 节点只能持有令牌一段固定的时间，对于没有数据要发送的节点也是如此
>
> - A. I、II 和 III
> - B. III
> - C. III 和 IV
> - D. IV

本题错选为 D。对于 1，2，显然正确，对于 3，节点在传输数据的时候，需要把令牌交付给下一个人。

![3.5.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtlqyLKnmf_zJUmqgJwECYO5vFrqkQACcBJrG6T-SFYThKV6POIlDgEAAwIAA3gAAz0E)

> 【2013 统考真题】下列介质访问控制方法中，可能发生冲突的是（ ）。
>
> - A. CDMA
> - B. CSMA
> - C. TDMA
> - D. FDMA

本题错选为 A。CDMA 为码分复用，CSMA 为载波监听，TDMA 为时分复用，FDMA 为频分复用。

![3.6.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtpqyLK5Odxp8xNjHEXexpPvFIoHmAACcRJrG6T-SFZLu1BMkSKKZgEAAwIAA3gAAz0E)

> 网卡实现的主要功能在（ ）。
>
> - A. 物理层和数据链路层
> - B. 数据链路层和网络层
> - C. 物理层和网络层
> - D. 数据链路层和应用层

本题错选为 B。网卡即网络接口卡，网络适配器，主要实现物理层和数据链路层。实际上也就是说，网卡本身并不具备网络层的功能，其并不负责帮别人转发数据。网卡拥有 mac 地址。

![3.6.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAttqyLLUjWC00zqMg4o4KuN-wICzMwACchJrG6T-SFZeqyGJ14YphQEAAwIAA3gAAz0E)

> 根据 CSMA/CD 协议的工作原理，需要提高最短帧长的是（ ）。
>
> - A. 网络传输速率不变，冲突域的最大距离变短
> - B. 冲突域的最大距离不变，网络传输速率提高
> - C. 上层协议使用 TCP 的概率增加
> - D. 在冲突域不变的情况下减少线路中的中继器数量
>
> 在某 CSMA/CD 局域网中，使用一个 Hub 连接所有站点，且限定站点到 Hub 的最长距离为 100m，信号的传播速率为 200000km/s，则站点的最长冲突检测时间是（ ）。
>
> - A. 2μs
> - B. 2ms
> - C. 1μs
> - D. 1ms

第 19 题错选为 D。本题实质上是对最短帧长之类的理解不足，这里总结一下。

CSMA/CD主要用于10BaseT网络中，最大段长为100m，争用期为51.2us，最短帧长为64B。最大单向传播时延=单向物理长度/信号传播速率，争用期=2×最大单向传播时延，最短帧长=争用期×数据传输率。

对于 A，冲突域最大距离变短，也就意味着单向传播时延变小，也就意味着争用期变短，也就意味着最短帧长变小。对于 B，网络传输速率增大，也就意味着最短帧长增加；对于 C，上层协议使用 TCP 的概率增加，什么都没有影响；对于 D，减少中继器数量意味着信号传播速率变大，也就意味着单向传播时延变短。

第 20 题错选为 C。使用 1 个 Hub 连接 2 个点，也就意味着总共单向传播距离为 200m，也就意味着单向最大传输时延为 200/200000000s，也就意味着争用期=2×200/200000000。

![3.6.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAtxqyLL-2pMsiQEHL-iDccrl36JwKAACdBJrG6T-SFbf0_m47Z-ncAEAAwIAA3gAAz0E)

> IEEE 802 局域网标准对应 OSI 参考模型的（ ）。
>
> - A. 数据链路层和网络层
> - B. 物理层和数据链路层
> - C. 物理层
> - D. 数据链路层

本体错选为 D。没什么好说的其实。

![3.6.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAt1qyLMlI4yIKnVHNs5wG7VII9E5pwACdxJrG6T-SFZBktlX0OVFtwEAAwIAA20AAz0E)

> 下列关于吉比特以太网的说法中，错误的是（ ）。
>
> - A. 支持流量控制机制
> - B. 采用曼彻斯特编码，利用光纤进行数据传输
> - C. 数据的传输时间主要受线路传输延迟的制约
> - D. 同时支持全双工模式和半双工模式

本题错选为 C。吉比特以太网可以使用光纤/双绞线，有两种协议，支持全双工与半双工，半双工模式下使用 CSMA/CD；十吉比特以太网可以使用光纤/双绞线，只支持全双工。

![3.6.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAt5qyLM5opEhePd7f4it4CJHJp2szAACeBJrG6T-SFabOwmFBWuD8AEAAwIAA3gAAz0E)

> CSMA/CA 协议的主要特点是（ ）。
>
> - A. 发送前先检测信道，信道空闲就立即发送，信道忙就随机推迟发送
> - B. 边发送边检测信道，一旦发现冲突就立即停止发送
> - C. 发送前先预约信道，获得信道授权后再发送
> - D. 发送后等待确认帧，在规定时间内未收到确认帧就重传

本体错选为 C。对于 A，如果信道空闲，需要等待 DIFS 的时间。B 是 CSMA/CD 的特点，对于 C，CSMA/CA 确实可以预约信道，但是并不是主要特点，而且也可以不适用这个（普通的不使用），对于 D，CSMA/CA 使用停止等待协议。

捋一下 DIFS 和 SIFS，PIFS 的话是点对点，基本没咋用。DIFS 是帧间，也就是区分实体帧和帧之间的，对于发送 ack 之类的中间都是停顿 SISF。

![3.6.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAt9qyLNR642HJPaGPOUhBXqaYkS9ugACehJrG6T-SFb520m0Epn90AEAAwIAA3gAAz0E)

> 在下图所示的网络中，假定主机 A 给主机 B 发送数据，在 MAC 帧从接入点 AP2 转发到目的主机 B 的这段链路上，MAC 帧的地址 1、地址 2 和地址 3 分别是（ ）。
>
> - [图示] 图中文字：A、地址 MAC_A、AP1、地址 BSSID1、MAC1、MAC2、AP2、地址 BSSID2、B、地址 MAC_B。主机 A（地址 MAC_A）经虚线链路连到 AP1（地址 BSSID1），再经标注 MAC1 的链路连到中间设备，经标注 MAC2 的链路连到 AP2（地址 BSSID2），最后经虚线链路连到主机 B（地址 MAC_B）。
>
> - A. BSSID2，BSSID1，MAC_B
> - B. MAC_B，BSSID2，BSSID1
> - C. BSSID2，MAC_B，MAC_A
> - D. MAC_B，BSSID2，MAC[?]

本题错选为 B。谁收，谁发，最终。AP2 发给 B，B 收，所以第一个地址是 MACB，AP2 发，所以是 BSSID2，这里的最终是源地址，源地址这里应该是 MAC2（因为过了一个路由器）

![3.6.41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuBqyLNjqIPY3fkNSNgqlRjL5wsNPwACfBJrG6T-SFYkgoDPVc9DIQEAAwIAA3gAAz0E)

> 【2016 统考真题】如下图所示，在 Hub 再生比特流的过程中会产生 1.535μs 的时延（Switch 和 Hub 均为 100Base-T 设备），信号传播速率为 200m/μs，不考虑以太网帧的前导码，则 H3 和 H4 之间理论上可以相距的最远距离是（ ）。
>
> - [图示] 图中文字：R2、192.168.3.254、E1、Switch、Hub、H4、192.168.3.252、H1、192.168.3.2、H2、192.168.3.3、H3、192.168.3.251。R2（192.168.3.254，标注 E1）连到 Switch，Switch 分别连 H1（192.168.3.2）、H2（192.168.3.3）和 Hub，Hub 分别连 H4（192.168.3.252）和 H3（192.168.3.251）。
>
> - A. 200m
> - B. 205m
> - C. 359m
> - D. 512m

本题错选为 C。100BaseT 而就意味着 100MB/s。假设总共距离为 x，那么单向最大传播时延为 x/200+1.535，争用期即 x/100+1.535×2，所以最短帧长即争用期×数据传输率=64B，其中数据传输率为 64Mbit/s。

2×3×4

![3.6.44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuFqyLO6S4t-877pAAHEj5pf4By3dqQAAn0Saxuk_khW4-W8Hjn2v9UBAAMCAAN4AAM9BA)

> 【2019 统考真题】假设一个采用 CSMA/CD 协议的 100Mb/s 局域网，最小帧长是 128B，则在一个冲突域内，两个站点之间的单向传播时延最多是（ ）。
>
> - A. 2.56μs
> - B. 5.12μs
> - C. 10.24μs
> - D. 20.48μs

本题错选为 C。最短帧长=128B=2×单向传播时延×数据传输率，所以 128×8/(2×100)=5.12us。

![3.6.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuJqyLPvnfeUkrvVmdecKblNiymfawACfhJrG6T-SFZ1Stp5sHEixgEAAwIAA3gAAz0E)

> 【2020 统考真题】在某个 IEEE 802.11 无线局域网中，主机 H 与 AP 之间发送或接收 CSMA/CA 帧的过程如下图所示。在 H 或 AP 发送帧前等待的帧间间隔时间（IFS）中，最长的是（ ）。
>
> - [图示] 图中文字：H、AP、IFS1、RTS、IFS2、CTS、IFS3、DATA、IFS4、ACK、时间。两条竖线左为 H、右为 AP，时间轴自上向下；依次标注 IFS1、H 向 AP 发送 RTS、IFS2、AP 向 H 发送 CTS、IFS3、H 向 AP 发送 DATA、IFS4、AP 向 H 发送 ACK，底部标注 时间。
>
> - A. IFS1
> - B. IFS2
> - C. IFS3
> - D. IFS4

本题错选为 C。第一个是 DISF，后面三个都是 SIFS。

捋一下 MAC 地址。

6B，前 3B 是 OUI，也就是唯一组织标识符，后 3B 是 NIC，位厂家自行分配的序列号。

第一个字节的 LSB，也就是最低一位，例如位 0000 0001，最低位也就是 LSB 是 I/G 位，为 0 则为单播，为 1 则为多播/组播。倒数第 2 位为 U/L 位，为 0 是全球唯一，为 1 是本地生成的虚拟地址。所以，0000 0000 是全球唯一，单播；0000 0001，全球唯一，多播；0000 0010，本地生成，单播；0000 0011，本地生成，多播。

![3.7.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuNqyLQH09bEILLvD6jr886FB26J3wACfxJrG6T-SFYN0nraqxN8KQEAAwIAA3gAAz0E)

> 局域网和广域网的差异不仅在于它们所覆盖的范围不同，还主要在于它们（ ）。
>
> - A. 所使用的介质不同
> - B. 所使用的协议不同
> - C. 所能支持的通信量不同
> - D. 所提供的服务不同

本题错选为 D。广域网使用 PPP 技术，局域网使用广播技术。

![3.7.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuRqyLQfZecNmtLz4yN3YJ4EysM5YQACgBJrG6T-SFbr-c4nBmrAIAEAAwIAA3gAAz0E)

> 为实现透明传输（默认为异步线路），PPP 使用的填充方法是（ ）。
>
> - A. 位填充
> - B. 字符填充
> - C. 对字符数据使用字符填充，对非字符数据使用位填充
> - D. 对字符数据使用位填充，对非字符数据使用字符填充
>
> 以下对 PPP 的描述中，错误的是（ ）。
>
> - A. 具有差错控制能力
> - B. 仅支持 IP
> - C. 支持动态分配 IP 地址
> - D. 支持身份验证

第 7 题错选为 C。PPP 是面向字节的协议。可以注意，差错控制指的是 CRC 这种，而不是传输是否可靠。使用校验然后丢弃和使用校验然后告知是两码事。

第 8 题错选为 A。PPP 可以支持不同的网络层协议。

![3.7.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuVqyLQ5m8_NYf1m5biBORomfvr8fwACgRJrG6T-SFbn7bFCKTmj5QEAAwIAA20AAz0E)

> 下列关于 PPP 的叙述中，正确的是（ ）。
>
> - A. PPP 是网络层协议
> - B. PPP 支持半双工或全双工通信
> - C. PPP 两端的网络层必须运行相同的网络层协议
> - D. PPP 是面向字节的协议

本题错选为 C。PPP 仅支持全双工协议。

这里捋一下 PPP 协议，PPP 协议首先通过 LCP 鉴别，然后然后使用 NPC 配置网络参数；PPP 的主要特征是提供不可靠服务（不使用需要确认机制，仅提供无差错的接收，可以运行不同的网络层协议）

![3.8.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuZqyLRUXOZWyCxD_swnL8UEMQyuhAACghJrG6T-SFYZxxA1IlFgEgEAAwIAA3gAAz0E)

> 下列关于用集线器连接的共享式以太网的说法中，正确的是（ ）。
>
> - A. 以太网的物理拓扑是总线形结构
> - B. 以太网提供有确认的无连接服务
> - C. 以太网参考模型一般只包括物理层和数据链路层
> - D. 以太网不一定使用 CSMA/CD 协议
>
> 下列关于广播式网络的说法中，错误的是（ ）。
>
> - A. 共享广播信道
> - B. 不存在路由选择问题
> - C. 可以不要网络层
> - D. 不需要服务接入点

第 10 题错选为 A。共享型以太网采用集线器。以太网物理拓扑为星形，逻辑拓扑为总线型。以太网提供的是无确认无连接的服务。

第 11 题错选为 B。广播式网络用于局域网，这里的服务接入点的意思是提供服务，也就是物理层为数据链路层提供服务。

![3.8.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAudqyLRpp9dpRV2NOmXVgglzk6gWAwACgxJrG6T-SFbISnhn11bvVQEAAwIAA3gAAz0E)

> 假设以太网 A 中 80% 的通信量在本局域网内进行，其余 20% 在本局域网与因特网之间进行，而以太网 B 正好相反。在这两个局域网中，一个使用集线器，另一个使用交换机，则交换机应放置的局域网是（ ）。
>
> - A. 以太网 A
> - B. 以太网 B
> - C. 任意以太网
> - D. 都不合适

本题错选为 B。本网络通信频繁的应该使用交换机。

![3.8.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuhqyLR7ZXZuEleuIRmYQ8EX66JcCgAChBJrG6T-SFaqXLsGwxZeZwEAAwIAA3gAAz0E)

> 【2013 统考真题】对于 100Mb/s 的以太网交换机，当输出端口无排队，以直通交换方式转发一个以太网帧（不包括前导码）时，引入的转发时延至少是（ ）。
>
> - A. 0μs
> - B. 0.48μs
> - C. 5.12μs
> - D. 121.44μs

本题错选为 C。以太网帧最短为 64B，最长为 1518B，但是需要注意这里的交换方式是直通，直通的意思是只检查帧的 mac 地址就选择出口，也就是 6B。

此外可以注意，这里的是转发时延，而不是传输时延。

### 计网王道选择题 1 刷第 4 章

![4.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAulqyLSbOD7bK5i_ma9d_cWvK7-rPgAChRJrG6T-SFZ1AAEniH2ElNwBAAMCAAN4AAM9BA)

> 在路由器互连的多个局域网的结构中，要求每个局域网（ ）。
>
> - A. 物理层协议可以不同，而数据链路层及其以上的高层协议必须相同
> - B. 物理层、数据链路层协议可以不同，而数据链路层以上的高层协议必须相同
> - C. 物理层、数据链路层、网络层协议可以不同，而网络层以上的高层协议必须相同
> - D. 物理层、数据链路层、网络层及高层协议都可以不同

本题错选为 B。可以理解为 ipv4 和 ipv6 网络。

![4.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAupqyLTBMVQD4cxnW8pFeGiIdfXfiwAChhJrG6T-SFZyDf7VqCq9BAEAAwIAA20AAz0E)

> 下列关于各种数据交换方式的叙述中，错误的是（ ）。
>
> - A. 电路交换不提供差错控制功能
> - B. 分组交换的分组有最大长度的限制
> - C. 虚电路是面向连接的，它提供的是一种可靠的服务
> - D. 在故障率很高的传输系统中，选择虚电路方式更合适

![4.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAutqyLT2WJomzRwl0s3-GFtYKvdj2QAChxJrG6T-SFbTjvVukGRsTwEAAwIAA3gAAz0E)

> 同一报文中的分组可以由不同的传输路径通过通信子网的方法是（ ）。
>
> - A. 分组交换
> - B. 电路交换
> - C. 虚电路方式
> - D. 数据报方式

这两题均错选为 A。

要搞清楚这两题，首先先捋一下概念，数据交换有三类技术，电路交换，报文交换以及分组交换。其中分组交换可以又分为虚电路
方式和数据报方式。

电路交换是在物理层实现的，即在物理层建立一条透明的传输通路，此时交换机根本不会去解析数据内容，也不会要求中间结点重传，差错控制必须由高层协议（例如传输层）去控制。

在高故障率的网络系统，数据报方式更适合。举一个例子，假假设美军的通信网络受到了敌方的核打击，网络中可能有 30% 甚至 50% 的路由器和通信链路在瞬间被炸毁！在这样故障率极高、节点随时毁灭的环境下，如何保证军方指挥指令依然能准确送达？

如果采用虚电路方式那么会频繁的建立与拆除连接。

对于第 11 题，也就是概念辨析了。

![4.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAuxqyLUpL-oroLrgnXS-OTA66vcliQACiBJrG6T-SFa0Gz9aWfljNAEAAwIAA20AAz0E)

> 下列关于 IP 分组的首部检验和字段的说法中，正确的是（ ）。
>
> - A. 检验和字段检查的范围是整个 IP 分组
> - B. 计算检验和的方法是对首部的每个 16 比特按反码运算求和再取反码
> - C. 若网络层发现检验和错误，则丢弃该 IP 分组并发送 ICMP 差错报文
> - D. IP 分组检验和的计算需要加入一个伪首部

本题错选为 C。对于 AB，IP 分组的校验和作用范围为首部（对于 IPv6 则没有校验和），计算校验和的方法是每 16bit 按反码求和再取反。如果是 TCP/UDP 的话，则是作用范围为全部，并且校验和每 16bit 按反码求和后需回卷，再取反。对于 C，TCP/IP 的网络层提供差错校验，但是不提供补救措施，仅丢弃该 IP 分组。ICMP 差错报文是 IP 分组不可达/时间超过/参数问题/改变路由时发送的。需要注意对于源点抑制（即拥塞丢弃），新版的已经取消。

![4.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAu1qyLVPc7pLP03s4kL1-ivEQu1BeQACiRJrG6T-SFbWe5oa0D_8SAEAAwIAA3gAAz0E)

> 某 IP 分组的片偏移字段值为 100，首部长度字段值为 5，总长度字段值为 100，则该 IP 分组的数据部分的第一个字节的编号与最后一个字节的编号是（ ）。
>
> - A. 100, 200
> - B. 100, 500
> - C. 800, 879
> - D. 800, 900

本题错选为 D。IP 片偏移字段为 100，即偏移为 800，IP 长度字段为 5，即 20B，总长度字段值为 100，即 100B。所以该分组数据部分长度为 100B-20B=80B，即 800-879（不给首部编号）

![4.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAu5qyLVh3nm38PDMaaFQlObSPJysjQACihJrG6T-SFYkMn3npK2owQEAAwIAA20AAz0E)

> 在下列 4 个地址中，属于单播地址的是（ ）。
>
> - A. 172.31.128.255/18
> - B. 10.255.255.255
> - C. 192.168.24.59/30
> - D. 224.105.5.211

本题错选为 C。单播地址，也就意味着非广播/多播地址。对于 D，224.0.0.0 至 239.0.0.0 为多播地址，对于 C，192.168.24.0011 1011/30，为广播地址；对于B，显然为广播地址，对于A，172.31.1000 0000.1111 1111，并没有后 32-18=14 位均为 1，所以显然是单波地址。

![4.2.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAu9qyLVwMuWJl_m4LRxdDUvvI5kPlgACixJrG6T-SFbARreFSssipAEAAwIAA3gAAz0E)

> 一个网段的网络号为 198.90.10.0/27，最多可以分成（ ）个子网；此网段划分成若干子网后，每个子网最多具有（ ）个可分配给主机的 IP 地址。
>
> - A. 8，30
> - B. 4，62
> - C. 16，14
> - D. 32，6
>
> 一台主机有两个 IP 地址，一个地址是 192.168.11.25，另一个地址可能是（ ）。
>
> - A. 192.168.11.0
> - B. 192.168.11.26
> - C. 192.168.13.25
> - D. 192.168.11.24

第 22 题没理解题目意思，所以没做出来。198.90.0000 1010.0000 0000/27，显然这是一个C类地址，即32-27=5，所以后5位作为IP地址，前3位作为主机地址。

第 23 题错选为。一个主机有 2 个 IP 地址，意味着这个主机有两块网卡。显然这是一个 C 类地址，且为私有地址。192.168.11.0001 1001；对于 A，显然这是网络号，所以不可以作为主机地址。对于 B，192.168.11.0001 1010，待定；对于 C，这是另一个网络的 IP 地址；对于 D，192.168.11.0001 1000。显然对于 B 和 D 而言，它们没有什么区别。

![4.2.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvBqyLWB7uzRNaXfAAEa0VT8f7F37uEAAowSaxuk_khWyp8cG6IyiDoBAAMCAAN4AAM9BA)

> 当下列 IP 地址作为 IP 数据报的目的地址时，互联网上的路由器不会正常转发的是（ ）。
>
> - A. 192.172.56.23
> - B. 172.15.34.128
> - C. 192.168.32.17
> - D. 172.128.45.34

本题错选为 B。

不能转发的：10.0.0.0-10.255.255.255；172.16.0.0-172.31.255.255；192.168.0.0-192.168.255.255。

回头理解一下：本机在决策使用哪个 ip 地址的时候，会根据目的 ip 进行类似和路由器一样的子网掩码计算，然后决定自己使用哪个 ip 发送。

![4.2.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvFqyLWWH3sw57TMUzi6lMxVYcZUGgACjRJrG6T-SFbBpozBfF3v9AEAAwIAA3gAAz0E)

> 主机 A 和主机 B 的 IP 地址分别为 216.12.31.20 和 216.13.32.21，要想让 A 和 B 工作在同一个 IP 子网内，应该给它们分配的子网掩码是（ ）。
>
> - A. 255.255.255.0
> - B. 255.255.0.0
> - C. 255.255.255.255
> - D. 255.0.0.0

本题错选为 B。属于脑子抽了。

![4.2.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvNqyLXGSoaY1t92CfZzPV7OagQlXwACjxJrG6T-SFb6p8IOjHYRNgEAAwIAA3gAAz0E)

> 现将一个 IP 网络划分为 4 个子网，若其中一个子网是 192.168.1.130/26，则下列网络中不可能是另外 3 个子网之一的是（ ）。
>
> - A. 192.168.1.0/25
> - B. 192.168.1.64/26
> - C. 192.168.1.96/27
> - D. 192.168.1.224/27

本题错选为 A。可以采用类似哈夫曼树的思想。

192.168.1.1000 0010/26

192.168.1.0000 0000/25

192.168.1.0100 0000/26

192.168.1.0110 0000/27

192.168.1.1110 0000/27

对比这几个 IP 地址，绘制哈夫曼树。需要注意的是，这道题的意思不是 ABCD 以及题目里给的，五选四凑出答案，而是问能不能是其中之一。

题目里显然是占 1/4，所以需要利用剩下的去凑 1。

![4.2.45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvRqyLXlbIPxJNJ-4He5rOZrq1nbjgACkBJrG6T-SFYhQOmK-IMH0AEAAwIAA3gAAz0E)

> 某网络拓扑如下图所示，H1 与 H2 的默认网关和子网掩码都分别配置为 192.168.3.1 和 255.255.255.0，H3 和 H4 的默认网关和子网掩码都分别配置为 192.168.3.254 和 255.255.255.128，初始时所有设备的 ARP 缓存均为空。则下列说法中错误的是（ ）。
>
> - [图示] 图中文字：R2、192.168.3.254、E1、Switch、Hub、H4、192.168.3.252、H1、192.168.3.2、H2、192.168.3.3、H3、192.168.3.251。R2（192.168.3.254，标注 E1）连到 Switch，Switch 分别连 H1（192.168.3.2）、H2（192.168.3.3）和 Hub，Hub 分别连 H4（192.168.3.252）和 H3（192.168.3.251）。
>
> - A. 若 H1 向 H3 发送数据，则 H2、H3、H4 都能收到 H1 发来的 ARP 请求报文
> - B. 若 H3 向 H1 发送数据，则 H3 能收到 H1 发来的 ARP 响应报文
> - C. 若 H1 向 H2 发送数据，则 H2、H3、H4 都能收到 H1 发来的 ARP 请求报文
> - D. 若 H3 向 H4 发送数据，则 H3 能收到 H4 发来的 ARP 响应报文

本题错选为 C。首先观察子网掩码与默认网关，从 H1，H2 的视角来看，所有主机都在本网络内，从 H3 和 H4 的视角来看，只有它们相互认识，而不认识的必须交付给默认网关。

对于 A，H1 向 H3 发送数据，首先检查 IP 和子网掩码，发现属于同一个网络，所以直接发，但是没有 mac 地址，所以进行 ARP 请求。交换机收到这个请求后，由于为空，所以进行自学习，填 MACH1，随后进行泛洪，除了 H1 进入的那个端口外全部都发一遍广播帧。H2 收到广播帧后，在网络层将之丢弃，集线器收到之后直接信号放大转发，H3 和 H4 都收到，H4 在网络层丢弃，H3 收到。

对于 B，H3 向 H1 发送数据，首先检查 IP 和子网掩码，发现不属于同一个网络，所以发往默认网关，但是由于不知道默认网关的 MAC 地址，所以 H3 发送 ARP 请求寻找路由器。此时除了 H3 之外所有主机都受到了 ARP 请求，而只有 R2 进行回应。随后 H3 将数据发给 R2，R2 发送 ARP 请求，H1 发给 R2 其 MAC 地址，R2 发给 H1。

对于 C，H1 向 H2 发送，发现是同一个网络，直接发送，ARP 请求。

对于 D，H3 向 H4 发送数据，也是 ARP。

所以这道题可以很好的理解 ARP 请求与 IP。

![4.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvVqyLYhIYoAASSg6mgEy3_ng3hB31UAApESaxuk_khWBb8Rr726mq4BAAMCAAN4AAM9BA)

> 一个 IPv6 地址的简化写法为 8::D0:123:CDEF:89A，则其完整地址应该是（ ）。
>
> - A. 8000:0000:0000:0000:00D0:1230:CDEF:89A0
> - B. 0008:0000:0000:0000:00D0:0123:CDEF:89A0
> - C. 8000:0000:0000:0000:D000:1230:CDEF:89A0
> - D. 0008:0000:0000:0000:00D0:0123:CDEF:089A

本题错选为 C。需要注意，可以省略的是前导 0。

![4.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvZqyLYyIMcMVsnHv6Sq6C_v8R0UjwACkhJrG6T-SFa1V_gljk79twEAAwIAA3gAAz0E)

> 若一个路由器收到的 IPv6 数据报因太大而不能转发到链路上，则路由器将把该数据报（ ）。
>
> - A. 丢弃
> - B. 暂存
> - C. 分片
> - D. 转发至能支持该数据报的链路上

本题错选为 D。IPv6 只有源主机才能分片，路由器收到太大的分片直接丢弃。

![4.4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvdqyLZWjaWIEZjfJbMGF7DP-n_hjAACkxJrG6T-SFa7luhnOTzHigEAAwIAA3gAAz0E)

> 下列关于链路状态协议的描述中，错误的是（ ）。
>
> - A. 仅相邻路由器需要交换各自的路由表
> - B. 全网路由器的拓扑数据库是一致的
> - C. 采用洪泛技术更新链路变化信息
> - D. 具有快速收敛的优点

本题错选为 B。A 显然是 RIP 的，对于 B，在稳定了之后是一样的（没必要重复去算）

![4.4.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvhqyLZnjMR7mFU2ffJwVa4IXMe1EAAClBJrG6T-SFagt4i8Q3NkjwEAAwIAA3gAAz0E)

> 下列关于分层路由的描述中，错误的是（ ）。
>
> - A. 采用分层路由后，路由器被划分成区域
> - B. 每个路由器不仅知道如何将分组路由到自己区域的目标地址，还知道如何路由到其他区域
> - C. 采用分层路由后，可以将不同的网络连接起来
> - D. 对于大型网络，可能需要多级分层路由来管理
>
> 以下关于自治系统的描述中，错误的是（ ）。
>
> - A. 自治系统划分区域的好处是，将利用洪泛法交换链路状态信息的范围局限在每个区域内，而不是整个自治系统
> - B. 采用分层划分区域的方法使交换信息的种类增多，同时也使 OSPF 协议更加简单
> - C. OSPF 协议将一个自治系统再划分为若干更小的范围，称为区域
> - D. 在一个区域内部的路由器只知道本区域的网络拓扑，而不知道其他区域的网络拓扑的情况

第 5 题错选为 A。B，并不是每个路由器都知道，而是只需要区域边界路由知道即可。

第 6 一错选为 D。使得 OSPF 协议更复杂。注意这里是区域，而不是自治系统边界路由器/核心路由器那一套。

![4.4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvlqyLZ6CVUDxCSioUS12dEMxWWqBAAClRJrG6T-SFZAwuwK9ZUe4QEAAwIAA3gAAz0E)

> 某分组交换网络的拓扑如下图所示，各路由器使用 OSPF 协议且均已收敛，各链路的度量已在图中标注。假设各段链路的带宽均为 100Mb/s，分组长度为 1000B，其中分组的首部长度为 20B。若主机 A 向主机 B 发送一个大小为 980000B 的文件，忽略分组的传播时延和封装/解封时间，从 A 发送开始到 B 接收完毕为止，需要的时间是（ ）。
>
> - [图示] 图中文字：A、B、2、6、2、3、1、1。主机 A 经标注 2 的链路连到左上路由器，左上路由器经标注 6 的链路连到右上路由器，右上路由器经标注 2 的链路连到主机 B；左上路由器经标注 3 的链路连到左下路由器，左下路由器经标注 1 的链路连到右下路由器，右下路由器经标注 1 的链路连到右上路由器，四个路由器首尾相接构成环状。
>
> - A. 80.08ms
> - B. 80.16ms
> - C. 80.32ms
> - D. 80.64ms

本题没做出来，其实只是因为最前面的分组转发没理解。

IP 多播主要需要注意，将 IP 地址的后 23 位映射到多播 mac 地址即可。

![4.4.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvpqyLaXTSj-TyPCuiiz6BHCLNoAAdoAApYSaxuk_khW_eRvqwU2wX8BAAMCAAN4AAM9BA)

> 以下关于移动 IP 工作原理的描述中，错误的是（ ）。
>
> - A. 移动 IP 的基本工作过程可以分为代理发现、注册、分组路由与注销 4 个阶段
> - B. 节点在使用移动 IP 进行通信时，归属代理和外部代理之间需要建立一条隧道
> - C. 移动节点到达新的网络后，通过注册过程把自己新的可达信息通知外部代理
> - D. 移动 IP 的分组路由可以分为单播、广播与多播

本题错选为 D。

移动 IP 的全过程，就像你（移动节点）带号离家出走去外地旅游。你到了外地后，先找当地的居委会（外地代理 FA）办个临时的暂住证（转交地址 CoA），并立刻打电话回老家，把这个暂住证号码告诉老家的村长（归属代理 HA）。这样，以后别人再往你老家寄信（真实目的地仍是你的永久 IP），老家村长就会直接把信截胡，然后用一个更大的新信封把原信包起来（IP 隧道封装），写上你的暂住证号码寄到外地。外地居委会收到大信封后，拆开扔掉，把里面的原信安全地交到你手里，从而保证你的 TCP 连接在漫游时永远不断线！

![4.7.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvtqyLasC8EyHngx2-Ilgg_WZri5iwAClxJrG6T-SFbalSbpSnBdfwEAAwIAA20AAz0E)

> 下列关于冲突域的叙述中，正确的是（ ）。
>
> - A. 能接收到同一广播帧的所有设备的集合
> - B. 能发送同一广播帧的所有设备的集合
> - C. 能产生冲突的所有设备的集合
> - D. 能隔离冲突的所有设备的集合

本题错选为 A。其实理解一下就知道了。A 指的是广播域内的设备，B，显然很多设备都可以发送广播帧，对于 D，隔离冲突的设备是交换机，显然交换机的集合并不是冲突域。

![4.7.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAvxqyLbH5HRrsS9rBiqwW65hZjwD0gACmBJrG6T-SFYQPBSWN9_IpgEAAwIAA3gAAz0E)

> 路由器的路由选择部分包括（ ）。
>
> - A. 路由选择处理机
> - B. 路由选择协议
> - C. 路由表
> - D. 以上都是
>
> 不同网络设备传输数据的延迟时间是不同的，下列设备中传输时延最大的是（ ）。
>
> - A. 局域网交换机
> - B. 网桥
> - C. 路由器
> - D. 集线器

第 13 题错选为 B。显然是 D。

第 14 题错选为 A。显然是 C，因为过了 3 层。

![4.7.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAv1qyLbfNBtnj4VC1f3fxHKh9oTYmgACmRJrG6T-SFb76QpyHEa8LwEAAwIAA3gAAz0E)

> 路由器转发分组（在路由表中已找到匹配的条目）时，会根据路由表中的（ ）字段来确定输出端口。
>
> - A. 目的网络地址
> - B. 下一跳地址
> - C. 距离度量值
> - D. 接口标识符

本题错选为 A。已经找到目的条目后，根据标识符转发。

![4.7.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAv5qyLbzVcroZePUPbNXMVotmhab-gACmhJrG6T-SFZrzqX8SKJ4twEAAwIAA3gAAz0E)

> 【2012 统考真题】下列关于 IP 路由器功能的描述中，正确的是（ ）。
> I. 运行路由协议，设置路由表
> II. 监测到拥塞时，合理丢弃 IP 分组
> III. 对收到的 IP 分组头进行差错检验，确保传输的 IP 分组不丢失
> IV. 根据收到的 IP 分组的目的 IP 地址，将其转发到合适的输出线路上
>
> - A. 仅 III、IV
> - B. 仅 I、II、III
> - C. 仅 I、II、IV
> - D. I、II、III、IV

本题错选为 D。对于 3，对于 IP 分组进行差错检测后，如果错了直接丢了。

### 计网王道选择题 1 刷第 6 章

![6.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAv9qyLcQn3IpGmzyaKUMgiqRlXEoTgACmxJrG6T-SFZ5mKoT8DBXeAEAAwIAA3gAAz0E)

> 下列关于客户/服务器模型的说法中，不正确的是（ ）。
>
> - A. 服务器专注于完成某些服务，而客户则作为这些服务的使用者
> - B. 客户通常位于前端，服务器通常位于后端
> - C. 客户和服务器通过网络实现协同计算任务
> - D. 客户是面向任务的，服务器是面向用户的

本题错选为 C。客户是面向用户的，服务器是面向任务的。

![6.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwABasi3Ij-hNHjE93E7Z3iRh68TA8MAApwSaxuk_khW1gdM5aaDcUgBAAMCAAN4AAM9BA)

> 互联网中域名解析依赖于由域名服务器组成的逻辑树。在域名解析过程中，主机上请求域名解析的软件不需要知道（ ）信息。
> I. 本地域名服务器的 IP
> II. 本地域名服务器父节点的 IP
> III. 域名服务器树根节点的 IP
>
> - A. I 和 II
> - B. I 和 III
> - C. II 和 III
> - D. I、II 和 III

本题错选为 A。主机请求域名解析的软件只需要知道本地域名服务器的地址并且委托其查询。

![6.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwJqyLeMzYd_NPrBrUA-jFns_mtIfgACnRJrG6T-SFZOs9e5RDWRogEAAwIAA3gAAz0E)

> （ ）可以将其管辖的主机名转换为主机的 IP 地址。
>
> - A. 本地域名服务器
> - B. 根域名服务器
> - C. 权限域名服务器
> - D. 代理域名服务器

本题错选为 A，事实上应该是背书题。

![6.2.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwNqyLeeSTZxqybYCI48PU7Gj4XWwwACnhJrG6T-SFYhorof_6v-bwEAAwIAA3gAAz0E)

> 【2020 统考真题】假设下图所示网络中的本地域名服务器只提供递归查询服务，其他域名服务器都只提供迭代查询服务；局域网内主机访问 Internet 上各服务器的往返时间（RTT）均为 10ms，忽略其他各种时延。若主机 H 通过超链接 `http://www.abc.com/index.html` 请求浏览纯文本 Web 页 index.html，则从单击超链接开始到浏览器接收到 index.html 页面为止，所需的最短时间与最长时间分别是（ ）。
>
> - [图示] 图中文字：本地域名服务器、路由器、局域网、H、Internet、根域名服务器、com 顶级域名服务器、abc.com 域名服务器、`www.abc.com`。主机 H 与本地域名服务器接在总线型局域网上，局域网经路由器连入 Internet 云，云内画有根域名服务器、com 顶级域名服务器、abc.com 域名服务器和 `www.abc.com` 四台服务器。
>
> - A. 10ms，40ms
> - B. 10ms，50ms
> - C. 20ms，40ms
> - D. 20ms，50ms

本题错选为 B。捋一下过程：

本机委托本地域名服务器进行递归查询，此时不消耗 RTT，假设本地没有 DNS 缓存，那么本地域名服务器向根域名服务器查询，并且得到.com 的信息，消耗 1RTT，向顶级域名服务器查询，得到.abc.com 的信息，消耗 1RTT，向权限域名服务器查询，得到 <www.abc.com> 的 ip 地址，消耗 1RTT，递归结束。再对 ip 进行 get 请求，建立 TCP 连接，TCP 连接需要消耗 2 个 RTT，而 web 服务器传回来需要 1 个 RTT，所以综合上述，DNS 解析需要 5RTT。假设本地有 DNS 缓存，那么直接访问 ip 即可，即 2RTT。

![6.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwRqyLe0iF1L9n_Ibw2olTqBTh23HgACnxJrG6T-SFZ2HATPSnaYrQEAAwIAA3gAAz0E)

> 一个 FTP 用户发送了一个 LIST 命令来获取服务器的文件列表，这时服务器应通过（ ）端口来传输该列表。
>
> - A. 21
> - B. 20
> - C. 22
> - D. 19

本题错选为 A。传输数据应该由 20 号端口走。

![6.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwVqyLfLhV0mXvKi_-9VmgQnYWOg_QACoBJrG6T-SFamAAFl06ho6PwBAAMCAAN4AAM9BA)

> 直接封装 FTP、DNS、DHCP 报文的协议分别是（ ）。
>
> - A. TCP、UDP、UDP
> - B. UDP、TCP、TCP
> - C. TCP、UDP、IP
> - D. UDP、UDP、UDP

本题错选为 C。属于低级错误，在 IP 协议上跑的是 OSPF。

![6.4.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwZqyLfgQ-gtXB2m-pnlbZwUQfwzFgACoRJrG6T-SFYWlhZI_UlXugEAAwIAA3gAAz0E)

> 下列关于电子邮件格式的说法中，错误的是（ ）。
>
> - A. 电子邮件内容包括邮件头与邮件体两部分
> - B. 邮件头中发信人地址（From: ）、发送时间、收信人地址（To: ）及邮件主题（Subject: ）是由系统自动生成的
> - C. 邮件体是实际要传送的信函内容
> - D. MIME 允许电子邮件系统传输文字、图像、语音与视频等多种信息

本题错选为 D。显然 B 是错误的。

![6.5.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwdqyLfzYRVr80digBdwWzEAASVU7YcAAqISaxuk_khWkoJlwCPlfkoBAAMCAAN4AAM9BA)

> 下面的（ ）协议中，客户与服务器之间采用面向无连接的协议进行通信。
>
> - A. FTP
> - B. SMTP
> - C. DNS
> - D. HTTP

本题错选为 D，属于低级错误。

![6.5.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwlqyLgGYYnKspzSKUncdbsnuL7IGwACoxJrG6T-SFYFl9fqr627mwEAAwIAA3gAAz0E)

> 使用鼠标单击一个万维网文档时，若该文档除有文本外，还有三幅 gif 图像，则在 HTTP/1.0 中需要建立（ ）次 TCP 连接。
>
> - A. 4
> - B. 3
> - C. 2
> - D. 1
>
> 仅需 Web 服务器对 HTTP 报文进行响应，但不需要返回请求对象时，HTTP 请求报文应该使用的方法是（ ）。
>
> - A. GET
> - B. PUT
> - C. POST
> - D. HEAD

第 6 题错选为 C。首先获得 index 建立一次，然后获取 3 个图像建立 3 次。

第 7 题错选为 A。GET 需要返回所有数据，PUT 需要新建，POST 需要处理，HEAD 仅为侦察。

![6.5.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwpqyLgW4BZyERNLmZM8j4gxN8OVCwACpRJrG6T-SFYAARzQwIPKlLgBAAMCAAN4AAM9BA)

> 若浏览器支持并行 TCP 连接，使用非持久的 HTTP/1.0 协议请求浏览 1 个 Web 页，该页中引用同一网站上的 7 个小图像文件，则从浏览器为传输 Web 页请求建立 TCP 连接开始，到接收完所有内容为止，所需的往返时间 RTT 数至少是（ ）。
>
> - A. 3
> - B. 4
> - C. 8
> - D. 9

本题错选为 C。并行 TCP，所以首先先建立 TCP，花费 2RTT 的时间拿到 index，然后花费 2RTT 的时间拿到剩下的图片。

![6.5.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwtqyLgzNl5ijxOsjRz07s65w6WLcQACpxJrG6T-SFbYXS5Z9FZz1gEAAwIAA3gAAz0E)

> 主机 H 通过持久的 HTTP/1.1 协议请求服务器 S 上的 5KB 数据，最大段长 MSS = 1KB，往返时间 RTT = 50ms，最长报文段寿命 MSL = 800ms，假设双方的接收窗口都足够大，当 H 收到来自 S 的第一个携带数据的报文段后，立即向 S 发送连接释放报文段（注：连接释放报文段可以携带数据信息或确认信息）。从 H 请求与 S 建立 TCP 连接时刻起，到 H 进入 CLOSED 状态为止，所需的时间至少是（ ）。
>
> - A. 1000ms
> - B. 1200ms
> - C. 1600ms
> - D. 1800ms
>
> 假定一个 NAT 路由器的公网地址为 205.56.79.35，并且有如下表项：
>
> | 转换端口 | 源 IP 地址 | 源端口 |
> | --- | --- | --- |
> | 2056 | 192.168.32.56 | 21 |
> | 2057 | 192.168.32.56 | 20 |
> | 1892 | 192.168.48.26 | 80 |
> | 2256 | 192.168.55.106 | 80 |
>
> 它收到一个源 IP 地址为 192.168.32.56、源端口为 80 的分组，其动作是（ ）。
>
> - A. 转换地址，将源 IP 变为 205.56.79.35，端口变为 2056，然后发送到公网
> - B. 添加一个新的条目，转换 IP 地址及端口后发送到公网
> - C. 不转发，丢弃该分组
> - D. 直接将分组转发到公网

第 14 题错选为 A。5KB/MSS=5，所以数据信息抽象为 5。首先建立 TCP 连接，花费 1.5RTT，然后采用慢开始，也就是 0 时刻传输 1（花费 0.5RTT），1 时刻传输 2（花费 1RTT），2 时刻传输 2（花费 1RTT），这样可以传输完所有数据。此时总共是 4RTT。然后进行四报文挥手，花费 2RTT 后再消耗 2MSL 的时间，也就是总共 6RTT+2MSL=300ms+1600ms=1800ms。

第 15 题错选为 B。本道题应该这么考虑，源端口为 80 的分组，且 192.168.32.56，也就意味着这是一个来自于内网的 web 服务器的回应。此时有两种情况：第一，目的地址是内网 ip，那么此时只需要丢弃即可；第二，目的地址是外网 ip，那么意味着外网 ip 必然先对该内网 web 服务器进行请求，而想对内网 web 服务器进行请求，那么必然得有一个端口映射到 192.168.32.56:80 端口。NAT 技术的本质是端口到端口的映射！对 HTTP 服务器请求的时候默认是到 80 端口，当然也可以自己去配。
