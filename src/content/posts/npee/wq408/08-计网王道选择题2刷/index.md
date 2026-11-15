---
title: 计网王道选择题 2 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计网王道选择题 2 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.08
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计网王道选择题 2 刷

### 计网王道选择题 2 刷第 1 章

![1.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAwxqyLiRx6CYeYGIGLkUW7b99eO4BgACqBJrG6T-SFaMCohDlYcyPwEAAwIAA3gAAz0E)

> 不同的数据交换方式有不同的性能。为了使数据在传输期间的时延最小，首选的交换方式是（①）；为保证数据无差错地传送，不应选用的交换方式是（②）；分组交换对报文交换的主要改进是（③），这种改进产生的直接结果是（④）。
>
> - ① A. 电路交换
> - B. 报文交换
> - C. 分组交换
> - ② A. 电路交换
> - B. 报文交换
> - C. 分组交换
> - ③ A. 传输单位更小且有固定的最大长度
> - B. 传输单位更大且有固定的最大长度
> - C. 差错控制更完善
> - D. 路由算法更简单
> - ④ A. 降低了误码率
> - B. 提高了数据传输速率
> - C. 减少传输时延
> - D. 增加传输时延

本题第 2 空错选为 B。数据无差错的传送，不应选择的方式是电路交换。这里辨析一下电路交换的特点，其是连接一条物理线路，没有差错校验，直接发，毕竟是纯硬件。

![1.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAw1qyLiprP6gdW06QvXKCcktfJOD_wACqxJrG6T-SFYJM2_vkbrtGwEAAwIAA3gAAz0E)

> 【2025 统考真题】某网络拓扑及各链路带宽如下图所示。网络按电路交换方式运行时，主机 H1 与 H2 建立一条带宽为 10Mb/s 的电路，建立电路时间为 32μs；按分组交换方式运行时，分组长度为 400B，忽略分组首部开销。现 H1 向 H2 发送一个 2MB（1M=10⁶）的文件，分别采用电路交换、报文交换、分组交换方式时，H2 至少需 T_CS、T_MS、T_PS 时间才能接收到全部文件内容，则 T_CS、T_MS、T_PS 满足的关系是（ ）。
>
> - [图示] H1 —(10Mb/s)— R1 —(100Mb/s)— R2 —(1000Mb/s)— H2
>
> - A. T_CS > T_MS > T_PS
> - B. T_MS > T_PS > T_CS
> - C. T_MS > T_CS > T_PS
> - D. T_PS > T_MS > T_CS

![1.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAw5qyLi24xbUc1-7QH00Gegqe6zl6QACrBJrG6T-SFbuLHXJxfms9wEAAwIAA3gAAz0E)

> 负责将比特转换成电信号进行传输的层是（ ）。
>
> - A. 应用层
> - B. 网络层
> - C. 数据链路层
> - D. 物理层

本题错选为 A。与 1 刷时候一样的傻逼错误。

![1.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAw9qyLjzE9qi3tkr7cbmpWTTpC2x8QACrhJrG6T-SFbsOx2BwZAasgEAAwIAA3gAAz0E)

> 当数据由端系统 A 传送至端系统 B 时，不参与数据封装工作的是（ ）。
>
> - A. 物理层
> - B. 数据链路层
> - C. 网络层
> - D. 表示层

本题错选为 D。显然物理层向上运输的时候不会参与数据封装，对于表示层，表示层的作用是数据格式转换与压缩，会话层的作用是打断点。

![1.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxBqyLkG-JZhJHtJUeNuBUv2WEhbGwACtxJrG6T-SFbvhZuBtVhCWAEAAwIAA3gAAz0E)

> 在 OSI 参考模型中，各层都有差错控制过程，指出以下每种差错发生在哪些层中：噪声使传输链路上的一个 0 变成 1 或一个 1 变成 0（①），收到一个序号错误的目的帧（②），一台打印机正在打印，突然收到一个错误指令要打印头回到本行的开始位置（③）。
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

本题第 3 空错选为 C。打断点是会话层的功能。

### 计网王道选择题 2 刷第 2 章

![2.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxJqyLk0aekJRt3OIat2ErQaCKWbnQACuBJrG6T-SFadfEIn_RMHzAEAAwIAA3gAAz0E)

> 不含同步信息的编码是（ ）。
> I. 非归零编码 II. 曼彻斯特编码 III. 差分曼彻斯特编码
>
> - A. 仅 I
> - B. 仅 II
> - C. 仅 II、III
> - D. I、II、III

本题错选为 C。不包含，属于低级错误。

![2.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxNqyLlF2Np_T1lxlMN81Eo27-hGKAACuRJrG6T-SFaDC2jRMR_YFQEAAwIAA3gAAz0E)

> 电话系统的典型参数是信道带宽为 3000Hz，信噪比为 30dB，该系统的最大数据传输速率为（ ）。
>
> - A. 3kb/s
> - B. 6kb/s
> - C. 30kb/s
> - D. 64kb/s
>
> 一个信道的信号功率是 0.14W，噪声功率是 0.02W，频率范围为 3.5 ~ 3.9MHz，则该信道的最高数据传输速率是（ ）。
>
> - A. 1.2Mb/s
> - B. 2.4Mb/s
> - C. 11.7Mb/s
> - D. 23.4Mb/s

第 13 题错选为 B。信道带宽为 3000Hz，信噪比为 30dB，考虑无噪声的信道，也就是 2×3000×log2V，本题没给 V，忽略；考虑有噪声的信道，Wlog2(1+1000)=3000×10=30kb/s。

第 14 题没做出来，还是要理解频的概念，是个范围。

![2.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxRqyLlXiivjsv1hi9RZ8I4aj6lUOAACuhJrG6T-SFbrV9UYA1PgRwEAAwIAA3gAAz0E)

> 一个信道每 1/8s 采样一次，传输信号共有 16 种变化状态，最大数据传输速率是（ ）。
>
> - A. 16b/s
> - B. 32b/s
> - C. 48b/s
> - D. 64b/s

本题错选为 D。每 1/8s 采样一次，固定上限是 8Hz，所以 Wlog2V=32。

![2.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxVqyLlqqKtU9FLKo3g8aHzNbiBK5wACuxJrG6T-SFZ5eYr-axtRRQEAAwIAA3gAAz0E)

> 【2014 统考真题】在下列因素中，不影响信道数据传输速率的是（ ）。
>
> - A. 信噪比
> - B. 频率带宽
> - C. 调制速率
> - D. 信号传播速度

本体错选为 C。信号传播速度指的是 RTT 相关，也就是光信号/电信号本身的传播速度，数据传输速率指的是发送时延，也就是 bps。

