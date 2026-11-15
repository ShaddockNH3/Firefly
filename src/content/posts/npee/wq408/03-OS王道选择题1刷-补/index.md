---
title: OS 王道选择题 1 刷（补）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · OS 王道选择题 1 刷（补）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.03
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## OS 王道选择题 1 刷（补）

### OS 王道选择题 1 刷第 1 章

![1.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmFqyKJRP3iSOsxLktd9qmkrvnQ3BAAC5BFrG6T-SFZyBAtFmLrJiAEAAwIAA3gAAz0E)

> 操作系统是对（ ）进行管理的软件。
>
> - A. 软件
> - B. 硬件
> - C. 计算机资源
> - D. 应用程序
>
> 下面的（ ）资源不是操作系统应该管理的。
>
> - A. CPU
> - B. 内存
> - C. 外存
> - D. 源程序

第 1 题选了 B、C，答案是 C、D

关于第 1 题，是因为没背书，答案在第 1 页的黑字部分。

关于第 2 题，可能是因为没学后面的。OS 负责管理内存，CPU，文件系统（外村），I/O。源程序虽然以文件形式存储在外存中，但是其代码语义等信息不归操作系统管。

![1.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmJqyKJjM7RgMsFCIZpOygths-q9MgAC5RFrG6T-SFYMdqPBOWGipQEAAwIAA3gAAz0E)

> 下列选项中，不属于多道程序设计的基本特征的是（ ）。
>
> - A. 制约性
> - B. 间断性
> - C. 顺序性
> - D. 共享性

错选为 A。因为多道程序需要访问相同的临界资源，所以他们之间是相互制约的。对于顺序性，每道程序的内部是顺序的，但是程序间的执行顺序不是顺序的。

![1.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmNqyKKbIqVNnTaIORnb7vyohqxZDAAC5hFrG6T-SFaKjY-Jbb0TlwEAAwIAA3gAAz0E)

> 实时操作系统必须在（ ）内处理来自外部的事件。
>
> - A. 一个机器周期
> - B. 被控制对象规定时间
> - C. 周转时间
> - D. 时间片

错选为 D。时间片的概念来自于 RR 调度，也就是分时操作系统。在分时操作系统下，每个对象轮流分配处理机，就好像他们单独拥有这台机子一样。即便在分时操作系统下，也不一定是在时间片内处理完所有的信息，此时就体现了中断的作用。

![1.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmRqyKKs7zA8G_YoTi__eKvwjFkvGgAC5xFrG6T-SFbGbGbHbG4YagEAAwIAA20AAz0E)

> 下列关于分时操作系统的叙述中，错误的是（ ）。
>
> - A. 分时操作系统主要用于批处理作业
> - B. 分时操作系统中每个任务依次轮流使用时间片
> - C. 分时操作系统的响应时间好
> - D. 分时操作系统是一种多用户操作系统

错选为 D。分时操作系统确实是一种多用户系统，可以让每个用户轮流使用时间片。批处理系统主要用于处理批作业，这里把批作业理解为了轮流。分时操作系统让每个用户轮流使用时间片。

分时操作系统响应时间取决于用户数量，但总体而言是公平的。

![1.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmVqyKLrgkMP_w25vnEQ3JoTeje5SAAC6RFrG6T-SFZozQ8epV6JYwEAAwIAA3gAAz0E)

> 引入多道程序设计技术的前提条件之一是系统具有（ ）。
>
> - A. 多个 CPU
> - B. 多个终端
> - C. 中断功能
> - D. 分时功能

本题错选为 A。多道程序系统意味着程序并发执行（非并行），而并发意味着轮流上处理机调度，所以必须拥有中断功能。

![1.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmZqyKMLbiRsnr-Cgiuen_yK_6Ng1QAC6hFrG6T-SFbkXklhzFSrAgEAAwIAA3gAAz0E)

> 下列说法中，正确的是（ ）。
> I. 批处理的主要缺点是需要大量内存
> II. 当计算机提供了内核态和用户态时，输入/输出指令必须在内核态下执行
> III. 操作系统中采用多道程序设计技术的最主要原因是提高 CPU 和外部设备的可靠性
> IV. 操作系统中，通道技术是一种硬件技术
>
> - A. I、II
> - B. I、III
> - C. II、IV
> - D. II、III、IV
>
> 下列关于系统调用的说法中，正确的是（ ）。
> I. 用户程序使用系统调用命令，该命令经过编译后形成若干参数和陷入指令
> II. 用户程序使用系统调用命令，该命令经过编译后形成若干参数和屏蔽中断指令
> III. 用户程序创建一个新进程，需使用操作系统提供的系统调用接口
> IV. 当操作系统完成用户请求的系统调用功能后，应使 CPU 从内核态转到用户态
>
> - A. I、III
> - B. III、IV
> - C. I、III、IV
> - D. II、III、IV
>
> （ ）是操作系统必须提供的功能。
>
> - A. 图形用户界面（GUI）
> - B. 为进程提供系统调用命令
> - C. 中断处理
> - D. 编译源程序

第 2 题错选为 B。批处理系统的主要缺点是无法实时交互，I/O 指令必须在内核态进行，操作系统采用多道程序设计技术主要原因是提高利用，而非可靠。通道技术是 I/O 形式的第 4 钟（考纲已移除），是硬件技术。

第 3 题错选为 A。对于 1 和 2，屏蔽中断指令是内核态运行的，用户不可以修改。对于 4，考虑这样一个场景，假设用户任务返回的是终止（异常），原程序已经无法执行，返回没有意义，操作系统继续处理。

第 4 题错选为 B。没有中断处理意味着操作系统完全无法进行干预。对于 B，考虑宏内核和微内核，微内核为进程提供系统调用命令是是现在外部的。

操作系统至少要提供：低级进程通信，调度，低级 I/O，中断处理等。

![1.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmdqyKMmNl7qj496WiU7vtOtM3bEVgAC6xFrG6T-SFYt_e1K1p9LbAEAAwIAA3gAAz0E)

> 下列程序中，必须在内核态执行的是（ ）。
> I. 磁盘调度程序    II. 中断处理程序    III. 设备驱动程序    IV. 操作系统初始化程序
>
> - A. I、II、III、IV
> - B. I、II、III
> - C. I、II、IV
> - D. II、III

本题错选为 C。设备驱动也需要在内核态执行，具体可以见操作系统的 I/O 管理——进程调用，设备独立性软件，驱动程序，中断处理，具体的硬件处理。

![1.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmhqyKM9CmQ4hPBlPRUT2YPrnSzfbAAC7BFrG6T-SFbHjy5KLwuGpgEAAwIAA3gAAz0E)

> 下列关于系统调用和一般过程调用的说法中，正确的是（ ）。
>
> - A. 两者都需要将当前 CPU 中的 PSW 和 PC 的值压栈，以保存现场信息
> - B. 系统调用的被调用过程一定运行在内核态
> - C. 一般过程调用的被调用过程一定运行在用户态
> - D. 两者的调用过程与被调用过程一定都运行在用户态

本题错选为 A。保存 PSW 是中断处理中硬件完成的部分，一般过程调用不需要保存程序状态字指令。被调用过程的意思是说这个东西本身，也就是函数本身，而不是 trap 指令。我使用 trap 指令这个过程是调用过程，被调用过程是内核执行的东西。

![1.3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmlqyKNNDC2vw67G9mp54F10akCRiwAC7RFrG6T-SFYiG_9ZljkSwwEAAwIAA3gAAz0E)

> 【2012 统考真题】下列选项中，不可能在用户态发生的事件是（ ）。
>
> - A. 系统调用
> - B. 外中断
> - C. 进程切换
> - D. 缺页

本题错选为 A。用户态发生系统调用，系统调用的被调用态在内核态。进程切换必然是发生在内核态。外中断可能在用户态发生，这个时候应该转到内核态处理。进程切换泽必须需要在内核态。

![1.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmpqyKNkkJ9IrgbSZ--7RkgpoMPnQAAC7hFrG6T-SFYh3X_n6z0-8AEAAwIAA3gAAz0E)

> 【2015 统考真题】处理外中断时，应该由操作系统保存的是（ ）。
>
> - A. 程序计数器（PC）的内容
> - B. 通用寄存器的内容
> - C. 快表（TLB）中的内容
> - D. Cache 中的内容

本题错选为 A。程序计数器的内容在中断处理的第 2 步由硬件保存（中断隐指令）通用寄存器在中断处理的后续步骤被操作系统保存。

