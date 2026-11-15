---
title: 计组王道选择题 3 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计组王道选择题 3 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.11
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计组王道选择题 3 刷

### 计组王道选择题 3 刷第 1 章

![1.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADgmrEj6UhTW95zR3R1a_vfhAvfm0YAAIvE2sbxNooVn1uUe-rUhgxAQADAgADeAADPQQ)

本题错选为 B。完整的计算机系统=计算机硬件 + 计算机软件，计算机硬件=主机 + 外设，主机=CPU=运算器 + 控制器 + 存储器等

![1.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADg2rEj_iIDC-ahyBX49RZMmv5vApCAAIwE2sbxNooVsLIQI7irEOfAQADAgADeAADPQQ)

本题错选为 B，属于低级错误。P=10^15，仔细算，其实 B 和 C 是一个意思。

### 计组王道选择题 3 刷第 2 章

![2.2.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADhGrEkEDbJuu885Oq_wYBz19F_LFtAAIxE2sbxNooVr3LLZet4gABiQEAAwIAA3gAAz0E)

本题错选为 A。错误原因在于没有注意到这是 int 型变量，所以就随便想了一个值去做。

![2.3.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADhWrEkIJ9dXcnsvzLQGzn1lNGSiO9AAIzE2sbxNooVtrOucDNje-wAQADAgADeAADPQQ)

本题错选为 B。属于低级错误。这道题的意思是说对阶后的结果，也就是算 y 具体的 2 进制是多少。而我却以为是问 y 的前 8 位是多少，恰好 y 对出来是 2^6，所以就直接选了 A。

这道题应该是 6+127=133=128+5。

![2.3.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADhmrEkbjw1Le1UWu4NKEc3Vn58hP3AAI0E2sbxNooVshi4aOGoZTRAQADAgADeAADPQQ)

这道题做的是对的，选 D，需要注意，左归和右归的意思是保持小数点不动而动数字。

> 1103 安：这里还可以再深挖理解一下，尾数左移意味着阶码 -1。

![2.3.38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADh2rEkejzb_BgCEFCjSuJDus_QgyJAAI1E2sbxNooVk48i8AEwoa0AQADAgADeAADPQQ)

错选为 D。本题错误原因在于没注意是 int，将之当成无符号数去算了。

![2.3.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADiGrEkiQCacBENq0N5OiM8kh7L9OjAAI3E2sbxNooViK-SycUA0KpAQADAgADeAADPQQ)

这道题是背题惹的祸。注意非规格化浮点数的表示，非规格化浮点数是 0.f×2^-126，注意不是 -127。

### 计组王道选择题 3 刷第 3 章

![3.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADiWrEkpiURky1sTvTiUs__vmQJkeZAAI4E2sbxNooVriAEaX_HNSDAQADAgADeAADPQQ)

本题错选为 D。Flash 可以在一些嵌入式当交换内存。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADimrEkuQKUrsxp559Du6__qGwWEW7AAI5E2sbxNooVqaIeGz_UczIAQADAgADeAADPQQ)

本题错选为 C。属于背答案背错了。没再次分析导致的，这道题高位是 A0，低位是 A15，注意。

![3.6.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADi2rEkytI29i6P83BfOswIDgZeBR1AAI6E2sbxNooVn9lHvABT2nQAQADAgADeAADPQQ)

本题错选为 C。地址映射应该是操作系统干的，而装入程序干的事把东西装进内存。

![3.6.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADjGrEk1qhXNBgkn0kOh09jCvzhgj0AAI8E2sbxNooVhHj8V1cb8qiAQADAgADeAADPQQ)

本题错选为 A。属于低级错误，快表即 TLB 应该在 CPU 里，我也不知道为啥我会把 D 叉了。

![3.6.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADjWrEk51CgiQlqatNdapARJYWvd07AAI_E2sbxNooVgVuoR8eA4pKAQADAgADeAADPQQ)

本题错选为 D。主要是很阴，这道题的虚页号没有 H，注意。

### 计组王道选择题 3 刷第 4 章

![4.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADjmrEk8iZuZc1rsn9ApffGRsNcZbmAAJAE2sbxNooVoLGosGxiRFdAQADAgADeAADPQQ)