![2.1.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxZqyLmMB24QuT6xrjR8MV_L84RBcgACvBJrG6T-SFbD5RYkBs7EsgEAAwIAA3gAAz0E)

> 【2016 统考真题】如下图所示，若连接 R2 和 R3 链路的频带宽度为 8kHz，信噪比为 30dB，该链路实际数据传输速率约为理论最大数据传输速率的 50%，则该链路的实际数据传输速率约为（ ）。
>
> - [图示] 路由器 R2 与 R3 之间由一条链路相连（图中标注 R2、R3）
>
> - A. 8kb/s
> - B. 20kb/s
> - C. 40kb/s
> - D. 80kb/s

本题错选为 C。考虑有噪声的信道，即 Wlog2(1+1000)=8000×10=80kb/s，除以 2 即 C。考虑无噪声的信道，即 2Wlog2V，此处没有提供 V，所以不需要考虑。

![2.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxdqyLmil5yklN1DvLfi2_6rX4Cy1QACvRJrG6T-SFZ5rWvh0nQ39gEAAwIAA3gAAz0E)

> 当描述一个物理层接口引脚处于高电平时的含义时，该描述属于（ ）。
>
> - A. 机械特性
> - B. 电气特性
> - C. 功能特性
> - D. 规程特性

电器特性指的是多少伏之类的，逻辑 0 和逻辑 1 对应的电压区间是什么；

功能特性：引脚的语义。

重点在于含义

![2.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxhqyNXlsTEIAqd_n2cID-nTGt5j8QAC1RJrG6T-SFbyWS2HN2WHKwEAAwIAA3gAAz0E)

> 当集线器的一个端口收到数据后，将其（ ）。
>
> - A. 从所有端口广播出去
> - B. 从除输入端口外的所有端口广播出去
> - C. 根据目的地址从合适的端口转发出去
> - D. 随机选择一个端口转发出去

本题错选为 A，没看完选项。

### 计网王道选择题 2 刷第 3 章

![3.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxlqyNZXRPI2HEFtf5jUiWbXYsZ-twAC1xJrG6T-SFYqX2FD8il1pwEAAwIAA3gAAz0E)

> 下列选项中，不属于数据链路层协议功能的是（ ）。
>
> - A. 定义数据格式
> - B. 提供节点之间的可靠传输
> - C. 控制对物理传输介质的访问
> - D. 为终端节点隐蔽物理传输的细节
>
> 为了避免传输过程中帧的丢失，数据链路层采用的方法是（ ）。
>
> - A. 帧编号机制
> - B. 循环冗余检验码
> - C. 海明码
> - D. 计时器超时重发

第 3 题错选为 C。D 是网络层的作用，对于 C，可理解为 MAC 子层，MAC 需要对特定的物理链路进行控制。

第 4 题错选为 B。循环冗余校验是校验手段，而不是能保证帧重传。

![3.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxpqyNZtv09cvMk6bsCL2BXlBzesqwAC2BJrG6T-SFa8SOWkg8Lm6AEAAwIAA3gAAz0E)

> 流量控制实际上是对（ ）的控制。
>
> - A. 发送方的数据流量
> - B. 接收方的数据流量
> - C. 发送、接收方的数据流量
> - D. 链路上任意两节点间的数据流量

本体错选为 C。流量控制是对发送方的数据流量控制，拥塞控制是对接收方的数据流量控制。

![3.4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxtqyNZ9_CPwErnW7w0sqZl6ww7RWgAC2RJrG6T-SFa-WAjMOl5SagEAAwIAA3gAAz0E)

> 下列情况中，会使停止 - 等待协议的效率变得很低的是（ ）。
>
> - A. 当源主机和目的主机之间的距离很近而且数据传输速率很高时
> - B. 当源主机和目的主机之间的距离很远而且数据传输速率很高时
> - C. 当源主机和目的主机之间的距离很近而且数据传输速率很低时
> - D. 当源主机和目的主机之间的距离很远而且数据传输速率很低时

本题错选为 D，属于低级错误，和一刷时类似。

![3.4.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAxxqyNa34hADyYybaQh5qQwtQUWRKwAC3xJrG6T-SFYbGSGlr-g7GQEAAwIAA3gAAz0E)

> 数据链路层采用后退 N 帧协议进行流量控制，发送方已发送编号为 0 - 6 的帧，之后收到 5 号数据帧的确认，发送方的滑动窗口向后移动后，发送方可发送的数据帧数量为 6 个，假设整个过程未发生超时，则应采用（ ）位给数据帧编号。
>
> - A. 3
> - B. 4
> - C. 5
> - D. 6

本题错选为 B，和一刷时一样的错误。

![3.4.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAx1qyNfDycwagF05QyMyj6vx1xduAgAC4RJrG6T-SFYlJp52tIRNngEAAwIAA3gAAz0E)

> 对于窗口总大小为 n 的滑动窗口，最多可以有（ ）帧已发送但没有确认。
>
> - A. 0
> - B. n-1
> - C. n
> - D. n/2

本体错选为 C。发送窗口最大为 n-1。

![3.4.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAx5qyNfZfCsKWmOwrl8uOzyshhmo8wAC4hJrG6T-SFaUSNFXV8wCYQEAAwIAA3gAAz0E)

> 【2018 统考真题】主机甲采用停止 - 等待协议向主机乙发送数据，数据传输速率是 3kb/s，单向传播时延是 200ms，忽略确认帧的传输时延。当信道利用率等于 40% 时，数据帧的长度为（ ）。
>
> - A. 240 比特
> - B. 400 比特
> - C. 480 比特
> - D. 800 比特

本题错选为 B。假设数据帧长度为 x，即 (x/3000)/(x/3000+RTT)=0.4，即 x=800bit。

![3.4.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAx9qyNf1UUhfvHk1hXslJ3lbw5oYgQAC4xJrG6T-SFYksGAtP2tvxQEAAwIAA3gAAz0E)

> 【2019 统考真题】对于滑动窗口协议，若分组序号采用 3 比特编号，发送窗口大小为 5，则接收窗口最大是（ ）。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5
>
> 【2020 统考真题】假设主机甲采用停止 - 等待协议向主机乙发送数据帧，数据帧长与确认帧长均为 1000B，数据传输速率是 10kb/s，单向传播时延是 200ms，则主机甲的最大信道利用率为（ ）。
>
> - A. 80%
> - B. 66.7%
> - C. 44.4%
> - D. 40%

第 28 题错选为 A。和 1 刷一样的错误。

第 29 题错选为 A。1000×8/10000=800ms，800/(800+800+400)=0.4。

![3.5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyBqyNgVor7PoMpAPwQsWn5Zz5aaNwAC5hJrG6T-SFbhlnZhFbzvGQEAAwIAA3gAAz0E)