![1.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmtqyKOULUjFqD_hzBcspwm0eaM_9AAC7xFrG6T-SFZZkFIJQFA8IAEAAwIAA3gAAz0E)

> 【2018 统考真题】定时器产生时钟中断后，由时钟中断服务程序更新的部分内容是（ ）。
> I. 内核中时钟变量的值
> II. 当前进程占用 CPU 的时间
> III. 当前进程在时间片内的剩余执行时间
>
> - A. 仅 I、II
> - B. 仅 II、III
> - C. 仅 I、III
> - D. I、II、III
>
> 【2019 统考真题】下列关于系统调用的叙述中，正确的是（ ）。
> I. 在执行系统调用服务程序的过程中，CPU 处于内核态
> II. 操作系统通过提供系统调用避免用户程序直接访问外设
> III. 不同的操作系统为应用程序提供了统一的系统调用接口
> IV. 系统调用是操作系统内核为应用程序提供服务的接口
>
> - A. 仅 I、IV
> - B. 仅 II、III
> - C. 仅 I、II、IV
> - D. 仅 I、III、IV

第 25 题错选为 C。考虑 RR 调度，123 同时需要满足，更新这三者来判断是否进程需要被 RR 调度下掉。

第 26 题错选为 A。操作系统需要提供对外设的访问。对于 3，可以理解为 Linux 系统，Windows 系统等。

![1.6.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmxqyKPJgPn0mqD2ve4H2kgsyxfc3AAC8BFrG6T-SFYcrRGmt1NGOQEAAwIAA3gAAz0E)

> 对于以下五种服务，在采用微内核结构的操作系统中，（ ）不宜放在微内核中。
> I. 进程间通信机制    II. 低级 I/O    III. 低级进程管理和调度
> IV. 中断和陷入处理    V. 文件系统服务
>
> - A. I、II 和 III
> - B. II 和 V
> - C. 仅 V
> - D. IV 和 V

本题错选为 B。实际考察的是操作系统必须的功能。

![1.6.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAm1qyKPwx01sEPe5H-6ewb5Dyopn2AAC8RFrG6T-SFappQ54VdXT6AEAAwIAA3gAAz0E)

> 下列关于操作系统结构的说法中，正确的是（ ）。
> I. 当前广泛使用的 Windows 操作系统，采用的是分层式 OS 结构
> II. 模块化的 OS 结构设计的基本原则是，每一层都仅使用其底层所提供的功能和服务，这样就使系统的调试和验证都变得容易
> III. 因为微内核结构能有效支持多处理机运行，所以非常适合于分布式系统环境
> IV. 采用微内核结构设计和实现操作系统具有诸多好处，如添加系统服务时不必修改内核，使系统更高效。
>
> - A. I 和 II
> - B. I 和 III
> - C. III
> - D. III 和 IV

本题错选为 D。微内核并不高效，因为进行一些操作的时候需要频繁变态。

![1.6.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAm5qyKQB5T0pH9igh1J24_PEicnJ_QAC8hFrG6T-SFbj-FpOPwK9FQEAAwIAA3gAAz0E)

> 对于计算机操作系统引导，描述不正确的是（ ）。
>
> - A. 计算机的引导程序驻留在 ROM 中，开机后自动执行
> - B. 引导程序先做关键部位的自检，并识别已连接的外设
> - C. 引导程序会将硬盘中存储的操作系统全部加载到内存中
> - D. 若计算机中安装了双系统，引导程序会与用户交互加载有关系统

本题错选为 B。背书。并不会将操作系统所有东西都加载到内存里，只会把必要的部分加载进来，也就是内核。

![1.6.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAm9qyKRZI9ytf1VbtzW3Wz3e85nA4AAC8xFrG6T-SFbpYREVgRgIOAEAAwIAA3gAAz0E)

> 计算机操作系统的引导程序位于（ ）中。
>
> - A. 主板 BIOS
> - B. 片外 Cache
> - C. 主存 ROM 区
> - D. 硬盘

引导程序位于硬盘，背书。整个过程大致是先在 BIOS 初始化，自检，根据 CMOS 设置的设备优先级启动设备。加载主引导。确定活动分区。加载启动管理器。加载操作系统内核。初始化内核并且启动用户环境。

B→"自"→"主"→"分"→"管"→"核"→"始"

- B：BIOS 读入（ROM）
- 自：自检 POST 查启动项（CMOS）
- 主：主引导记录（MBR，全盘唯一首扇区），也就是磁盘引导
- 分：分区引导记录（PBR，活动分区首扇区）
- 管：启动管理器（GRUB / Bootmgr）
- 核：加载核心内核（Kernel 接管，重建中断）
- 始：内核初始化（页表/PCB/设备表）→ 唤醒 init 首个用户进程

![1.6.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnBqyKUQ9WTg71exGJKOe7dGeYIw_wAC9BFrG6T-SFZ7eYF-qmWhQwEAAwIAA3gAAz0E)

> 下列关于虚拟机的说法中，正确的是（ ）。
> I. 虚拟机可以用软件实现    II. 虚拟机可以用硬件实现
> III. 多台虚拟机可同时运行在同一物理机器上，它实现了真正的并行
>
> - A. I 和 II
> - B. I 和 III
> - C. 仅 I
> - D. I、II 和 III

本题错选 B，为低级错误，看错选项。考虑第二类虚拟机，依赖于宿主计算机的，不可以。考虑第一类虚拟机，底层硬件被第一类虚拟机管理程序综合管理的，所以也不行。

![1.6.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnFqyKUjHFbLjvhgCQ9AbpqkGMNyAgAC9RFrG6T-SFZteog_Wff9GwEAAwIAA3gAAz0E)

> 虚拟机的实现离不开虚拟机管理程序（VMM），下列关于 VMM 的说法中正确的是（ ）。
> I. 第一类 VMM 直接运行在硬件上，其效率通常高于第二类 VMM
> II. VMM 的上层需要支持操作系统的运行、应用程序的运行，因此实现 VMM 的代码量通常大于实现一个完整操作系统的代码量
> III. VMM 可将一台物理机虚拟化为多台虚拟机
> IV. 为了支持客户操作系统的运行，第二类 VMM 需要完全运行在最高特权级
>
> - A. I、II 和 III
> - B. I 和 III
> - C. I、III 和 IV
> - D. I、II、III 和 IV

本题错选为 A。VMM 代码量远低于操作系统的量，比如说只需要实现一些特定的协议转换就可以了。

### OS 王道选择题 1 刷第 2 章

![2.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnJqyKVAu-bhRYFJppKRd2Gy8x38ogAC9hFrG6T-SFaRIl2NSiodwAEAAwIAA3gAAz0E)

> 下列任务中，（ ）不是由进程创建原语完成的。
>
> - A. 申请 PCB 并初始化
> - B. 为进程分配内存空间
> - C. 为进程分配 CPU
> - D. 将进程插入就绪队列

本题错选为 B。进程在被创建后，进入就绪队列，为进程分配 CPU 是调度程序做的事情。

![2.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnNqyKVlMhoPMND0hfcDoxgcHgcs6AAC9xFrG6T-SFbG01xTOF4zowEAAwIAA3gAAz0E)

> 下列选项中，导致创建新进程的操作是（ ）。
> I. 用户登录    II. 高级调度发生时
> III. 操作系统响应用户提出的请求    IV. 用户打开了一个浏览器程序
>
> - A. 仅 I 和 IV
> - B. 仅 II 和 IV
> - C. I、II 和 IV
> - D. 全部

本题错选为 B。用户登录意味着创建了一个用户进程，打开浏览器程序相当于点击 exe，点击 exe 肯定会创建新进程。

![2.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnRqyKV4FIiWrPGuyKlMZRqTohk7ZgAC-BFrG6T-SFbXz5xJpVZxFQEAAwIAA3gAAz0E)

> 在单处理器系统中，若同时存在 10 个进程，则处于就绪队列中的进程最多有（ ）个。
>
> - A. 1
> - B. 8
> - C. 9
> - D. 10

本题错选为 D。即便考虑闲逛进程，闲逛进程也是这 10 个进程之一，而非独立出去的。

![2.1.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnVqyKWG-GarUOwsidw6YYjyENPrTwAC-hFrG6T-SFb9gtJoRVC_dAEAAwIAA3gAAz0E)

> 若一个进程实体由 PCB、共享正文段、数据堆段和数据栈段组成，请指出下列 C 语言程序中的内容及相关数据结构各位于哪一段中。
> I. 全局赋值变量（ ）II. 未赋值的局部变量（ ）
> III. 函数调用实参传递值（ ）IV. 用 malloc() 要求动态分配的存储区（ ）
> V. 常量值（如 1995、"string"）（ ）VI. 进程的优先级（ ）
>
> - A. PCB
> - B. 正文段
> - C. 堆段
> - D. 栈段