本题错选为 D，属于背书问题。

![4.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADj2rElAM1dV9qWsAtNbO4bBnRRrQLAAJBE2sbxNooVsUGWdLJBy2AAQADAgADeAADPQQ)

本题错选为 D，属于低级错误。对记号的理解脑子抽了。

变址寻址的寄存器编号 X，取出其数是 (X)，然后加上地址码之后是操作数地址的地址，所以再加一个括号。

如果是变址寻址本身的地址，就不需要加最外面的括号了。

![4.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADkGrElRYgvf9sxF9BwUME9Q6jnN8KAAJDE2sbxNooVm31VGVLHHAxAQADAgADeAADPQQ)

本题错选为 D。其实这道题也很阴，是按字编址，而不是按字节编址，所以这道题就是 +1，而不是 +2，所以也就是到 4000H+1H+6H=4007H。

![4.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADkWrElWTId1IlUQjoCgb6IbrEz_12AAJFE2sbxNooVhpKLahXbakkAQADAgADeAADPQQ)

本题错选为 B，和第 7 题一样的脑抽问题，不多说了。

![4.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADkmrElZ0VjfC6idK4jpwCZ4JTfTePAAJGE2sbxNooVoc_D9wlkUWPAQADAgADeAADPQQ)

本题错选为 D，属于低级错误。最后应该存到 eax 里。

### 计组王道选择题 3 刷第 5 章

![5.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADk2rEleFXQInagrPTyu29gZhc40dWAAJIE2sbxNooVqi0hPaq3r58AQADAgADeAADPQQ)

本题错选为 A。本题理解错题目意思，想成不透明了，看到 A 就直接选了 A。

![5.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADlGrEmfL9eO3NL1LGDtM5KF_B-v6MAAJfE2sbxNooVkFd55svB4l5AQADAgADeAADPQQ)

本题错选为 D。对于 C，需要考虑条件转移，条件转移不一定改为目标地址。

![5.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADlWrEmoVU53oF1a55Vz5cB7p_78_xAAJhE2sbxNooVj4vAymhW4PdAQADAgADeAADPQQ)

本题错选为 D。属于低级错误，通用寄存器是可以有很多功能，但是肯定是不可以代替 IR 的。

![5.1.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADlmrEm68BxMmRqAEK_TyyyV6eK2pnAAJlE2sbxNooVsocdR3UDjG3AQADAgADeAADPQQ)

本题错选为 C。可以考虑超长指令字的情况。

辨析一下位数与各种码之间的关系：

- 与机器字长相同：ALU，通用寄存器
- PC=总容量/IR=MAR

![5.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADl2rEm9-9hzv9h9kwhHGumZmALt6kAAJmE2sbxNooViNd1rjARAAB6QEAAwIAA3gAAz0E)

第 12 题错选为 D。注意这里是单总线结构，想成单周期了。由于只有单个总线，所以显然数据冲突会很严重，但是逻辑控制并不复杂。

对于单周期的数据结构，控制逻辑就很复杂了。

第 13 题错选为 B。背书题，属于低级错误。

![5.4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADmGrEnFkIfrLP1IBfyZkwEIoxMGN4AAJnE2sbxNooVnF6ML3Uq33FAQADAgADeAADPQQ)

本题错选为 B。注意题目描述，形成微程序**入口**地址的是什么。

![5.4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADmWrEnKflM2O7Cs0Ua6svjAnv8Hv_AAJrE2sbxNooVmKyoMk-uF2XAQADAgADeAADPQQ)

本题错选为 D。注意指令和微指令的区别。

![5.5.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADmmrEnPNdyMCzgbTzNCXaeehCJsuNAAJsE2sbxNooVnmYaGi_fzzaAQADAgADeAADPQQ)

本题错选为 A，属于背书题。访问主存的校验错误是终止，因为访问主存都错了，那后续就不可能继续运行下去了。

![5.5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADm2rEnTeeNb-VLVQ_gMGiNQThh2s-AAJtE2sbxNooVqL_m4xOwkIvAQADAgADeAADPQQ)