> 介质访问控制（MAC）子层的主要功能是（ ）。
>
> - A. 提供可靠的数据传输
> - B. 控制和协调所有站点对共享介质的访问
> - C. 实现数据链路层和物理层之间的接口
> - D. 为上层协议提供服务

本题错选为 C。对于 C 是物理层的作用，MAC 层不提供可靠的数据传输，MAC 子层上面还有一个小的层？那个层才是对上层协议提供服务。上半层是 LLC 子层，也就是逻辑链路。不同的 MAC 层上面必须得有一个一样的 LLC。

![3.5.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyFqyNg3VyLtglTqiTZjImSOL5LqqgAC5xJrG6T-SFa2NCgiLnTp0gEAAwIAA3gAAz0E)

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

这两题和 1 刷一样。

![3.5.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyJqyNhJMv-5VgflM15sQ2elomx6GwAC6BJrG6T-SFbgLMwChzuj5gEAAwIAA3gAAz0E)

> 在 CSMA 的非坚持协议中，当站点监听到总线信道空闲时，它（ ）。
>
> - A. 以概率 p 传送
> - B. 马上传送
> - C. 以概率 1-p 传送
> - D. 以概率 p 延迟一个时间单位后传送

本体错选为 A，脑子抽了选了 A。

本质是理解问题，CSMA 的 1-坚持是空闲立刻发，不空闲死守；非坚持协议是空闲立刻发，不空闲立刻放弃；p-坚持是空闲以 p 的概率发送，不空闲死守。

![3.5.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyNqyNkZdbkeK8CSfGNLAxRvkuZrRwAC6RJrG6T-SFY2lwABYBSF178BAAMCAAN4AAM9BA)

> 下列关于令牌环网络的说法中，错误的是（ ）。
> Ⅰ. 信道的利用率比较公平
> Ⅱ. 重负载下信道利用率高
> Ⅲ. 节点可以一直持有令牌，直至所要发送的数据传输完毕
> Ⅳ. 节点只能持有令牌一段固定的时间，对于没有数据要发送的节点也是如此
>
> - A. Ⅰ、Ⅱ和Ⅲ
> - B. Ⅲ
> - C. Ⅲ和Ⅳ
> - D. Ⅳ

本体错选为 D，和 1 刷的时候一样的错误。

![3.5.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyVqyNnvGAnwVWSgw_u-eA617n6tJQAC6hJrG6T-SFbsrVbpayTsXAEAAwIAA3gAAz0E)

> 一条广播信道上连有 4 个站点 a、b、c、d，采用码分复用技术，当 a、b、c 要向 d 发送数据时，设 a 的码片序列为（1,-1,1,-1），则 b 和 c 的码片序列可以为（ ）。
>
> - A. （-1, 1, 1, 1）和（-1, -1, -1, 1）
> - B. （-1, -1, 1, 1）和（-1, 1, -1, 1）
> - C. （-1, 1, 1, -1）和（1, 1, -1, -1）
> - D. （-1, -1, -1, -1）和（1, 1, 1, 1）

本体错选为 D。这道题只算了 D 的分别和 a，而没有算他们之间相互也得正交。

![3.6.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyZqyNoAATWZSSLfAZqfmQ8K1NEupEcAAuwSaxuk_khWI0I4_yE62HEBAAMCAAN4AAM9BA)

> 某 100Mb/s 以太网使用 CSMA/CD 协议，该以太网中的某个站在发送帧时检测到冲突，并准备进行第二次重传，则所需等待的最大退避时间是（ ）。
>
> - A. 5.12μs
> - B. 15.36μs
> - C. 25.6μs
> - D. 51.2μs

本题错选为 A。第 2 次重传，是 0 至 $2^2-1$，所以最大是 3，也就是 $3 \times$ 争用期。

![3.6.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAydqyNoUi2UGVA_59LWEsET15g0Q9wAC7RJrG6T-SFaJZPvXelL8bQEAAwIAA3gAAz0E)

> IEEE 802.3 标准规定，若采用同轴电缆作为传输介质，在无中继的情况下，传输介质的最大长度不能超过（ ）。
>
> - A. 500m
> - B. 200m
> - C. 100m
> - D. 50m

本题错选为 B，默认为粗同轴电缆，细同轴电缆也只是 180m。

![3.6.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyhqyNq3hV7bv5bC6pNee_-Eq_srsQAC7xJrG6T-SFalkYv48Se6KQEAAwIAA3gAAz0E)

> IEEE 802 局域网标准对应 OSI 参考模型的（ ）。
>
> - A. 数据链路层和网络层
> - B. 物理层和数据链路层
> - C. 物理层
> - D. 数据链路层

本题和 1 刷一致的错误。

![3.7.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAylqyNrS_NH2uZmfm5pYGAmEZpS9IwAC8RJrG6T-SFZ1uAABRA8H-1sBAAMCAAN4AAM9BA)

> 局域网和广域网的差异不仅在于它们所覆盖的范围不同，还主要在于它们（ ）。
>
> - A. 所使用的介质不同
> - B. 所使用的协议不同
> - C. 所能支持的通信量不同
> - D. 所提供的服务不同

![3.7.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAypqyNrliC-F4TnVPW4hWooP6EcrjwAC8hJrG6T-SFbF6D1rFrmQUAEAAwIAA3gAAz0E)

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

第 7 题错选为 C。第 8 题错选为 A，均和 1 刷一样的错误。

![3.8.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAytqyNr7sqAjZmtpyyJwW8b2HhTNPwAC9BJrG6T-SFZpU5HB5GvtYgEAAwIAA3gAAz0E)

> 下列（ ）不是使用交换机分割网络所带来的好处。
>
> - A. 减少冲突域的范围
> - B. 在一定条件下增加了网络的带宽
> - C. 过滤网段之间的数据
> - D. 缩小了广播域的范围

![3.8.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAyxqyNsO_otz9yeAaccgavukN5SwfQAC9hJrG6T-SFbhTF8HG5fxTAEAAwIAA3gAAz0E)

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

第 10 题错选为 D。与 1 刷一致的错误。

第 11 题错选为 A，与 1 刷一直的错误。

![3.8.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAy1qyNsoJm3CJETtiUQ6L58C5ixE0wAC9xJrG6T-SFYlLAJOkzB9oQEAAwIAA3gAAz0E)

> 当以太网交换机某接口收到帧时，若在交换表中未找到目的 MAC 地址，则（ ）。
>
> - A. 将帧发送到特定接口进行 ARP 查询
> - B. 丢弃该帧
> - C. 将帧发送到除本接口外的所有接口
> - D. 将帧发送给 DHCP 服务器