本题 2 错选为 B。未赋值的局部变量在应在栈区。（局部变量都在栈区）

保留区 - 代码段 - 只读/全局变量 - 堆，内存映射，栈（局部变量）- 内核。

![2.1.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnZqyKWWfzTe3WWj8luHN7CNjjKuLgAC-xFrG6T-SFZnjh09knGZGgEAAwIAA3gAAz0E)

> 下列进程间通信方式中，数据传输速度最快的是（ ）。
>
> - A. 消息传递
> - B. 信号量
> - C. 共享内存
> - D. 管道

本题错选为 B。通过信号量通信需要发送信号量和接收信号量，在这过程中会消耗时间，而采用共享内存直接访问即可。

![2.1.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAndqyKWmX8zDIVN534m8_09vqMwsyQAC_BFrG6T-SFZfP2vCT1SKFgEAAwIAA3gAAz0E)

> 下列关于线程的叙述中，正确的是（ ）。
>
> - A. 线程包含 CPU 现场，可以独立执行程序
> - B. 每个线程都有自己独立的地址空间
> - C. 每个进程只能包含一个线程
> - D. 同一进程中的线程间通信也必须使用系统调用函数

本题错选为 B。对于进程以及线程的理解，可以从以下角度入手：

1. 线程可以被调度，所以线程可以独立执行程序
2. 线程没有自己的资源，其资源是来自于进程的
3. 由于 2，所以进程是分配资源的单位

![2.1.49](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnhqyKW9MAABXJQSwtFgZox2vAt1570AAv0Raxuk_khWEcjOSuo4PIQBAAMCAAN4AAM9BA)

> 在内核级线程相对于用户级线程的优点的如下描述中，错误的是（ ）
>
> - A. 同一进程内的线程切换，系统开销小
> - B. 当内核线程阻塞时，同一进程中的其他内核级线程仍可被调度
> - C. 内核级线程的程序实体可以在内核态运行
> - D. 对多处理器系统，核心可以同时调度同一进程的多个线程并行运行

本题错选为 C。看题目，主角是内核级线程。

![2.1.58](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnlqyKXSNePCrNnHglSLFM0nNoOtnwAC_hFrG6T-SFYg0tDNxvWhlAEAAwIAA3gAAz0E)

> 【2010 统考真题】下列选项中，导致创建新进程的操作是（ ）。Ⅰ. 用户登录成功 Ⅱ. 设备分配 Ⅲ. 启动程序执行
>
> - A. 仅Ⅰ和Ⅱ
> - B. 仅Ⅱ和Ⅲ
> - C. 仅Ⅰ和Ⅲ
> - D. Ⅰ、Ⅱ、Ⅲ

本题错选为 D。设备分配显然并非创建进程，而是可能可以让其他进程从就绪态变成运行态。

![2.1.60](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnpqyKXmevl_QdhdVAbcmw8U8w3pPQAC_xFrG6T-SFYUTGoEUQ-SwQEAAwIAA3gAAz0E)

> 【2012 统考真题】下列关于进程和线程的叙述中，正确的是（ ）。
>
> - A. 不管系统是否支持线程，进程都是资源分配的基本单位
> - B. 线程是资源分配的基本单位，进程是调度的基本单位
> - C. 系统级线程和用户级线程的切换都需要内核的支持
> - D. 同一进程中的各个线程拥有各自不同的地址空间

本题错选为 D，本质依旧是对线程与进程的不了解。

![2.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAntqyKYuboeBhFhkKoMuyVj5y2iJQAADEmsbpP5IVr_8CY_FyIOVAQADAgADeAADPQQ)

> 在支持页式存储管理和多线程技术的系统中，当一个进程中的线程 T₁ 切换到同一个进程中的线程 T₂ 执行时，操作系统需要执行的操作是（ ）。Ⅰ. 更新程序计数器的值 Ⅱ. 更新栈基址寄存器的值 Ⅲ. 更新页基址寄存器的值 Ⅳ. 更新进程打开文件表
>
> - A. Ⅰ、Ⅱ、Ⅲ、Ⅳ
> - B. Ⅱ、Ⅳ
> - C. Ⅰ、Ⅱ
> - D. Ⅰ、Ⅲ、Ⅳ

本题错选为 A。依旧是对线程和进程的不充分理解。对于打开文件表，这个是分配给进程的。对于页基址寄存器，一个进程分配一个页表，所以不变。而线程私有的需要变。

![2.2.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAnxqyKaZB76vIDP80wSCDc_zp3Q6awACARJrG6T-SFb7ERR9-QABhysBAAMCAAN4AAM9BA)

> 有 5 个批处理作业 A, B, C, D, E 几乎同时到达，其预计运行时间分别为 10, 6, 2, 4, 8，其优先级（由外部设定）分别为 3, 5, 2, 1, 4，这里 5 为最高优先级。以下各种调度算法中，平均周转时间为 14 的是（ ）调度算法。
>
> - A. 时间片轮转（时间片为 1）
> - B. 优先级
> - C. 先来先服务（按照顺序 10, 6, 2, 4, 8）
> - D. 短作业优先

错选为 B。本题应该是脑子里认为是 B，然后即便是算出来了 D，也脑子想想就改为了 B

![2.2.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAn1qyKbLdP4KsWtSkWzkUASyIB9AJQACAhJrG6T-SFa5nGlvLYpRqwEAAwIAA3gAAz0E)

> 【2012 统考真题】一个多道批处理系统中仅有 P₁ 和 P₂ 两个作业，P₂ 比 P₁ 晚 5ms 到达，它的计算和 I/O 操作顺序如下。
> P₁：计算 60ms，I/O 80ms，计算 20ms
> P₂：计算 120ms，I/O 40ms，计算 40ms
> 若不考虑调度和切换时间，则完成两个作业需要的时间最少是（ ）。
>
> - A. 240ms
> - B. 260ms
> - C. 340ms
> - D. 360ms

错选为 A

注意 P2 比 P1 晚来 5min。

![2.2.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAn5qyKdEP0dhaTejjyu-H_2sVpQ5KwACAxJrG6T-SFZmxUyrL8mDGgEAAwIAA3gAAz0E)

> 【2018 统考真题】某系统采用基于优先权的非抢占式进程调度策略，完成一次进程调度和进程切换的系统时间开销为 1μs。在 T 时刻就绪队列中有 3 个进程 P₁、P₂ 和 P₃，其在就绪队列中的等待时间、需要的 CPU 时间和优先权如下表所示。
> 进程名 等待时间 需要的 CPU 时间 优先权
> P₁ 30μs 12μs 10
> P₂ 15μs 24μs 30
> P₃ 18μs 36μs 20
>
> - [图示] 表格共 4 列（进程名、等待时间、需要的 CPU 时间、优先权），3 行数据为 P₁、P₂、P₃
>
> 若优先权大的进程优先获得 CPU，从 T 时刻起系统开始进程调度，则系统的平均周转时间为（ ）。
>
> - A. 54μs
> - B. 73μs
> - C. 74μs
> - D. 75μs
>
> 【2019 统考真题】系统采用二级反馈队列调度算法进行进程调度。就绪队列 Q₁ 采用时间片轮转调度算法，时间片为 10ms；就绪队列 Q₂ 采用短进程优先调度算法；系统优先调度 Q₁ 队列中的进程，当 Q₁ 为空时系统才会调度 Q₂ 中的进程；新创建的进程首先进入 Q₁；Q₁ 中的进程执行一个时间片后，若未结束，则转入 Q₂。若当前 Q₁、Q₂ 为空，系统依次创建进程 P₁、P₂ 后即开始进程调度，P₁、P₂ 需要的 CPU 时间分别为 30ms 和 20ms，则进程 P₁、P₂ 在系统中的平均等待时间为（ ）。
>
> - A. 25ms
> - B. 20ms
> - C. 15ms
> - D. 10ms

第 47 题错选为 A。这题在做的时候完全没有理解什么意思，但是 2 刷的时候细想，就意识到这题应该是从 P1 上处理机开始算（也就是只有 P1 的等待时间不算，其他的等待时间都要照常算。

这里等待时间的意思是说它在就绪队列的等待时间，也就是假设 P2 运行了还差 18s 结束，此时 P2 到达。而不是 P1，P2，P3 一开始就全到了。

