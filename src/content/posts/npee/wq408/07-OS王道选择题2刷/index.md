---
title: OS 王道选择题 2 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · OS 王道选择题 2 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.07
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## OS 王道选择题 2 刷

### OS 王道选择题 2 刷第 1 章

![1.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBRlqz5Tp7gzcJl3dYHVVGUjEzuqRAAPFFGsbt-Z5VqC-PY1SQJ7vAQADAgADeAADPQQ)

> 操作系统有多种类型，允许多个用户以交互的方式使用计算机的操作系统，称为（ ）；允许多个用户将若干作业提交给计算机系统集中处理的操作系统，称为（ ）；在（ ）的控制下，计算机系统能及时处理由过程控制反馈的数据，并及时做出响应；在 IBM-PC 中，操作系统称为（ ）。
>
> - A. 批处理系统
> - B. 分时操作系统
> - C. 实时操作系统
> - D. 微型计算机操作系统
>
> 下列各种系统中，（ ）可以使多个进程并行执行。
>
> - A. 分时操作系统
> - B. 多处理器系统
> - C. 批处理系统
> - D. 实时操作系统

第 13 题答案为 BACD，错选为 BADC。为低级错误。IBM-PC 是微型计算机，实时操作系统即使做出相应。这里提一嘴，实时操作系统分为软实时和硬实时，软实时比如说车票系统，不需要太强的时效性，硬实时比如说金融场景。

第 14 题错选为 C，注意此处为并行，而非并发。与 1 刷第 16 题类似错误。并行意味着需要有多个处理器，因为并行意味着微观时间内也是同时

![1.2.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBRpqz5XnWiAPcb9ar0gB4Fg4fvpWJQACxxRrG7fmeVYkXlZJjartgAEAAwIAA3gAAz0E)

> 【2017 统考真题】与单道程序系统相比，多道程序系统的优点是（ ）。
> Ⅰ. CPU 的利用率高    Ⅱ. 系统开销小
> Ⅲ. 系统吞吐量大    Ⅳ. I/O 设备利用率高
>
> - A. 仅Ⅰ、Ⅲ
> - B. 仅Ⅰ、Ⅳ
> - C. 仅Ⅱ、Ⅲ
> - D. 仅Ⅰ、Ⅲ、Ⅳ
>
> 【2018 统考真题】下列关于多任务操作系统的叙述中，正确的是（ ）。
> Ⅰ. 具有并发和并行的特点
> Ⅱ. 需要实现对共享资源的保护
> Ⅲ. 需要运行在多 CPU 的硬件平台上
>
> - A. 仅Ⅰ
> - B. 仅Ⅱ
> - C. 仅Ⅰ、Ⅱ
> - D. Ⅰ、Ⅱ、Ⅲ

第 18 题错选为 A。考虑这样一个场景，假设单道程序系统和多道程序系统同时处理若干个程序，某时该进程需要进行 I/O 操作，此时单道程序系统无法切换进程，只能让 CPU 等待该进程处理完 I/O 后再继续运行该进程，而多道程序系统可以趁着该进程处理 I/O 时，切换到其他需要 CPU 的进程。

和上述情况类似的，在同一时间内有两个进程，他们都需要进行 I/O 操作，单处理机先处理第 1 个进程，假设先 CPU 再 I/O，此时 I/O 设备闲置，而第二个先 I/O 再 CPU 的进程无法利用 I/O 设备。所以多道程序系统可以让 I/O 设备利用率高。
对于系统开销，由于单道相比于多道而言会有更多的闲置，所以单道开销低，多道开销高。

第 19 题错选为 D。错误原因猜测类似于 1 刷第 16 题，对多任务操作系统理解不够。多任务操作系统意味着该系统可以执行多个任务（需要和多道程序区分开来），假设多任务操作系统运行在单 CPU 的环境，意味着这些任务是并发执行的；如果运行在多 CPU 上，这些任务可以是并发的，也可以是并行的。正因为需要临界资源，所以需要互斥地访问，所以需要保护。
对于多 CPU 硬件，正如前面所说，多任务=并发，而非并行。

对于多道程序系统，考虑多核 CPU，多个程序也可以并行的运行在一个 CPU 上。

![1.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBRtqz5aOXZomNWha70v1vAxZGhK3fgAC2hRrG7fmeVYTvZ_r9jRxAgEAAwIAA3gAAz0E)

> 下列指令中，必须在内核态执行的是（ ）。
> Ⅰ. 陷入指令    Ⅱ. 系统调用指令    Ⅲ. 开中断指令
> Ⅳ. 转移指令    Ⅴ. 中断屏蔽字设置指令
>
> - A. Ⅰ、Ⅱ、Ⅲ、Ⅳ
> - B. Ⅱ、Ⅲ
> - C. Ⅱ、Ⅲ、Ⅴ
> - D. Ⅰ、Ⅳ

本题错选为 B。陷入指令是在用户态执行的，系统调用指令的执行是在内核态，调用在用户态。转移指令不需要在内核态执行，可以理解为 jumpto。中断屏蔽字指令由于需要修改中断屏蔽字，所以必须在内核态执行。

![1.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBRxqz5bnYknNVGARM7fqct2Grbw_dQAC3RRrG7fmeVbj4MJEexxYzgEAAwIAA3gAAz0E)

> 下列中断事件中，能引起外中断的事件是（ ）。
> Ⅰ. 时钟中断    Ⅱ. 访管中断    Ⅲ. 缺页中断
>
> - A. Ⅰ
> - B. Ⅲ
> - C. Ⅰ和Ⅱ
> - D. Ⅱ和Ⅲ
>
> 下列关于库函数和系统调用的说法中，不正确的是（ ）。
>
> - A. 库函数运行在用户态，系统调用运行在内核态
> - B. 使用库函数时开销较小，使用系统调用时开销较大
> - C. 库函数不方便被替换，系统调用通常很方便被替换
> - D. 库函数可以很方便地调试，而系统调用很麻烦

第 12 题错选为 C。内中断又称异常，分为三类：故障、陷入、终止。访管指令就是 trap 指令，对于 1 可以理解为 RR 调度。
Trap 是内中断。

捋一遍 scanf 流程。Scanf 调用 trap 指令让内核态干预，内核态为系统调用的被调用过程，发现没有按键，把系统改为阻塞态。直到键盘有人输入了数据，触发硬件中断。

然后键盘中断服务程序，读入按键数据，把进程改为就绪态，等到下一轮上处理机后，scanf 才结束，继续跑。

![1.3.12 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBR1qz5deB_qMK3rEbINroR2psldmQAAC4RRrG7fmeVbq7BMkLzXpjgEAAwIAA3gAAz0E)

> [原图非题目：主人整理的 scanf 系统调用与中断处理流程解析笔记（带行号的文本截图）]

第 13 题错选为 A，为低级错误。库函数运行在用户态，系统调用运行在用户态，而系统调用的执行是在内核态。即使是 malloc 函数，操作的也是堆区，堆区是被分配给用户的。

![1.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBR5qz5d-8rWFEPFHFSfsxsz5Ss_0KwAC4xRrG7fmeVZEuHDOyhrXogEAAwIAA3gAAz0E)

> 【2012 统考真题】中断处理和子程序调用都需要压栈，以便保护现场，中断处理一定会保存而子程序调用不需要保存其内容的是（ ）。
>
> - A. 程序计数器
> - B. 程序状态字寄存器
> - C. 通用数据寄存器
> - D. 通用地址寄存器

错选为 D，为低级错误，显然为 PSW。

![1.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBR9qz5ev_lo9QsS0yctFi8LN7H8SFgAC5BRrG7fmeVZyg3m7wd5PXQEAAwIAA3gAAz0E)

> 【2018 统考真题】定时器产生时钟中断后，由时钟中断服务程序更新的部分内容是（ ）。
> Ⅰ. 内核中时钟变量的值
> Ⅱ. 当前进程占用 CPU 的时间
> Ⅲ. 当前进程在时间片内的剩余执行时间
>
> - A. 仅Ⅰ、Ⅱ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅰ、Ⅲ
> - D. Ⅰ、Ⅱ、Ⅲ
>
> 【2019 统考真题】下列关于系统调用的叙述中，正确的是（ ）。
> Ⅰ. 在执行系统调用服务程序的过程中，CPU 处于内核态
> Ⅱ. 操作系统通过提供系统调用避免用户程序直接访问外设
> Ⅲ. 不同的操作系统为应用程序提供了统一的系统调用接口
> Ⅳ. 系统调用是操作系统内核为应用程序提供服务的接口
>
> - A. 仅Ⅰ、Ⅳ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅰ、Ⅱ、Ⅳ
> - D. 仅Ⅰ、Ⅲ、Ⅳ

第 25 题错选为 A（划掉）C。

第 26 题错选为 D。

这两题 1 刷的时候都错了，再次选错。

![1.3.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSBqz5fTlIE3SUp0h2Ocu7QbvC3_TgAC5RRrG7fmeVaUaDGAXRn_8gEAAwIAA3gAAz0E)

> 【2021 统考真题】下列指令中，只能在内核态执行的是（ ）。
>
> - A. Trap 指令
> - B. I/O 指令
> - C. 数据传送指令
> - D. 设置断点指令

本题错选为 D。设置断点可以理解为高级语言的打断点，也可以理解为汇编的打断点。I/O 指令需要在内核态执行。

![1.3.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSFqz5ftbGT69y8BNvhQjbfiP4S9QwAC5hRrG7fmeVaK0SxYRoYJhQEAAwIAA3gAAz0E)

> 【2022 统考真题】执行系统调用的过程涉及下列操作，其中由操作系统完成的是（ ）。
> Ⅰ. 保存断点和程序状态字    Ⅱ. 保存通用寄存器的内容
> Ⅲ. 执行系统调用服务例程    Ⅳ. 将 CPU 模式改为内核态
>
> - A. 仅Ⅰ、Ⅲ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅱ、Ⅳ
> - D. 仅Ⅱ、Ⅲ、Ⅳ

本题错选为 D。修改 CPU 模式由硬件完成，可以理解为中断指令那部分。

![1.6.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSJqz5gEnEVoqNB4c1yXmRueOuLcKwAC5xRrG7fmeVYRBSFWOMvZRwEAAwIAA3gAAz0E)

> 下列选项中，（ ）不属于模块化操作系统的特点。
>
> - A. 很多模块化的操作系统，可以支持动态加载新模块到内核，适应性强
> - B. 内核中的某个功能模块出错不会导致整个系统崩溃，可靠性高
> - C. 内核中的各个模块可以相互调用，无须通过消息传递进行通信，效率高
> - D. 各模块间相互依赖，相比于分层式操作系统，模块化操作系统更难调试和验证

本题错选为 C。内核中的某个功能块出错会导致依赖该功能的部分崩溃，从而导致连锁反应。

![1.6.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSNqz5gW_oYZm2EAAfSqraV26dHlkFIAAugUaxu35nlWRUjDZbhxyOsBAAMCAAN4AAM9BA)

> 下列说法中，（ ）不适合描述微内核操作系统。
>
> - A. 内核足够小
> - B. 功能分层设计
> - C. 基于 C/S 模式
> - D. 策略与机制分离
>
> 对于以下五种服务，在采用微内核结构的操作系统中，（ ）不宜放在微内核中。
> Ⅰ. 进程间通信机制    Ⅱ. 低级 I/O    Ⅲ. 低级进程管理和调度
> Ⅳ. 中断和陷入处理    Ⅴ. 文件系统服务
>
> - A. Ⅰ、Ⅱ和Ⅲ
> - B. Ⅱ和Ⅴ
> - C. 仅Ⅴ
> - D. Ⅳ和Ⅴ

第 5 题错选为 C。功能分层设计是分层设计系统。

第 6 题错选为 A。详见 1 刷。

![1.6.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSRqz5guAQZXrAafBMdowR9gluJoXAAC6RRrG7fmeVYOMxuN7uXKLgEAAwIAA3gAAz0E)

> 下列关于操作系统结构的说法中，正确的是（ ）。
> Ⅰ. 当前广泛使用的 Windows 操作系统，采用的是分层式 OS 结构
> Ⅱ. 模块化的 OS 结构设计的基本原则是，每一层都仅使用其底层所提供的功能和服务，这样就使系统的调试和验证都变得容易
> Ⅲ. 因为微内核结构能有效支持多处理机运行，所以非常适合于分布式系统环境
> Ⅳ. 采用微内核结构设计和实现操作系统具有诸多好处，如添加系统服务时不必修改内核，使系统更高效。
>
> - A. Ⅰ和Ⅱ
> - B. Ⅰ和Ⅲ
> - C. Ⅲ
> - D. Ⅲ和Ⅳ

本题错选为 D。微内核架构不会让系统更高效，因为做一件事就需要不停的变态。

![1.6.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSVqz5hJmLRSYNHuo4iUmr2hFTd4aQAC6hRrG7fmeVaQnXwfI5PR1gEAAwIAA3gAAz0E)

> 存放操作系统自举程序的芯片是（ ）。
>
> - A. SRAM
> - B. DRAM
> - C. ROM
> - D. CMOS
>
> 计算机操作系统的引导程序位于（ ）中。
>
> - A. 主板 BIOS
> - B. 片外 Cache
> - C. 主存 ROM 区
> - D. 硬盘

第 12 题错选为 D。典型的乱选。本题其实考察的是 BIOS 在哪，显然位于 ROM 中。

第 13 题错选为 A，与 1 刷相同的错误。引导程序的“程序”位于硬盘内。

![1.6.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSZqz5hhE3PLwYwJ9Z86iwsMQzKdSAAC6xRrG7fmeVYPYaevd9RK9QEAAwIAA3gAAz0E)

> 【2013 统考真题】计算机开机后，操作系统最终被加载到（ ）。
>
> - A. BIOS
> - B. ROM
> - C. EPROM
> - D. RAM

本题错选为 A。没读完题目，显然被加载到内存中，也就是 RAM。

### OS 王道选择题 2 刷第 2 章

![2.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSdqz5h3c_zMNwU_Mye5CWIBrDWYhgACRhBrG7fmgVbFcWCGnQFkFwEAAwIAA3gAAz0E)

> 下列选项中，导致创建新进程的操作是（ ）。
> Ⅰ. 用户登录    Ⅱ. 高级调度发生时
> Ⅲ. 操作系统响应用户提出的请求    Ⅳ. 用户打开了一个浏览器程序
>
> - A. 仅Ⅰ和Ⅳ
> - B. 仅Ⅱ和Ⅳ
> - C. Ⅰ、Ⅱ和Ⅳ
> - D. 全部

本题错选为 C，1 刷也错了，详见 1 刷。

![2.1.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBShqz5iOz88boprfOWso3GlLzNM6rgACRxBrG7fmgVYqIgIhGI3htgEAAwIAA3gAAz0E)

> 若一个进程实体由 PCB、共享正文段、数据堆段和数据栈段组成，请指出下列 C 语言程序中的内容及相关数据结构各位于哪一段中。
> Ⅰ. 全局赋值变量（ ）Ⅱ. 未赋值的局部变量（ ）
> Ⅲ. 函数调用实参传递值（ ）Ⅳ. 用 malloc() 要求动态分配的存储区（ ）
> Ⅴ. 常量值（如 1995、"string"）（ ）Ⅵ. 进程的优先级（ ）
>
> - A. PCB
> - B. 正文段
> - C. 堆段
> - D. 栈段