本题错选为 A。这里是交换机，需要注意。ARP 协议是主机干的。

![3.8.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAy5qyNtUvxAUIqnpE1C4xhOM0Z4rHgAC-BJrG6T-SFb6__OKrCdquAEAAwIAA3gAAz0E)

> 【2013 统考真题】对于 100Mb/s 的以太网交换机，当输出端口无排队，以直通交换方式转发一个以太网帧（不包括前导码）时，引入的转发时延至少是（ ）。
>
> - A. 0μs
> - B. 0.48μs
> - C. 5.12μs
> - D. 121.44μs

本题错选为 C，与 1 刷一致错误。

### 计网王道选择题 2 刷第 4 章

![4.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAy9qyNuFWh4bQ1Hvojmm5kCFRKx2FAAC-RJrG6T-SFZQbZOCctsH0AEAAwIAA20AAz0E)

> 路由器连接的异构网络是指（ ）。
>
> - A. 网络的拓扑结构不同
> - B. 网络中计算机操作系统不同
> - C. 数据链路层协议和物理层协议至少有一个不同
> - D. 数据链路层协议相同，物理层协议不同

本体错选为 A。细想之下属于低级错误。

![4.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzBqyNubSGHNv3zP9o0Y6g-VbT6hyAAC-hJrG6T-SFb7xu0OKcvbhwEAAwIAA3gAAz0E)

> 同一报文中的分组可以由不同的传输路径通过通信子网的方法是（ ）。
>
> - A. 分组交换
> - B. 电路交换
> - C. 虚电路方式
> - D. 数据报方式

本题错选为 A，与 1 刷一致错误。

![4.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzFqyNv4PrmehH26ce8UVg6uj9ialgAC_BJrG6T-SFZBe9zopPc0vgEAAwIAA3gAAz0E)

> 下列关于虚电路的说法中，正确的是（ ）。
>
> - A. 虚电路依赖其他协议实现差错控制
> - B. 采用虚电路方式发送分组时，分组首部都必须包含目的地址
> - C. 虚电路结合了电路交换的思想，适合对实时性要求较高的长时间通信
> - D. 多站点同时使用一段物理链路实行虚电路交换会产生冲突，无法正常通信

本题错选为 A，与 1 刷一样的错误。

![4.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzJqyNwwJ8kYypA1qIoPoqKKHGxk2gAC_hJrG6T-SFYQZQdfcrrqMwEAAwIAA3gAAz0E)

> 下列关于 SDN（软件定义网络）的描述中，错误的是（ ）。
> Ⅰ. SDN 是近年来出现的一种新型物理网络结构
> Ⅱ. OpenFlow 交换机基于“流表”来转发分组
> Ⅲ. SDN 远程控制器位于 OpenFlow 交换机中
> Ⅳ. OpenFlow 可视为 SDN 的控制层面与数据层面的通信接口
>
> - A. Ⅰ和Ⅲ
> - B. Ⅰ和Ⅳ
> - C. Ⅱ和Ⅳ
> - D. Ⅰ、Ⅲ和Ⅳ

本题错选为 C。2，4 显然正确，对于 1，并非物理，对于 3，并且位于交换机中。

![4.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzNqyNxSVN_ywOlDwB0bD_Sgp_CzTAAC_xJrG6T-SFacXfK9UuTOyAEAAwIAA3gAAz0E)

> 下列关于 IP 分组分片基本方法的描述中，错误的是（ ）。
>
> - A. IP 分组长度大于 MTU 时，就必须对其进行分片
> - B. DF=1，分组的长度又超过 MTU 时，则丢弃该分组，不需要向源主机报告
> - C. 分片的 MF 值为 1 表示接收到的分片不是最后一个分片
> - D. 属于同一原始 IP 分组的分片具有相同的标识

错选为 D。对于 B，需要汇报终点不可达。

![4.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzRqyNyr5sqOpeejviJlyn26coCWbwADE2sbpP5IVg8zYO1DFov8AQADAgADeAADPQQ)

> 路由器 R0 的路由表见下表。若进入路由器 R0 的分组的目的地址为 132.19.237.5，则该分组应该被转发到（ ）下一跳路由器。
>
> - A. R1
> - B. R2
> - C. R3
> - D. R4
>
> 目的网络 | 下一跳路由器
> 132.0.0.0/8 | R1
> 132.0.0.0/11 | R2
> 132.19.232.0/22 | R3
> 0.0.0.0/0 | R4
>
> - [图示] 两列表格，左列为目的网络，右列为下一跳路由器，共 4 行数据
>

本题错选为 C。属于低级错误。比对子网掩码即可。

![4.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzVqyNzAa_d8byJDoOng--_uogUYTQACARNrG6T-SFZfvi5M3VJVGwEAAwIAA3gAAz0E)

> 在下列 4 个地址中，属于单播地址的是（ ）。
>
> - A. 172.31.128.255/18
> - B. 10.255.255.255
> - C. 192.168.24.59/30
> - D. 224.105.5.211

本题错选为 C。和 1 刷一致的错误。

![4.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzZqyN5yq9dpxkPdAxPQRs716oulkQACAxNrG6T-SFbXpRhbIZEHHQEAAwIAA3gAAz0E)

> 把 IP 网络划分成子网，这样做的好处是（ ）。
>
> - A. 增加冲突域的大小
> - B. 增加主机的数量
> - C. 减少广播域的大小
> - D. 增加网络的数量

本题错选为 D。划分为子网反而还减少了网络数量。

![4.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzdqyN6CQw3is-JyjN5IZ_STjIahYwACBBNrG6T-SFYRkVN73WvxKAEAAwIAA3gAAz0E)

> 一台主机有两个 IP 地址，一个地址是 192.168.11.25，另一个地址可能是（ ）。
>
> - A. 192.168.11.0
> - B. 192.168.11.26
> - C. 192.168.13.25
> - D. 192.168.11.24

本题错选为 D。为什么一个主机的两个网卡的 IP 地址必须属于不同的网络？IP 地址是被网卡所拥有的，但是接受和发送是属于电脑的。所以进行 ARP 的时候，如果处于同一个网络，那么就都会回，发送也是一样的。

![4.2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzhqyN6pDtnKZdLqP0XtGdXojMm60AACBRNrG6T-SFbBmV0fTYyrZAEAAwIAA3gAAz0E)

> 某网络的一台主机的 IP 地址是 200.15.10.6/29，其配置的默认网关地址是 200.15.10.7，这样配置后发现主机无法 PING 通任何远程设备，原因是（ ）。
>
> - A. 默认网关的地址不属于这个子网
> - B. 默认网关的地址是子网中的广播地址
> - C. 路由器接口的地址是子网的广播地址
> - D. 路由器接口的地址是多播地址