包括本题第一次被调度上去也要算时间。

第 48 题错选为 D。平均等待时间，而非平均周转时间。

![2.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAn9qyKhO6OrDJca8q_5_iTu-ac5TtgACCBJrG6T-SFbH-Pkb3X4XCQEAAwIAA3gAAz0E)

> 两个旅行社甲和乙为旅客到某航空公司订飞机票，形成互斥资源的是（ ）。
>
> - A. 旅行社
> - B. 航空公司
> - C. 飞机票
> - D. 旅行社与航空公司

本题错选为 B。航空公司可以有很多订阅渠道，所以不是互斥资源。而每一张飞机票只能卖给一个人。

![2.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoBqyKhqf3QSf9BPx_HmRH-GL7PQWgACCRJrG6T-SFaM3-pq-AABy1QBAAMCAAN4AAM9BA)

> 用 P、V 操作实现进程同步，信号量的初值为（ ）。
>
> - A. -1
> - B. 0
> - C. 1
> - D. 由用户确定

错选为 B。这题应该是受到了以前什么同步先 V 后 P 的影响，摒弃这种思想，改为：互斥指的是对临界区的访问，而同步是制约先后顺序的。考虑这样一个场景：一个消费者和一个生产者，生产者可以消耗 x 个空间，这个 x 就是用户指定的。

![2.3.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoFqyKh7QQlSTdAi8d60w7QZG1DLCgACChJrG6T-SFaFHs-bYz3qcgEAAwIAA20AAz0E)

> 在使用互斥锁进行同步互斥时，下列（ ）情况会导致死锁。
>
> - A. 一个线程对同一个互斥锁连续加锁两次
> - B. 一个线程尝试对一个已加锁的互斥锁再次加锁
> - C. 两个线程分别对两个不同的互斥锁先后加锁，但顺序相反
> - D. 一个线程对一个互斥锁加锁后忘记解锁

错选为 D。对一个互斥锁加锁后忘记解锁，只能导致其他人无法访问这个临界资源（也就是 P(mutex) 后忘记 V，这种都是 P，执行完后立刻 V，所以一般不会死锁）；

对于 C，考虑这样一个场景 A 进程：P(S1);P(S2); V(S2); V(S1);，B 进程：P(S2);P(S1);V(S1);P(S2)；这样就显然了。（题目的阅读理解）

![2.3.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoJqyKiPTm6--LkV9MrIjbfT4Ay1sgACCxJrG6T-SFb_wDslRtu-VwEAAwIAA3gAAz0E)

> 一个系统中共有 5 个并发进程涉及某个相同的变量 A，变量 A 的相关临界区是由（ ）个临界区构成的。
>
> - A. 1
> - B. 3
> - C. 5
> - D. 6

错选为 A。临界区指的是进程访问临界资源的代码。

![2.3.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoNqyKigAdvLhFMqQCTTiYm8qi9nhwACDBJrG6T-SFaIDTzD4RibvQEAAwIAA3gAAz0E)

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
>
> 若系统有 n 个进程，则就绪队列中进程的个数最多有（①）个；阻塞队列中进程的个数最多有（②）个。
>
> - ① A. n+1
> - B. n
> - C. n-1
> - D. 1
> - ② A. n+1
> - B. n
> - C. n-1
> - D. 1

29 题错选为 D。管程可以理解为对 PV 操作的类封装。对于 C，考虑读者写者问题的读者。
对于 B，对于一个读者而言，只能互斥的访问+-count。

30 题错选为 B。假设现在只有 1 个资源，我申请了这个资源，这个资源先减 1，变为 0，我再被分配到这个资源。下一个人申请了这个资源，这个资源先减 1，变成 -1，然后没资源了。所以应该是 A。

31 题第 2 空错选为 A。考虑了闲逛进程。有两个问题

1. 即便是闲逛进程，也占用了 n 个里面的一个
2. 闲逛进程应该是不会进入阻塞态的。

![2.3.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoRqyKi7FNdap8rA8pD29AABxN97EMsAAg0Saxuk_khWHpCmx00HYaABAAMCAAN4AAM9BA)

> 在 9 个生产者、6 个消费者共享容量为 8 的生产者 - 消费者问题中，互斥使用缓冲区的信号量初始值为（ ）。
>
> - A. 1
> - B. 6
> - C. 8
> - D. 9

本题错选为 C。互斥使用缓冲区的互斥信号量，而非同步信号量。

![2.3.50](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoVqyKjR8fjgSHM5y-nEL_nMWfaEngACDhJrG6T-SFbU8uGXXUjLFAEAAwIAA3gAAz0E)

> 【2016 统考真题】进程 P₁ 和 P₂ 均包含并发执行的线程，部分伪代码描述如下所示。
> // 进程 P1
> int x=0;
> Thread1( )
> {
> int a;
> a=1; x += 1;
> }
> Thread2( )
> {
> int a;
> a=2; x += 2;
> }
> // 进程 P2
> int x=0;
> Thread3( )
> {
> int a;
> a=x; x += 3;
> }
> Thread4( )
> {
> int b;
> b=x; x += 4;
> }
>
> - [图示] 代码框分左右两列：左列为 // 进程 P1（Thread1、Thread2），右列为 // 进程 P2（Thread3、Thread4）
>
> 下列选项中，需要互斥执行的操作是（ ）。
>
> - A. a=1 与 a=2
> - B. a=x 与 b=x
> - C. x += 1 与 x += 2
> - D. x += 1 与 x += 3

本体错选为 A。a 为线程的私有变量，所以不需要加锁。对于同一个进程的相同全局变量需要加锁。

![2.4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoZqyKjk5vXAZR56o93fH0v91PtxwQACDxJrG6T-SFaCygoflSjKcwEAAwIAA3gAAz0E)

> 下面是并发进程的程序代码，正确的是（ ）。
> Semaphore x1=x2=y=1;
> int c1=c2=0;
> P1( )
> {
> while(1){
> P(x1);
> if(++c1==1) P(y);
> V(x1);
> computer(A);
> P(x1);
> if(--c1==0) V(y);
> V(x1);
> }
> }
> P2( )
> {
> while(1){
> P(x2);
> if(++c2==1) P(y);
> V(x2);
> computer(B);
> P(x2);
> if(--c2==0) V(y);
> V(x2);
> }
> }
>
> - [图示] 代码框分左右两列：左列为 P1( )，右列为 P2( )
>
> - A. 进程不会死锁，也不会“饥饿”
> - B. 进程不会死锁，但是会“饥饿”
> - C. 进程会死锁，但是不会“饥饿”
> - D. 进程会死锁，也会“饥饿”

错选为 A。本题是读者写者问题读优先的代码，可以注意。

并且，在做题目的时候，先思考一下经典模型，再去想是不是新东西。

![2.4.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAodqyKj4uVc22AJhp4b-mo8iNh28bQACEBJrG6T-SFaGiyBuAAHDjwsBAAMCAAN4AAM9BA)

> 假设具有 5 个进程的进程集合 P = {P₀, P₁, P₂, P₃, P₄}，系统中有三类资源 A, B, C，假设在某时刻有如下状态，见下表。
> 进程名 Allocation Max Available
> A B C A B C
> P₀ 0 0 3 0 0 4
> P₁ 1 0 0 1 7 5
> P₂ 1 3 5 2 3 5
> P₃ 0 0 2 0 6 4
> P₄ 0 0 1 0 6 5
> A B C x y z
>
> - [图示] 表格 5 行数据为 P₀~P₄；Allocation、Max 下各有 A B C 三列；Available 列为 A B C，取值 x y z
>
> 系统是处于安全状态的，则 x, y, z 的取值可能是（ ）。Ⅰ. 1, 4, 0 Ⅱ. 0, 6, 2 Ⅲ. 1, 1, 1 Ⅳ. 0, 4, 7
>
> - A. Ⅰ、Ⅱ、Ⅳ
> - B. Ⅰ、Ⅱ
> - C. 仅Ⅰ
> - D. Ⅰ、Ⅲ

错选为 B。计算错误，属于低级错误。

![2.4.26 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAohqyKkS8783oU_qlpeHlj6OGpNpOwACERJrG6T-SFa2a5iFy7YtEgEAAwIAA3gAAz0E)

> [原图非题目：主人手写订正演算笔记截图（含手写数字、删除线与圈注）]

![2.4.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAolqyKkgptnNPHCpVM9PK81QORF9yAACEhJrG6T-SFbej9m9j4rIgwEAAwIAA3gAAz0E)