这题是没做完。本质是背书不够。分配的逻辑空间从低地址到高地址可以理解为：

代码本体 - 全局变量 - 堆区 - 共享区 - 栈区 - 局部变量 - 内核区

通过这个就可以很容易理解。

![2.1.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSlqz5mtA5VXNt3fBFfhuadukPa5AANIEGsbt-aBVju3iEkEUagkAQADAgADeAADPQQ)

> 下列进程间通信方式中，数据传输速度最快的是（ ）。
>
> - A. 消息传递
> - B. 信号量
> - C. 共享内存
> - D. 管道

本题错选为 D。管道可以理解为是两个进程间先建立管道，然后进行半双工通信，没有共享内存来的快。1 刷也错了，详见 1 刷。

![2.1.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSpqz5u5HGl2s982k5wtJDmeoBHhsgACSxBrG7fmgVYVWEDXGTc7egEAAwIAA20AAz0E)

> 下列关于信号发送和处理的描述中，错误的是（ ）。
>
> - A. 一个进程可以给自己发送信号
> - B. 操作系统的内核可以给进程发送信号
> - C. 操作系统的内核对每种信号都有默认处理程序
> - D. 用户可以对每种信号自定义处理函数

错选为 B。用户可以对一部分信号自定义，对于 kill 之类的显然不可以。

一个进程可以给自己发送信号，例如 alarm，提醒自己过段时间要做什么。

操作系统的内核可以给进程发送信号，例如可以紧急制止某些进程继续做事。

![2.1.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBStqz5vgVQS6sak8_LVQWccVBB4yCQACTBBrG7fmgVanp8sqUt1oRgEAAwIAA3gAAz0E)

> 下列关于线程的叙述中，正确的是（ ）。
>
> - A. 线程包含 CPU 现场，可以独立执行程序
> - B. 每个线程都有自己独立的地址空间
> - C. 每个进程只能包含一个线程
> - D. 同一进程中的线程间通信也必须使用系统调用函数

错选为 B，1 刷也错了，详见 1 刷。

![2.1.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBSxqz5vzMGlbqb5k4RLWPZHgJbzH0QACThBrG7fmgVbHRJ1yaN0h4AEAAwIAA3gAAz0E)

> 在进程转换时，下列（ ）转换是不可能发生的。
>
> - A. 就绪态→运行态
> - B. 运行态→就绪态
> - C. 运行态→阻塞态
> - D. 阻塞态→运行态

错选为 C，为低级错误，把图画出来就 100% 不会错。

![2.1.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBS1qz5wLI3iywUw4wNgu4BXaWekgwgACTxBrG7fmgVYtd-3YHZjfJgEAAwIAA3gAAz0E)

> 两个合作进程（Cooperating Processes）无法利用（ ）交换数据。
>
> - A. 文件系统
> - B. 共享内存
> - C. 高级语言程序设计中的全局变量
> - D. 消息传递系统

错选为 A，本题的 C 可以用进程实体那部分去理解存储在哪。

![2.1.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBS5qz5wdvat3WbhUgffgdlgj8iernAACUBBrG7fmgVbrMomssRi-bwEAAwIAA3gAAz0E)

> 下面关于用户级线程和内核级线程的描述中，错误的是（ ）。
>
> - A. 采用轮转调度算法，进程中设置内核级线程和用户级线程的效果完全不同
> - B. 跨进程的用户级线程调度也不需要内核参与，控制简单
> - C. 用户级线程可以在任何操作系统中运行
> - D. 若系统中只有用户级线程，则 CPU 的调度对象是进程

错选为 A。本体为低级错误，可以理解为用户级线程的时间分配是在已经分配的这个时间片上切分，而内核的是真全局切。

![2.1.52](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBS9qz5wu4tGxC64XacdK4rBXud2OsQACURBrG7fmgVak18fsQcDDPgEAAwIAA3gAAz0E)

> 下列选项中，可能导致用户级线程切换的事件是（ ）。
>
> - A. 系统调用
> - B. I/O 请求
> - C. 异常处理
> - D. 线程同步

错选为 B。本题为用户级线程切换，也就是相当于用户态到用户态的切换，不涉及到内核态。

![2.1.60](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTBqz5xCC8KxVX84vo6CHGt0j8vK_AACUhBrG7fmgVbr4F72d7VjWQEAAwIAA3gAAz0E)

> 【2012 统考真题】下列关于进程和线程的叙述中，正确的是（ ）。
>
> - A. 不管系统是否支持线程，进程都是资源分配的基本单位
> - B. 线程是资源分配的基本单位，进程是调度的基本单位
> - C. 系统级线程和用户级线程的切换都需要内核的支持
> - D. 同一进程中的各个线程拥有各自不同的地址空间

本题错选为 D。对线程和进程的理解不够准确。1 刷也错了，详见 1 刷。

![2.1.62](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTFqz52TAelvIvN8XT0ky-WPtWn5XAACYBBrG7fmgVa9MsmP6PH3RwEAAwIAA3gAAz0E)

> 【2014 统考真题】下列关于管道（Pipe）通信的叙述中，正确的是（ ）。
>
> - A. 一个管道可实现双向数据传输
> - B. 管道的容量仅受磁盘容量大小限制
> - C. 进程对管道进行读操作和写操作都可能被阻塞
> - D. 一个管道只能有一个读进程或一个写进程对其操作

本题错选为 D。这里可以理解为读者写者问题，同一时间可以有多个读者进行操作。管道的大小为内存的 1 页。

![2.1.65](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTJqz520t-grEYf0UTVmv0ZoVPpewwACYRBrG7fmgVaF_hCy2gABXgUBAAMCAAN4AAM9BA)

> 【2019 统考真题】下列选项中，可能将进程唤醒的事件是（ ）。I. I/O 结束  II. 某进程退出临界区  III. 当前进程的时间片用完
>
> - A. 仅 I
> - B. 仅 III
> - C. 仅 I、II
> - D. I、II、III

本题错选为 B。可能将进程唤醒，意味着从阻塞态到就绪态。

![2.1.73](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTNqz53MPTS73j0W4_rW737t9wXZcQACYhBrG7fmgVbTlcSxlzXcKgEAAwIAA3gAAz0E)

> 【2024 统考真题】若进程 P 中的线程 T 先打开文件，得到文件描述符 fd，再创建两个线程 Ta 和 Tb，则在下列资源中，Ta 与 Tb 可共享的是（ ）。I. 进程 P 的地址空间  II. 线程 T 的栈  III. 文件描述符 fd
>
> - A. 仅 I
> - B. 仅 I、III
> - C. 仅 II、III
> - D. I、II、III

本题错选为 A，也是对线程和进程的区别不了解，具体见前面。

![2.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTRqz53iWGwPzQYAAbq_3prlAxjBXLwAAmMQaxu35oFWRsHtRSfwPgIBAAMCAAN4AAM9BA)

> 在某单处理器系统中，若此刻有多个就绪态进程，则下列叙述中错误的是（ ）。
>
> - A. 进程调度的目标是让进程轮流使用处理器
> - B. 当一个进程运行结束后，会调度下一个就绪进程运行
> - C. 上下文切换是进程调度的实现手段
> - D. 处于临界区的进程在退出临界区前，无法被调度

错选为 A。1 刷时只知道这个 D 是对的，但是不知道 D 为什么是对的。临界区的定义是进入那段代码，而那段代码里假设 P 了一些东西，还没有真正执行，那么还会被调度，结果发现还在 P 状态中，所以重新返回队列？

上面的解释有问题，这还没进入临界区，重新来一下。

临界区：访问临界资源的代码。

所以 D 的意思是说，处于临界区的进程在访问临界资源的时候，无法被剥夺 CPI/无法被调用上 CPU 运行。所以，假设 A 进程正在使用打印机，操作系统因为其时间片到了，将其调度下处理机，此时临界资源仍然被 A 所占有，其他进程只要不访问临界资源就可以正常使用 CPU。

![2.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTVqz54KC17CKmkwD7clJjrX3qWKbQACZRBrG7fmgVaENWnGF1WQ4wEAAwIAA3gAAz0E)

> 支持多道程序设计的操作系统在运行过程中，不断地选择新进程运行来实现 CPU 的共享，但其中（ ）不是引起操作系统选择新进程的直接原因。
>
> - A. 运行进程的时间片用完
> - B. 运行进程出错
> - C. 运行进程要等待某一事件发生
> - D. 有新进程被创建进入就绪态

本题错选为 C。本题实质上考虑的是什么行为可以导致有进程从就绪态转换为运行态。对于 A，考虑 RR，一个进程的时间片用完了，那么可能会有其他进程换上去。对于 B，如果有进程出错，那么肯定也要退出运行态，从而有其他进程进入运行态。对于 C，含义是有一个进程从就绪态变为阻塞态，CPU 空余，所以会导致有新进程被调度上处理机；对于 D，即便是有新进程创建进入就绪态，并不会影响还在处理机上运行的。

![2.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTZqz6DxzrfGzElHmxeQ3lUMWZR4dgACchBrG7fmgVYml5nXzIGS2AEAAwIAA3gAAz0E)

> 设有 4 个作业同时到达，每个作业的执行时间均为 2h，它们在一台处理器上按单道式运行，则平均周转时间为（ ）。
>
> - A. 1h
> - B. 5h
> - C. 2.5h
> - D. 8h

错选为 C。低级错误，我自己都看不懂我的草稿在算什么（2/2+4/2+6/2+8/2）。

![2.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTdqz6HigV5sLvf5U0WNsRRwrIcmxAACdBBrG7fmgVYT_j7UUO3eLAEAAwIAA3gAAz0E)

> 一个作业 8:00 到达系统，估计运行时间为 1h。若 10:00 开始执行该作业，其响应比是（ ）。
>
> - A. 2
> - B. 1
> - C. 3
> - D. 0.5

错选为 A。本题记错高相应比计算公式，应该为：（等待时间 + 预计运行时间）/预计运行时间。

![2.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBThqz6H_F6CGgvt4mDqP7Hh6fjNFcAACdhBrG7fmgVYMrF5qDsMM2QEAAwIAA3gAAz0E)

> 下列调度算法中，（ ）调度算法是绝对可抢占的。
>
> - A. 先来先服务
> - B. 时间片轮转
> - C. 优先级
> - D. 短进程优先

本题错选为 C。优先级算法有抢占式调度也有非抢占式调度的。优先级算法可以保证进程不会饥饿。

![2.2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTlqz6IeGwZfSuJKLXGhb9YXfONB8wACdxBrG7fmgVZf_wV3Ey114wEAAwIAA3gAAz0E)

> 有以下的进程需要调度执行（见下表）：
>
> 进程名 | 到达时间/h | 运行时间/h
> P1 | 0.0 | 9
> P2 | 0.4 | 4
> P3 | 1.0 | 1
> P4 | 5.5 | 4
> P5 | 7 | 2
>
> - [图示] 表格共 3 列（进程名、到达时间/h、运行时间/h）、5 行数据（P1~P5）
>
> 1）若用非抢占式短进程优先调度算法，问这 5 个进程的平均周转时间是多少？
> 2）若采用抢占式短进程优先调度算法，问这 5 个进程的平均周转时间是多少？
>
> - A. 8.62h; 6.34h
> - B. 8.62h; 6.8h
> - C. 10.62h; 6.34h
> - D. 10.62h; 6.8h

本题 2 刷时没写（

![2.2.38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTpqz6JIZGJ2rXtB42IsHXihy8nAPwACeRBrG7fmgVYnUPnMiX6HBwEAAwIAA3gAAz0E)

> 【2010 统考真题】下列选项中，降低进程优先级的合理时机是（ ）。
>
> - A. 进程时间片用完
> - B. 进程刚完成 I/O 操作，进入就绪队列
> - C. 进程长期处于就绪队列
> - D. 进程从就绪态转换为运行态
>
> 【2011 统考真题】下列选项中，满足短作业优先且不会发生饥饿现象的是（ ）调度算法。
>
> - A. 先来先服务
> - B. 高响应比优先
> - C. 时间片轮转
> - D. 非抢占式短作业优先

38 题错选为 D。考虑这样一种情况，进程从就绪态转换为运行态的时候，降低优先级为最低，假设该系统采用的是抢占式的优先级调度，那么该进程就会被换下来。对于 A，进程的时间片用完，假设仍然保持原来的优先级，可能会霸占处理机。对于 B，完成 I/O 操作意味着其可以被调度，所以并不合适；对于 C，饥饿。

39 题错选为 D。即便是非抢占式的短作业优先，也会导致饥饿现象。本题应该是出的不准确，但是最对的选项也只能能是 B 了，相对满足短作业优先，并且对于长时间未能得到处理机的长作业，会提升其优先级。

![2.2.51](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTtqz6KVf1EffbnPowTN6FDVfvyMLgACehBrG7fmgVar-MFxTa4H3gEAAwIAA3gAAz0E)

> 【2021 统考真题】下列事件中，可能引起进程调度程序执行的是（ ）。I. 中断处理结束  II. 进程阻塞  III. 进程执行结束  IV. 进程的时间片用完
>
> - A. 仅 I、III
> - B. 仅 II、IV
> - C. 仅 III、IV
> - D. I、II、III 和 IV
>
> 【2022 统考真题】进程 P0、P1、P2 和 P3 进入就绪队列的时刻、优先级（值越小优先权越高）及 CPU 执行时间如下表所示。
>
> 进程名 | 进入就绪队列的时刻 | 优先级 | CPU 执行时间
> P0 | 0ms | 15 | 100ms
> P1 | 10ms | 20 | 60ms
> P2 | 10ms | 10 | 20ms
> P3 | 15ms | 6 | 10ms
>
> - [图示] 表格共 4 列（进程名、进入就绪队列的时刻、优先级、CPU 执行时间）、4 行数据（P0~P3）
>
> 若系统采用基于优先权的抢占式进程调度算法，则从 0ms 时刻开始调度，到 4 个进程都运行结束为止，发生进程调度的总次数为（ ）。
>
> - A. 4
> - B. 5
> - C. 6
> - D. 7

51 题错选为 C。本题含义为：某行为结束后可能会引发就绪态到运行态的转变。对于 1，中断处理结束可以理解为 I/O 操作结束（例如 DMA 传输完了），此时 I/O 好了，从阻塞态变味了就绪态，自然可能会引发调度。对于 2，进程阻塞意味着有进程从运行成阻塞态，也就意味着 CPU 空出来了，可能可以有进程上处理机。对于 3，和 2 类似的道理，进程结束 CPU 空出来。对于 4，和 2、3 类似的道理，从运行态变为就绪态，导致 CPU 空出来。

52 题错选为 B。第一次调度也是调度。

![2.5.54](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBTxqz6Kqf0DQ17_u68Az7ot3KqjbbwACfBBrG7fmgVYDe7UHwDQuRAEAAwIAA3gAAz0E)

> 【2024 统考真题】假设某系统使用时间片轮转调度算法进行 CPU 调度，时间片大小为 5ms，系统共有 10 个进程，初始时均处于就绪队列，执行结束前仅处于运行态或就绪态，若队尾的进程 P 所需的 CPU 时间最短，时间为 25ms，不考虑系统开销，则进程 P 的周转时间为（ ）。
>
> - A. 200ms
> - B. 205ms
> - C. 250ms
> - D. 295ms