本题错选为 A。如果配了不属于这个子网的，确实会炸，但是不是这道题的原因。

![4.2.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzlqyN7AHrtfcnT6NsGVTuuYZd0NTAACBhNrG6T-SFaqGCgvpmcRswEAAwIAA3gAAz0E)

> 现将一个 IP 网络划分为 4 个子网，若其中一个子网是 192.168.1.130/26，则下列网络中不可能是另外 3 个子网之一的是（ ）。
>
> - A. 192.168.1.0/25
> - B. 192.168.1.64/26
> - C. 192.168.1.96/27
> - D. 192.168.1.224/27
>
> 位于不同子网的主机之间相互通信时，下列说法中正确的是（ ）。
>
> - A. 路由器在转发 IP 数据报时，重新封装源硬件地址和目的硬件地址
> - B. 路由器在转发 IP 数据报时，重新封装源 IP 地址和目的 IP 地址
> - C. 路由器在转发 IP 数据报时，重新封装目的硬件地址和目的 IP 地址
> - D. 源站点可以直接进行 ARP 广播得到目的站点的硬件地址

第 40 题错选为 A。和 1 刷时错误一样。

第 41 题错选为 B。属于低级错误。

![4.2.54](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzpqyN7f1_c3gQxzGi-gs9MVviZ5aAACBxNrG6T-SFYEnYXcYUkGUQEAAwIAA3gAAz0E)

> 【2012 统考真题】某主机的 IP 地址为 180.80.77.55，子网掩码为 255.255.252.0。若该主机向其所在子网发送广播分组，则目的地址可以是（ ）。
>
> - A. 180.80.76.0
> - B. 180.80.76.255
> - C. 180.80.77.255
> - D. 180.80.79.255

本体错选为 B。发送广播分组，意味着子网掩码非 1 的部分全为 1。

![4.2.58](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAztqyN8AAZciAxcq14wRQi908I8w7igAAggTaxuk_khWXlH1TuyylwEBAAMCAAN4AAM9BA)

> 【2016 统考真题】如下图所示，假设 H1 与 H2 的默认网关和子网掩码均分别配置为 192.168.3.1 和 255.255.255.128，H3 和 H4 的默认网关和子网掩码均分别配置为 192.168.3.254 和 255.255.255.128，则下列现象中可能发生的是（ ）。
>
> 图中：R1～R3 为路由器；Switch 为 100Base-T 交换机；Hub 为 100Base-T 集线器；主机 H1～H[?]的默认域名服务器均配置为 201.1.1.1。
>
> - [图示] Internet（130.18.10.1，Web 服务器 S）连 R1（201.1.3.9），R1 向右连 R3 与 201.1.2.0/25 云，向下连 R2；R2 标注 NAT、L0、E0、L1、E1，L1 侧标 201.1.3.1，E1 侧标 192.168.3.254；R2 左连 201.1.1.0/24 云及 DNS 服务器 201.1.1.1；R2 下连 Switch，Switch 接 H1（192.168.3.2）、H2（192.168.3.3）并经 Hub 接 H3（192.168.3.251）、H4（192.168.3.252）。
>
> - A. H1 不能与 H2 进行正常 IP 通信
> - B. H2 与 H4 均不能访问 Internet
> - C. H1 不能与 H3 进行正常 IP 通信
> - D. H3 不能与 H4 进行正常 IP 通信

本题错选为 B。假设初始什么都有没有。对于 A，H1 要向 H2 发送报文。首先检测到 H1 和 H2 在同一个子网，所以不需要交给默认路由，查询 ARP 表，发现没有 ARP 缓存，于是向子网内广播，收到 H2 的 MAC 地址后直接传输即可，对于 H2 向 H1 发送同理。对于 B，H2 要访问互联网，假设 H2 需要发信息包到 8.8.8.8，检测到非本网络，于是发送到默认路由，因为没有 ARP 缓存，所以发送 ARP 请求。结果因为 R2 过滤了 ARP，所以无论如何也拿不到 R3 的 MAC 地址，至此结束，不能访问因特网，H4 要访问互联网，检测到非本网络，于是发给默认路由，因为没有 ARP 缓存，所以发送 ARP 请求，得到 R2 的 MAC 地址后，由 R2 转发到互联网。对于 C，H1 想和 H3 通信，检测到非本地网络，所以向默认路由发送 ARP 请求，得不到 MAC 地址，所以不能。对于 D，显然可以。

![4.2.63](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAzxqyN8eZV7g5qC5wD1C3T5eyl_9-wACCRNrG6T-SFbjynlutSo2QgEAAwIAA3gAAz0E)

> 【2018 统考真题】路由器 R 通过以太网交换机 S1 和 S2 连接两个网络，R 的接口、主机 H1 和 H2 的 IP 地址与 MAC 地址如下图所示。若 H1 向 H2 发送一个 IP 分组 P，则 H1 发出的封装 P 的以太网帧的目的 MAC 地址、H2 收到的封装 P 的以太网帧的源 MAC 地址分别是（ ）。
>
> - [图示] S1 经路由器 R 连 S2；S1 与 R 之间标注 192.168.3.1、00-1a-2b-3c-4d-51；R 与 S2 之间标注 192.168.4.1、00-a1-b2-c3-d4-61；S1 下接 H1（192.168.3.2，00-1a-2b-3c-4d-52）；S2 下接 H2（192.168.4.2，00-a1-b2-c3-d4-62）。
>
> - A. 00-a1-b2-c3-d4-62、00-1a-2b-3c-4d-52
> - B. 00-a1-b2-c3-d4-62、00-a1-b2-c3-d4-61
> - C. 00-1a-2b-3c-4d-51、00-1a-2b-3c-4d-52
> - D. 00-1a-2b-3c-4d-51、00-a1-b2-c3-d4-61

本体错选为 B。注意本题非 CSMA/CA 协议的以太网帧，但事实类似的。对于 IP 地址，过路由器不会换 IP 地址，但是会换 MAC 地址。本题只需要会读题，就能做对。

![4.4.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAz1qyN9mor0AAR2GJKIfGfb34HqDdioAAgoTaxuk_khW2Mr3NMnwncABAAMCAAN4AAM9BA)

> 以下关于自治系统的描述中，错误的是（ ）。
>
> - A. 自治系统划分区域的好处是，将利用洪泛法交换链路状态信息的范围局限在每个区域内，而不是整个自治系统
> - B. 采用分层划分区域的方法使交换信息的种类增多，同时也使 OSPF 协议更加简单
> - C. OSPF 协议将一个自治系统再划分为若干更小的范围，称为区域
> - D. 在一个区域内部的路由器只知道本区域的网络拓扑，而不知道其他区域的网络拓扑的情况