> 【2015 统考真题】若系统 S₁ 采用死锁避免方法，S₂ 采用死锁检测方法，下列叙述中，正确的是（ ）。Ⅰ. S₁ 会限制用户申请资源的顺序，而 S₂ 不会 Ⅱ. S₁ 需要进程运行所需的资源总量信息，而 S₂ 不需要 Ⅲ. S₁ 不会给可能导致死锁的进程分配资源，而 S₂ 会
>
> - A. 仅Ⅰ、Ⅱ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅰ、Ⅲ
> - D. Ⅰ、Ⅱ、Ⅲ

错选为 B。死锁避免指的是银行家算法那一套，死锁检测则是先分配，然后检测是否死锁。对于 1，限制用户申请资源的顺序是死锁预防干的事情。

![2.4.43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAopqyKkxYJpNJ2AGoFJm3a_Jk0NWcQACFBJrG6T-SFbYWD2YzhF7jwEAAwIAA3gAAz0E)

> 【2020 统考真题】某系统中有 A、B 两类资源各 6 个，t 时刻的资源分配及需求情况如下表所示。
> 进程名 A 已分配数量 B 已分配数量 A 需求总量 B 需求总量
> P₁ 2 3 4 4
> P₂ 2 1 3 1
> P₃ 1 2 3 4
>
> - [图示] 表格共 5 列（进程名、A 已分配数量、B 已分配数量、A 需求总量、B 需求总量），3 行数据为 P₁、P₂、P₃
>
> t 时刻安全性检测结果是（ ）。
>
> - A. 存在安全序列 P₁、P₂、P₃
> - B. 存在安全序列 P₂、P₁、P₃
> - C. 存在安全序列 P₂、P₃、P₁
> - D. 不存在安全序列

错选为 B。计算错误，属于低级错误。

![2.4.43 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAotqyKlCPTn9w1FdPIhxfNSaTlvZDAACFRJrG6T-SFaNE6fzK0c0xQEAAwIAA3gAAz0E)

> [原图非题目：主人手写订正演算笔记截图（含手写数字、删除线与圈注）]

### OS 王道选择题 1 刷第 3 章

![3.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAoxqyKlgtYiGRNhh0H0a59eZiGAOAwACFhJrG6T-SFajkc8-PSRwgwEAAwIAA3gAAz0E)

> 下列各种存储管理方式中，需要硬件地址变换机构的是（ ）。Ⅰ. 单一连续分配 Ⅱ. 固定分区分配 Ⅲ. 页式存储管理 Ⅳ. 动态分区分配 Ⅴ. 页式虚拟存储管理
>
> - A. Ⅰ、Ⅲ、Ⅴ
> - B. Ⅱ、Ⅲ、Ⅳ
> - C. Ⅲ、Ⅳ、Ⅴ
> - D. Ⅱ、Ⅲ、Ⅳ、Ⅴ

错选为 D。固定分区是直接采用的固定地址（也就是固定把这一块分给你，或者意思是说，提前分区分好了这一块大小，只能拿这么大大小的）

![3.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAo1qyKl04Gz4b6xtJYkzN-8ykvQ-qAACFxJrG6T-SFa0NKoGkzI5LQEAAwIAA3gAAz0E)

> 动态重定位的过程依赖于（ ）。Ⅰ. 可重定位装入程序 Ⅱ. 重定位寄存器 Ⅲ. 地址变换机构 Ⅳ. 目标程序
>
> - A. Ⅰ和Ⅱ
> - B. Ⅱ和Ⅲ
> - C. Ⅰ、Ⅱ和Ⅲ
> - D. Ⅰ、Ⅱ、Ⅲ和Ⅳ

错选为 D。不依赖于目标程序，目标程序本质是在磁盘里的东西，而且是逻辑地址。

![3.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAo5qyKmCDhsJaL4Sb3JUJqSUFGwYwAACGRJrG6T-SFa98AmfvN0-BwEAAwIAA3gAAz0E)

> 对重定位存储管理方式，应（ ）。
>
> - A. 在整个系统中设置一个重定位寄存器
> - B. 为每道程序设置一个重定位寄存器
> - C. 为每道程序设置两个重定位寄存器
> - D. 为每道程序和数据都设置一个重定位寄存器
>
> 在可变分区管理中，采用拼接技术的目的是（ ）。
>
> - A. 合并空闲区
> - B. 合并分配区
> - C. 增加主存容量
> - D. 便于地址转换

第 14 题错选为 B。重定位寄存器是寄存器，很贵，只有一个

第 15 题错选为 D。属于低级错误。

![3.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAo9qyKmUFmhZMCyBSmPMTB3mV_-liwACGhJrG6T-SFY-04uPMvnVWwEAAwIAA3gAAz0E)

> 在段式存储管理中，共享段表是用来实现（ ）的。
>
> - A. 多个进程共享同一段代码或数据
> - B. 多个进程共享同一段物理内存空间
> - C. 多个进程共享同一段逻辑地址空间
> - D. 多个进程共享同一段号

错选为 B。二刷也是错的。

![3.1.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApBqyKm0juKJby-KWG_bGaY4oBnIaQACGxJrG6T-SFY5A6BQN-lmhgEAAwIAA3gAAz0E)

> 采用分页或分段管理后，提供给用户的物理地址空间为（ ）。
>
> - A. 分页支持更大的物理地址空间
> - B. 分段支持更大的物理地址空间
> - C. 不能确定
> - D. 一样大

错选为 B。2 刷也是错的这题。

![3.1.39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApFqyKnFRQkPa48W5xcY1O-CEdX3SAACHBJrG6T-SFayG6t5sjCeaAEAAwIAA3gAAz0E)

> 某个操作系统对内存的管理采用页式存储管理方法，所划分的页面大小（ ）。
>
> - A. 要根据内存大小确定
> - B. 必须相同
> - C. 要根据 CPU 的地址结构确定
> - D. 要依据外存和内存的大小确定

错选为 D。分页式管理和外存无关，划分大小必须相同。

![3.1.41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApJqyKnWICfEE6MBIl3Gf8dD13X65gACHhJrG6T-SFYsIViK5gABjwgBAAMCAAN4AAM9BA)

> 对主存储器的访问，（ ）。
>
> - A. 以块（页）或段为单位
> - B. 以字节或字为单位
> - C. 随存储器的管理方案不同而异
> - D. 以用户的逻辑记录为单位

错选为 A。主存访问以 B，交换数据之类的是 A。

![3.1.48](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApNqyKnmm6wg7lkFFFaXbrGzPR5s2QACHxJrG6T-SFYXNlXPXkan9AEAAwIAA3gAAz0E)

> 操作系统采用分页存储管理方式，要求（ ）。
>
> - A. 每个进程拥有一张页表，且进程的页表驻留在内存中
> - B. 每个进程拥有一张页表，但只有执行进程的页表驻留在内存中
> - C. 所有进程共享一张页表，以节约有限的内存空间，但页表必须驻留在内存中
> - D. 所有进程共享一张页表，只有页表中当前使用的页面必须驻留在内存中，以最大限度地节省有限的内存空间

错选为 B。2 刷也是错的。2 的意思是说，对于一些进程（这些进程分别在就绪态，运行态，阻塞态），只有在运行态的页表在内存里，这句话显然是错误的。对于这些只要在就绪，运行，阻塞的，都有存一份 pcb 在内核里，pcb 里存着页表基址，只要运行的时候把值赋值给 cpu 的 PTR 寄存器就可以了。

辨析一下，PTR 寄存器是页表基址寄存器，基址寄存器其实等同于重定位寄存器。

![3.1.57](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApRqyKo6HCcY9n79PX6Bu7jS9RxmGAACIBJrG6T-SFZQIhh9k0ry6QEAAwIAA3gAAz0E)

> 在采用页式存储管理的系统中，逻辑地址空间大小为 256TB，页表项大小为 8B，页面大小为 4KB，则该系统中的页表应该采用（ ）级页表。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5
>
> 若对经典的页式存储管理方式的页表做出稍微改进，允许不同页表的页表项指向同一个页帧，则可能的结果有（ ）。
>
> - I. 可以实现对可重入代码的共享 / II. 只需修改页表项，就能实现内存“复制”操作 / III. 容易发生越界访问 / IV. 可以实现进程间通信
> - A. I、II、IV
> - B. II、III
> - C. I、II、III
> - D. 仅 I

第 57 题错选为 B。页面大小 4KB/表项大小 8B=512 个表项。256TB=2^48。2^48/4K=2^36，所以还剩下 36 个位置放页号。由于 512 个表项需要 9 位，恰好 4x9=36。