本题错选为 B。一上系统就算是处于就绪队列（已经到达了，并且在等待处理机），而不是等其他人运行，自己第一次上处理机的时候才开始算。如果是自己第一次上处理机的时候才开始算的话，那么如果不是 RR 的所有周转时间都是运行时间。

![2.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBT1qz6LBd1o_dEyjahTbWAI4eixy6gACfRBrG7fmgVZl_W9hV4R5jAEAAwIAA3gAAz0E)

> 两个旅行社甲和乙为旅客到某航空公司订飞机票，形成互斥资源的是（ ）。
>
> - A. 旅行社
> - B. 航空公司
> - C. 飞机票
> - D. 旅行社与航空公司

本题错选为 B。2 刷也错了。

![2.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBT5qz6LS8E3b4Wd2VkgcQIfluv14WQACfhBrG7fmgVZ-a2JmD4NMWwEAAwIAA20AAz0E)

> 在操作系统中，要对并发进程进行同步的原因是（ ）。
>
> - A. 进程必须在有限的时间内完成
> - B. 进程具有动态性
> - C. 并发进程是异步的
> - D. 进程具有结构性

本题错选为 D。因为进程是异步的（不同进程运行的时序是不固定的），有些进程有先后关系，所以选 C。进程有结构性的含义例如是这一块被分给用户作为堆区等，显然和题目无关。

![2.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBT9qz6LjdIrcZk7bdgnP11nPP9e4nAACgBBrG7fmgVbxfsI0gm7f1gEAAwIAA3gAAz0E)

> （ ）定义了共享数据结构和各种进程在该数据结构上的全部操作。
>
> - A. 管程
> - B. 类程
> - C. 线程
> - D. 程序

错选为 D。程序是放在外存的静态代码和数据，概念比较泛。

![2.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUBqz6L9MaLnh6XFYdSPNCzf9bOFgQACgRBrG7fmgVZ3yHScsLCURQEAAwIAA3gAAz0E)

> 用 P、V 操作实现进程同步，信号量的初值为（ ）。
>
> - A. -1
> - B. 0
> - C. 1
> - D. 由用户确定

错选为 B。一样的错误原因。

![2.3.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUFqz6MORf3tSp-MG9XGeTn0m-xqBwACghBrG7fmgVaj0UuzhyUkOAEAAwIAA3gAAz0E)

> 一个进程映像由程序、数据及 PCB 组成，其中（ ）必须用可重入编码编写。
>
> - A. PCB
> - B. 程序
> - C. 数据
> - D. 共享程序段

错选为 C。ABC 均为一个进程私有的。

![2.3.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUJqz6MhHJtHF6QQUIvvG_AU0gVbfgAChBBrG7fmgVbSBYpbzRWXpQEAAwIAA3gAAz0E)

> 一个进程因在互斥信号量 mutex 上执行 V(mutex) 操作而导致唤醒另一个进程时，执行 V 操作后 mutex 的值为（ ）。
>
> - A. 大于 0
> - B. 小于 0
> - C. 大于或等于 0
> - D. 小于或等于 0
>
> 一个系统中共有 5 个并发进程涉及某个相同的变量 A，变量 A 的相关临界区是由（ ）个临界区构成的。
>
> - A. 1
> - B. 3
> - C. 5
> - D. 6

26 题错选为 A。导致唤醒一个进程意味着等待队列里有人，也就意味着原本的 mutex 值至少为 -1，所以 +1 也就是 D。

27 题错选为 A，一样的错误。

![2.3.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUNqz6M-tu4Z-0xBSk2o6oO83yw_bAAChRBrG7fmgVY3ARUq40Ni2AEAAwIAA3gAAz0E)

> 以下关于管程的叙述中，错误的是（ ）。
>
> - A. 管程是进程同步工具，解决信号量机制大量同步操作分散的问题
> - B. 管程每次只允许一个进程进入管程
> - C. 管程中 signal 操作的作用和信号量机制中的 V 操作相同
> - D. 管程是被进程调用的，管程是语法范围，无法创建和撤销
>
> 对信号量 S 执行 P 操作后，使该进程进入资源等待队列的条件是（ ）。
>
> - A. S.value < 0
> - B. S.value <= 0
> - C. S.value > 0
> - D. S.value >= 0

29 题错选为 D。管程中的 signal 和 V 不一样，管程中的 signal 假设执行的时候恰巧没有人在里面，那么这次是浪费的。换句话说，管程是没有记忆的，V 是有记忆的。

管程不像“进程”那样是个活生生跑来跑去的东西，它其实是编程语言里的一个“静态代码块”。管程就像是这栋楼在建房子的时候，就用钢筋水泥砌好的一间“VIP 包厢”（语法范围）。它是静静待在那里的建筑物，等待着进程走进去使用（调用）它。

30 题错选为 C，和 1 刷时类似的错误。

![2.3.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBURqz6NaRJXvgdIBRZ_zYvx4VDAONgAChxBrG7fmgVaLZ3yVHu4_xgEAAwIAA3gAAz0E)

> 并发进程之间的关系是（ ）。
>
> - A. 无关的
> - B. 相关的
> - C. 可能相关的
> - D. 可能是无关的，也可能是有交往的

错选为 C。没读完选项，属于低级错误。

![2.3.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUVqz6NzILS5ojDtOv441nVM3CqAsgACiBBrG7fmgVZ2h1ui88n6IAEAAwIAA3gAAz0E)

> 生产者 - 消费者问题用于解决（ ）。
>
> - A. 多个进程共享一个数据对象的问题
> - B. 多个进程之间的同步和互斥问题
> - C. 多个进程共享资源的死锁与饥饿问题
> - D. 利用信号量实现多个进程并发的问题

错选为 A，属于低级错误。

![2.3.41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUZqz6OX4UhB8f-Mz2uVKVrVYE7ioQACixBrG7fmgVZBdQjE0Yb1OwEAAwIAA3gAAz0E)

> 下列关于生产者 - 消费者问题的唤醒操作的说法中，正确的是（ ）。I. 生产者唤醒其他生产者  II. 生产者唤醒消费者  III. 消费者唤醒其他消费者  IV. 消费者唤醒生产者
>
> - A. I 和 II
> - B. III 和 IV
> - C. II 和 III
> - D. I、II、III 和 IV
>
> 在 9 个生产者、6 个消费者共享容量为 8 的缓冲区的生产者 - 消费者问题中，互斥使用缓冲区的信号量初始值为（ ）。
>
> - A. 1
> - B. 6
> - C. 8
> - D. 9

41 题错选为 C，属于低级错误，这题结合 PV 操作大题其实就可以理解地七七八八了。

42 题和 1 刷时一样的错误。

![2.3.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUdqz6Ov6ySlR0PFQ1dwpJccpNVpIwACjBBrG7fmgVZjbPjY8cT3jwEAAwIAA3gAAz0E)

> 【2010 统考真题】进程 P₀ 和进程 P₁ 的共享变量定义及其初值为：
>
> ```text
> boolean flag[2];
> int turn=0;
> flag[0]=false; flag[1]=false;
> ```
>
> 若进程 P₀ 和进程 P₁ 访问临界资源的类 C 代码实现如下：
>
> - [图示] 左列为进程 P₀ 的类 C 代码，右列为进程 P₁ 的类 C 代码
>
> ```text
> void P0()  //进程 P0
> {
>     while(true)
>     {
>         flag[0]=true;turn=1;
>         while(flag[1]&&(turn==1));
>         临界区;
>         flag[0]=false;
>     }
> }
> ```
>
> ```text
> void P1()  //进程 P1
> {
>     while(true)
>     {
>         flag[1]=true;turn=0;
>         while(flag[0]&&(turn==0));
>         临界区;
>         flag[1]=false;
>     }
> }
> ```
>
> 则并发执行进程 P₀ 和进程 P₁ 时产生的情况是（ ）。
>
> - A. 不能保证进程互斥进入临界区，会出现“饥饿”现象
> - B. 不能保证进程互斥进入临界区，不会出现“饥饿”现象
> - C. 能保证进程互斥进入临界区，会出现“饥饿”现象
> - D. 能保证进程互斥进入临界区，不会出现“饥饿”现象

错选为 C。本题的代码其实是皮特松算法，违背让权等待（也就是忙等待），但是满足其他三个：空闲让进，忙则等待，有限等待。

![2.4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUhqz6PKaTc485C99U83NJLoksZe2gACjhBrG7fmgVbN_VXc_PgKSwEAAwIAA3gAAz0E)

> 在哲学家进餐问题中，若所有哲学家同时拿起左筷子，则发生死锁，因为他们都需要右筷子才能用餐。为了让尽可能多的哲学家可以同时用餐，并且不发生死锁，可以利用信号量 PV 操作实现同步互斥，下列说法中正确的是（ ）。
>
> - A. 使用信号量进行控制的方法一定可以避免死锁
> - B. 同时检查两支筷子是否可用的方法可以预防死锁，但是会导致饥饿问题
> - C. 限制允许拿起筷子的哲学家数量可以预防死锁，它破坏了“循环等待”条件
> - D. 对哲学家顺序编号，奇数号哲学家先拿左筷子，然后拿右筷子，而偶数号哲学家刚好相反，可以预防死锁，它破坏了“互斥”条件

错选为 B。结合 PV 操作的大题来理解，同时检测两只筷子是否可用适配于一次性拿去所有自己需要的资源，这么做可以增加并发程度，并且也不会导致饥饿问题。对于 D，破坏的也是循环等待条件，互斥条件指的是你访问这个东西是互斥的，不可能改变互斥条件。

![2.4.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUlqz6PhAAFo2hwvYF3Nzs9jP70bWREAAo8Qaxu35oFW72w48dgkjdMBAAMCAAN4AAM9BA)

> 一次分配所有资源的方法可以预防死锁的发生，它破坏死锁 4 个必要条件中的（ ）。
>
> - A. 互斥
> - B. 占有并请求
> - C. 非剥夺
> - D. 循环等待

错选为 A。如上一题所述，互斥条件基本不可能被破坏，一次性分配可以避免进程申请一些之后再申请资源，所以是破坏占有并请求（一样可以结合 PV 操作去理解）

![2.4.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUpqz6P0zcR0vLTktZqDjwM1KwiYlAACkBBrG7fmgVZmtj0dSB66IAEAAwIAA3gAAz0E)

> 死锁的避免是根据（ ）采取措施实现的。
>
> - A. 配置足够的系统资源
> - B. 使进程的推进顺序合理
> - C. 破坏死锁的四个必要条件之一
> - D. 防止系统进入不安全状态

错选为 C。为低级错误，死锁避免指的是银行家算法那一套，是为了防止系统进入不安全状态。

![2.4.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUtqz6QF6SKAahKBw9CBa33JZ1uOTgACkRBrG7fmgVYmMPqm1NbdeAEAAwIAA3gAAz0E)

> 解除死锁通常不采用的方法是（ ）。
>
> - A. 终止一个死锁进程
> - B. 终止所有死锁进程
> - C. 从死锁进程处抢夺资源
> - D. 从非死锁进程处抢夺资源

错选为 B，为低级错误，没读完题目。

![2.4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBUxqz6QZyGAjXQ8iCSx3gMBgwmGezQACkhBrG7fmgVaiEt8BDvvrWwEAAwIAA3gAAz0E)

> 下面是并发进程的程序代码，正确的是（ ）。
>
> - [图示] 上方为共享变量定义，下方左列为并发进程 P1() 的代码，右列为并发进程 P2() 的代码
>
> ```text
> Semaphore x1=x2=y=1;
> int c1=c2=0;
> ```
>
> ```text
> P1()
> {
>     while(1){
>         P(x1);
>         if(++c1==1)P(y);
>         V(x1);
>         computer(A);
>         P(x1);
>         if(--c1==0)V(y);
>         V(x1);
>     }
> }
> ```
>
> ```text
> P2()
> {
>     while(1){
>         P(x2);
>         if(++c2==1)P(y);
>         V(x2);
>         computer(B);
>         P(x2);
>         if(--c2==0)V(y);
>         V(x2);
>     }
> }
> ```
>
> - A. 进程不会死锁，也不会“饥饿”
> - B. 进程不会死锁，但是会“饥饿”
> - C. 进程会死锁，但是不会“饥饿”
> - D. 进程会死锁，也会“饥饿”
>
> 有两个并发进程，对于如下这段程序的运行，正确的说法是（ ）。
>
> int x,y,z,t,u;
>
> - [图示] 左列为 P1() 的代码，右列为 P2() 的代码
>
> ```text
> P1()
> {
>     while(1){
>         x=1;
>         y=0;
>         if x>=1 then y=y+1;
>         z=y;
>     }
> }
> ```
>
> ```text
> P2()
> {
>     while(1){
>         x=0;
>         t=0;
>         if x<=1 then t=t+2;
>         u=t;
>     }
> }
> ```
>
> - A. 程序能正确运行，结果唯一
> - B. 程序不能正确运行，可能有两种结果
> - C. 程序不能正确运行，结果不确定
> - D. 程序不能正确运行，可能死锁

第 23 题错选为 A。和 1 刷一样的错误。

第 24 题错选为 B。这题脑子抽了，考虑到了有 3 钟可能的情况，但是还是选了 B。

![2.4.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBU1qz6QsqwqNonB1XG8bUv1eSfcsHAACkxBrG7fmgVZqtPJl_YYaAAEBAAMCAAN4AAM9BA)

> 一个进程在获得资源后，只能在使用完资源后由自己释放，这属于死锁必要条件的（ ）。
>
> - A. 互斥条件
> - B. 请求和释放条件
> - C. 不剥夺条件
> - D. 防止系统进入不安全状态
>
> 假设具有 5 个进程的进程集合 P = {P₀, P₁, P₂, P₃, P₄}，系统中有三类资源 A, B, C，假设在某时刻有如下状态，见下表。
>
> - [图示] 表格：表头为「进程名 / Allocation(A B C) / Max(A B C) / Available」，共五行数据，Available 列另标 A B C 与 x y z
>
> ```text
> 进程名  Allocation  Max  Available
>         A B C      A B C
> P₀      0 0 3      0 0 4
> P₁      1 0 0      1 7 5
> P₂      1 3 5      2 3 5
> P₃      0 0 2      0 6 4
> P₄      0 0 1      0 6 5
>                        A B C
>                        x y z
> ```
>
> 系统是处于安全状态的，则 x,y,z 的取值可能是（ ）。
>
> I. 1,4,0 / II. 0,6,2 / III. 1,1,1 / IV. 0,4,7
>
> - A. I、II、IV
> - B. I、II
> - C. 仅 I
> - D. I、III
>
> 死锁定理是用于处理死锁的（ ）方法。
>
> - A. 预防死锁
> - B. 避免死锁
> - C. 检测死锁
> - D. 解除死锁
>
> 某系统有 m 个同类资源供 n 个进程共享，若每个进程最多申请 k 个资源 (k>1)，采用银行家算法分配资源，为保证系统不发生死锁，则各进程的最大需求量之和应（ ）。
>
> - A. 等于 m
> - B. 等于 m+n
> - C. 小于 m+n
> - D. 大于 m+n

第 25 题错选为 B。使用完资源自己释放，显然是不剥夺，请求和释放条件指的是占用并请求，这两个需要想清楚。

第 26 题错选为 B。和 1 刷一样的错误。