本题错选为 A，属于低级错误。显然在中断响应的时候应该通过硬件实现。

![5.5.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADnGrEnYc1cd-dNVS3AQVp5JvtF8nLAAJyE2sbxNooVrhQJoD17q2BAQADAgADeAADPQQ)

本题错选为 B，属于低级错误。显然对于 D 而言，故障是返回到当前指令，陷阱是到下一条指令，终止是不回到原来的指令。

![5.6.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADnWrEnczAFp-ZPxqGjEvsSbMCvn4aAAJ2E2sbxNooVvqAxUguV1aEAQADAgADeAADPQQ)

第 13 题错选为 A。因为没看见采用转发技术。

第 14 题错选为 B。即使是无条件转移指令，处理机也是笨笨的先执行原本的东西，其实就是流水线自动的 +1。

![5.6.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADnmrEnrM_Y3_2GYOEo0XrM5zIDFi9AAJ6E2sbxNooVlTVLsWpWbCQAQADAgADeAADPQQ)

本题错选为 D。流水功能段的意思是那一段，那一段并不会被缩短，超标量的方式是多个流水功能段时间并行上执行。

![5.6.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADn2rEnxamDiVsq-jBdqg7OCcVhHZUAAJ7E2sbxNooVkAAAWtFhZIRdgEAAwIAA3gAAz0E)

本题错选为 A。因为 I2 访问 R2，所以 I3 要被阻塞。是要谁被阻塞，而不是看谁导致谁阻塞。

![5.6.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADoGrEn3tk_ebhazCcSRd5KoWFB3V0AAJ-E2sbxNooVrjLG5byT03FAQADAgADeAADPQQ)

本题错选为 C。单周期 CPU 指的是单指令执行 CPU，所以要求所有指令的执行时间都小于等于那个时间执行最长的指令（因为每个时间段的长度得保持一致。

而对于 B，不只是要从前面考虑后面，也要从**后面考虑前面**。显然 cache 缺失率越大，导致 CPI 越大。

![5.7.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADoWrEoIVxHqkNxx3ilFoFTCtE4fC_AAKBE2sbxNooVt7HAAHBKLbvewEAAwIAA3gAAz0E)

本题错选为 D。双核 CPU 是空间并行的计算。

此外，执行核心=运算核心。

总结一下这一整章比较冷的只是：

- SIMD 的应用有向量处理机
- MIMD 的应用有多计算机系统，多处理器系统
- 硬件多线程技术
  - 细颗粒度：每个时钟周期换一个线程（非真并行，非真硬件技术）
  - 粗颗粒度：高延迟的时候换一个线程（非真并行，非真硬件技术）
  - SMP 同时多线程：指令级/线程级并行

![多核处理器草图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADomrEoWVtwNF2n2RL2rB1YU1INfKFAAKCE2sbxNooVuRZ0RtXR-DpAQADAgADeQADPQQ)

### 计组王道选择题 3 刷第 6 章

![6.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADo2rEoZWgLKrQc5WZqJIVJmN-n3G3AAKEE2sbxNooVj5f7qHDEoKlAQADAgADeAADPQQ)

本题错选为 C。这里的总线时钟频率就是时钟周期的倒数，所以由于一个总线周期传输 4B 的信息，一个总线周期占用 2 个时钟周期，所以一个时钟周期可以传输 2B 的信息，所以最后就是 2B×10M=20MB/s。

![6.1.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADpGrEof3QQMKonJ7Jwi2eR5twm2FhAAKGE2sbxNooVib6Oqg2fLLmAQADAgADeAADPQQ)

本题错选为 A。这道题算的是理论最大的传输速率，不用考虑题目后续给的干扰条件。也就是说要跑满。

![6.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADpWrEoiy4f5FWYGn2mr-DoqKoAAG--AAChxNrG8TaKFb_2TGD8qBJ5wEAAwIAA3gAAz0E)

本题错选为 B。可以采用同步方式，但是发挥不出来性能。

![6.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADpmrEok36cLkbeBBCYjJYPj8mxULHAAKIE2sbxNooVkd7htglUniBAQADAgADeAADPQQ)