第 58 题错选为 C。并非越界访问（）这个简单想想就知道是错的了，你都越界了怎么访问这个页。
越界访问的意思是说 CPU 试图访问一个超出合法界限范围的内存地址，这道题指向同一个页帧，也不会发生指向 A 页帧取 B 页帧的情况（因为本来就是一个页帧）

![3.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApVqyKpmn90IMDm_tAHl9z2w4V5W7gACIRJrG6T-SFYtH_oemXjzagEAAwIAA3gAAz0E)

> 请求分页存储管理中，若把页面尺寸增大一倍而且可容纳的最大页数不变，则在程序顺序执行时缺页中断次数会（ ）。
>
> - A. 增加
> - B. 减少
> - C. 不变
> - D. 可能增加也可能减少

错选为 C。页面变大，存的东西变多了。

![3.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApZqyKqhMOtyAUbbsbUy0I9KQgABee8AAiISaxuk_khWu5bO__EVhSQBAAMCAAN4AAM9BA)

> 假设某个进程分配有 4 个页框，每个页框大小为 128 个字（一个整数占一个字）。进程的代码段正好可以存放在一页中，而且总是占用 0 号页框。数据会在其他 3 个页框中换进或换出。数组 X 为按行优先存储，则执行该进程会发生（ ）次缺页中断。
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
>
> 在配置了 TLB 的页式虚拟存储管理的系统中，假设 TLB 的命中率约为 75%，忽略访问 TLB 的时间，并且使用二级页表，则每次存取的平均访存次数是（ ）。
>
> - A. 1.25
> - B. 1.5
> - C. 1.75
> - D. 2

第 13 题见 2 刷，错选为 D。

第 14 题错选为 A。0.75+0.25(1+2)。把这道题理解成多级 cache 了。

![3.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApdqyKq1lLubU-FZUhxX8cBe142N2wACIxJrG6T-SFZphsm1zlL5UwEAAwIAA3gAAz0E)

> 考虑页面置换算法，系统有 m 个物理块供调度，初始时全空，页面引用串长度为 p，包含了 n 个不同的页号，无论用什么算法，缺页次数不会少于（ ）。
>
> - A. m
> - B. p
> - C. n
> - D. min(m, n)

错选为 D。详见 2 刷。

![3.2.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAphqyKrtlNEu3rBhv0wckW5OjGlAlAACJBJrG6T-SFZo3wSn4O8MogEAAwIAA3gAAz0E)

> 设主存容量为 1MB，外存容量为 400MB，计算机系统的地址寄存器有 32 位，那么虚拟存储器的最大容量是（ ）。
>
> - A. 1MB
> - B. 401MB
> - C. 1MB + 2³²MB
> - D. 2³²B

错选为 B。虚拟存储不依赖物理存储。

![3.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAplqyKr-mfsSOgvSt0ZcPX8KxXs_qgACJRJrG6T-SFax53tL4t2M3AEAAwIAA3gAAz0E)

> LRU 页面置换算法软件实现开销高的直接原因是（ ）。
>
> - A. 需要硬件的特殊支持
> - B. 需要特殊的中断处理程序
> - C. 需要在页表中标明特殊的页类型
> - D. 需维护访问历史并遍历查找

棍母，错选为 A，详见 2 刷。

![3.2.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAppqyKtTkPuF2nxee7jJpyWrah2sRAACJhJrG6T-SFYrv3fnfTQ38wEAAwIAA3gAAz0E)

> 下列选项中，（ ）不是页面换进换出效率的影响因素。
>
> - A. 页面置换算法
> - B. 已修改页面写回磁盘的频率
> - C. 磁盘数据读入内存的频率
> - D. CPU 与内存交换的速度

错选为 B。对于 B，感觉不可以从文件系统的角度理解。文件系统那个角度是关闭文件，关闭文件不等于立刻把文件写回，但是这里是换页面，写回速度越慢可能会导致换的速度越慢。CPU 和内存交换的速度是 CPU 和内存之间的关系，而题目里是内存和磁盘之前的关系。

![3.2.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAptqyKtlMmzekBuFX0xG5rsg38t1YwACJxJrG6T-SFaEarwpFZa49gEAAwIAA3gAAz0E)

> 【2013 统考真题】若用户进程访问内存时产生缺页，则在下列选项中，操作系统可能执行的操作是（ ）。
>
> - I. 处理越界错 / II. 置换页 / III. 分配内存
> - A. 仅 I、II
> - B. 仅 II、III
> - C. 仅 I、III
> - D. I、II 和 III

错选为 D。2 刷也错了。

![3.2.49](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACApxqyKt4bZZWhZ4SywkJXAiY3JRCjwACKBJrG6T-SFYiBwq4I86jjAEAAwIAA3gAAz0E)

> 【2015 统考真题】在请求分页系统中，页面分配策略与页面置换策略不能组合使用的是（ ）。
>
> - A. 可变分配，全局置换
> - B. 可变分配，局部置换
> - C. 固定分配，全局置换
> - D. 固定分配，局部置换

错选为 D。本题为概念背诵。固定分配了再去别人那里抢位置，棍母了。

### OS 王道选择题 1 刷第 4 章

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAp1qyKubbG1v1p6YUl7l2WXSU9nbhAACKRJrG6T-SFaV1IA9Fn1eYAEAAwIAA3gAAz0E)

> FAT32 的文件目录项不包括（ ）。
>
> - A. 文件名
> - B. 文件访问权限说明
> - C. 文件控制块的物理位置
> - D. 文件所在的物理位置

本题错选为 B。FAT32 所有的信息都包含在其本身，而不需要包括其本身的物理位置。

![4.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAp5qyKuttrewVUwQo9JCgNr1_o5vhgACKhJrG6T-SFZrq7vnOj8IgwEAAwIAA3gAAz0E)

> 下列选项中，（ ）不是为了提升文件系统性能的操作。
>
> - A. 目录项分解
> - B. 文件高速缓存
> - C. 磁盘调度算法
> - D. 异步 I/O

本题错选为 A。异步 IO 是节约 CPU 的。

![4.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAp9qyKu7P0saQg4BBc90VnI4lBTF-gACKxJrG6T-SFagVaCDOzhevQEAAwIAA3gAAz0E)

> 在一个采用索引节点的文件系统中，目录项分为文件名和索引节点编号两部分，文件名和索引节点编号各占 8B，盘块大小为 1KB，采用一级目录，假定文件目录中有 3200 个目录项，则读入一个文件的索引节点平均需要（ ）次访问磁盘。
>
> - A. 25
> - B. 26
> - C. 51
> - D. 52

本题错选为 A，需要注意读入，两个过程，open 和 read。

![4.2.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqBqyKvLgcvnsIIfpeyhdKpqUZbjLAACLBJrG6T-SFaX9EMcFJZvlwEAAwIAA3gAAz0E)

> 设有一个记录文件，采用隐式链接分配方式，逻辑记录的固定长度为 100B，在磁盘上存储时采用记录成组分解技术。盘块长度为 512B。若该文件的目录项已经读入内存，则对第 22 个逻辑记录完成修改后，共启动了磁盘（ ）次。
>
> - A. 3
> - B. 4
> - C. 5
> - D. 6

本题没做出来。首先是 open 过程，本题已经 open 好了，然后是 write，第 22 个逻辑记录也就是 5，5，5，5，2，启动五次，然后写，写完要写回去。

![4.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqFqyKva0cjmR7lLTxwLnNQKnejzXQACLRJrG6T-SFZehIRyVFmSsQEAAwIAA3gAAz0E)

> 某文件系统采用显[?]链接分配方式组织文件，磁盘块大小为 4KB，一个簇包含两个磁盘块，操作系统以簇为单位进行盘块分配。已知系统支持的最大文件长度为 512MB，若 FAT 的每个表项仅存放簇号，则 FAT 表占用的空间大约是（ ）。
>
> - A. 64KB
> - B. 128KB
> - C. 512KB
> - D. 1024KB

本题错选为 A。采用 FAT+ 显示链接分配，也就意味着该文件系统采用 FAT。FAT 文件系统的特点是臃肿，只有数据信息不在 FAT 里。512MB/8KB=2^16 个，即 16bit 来记录，一条文件信息需要记录 2B 的数据。由于 FAT 表必须连续且不可拆，所以最多有 2^16 条文件记录，所以 2^16×2B=128KB。

![4.2.38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqJqyKvs3_TxQkarVkmDE6Ammg6ahgACLhJrG6T-SFYj3MS5L2xPhQEAAwIAA3gAAz0E)