第 27 题错选为 A。属于低级错误死锁定理是为了检测死锁的，也就是定期检测死锁然后破坏。

第 28 题错选为 A。通过特值法计算或者可以通过直接使用这个来计算。每个进程最多申请 k 个资源，所以可以保证不死锁的最小申请数是：n×(k-1)+1，也就是 m≥n×(k-1)+1=nk-n+1，所以 nk≤n+m-1，也就是 nk<n+m。

![2.4.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBU5qz6RFWTt-WGq0bY9D9C2e_5BEqgAClBBrG7fmgVb5WcwPndbjGQEAAwIAA3gAAz0E)

> 下列各种方法中，可用于解除已发生死锁的是（ ）。
>
> - A. 撤销部分或全部死锁进程
> - B. 剥夺部分或全部死锁进程的资源
> - C. 降低部分或全部死锁进程的优先级
> - D. A 和 B 都可以

本题错选为 B，低级错误，没看完题目。

![2.4.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBU9qz6RX0wyjKF5kMgbNI_K8H5v6twAClhBrG7fmgVYsFB9h5a0-JwEAAwIAA3gAAz0E)

> 【2011 统考真题】某时刻进程的资源使用情况见下表，此时的安全序列是（ ）。
>
> - A. P₁, P₂, P₃, P₄
> - B. P₁, P₃, P₂, P₄
> - C. P₁, P₄, P₃, P₂
> - D. 不存在
>
> - [图示] 表格：表头为「进程名 / 已分配资源 (R₁ R₂ R₃) / 尚需分配 (R₁ R₂ R₃) / 可用资源 (R₁ R₂ R₃)」，共四行数据，可用资源列为 0 2 1
>
> ```text
> 进程名  已分配资源  尚需分配  可用资源
>        R₁ R₂ R₃   R₁ R₂ R₃  R₁ R₂ R₃
> P₁     2 0 0      0 0 1     0 2 1
> P₂     1 2 0      1 3 2
> P₃     0 1 1      1 3 1
> P₄     0 0 1      2 0 0
> ```

错选为 C，为低级错误。本题都不需要你去计算 NEED，它直接给了，所以直接看：021 可以满足 P1，拿回来也就是 221，221 可以满足 P4，拿回来也就是 222，222 无法满足 P2/P3，所以不存在安全序列。

![2.4.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBVBqz6RrSNc3FWtvu7zFl5h80nPd0wACmRBrG7fmgVY8YKz7tTl-bgEAAwIAA3gAAz0E)

> 【2015 统考真题】若系统 S₁ 采用死锁避免方法，S₂ 采用死锁检测方法。下列叙述中，正确的是（ ）。
>
> I. S₁ 会限制用户申请资源的顺序，而 S₂ 不会
> II. S₁ 需要进程运行所需的资源总量信息，而 S₂ 不需要
> III. S₁ 不会给可能导致死锁的进程分配资源，而 S₂ 会
>
> - A. 仅 I、II
> - B. 仅 II、III
> - C. 仅 I、III
> - D. I、II、III
>
> 【2016 统考真题】系统中有 3 个不同的临界资源 R₁, R₂ 和 R₃，被 4 个进程 P₁, P₂, P₃, P₄ 共享。各进程对资源的需求为：P₁ 申请 R₁ 和 R₂，P₂ 申请 R₂ 和 R₃，P₃ 申请 R₁ 和 R₃，P₄ 申请 R₂。若系统出现死锁，则处于死锁状态的进程数至少是（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

第 39 题错选为 D。死锁避免也就是银行家算法，死锁检测也就是分配图。死锁避免只会限制用户申请的个数，而不会限制这个用户的申请顺序（也就是会影响用户申请顺序，而不会影响用户本身申请的顺序）

第 40 题错选为 B。本题采用资源分配图来做，可以得出本题是哲学家问题的变种，很容易可以得出答案。

![2.4.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBVFqz6SHCMnUByhYG73gshNHUqq1uAACmhBrG7fmgVY8JfS1t-eN1QEAAwIAA3gAAz0E)

> 【2019 统考真题】下列关于死锁的叙述中，正确的是（ ）。
>
> I. 可以通过剥夺进程资源解除死锁
> II. 死锁的预防方法能确保系统不发生死锁
> III. 银行家算法可以判断系统是否处于死锁状态
> IV. 当系统出现死锁时，必然有两个或两个以上的进程处于阻塞态
>
> - A. 仅 II、III
> - B. 仅 I、II、IV
> - C. 仅 I、II、III
> - D. 仅 I、III、IV

本题错选为 D。1 显然正确，2 显然正确，3 不能判断系统此时是否处于死锁状态，它只能判断系统会不会进入不安全的状态，也就是知道可能会发成死锁。3 这件事是死锁定理干的。

### OS 王道选择题 2 刷第 3 章

![3.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4xq0yHomZlbRvVJA5TXmob2gSdVlgACOBlrG-BrmFYRg3ykE8TqPwEAAwIAA3gAAz0E)

> 下列各种存储管理方式中，需要硬件地址变换机构的是（ ）。
>
> I. 单一连续分配 / II. 固定分区分配 / III. 页式存储管理 / IV. 动态分区分配 / V. 页式虚拟存储管理
>
> - A. I、III、V
> - B. II、III、IV
> - C. III、IV、V
> - D. II、III、IV、V

本题错选为 A。单一连续分配指的是最古老的分配方式，是单一作业模式，没有动态分配，属于静态分配方式。

此外需要注意，固定分区分配也需要地址变换方式，因为不变换的话逻辑地址没法转成物理地址然后放到正确的地方里。

![3.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB41q0yKg9KzpAnsz4vnmEnHzwuk65AACORlrG-BrmFan9mzUa-4TcwEAAwIAA3gAAz0E)

> 下列关于程序装入的动态重定位方式的描述中，错误的是（ ）。
>
> - A. 系统将程序装入内存后，程序在内存中的位置可能发生移动
> - B. 系统为每个进程分配一个重定位寄存器
> - C. 被访问单元的物理地址 = 逻辑地址 + 重定位寄存器的值
> - D. 逻辑地址到物理地址的映射过程在进程执行时发生
>
> 动态重定位的过程依赖于（ ）。
>
> I. 可重定位装入程序 / II. 重定位寄存器 / III. 地址变换机构 / IV. 目标程序
>
> - A. I 和 II
> - B. II 和 III
> - C. I、II 和 III
> - D. I、II、III 和 IV

第 10 题错选为 D。重定位寄存器是寄存器，而寄存器很贵，整个 cpu 只有一个重定位寄存器；对于 D，程序的装入有三种方式，绝对装入，可重定位装入以及动态装入；对于绝对装入，是只能变不了位置的，对于可重定位装入，是分配连续的一整块空间，一次性转换为物理地址后然后装入，对于动态装入，进程执行的时候等待指令需要被执行的时候才被转换地址。

第 11 题错选为 A。显然为 123，没有可重定位装入程序，那么就不知道怎么变，没有重定位寄存器，就不知道变多少（基于什么变），如果没有 3，那就变不了。而对于 4，目标程序采用的是逻辑地址，和重定位无关。

![3.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB45q0yLeHoljgCQ_Aqv-8Y1wx8zHxAACOhlrG-BrmFaeJ7av3GdpugEAAwIAA20AAz0E)

> 对重定位存储管理方式，应（ ）。
>
> - A. 在整个系统中设置一个重定位寄存器
> - B. 为每道程序设置一个重定位寄存器
> - C. 为每道程序设置两个重定位寄存器
> - D. 为每道程序和数据都设置一个重定位寄存器

本题错选为 B。具体分析见第 10 题，重定位寄存器是寄存器，很贵的。

![3.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB49q0yLyDQi750fWhSLNEiJkBT5dMQACOxlrG-BrmFYeOpLCcftDNgEAAwIAA3gAAz0E)

> 某页式存储管理系统中，按字节编址，页表内容如下表所示。若页的大小为 4KB，则地址转换机构将逻辑地址 4097 转换成的物理地址为（ ）。（地址均用十进制表示。）
>
> - [图示] 页表两列「页号 / 页框号」，共四行
>
> 页号  页框号
> 0     2
> 1     1
> 3     0
> 4     5
>
> - A. 8193
> - B. 4097
> - C. 2049
> - D. 1025

错选为 A。2^12=4096≠4098。4097/4KB=1，页号 1 对应 1，1×4096+1=4097。

![3.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Bq0yMYS5wqUj1nINVM8xOfQTJyYQACPBlrG-BrmFY_QFK0XULJaQEAAwIAA3gAAz0E)

> 分区管理中采用最佳适应分配算法时，把空闲区按（ ）次序登记在空闲区表中。
>
> - A. 长度递增
> - B. 长度递减
> - C. 地址递增
> - D. 地址递减

错选为 C。最佳适应算法是要最小的地址块在前，所以应该是长度递增的。

![3.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Fq0yXiGG0NN7Wv5DbXcWs4oMOa4gACQBlrG-BrmFaAJneEUHc9UAEAAwIAA3gAAz0E)

> 在段式存储管理中，共享段表是用来实现（ ）的。
>
> - A. 多个进程共享同一段代码或数据
> - B. 多个进程共享同一段物理内存空间
> - C. 多个进程共享同一段逻辑地址空间
> - D. 多个进程共享同一段号

错选为 C。对于 A，段表是本质是逻辑上需要有关系，也就是共享的时候需要共享有意义的数据；对于 B 是页表做的事情，对于 C 和 D，每个进程都有自己独立的逻辑地址空间，而对于共享的数据而言，进程内部给他分配的段号可能是不一样的。

![3.1.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Jq0yX5f0NphLJaDFgCOnbCqFbo5gACQRlrG-BrmFY4RkNNueQFqQEAAwIAA3gAAz0E)

> 采用分页或分段管理后，提供给用户的物理地址空间为（ ）。
>
> - A. 分页支持更大的物理地址空间
> - B. 分段支持更大的物理地址空间
> - C. 不能确定
> - D. 一样大

错选为 D。分页是从操作系统角度出发，操作系统已经给你分配好了这一页的大小，并且你也不知道操作系统给你的程序拆分成多少，塞进哪几个页里，所以对于分页，答案是不知道；对于分段，尽管是汇编级语言程序员可以操作的，但是分页的物理地址空间无法获取（是透明的）从而无法比较。

![3.1.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Nq0yY9gpro4AfaHZlYNKfTOV6OaAACQhlrG-BrmFYAASqkcDGCYh0BAAMCAAN4AAM9BA)

> 在页式存储管理中，当 CPU 形成一个有效地址时，查找页表的工作是由（ ）实现的。
>
> - A. 操作系统
> - B. 页表查询程序
> - C. 硬件
> - D. 存储管理进程

错选为 A。可以联想到页表查询机构，显然这是硬件自动完成的事情，取指令。

![3.1.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Rq0yZRJYzw0lMhSlndHdxFo_VzggACQxlrG-BrmFZQcM3w_ppW4gEAAwIAA20AAz0E)

> 下面的（ ）方法有利于程序的动态链接。
>
> - A. 分段存储管理
> - B. 分页存储管理
> - C. 可变式分区管理
> - D. 固定式分区管理

错选为 B。程序的动态链接做的事情是把标准库之类的东西串起来，打包成 exe。如果使用的是分页存储管理，由于没有逻辑，所以必然是零散的。分段是按照逻辑划分的。

![3.1.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Vq0yZhsTR9VRIZ1CW1bbrmSgiU4QACRBlrG-BrmFZK5wLBQtqXzwEAAwIAA3gAAz0E)

> 引入段式存储管理方式，主要是为了更好地满足用户的一系列要求。下面选项中不属于这一系列要求的是（ ）。
>
> - A. 提高内存利用率
> - B. 方便编程
> - C. 共享和保护
> - D. 动态链接和增长
>
> 对主存储器的访问，（ ）。
>
> - A. 以块（页）或段为单位
> - B. 以字节或字为单位
> - C. 随存储器的管理方案不同而异
> - D. 以用户的逻辑记录为单位

第 40 题错选为 D。由于段表是人工自行分配的，所以会有较多的外部碎片难以利用。

第 41 题错选为 C。可以理解为，无论电脑采用的是什么系统，都可以利用这块内存。对于 A，以块/段为单位的是磁盘和内存之间的交互方式，但是读数据的时候还是一块一块去读的。

![3.1.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5Zq0yZ1bHjKIxEupeJh1ok4olbIygACRRlrG-BrmFZT2IAC-ZzZogEAAwIAA3gAAz0E)

> 操作系统采用分页存储管理方式，要求（ ）。
>
> - A. 每个进程拥有一张页表，且进程的页表驻留在内存中
> - B. 每个进程拥有一张页表，但只有执行进程的页表驻留在内存中
> - C. 所有进程共享一张页表，以节约有限的内存空间，但页表必须驻留在内存中
> - D. 所有进程共享一张页表，只有页表中当前使用的页面必须驻留在内存中，以最大限度地节省有限的内存空间

第 48 题错选为 C。每个进程都有自己的页表，并且页表需要驻留在内存中，否则这个程序就没法运行了。

![3.1.55](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5dq0yaPUeSkFgtxwGa2B0Q4QcJFZgACRhlrG-BrmFYTyMB0R53ApgEAAwIAA3gAAz0E)

> 在某页式存储管理的系统中，主存容量为 1MB，被分成 256 个页框，页框号为 0, 1, 2, …, 255。某作业的地址空间占用 4 页，其页号为 0, 1, 2, 3，被分配到主存的第 2, 4, 1, 5 号页框中，则作业中的 2 号页在主存中的地址是（ ）。
>
> - A. 1
> - B. 1024
> - C. 2048
> - D. 4096
>
> 下列关于分页和分段的描述中，正确的是（ ）。
>
> - A. 分段是信息的逻辑单位，段长由系统决定
> - B. 引入分段的主要目的是实现离散分配并提高内存利用率
> - C. 分页是信息的物理单位，页长由用户决定
> - D. 页面在物理内存中只能从页面大小的整数倍地址开始存放

第 55 题错选为 C。由题设可知，逻辑 2 号页对应主存 1 号页框，一个页框大小是 1MB/256=4096B，所以应该是 D。

第 56 题错选为 D。经典选项，应该选 B。选 D 是因为把 D 想成段表了。

![3.1.62](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5hq0yahRbqobHB1tPeNdK1sDvqKswACRxlrG-BrmFZ3YVb7ZPL9BAEAAwIAA3gAAz0E)

> 【2010 统考真题】某计算机采用二级页表的分页存储管理方式，按字节编址，页大小为 2^10B，页表项大小为 2B，逻辑地址结构为
>
> - [图示] 逻辑地址结构为一个分三格的长方框，从左到右依次标注「页目录号」「页 号」「页内偏移量」
>
> 页目录号 | 页 号 | 页内偏移量
>
> 逻辑地址空间大小为 2^16 页，则表示整个逻辑地址空间的页目录表中包含表项的个数至少是（ ）。
>
> - A. 64
> - B. 128
> - C. 256
> - D. 512
>
> 【2011 统考真题】在虚拟内存管理中，地址变换机构将逻辑地址变换为物理地址，形成该逻辑地址的阶段是（ ）。
>
> - A. 编辑
> - B. 编译
> - C. 链接
> - D. 装载