本题错选为 A。按需分配的意思是说通过握手信号争夺总线使用，而不应该从 CPU 角度考虑出发。对于 A，类似 DMA 操控。

![6.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADp2rEopcn2_eL9speUbK--qPQFDlEAAKJE2sbxNooVtL91uTEMdySAQADAgADeAADPQQ)

本题错选为 C。显然和 CPI 总线之间交流也不需要预约什么的。而打印机很慢。

### 计组王道选择题 3 刷第 7 章

![7.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADqGrEot1TXQGZVEUQyX2BJ2zlUT-NAAKME2sbxNooVm9HeonfCkStAQADAgADeAADPQQ)

本题错选为 A，属于低级错误。这道题属于背书题，IO 接口中的寄存器应该是控制寄存器，状态寄存器和数据缓冲寄存器（通用的）。对于地址寄存器是 DMA 独有的。

![7.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADqWrEozekCXzhKD63aAmda_mtQ6S3AAKNE2sbxNooVn_-IEDxttceAQADAgADeAADPQQ)

本题错选为 B。属于背书题，对于 B，IO 指令是机器指令的一类，例如 IN/OUT；而对于 D，得分为统一和独立编址讨论。

本题错选为 C，做这种题的时候需要画图，状态信息应该是 CPU -> 打印控制接口 -> 打印机，所以中断请求信号应该是 CPU 到打印控制接口的。

![7.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADq2rEo8nCn2mwDaLZ1cOs2qmGOPWEAAKQE2sbxNooVh848LIr9oQaAQADAgADeAADPQQ)

本题错选为 A。中断被分为中断响应周期和中断处理周期，对于前者是通过中断隐指令将允许中断触发器置零，对于后者才是通过关终端指令的。

![7.3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADrGrEpBHThEEHm1hIvV6-9TtqyiK8AAKRE2sbxNooVq8DwM8c3RIbAQADAgADeAADPQQ)

本题错选为 B。这个属于重难点也是易错点：

对于 A，中断请求优先级由设备决定。

对于 B，CPU 对多个中断请求响应是由硬件决定的，也就是中断优先级。

对于 C，最开始执行的一定是根据中断优先级。

对于 D，考虑硬件 1>2>3，而中断屏蔽字为 2>1>3，三个同时来，先执行 1，1 在执行中断处理程序的时候会开中断，此时 2 可以打断 1......

响应优先级和中断优先级是两码事，改变的是中断优先级（也就是执行的时候谁可以打断谁），而不是响应优先级

![7.3.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADrWrEpZth1OGpt2c79GRALRws7lscAAKUE2sbxNooVnV0ix8KwawtAQADAgADeAADPQQ)

本题错选为 A。后处理的目的是通知 CPU 是否 OK，由操作系统决定是否传送下一块/改变进程状态/原来是否校验正确。

![7.3.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADrmrEpeCcObB4W1UhkDSFtBaiuvYOAAKVE2sbxNooVllGnsH1bZJvAQADAgADeAADPQQ)

本题错选为 A，注意这里的表述是流水段。

![7.3.47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADr2rEpgORiNcQtiQ2v64YQ1O24EMBAAKXE2sbxNooVkDgOe7Q0ZSRAQADAgADeAADPQQ)

本题错选为 A。DMA 控制分成三种方式，停止 CPU 访问，周期挪用和交替访问。本题采用周期挪用的方式，所以 A 是对的，C 是错的，如果采用停止 CPU 访问的方式的话，那么 A 是错的，C 是对的。

![7.3.50](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADsGrEplE7uOslj3RySs7BEzeNgZ1QAAKZE2sbxNooVlB-rlmFx9mKAQADAgADeAADPQQ)

本题错选为 C。时序理解问题。对于中断而言，CPU 在一条指令结束的时候才去检测中断，然后检测到这个中断了当处于开中断的时候就去执行，而不是 CPU 在指令执行过程中就在那里检测终端。对于 D，CPU 发给终端控制器信号。

### 计组王道选择题 3 刷 - 总结

总的来讲，细节问题还是很多，理解问题比操作系统那块要大不少。