> 某用户程序发起 open() 系统调用，下列对该过程的描述中最准确的是（ ）。
>
> - A. open() 调用必然导致文件 I/O
> - B. open() 调用的参数含有需要打开的文件的文件名
> - C. open() 调用完成后，系统打开文件表将增加一个表目
> - D. open() 调用的参数的文件名不同时，必然会打开不同的文件实体

本题错选为 C。

![4.2.40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqNqyKv8wqgHnEFujKYoRCmTlielfgACLxJrG6T-SFZnygGsXUrqugEAAwIAA3gAAz0E)

> 读文件操作的正确次序应该是（ ）。
>
> - I. 向设备驱动程序发出 I/O 请求，完成数据交换工作 / II. 按存取控制说明检查访问的合法性 / III. 根据目录项中该文件的逻辑和物理组织形式，将逻辑记录号转换成物理块号 / IV. 按文件描述符在打开文件表中找到该文件的目录项
> - A. II、IV、III、I
> - B. IV、II、III、I
> - C. IV、III、II、I
> - D. II、IV、I、III
>
> 下列关于文件与文件系统的说法中，错误的是（ ）。
>
> - I. 一个文件在同一系统中、不同的存储介质上的复制文件，应采用同一种物理结构 / II. 对一个文件的访问，常由用户访问权限和用户优先级共同限制 / III. 文件系统采用树形目录结构后，对于不同用户的文件，其文件名应该不同 / IV. 为防止系统故障造成系统内文件受损，常采用存取控制矩阵方法保护文件
> - A. II
> - B. I、III
> - C. I、III、IV
> - D. 全选

第 40 题错选为 B。先检查合法性然后再 read；发动请求交换后然后再将得到的物理转换为逻辑。

第 41 题错选为 C。经典错误。用户优先级和调度那块有关。

![4.2.44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqRqyKwRSD3EQGpjhYh-WT-rcqZIuwACMBJrG6T-SFbVCZj_4ldj-QEAAwIAA3gAAz0E)

> 设文件 F1 的当前引用计数值为 1，先建立 F1 的硬链接文件 F2，再建立 F2 的符号链接文件 F3。现有两个进程 P₁ 和 P₂ 分别打开了 F1 和 F2，则下列说法中正确的是（ ）。
>
> - A. 两次打开操作只涉及一次文件索引节点的磁盘读取操作
> - B. 进程 P₁ 和 P₂ 对 F1 具有相同的访问权限
> - C. 若删除文件 F3，则 F2 的引用计数值减 1
> - D. 进程 P₁ 读取 F1 时需要提供 F1 的绝对路径作为系统调用参数

本题错选为 B。

![4.2.47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqVqyKwgYGIevo1BIr1O8S0cJiga7gACMRJrG6T-SFbiJrNuMdW8IwEAAwIAA3gAAz0E)

> 对一个文件的访问，常由（ ）共同限制。
>
> - A. 用户访问权限和文件属性
> - B. 用户访问权限和用户优先级
> - C. 优先级和文件属性
> - D. 文件属性和口令

本题错选为 B。

![4.2.56](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqZqyKwwlI0WBCJyUH9qDYoQkXxPCgACMhJrG6T-SFaL0el8qYa_GwEAAwIAA3gAAz0E)

> 【2013 统考真题】若某文件系统索引节点（inode）中有直接地址项和间接地址项，则下列选项中，与单个文件长度无关的因素是（ ）。
>
> - A. 索引节点的总数
> - B. 间接地址索引的级数
> - C. 地址项的个数
> - D. 文件块大小

本题没选出来。采用 inode 结点也就意味着采用 UFS 文件系统，UFS 文件系统的 inode 结点存储在文件系统分配的地方，通常是磁盘刚开始那块。Inode 结点总数意味着这个操作系统最多拥有多少个文件数量，所以 A 无关。对于 B，间接地址索引的级数越多，意味着乘级越大；对于 C，地址项越多意味着对于单个级别有越大的索引范围；对于 D，文件块越大可以存储的文件越多。

![4.2.60](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqdqyKxCTC4_LoK-k5ivKinWWekAAbgAAjMSaxuk_khW-pBlMxkKYWUBAAMCAAN4AAM9BA)

> 【2017 统考真题】某文件系统中，针对每个文件，用户类别分为 4 类：安全管理员、文件主、文件主的伙伴、其他用户；访问权限分为 5 种：完全控制、执行、修改、读取、写入。若文件控制块中用二进制位串表示文件权限，为表示不同类别用户对一个文件的访问权限，则描述文件权限的位数至少应为（ ）。
>
> - A. 5
> - B. 9
> - C. 12
> - D. 20

本题错选为 A。文件要完全表示。

![4.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqhqyKxULxulSsYyAsvTf-MpkgtlYQACNhJrG6T-SFbOm6jIYbYeAwEAAwIAA3gAAz0E)

> 若用 8 个字（字长 32 位）组成的位示图管理内存，即位示图有 8 行、32 列，行号和列号均从 1 开始，则块号为 100 的内存块所对应位示图的位置是（ ）。
>
> - A. 字号为 3，位号为 5
> - B. 字号为 4，位号为 4
> - C. 字号为 3，位号为 4
> - D. 字号为 4，位号为 5

本题没选出来。对于位示图，100=32+32+32+4，即 B。

![4.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqlqyKxkzZ8FITMf-vTUdVraqA_zCQACNxJrG6T-SFYBVI6h6hVfMQEAAwIAA3gAAz0E)

> 【2015 统考真题】文件系统用位图法表示磁盘空间的分配情况，位图存于磁盘的 32 - 127 号块中，每个盘块占 1024B，盘块和块内字节均从 0 开始编号。假设要释放的盘块号为 409612，则位图中要修改的位所在的盘块号和块内字节序号分别是（ ）。
>
> - A. 81，1
> - B. 81，2
> - C. 82，1
> - D. 82，2
>
> 【2019 统考真题】下列选项中，可用于文件系统管理空闲磁盘块的数据结构是（ ）。
>
> - I. 位图 / II. 索引节点 / III. 空闲磁盘块链 / IV. 文件分配表（FAT）
> - A. 仅 I、II
> - B. 仅 I、III、IV
> - C. 仅 I、III
> - D. 仅 II、III、IV

第 14 题错选为 D。

第 15 题没做出来。本题是选分配空闲的数据结构，传统的分配方式有空闲表法，空闲链表法，位示图和成组链表法，显然 1 和 3 正确。由于 FAT 表项与磁盘块一一对应，所以也可以记录空块。索引节点是专门为了实现文件名和文件信息发分开的数据结构，存储文件描述信息。

### OS 王道选择题 1 刷第 5 章

![5.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqpqyKx-taObiPkN9Pl0C_ZY2t_fowACOBJrG6T-SFZApiqxAVFWagEAAwIAA3gAAz0E)

> 在设备控制器中用于实现设备控制功能的是（ ）。
>
> - A. CPU
> - B. 设备控制器与处理器的接口
> - C. I/O 逻辑
> - D. 设备控制器与设备的接口

本题错选为 D。设备控制器=IO 设备=IO 接口。

![5.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqtqyKyVEWWN2DtAAAGnR59hvXL5JuwAAjkSaxuk_khWFgt45A46AaoBAAMCAAN4AAM9BA)

> DMA 传输前需要进行预处理，传输后需要进行后处理，则下列说法中正确的是（ ）。
>
> - A. 预处理程序运行在用户态，后处理程序运行在内核态
> - B. 负责预处理和后处理程序的进程都是请求 I/O 的进程
> - C. 预处理阶段不需要 CPU 参与，后处理阶段需要 CPU 参与
> - D. 预处理阶段请求 I/O 的进程处于运行态，后处理阶段处于阻塞态

本体错选为 B。见 2 刷。

![5.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAqxqyK0OqDdB378FW1qggw0cFh_QrAACOxJrG6T-SFa9uNj0EdmaHwEAAwIAA3gAAz0E)

> 将系统调用参数翻译成设备操作命令的工作由（ ）完成。
>
> - A. 用户层 I/O
> - B. 设备无关的操作系统软件
> - C. 中断处理
> - D. 设备驱动程序

本题错选为 D。参数翻译为操作命令由设备无关性软件完成，驱动程序将这些命令翻译成操作系统听得懂的东西。

![5.1.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAq1qyK0glm7vPwpbCr7R2abCj2PR7QACPBJrG6T-SFZCSEEAAdZq3ZYBAAMCAAN4AAM9BA)