本题错选为 D，与 1 刷类似的错误。

![4.7.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAz5qyN-DFSqokF8QoI8o6vutzgHqJgACCxNrG6T-SFYHP1q-r5GhVAEAAwIAA20AAz0E)

> 下列关于冲突域的叙述中，正确的是（ ）。
>
> - A. 能接收到同一广播帧的所有设备的集合
> - B. 能发送同一广播帧的所有设备的集合
> - C. 能产生冲突的所有设备的集合
> - D. 能隔离冲突的所有设备的集合

本题错选为 D。和 1 刷时候错误类似。

![4.7.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAz9qyN-f8p6N_ENbnHQmZdy0P24xnQACDBNrG6T-SFbfud0m0GTcmgEAAwIAA3gAAz0E)

> 【2012 统考真题】下列关于 IP 路由器功能的描述中，正确的是（ ）。
>
> Ⅰ. 运行路由协议，设置路由表
> Ⅱ. 监测到拥塞时，合理丢弃 IP 分组
> Ⅲ. 对收到的 IP 分组头进行差错检验，确保传输的 IP 分组不丢失
> Ⅳ. 根据收到的 IP 分组的目的 IP 地址，将其转发到合适的输出线路上
>
> - A. 仅Ⅲ、Ⅳ
> - B. 仅Ⅰ、Ⅱ、Ⅲ
> - C. 仅Ⅰ、Ⅱ、Ⅳ
> - D. Ⅰ、Ⅱ、Ⅲ、Ⅳ

本题错选为 D，与 1 刷时错误类似。

### 计网王道选择题 2 刷第 5 章

![5.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0BqyN_LJulkoSRr1w0hE3VtQtORhAACDRNrG6T-SFZX5FKAnaZ3VAEAAwIAA3gAAz0E)

> 某应用层数据大小为 200B，传输层使用 UDP，网际层使用 IP（采用最大首部长度），使用以太网进行传输（不考虑前导码和 VLAN），则该应用层数据的传输效率是（ ）。
>
> - A. 82.6%
> - B. 77.5%
> - C. 69.9%
> - D. 67.1%

本题错选为 D。200B，UDP8B，IP60B，以太网 662N4。

![5.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0JqyN_xaKpP8hhzajETSBlZ2NeRSQACDhNrG6T-SFbE2YekqvbH4gEAAwIAA3gAAz0E)

> 【2018 统考真题】UDP 实现分用时所依据的首部字段是（ ）。
>
> - A. 源端口号
> - B. 目的端口号
> - C. 长度
> - D. 检验和
>
> 【2024 统考真题】UDP 在计算检验和的过程中，计算得到中间结果为 1011 1001 1011 0110 时，还需要加上最后一个 16 位数 0110 0101 1100 0101，最终计算得到的检验和是（ ）。
>
> - A. 0001 1111 0111 1011
> - B. 0001 1111 0111 1100
> - C. 1110 0000 1000 0011
> - D. 1110 0000 1000 0100

第 15 题错选为 A。复用指的是根据源端口号去找其他的，分用是到达目的端口号。

第 16 题错选为 B。注意回卷。

![5.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0NqyOAIXVCjuzc7Z3nA25pCY-azPAACDxNrG6T-SFayKaghslz4_QEAAwIAA20AAz0E)

> 下列关于 TCP 报头格式的描述中，错误的是（ ）。
>
> - A. 报头长度为 20 ~ 60B，其中固定部分为 20B
> - B. 端口号字段依次表示源端口号与目的端口号
> - C. 报头长度总是 4 的倍数个字节
> - D. TCP 检验和伪首部中 IP 分组头的协议字段为 17

本题错选为 C。TCP 的 IP 分组协议号为 6，UDP 的 IP 分组协议号为 17。

![5.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0RqyOAgPlxWOPn5FmTpRDZGi6DcNAACEBNrG6T-SFZ0abhwmUn5BwEAAwIAA3gAAz0E)

> 在采用 TCP 连接的数据传输阶段，若发送端的发送窗口值由 1000 变为 2000，则发送端在收到一个确认之前可以发送（ ）。
>
> - A. 2000 个 TCP 报文段
> - B. 2000B
> - C. 1000B
> - D. 1000 个 TCP 报文段
>
> A 和 B 建立了 TCP 连接，当 A 收到确认序号为 100 的确认报文段时，表示（ ）。
>
> - A. 报文段 99 已收到
> - B. 报文段 100 已收到
> - C. 末字节序号为 99 的报文段已收到
> - D. 末字节序号为 100 的报文段已收到

第 10 题错选为 A。首先注意量纲，齐次，我可不可以发和我应不应该发是两码事，这里题目并没有说是不是连续收到了三个 ack，没有其他条件，所以就直接 B 就好了。

第 11 题错选为。A 收到 ack=100 的确认报文段，意味着 B 希望 A 发起始为 100 的数据，所以末序号为 99 的报文段都已经收到。

![5.3.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0VqyOA1keKhc8n7CArr2551ZvUaWQACERNrG6T-SFZnvSUJIhNguAEAAwIAA3gAAz0E)

> 在 TCP 中，发送方的窗口大小取决于（ ）。
>
> - A. 仅接收方允许的窗口
> - B. 接收方允许的窗口和发送方允许的窗口
> - C. 接收方允许的窗口和拥塞窗口
> - D. 发送方允许的窗口和拥塞窗口
>
> TCP 利用滑动窗口来实现流量控制，只要发送方收到对方的零窗口通知，就启动（ ）计时器，若计时器超时，则发送一个零窗口探测报文段，以试图获得对方的窗口值。
>
> - A. 重传
> - B. 保活
> - C. 时间等待
> - D. 持续

第 13 题错选为 B。接受方允许的窗口=接收窗口，发送方允许的窗口=最大可以发送的窗口，发送方窗口大小=min。

第 14 题错选为 B。背书。对于 A，为超时，对于 B，是长时间没有数据交互，对于 C，是四次挥手主动关闭的最后等待 2MSL 时间。

![5.3.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0ZqyOBUKZdI6nymAAGsyEWZdeAf5cEAAhITaxuk_khW1Dv0mMZ97rMBAAMCAAN4AAM9BA)

> 一个 TCP 连接的数据传输阶段，若发送端的发送窗口值由 2000 变为 3000，则意味着发送端可以（ ）。
>
> - A. 在收到一个确认之前可以发送 3000 个 TCP 报文段
> - B. 在收到一个确认之前可以发送 1000B
> - C. 在收到一个确认之前可以发送 3000B
> - D. 在收到一个确认之前可以发送 2000 个 TCP 报文段