第 62 题错选为 A。页大小位 2048B，所以一个页可以装 1024/2=512 个页表项。由于逻辑地址空间大小是 2^16 页，所以需要 2^16 页/512=2=128 个页。

第 63 题错选为 D。属于低级错误，没细看题目。读完题目可以发现这道题要的是逻辑地址，所以逻辑地址形成的时间是链接。

![3.1.66](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5lq0ya79v1KO5TIOlQ6_n7src2t3QACSRlrG-BrmFaxoXVpaFQgMQEAAwIAA3gAAz0E)

> 【2017 统考真题】某计算机按字节编址，其动态分区内存管理采用最佳适应算法，每次分配和回收内存后都对空闲分区链重新排序。当前空闲分区信息如下表所示。
>
> - [图示] 表格两行「分区地址」「分区大小」，各有四列数值
>
> 分区地址  20K   500K   1000K  200K
> 分区大小  40KB  80KB   100KB  200KB
>
> 回收始址为 60K、大小为 140KB 的分区后，系统中空闲分区的数量、空闲分区链第一个分区的始址和大小分别是（ ）。
>
> - A. 3, 20K, 380KB
> - B. 3, 500K, 80KB
> - C. 4, 20K, 180KB
> - D. 4, 500K, 80KB

本题错选为 A。进行最佳适应算法的时候需要重排！

![3.1.70](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5pq0ybVQ6lODhwLAAEfU7I_ofqS9T0AAkoZaxvga5hWkDXFWzLl_64BAAMCAAN4AAM9BA)

> 【2021 统考真题】在采用二级页表的分页系统中，CPU 页表基址寄存器中的内容是（ ）。
>
> - A. 当前进程的一级页表的起始虚拟地址
> - B. 当前进程的一级页表的起始物理地址
> - C. 当前进程的二级页表的起始虚拟地址
> - D. 当前进程的二级页表的起始物理地址

本题错选为 A。本题应该结合大题强化去理解，很显然本题应该选 B。

![3.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5tq0ydJeh0a8hitc8oeSdmxys8roAACTBlrG-BrmFZdS6nvLbpUMwEAAwIAA20AAz0E)

> 在页式虚拟存储管理中，程序的链接方式必然是（ ）。
>
> - A. 静态链接
> - B. 装入时动态链接
> - C. 运行时动态链接
> - D. 不确定哪种链接方式

本题错选为 B。可见上一节的运行时动态链接，运行时才进行链接。

![3.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB5xq0ydlq5e2BbxhhxMSkQABtJzEnksAAk0Zaxvga5hWHOMDivkHag8BAAMCAAN4AAM9BA)

> 假设某个进程分配有 4 个页框，每个页框大小为 128 个字（一个整数占一个字），进程的代码段正好可以存放在一页中，而且总是占用 0 号页框。数据会在其他 3 个页框中换进或换出。数组 X 为按行优先存储，则执行该进程会发生（ ）次缺页中断。
>
> ```text
> int X[64][64];
> for(int j=0;j<64;j++)
>     for(int i=0;i<64;i++)
>         X[i][j]=0;
> ```
>
> - A. 32
> - B. 1024
> - C. 2048
> - D. 其他都不对

本题不会做。事实上这道题也可以从大题的角度出发去理解，一个页框 128 个字，由于进程的代码段占有一个页，所以总共现在只有 3 个页。又因为一个整数占一个字，所以一个页框可以塞 128 个字，当第一次访问 `x[0][0]` 的时候，一次性调入 128 个字，也就是一次性塞 2 行到一个页框里。而由于是按列访问，所以读 `x[1][0]` 的时候不会缺页，而读下一个数的时候又缺页了。所以每 2 个数缺一次页，所以 64×64/2=2048。

![3.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB51q0yeYTMJxLnpkUnIZGJo6u2h_RAACTxlrG-BrmFYOITx0B8xxogEAAwIAA3gAAz0E)

> 考虑页面置换算法，系统有 m 个物理块供调度，初始时全空，页面引用串长度为 p，包含了 n 个不同的页号，无论用什么算法，缺页次数不会少于（ ）。
>
> - A. m
> - B. p
> - C. n
> - D. min(m, n)

本题错选为 D。n 个不同的页号，那么意味着至少要缺页 n 次。

![3.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB55q0yevYEncXVJ-p_Yc1U3TNLFwRgACUBlrG-BrmFaCQnOPUPAAAdoBAAMCAAN4AAM9BA)

> LRU 页面置换算法软件实现开销高的直接原因是（ ）。
>
> - A. 需要硬件的特殊支持
> - B. 需要特殊的中断处理程序
> - C. 需要在页表中标明特殊的页类型
> - D. 需维护访问历史并遍历查找

错选为 A。棍母题目，过。

![3.2.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB59q0yfFQTmbjOrVq5UVepbDJt3PsQACURlrG-BrmFZE9d_yihBgnwEAAwIAA20AAz0E)

> 请求分页存储管理的主要特点是（ ）。
>
> - A. 消除了内部碎片
> - B. 扩充了内存
> - C. 便于动态链接
> - D. 便于信息共享

错选为 C。应该是 B。其他三个都是分段的优点。

![3.2.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Bq0yfmWkkkV6RkkvNO6RwPdGmSWgACUhlrG-BrmFZ5bKDqMzr8zAEAAwIAA20AAz0E)

> 提供虚拟存储技术的存储管理方法有（ ）。
>
> - A. 动态分区存储管理
> - B. 页式存储管理
> - C. 请求段式存储管理
> - D. 存储覆盖技术

没做出来。虚拟存储技术意味着离散和多次，所以要“请求”开头的。

![3.2.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Fq0yf-3Lq48fplx-qlzODVuAlAcwACUxlrG-BrmFb9EUu_MiHWNAEAAwIAA3gAAz0E)

> 下列说法中，正确的是（ ）。
>
> Ⅰ. 先进先出（FIFO）页面置换算法会产生 Belady 现象
> Ⅱ. 最近最少使用（LRU）页面置换算法会产生 Belady 现象
> Ⅲ. 在进程运行时，若其工作集页面都在虚拟存储器内，则能够使该进程有效地运行，否则会出现频繁的页面调入/调出现象
> Ⅳ. 在进程运行时，若其工作集页面都在主存储器内，则能够使该进程有效地运行，否则会出现频繁的页面调入/调出现象
>
> - A. Ⅰ、Ⅲ
> - B. Ⅰ、Ⅳ
> - C. Ⅱ、Ⅲ
> - D. Ⅱ、Ⅳ
>
> 测得某个采用按需调页策略的计算机系统的部分状态数据为：CPU 利用率为 20%，用于交换空间的磁盘利用率为 97.7%，其他设备的利用率为 5%。由此判断系统出现异常，这种情况下（ ）能提高系统性能。
>
> - A. 安装一个更快的硬盘
> - B. 通过扩大硬盘容量增加交换空间
> - C. 增加运行进程数
> - D. 加内存条来增加物理空间容量
>
> 假定有一个请求分页存储管理系统，测得系统各相关设备的利用率为：CPU 的利用率为 10%，磁盘交换区的利用率为 99.7%，其他 I/O 设备的利用率为 5%。下面（ ）措施将显著地改进 CPU 的利用率。
>
> Ⅰ. 增大内存的容量
> Ⅱ. 增大磁盘交换区的容量
> Ⅲ. 减少多道程序的度数
> Ⅳ. 增加多道程序的度数
> Ⅴ. 使用更快速的磁盘交换区
> Ⅵ. 使用更快速的 CPU
>
> - A. Ⅰ、Ⅱ、Ⅲ、Ⅳ
> - B. Ⅰ、Ⅲ
> - C. Ⅱ、Ⅲ、Ⅴ
> - D. Ⅱ、Ⅵ

第 39 题错选为 A。对于 1 和 2，FIFO 有可能出现增加页面还降低命中率。对于 3 和 4，显然工作集页面时在主存的，而虚拟存储器是存放它们的逻辑位的。且虚拟存储器对应的实际物理位置在磁盘。

第 40 题错选为 B。考虑这样一个情况，一个内存大小是 16g 的电脑，同时起了 100 个任务。由于内存太小了，所以任务所需的资源一直在交换空间换出换进，反而正在 CPU 跑的东西不多。因此只要增大内存就可以解决这个问题。安装更快的硬盘只能让交换速度变快，不能根本性解决一直交换的问题。

第 41 题错选为 C。和 40 题类似的错误，显然这是内存不够，因此减少多道程序的度数和增大内存可以解决这个问题。

![3.2.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Jq0ygaMxqNGNv7-k8SsU9UqvG2dAACVBlrG-BrmFZZOLDkJX5kgwEAAwIAA3gAAz0E)

> 【2013 统考真题】若用户进程访问内存时产生缺页，则在下列选项中，操作系统可能执行的操作是（ ）。
>
> Ⅰ. 处理越界错 / Ⅱ. 置换页 / Ⅲ. 分配内存
>
> - A. 仅Ⅰ、Ⅱ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅰ、Ⅲ
> - D. Ⅰ、Ⅱ和Ⅲ
>
> 【2014 统考真题】下列措施中，能加快虚实地址转换的是（ ）。
>
> Ⅰ. 增大快表（TLB）容量
> Ⅱ. 让页表常驻内存
> Ⅲ. 增大交换区（swap）
>
> - A. 仅Ⅰ
> - B. 仅Ⅱ
> - C. 仅Ⅰ、Ⅱ
> - D. 仅Ⅱ、Ⅲ

第 46 题错选为 D。考虑这样的情况，用户进程访问缺页，假设页表满了，此时需要置换页，把对应的页调入内存中，然后给它分配内存，然后重新回到这个程序的初始地址开始运行。由于上一轮触发了缺页异常，那肯定不是越界异常，因此不可能发成越界。

第 47 题错选为 B。增大块表容量可以减少缺页异常的次数，所以可以增加虚实地址转换。页表常驻内存才可以快速访问，增大交换区只是增大交换页大小的容量，例如写脏位的容量，不会加快地址转换。

![3.2.55](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Nq0yg9KvCZSjXWF9i8-a6R2gGB3gACVRlrG-BrmFZhA_yhzLdTlQEAAwIAA3gAAz0E)

> 【2021 统考真题】某请求分页存储系统的页大小为 4KB，按字节编址，系统给进程 P 分配 2 个固定的页框，并采用改进型 CLOCK 算法，进程 P 页表的部分内容见下表。
>
> | 页号 | 页框号 | 存在位 | 访问位 | 修改位 |
> | | | 1：存在，0：不存在 | 1：访问，0：未访问 | 1：修改，0：未修改 |
> | ... | ... | ... | ... | ... |
> | 2 | 20H | 0 | 0 | 0 |
> | 3 | 60H | 1 | 1 | 0 |
> | 4 | 80H | 1 | 1 | 1 |
> | ... | ... | ... | ... | ... |
>
> 若 P 访问虚拟地址为 02A01H 的存储单元，则经地址变换后得到的物理地址是（ ）。
>
> - A. 00A01H
> - B. 20A01H
> - C. 60A01H
> - D. 80A01H

错选为 B。首先注意到存在位是页框号 60H 和 80H 的存储起始地址（物理地址），由于 60H 物理地址访问位和修改为为 10，所以先被换出。由于系统采用的是固定页框，所以虚拟地址 02A01H 会被塞到页框号为 60H 的部分。

![3.2.59](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Rq0yhUUcf2g5JuK1DIYcdaGVeHXQACVhlrG-BrmFakY8sAAXpHlqoBAAMCAAN4AAM9BA)

> 【2025 统考真题】某页式虚拟存储管理系统采用固定分配局部置换的 LRU 算法，若系统为进程 P 分配了 3 个页框，P 从某时刻开始的页访问序列为 0, 1, 2, 0, 5, 1, 4, 3, 0, 2, 3, 2, 0，且 0, 1, 2 三个页已在内存中，则完成上述页序列的访问时，系统执行缺页异常处理程序的次数为（ ）。
>
> - A. 5
> - B. 6
> - C. 7
> - D. 8
>
> 【2025 统考真题】在页式虚拟存储管理系统中，确定进程正常运行所需的最少页框数时，下列因素中需要考虑的是（ ）。
>
> - A. 代码段长度
> - B. 进程的虚拟地址空间大小
> - C. 物理内存大小
> - D. 指令系统支持的寻址方式
>
> 【2025 统考真题】下列关于内存映射文件（memory-mapped files）机制的叙述中，正确的是（ ）。
>
> Ⅰ. 可实现进程之间的通信
> Ⅱ. 可实现页到磁盘块的映射
> Ⅲ. 将文件映射到进程的虚拟地址空间
> Ⅳ. 将文件映射到系统的物理地址空间
>
> - A. 仅Ⅰ、Ⅲ
> - B. 仅Ⅰ、Ⅳ
> - C. 仅Ⅱ、Ⅲ
> - D. 仅Ⅰ、Ⅱ、Ⅲ

第 59 题错了。

第 60 题错选为 A。页框指的是页的物理地址，也就是假设一个页的大小为 m，那么总共会有 M/m（M 为物理内存大小）个页框号。显然和 A，B 无关。而题设问的是对于一个进程而言需要的页框数，排除 C。可以得到 D。
对于 D 选项本身，假设指令系统采用间接寻址，那么就可以获得一个很大的地址空间访问到其他页，假设只采用变址寻址，那么也就只需要访问自己这几块地方就好了。

第 61 题错选为 D。内存映射文件的机制可以概括为将磁盘上的文件映射到物理内存，再将这一块物理内存分配给不同进程的逻辑共享内存区域 (这里反了，应该是操作系统将不同进程的逻辑共享内存区域映射到内存)。在此之后，只需要操作自己这块逻辑共享内存区域即可，对于底层是透明的。

综合而言，1，3 是正确的，而 2 反了，4 则是过程的一部分，不够全面。

### OS 王道选择题 2 刷第 4 章

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Vq0yjRHOSauCdaFSmwBZgiyFaTrQACWRlrG-BrmFYaIp7YpEd8qgEAAwIAA3gAAz0E)

> FAT32 的文件目录项不包括（ ）。
>
> - A. 文件名
> - B. 文件访问权限说明
> - C. 文件控制块的物理位置
> - D. 文件所在的物理位置

错选为 A。

捋一遍 FAT 文件系统的查表过程。假设有一个文件目录为/A/D，B/M，C，A 为目录项，B 为目录项，M 为目录项，D 和 C 都是文件。

现在我想要去读 C，那么首先，假设内存里什么都没有，那么我先要从磁盘的固定块（这一步不需要查表，因为是固定块）读取/目录下的文件第 1 次读入，可以得到 A 的 FCB，然后根据 A 的起始块号可以读到目录项 A 的具体信息第 2 次读入，可以知道 A 里面有两个 FCB，一个是目录项 B，一个是文件 D。则查 B 的起始块号可以得到目录项 B 的具体信息第 3 次读入。可以得到 B 下面有 M 和 C。而因为是要读 C，所以根据 C 的起始块号将 C 所对应的磁盘块读入内存第 4 至 k 次读入（前面的如果也有多个块也得多次读，相应 + 即可）。不过默认情况下目录项算一个就可以了。

捋完之后再来看选项。FAT 文件目录存储在操作系统的固定位置，由操作系统负责访问，它自然不需要记录自己的位置。