> 【2010 统考真题】本地用户通过键盘登录系统时，首先获得键盘输入信息的程序是（ ）。
>
> - A. 命令解释程序
> - B. 中断处理程序
> - C. 系统调用服务程序
> - D. 用户登录程序
>
> 【2011 统考真题】用户程序发出磁盘 I/O 请求后，系统的正确处理流程是（ ）。
>
> - A. 用户程序→系统调用处理程序→中断处理程序→设备驱动程序
> - B. 用户程序→系统调用处理程序→设备驱动程序→中断处理程序
> - C. 用户程序→设备驱动程序→系统调用处理程序→中断处理程序
> - D. 用户程序→设备驱动程序→中断处理程序→系统调用处理程序

第 23 题错选为 D。见 2 刷的流程分析。

第 24 题错选为 C，见 2 刷的流程分析。

![5.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAq5qyK00Wg9wT2tfhRPbJJ0EOaXCawACPRJrG6T-SFYgG1KW3PhqIgEAAwIAA20AAz0E)

> 设备的独立性是指（ ）。
>
> - A. 设备独立于计算机系统
> - B. 系统对设备的管理是独立的
> - C. 用户编程时使用的设备与实际使用的设备无关
> - D. 每台设备都有唯一的编号

本体错选为 B。设备独立性可以理解为设备独立性软件那块。

![5.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAq9qyK1NiYyUcNl-QsYZDm8hOCiSrwACPhJrG6T-SFaV88IlfsVQsAEAAwIAA3gAAz0E)

> 设从磁盘将一块数据传送到缓冲区所用的时间为 80μs，将缓冲区中的数据传送到用户区所用的时间为 40μs，CPU 处理一个数据块所用的时间为 30μs。若有多块数据需要处理，并采用单缓冲区传送某磁盘数据，则处理一块数据所用的总时间为（ ）。
>
> - A. 120μs
> - B. 110μs
> - C. 150μs
> - D. 70μs

本题错选为 C。使用单缓冲，本题显然情景为稳定的时候，而不是一开始的时候。

![5.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArBqyK1jrdGAVzDyMjCP3YAoA48aeQACPxJrG6T-SFYem2jm3piruQEAAwIAA3gAAz0E)

> 考虑单用户计算机上的下列 I/O 操作，需要使用缓冲技术的是（ ）。I. 图形用户界面下使用鼠标 II. 多任务操作系统下的磁盘驱动器（假设没有设备预分配）III. 包含用户文件的磁盘驱动器 IV. 使用存储器映射 I/O，直接和总线相连的图形卡
>
> - A. I、III
> - B. II、IV
> - C. II、III、IV
> - D. 全选

本体错选为 B。

![5.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArFqyK10luGFKprxzETazZvFYntsZAACQRJrG6T-SFalbEdbOVG3iwEAAwIAA3gAAz0E)

> 虚拟设备是靠（ ）技术来实现的。
>
> - A. 通道
> - B. 缓冲
> - C. SPOOLing
> - D. 控制器

本题错选为 B。

![5.2.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArJqyK2L8DKjRYlmpkhWzWuXWi4ZQwACQhJrG6T-SFav8A6NyNccUQEAAwIAA3gAAz0E)

> 采用 SPOOLing 技术的计算机系统，外围计算机需要（ ）。
>
> - A. 一台
> - B. 多台
> - C. 至少一台
> - D. 0 台
>
> SPOOLing 系统由（ ）组成。
>
> - A. 预输入程序、井管理程序和缓输出程序
> - B. 预输入程序、井管理程序和井管理输出程序
> - C. 输入程序、井管理程序和输出程序
> - D. 预输入程序、井管理程序和输出程序

第 22 题错选为 C。

第 23 题错选为 C。背书题，为 A。

![5.2.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArNqyK2f3Bn40hSsX7wme45rcim5ewACQxJrG6T-SFYKcGpMWkzhhgEAAwIAA3gAAz0E)

> 下面关于 SPOOLing 系统的说法中，正确的是（ ）。
>
> - A. 构成 SPOOLing 系统的基本条件是有外围输入机与外围输出机
> - B. 构成 SPOOLing 系统的基本条件仅是要[?]高速的大容量硬盘作为输入井和输出井
> - C. 当输入设备忙时，SPOOLing 系统中的用户程序暂停执行，待 I/O 空闲时再被唤醒执行输出操作
> - D. SPOOLing 系统中的用户程序可以随时将输出数据送到输出井中，待输出设备空闲时再由 SPOOLing 系统完成数据的输出操作

本题错选为 A。

![5.2.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArRqyK2v9SgD5p5z6tcdOqB5sFVPGgACRBJrG6T-SFbNtLtnE4jv1gEAAwIAA3gAAz0E)

> 下列设备管理工作中，适合由设备独立性软件来完成的有（ ）。I. 向设备寄存器写命令 II. 检查用户是否有权使用设备 III. 将二进制整数转换成 ASCII 码格式打印 IV. 缓冲区管理
>
> - A. I、II 和 III
> - B. II、III 和 IV
> - C. II 和 IV
> - D. I、III 和 IV

本题错选为 D。设备独立性软件做的事情是将用户操作转换为设备操作。向设备寄存器内写命令是将设备操作转换为操作系统操作。对于 3 是属于用户层软件做的事情。

![5.2.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArVqyK3Gjm3Xix3qF8Af5k5_fw-mYQACRhJrG6T-SFZCScCk3etYkgEAAwIAA3gAAz0E)

> 对设备驱动程序的处理过程进行排序，正确的处理顺序是（ ）。①对服务请求进行校验 ②传送必要的参数 ③启动 I/O 设备 ④将抽象要求转化为具体要求 ⑤检查设备的状态
>
> - A. ①④⑤②③
> - B. ④①⑤②③
> - C. ①④②⑤③
> - D. ④①②⑤③

本题错选为 D。

![5.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArZqyK3YwdMxKIgCG9rzXpVYXl5_xgACRxJrG6T-SFYvjjobzbdWbQEAAwIAA3gAAz0E)

> 文件系统和整个磁盘的关系是（ ）。
>
> - A. 没有磁盘就没有文件系统
> - B. 文件系统的组织信息放在磁盘上，这些信息和代码合在一起形成文件系统
> - C. 文件系统就是整个磁盘
> - D. 没有关系

本体错选为 A。

![5.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArdqyK306VnCP7LWnr_2ujRHpxQS8AACSBJrG6T-SFZprx8r79Qx-gEAAwIAA3gAAz0E)

> 既可以顺序读/写，又可以按任意次序读/写的存储器有（ ）。I. 光盘 II. 磁带 III. U 盘 IV. 磁盘
>
> - A. II、III、IV
> - B. I、III、IV
> - C. III、IV
> - D. 仅 IV

本题错选为 C，注意光盘，例如选特定动画片的集

![5.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArhqyK4HGLcPtUm62R7y-zVcWuXYlgACSRJrG6T-SFYkfmriXA0fbAEAAwIAA3gAAz0E)

> 下列各种算法中，（ ）算法和其他算法存在根本的不同。
>
> - A. SCAN
> - B. FCFS
> - C. C-LOOK
> - D. CLOCK

本题错选为 B。显然 CLOCK 是内存管理的东西。

![5.3.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACArlqyK4ZmgtczIXeW3Kzby_ASx10jwACSxJrG6T-SFYF1sTqDFKO4QEAAwIAA3gAAz0E)

> 假设磁盘有 100 个柱面，每个柱面上有 8 个磁道，每个磁道有 8 个扇区。文件 A 含有 6400 个逻辑记录，逻辑记录大小与扇区大小一致，该文件以顺序结构的形式存放在磁盘上。文件的第 0 个逻辑记录存放在磁盘地址（0 号柱面、0 号盘面、0 号扇区）中，则磁盘地址（78 号柱面、6 号盘面、6 号扇区）中存放了该文件的第（ ）个逻辑记录。
>
> - A. 5045
> - B. 5046
> - C. 5047
> - D. 5048
>
> 已知某磁盘的平均转速为 r 秒/转，平均寻道时间为 T 秒，每个磁道可以存储的字节数为 N，现向该磁盘读/写 b 字节的数据，采用随机寻道的方法，每道的所有扇区组成一个簇，其平均访问时间是（ ）。
>
> - A. (r + T)b/N
> - B. b/NT
> - C. (b/N + T)r
> - D. bT/N + r

第 16 题错选为 C。

第 17 题没做出来。