本题错选为 A。发送方窗口由 2000 变成 3000，意味着可以发 3000B 的数据，这里没有提到 MSS。

![5.3.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0dqyOCIdahXuZuOMd0h-DJfWKETrQACExNrG6T-SFbWPL2_0RMkNAEAAwIAA3gAAz0E)

> 在一个 TCP 连接中，MSS 为 1KB，当拥塞窗口为 34KB 时发生了超时事件。若在接下来的 4RTT 内报文段传输都是成功的，则当这些报文段均得到确认后，拥塞窗口的大小是（ ）。
>
> - A. 8KB
> - B. 9KB
> - C. 16KB
> - D. 17KB

本题错选为 A。拥塞窗口为 34KB，发生超时，则拥塞窗口减为 17KB，接下来的 RTT 里，第一个 RTT 结束是 2KB，第 2 个 RTT 结束为 4KB，然后是 8KB，16KB。

![5.3.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0hqyOCYX2pTT_nWp_R3AuHd7DOOWwACFBNrG6T-SFaFbUtzs0qzvAEAAwIAA3gAAz0E)

> 假设一个 TCP 连接的传输过程在慢开始阶段，在 tRTT 时刻到 (t+1)RTT 时刻之间发送了 k 个数据段，假设仍然保持在慢开始阶段，预期在 (t+1)RTT 时刻到 (t+2)RTT 时刻之间将发送（ ）个数据段（假设接收方有足够的缓存）。
>
> - A. k
> - B. k+1
> - C. 2^k
> - D. 2k
>
> 下列关于 TCP 的拥塞控制机制的描述中，错误的是（ ）。
>
> - A. TCP 刚建立连接进入慢开始阶段
> - B. 慢开始阶段拥塞窗口指数级增加
> - C. 超时发生时，新门限值（慢开始和拥塞避免阶段的分界点）等于旧门限值的一半
> - D. 拥塞避免阶段拥塞窗口线性增加
>
> 在一个 TCP 连接中，MSS 为 1KB，当拥塞窗口为 34KB 时收到了 3 个冗余 ACK 报文。若在接下来的 4RTT 内报文段传输都是成功的，则当这些报文段均得到确认后，拥塞窗口的大小是（ ）。
>
> - A. 8KB
> - B. 16KB
> - C. 20KB
> - D. 21KB

第 35 题错选为 C。发送 k 个数据段，下一个阶段就发送 2k 个段。

第 36 题错选为 A。显然为 C。新门限值是当前的一半。

第 37 题错选为 C。收到了 3 个冗余 ACK，则变成 17KB。1RTT 结束后为 18KB，2-19，3-20，4-21。

![5.3.56](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0lqyOCtV4Nkiq-5nyJQ2u0UhQmPkgACFRNrG6T-SFbY5KikAwJt8AEAAwIAA3gAAz0E)

> 【2021 统考真题】设主机甲通过 TCP 向主机乙发送数据，部分过程如下图所示。甲在 t₀ 时刻发送一个序号 seq=501、封装 200B 数据的段，在 t₁ 时刻收到乙发送的序号 seq=601、确认序号 ack_seq=501、接收窗口 rcvwnd=500B 的段，则甲在未收到新的确认段之前，可以继续向乙发送的数据序号范围是（ ）。
>
> - [图示] 甲、乙两条竖线为时间轴（向下为时间）；t₀ 时甲向乙的箭头标注 seq=501, 200B 数据；t₁ 时乙向甲的箭头标注 seq=601, ack_seq=501, rcvwnd=500B。
>
> - A. 501 ~ 1000
> - B. 601 ~ 1100
> - C. 701 ~ 1000
> - D. 801 ~ 1100

本题错选为 A。需要注意，这里没有说收到 3 个 ACK，所以不需要重传。注意窗口被划分为两块，已发送未收到确认和未发送的。

![5.3.60](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0pqyODM6z0y_QVbdBDrlNkkkHScsgACFhNrG6T-SFb-f7nIvdcrvAEAAwIAA3gAAz0E)

> 【2025 统考真题】主机甲通过 TCP 向主机乙发送数据的部分过程如下图所示，seq 为序号，ack_seq 为确认序号，rcvwnd 为接收窗口。甲在 t₀ 时刻的拥塞窗口和发送窗口均为 2000B，拥塞控制阈值为 8000B，MSS = 1000B，甲始终以 MSS 发送 TCP 段，若甲在 t₁ 时刻收到如图所示的确认段，则甲在未收到新的确认段之前，还可继续向乙发送的 TCP 段数是（ ）。
>
> - [图示] 甲、乙两条竖线为时间轴（向下为时间）；t₀ 时甲向乙发出两条箭头，分别标注 seq = 2001, 1000B 数据 与 seq = 3001, 1000B 数据；t₁ 时乙向甲发回箭头，标注 seq = 4001, ack_seq = 3001, rcvwnd = 4000B。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5

本题错选为 C。这里需要辨析一个概念，也就是每收到一个 ack 窗口 +1MSS，从宏观上来看，确实是翻倍，但是从围观上来看是一个 ack+1MSS。

所以对于这道题，我收到了一个 ack=3001，所以 +1MSS，此时发送窗口是 3，而 3001-4000 的数据还在没被确认，不需要再发，也没有到达三次 ACK，所以只能发 4001-6000，所以段数也就是 2。

### 计网王道选择题 2 刷第 6 章

![6.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0tqyODtBN6_if1sQ7ZQngZ-TsEs_gACFxNrG6T-SFbVXvaHqorBUgEAAwIAA3gAAz0E)

> 一台主机要解析 `www.cskaoyan.com` 的 IP 地址，若这台主机配置的域名服务器为 202.120.66.68，互联网顶级域名服务器为 11.2.8.6，而存储 `www.cskaoyan.com` 的 IP 地址对应关系的域名服务器为 202.113.16.10，则这台主机解析该域名通常首先查询（ ）。
>
> - A. 202.120.66.68 域名服务器
> - B. 11.2.8.6 域名服务器
> - C. 202.113.16.10 域名服务器
> - D. 可以从这 3 个域名服务器中任选一个

本题错选为 B。首先先找本地域名服务器，然后再委托本地域名服务器进行查询。

![6.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA0xqyOFBuSLB2wl1fWuTou48TAABTaEAAhgTaxuk_khWKHiRAAFPxDRdAQADAgADeAADPQQ)