![4.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6Zq0yj1mp4cPVt1E4_MnI9O__FZgAACWhlrG-BrmFbwnGx35LhAVwEAAwIAA3gAAz0E)

> 下列选项中，（ ）不是为了提升文件系统性能的操作。
>
> - A. 目录项分解
> - B. 文件高速缓存
> - C. 磁盘调度算法
> - D. 异步 I/O

错选为 C。对于 A，目录项分解正式 FAT 到 UFS 的转变；对于 B，文件系统高速缓存，例如 open 文件后系统存在一个 open 表。如果其他软件也需要打开这个文件，就不需要重复 open 了；对于 C，读文件需要从磁盘调块进内存；对于 D，异步 I/O 是进程调度那块的东西，可以让 CPU 利用率提升。

![4.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6dq0ykIVkwdLSvySaECL0-J53OwwQACWxlrG-BrmFb-gis58dxQGAEAAwIAA3gAAz0E)

> 在一个采用索引节点的文件系统中，目录项分为文件名和索引节点编号两部分，文件名和索引节点编号各占 8B，盘块大小为 1KB，采用一级目录，假定文件目录中有 3200 个目录项，则读入一个文件的索引节点平均需要（ ）次访问磁盘。
>
> - A. 25
> - B. 26
> - C. 51
> - D. 52

错选为 A。本题考查 UFS 系统。盘块大小为 1KB 意味着 1 个盘块可以存 1KB/16B=64 个目录项，也就是说存 3200 个目录项需要 3200/64=50 个磁盘块。为了找到这个目录项，需要平均花 50/2=25 次磁盘才能找到该文件的目录项，因为采用的是单级索引分配，所以需要再花 1 次找到具体的文件。

![4.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6hq0ykayio6-g_DorDVqQXG0bfE0wACXBlrG-BrmFZeXuI54Ca9SgEAAwIAA3gAAz0E)

> 在磁盘上，最容易导致存储碎片发生的物理文件结构是（ ）。
>
> - A. 隐式链接
> - B. 顺序存放
> - C. 索引存放
> - D. 显式链接

错选为 A。属于低级错误。这里一般指的应该是外部碎片，顺序存放会导致产生大量小块无法利用的块。

![4.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6lq0ykruAzaOSBIapa43VDwloUcQQACXRlrG-BrmFZzvvbTZLhIHQEAAwIAA3gAAz0E)

> 文件系统为每个文件创建一张（ ），存放文件数据块的磁盘存放位置。
>
> - A. 打开文件表
> - B. 位图
> - C. 索引表
> - D. 空闲盘块链表

错选为 A。索引表，翻译一下就是 inode（索引节点）指向的表，存放文件的具体信息，这个信息是存放在磁盘的特定块的。对于 fat 系统而言，fat 系统是为全局创建一张 fat 表，本题其实考察的是 ufs 系统。对于 A，打开文件表是调用 open 后在内存记录的一张表，一旦所有文件都关了，那么这个记录就没了。而且存放的是一条记录，不是专门创建一张表。位图和空闲盘块链表是用来管理空闲块的。

![4.2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6pq0ylDCJe_xTzPzi_8xj86TYAwKgACXhlrG-BrmFaAZUvCRRi1wQEAAwIAA3gAAz0E)

> 某 500 个盘块的文件的目录项已调入内存（若为索引分配，其索引块也在内存中），若需要在文件中增加一块，下列分配方式中磁盘 I/O 次数最多的是（ ）。
>
> - A. 连续分配
> - B. 隐式链接分配
> - C. 显式链接分配
> - D. 索引分配
>
> 设有一个记录文件，采用隐式链接分配方式，逻辑记录的固定长度为 100B，在磁盘上存储时采用记录成组分解技术，盘块长度为 512B，若该文件的目录项已经读入内存，则对第 22 个逻辑记录完成修改后，共启动了磁盘（ ）次。
>
> - A. 3
> - B. 4
> - C. 5
> - D. 6

第 24 题错选为 B。这道题的意思是说在最后一个块增加，而不是在中间增加。一个个个分析，对于 A，显然连续分配可以直接访问具体块，所以次数为 1。但是，如果存储空间不够了（因为要连续），此时需要把原来的给扬了，然后再次重新写入。也就是读 500 次，写 501 次；对于 B，隐式链接分配会记录 start 指针和 end 指针，所以只要在 end 指针处操作即可；对于 C 和 D，可以很方便的修改指针进行访问。

第 25 题错选为 C。512B 可以推算出每一块可以存放 5 个逻辑记录，所以 22/5+1=5，可以得出访问到该磁盘的次数，读入后需要写回，写回是一次记录，所以是 5+1。

![4.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6tq0ylqq7V9dREtAAFPG_phr5QoaEoAAl8Zaxvga5hWaGshCT1JfmcBAAMCAAN4AAM9BA)

> 某文件系统采用显示链接分配方式组织文件，磁盘块大小为 4KB，一个簇包含两个磁盘块，操作系统以簇为单位进行盘块分配，已知系统支持的最大文件长度为 512MB，若 FAT 的每个表项仅存放簇号，则 FAT 表占用的空间大约是（ ）。
>
> - A. 64KB
> - B. 128KB
> - C. 512KB
> - D. 1024KB

错选为 A。系统支持的最大文件长度为 512MB，磁盘块大小为 4KB，一个簇包含两个磁盘块。FAT 表按照题目要求只存放簇号。由于操作系统按照簇为大小进行盘块分配，一个簇大小为 8KB。由于 FAT 表是本质是静态链表，一开始就分配了，长度大小是一个最大的文件长度（这句话不准确，应该是系统支持的最大文件长度=整个磁盘的最大可寻址容量），所以 512MB/4KB=2^17 个磁盘块，也就是 2^16 个簇/记录。记录这么多簇需要 16b，也就是 2B 的空间，所以 2^16×2B=2^17B，也就是 128KB。

![4.2.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB6xq0ynP0qcbMyS3fZdm66EgoZa1oQACZhlrG-BrmFZtz9xWMHtP-AEAAwIAA3gAAz0E)

> 某文件系统使用类似于 Linux 的 inode 存储结构，文件块和磁盘块的大小都是 4KB，磁盘地址是 32 位，现在一个文件包含 10 个直接指针和 1 个一级间接指针，则这个文件所占用的磁盘块数量最多是（ ）块（不考虑索引块）。
>
> - A. 128
> - B. 512
> - C. 1024
> - D. 1034
>
> 文件系统采用两级索引分配方式，若每个磁盘块的大小为 1KB，每个盘块号占 4B，则该系统中单个文件的最大长度是（ ）。
>
> - A. 64MB
> - B. 128MB
> - C. 32MB
> - D. 以上都错误
>
> 某文件系统的物理结构采用三级索引分配方式，每个磁盘块的大小为 1024B，每个盘块索引号占用 4B，则该文件系统支持的最大文件的尺寸接近（ ）。
>
> - A. 8GB
> - B. 16GB
> - C. 32GB
> - D. 2TB

这三题都没做，一题题来看。

第 32 题。采用的是类 ufs 系统，磁盘地址是 32 位，意味着寻址范围是 2^32。由于 inode 需要存储地址信息，因此可以推测 inode 的地址数据部分是 32b=4B，所以 4KB/4B=1024，也就意味着一个磁盘块最多有 1024 个地址记录。所以 10+1024。

第 33 题。采用的是类 ufs 系统。磁盘块大小是 1KB，盘块号占 4B，所以一个磁盘块最多可以有 1KB/4B=256 条记录。由于采用 2 级索引分配，所以一个文件最多可以包含 256×256 个磁盘块，一个磁盘块是 1KB，所以 256×256×1KB=64MB。

第 34 题。采用的是类 ufs 系统。和上一题类似，一个磁盘块大小是 1024B，盘块号占 4B，所以一个磁盘块最多可以有 1024B/4B=256 条记录，由于是三级索引分配，所以 256×256×256×1KB=16GB。

![4.2.37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB61q0ynpaJOANqWqt5A1oZ5Bz1KSpQACZxlrG-BrmFaC4Mh-KaTYUQEAAwIAA20AAz0E)

> 打开文件操作的主要工作是（ ）。
>
> - A. 把指定文件的目录项复制到内存指定的区域
> - B. 把指定文件复制到内存指定的区域
> - C. 在指定文件所在的存储介质上找到指定文件的目录项
> - D. 在内存寻找指定的文件

错选为 C。文件打开的操作做的事情是找到文件的目录项然后将之复制到打开文件表。而将指定文件复制到内存指定区域是 read 做的事情。没打开那么如何在内存里找。C 选项不全。

![4.2.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB65q0yoFBemRmchzLnxw6yP1QM-XvAACaBlrG-BrmFbZkFU8cgNfmAEAAwIAA3gAAz0E)

> 关闭文件操作的主要工作是（ ）。
>
> - A. 将文件的最新信息从内存写回磁盘
> - B. 将文件当前的控制信息从内存写回磁盘
> - C. 将位示图从内存写回磁盘
> - D. 将超级块当前的信息从内存写回磁盘

错选为 A。本体应该选 B，这道题可以理解为 close 文件和 write 文件是两码事，和上一题 open 与 read 也是两码事一样。Close 文件之后操作系统可以自己慢慢再写。对于超级块，超级快的信息是比较宏观的信息，例如总共有多少个数据块，有多少个 inode，有多少个空闲块，第一个 inode 从几号盘块算起等信息。而对于关闭文件，只会影响自己的 FCB，所以不需要修改超级块信息，即便是导致块变少了也不会去写回磁盘。只有一些操作：卸载操作系统，弹出 U 盘等信息才会写回磁盘。

![4.2.41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB69q0yoXYZ8MsKF1-5ZGurG1OfsyBgACaRlrG-BrmFYH_UIpfoxelQEAAwIAA3gAAz0E)

> 下列关于文件与文件系统的说法中，错误的是（ ）。
>
> Ⅰ. 一个文件在同一系统中、不同的存储介质上的复制文件，应采用同一种物理结构
> Ⅱ. 对一个文件的访问，常由用户访问权限和用户优先级共同限制
> Ⅲ. 文件系统采用树形目录结构后，对于不同用户的文件，其文件名应该不同
> Ⅳ. 为防止系统故障造成系统内文件受损，常采用存取控制矩阵方法保护文件
>
> - A. Ⅱ
> - B. Ⅰ、Ⅲ
> - C. Ⅰ、Ⅲ、Ⅳ
> - D. 全选

本题错选为 C。对于 1，考虑这样一个场景，从固态硬盘复制数据到磁盘；对于 2，用户优先级是进程调度需要考虑的事情，对于文件的访问，由用户访问权限和文件属性组成（例如只读）；对于 3，显然错误；对于 4，存取控制矩阵方法是用来保护密码的，对于系统故障等应该采用 RAID 磁阵列矩阵。

![4.2.43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Bq0yomZVSTxU6Ohphjo0lOj54mxwACahlrG-BrmFZQLP9mnIFa8gEAAwIAA3gAAz0E)

> 设文件 F1 的当前引用计数为 1，先建立 F1 的硬链接文件 F2，再建立 F1 的符号链接文件 F3，然后删除 F2，则此时文件 F1、F3 的引用计数值分别是（ ）。
>
> - A. 1、1
> - B. 1、2
> - C. 1、0
> - D. 2、2

错选为 B。F1 的硬链接 F2 建立出去，那么 F1 的引用计数是 2，F2 的也是 2，建立 F1 的符号连接，可以得到 F1 的引用计数是 2，F2 的是 2，F3 的是 1，删除 F2，那么 F1-1，F2 直接消失，F3 不变，所以就是 1。

考虑这样一种情况，假设引用计数情况的时候（该本身就是软链），硬链出去 1 个，那么这个软链也需要 +1。

需要注意的是，这个不是单独算的，而是连接到一个专门的东西上共同+-，如果是软链出去了才是单独算。

![4.2.47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Fq0ypHmeKQVU1AtMM6Un2sCGbb5AACbRlrG-BrmFa_b0Yz3cB_ggEAAwIAA3gAAz0E)

> 对一个文件的访问，常由（ ）共同限制。
>
> - A. 用户访问权限和文件属性
> - B. 用户访问权限和用户优先级
> - C. 优先级和文件属性
> - D. 文件属性和口令
>
> 为了对文件系统中的文件进行安全管理，任何一个用户在进入系统时都必须进行注册，这一级安全管理是（ ）。
>
> - A. 系统级
> - B. 目录级
> - C. 用户级
> - D. 文件级

第 47 题错选为 B。

第 48 题错选为 C。进入系统时需要进行注册，此时还没有进入系统，所以应该是系统级。

![4.2.53](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Jq0ypg7rCb-oZHvY9CjHNbHpjZFAACbhlrG-BrmFa9nyheAAHaQdQBAAMCAAN4AAM9BA)

> 【2010 统考真题】设文件索引节点中有 7 个地址项，其中 4 个地址项是直接地址索引，2 个地址项是一级间接地址索引，1 个地址项是二级间接地址索引，每个地址项大小为 4B，若磁盘索引块和磁盘数据块大小均为 256B，则可表示的单个文件最大长度是（ ）。
>
> - A. 33KB
> - B. 519KB
> - C. 1057KB
> - D. 16516KB

错选为 D，属于低级错误。256B/4B=64，可知一块磁盘块可以存 64 个项，所以 4+2×64+64×64。

![4.2.56](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Nq0yp1w8xaZaCtu9LjUlc7aCDovQACcBlrG-BrmFbL5ApXEWUa2gEAAwIAA3gAAz0E)

> 【2013 统考真题】若某文件系统索引结点（inode）中有直接地址项和间接地址项，则下列选项中，与单个文件长度无关的因素是（ ）。
>
> - A. 索引结点的总数
> - B. 间接地址索引的级数
> - C. 地址项的个数
> - D. 文件块大小

错选为 C。对于 A，索引结点总数也就是 inode 的总数，每 1 个 inode 都对应着一个文件，所以其和单文件无关；对于 B，简介索引级数越高，那么可以索引的范围就越大；对于 C，地址项个数意味着对于一个文件，需要有多少个地址信息才可以找得到，地址项越多，磁盘块也就越多；对于 D，文件块越大，意味着可以存储更多的信息。

![4.2.59](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Rq0yqL5nVOMKlU5dO388iUOEZ8IQACcRlrG-BrmFZljYjGpj1vfAEAAwIAA3gAAz0E)

> 【2015 统考真题】在文件的索引结点中存放直接索引指针 10 个，一级和二级索引指针各 1 个，磁盘块大小为 1KB，每个索引指针占 4B，若某文件的索引结点已在内存中，则把该文件偏移量（按字节编址）为 1234 和 307400 处所在的磁盘块读入内存，需要访问的磁盘块个数分别是（ ）。
>
> - A. 1，2
> - B. 1，3
> - C. 2，3
> - D. 2，4

错选为内 C。由题设可知，某文件索引节点已经在内存，所以读这个结点不需要花次数。10+1024+1024×1024，然这是经典的错误标准的零分。因为磁盘块大小占 1KB，所以一个磁盘块最多有 1KB/4B=256 块，也就是 10+256+256×256。对于 1234，显然是 1 级索引，所以先根据 inode 找到 1 级索引信息，再将之读入内存，花费 2 次。显然这是经典的错误标准的零分，因为题目给的是文件偏移量。所以 1234/1024=1，所以在第 2 个磁盘（其实是 1234/256=4，也就是 5），所以已经找到索引信息，读入 1 次即可；对于 307400/256=1200，所以是 1201，显然是 2 级索引，所以现根据 inode 找到 1 级索引信息，然后再找到 2 级索引信息，最后再将这个 2 级索引信息读入内存，花费 3 次。

![4.2.63](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Vq0yqlUNDTTcW-IV2WTHnAHFBPGwACchlrG-BrmFYAASAp_2Y1xrsBAAMCAAN4AAM9BA)

> 【2020 统考真题】某文件系统的目录项由文件名和索引结点号构成。若每个目录项长度为 64 字节，其中 4 字节存放索引结点号，60 字节存放文件名。文件名由小写英文字母构成，则该文件系统能创建的文件数量的上限为（ ）。
>
> - A. 2^26
> - B. 2^32
> - C. 2^60
> - D. 2^64

不知道选什么。由于每个目录项长度是 64 字节，4 字节存放索引号，所以 4B=32bit，也就是最多表示 2^32 个文件数。由于 60 字节存放文件名，一个 ASCLL 码是 1B 存储，应该是 26^60。显然，前者先耗尽。

![4.2.64](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7Zq0yq27bMp7H9hWgG30mL8Il6iAgACcxlrG-BrmFZfeT2KphVHvgEAAwIAA3gAAz0E)

> 【2020 统考真题】若多个进程共享同一个文件 F，则下列叙述中，正确的是（ ）。
>
> - A. 各进程只能用“读”方式打开文件 F
> - B. 在系统打开文件表中仅有一个表项包含 F 的属性
> - C. 各进程的用户打开文件表中关于 F 的表项内容相同
> - D. 进程关闭 F 时，系统删除 F 在系统打开文件表中的表项

错选为 D。对于 A，显然不是，考虑这样一个场景，同时用 edge 和 wps 打开 pdf 文件，也可以考虑读者写者问题；对于 B，在系统打开文件表中，仅有 1 个；对于 C，各进程内部关于 F 的打开表项肯定不一样；对于 D，假设采用的是硬链接，则一个进程 close，F-1，如果为 0 的时候才删除在系统打开文件表的表项。

辨析一下系统打开表和各进程打开表。系统打开表永远只有一个关于 F 的表项，只写位置，大小和引用次数；而对于各进程打开表，模式（只读，可写）、当前页，指向系统表第 x 行可以完全不一样。

![4.2.69](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7dq0yrLgPd0B8SgBFNjwOCWp5PYtAACdBlrG-BrmFbwQFiyTDw0oAEAAwIAA3gAAz0E)

> 【2025 统考真题】在下列选项中，文件系统可用于记录外存空间使用情况的是（ ）。
>
> - A. 目录
> - B. 系统打开文件表
> - C. 文件分配表（FAT）
> - D. 文件控制块（FCB）
>
> 【2025 统考真题】某文件系统采用目录和索引结点管理文件，当用户在目录中新建文件 F 时，在下列操作中，文件系统不会做的是（ ）。
>
> - A. 对 F 的索引结点进行初始化
> - B. 在目录文件中写入 F 的索引结点号
> - C. 在目录文件中写入 F 的访问权限信息
> - D. 在目录文件中增加一条 F 对应的目录项

第 69 题（其实是对的）。对于 A，目录指的是一个比较泛的概念，可以理解为目录项，目录项指的是具体信息，指的是某一个文件的具体信息；对于 B，系统的打开文件表可以记录此时系统的全局文件的使用状况；对于 C，FAT 本身是一个静态的链表，其本身是预分配的，所以可以看得出来还剩多少外存；对于 D，FCB 指的是具体的文件含有的信息。

第 70 题错选为 D。用户在目录中新建文件 F，根据选项可以知道本题采用的是 UFS 系统。首先需要分配并且初始化 F 的索引节点，也就是找一个空闲的 inode 号，然后初始化（对应 A），接下来在父目录 C 中增加一条目录项，也就是在 C 的数据区末尾新增一条目录项，这条目录项只有两个内容，也就是文件名 F 和 F 对应的 inode 号（对应 B 和 D）。而对于 C 是 FAT 系统做的事情。

![4.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7hq0yrjsZ16Q9aSBIKoVPiVtuZxVwACdRlrG-BrmFbTjy-cQKeUHgEAAwIAA3gAAz0E)

> UNIX 操作系统中，文件的索引结构放在（ ）。
>
> - A. 超级块
> - B. 索引结点
> - C. 目录项
> - D. 空闲块
>
> 文件的存储空间管理实质上是对（ ）的组织和管理。
>
> - A. 文件目录
> - B. 外存已占用区域
> - C. 外存空闲区
> - D. 文件控制块

第 4 题错选为 A。UNIX 采用 UFS 系统，超级块位于最开始的部分，而文件的索引结构是放在索引节点里的，目录项对于 UFS 而言是具体的文件信息。

第 5 题错选为 B。为低级错误。B 是文件管理，C 是存储空间管理。

![4.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7lq0ysMVrRl1CKI5KmzO6mH3LJpFQACdhlrG-BrmFYHaQwskVyCGwEAAwIAA3gAAz0E)

> 下列各种文件存储空间的管理方法中，（ ）需要使用空闲盘块号栈。
>
> - A. 空闲表法
> - B. 空闲链表法
> - C. 位示图法
> - D. 成组链接法
>
> 硬盘的主引导扇区（ ）。
>
> - A. 包含引导记录
> - B. 包含分区表和主引导程序
> - C. 只包含主引导程序
> - D. 只包含分区表

第 8 题错选为 D。什么是空闲盘块号栈，也就是需要额外的信息去记录空闲块。对于 A，显然需要，通常采用首次适应算法和最佳适应算法，可以和内存分配的那部分联系起来。

第 9 题错选为 C。背书。

![4.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7pq0yse3MHfCuGVkZcJmww0dzqmYwACdxlrG-BrmFaZtsCqI1IcjQEAAwIAA3gAAz0E)

> 下列选项中，（ ）不是 Linux 实现虚拟文件系统 VFS 所定义的对象类型。
>
> - A. 超级块（superblock）对象
> - B. 目录项（inode）对象
> - C. 文件（file）对象
> - D. 数据（data）对象

错选为 C。背书。

![4.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7tq0ysuZx7zUnZ5kJ5EHaXVENqKcAACeBlrG-BrmFZ2kAo9fsftfQEAAwIAA3gAAz0E)

> 【2015 统考真题】文件系统用位图法表示磁盘空间的分配情况，位图存于磁盘的 32～127 号块中，每个盘块占 1024B，盘块和块内字节均从 0 开始编号。假设要释放的盘块号为 409612，则位图中要修改的位所在的盘块号和块内字节序号分别是（ ）。
>
> - A. 81，1
> - B. 81，2
> - C. 82，1
> - D. 82，2

错选为 D。本题为低级错误，事实上，这道题需要注意盘块和块内都是 0 来计算。

### OS 王道选择题 2 刷第 5 章

![5.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB7xq0ytav5FhhKxyoWPdpkNwsnTREAACeRlrG-BrmFYegN2d6KxGcAEAAwIAA3gAAz0E)

> 下列关于设备属性的叙述中，正确的是（ ）。
>
> - A. 字符设备的基本特征是可寻址到字节，即能指定读/写操作的字节地址
> - B. 共享设备必须是可寻址的和可随机访问的设备
> - C. 共享设备是指同一时刻内允许多个进程同时访问的设备
> - D. 在分配共享设备和独占设备时都可能引起进程死锁
>
> 下列关于虚拟设备的含义的描述中，正确的是（ ）。
>
> - A. 允许用户使用比系统中具有的物理设备更多的设备
> - B. 允许用户以标准化方式来使用物理设备
> - C. 把一个物理设备变换成多个对应的逻辑设备
> - D. 允许用户程序不必全部装入主存便可使用系统中的设备

第 1 题错选为 C。对于 A，可寻址到字节，指定读/写操作的字节地址的应该是 DMA 方式，DMA 控制器与 CPU 协商好内存地址后，DMA 搬运。前面的解释有误区，事实上，这是块设备和字符设备的区别，也就是说，块设备需要一个自一个字地按照设备按照顺序流过来，不可能跟字符设备说读取第 50 个字节地数据；对于 B，共享设备必须是可寻址和随机访问的设备，这句话是正确。考虑这样一种情况，所有人都在使用一个硬盘，A 进程可以访问 m 地址，B 进程可以访问 n 地址，二者不冲突，但是对于磁带而言，A 进程访问了 m 地址，而 B 进程却只能继续顺序访问，无法共享；对于 C，共享设备指的是同一个时间范围内允许多个进程同时访问的设备，这里需要注意的是一个时间范围，而不是同一个时刻；在分配共享设备的时候不会引发死锁，因为其他设备也可以访问。

第 2 题错选为 A。对于 A，即使是设备虚拟化，但是本质上的设备也只有一个。例如多个进程想使用打印机，而打印机只有一个，所以采用 SPOOLing 技术将打印机逻辑抽象出来，可以被多个进程先分配（这里是分配），所以这里的意思是线性等待，使用比物理设备更多的设备指的是你可以在同一个时刻对于 1 个物理打印机使用 2 个逻辑打印机，显然这是错误的；对于 B，这是设备独立性需要做的事情，也就是无论采用什么品牌的打印机，在写代码的时候都是只用同一个标准化方式；对于 C，即假脱机技术；对于 D，这是虚拟内存。

![5.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB71q0yt1f5wGYIy_V3TLw24B8C-vGgACehlrG-BrmFbw_Ye36YHPdwEAAwIAA3gAAz0E)

> 为了便于上层软件的编制，设备控制器通常需要提供（ ）。
>
> - A. 控制寄存器、状态寄存器和控制命令
> - B. I/O 地址寄存器、工作方式状态寄存器和控制命令
> - C. 中断寄存器、控制寄存器和控制命令
> - D. 控制寄存器、编程空间和控制逻辑寄存器
>
> 在设备控制器中用于实现设备控制功能的是（ ）。
>
> - A. CPU
> - B. 设备控制器与处理器的接口
> - C. I/O 逻辑
> - D. 设备控制器与设备的接口
>
> DMA 方式是在（ ）之间建立一条直接数据通路。
>
> - A. I/O 设备和主存
> - B. 两个 I/O 设备
> - C. I/O 设备和 CPU
> - D. CPU 和主存

第 4 题错选为 C。设备控制器=I/O 接口，I/O 有 I/O 端口，I/O 端口本质就是寄存器，其有状态寄存器（也就是标志寄存器），数据寄存器，控制寄存器。对于中断是 CPU 要实现的功能，所以不需要。

第 5 题错选为 D。设备控制功能=I/O 接口功能，所以实现 I/O 接口功能的是由 I/O 逻辑去实现的。接口只是将两个东西给连接起来的协议。

第 6 题错选为 C。属于低级错误，DMA 方式是直接把设备的数据放入主存，由此可以半段出答案。

![5.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB75q0ywFIHrWOBQ2yYCxTZbLCDyvQQACexlrG-BrmFZAA_pfF7kMzgEAAwIAA3gAAz0E)

> 若 I/O 设备与存储设备进行数据交换不经过 CPU 来完成，则这种数据交换方式是（ ）。
>
> - A. 程序查询
> - B. 中断方式
> - C. DMA 方式
> - D. 直接存取方式
>
> 下列关于 DMA 方式的描述中，正确的是（ ）。
>
> - A. DMA 是一个专门负责输入/输出的处理机
> - B. 数据传输过程由 DMA 控制器负责，CPU 只在预处理和后处理阶段进行干预
> - C. CPU 通过程序的方式给出 DMA 可以解释的程序
> - D. DMA 不需要 CPU 指出所取数据的地址与长度
>
> 计算机系统中，不属于 DMA 控制器的是（ ）。
>
> - A. 命令/状态寄存器
> - B. 内存地址寄存器
> - C. 数据寄存器
> - D. 堆栈指针寄存器
>
> DMA 传输前需要进行预处理，传输后需要进行后处理，则下列说法中正确的是（ ）。
>
> - A. 预处理程序运行在用户态，后处理程序运行在内核态
> - B. 负责预处理和后处理程序的进程都是请求 I/O 的进程
> - C. 预处理阶段不需要 CPU 参与，后处理阶段需要 CPU 参与
> - D. 预处理阶段请求 I/O 的进程处于运行态，后处理阶段处于阻塞态
>
> 在下列问题中，（ ）不是设备分配中应考虑的问题。
>
> - A. 及时性
> - B. 设备的固有属性
> - C. 设备独立性
> - D. 安全性
>
> 将系统中的每台设备按某种原则统一进行编号，这些编号作为区分硬件和识别设备的代号，该编号称为设备的（ ）。
>
> - A. 绝对号
> - B. 相对号
> - C. 类型号
> - D. 符号

第 8 题错选为 D。直接存取方式是存储设备找数据块的方式之一，常用于磁盘，其他两种分别是顺序存取和随机存取。

第 9 题错选为 A。处理机这个概念指的是可以独立执行复杂程序的东西，而 DMA 只会搬运，通道才是；对于 C，胡言乱语；对于 D，见第 11 题梳理 DMA 的过程。

第 10 题错选为 B。DMA 控制器首先是 IO 设备，所以至少需要有状态寄存器，控制寄存器和数据寄存器，因此 AC 可以排除；由于 DMA 需要将数据搬入内存里，因此需要内存寄存器来知道现在运行到哪块内存了。对于 D，DMA 不需要运行函数。

第 11 题错选为 C。本题对 DMA 方式理解不清晰。对于 A，预处理是和 CPU 协商内存，所以需要跑在内核态；对于 B，预处理是 CPU 通知，后处理是通知 CPU；对于 C，预处理和后处理都需要 CPU 参与；对于 D，预处理请求 I/O 的进程是 I/O 与 CPU 协商，所以是运行态，后处理是 CPU 中断然后取数据，所以是需要阻塞态。
这里梳理一下 DMA 运行的逻辑，首先是预处理阶段，CPU 首先先发通知，让 DMA 确认工作方式，例如源地址（硬盘），目的地址（内存），搬多少以及怎么搬（从硬盘读到内存），然后在数据传输阶段，是按照一个字一个字搬运的，并且不影响 CPU 干活，在后处理阶段，向 CPU 发送中断信号，CPU 中断并且拿到数据。

第 12 题错选为 A。“及时”是调度需要考虑的事情，而不是设备分配。对于设备的固有属性，可以理解为独占设备，虚拟设备，共享设备之类的，这就显然需要了。

第 13 题错选为 B。相对号的意思是进程自己的，例如进程想申请 2 台打印机，就会标号 1，2，而操作系统会映射到真实的物理号上；类型号是用来区分设备类型的，例如 01 代表打印机，02 代表显示器等；符号是人类起的名字，例如 C 盘。

![5.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB79q0ywrRlSha7b2GMemimwAAeyMiswAAnwZaxvga5hWlRs9xFvdJ0wBAAMCAAN4AAM9BA)