> 若本地域名服务器无缓存，用户主机采用递归查询向本地域名服务器查询另一网络某主机域名对应的 IP 地址，而本地域名服务器采用迭代查询向其他域名服务器进行查询，则用户主机和本地域名服务器发送的域名请求条数分别为（ ）。
>
> - A. 1 条，1 条
> - B. 1 条，多条
> - C. 多条，1 条
> - D. 多条，多条
>
> 【2010 统考真题】若本地域名服务器无缓存，则在采用递归方法解析另一网络某主机域名时，用户主机和本地域名服务器发送的域名请求条数分别为（ ）。
>
> - A. 1 条，1 条
> - B. 1 条，多条
> - C. 多条，1 条
> - D. 多条，多条

第 10 题错选为 A，第 11 题错选为 B。

这两题放在一起讲，都属于低级错误。本地域名服务器采用迭代查询，则本地域名服务器需要发送多条请求；而本地域名服务器采用递归查询，那么只需要查询一条。

![6.2.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA01qyOFSicjBg-DuocNOh1d16m0qRwACGRNrG6T-SFYBlt58njkAAXoBAAMCAAN4AAM9BA)

> 【2020 统考真题】假设下图所示网络中的本地域名服务器只提供递归查询服务，其他域名服务器都只提供迭代查询服务；局域网内主机访问 Internet 上各服务器的往返时间（RTT）均为 10ms，忽略其他各种时延。若主机 H 通过超链接 `http://www.abc.com/index.html` 请求浏览纯文本 Web 页 index.html，则从单击超链接开始到浏览器接收到 index.html 页面为止，所需的最短时间与最长时间分别是（ ）。
>
> - [图示] 局域网内有本地域名服务器、路由器、主机 H；路由器经链路连到 Internet 云，云内有根域名服务器、com 顶级域名服务器、abc.com 域名服务器、`www.abc.com`。
>
> - A. 10ms，40ms
> - B. 10ms，50ms
> - C. 20ms，40ms
> - D. 20ms，50ms

本体错选为 B。本题错误原因和 1 类似。

![6.5.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA05qyOFrOxyDH2U7LUkvZpTNm3-ZhgACGhNrG6T-SFZyj2KR2aY0jAEAAwIAA3gAAz0E)

> 下面的（ ）协议中，客户与服务器之间采用面向无连接的协议进行通信。
>
> - A. FTP
> - B. SMTP
> - C. DNS
> - D. HTTP

错选为 D，属于脑子抽了。

![6.5.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA09qyOF53lTfRgMMeTFVJcCySIW1pAACGxNrG6T-SFZ6fU-7lQXQ9gEAAwIAA3gAAz0E)

> TCP 和 UDP 的一些端口保留给一些特定的应用使用。为 HTTP 保留的端口号为（ ）。
>
> - A. TCP 的 80 端口
> - B. UDP 的 80 端口
> - C. TCP 的 25 端口
> - D. UDP 的 25 端口

错选为 C，属于低级错误。

![6.5.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1BqyOGJeGsR4HlTmMzhBH01_kL-2wACHBNrG6T-SFYgYm23-0QHoAEAAwIAA3gAAz0E)

> 仅需 Web 服务器对 HTTP 报文进行响应，但不需要返回请求对象时，HTTP 请求报文应该使用的方法是（ ）。
>
> - A. GET
> - B. PUT
> - C. POST
> - D. HEAD

不知道选什么，错误原因见 1 刷。

![6.5.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1FqyOLGEZ_Gwp3tnKhudZ3WJMK_-gACIBNrG6T-SFbhBdngP521nAEAAwIAA3gAAz0E)

> 若浏览器支持并行 TCP 连接，使用非持久的 HTTP/1.0 协议请求浏览 1 个 Web 页，该页中引用同一网站上的 7 个小图像文件，则从浏览器为传输 Web 页请求建立 TCP 连接开始，到接收完所有内容为止，所需的往返时间 RTT 数至少是（ ）。
>
> - A. 3
> - B. 4
> - C. 8
> - D. 9

不知道选什么，错误原因见 1 刷。

![6.5.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1FqyOLGEZ_Gwp3tnKhudZ3WJMK_-gACIBNrG6T-SFbhBdngP521nAEAAwIAA3gAAz0E)

> 若浏览器支持并行 TCP 连接，使用非持久的 HTTP/1.0 协议请求浏览 1 个 Web 页，该页中引用同一网站上的 7 个小图像文件，则从浏览器为传输 Web 页请求建立 TCP 连接开始，到接收完所有内容为止，所需的往返时间 RTT 数至少是（ ）。
>
> - A. 3
> - B. 4
> - C. 8
> - D. 9

错选为 A。首先使用 2 个 RTT 时间获取到 WEB 页，然后用 2 个 RTT 获取到资源。

![6.5.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1NqyOMF-Qr9fp7t1Q3sejNsu1_sdQACIhNrG6T-SFaSglhzMe8PUwEAAwIAA3gAAz0E)

> 主机通过超链接 `http://www.cskaoyan.com/index.html` 请求浏览 Web 页 index.html，浏览器使用流水线方式的 HTTP/1.1 协议，该 Web 页引用了同一网站上的 7 个小图像文件，假设主机到本地域名服务器和互联网上各服务器的往返时延均为 1RTT，本地域名服务器只提供递归查询服务，其他域名服务器只提供迭代查询服务，忽略其他所有时延，则从点击超链接开始到浏览器接收到所有内容为止，所需的往返时间 RTT 数最多是（ ）。
>
> - A. 5
> - B. 6
> - C. 7
> - D. 8

本题错选为 D。委托本地域名服务器进行递归查询，本地域名服务器进行迭代查询，总共查询 3 次，也就是 3RTT 的时间获取到链接，随后使用 1.5RTT 的时间建立连接，在最后 0.5RTT 内不进行捎带返回 index。1RTT 时间获取到具体 index，然后再使用 1RTT 的时间并行请求 3+2+1+1=7。

![6.5.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1RqyOMYlzePoNdKdcQvyU94bB9SWQACIxNrG6T-SFbGl43XZg8xsQEAAwIAA3gAAz0E)

> 【2022 统考真题】假设主机 H 通过 HTTP/1.1 请求浏览某 Web 服务器 S 上的 Web 页 news408.html，news408.html 引用了同目录下的 1 幅图像，news408.html 文件大小为 1MSS（最大段长），图像文件大小为 3MSS，H 访问 S 的往返时间 RTT = 10 ms，忽略 HTTP 响应报文的首部开销和 TCP 段传输时延。若 H 已完成域名解析，则从 H 请求与 S 建立 TCP 连接时刻起，到接收到全部内容止，所需的时间至少是（ ）。

本题错选为 A。建立请求开始花费 1.5RTT，0.5RTT 用于捎带传输 index。1RTT 的时间获取 2MSS 的内容，再 1RTT 的时间获取最后 1RTT 的内容，总计 4RTT。