> 将系统调用参数翻译成设备操作命令的工作由（ ）完成。
>
> - A. 用户层 I/O
> - B. 设备无关的操作系统软件
> - C. 中断处理
> - D. 设备驱动程序
>
> 向设备寄存器的写命令是在 I/O 软件的（ ）中完成的。
>
> - A. 用户层软件
> - B. 设备独立性软件
> - C. 设备驱动程序
> - D. 中断处理程序
>
> 一个典型的文本打印页面有 50 行，每行 80 个字符，假定一台标准的打印机每分钟能打印 6 页，向打印机的输出寄存器中写一个字符的时间很短，可忽略不计。若每打印一个字符都需要花费 50μs 的中断处理时间（包括所有服务），则使用中断驱动 I/O 方式运行这台打印机，中断的系统开销占 CPU 的百分比为（ ）。
>
> - A. 2%
> - B. 5%
> - C. 20%
> - D. 50%

第 16 题错选为 D。首先梳理一下 IO 设备的五层架构：用户 IO-设备独立性软件 - 设备驱动 - 中断 - 硬件。设备操作命令是什么，也就是用户向设备发送 IO，然后应该是由设备独立性软件找到正确的设备，然后翻译为设备操作命令，而设备操作命令是由设备驱动程序翻译为硬件看得懂的指令。

第 17 题错选为 D，分析见第 16 题。

第 18 题没做。50×80=4000 个字符。假设运行 1min，也就是总共打印 6×4000=24000 个字符，需要 24000×50μs=24000×50×0.000001s=120×0.01=1.2s，也就是 1.2/60=0.2/10=0.02=2%。

![5.1.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Bq0yxI0iTr9gMRHjfKMNnJ6kKtHwACfRlrG-BrmFZNDio2JrXodwEAAwIAA3gAAz0E)

> 【2010 统考真题】本地用户通过键盘登录系统时，首先获得键盘输入信息的程序是（ ）。
>
> - A. 命令解释程序
> - B. 中断处理程序
> - C. 系统调用服务程序
> - D. 用户登录程序

第 23 题错选为 D。分析信息的流动，考虑程序中断方式来获取键盘信息。程序执行到 scanf 指令，此时进程调用 trap 指令，由操作系统将进程从运行态变为阻塞态，等待键盘输入信息。用户输入字符后，启动中断处理程序，将键盘控制器读入到系统缓冲区，然后将进程插入到就绪队列，最后等待处理机调度上 CPU 后，scanf 才算结束。

根据本题的经验可知，对于每一道真题，需要捋清楚背后的逻辑，这题在 2023 年的大题考察。

![5.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Fq0yxe5Y44JSC_s2QbRx_xOyhhGQACfhlrG-BrmFYK9Z_HHvCNlgEAAwIAA3gAAz0E)

> 【2017 统考真题】系统将数据从磁盘读到内存的过程包括以下操作：
> ① DMA 控制器发出中断请求
> ② 初始化 DMA 控制器并启动磁盘
> ③ 从磁盘传输一块数据到内存缓冲区
> ④ 执行“DMA 结束”中断服务程序
> 正确的执行顺序是（ ）。
>
> - A. ③→①→②→④
> - B. ②→③→①→④
> - C. ②→①→③→④
> - D. ①→②→④→③

错选为 C。分析信息的流动 CPU 向 DMA 控制器发送需求，初始化 DMA 并且启动磁盘，DMA 控制器按照一个字一个字传输一块数据到内存缓冲器（这个过程是 DMA 请求），接着 DMA 控制器发送中断请求，CPU 后处理执行 DMA 结束。

![5.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Jq0yx3Qpdd0ssGjneL72WCyI5YIgACfxlrG-BrmFa57BgMK-_JzQEAAwIAA3gAAz0E)

> 支持双向传送的设备应使用（ ）。
>
> - A. 单缓冲区
> - B. 双缓冲区
> - C. 多缓冲区
> - D. 缓冲池

错选为 D。这道题其实出的不算严谨？很多时候 CD 是不必要的，所以是 B。

![5.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Nq0yzRhGtKG7U8qtGpDlEyF9msQgACgRlrG-BrmFbm9PhbAZ-93AEAAwIAA3gAAz0E)

> 使用单缓冲或双缓冲进行通信时，（ ）可以实现数据的双向并行传输。
>
> - A. 只有单缓冲
> - B. 只有双缓冲
> - C. 都
> - D. 都不

错选为 D。理解错误，绘制图片，本题的意思不是说两个设备同时向这个缓冲区写数据，而是针对一个缓冲区，A 设备可以向里写数据的通过是，B 设备可以从这里面拿数据。

![5.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Rq0yzp3o-aLVIBk8y7IToetVY4FAACghlrG-BrmFZyrVf52qe4-AEAAwIAA3gAAz0E)

> 下列（ ）不是设备的分配方式。
>
> - A. 独占分配
> - B. 共享分配
> - C. 虚拟分配
> - D. 分区分配
>
> 设备分配程序需要访问一系列的数据结构来给进程分配设备，这些数据结构有：设备控制表（DCT）、控制器控制表（COCT）、通道控制表（CHCT）、系统设备表（SDT）。在设备分配的过程中，访问这些数据结构的正确顺序是（ ）。
>
> - A. SDT, DCT, COCT, CHCT
> - B. DCT, COCT, CHCT, SDT
> - C. SDT, COCT, CHCT, DCT
> - D. COCT, CHCT, SDT, DCT

第 15 题不知道选什么。分区分配是内存分配的概念。

第 16 题错选为 B。本题考查设备的分配，实际上应该是先从系统设备表等级，然后从下往上。

![5.2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Vq0y0BKwvCHEIr0Ts7I-QgZSUTawACgxlrG-BrmFYyLayfxhe9EgEAAwIAA20AAz0E)

> 下面关于 SPOOLing 的叙述中，不正确的是（ ）。
>
> - A. SPOOLing 系统中不需要独占设备
> - B. SPOOLing 系统加快了作业执行的速度
> - C. SPOOLing 系统使独占设备变成共享设备
> - D. SPOOLing 系统提高了独占设备的利用率

本题错选为 B。事实上，至少需要 1 台设备，不然再怎么逻辑化没有设备怎么分配？对于 B，SPOOLing 技术使作业不需要去等待，可以执行其他任务。

![5.2.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8Zq0y02_4b0ifJ6t8KEyu1LhIPdtQAChBlrG-BrmFbWHZWi7tGKIQEAAwIAA3gAAz0E)

> 当用户要求使用打印机打印某文件时，用户的要求是由操作系统的（ ）实现的。
>
> - A. 文件系统
> - B. 设备管理程序
> - C. 文件系统和设备管理程序
> - D. 打印机启动程序和设备管理程序

错选为 B。低级错误，没看完题目。

![5.2.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8dq0y1KYE5gx9KXN6DBnFMtiyMsyAAChRlrG-BrmFbYqIfW0dazNwEAAwIAA3gAAz0E)

> 对设备驱动程序的处理过程进行排序，正确的处理顺序是（ ）。
> ①对服务请求进行校验    ②传送必要的参数    ③启动 I/O 设备
> ④将抽象要求转化为具体要求    ⑤检查设备的状态
>
> - A. ①④⑤②③
> - B. ④①⑤②③
> - C. ①④②⑤③
> - D. ④①②⑤③

错选为 A。注意这道题是驱动程序，驱动程序的任务是将对该设备的命令翻译为底层硬件调用，所以首先是要转换；而校验的意思是不是对这个请求校验，而是对操作对象进行校验，例如对想要向磁盘的第 4 道第 1 盘第 3 扇区写入数据，得去校验这个数据是否超了（可以理解为页表）

![5.2.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8hq0y1g_g_MBWaIN1X0PEOw5yLo1wAChhlrG-BrmFaeypEj141YOgEAAwIAA3gAAz0E)

> 【2024 统考真题】当键盘中断服务例程执行结束时，所输入数据的存放位置是（ ）。
>
> - A. 用户缓冲区
> - B. CPU 中的通用寄存器
> - C. 内核缓冲区
> - D. 键盘控制器的数据寄存器

错选为 A。将上一节复制粘贴过来：分析信息的流动，考虑程序中断方式来获取键盘信息。程序执行到 scanf 指令，此时进程调用 trap 指令，由操作系统将进程从运行态变为阻塞态，等待键盘输入信息。用户输入字符后，启动中断处理程序，将键盘控制器读入到系统缓冲区，终端结束，然后将进程插入到就绪队列，最后等待处理机调度上 CPU 后，系统调用从内核拷贝数据，scanf 拿到数据，然后 scanf 才算结束。

这题给的启示还是要研究真题并且将背后的过程捋清楚。

![5.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8lq0y17BWxVGirPzROjUtTFrGxDEAAChxlrG-BrmFa3GOqpfJTgewEAAwIAA3gAAz0E)

> 既可以顺序读/写，又可以按任意次序读/写的存储器有（ ）。
> Ⅰ. 光盘    Ⅱ. 磁带    Ⅲ. U 盘    Ⅳ. 磁盘
>
> - A. Ⅱ、Ⅲ、Ⅳ
> - B. Ⅰ、Ⅲ、Ⅳ
> - C. Ⅲ、Ⅳ
> - D. 仅Ⅳ

错选为 C。光盘可以任意读，例如找第 x 集。

![5.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8pq0y2iH8tzVJf8iUPZ11k96djj9QACiBlrG-BrmFZj-3VsWI5c5gEAAwIAA3gAAz0E)

> 硬盘的操作系统引导扇区产生在（ ）。
>
> - A. 对硬盘进行分区时
> - B. 对硬盘进行低级格式化时
> - C. 硬盘出厂时自带
> - D. 对硬盘进行高级格式化时

错选为 B。本题时背书，梳理一下硬盘的格式化：

第一步是硬盘的低级格式化，也就是物理格式化，此时划分扇区和磁道，下一步是分区，也就是对每个分区记录起始位置大小（记录在主引导记录 MDR 和分区表）中，然后对分区进行逻辑格式化，初始化根目录，建立操作系统引导扇区，建立文件系统

![5.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8tq0y3M_3GR8ppuf45gv6w7f1s6JQACiRlrG-BrmFb3nWFG6toZ1gEAAwIAA20AAz0E)

> 在下列有关旋转延迟的叙述中，不正确的是（ ）。
>
> - A. 旋转延迟的大小与磁盘调度算法无关
> - B. 旋转延迟的大小取决于磁盘空闲空间的分配程序
> - C. 旋转延迟的大小与文件的物理结构有关
> - D. 扇区数据的处理时间对旋转延迟的影响较大

本题错选为 B。对于 A，肯定是无关的，无论采用哪种调度算法，调度算法都不会影响到旋转，只会影响到寻道；对于 BC，如果采用的是连续分配，那么延迟会很小，那么如果采用的是隐式链接分配，那么影响就非常大了；对于 D，扇区的处理时间并不会影响旋转延迟，旋转本身只和硬件相关。事实上，如果和扇区的处理时间相关，那么就不会采用错开的方式去放逻辑数据了。

![5.3.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB8xq0y3kE5RrkWw2Dp6rTWkViYGm6QACihlrG-BrmFayMFLNUVnhBgEAAwIAA3gAAz0E)

> 假设磁盘有 100 个柱面，每个柱面上有 8 个磁道，每个磁道有 8 个扇区。文件 A 含有 6400 个逻辑记录，逻辑记录大小与扇区大小一致，该文件以顺序结构的形式存放在磁盘上。文件的第 0 个逻辑记录存放在磁盘地址（0 号柱面、0 号盘面、0 号扇区）中，则磁盘地址（78 号柱面、6 号盘面、6 号扇区）中存放了该文件的第（ ）个逻辑记录。
>
> - A. 5045
> - B. 5046
> - C. 5047
> - D. 5048
>
> 已知某磁盘的平均转速为 r 秒/转，平均寻道时间为 T 秒，每个磁道可以存储的字节数为 N。现向该磁盘读/写 b 字节的数据，采用随机寻道的方法，每道的所有扇区组成一个簇，其平均访问时间是（ ）。
>
> - A. (r + T)b/N
> - B. b/NT
> - C. (b/N + T)r
> - D. bT/N + r

对于第 17 题。首先注意才去随机寻道的方式，总共需要访问 b/N 个磁道。而由于所有的扇区组成一个簇，所以需要完整的转完一整圈才能度完这个数据。综上所述，对于 1 道，寻道需要 T，访问需要 r，总共是 b/N，所以选 A。

![5.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB81q0y398Oc2B3WLCT7M9vuctC2scgACixlrG-BrmFZ7mxiskYuI4AEAAwIAA3gAAz0E)

> 下列关于固态硬盘的说法中，正确的是（ ）。
>
> - A. 固态硬盘的写速度比较慢，性能甚至弱于常规硬盘
> - B. 相比常规硬盘，固态硬盘优势主要体现在连续存取的速度
> - C. 静态磨损均衡算法通常比动态磨损均衡算法的表现更优秀
> - D. 写入时，静态磨损均衡算法每次选择使用长期存放数据而很少擦写的存储块

错选为 D。属于低级错误，静态更优的原因是静态会在背后把几乎不写的数据调道那些擦除多的块，对于 D 是动态做的事情。

![5.3.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB85q0y4weCDa9FxV-J8xu_iNVdlwkAACjBlrG-BrmFbiICSmpXB8XgEAAwIAA3gAAz0E)

> 【2017 统考真题】下列选项中，磁盘逻辑格式化程序所做的工作是（ ）。
> I. 对磁盘进行分区
> II. 建立文件系统的根目录
> III. 确定磁盘扇区校验码所占位数
> IV. 对保存空闲磁盘块信息的数据结构进行初始化
>
> - A. 仅 II
> - B. 仅 II、IV
> - C. 仅 III、IV
> - D. 仅 I、II、IV

看书作对的。对于 1，分区是分区做的事情，对于 3，CRC 校验是低级格式化做的事情。

![5.3.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB89q0y5EqR4bkO-myzv9B3gU7fc2nwACjRlrG-BrmFZAJoQIHuGVrgEAAwIAA3gAAz0E)

> 【2018 统考真题】系统总是访问磁盘的某个磁道而不响应对其他磁道的访问请求，这[?]现象称为磁头臂黏着。下列磁盘调度算法中，不会导致磁头臂黏着的是（ ）。
>
> - A. 先来先服务（FCFS）
> - B. 最短寻道时间优先（SSTF）
> - C. 扫描算法（SCAN）
> - D. 循环扫描算法（C-SCAN）
>
> 【2021 统考真题】某系统中磁盘的磁道数为 200（0～199），磁头当前在 184 号磁道上[?]用户进程提出的磁盘访问请求对应的磁道号依次为 184, 187, 176, 182, 199。若采用最短寻道时间优先（SSTF）算法完成磁盘访问，则磁头移动的距离（磁道数）是（ ）。
>
> - A. 37
> - B. 38
> - C. 41
> - D. 42

第 32 题错选为 D。属于低级错误。

第 33 题错选为 A。属于低级错误，184 和 182 的大小比较。

![5.3.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Bq0y6aRfm7wZrsVVlzjSz42qeogAACjhlrG-BrmFYOmvmM32I-aQEAAwIAA3gAAz0E)

> 【2025 统考真题】在下列选项中，文件系统需要为温彻斯特硬盘和固态硬盘都提供的功能是（ ）。
>
> - A. 划分扇区
> - B. 确定盘块大小
> - C. 降低寻道时间
> - D. 实现均衡磨损

错选为 D。属于低级错误，事实上，即便不知道温彻斯特硬盘就是磁盘，也应该想到这道题说的是文件系统，而均衡磨损是 SSD 自己本身实现的东西。
