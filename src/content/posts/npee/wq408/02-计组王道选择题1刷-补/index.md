---
title: 计组王道选择题 1 刷（补）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计组王道选择题 1 刷（补）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.02
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计组王道选择题 1 刷（补）

### 计组王道选择题 1 刷第 1 章

![1.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhBqx74qXxEDY63kUIb8GyY-_oofdAACHBNrGz_BQFYBv7FfOvSdoAEAAwIAA3gAAz0E)

> 计算机系统采用层次化结构，从最上层的应用程序到最底层的硬件，其层次化层次自上而下依次为（ ）。
>
> - A. 高级语言虚拟机→操作系统虚拟机→汇编语言虚拟机→机器语言机器
> - B. 高级语言虚拟机→汇编语言虚拟机→机器语言机器→操作系统虚拟机
> - C. 高级语言虚拟机→汇编语言虚拟机→操作系统虚拟机→机器语言机器
> - D. 操作系统虚拟机→高级语言虚拟机→汇编语言虚拟机→机器语言机器
>
> 下列关于计算机系统层次结构的说法中，正确的是（ ）。
>
> - A. 高级语言程序经编译生成汇编语言后，可直接在机器上执行
> - B. ISA 仅定义指令功能，不涉及硬件实现细节
> - C. 同一 ISA 可由不同微体系结构实现，软件无须修改即可兼容
> - D. 高级语言中的每条语句与 ISA 的机器指令一一对应

第 5 题错选为 B。本题没有搞清楚谁为谁提供服务，纯凭感觉选的。对于这道题，正确的理解方式应该是 2 刷那样，谁为谁提供服务。机器语言是硬件本身的，操作系统是最接近硬件的一层软件。

第 6 题错选为 B。ISA 是指令体系结构，是计算机软/硬件之间的接口，而微体系结构是处理器内部的硬件组织方式，用于实现 ISA 定义的功能。如果说 ISA 定义了做什么，那么微架构定义了怎么做。以 x86 为例，不同的处理器遵循同一套规范，但是内部组织方式差别显著。根据课本 p6 的材料再来看这道题：对于 A，显然是错误的，机器上执行的只有机器指令；对于 B，ISA 定义指令功能，定义了指令格式，操作类型，寻址方式，可访问寄存器等，因此强关联硬件；C 由材料可知；对于 D，即便是解释类语言，也并非一一对应，一条可能会被翻译为多条机器指令。

![1.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhFqx75xpIHo-SvV4oMPbhRsEdwBygACHRNrGz_BQFZMGjkYJBt5MwEAAwIAA3gAAz0E)

> 计算机中，CPU 的 CPI 与下列（ ）因素无关。
>
> - A. 时钟频率
> - B. 系统结构
> - C. 指令集
> - D. 计算机组织

错选为 B。CPI 指的是一条指令平均需要多少时钟周期，显然和时钟频率无关。

![1.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhJqx76FkLCZdzoSZ5hwN0y_h_8a5wACHhNrGz_BQFa1FI5lAmgIkwEAAwIAA3gAAz0E)

> 下列可用于评价计算机系统性能的指标是（ ）。
>
> - Ⅰ. MIPS / Ⅱ. IPC / Ⅲ. CPI / Ⅳ. 字长
> - A. Ⅰ、Ⅲ
> - B. Ⅰ、Ⅲ 和 Ⅳ
> - C. Ⅰ、Ⅱ 和 Ⅲ
> - D. 全部

错选为 C。原因和 2 刷时一致，没有理解字长也是评价计算机系统性能的指标。

### 计组王道选择题 1 刷第 2 章

![2.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhNqx767Lyr1C7wP-NYcVjaMMx8GmgACHxNrGz_BQFYt916U1ZFOzgEAAwIAA3gAAz0E)

> 关于模 4 补码，下列说法正确的是（ ）。
>
> - A. 模 4 补码和模 2 补码不同，它不容易检查乘除运算中的溢出问题
> - B. 每个模 4 补码存储时只需要一个符号位
> - C. 存储每个模 4 补码需要两个符号位
> - D. 模 4 补码，在算术与逻辑单元中为一个符号位

本题错选为 C。模 4 补码指的是两个符号位进行运算，对于这个细节，尤其需要注意在存储的时候不可能出现 10，01 等情况，存储的符号是确定的，也就是必然为 00 或者 11，因此只需要存储 1 位即可。

![2.2.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhRqx77fcregJ1fkcyt8-_9F8ISzEAACIBNrGz_BQFYjP6UnwQGndQEAAwIAA3gAAz0E)

> 某计算机字长为 8 位，CPU 中有一个 8 位加法器。已知无符号数 x=69，y=38，若在该加法器中计算 x-y，则加法器的两个输入端信息和输入的低位进位信息分别为（ ）。
>
> - A. 0100 0101、0010 0110、0
> - B. 0100 0101、1101 1001、1
> - C. 0100 0101、1101 1010、0
> - D. 0100 0101、1101 1010、1
>
> 某计算机中有一个 8 位加法器，有符号整数 x 和 y 的机器数用补码表示，[x]补=F5H，[y]补=7EH，若在该加法器中计算 x-y，则加法器的低位进位输入信息和运算后的溢出标志 OF 分别是（ ）。
>
> - A. 1、1
> - B. 1、0
> - C. 0、1
> - D. 0、0

第 18 题错选为 C。本题没有理解加法器的底层原理，对于加法器而言，-y 只取反码，而最后的 +1 靠的是 cin 前一位的进位。

第 19 题错选为 C。与 18 题一样的错误。

![2.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhVqx7733USZSctBMxU0wneN2ELsXAACIRNrGz_BQFat0KVGcuZo2QEAAwIAA3gAAz0E)

> 某 8 位计算机中，x 和 y 是两个有符号整数，用补码表示，[x]补=44H，[y]补=DCH，则 x-2y 的机器数及相应的溢出标志 OF 分别是（ ）。
>
> - A. 8CH、1
> - B. 8CH、0
> - C. 68H、1
> - D. 68H、0

第 21 题错选为 B。DCH 即 1101 1100，×2 即 1011 1000，-2y 的补码也就是 0100 1000，所以 0100 0100H+0100 1000H=1000 1100H。由于原来是两个正数相加，却得到了负数，所以溢出（根据草稿来看其实是算对了，但是想错了）。

![2.2.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhZqx78UWg--XLfeoBxFkYFZ67xdKwACJBNrGz_BQFZDgnqfyVfFUAEAAwIAA3gAAz0E)

> 【2018 统考真题】假定有符号整数采用补码表示，若 int 型变量 x 和 y 的机器数分别是 FFFF FFDFH 和 0000 0041H，则 x、y 的值及 x-y 的机器数分别是（ ）。
>
> - A. x=-65，y=41，x-y 的机器数溢出
> - B. x=-33，y=65，x-y 的机器数为 FFFF FF9DH
> - C. x=-33，y=65，x-y 的机器数为 FFFF FF9EH
> - D. x=-65，y=41，x-y 的机器数为 FFFF FF96H

本题错选为 D。？我自己都看不懂我自己的草稿了。首先根据 FFFF FFDFH 可知 x=-1-32=-33，y=65……我大概知道我为什么错了，直接把 y 当 41 算了，导致全错了。

![2.2.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhhqx78v8J5sGQHwwi9Mcp3NEAr5vwACJhNrGz_BQFZhhNvYBp4rnAEAAwIAA3gAAz0E)

> 【2018 统考真题】减法指令 "sub R1, R2, R3" 的功能为 "(R1)-(R2)→R3"，该指令执行后将生成进位/借位标志 CF 和溢出标志 OF。若 (R1) = FFFF FFFFH，(R2) = FFFF FFF0H，则该减法指令执行后，CF 与 OF 分别为（ ）。
>
> - A. CF=0，OF=0
> - B. CF=1，OF=0
> - C. CF=0，OF=1
> - D. CF=1，OF=1

本题错选为 B。FFFF FFFFH=-1,FFFF FFF0=-1-15=-16。OF=0，而对于 CF 也为 0。本题本质上是没有理解 CF 到底是怎么计算的。

![2.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhlqx79d3ttTD1Dqwu4hF4CIuc5kbAACJxNrGz_BQFb53m3Ffxz-QAEAAwIAA3gAAz0E)

> 若某单精度浮点数、某原码、某补码、某移码的 32 位机器数均为 0xF0000000，则这些数从大到小的顺序是（ ）。
>
> - A. 浮原补移
> - B. 浮移补原
> - C. 移原补浮
> - D. 移补原浮
>
> 采用规格化的浮点数最主要是为了（ ）。
>
> - A. 增加数据的表示范围
> - B. 方便浮点运算
> - C. 防止运算时数据溢出
> - D. 增加数据的表示精度

第 7 题错选为 C。原码≠无符号数。

第 8 题错选为 B。与非规格浮点数相比，D 更对，但是为什么呢？因为规格化的意思就是把高位 0 抹去，只让有限的位数用来表述数字。

### 计组王道选择题 1 刷第 3 章

![3.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhtqx7-cZg4HSFnzJfIUV4ds1OFWwwACKBNrGz_BQFZqrvlZgy9mnQEAAwIAA3gAAz0E)

> 下列关于多级存储系统的说法中，正确的有（ ）。
>
> - Ⅰ. 多级存储系统是为了降低存储成本 / Ⅱ. 虚拟存储器中主存和辅存之间的数据调动对任何程序员是透明的 / Ⅲ. CPU 只能与 Cache 直接交换信息，CPU 与主存交换信息也需要经过 Cache
> - A. 仅Ⅰ
> - B. 仅Ⅰ和Ⅱ
> - C. Ⅰ、Ⅱ和Ⅲ
> - D. 仅Ⅱ
>
> 若某存储器存取周期为 250ns，每次读出 16 位，该存储器的数据传输速率是（ ）。
>
> - A. 4×10^6B/s
> - B. 16MB/s
> - C. 8×10^6B/s
> - D. 8×2^20B/s

第 10 题错选为 C。对于 1，显然正确，这就是 cache 思想；对于 2，虚拟存储器中主存和辅存之间的数据调动对于机器级语言程序员是透明的，但是再往上就不是了；对于 3，CPU 与主存交换信息可以不经过 cache，例如直写法。

第 11 题直接看的答案。每次读出 16b=2B，由于存储周期是 250ns，1s 内由 1s/250ns=1/(250×10^-9)=10^9/250=4×10^6 个周期，所以 4×10^6×2B=8×10^6B/s，也就是 C。

![3.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAhxqx7_LjzCf79HNzwEJ_KVFFQpD-QACKRNrGz_BQFZOAAEfiOGygWMBAAMCAAN4AAM9BA)

> 下列关于存储器的说法中，不正确的是（ ）。
>
> - A. 随机存储器和只读存储器不可以统一编址
> - B. 在访问随机存储器时，访问时间与存储单元的物理位置无关
> - C. 随机存储器（RAM）芯片可随机存取信息，掉电后信息会丢失
> - D. 只读存储器（ROM）芯片可随机存取信息，掉电后信息不会丢失

本题错选为 B。属于低级错误。对于 A，随机存储器因为需要随机访问，而不应该挑选到只读存储器。深度分析一下，随机存储器比如说 RAM，只读存储器比如说 ROM；统一编址的意思是 CPU 不需要区分芯片到底是 RAM 还是 ROM，而是看成一个连续统一的内存地址，只需要将某一个地址段分出给 ROM，另外的地址段分配出去给 RAM，对 CPU 来说，它只需要发出一个地址，地址译码器电路就会自动帮 CPU 找到对应的芯片去读取数据。CPU 用的是完全相同的读写指令。

不需要统一编址的概念来源于 IO 设备。IO 设备有两种编制方式，一种是独立编址，例如 x86，地址可以相同，但由于属于不同的地址空间，所以不会发生冲突。CPU 通过专门的 IO 指令例如 in，out 来访问 IO 端口；统一编址将部分主存空间分配给 IO 端口，使 IO 端口与内存单元共享哦同一地址空间，CPU 使用普通的访存指令即可访问 IO 设备。

![3.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAh1qx8AIXHwvFyoYUFhjJHBCpui8jgACKxNrGz_BQFYo3j85whR2QwEAAwIAA3gAAz0E)

> 某一 DRAM 芯片，采用地址复用技术，容量为 1024×8 位，该芯片的地址引脚和数据引脚总数至少是（ ）。
>
> - A. 18
> - B. 13
> - C. 8
> - D. 17

本题错选为 A。DRAM 采用地址复用技术，所以 8 数据线 +10/2 地址线=13。

![3.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAh5qx8CG93bHFN3yZ9FtKd6TCzcUFQACLhNrGz_BQFbqgjpmgoTKqwEAAwIAA20AAz0E)

> 下面有关 ROM 和 RAM 的叙述中，错误的是（ ）。
>
> - A. RAM 是可读可写存储器，ROM 是只读存储器
> - B. ROM 和 RAM 都采用随机访问方式进行读/写
> - C. 系统的主存由 RAM 和 ROM 组成
> - D. 系统的主存都用 DRAM 芯片实现
>
> 下列说法正确的是（ ）。
>
> - A. EPROM 是可改写的，因此可以作为随机存储器
> - B. EPROM 是可改写的，但不能作为随机存储器
> - C. EPROM 是不可改写的，因此不能作为随机存储器
> - D. EPROM 只能改写一次，因此不能作为随机存储器

第 12 题错选为 C。主存不包括 cache，而对于主存而言，其内部包含 BIOS，所以有一部分的 ROM。

第 13 题错选为 A。EPROM 采用的是电擦除，擦除次数有限，这里的随机存储器指的是 RAM，显然不可以作为 RAM。

![3.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAh9qx8DvKdjMPdCQ5tlaSCiTp3VoIAACMBNrGz_BQFa7aNWxcZzplQEAAwIAA3gAAz0E)

> 每推出新一代 DRAM 芯片，地址引脚至少增加 1 根，则容量至少提高到原来的（ ）倍。
>
> - A. 2
> - B. 4
> - C. 8
> - D. 16

本题错选为 A，DRAM 采用地址引脚复用技术，那么问题来了，如果数据线增加 8 根呢？和地址线是表示 2^n 不同，数据线表示的就是数据本身，也就是 8 位需要 8 根地址线，假设原本有 D 根地址线，那么也就是 (D+8)/D 倍。

![3.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiFqx8EI7jwK0OTwyjPutDEd1Rgq4gACMRNrGz_BQFbXzrvhdNvkkQEAAwIAA20AAz0E)

> 某 DRAM 芯片容量为 4M×4 位，下列说法中错误的是（ ）。
>
> - A. 芯片有 11 个地址引脚
> - B. 芯片内部的行地址生成器（刷新计数器）为 11 位
> - C. 芯片内部的行缓冲器容量为 2Kb
> - D. 芯片有 4 个数据引脚

本题错选为 A。对于 A，DRAM 采用地址引脚复用技术，即 2^22，所以是 11；对于 B，由于采用的是地址引脚复用，所以仅需发送两次信号即可；对于 C，一行是 2^11，而数据是 4b，所以是 8Kb；对于 D，显然正确。

![3.2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiJqx8EfJ7inCppG-ciURrPxNxKvfgACMhNrGz_BQFaOwLNNtx53QgEAAwIAA3gAAz0E)

> 下列关于单体多字存储器的说法中，不正确的是（ ）。
>
> - A. 单体多字存储器主要解决主存容量太小的问题
> - B. 单体多字存储器中，每个存储单元存储多个字
> - C. 指令与数据的连续存放有利于单体多字存储器提高主存的读/写速度
> - D. 过多的转移指令会严重影响单体多字存储器的工作效率

本题错选为。首先辨析一下以下概念：

低位交叉编制，轮流启动（流水线），把连续的内存地址交叉分配给不同的存储模块，CPU 发起连续的读取时间，不需要等待前一个模块彻底结束，只需要等很短的总线传输周期 t 就可以向下一个模块发送命令；

地位交叉编址，同时启动（并行），CPU 直接向这 4 个模块发起读指令，然后再同一个时刻读取完毕。

单体多字，在物理上的字是普通字的 m 倍。与低位交叉编址类似同时启动可以达到相似的效果。

然后捋一下交叉编址带来的情况（指的是同时启动），假设有 4 个模块，同时启动只能读取同一个行下的 4 个字，第 0 行包含地址 0、1、2、3，第 1 行包含地址 4、5、6、7。

1. 如果 CPU 突然要连续读取 4 个字，但是起始地址是 1，此时 4 个模块同时工作，读出第 0 行 0、1、2、3，并且丢弃 0，但是缺少 4，只能等 1 个 T 然后取 4、5、6、7，并且丢弃 5、6、7
2. 类比遍历二维数组，假设恰好要取 0、4、8、12，会被一直卡
3. 预取失败，也就是预测分支先执行了一些，结果浪费指令

![3.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiNqx8G5464nDrb_tXVOIHzjHmU6uwACMxNrGz_BQFYlfIj-JrTBigEAAwIAA3gAAz0E)

> 80386DX 是 32 位系统，以 4B 为编址单位，当在该系统中用 8KB（8K×8 位）的存储芯片构造 32KB 的存储体时，应完成存储器的（ ）设计。
>
> - A. 位扩展
> - B. 字扩展
> - C. 字位扩展
> - D. 字位均不扩展

本题错选为 C。显然这道题只需要字扩展即可。本题属于想当然的低级错误。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiRqx8MPxFbJiwYoHlq9jZxRqgVsVwACNRNrGz_BQFYK9YDPnv8WeQEAAwIAA3gAAz0E)

> 地址总线 A₀（高位）～A₁₅（低位），用 4K×4 位的存储芯片组成 16KB 存储器，则产生片选信号的译码器的输入地址线应该是（ ）。
>
> - A. A₂A₃
> - B. A₀A₁
> - C. A₁₂A₁₃
> - D. A₁₄A₁₅
>
> 若内存地址区间为 4000H～43FFH，每个存储单元可存储 16 位二进制数，该内存区域用 4 片存储芯片构成，构成该内存所用的存储芯片的容量是（ ）。
>
> - A. 512×16bit
> - B. 256×8bit
> - C. 256×16bit
> - D. 1024×8bit

第 6 题错选为 B。对于这道题尤其需要注意高位和低位。这道题 4K×4 位需要 16 个，也就是位扩展 + 字扩展，其中字扩展需要 4，而 16KB 总共占 2^14 个地址，所以也就是需要第 13 和第 14 个地址（从 1 开始算起），对应到题目里，也就是 A2 和 A3。本题错在想当然认为存储用满。

第 7 题错选为 A。43FFH+1-4000H=4400H-4000H=400H=0100 0000 0000H，也就是 2^10，注意题设采用的是 4 块芯片，所以 2^10×16bit/4，从而选择答案。本题错在把 4 当 4 算，而不是当成 16 进制去算。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiVqx8M90GupShB8AAG35yKq0hcz48sAAjcTaxs_wUBWefRy1D3rIdMBAAMCAAN4AAM9BA)

> 内存按字节编址，地址从 90000H 到 CFFFFH，若用存储容量为 16K×8 位的芯片构成该内存，至少需要的芯片数是（ ）。
>
> - A. 2
> - B. 4
> - C. 8
> - D. 16

第 6 题错选为 B。对于这道题尤其需要注意高位和低位。这道题 4K×4 位需要 16 个，也就是位扩展 + 字扩展，其中字扩展需要 4，而 16KB 总共占 2^14 个地址，所以也就是需要第 13 和第 14 个地址（从 1 开始算起），对应到题目里，也就是 A2 和 A3。本题错在想当然认为存储用满。

第 7 题错选为 A。43FFH+1-4000H=4400H-4000H=400H=0100 0000 0000H，也就是 2^10，注意题设采用的是 4 块芯片，所以 2^10×16bit/4，从而选择答案。本题错在把 4 当 4 算，而不是当成 16 进制去算。

![3.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAiVqx8M90GupShB8AAG35yKq0hcz48sAAjcTaxs_wUBWefRy1D3rIdMBAAMCAAN4AAM9BA)

> 内存按字节编址，地址从 90000H 到 CFFFFH，若用存储容量为 16K×8 位的芯片构成该内存，至少需要的芯片数是（ ）。
>
> - A. 2
> - B. 4
> - C. 8
> - D. 16

本题错选为 A。CFFFFH+1-90000H=D0000H-90000H=40000H=0100 0000 0000 0000 0000H，即 2^18，16K=2^14，所以需要 16 片。

![3.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAidqx8NuUv2DG2no6mfqiGnVf5OXtAACOBNrGz_BQFZ4X9jw3GmrNwEAAwIAA3gAAz0E)

> 【2010 统考真题】假定用若干 2K×4 位的芯片组成一个 8K×8 位的存储器，则地址 0B1FH 所在芯片的最小地址是（ ）。
>
> - A. 0000H
> - B. 0600H
> - C. 0700H
> - D. 0800H

本题不知道为啥放进来了，而可能是当时没思路。8K×8bit/2K×4bit=8 个，而其中每 2 个组成一个完整的字，所以实际上其实是 4 个 2K×8bit 的芯片，由于默认采用的是高位交叉编址，2^13-1=10 0000 0000 0000-1=1FFFH。也就是说 A12 和 A11 可以用来当符号位，所以根据 0000 1011 0001 1111H 来看，是 01 组，也就是第 2 组，第 2 组起始地址是 0000 1000 0000 0000H，也就是 0800H。

需要注意，这种题是求一个范围！

![3.4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAihqx8OJhCZhpsEJFk2jTfVsgXN_DgACORNrGz_BQFakkthwkJkB-wEAAwIAA20AAz0E)

> 下列关于磁盘驱动器的叙述中，错误的是（ ）。
>
> - A. 送到磁盘驱动器的地址由磁头号、盘面号和扇区号组成
> - B. 能控制磁头移动到指定磁道，并发回"寻道结束"信号
> - C. 能控制磁盘片转过指定的扇区，并发回"扇区符合"信号
> - D. 能控制对指定盘面的指定扇区进行数据的读/写操作
>
> 下列有关磁盘存储器读/写操作的叙述中，错误的是（ ）。
>
> - A. 最小读/写单位可以是一个扇区
> - B. 采用直接存储器存取 DMA 方式进行输入/输出
> - C. 按批处理方式进行一个数据块的读/写
> - D. 磁盘存储器可与 CPU 交换盘面上的存储信息

第 2 题错选为 C。对于 A，磁盘驱动器由磁道/柱面、磁头号/盘面号、扇区号组成，对于这一题的记忆可以联想磁盘的寻址，也就是磁盘移动磁盘/柱面是最好耗时的，而改变盘面不会那么耗时。

第 3 题没选出来。显然 D 是错的，CPU 交换信息必须要经过 cache/内存。

![3.4.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAilqx8PRSxKL4qo0CfUC-u7-a4OMzQACOhNrGz_BQFa29FI9OxPRUQEAAwIAA3gAAz0E)

> 下列关于固态硬盘（SSD）的叙述中，不正确的是（ ）。
>
> - A. 固态硬盘的读/写是以页为单位的
> - B. 固态硬盘的擦除是以页为单位的
> - C. 固态硬盘的写入速度比读取速度慢很多
> - D. 固态硬盘的写入次数有限，引入磨损均衡可以延长使用寿命
>
> 下列关于固态硬盘（SSD）的说法中，错误的是（ ）。
>
> - A. 基于闪存的存储技术
> - B. 随机读/写性能明显高于磁盘
> - C. 随机写比较慢
> - D. 读/写速度快，常用作主存
>
> 一个磁盘的转速为 7200 转/分，每个磁道有 160 个扇区，每个扇区有 512 字节，则在理想情况下，磁盘每秒传输的数据量是（ ）。
>
> - A. 7200×160KB
> - B. 7200KB
> - C. 9600KB
> - D. 19200KB
>
> 某磁盘盘面共有 200 个磁道，盘面总存储容量为 60MB，磁盘旋转一周的时间为 25ms，每个磁道有 8 个扇区，各扇区之间有一间隙，磁头通过每个间隙需 1.25ms，则磁盘接口所需的最大传输速率是（ ）。
>
> - A. 10MB/s
> - B. 60MB/s
> - C. 83.3MB/s
> - D. 20MB/s
>
> 【2013 统考真题】某磁盘的转速为 10000 转/分，平均寻道时间是 6ms，磁盘传输速率是 20MB/s，磁盘控制器延迟为 0.2ms，读取一个 4KB 的扇区所需的平均时间约为（ ）。
>
> - A. 9ms
> - B. 9.4ms
> - C. 12ms
> - D. 12.4ms

第 5 题没选出来。固态硬盘的读/写是以页为单位的，擦除是以块为单位的。

第 6 题不知道为啥放在这里了。显然 D 是错的。

第 7 题不知道为啥放在这里了。一个磁盘转速为 7200 转/分=120 转/s，假设磁盘运行 1s，也就是转 120 次。120×160×512B=960KB。

第 8 题不知道为啥放在这里了。假设总共运行时间为 1s，则由于有 8 个扇区，所以磁盘在旋转一周的有效读取时间为 25ms-1.25s×8=15ms，一个磁道包含信息 60MB/200=0.3MB，所以 0.3MB/15ms=20MB/s

第 9 题不知道为啥放这里了。读取时间：4KB/20MB/s=0.2ms；延迟：0.2ms；平均寻道时间：6ms；磁盘转到那个地方：10000 转/分，也就是 1 转/0.0001 分，所以半转也就是 0.00005min 也就是 3ms。总共加起来，也就是 9.4ms。

![3.4.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAipqx8PzqsnQfLUPc6Q_hpf_PP71NAACOxNrGz_BQFYsSj-h60_Y5wEAAwIAA3gAAz0E)

> 【2015 统考真题】若磁盘转速为 7200 转/分，平均寻道时间为 8ms，每个磁道包含 1000 个扇区，则访问一个扇区的平均存取时间大约是（ ）。
>
> - A. 8.1ms
> - B. 12.2ms
> - C. 16.3ms
> - D. 20.5ms

第 11 题不知道为啥放在这里。7200 转/分=120 转/s，即 1 转/ 1/120s，也就是平均转半圈需要 1/240s 所以 8ms+1/240s=12.167ms。

![3.5.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAitqx8QOLc8QhVwj4DWwS7GgJmgycQACPBNrGz_BQFashudZaIWkfwEAAwIAA3gAAz0E)

> 某存储系统中，主存容量是 Cache 容量的 4096 倍，Cache 被分为 64 个块，采用直接映射方式、随机替换算法和全写法，则标记阵列（所有标记信息）的大小应为（ ）。
>
> - A. 6×4097bit
> - B. 64×12bit
> - C. 6×4096bit
> - D. 64×13bit

本题错选为 B。直接映射，随即替换和全写法均不需要额外位，cache 本身需要一个有效位，对于标记信息，也就是 12 位 tag，所以最终需要 12+1bit 也就是 13bit。

对于这题分析一下要存储的信息是什么，直接映射也就是说分成 64 组，“组”这个信息是可以算出来的，所以不需要保存，真正需要比较的是 tag。

![3.5.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAixqx8QkTfPCLuiEtZAF_gABbxrT6DcAAj0Taxs_wUBW2sPzUM3Qc1kBAAMCAAN4AAM9BA)

> 某计算机的 Cache 有 16 行，块大小为 16B，其映射方式可配置为直接映射或 2 路组相联映射，主存按字节编址，主存单元从 0 开始编号。若依次访问下列主存单元，则不论采取上述哪种映射方式都可能引起 Cache 冲突的是（ ）。
>
> - A. 52 号和 102 号单元
> - B. 48 号和 308 号单元
> - C. 60 号和 160 号单元
> - D. 46 号和 236 号单元
>
> 假设主存地址位数为 32 位，按字节编址，主存和 Cache 之间采用全相联映射方式，主存块大小为 1 个字，每字 32 位，采用回写法（Write Back）方式和随机替换策略，则能存放 32K 字数据的 Cache 的总容量至少应有（ ）位。
>
> - A. 1536K
> - B. 1568K
> - C. 2016K
> - D. 2048K

第 20 题错选为。由于块大小为 16B，分别将上述单元变为 cache 行号。

A：52/16=3，102/16=6；B：48/16=3，308/16=19；C：60/16=3，160/16=10；D：46/16=2，236/16=14。显然对比之下可以发现，本题应该选择 B。这道题错误是因为没有意识到多少号单元实际上指的不是块号。

第 21 题错选为 C。一点一点分析，1 个字=32bit=4B，所以块内地址为 2，由于采用全相联，没有 cache 行号，所以有 30bit 用来存 tag。cache 本身需要 1 个有效位，回写法需要 1 个脏位，所以总共是 32 位。由于存放的数据是 1 字，所以总共 64 位。

![3.5.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAi1qx8RDROjsksI7XMIVfXVEEB9zVQACPhNrGz_BQFb0bQfn7px7tQEAAwIAA3gAAz0E)

> 下列关于 Cache 替换算法的叙述中，错误的是（ ）。
>
> - A. 组相联映射和全相联映射都必须考虑如何进行替换
> - B. 先进先出算法无须对每个 Cache 行记录替换信息
> - C. 直接映射是多对一的映射，无须考虑替换问题
> - D. LRU 算法需要对每个 Cache 行记录替换信息
>
> 下列关于 Cache 大小、主存块大小和 Cache 缺失率之间关系的叙述中，错误的是（ ）。
>
> - A. 主存块大小和 Cache 容量无直接关系
> - B. Cache 容量越大，Cache 缺失率越低
> - C. 主存块大小通常为几十到上百字节
> - D. 主存块越大，Cache 缺失率越低

第 25 题错选为 D。需要注意，在实际运行过程中，直接映射并不是顺序下来存的，而是随机存的，然后加时间戳或者先后顺序。

或者可以注意下这种做法，其实不是时间戳。对于这个是固定顺序：第逻辑 0 换，第逻辑 1 换，到第逻辑 N-1 换，然后从逻辑 0 换。Logn 个。

第 26 题错选为 A。主存块通常和 cache 的大小块一致，但是也只是块，而非 cache 容量，以三级 cache 举例，1 级缓存 64KB，二级缓存 1MB，三级缓存 32MB，所以容量是和 cache 块大小是无关的；而主存块从小变大，cache 缺失率会先变低再变高。块太大会导致总房间数 N 变小，从而产生抖动。

但是和页表相比，页表的块越大缺失率越低，这是因为页表只存地址，不存数据，完全不会影响。事实上应该从视角的角度出发，假设 cache 角度为 32KB，块大小为 64 字节时，有 512 个 cache 行，而块大小变为 4KB 时，仅有 8 个 cache 块；假设主存有 16GB，不管采用页大小 4KB（四百万），还是采用 2MB 的页（8000 多），都不会发现太少而抖动的情况。页变大之后，TLB 还可以几乎完全命中。

这是为什么呢，本质上是因为 cache 缺失只需要去主存读，也就是只需要花几 ns，而页表缺失需要去外存读，可能需要几 ms。

![3.6.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAi5qx8RkgstRpoqNLG7TjP2qRh5TbQACPxNrGz_BQFZsP27wnOpWEwEAAwIAA3gAAz0E)

> 虚拟存储管理系统的基础是程序访问的局部性原理，此理论的基本含义是（ ）。
>
> - A. 在程序的执行过程中，程序对主存的访问是不均匀的
> - B. 空间局部性
> - C. 时间局部性
> - D. 代码的顺序执行
>
> 虚拟存储器的常用管理方式有段式、页式、段页式，对于它们在与主存交换信息时的单位，以下表述正确的是（ ）。
>
> - A. 段式采用“页”
> - B. 页式采用“块”
> - C. 段页式采用“段”和“页”
> - D. 页式和段页式均仅采用“页”

第 2 题错选为 B。不全

第 3 题错选为 C。学了操作系统就知道这道题应该是 D 了。

![3.6.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAi9qx8R22cLyjC4ESaGy5v2Jl3MsggACQBNrGz_BQFaTUvQi7EIfSwEAAwIAA3gAAz0E)

> 【2010 统考真题】下列命令组合的一次访存过程中，不可能发生的是（ ）。
>
> - A. TLB 未命中，Cache 未命中，Page 未命中
> - B. TLB 未命中，Cache 命中，Page 命中
> - C. TLB 命中，Cache 未命中，Page 命中
> - D. TLB 命中，Cache 命中，Page 未命中

本题错选为 C。ABC 显然成立，分析 D，由于调入 TLB 的必在 Page 内，即便该进程下处理机，也会有专门的硬件将 TLB 内的有效位修改为 0，所以不可能出现 D 这种情况。

### 计组王道选择题 1 刷第 4 章

![4.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjBqx8SZSIOc3mFdxQGyDcny2t8yagACUhNrGz_BQFZkiaYpDOKXSQEAAwIAA20AAz0E)

> 下列指令中不属于程序控制类指令的是（ ）。
>
> - A. 无条件转移指令
> - B. 条件转移指令
> - C. 中断隐指令
> - D. 循环指令

本题错选为 D。对于 ABD，本质上都是在控制程序流；对于 C，中断隐指令是程序由操作系统调度由 CPU 本身执行的（也就是硬件执行的指令），所以并不是程序控制类指令。

![4.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjFqx8ToNeclhDDTiCUZ_TY8vYIMgwACUxNrGz_BQFadCPnFQmHtJAEAAwIAA20AAz0E)

> 在指令格式中，采用扩展操作码设计方案的目的是（ ）。
>
> - A. 减少指令字长度
> - B. 增加指令字长度
> - C. 保持指令字长度不变而增加指令的数量
> - D. 保持指令字长度不变而增加寻址空间

本题错选为 A。回顾扩展操作码的概念，其并不是减少指令字长度，而是采用哈夫曼树的思想。使操作码长度随地址码的减少而增加，并没有减少指令的长度。（比如说操作码 1bit，地址码 3bit，以及操作码 3bit，地址码 1bit）。

![4.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjJqx8bWsD7VMZVrs57ejN4DIDW-RAACWBNrGz_BQFbrKmfup0oS9AEAAwIAA20AAz0E)

> 指令系统中采用不同寻址方式的目的是（ ）。
>
> - A. 提供扩展操作码的可能并降低指令译码难度
> - B. 可缩短指令字长，扩大寻址空间，提高编程的灵活性
> - C. 实现程序控制
> - D. 三者都正确

本题错选为 D。属于想当然错误。对于 A，显然采用扩展操作码增加译码难度；对于 C，采用不同寻址方式和程序控制无关系，程序控制一般都是采用相对寻址。

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjNqx8brLD2i8aaaIg98l1aNDOU2vAACWRNrGz_BQFYzlqqh9c1RggEAAwIAA3gAAz0E)

> 为了缩短指令中某个地址段的位数，有效的方法是采取（ ）。
>
> - A. 立即寻址
> - B. 变址寻址
> - C. 间接寻址
> - D. 寄存器寻址
>
> 简化地址结构的基本方法是尽量采用（ ）。
>
> - A. 寄存器寻址
> - B. 隐含寻址
> - C. 直接寻址
> - D. 间接寻址
>
> 在指令寻址的各种方式中，获取操作数最快的方式是（ ）。
>
> - A. 直接寻址
> - B. 立即寻址
> - C. 寄存器寻址
> - D. 间接寻址

第 3 题错选为 C。一般而言，寄存器的个数非常少，所以最短的地址（如果有）是寄存器寻址。注意，这里指的是地址码，而不是最终需要获取到的地址位。

第 4 题错选为 C。何为简化，也就是原来需要 2 个地址码现在只需要 1 个。对于隐含寻址而言，其操作数地址默认来自于 ACC。举两个例子，对于 1 位操作数的指令而言，不需要指明地址，因为已经隐含在 ACC 里了，例如取反，对于 2 位操作数而言，只需要指令一个操作数地址，另一个隐含在 ACC 里，例如相加。

第 5 题错选为 D。显然，获取操作数最快的应该是立即数寻址，数本身就是操作数。

![4.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjRqx8cEfVCBUcG5VM1QtIwVzzO4RQACWhNrGz_BQFYi-IPh8JP6aQEAAwIAA20AAz0E)

> 相对寻址方式中，指令所提供的相对地址实质上是一种（ ）。
>
> - A. 立即数
> - B. 内存地址
> - C. 以本条指令在内存中首地址为基准位置的偏移量
> - D. 以下条指令在内存中首地址为基准位置的偏移量

本题错选为 C。PC 自动 + “1”。

![4.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjVqx8dZ-Ocm84XYD2zjr-PiGmHV1wACXBNrGz_BQFYks-VcHSDXmwEAAwIAA3gAAz0E)

> 某计算机的主存容量为 4M×16 位，且存储字长等于指令字长，若该机能完成 97 种操作，操作码位数固定，且有直接、间接、基址、变址、相对、立即六种寻址方式，则相对寻址的偏移量范围为（ ）。
>
> - A. (−32, +31)
> - B. (−64, +63)
> - C. (−128, +127)
> - D. (−256, +255)

本题错选为 D。由于存储字长=指令字长，所以有 16 位可以存储指令。97 种操作意味着需要 2^7=128，也就是 7 位；而寻址方式有 6 种，所以需要 2^3=8，也就是 3 位存储寻址方式。还剩下 16-7-3=6 位，采用补码表示即 -32-31。

![4.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjZqx8d0EaHs8aqdrHv0S9lIan5iSgACXRNrGz_BQFY3NHU4mIL4GgEAAwIAA3gAAz0E)

> 假设某条指令的第一个操作数采用寄存器间接寻址方式，指令中给出的寄存器编号为 8，8 号寄存器的内容为 1200H，地址为 1200H 的单元中的内容为 12FCH，地址为 12FCH 的单元中的内容为 38D8H，而地址为 38D8H 的单元中的内容为 88F9H，则该操作数的有效地址为（ ）。
>
> - A. 1200H
> - B. 12FCH
> - C. 38D8H
> - D. 88F9H
>
> 设相对寻址的转移指令占 3B，第 1 字节为操作码，第 2、3 字节为相对位移量（补码表示），数据在存储器中采用以低字节为字地址的存放方式，每当 CPU 从存储器取出一字节时，即自动完成 (PC) + 1→PC。若 PC 的当前值为 240（十进制），要求转移到 290（十进制），则转移指令的第 2、3 字节的机器代码是（ ）；若 PC 的当前值为 240（十进制），要求转移到 200（十进制），则转移指令的第 2、3 字节的机器代码是（ ）。
>
> - A. 2FH、FFH
> - B. D5H、00H
> - C. D5H、FFH
> - D. 2FH、00H
>
> 某计算机按字节编址，采用大端方式，某指令的一个操作数的机器数为 ABCD 00FFH，该操作数采用基址寻址方式，指令中形式地址（用补码表示）为 FF00H，当前基址寄存器的内容为 C000 0000H，则该操作数的 LSB（FFH）存放的地址是（ ）。
>
> - A. C000 FF00H
> - B. C000 FF03H
> - C. BFFF FF00H
> - D. BFFF FF03H

第 17 题错选为 B。寄存器寻址意味着操作数在寄存器内，寄存器寻址意味着操作数的地址在寄存器里，一定要看清楚题目问了什么。

第 18 题没有理解题目的意思，这题的意思是说选两个选项。PC 当前值为 240，由于自动 + “1”，并且由题目可知地址为 2B，所以到了 242，290-242=48，由于 48=0000 0000 0011 0000H=0030H，采用小端方式，

上面的解释是错的，可以联想真题的大题，得知事实上应该 + 指令长度的大小，也就是 3B，所以这里的 + “1”意思是 +3B，也就是到 243，290-243=47=0000 0000 0010 1111=002FH，由于采用小端方式，所以存储为 2F 00；同理，243-200=-43，-43=1111 1111 1101 0100=FFD5H，采用小端方式，即 D5 FF。

之所以想错，是因为想着指令字长不可变。

第 19 题错选为 A。LSB 指的是低地址部分。将 FF00H 扩展为 FFFF FF00H，即 EA=C000 0000H+FFFF FF00H=BFFF FF00H，由于采用的是大端法表示，所以 AB 存储在 BFFF FF00H 里，CDH 存储在 BFFF FF01H 里，00H 存储在 BFFF FF02H 里，FFH 存储在 BFFF FF03H 里。

![4.2.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjdqx8fgeB-YG6_KPNchqwE99OJnxQACXhNrGz_BQFbUymLOAAFtXccBAAMCAAN4AAM9BA)

> 某计算机字长为 16 位，标志寄存器中存在 ZF、SF、OF 和 CF 标志位，采用双字节[?]长指令字。假定 bgt（大于零转移）指令的第一个字节指明操作码和寻址方式，第二个字节为立即数 Imm8，用补码表示。指令功能是：若转移条件成立，则 PC = PC + 2 + Imm8×2；否则，PC = PC + 2。则下列叙述中错误的是（ ）。
>
> - A. 该计算机按字节编址
> - B. 若 bgt 指令是无符号整数的比较，则转移条件可以是 ZF + CF = 0
> - C. 若 bgt 指令是有符号整数的比较，则转移条件可以是 SF⊕OF = 0
> - D. 转移目标地址的范围是相对于 bgt 指令的前 127 条指令到后 128 条指令之间

本题错选为 D，理由也是没有捋清楚这里的 + “2”的具体意思以及没有捋清楚 CF，OF 等的作用。题设说明采用双字节字长指令，即 1 指令长=2B，由于采用 Imm8，也就是 8 位数，范围为 -128-127，带入公式可得偏移的具体单位最后/2，即 D 选项。若 bgt 采用的是无符号整数的比较，如果两个数字相加没有溢出或者相减没有溢出，在无符号数里必然为正数，所以 CF=0，加上一个 0，所以转移条件就是 CF+ZF=0。若 bgt 是有符号数的比较，则有符号数溢出的标志为 SF，假设两个小负数相加，那么 SF=1，OF=0，1 异或 0=1，可得该选项错误。

![4.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjhqx8f-ym6qp9q1MOT5E4oNSc3bkQACYBNrGz_BQFaEHeLWlv_wcwEAAwIAA3gAAz0E)

> 假设 R[ax] = 7FE6H，R[bx] = FFE8H，执行指令“sub bx, ax”后，寄存器的内容和各标志的变化为（ ）。
>
> - A. R[ax] = 8002H，OF = 0，SF = 1，CF = 1，ZF = 0
> - B. R[bx] = 8002H，OF = 0，SF = 1，CF = 0，ZF = 0
> - C. R[ax] = 8002H，OF = 1，SF = 1，CF = 0，ZF = 0
> - D. R[bx] = 8002H，OF = 1，SF = 1，CF = 0，ZF = 0
>
> 某计算机的数据采用小端方式存储，减法指令“sub ax, imm”的功能为 (ax) − imm→ax，imm 表示立即数，该指令对应的十六进制机器码为 2dxxxx（从左到右以字节为单位由低地址到高地址），其中 xxxx 对应 imm 的机器码，若 imm = −3，(ax) = 7，则该指令对应的机器码和执行后 OF 标志位的值分别为（ ）。
>
> - A. 2DFFFDH，0
> - B. 2DFFFDH，1
> - C. 2DFDFFH，0
> - D. 2DFDFFH，1

第 2 题错选为 D。本题是 CF 理解不清晰，对于 sub bx，ax，显然够减，所以 CF=0。7FE6-FFE8=7FE6+0018，显然不会溢出，所以 OF 也是 0。

第 3 题错选为 A。由于采用小端存储，根据题目，xxxx 对应的是 imm 的机器码，所以由于 immm=-3=FFFDH，且采用小端存储，所以 2D FD FFH。

![4.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjlqx8gXyVAx4fDUUOrtbQ01x1tcqgACYRNrGz_BQFajNokMTJkTIgEAAwIAA3gAAz0E)

> 程序 P 中有两个变量 i 和 j，被分别分配在寄存器 eax 和 edx 中，P 中语句“if(i<j) { … }”对应的指令序列如下（左边为指令地址，中间为机器代码，右边为汇编指令），其中 jle 指令的偏移量为 0d：
>
> 804846a    39 c2    cmp dword ptr edx,eax
> 804846c    7e 0d    jle xxxxxxxx
>
> 若执行到 804846aH 处的 cmp 指令时，i = 105，j = 100，则 jle 指令执行后将转到（ ）处的指令执行。
>
> - A. 8048461H
> - B. 804846eH
> - C. 8048479H
> - D. 804847bH

本题错选为 B。注意存储地址，i 存储在 eax 里，j 存储在 edx 里，由于题目为 i< j，显然这是不成立的，所以根据下一条指令需要跳转。根据题设可知 804846cH 为 2 字节指令，所以 PC=804846EH，再 +0dH，可得 27=16+11，也就是 D。

![4.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjpqx8iXlLwsAXFuytOhMhSFoBD-BgACZBNrGz_BQFb1rGcqz4N1pAEAAwIAA3gAAz0E)

> 下列有关调用指令（转子指令）的叙述中，错误的是（ ）。
>
> - A. 与高级语言源程序中的过程调用相对应，一次过程调用对应一条调用指令
> - B. 指令执行时必须保留返回地址，调用指令随后一条指令的地址是返回地址
> - C. 嵌套调用时返回地址通常保存在栈中，非嵌套调用时可保存在特定寄存器中
> - D. 指令执行时将无条件转移到目标地址处，转移目标地址无须在指令中明显给出

本题错选为 A。在 C 语言里写一个过程调用，经过编译后对应一个 call；对于 D，必须得告诉 CPU 去哪。

对于函数的栈帧，ebp+8 为传参的第一个参数，ebp+4 为返回地址，ebp+0 为 call 函数上一层的老 ebp，ebp-4 开始是局部变量。

![4.4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjtqx8kFOZJmy06MDIt0LN7V3F_BGAACZhNrGz_BQFae-5hGsK6fVgEAAwIAA20AAz0E)

> 下列描述中，不符合 RISC 指令系统特点的是（ ）。
>
> - A. 指令长度固定，指令种类少
> - B. 寻址方式种类尽量减少，指令功能尽可能强
> - C. 增加寄存器的数目，以尽量减少访存次数
> - D. 选取使用频率最高的一些简单指令，以及很有用但不复杂的指令

本题错选为 B。显然 B 是 CISC 的系统特点。

### 计组王道选择题 1 刷第 5 章

![5.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAjxqx8khMSK3MEf8_-2Il76nq3CvhgACZxNrGz_BQFYml-tXOZfFMAEAAwIAA3gAAz0E)

> 在 CPU 中，跟踪后继指令地址的寄存器是（ ）。
>
> - A. 指令寄存器
> - B. 程序计数器
> - C. 地址寄存器
> - D. 状态寄存器

本题错选为 C。为低级错误，看错选项。用一条指令的流动来解释一下这道题。

假设 CPU 需要执行一条指令 ADD R1,[X]，即把内存 X 地址里的数据加到寄存器 R1 中，结果存回 R1。

阶段一：取指阶段，将指令从内存搬到 CPU，并让 PC 指向下一条指令。PC 首先拿出当前指令的内存地址，送入 MAR 中；MAR 将地址 1000H 放到地址总线上，控制器 CU 向控制总线发出读信号；内存收到读命令后，把 1000H 单元内存放的机器码放到数据总线上；数据总线上的机器码被写入 MDR 中；MDR 将这条指令机器码送给 IR，也就是指令寄存器；(PC)+“1”。

阶段二：分析指令/译码。IR 把指令的操作码部分送入指令译码器，CU 解析出这是一条加法指令；CU 分析指令的寻址方式；根据寻址方式计算出操作数 X 在内存中的真是物理地址 EA；CPU 内部电路读取 R1 里的值，送入 ALU 的输入端。

阶段三：访存。把上一阶段计算好的形式地址 EA 送入 MAR；发起读内存，MAR 将 EA 放到地址总线上，CU 再次通过控制总线发出都信号；内存把 EA 地址里的具体数据放到数据总线上，存入 MDR；MDR 将渠道的操作数送到 ALU 的输入暂存器中。

阶段四：执行指令。CU 向 ALU 发送加法控制信号，将寄存器 R1 的值和暂存器 Y 的值相加；ALU 根据计算结果，更新 PSW 里的标志位（ZF，SF，OF，CF）。

阶段五：写回。ALU 通过 CPU 总线写入目标寄存器并覆盖；CPU 根据 PC 发起下一条指令的取值阶段。

根据上述分析可知，指令寄存器即 IR，用于暂存指令（因为 PC 会自动 + “1”，没法留住当前指令），地址寄存器用于暂存地址，例如存储 X 的地址。

![5.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAj1qx8lKwCAoISCRmqwtiw5wgFk4ngACaBNrGz_BQFYVFSubEd4RjgEAAwIAA20AAz0E)

> 指令（ ）从主存储器中读出。
>
> - A. 总是根据程序计数器
> - B. 有时根据程序计数器，有时根据转移指令
> - C. 根据地址寄存器
> - D. 有时根据程序计数器，有时根据地址寄存器

本题错选为 B。指令从哪里读出，根据上一题的分析可知，指令总是从程序计数器，也就是 PC 内读出。对于转移指令，可能会改变 PC 值，但是指令仍然是从 PC 里读出来的；对于地址寄存器 MAR，它可能存乱七八糟的东西。

![5.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAj5qx8l8iREXsRf_xIsMp-1jzz6WBgACbRNrGz_BQFb8NafO5VDTeAEAAwIAA3gAAz0E)

> 若指令按字边界对齐存放，程序计数器（PC）可以使用字地址，其位数取决于（ ）。
>
> I. 存储器的容量    II. 机器字长    III. 指令字长
>
> - A. I
> - B. I 和 III
> - C. II 和 III
> - D. I、II 和 III
>
> 下列关于程序计数器（PC）的叙述中，错误的是（ ）。
>
> - A. 机器指令中不能显式地使用 PC
> - B. 指令顺序执行时，PC 值总是自动加 1
> - C. 调用指令执行后，PC 值一定是被调用过程的入口地址
> - D. 无条件转移指令执行后，PC 值一定是转移目标地址
>
> 指令寄存器（IR）的位数取决于（ ）。
>
> - A. 存储器的容量
> - B. 机器字长
> - C. 指令字长
> - D. 存储字长

![5.1.10 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAj9qx8mo9AO6AtEHAngCe2omBk6_4AACbxNrGz_BQFYhCblp4F0z7QEAAwIAA3gAAz0E)

> [原图非题目：主人手写解析笔记截图]

其实也不算，只要搞清楚一个公式就好了：PC = 存储容量 / IR。

第 11 题错选为 C。对于这道题，以一个函数调用另一个函数来解释。执行 call 指令后，也就是先压入传参，执行 call 后 cpu 自定压入返回地址（原来的 PC 值），然后将新函数的入口地址赋予给 PC。进入新函数头部后，需要把旧的 ebp 保存在栈内，然后将当前栈顶指针 esp 赋予给 ebp。需要注意，函数栈和 PC 是两码事，可以理解为函数栈是正在执行的东西，而 PC 指向的是一块地方。

第 12 题错选为 B。指令寄存器保存的是当前正在执行的指令，当前正在执行的指令来源是 PC 值“指向”的指令，这个指向的指令也就是指令字长。

![5.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkBqx8nqI-PHxaU6hNQnJJ3blvVRpwACcRNrGz_BQFadUGCja3KcoAEAAwIAA3gAAz0E)

> 间址周期结束后，CPU 内寄存器 MDR 中的内容为（ ）。
>
> - A. 指令
> - B. 操作数地址
> - C. 操作数
> - D. 无法确定

本题错选为 C。取指令，将指令从 PC 送入 IR，并且解析出指令本身，PC+“1”；分析指令，分析指令的寻址方式，计算出指令的操作数地址；访存；运行；写回。

![5.1.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkFqx8oCWyne5KqPmHyBa679IqagxAACchNrGz_BQFb6KO0r9e4sHwEAAwIAA3gAAz0E)

> 【2016 统考真题】某计算机的主存储器空间为 4GB，字长为 32 位，按字节编址，采用 32 位字长指令字格式。若指令按字边界对齐存放，则程序计数器（PC）和指令寄存器（IR）的位数至少分别是（ ）。
>
> - A. 30、30
> - B. 30、32
> - C. 32、30
> - D. 32、32

本题错选为 C。主存空间为 4GB，也就是 4×2^30B=2^32B，字长 32bit=4B。指令 32bit=4B。所以，PC，即程序计数器，可以用 2^32/2^2=2^30，即 30bit 来存储，剩下 2 位可以默认 00，指令寄存器是指令本身，即 32bit，所以本题应该选 B。
这里解释一下按字边界对齐存放，也就是 0，4，8，12…

![5.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkJqx8qpscumTDKlW0RyWmC9rXSF3gACdhNrGz_BQFYaEZnlh5ne_gEAAwIAA20AAz0E)

> 下列关于指令执行过程的叙述中，错误的是（ ）。
>
> - A. 取指操作是控制器固有的功能，不需要在操作码控制下完成
> - B. 所有指令的取指操作是相同的
> - C. 在指令长度相同的情况下，所有指令的取指操作是相同的
> - D. 中断周期是在指令执行完成后出现的

本题错选为 D。ACD 显然正确，对于 B，考虑 CISC，指令长度可能不相等，所以取的字节数可能不相等。

![5.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkNqx8rAWGr1oaK05fM-_xdaNluCrgACeBNrGz_BQFaFw2zq6Ud_4AEAAwIAA3gAAz0E)

> 【2009 统考真题】冯·诺依曼机中指令和数据均以二进制形式存放在存储器中，CPU 区分它们的依据是（ ）。
>
> - A. 指令操作码的译码结果
> - B. 指令和数据的寻址方式
> - C. 指令周期的不同阶段
> - D. 指令和数据所在的存储单元

本题错选为 A。考虑 CPU 的五个阶段：取指令，分析指令，访存，执行，写回。CPU 在取指令的时候把指令读入内存，在分析指令的时候将操作码送入 CU 得出这是什么指令，然后根据其操作数进行访存，得到操作数的地址。访存阶段则是根据操作数的地址来得到操作数。

显然对于 A，指令操作码译码出来的东西得到这个指令的作用是什么，对于 B，指令寻址和数据寻址，人类可以知道指令寻址的方式有顺序寻址和跳跃寻址，数据寻址的方式有那 10 种，但是 CPU 不知道。例如跳跃寻址本质其实是和相对寻址是一样的。对于 D，指令和数据所在的存储单元的物理地址由操作系统分配，是透明的（采用页式存储）

![5.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkRqx8rpMh3U9PZTbtKzMzN65RAEswACeRNrGz_BQFZpiBoaUuEqVQEAAwIAA3gAAz0E)

> 下列操作中，从开始到完成所持续的时间不一定等于一个时钟周期的是（ ）。
>
> I. 单总线数据通路中完成一次主存读操作
> II. 单周期 CPU 中执行一条完整指令
> III. 单总线数据通路中，寄存器 R1 经内部总线传至寄存器 R2
> IV. 流水线数据通路中，数据从一个流水段寄存器传入下一个流水段寄存器
> V. 单周期 CPU 中完成一次 ALU 运算
>
> - A. I、V
> - B. I、III、V
> - C. II、III、IV
> - D. IV、V
>
> 下列关于单周期 CPU 和多周期 CPU 的描述中，错误的是（ ）。
>
> - A. 单周期 CPU 更容易支持复杂指令（如乘法、除法）
> - B. 单周期 CPU 部件冗余大、利用率低，多周期 CPU 则刚好相反
> - C. 单周期 CPU 在 1 个时钟周期内执行一条指令，CPI = 1
> - D. 多周期 CPU 至少需要 2 个时钟周期才能执行一条指令，CPI > 1

本题错选为 C。辨析一下这里的概念。CPU 主要由 CU 和数据通路组成，数据通路主要有操作原件（ALU）以及状态原件（MAR，MDR，PC 等）。

![5.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkRqx8rpMh3U9PZTbtKzMzN65RAEswACeRNrGz_BQFZpiBoaUuEqVQEAAwIAA3gAAz0E)

> 下列操作中，从开始到完成所持续的时间不一定等于一个时钟周期的是（ ）。
>
> - Ⅰ. 单总线数据通路中完成一次主存读操作 / Ⅱ. 单周期 CPU 中执行一条完整指令 / Ⅲ. 单总线数据通路中，寄存器 R1 经内部总线传至寄存器 R2 / Ⅳ. 流水线数据通路中，数据从一个流水段寄存器传入下一个流水段寄存器 / Ⅴ. 单周期 CPU 中完成一次 ALU 运算
> - A. Ⅰ、Ⅴ
> - B. Ⅰ、Ⅲ、Ⅴ
> - C. Ⅱ、Ⅲ、Ⅳ
> - D. Ⅳ、Ⅴ
>
> 下列关于单周期 CPU 和多周期 CPU 的描述中，错误的是（ ）。
>
> - A. 单周期 CPU 更容易支持复杂指令（如乘法、除法）
> - B. 单周期 CPU 部件冗余大、利用率低，多周期 CPU 则刚好相反
> - C. 单周期 CPU 在 1 个时钟周期内执行一条指令，CPI = 1
> - D. 多周期 CPU 至少需要 2 个时钟周期才能执行一条指令，CPI > 1

第 8 题错选为 C。对于 1，单总线数据通路完成一次主存读操作。由于是单总线，所以在主存读指令的时候得取指令等等，会有竞争，所以 1 排除。对于 2 显然为 1 个时钟周期，对于 4 和 3，这里需要注意式寄存器内部，所以 ok。对于 5，显然是小于一个时钟周期的。

第 9 题错选为 D。对于 A，单周期的 CPU 如果支持乘除法，那么会让整个单周期更慢。对于 D，无论怎么编排 D，总是接近 1，不可能=1。

![5.3.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkZqx8sZISv6JgT502H8MvsJoZyplwACexNrGz_BQFYLJWg8AAHUBDsBAAMCAAN4AAM9BA)

> CPU 的读/写控制信号的作用是（ ）。
>
> - A. 决定数据总线上的数据流方向
> - B. 控制存储器操作的读/写类型
> - C. 控制流入、流出存储器信息的方向
> - D. 以上都是

本题错选为 B。即 Cin 和 Cout 线。Cin 代表想要写，Cout 代表进位读。显然 ABC 均正确，例如想要读数据，Cin=1，然后应该是数据流向 CPU，存储器流向总线。

![5.4.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkdqx8zF5Er9Bg471greK9GwL7bv_AAChxNrGz_BQFaBCN08p2AVogEAAwIAA3gAAz0E)

> 通常一条指令对应一个微程序，一个微程序的周期对应一个（ ）。
>
> - A. 指令周期
> - B. 主频周期
> - C. 时钟周期
> - D. 工作周期

本题错选为 C。辨析一下这里的概念：一条机器指令=一个微程序=若干个微指令，微指令=若干个微命令，微命令=微操作。所以一个微程序周期等于一个机器指令周期，所以也就等于指令周期。

![5.4.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkhqx84HtLpL3NrjdNJgCpmmUgiGXAACihNrGz_BQFaSKqNKoEedUgEAAwIAA3gAAz0E)

> 【2012 统考真题】某计算机的控制器采用微程序控制方式，微指令中的操作控制字段采用字段直接编码法，共有 33 个微命令，构成 5 个互斥类，分别包含 7、3、12、5 和 6 个微命令，则操作控制字段至少有（ ）。
>
> - A. 5 位
> - B. 6 位
> - C. 15 位
> - D. 33 位

本题错选为 D。操作控制字段主要有 3 种方式，直接编码法，字段直接编码，字段间接编码，对于直接编码而言，一位代表一个信号；对于字段直接编码，先花 x 位表示有多少个互斥类，然后每个再花 y 位。对于字段间接编码，则是 x+y 混杂编码器来，把互斥的操作可以放在一起编码成 2 个字段。需要注意的是，别忘了 000 代表空状态。

对于这道题，5 个互斥类对应 5，也就是 3bit，对于后续的，7+1 需要 3bit，3+1 需要 2bit，12+1 需要 4 比特，5+1 需要 3bit，6+1 需要 3bit，总计 3+2+4+3+3=15，控制字段为 15bit。

![5.4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAklqx84bMaP9xYBVLvm7UtaTcU-njwACixNrGz_BQFbWLqpNz99TDgEAAwIAA3gAAz0E)

> 【2014 统考真题】某计算机采用微程序控制器，共有 32 条指令，公共的取指令微程序包含 2 条微指令，各指令对应的微程序平均由 4 条微指令组成，采用断定法（后继地址字段法）确定下条微指令地址，则微指令中后继地址字段的位数至少是（ ）。
>
> - A. 5
> - B. 6
> - C. 8
> - D. 9

本题错选为 D。对于 CPU，想要翻译指令需要利用 CU，CU 有两种翻译指令的方式，一种是硬布线控制器，另一种式微程序控制器，即在 CU 内部再放一个微型控制器。主存（RAM）里存着机器指令；而 CPU 内部的控制存储器（ROM/CM）里，存着微指令。

所以本题的意思是说普通的 PC 来指明下一条机器指令，那么 CU 内部也是自然有一个μPC，也就是微程序计数器。所以，当一条微指令执行完之后，μPC 怎么知道下一条微指令在哪呢？

1. 增量方式，即计数器方式，也就是μPC 自动 +1
2. 断定方式，即下地址字段方式，也就是当前微指令显式地指定下一条微指令，微指令包含下址字段，可以直接给出下一条微指令。在断定法种，每一条微指令的格式被分成了两半，操作控制字段，也就是存放 0 和 1，顺序控制字段，也就是下地址字段，里面存放着在控制存储器里的绝对地址。

所以要确定总共有多少条（后地址）的，找绝对地址。总共 32 条指令，32×4=128，而需要额外的公共取值 2 个，也就是 128+2，总共 130。

![5.5.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkpqx85t3_6eSxcowbSDf8vFf5HBbAACjRNrGz_BQFbVx8RP6yopzgEAAwIAA3gAAz0E)

> 【2015 统考真题】内部异常（内中断）可分为故障（fault）、陷阱（trap）和终止（abort）三类，下列有关内部异常的叙述中，错误的是（ ）。
>
> - A. 内部异常的产生与当前执行指令相关
> - B. 内部异常的检测由 CPU 内部逻辑实现
> - C. 内部异常的响应发生在指令执行过程中
> - D. 内部异常处理后返回到发生异常的指令继续执行

本体错选为 C。对于 C，内部异常的“响应”是在指令的执行过程中。当指令一条指令结束后的末尾进行响应？对于 D，~~内部异常处理完之后返回异常执指令的下一条执行，而不是本条~~。

对于内部中断有三种情况，故障，陷阱和终止，分别对应返回本条，下一条，不反悔。对于外部中断一定是返回下一条指令执行，因为检查是在每条指令执行结束之后。

![5.6.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAktqx86jTr0Yx1MdTohhH17ebPxFuQACjhNrGz_BQFZdnaZueKYzJgEAAwIAA3gAAz0E)

> 下列关于数据冒险的叙述中，正确的是（ ）。
>
> - Ⅰ. 数据冒险是指后面指令用到的数据还未来得及由前面的指令产生 / Ⅱ. 在发生数据冒险的指令之间插入空操作指令能避免数据冒险 / Ⅲ. 采用转发（旁路）技术可以解决一部分数据冒险现象 / Ⅳ. 通过编译器调整指令顺序可解决部分数据冒险
> - A. Ⅰ、Ⅱ、Ⅳ
> - B. Ⅰ、Ⅱ、Ⅲ
> - C. Ⅰ、Ⅲ、Ⅳ
> - D. Ⅰ、Ⅱ、Ⅲ 和 Ⅳ
>
> 下列指令序列中，指令 I1 和 I3、I2 和 I3 之间发生数据相关，假定采用“取指、译码/取数、执行、访存、写回”五段流水线方式，那么在采用转发技术时，需要在指令 I3 之前加入（ ）条空操作指令才能使这段程序不发生数据冒险。
>
> ```text
> I1: add r1, r0, 1    # (r1)←(r0) + 1
> I2: load r3, 12(r2)    # (r3)← M[(r2) + 12]
> I3: add r5, r3, r1    # (r5)←(r3) + (r1)
> ```
>
> - A. 3
> - B. 2
> - C. 0
> - D. 1

第 12 题错选为 A。根据这道题总结一下所有的冒险。冒险主要分为 3 大类，结构冒险（资源冲突），数据冒险以及控制冒险。其中控制冒险主要分为 3 类，延迟执行相关指令，采用旁路转发技术以及采用 lode-use 技术。

主要辨析一下旁路转发技术以及 load-use 技术。主要解决类似写后读的问题。

对于旁路转发，即将执行指令的时候，下一个时间片直接把寄存器的脏数据送入下一条指令的执行阶段。例如连续执行 add，sub 的时候，这类可以使用旁路转发；

对于 load-use 技术，指令 1，去内存里把数据读出来装进 R1，指令 2，立即使用刚刚读进 R1 的数据进行加法。指令 1 在 EX 阶段计算出来数据的地址，再 MEM 阶段访存取这个数据；指令 2 在 EX 阶段就要计算上一阶段取的数据（如果没有阻塞的话，则上一个指令处于 MEM），但是数据还在访问，怎么能取呢？所以阻塞指令二一个阶段，等待数据取完之后，把指令 1 的 MEM 通过软件方式发到指令 2 的 EX。

这里需要注意，并不是所有的指令的 EX 阶段都是计算数，也有可能是计算数地址，然后在 MEM 访存。
第 13 题错选为 A。经典 load-use，阻塞 1。

### 计组王道选择题 1 刷第 6 章

![6.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkxqyJlg7QvxDb48aia6EWhsBd7YpwACxxFrG6T-SFaXKtYQRlD8mwEAAwIAA3gAAz0E)

> 间址寻址第一次访问内存所得到的信息经系统总线的（ ）传送到 CPU。
>
> - A. 数据总线
> - B. 地址总线
> - C. 控制总线
> - D. 总线控制器
>
> 系统总线中地址线的功能是（ ）。
>
> - A. 选择主存单元地址
> - B. 选择进行信息传输的设备
> - C. 选择外存地址
> - D. 指定主存和 I/O 设备接口电路的地址

第 5 题错选为 B。取指令，分析指令（间指），也就是通过数据总线传输，all is data。

第 6 题错选为 A。A 表述不全，除了主存地址之外还可以有 D 所说的东西。

![6.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAkxqyJlg7QvxDb48aia6EWhsBd7YpwACxxFrG6T-SFaXKtYQRlD8mwEAAwIAA3gAAz0E)

> 间址寻址第一次访问内存所得到的信息经系统总线的（ ）传送到 CPU。
>
> - A. 数据总线
> - B. 地址总线
> - C. 控制总线
> - D. 总线控制器
>
> 系统总线中地址线的功能是（ ）。
>
> - A. 选择主存单元地址
> - B. 选择进行信息传输的设备
> - C. 选择外存地址
> - D. 指定主存和 I/O 设备接口电路的地址

本题错选为 D。本题考虑来源于总线复用，但是也应该是控制总线，而不是控制单元。

![6.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAk5qyJpl5RIaSSJyZsny86p3uYeJpgACzBFrG6T-SFZIVBMcJBIETAEAAwIAA3gAAz0E)

> 传输一幅分辨率为 640 像素×480 像素，颜色数量为 65536 的照片（采用无压缩方式），假设有效数据的传输速率为 56kb/s，则大约需要的时间是（ ）。
>
> - A. 34.82s
> - B. 43.86s
> - C. 85.71s
> - D. 87.77s
>
> 某总线有 104 根信号线，其中数据线（DB）为 32 根，若总线工作频率为 33MHz，则其理论最大传输速率为（ ）。
>
> - A. 33MB/s
> - B. 64MB/s
> - C. 132MB/s
> - D. 164MB/s
>
> 在一个 16 位的总线系统中，若时钟频率为 100MHz，总线周期为 5 个时钟周期传输一个字，则总线带宽是（ ）。
>
> - A. 4MB/s
> - B. 40MB/s
> - C. 16MB/s
> - D. 64MB/s
>
> 下列信号中，可在系统总线中的控制总线上传输的有（ ）。
>
> - Ⅰ. 存储器和 I/O 设备的地址信息 / Ⅱ. 存储器和 I/O 设备的时序信号、控制信号 / Ⅲ. 存储器和 I/O 设备的响应信号 / Ⅳ. 存储器中存放的数据
> - A. Ⅰ和Ⅳ
> - B. Ⅱ和Ⅲ
> - C. Ⅰ、Ⅱ和Ⅲ
> - D. Ⅱ、Ⅲ和Ⅳ

第 11 题不会做。

第 12 题不会做。

第 13 题不会做。

第 14 题错选为 D。

![6.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAk9qyJq2bnCGV7oNsogQ3WNG-4CouwACzRFrG6T-SFZFqusJPfXXHAEAAwIAA20AAz0E)

> 在异步总线中，传送操作（ ）。
>
> - A. 由设备控制器控制
> - B. 由 CPU 控制
> - C. 由统一时序信号控制
> - D. 按需分配时间

本题错选为 A。异步总线方式按需分配。整理一下四种方式。

![6.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlBqyJran9UdPBxojowRbxXJnaCDPQACzhFrG6T-SFZEVv_7FWJ7mAEAAwIAA3gAAz0E)

> 某 I/O 设备采用异步串行通信方式向主机传送 7 位 ASCII 字符，通信规程要求每个字符后附加 1 位奇偶校验位，若要求每秒传送 480 个字符，则该设备在异步串行线路上每秒传输的比特数为（ ）。
>
> - A. 3360
> - B. 38400
> - C. 3840
> - D. 4800

本题错选为 C。（本题算是略超纲，从 16 年之后就基本不考了）本题错误在于没有考虑异步串行通信的起始位和结束位。

![6.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlFqyJwYppNdmHdUtKCedvNma3FXWAAC0RFrG6T-SFafESIt6vM-2gEAAwIAA3gAAz0E)

> 【2017 统考真题】下列关于多总线结构的叙述中，错误的是（ ）。
>
> - A. 靠近 CPU 的总线速度较快
> - B. 存储器总线可支持突发传送方式
> - C. 总线之间须通过桥接器相连
> - D. PCI-Express×16 采用并行传输方式

本题错选为 C。超纲题。

### 计组王道选择题 1 刷第 7 章

![7.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlJqyJ7cXwABz71M8MoK6q6EYriMUOQAAtMRaxuk_khWYd4YDyGUG14BAAMCAAN4AAM9BA)

> 下列功能中，属于 I/O 接口的功能的是（ ）。
>
> - Ⅰ. 数据格式的转换 / Ⅱ. I/O 过程中错误与状态检测 / Ⅲ. I/O 操作的控制与定时 / Ⅳ. 与主机和外设通信
> - A. Ⅰ和Ⅳ
> - B. Ⅰ、Ⅲ和Ⅳ
> - C. Ⅰ、Ⅱ和Ⅳ
> - D. Ⅰ、Ⅱ、Ⅲ和Ⅳ
>
> 下列关于 I/O 端口和接口的说法中，正确的是（ ）。
>
> - A. 在统一编址方式下，对主存单元和 I/O 端口的存储保[?]措施是独立的
> - B. 在统一编址方式下，主存单元和 I/O 端口是靠不同的地址线来区分的
> - C. 在独立编址方式下，主存单元和 I/O 端口是靠不同的地址线来区分的
> - D. 在独立编址方式下，CPU 需要设置专门的输入/输出指令访问 I/O 端口
>
> 下列属于 I/O 接口中寄存器的有（ ）。
>
> - Ⅰ. 指令寄存器 / Ⅱ. 控制寄存器 / Ⅲ. 状态寄存器 / Ⅴ. 数据缓冲寄存器 / Ⅳ. 存储器地址寄存器
> - A. Ⅰ、Ⅱ、Ⅲ 和 Ⅴ
> - B. Ⅱ、Ⅲ 和 Ⅳ
> - C. Ⅱ、Ⅲ 和 Ⅴ
> - D. Ⅱ、Ⅲ、Ⅳ 和 Ⅴ

第 2 题错选为 B。IO 接口=设备控制器。

第 3 题错选为 B。对概念理解有误，显然在统一编制的时候，不需要额外的地址线，只是将某一片特定的区域划给设备；而在独立编址下，需要。对于统一编址，例如 RICS，只能用 load 和 use 访存。

第 4 题错选为。IO 接口的寄存器即 IO 端口，需要具备 3 个最基本的功能：数据寄存器，控制寄存器和状态寄存器。

![7.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlRqyJ-hu0AOUoOgDPnfRIGTMbM_DwAC1BFrG6T-SFY44S0IDAne5gEAAwIAA3gAAz0E)

> 磁盘驱动器向盘片磁道记录数据时采用（ ）方式写入。
>
> - A. 并行
> - B. 串行
> - C. 并行 - 串行
> - D. 串行 - 并行
>
> 采用中断方式进行打印控制时，在打印控制接口和打印机之间交换的信息不包括（ ）。
>
> - A. 打印字符点阵信息
> - B. 打印控制信息
> - C. 打印机状态信息
> - D. 中断请求信息

第 10 题错选为 C。

第 11 题错选为 B。打印控制接口和交换机之间交换的信息，指的是 IO 接口和 IO 设备之间。中断“请求”是 IO 接口发给 CPU 的，自然不需要再 IO 接口和 IO 设备之间传输。

![7.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlVqyJ_MOHQl42t8GIfmYcjdjsQZ4AAC1RFrG6T-SFYO2CgvacP9igEAAwIAA20AAz0E)

> 下列有关 I/O 接口功能和结构的叙述中，错误的是（ ）。
>
> - A. I/O 接口中主机侧数据宽度与设备侧数据宽度总是一样的
> - B. I/O 接口是像显卡或网卡之类的一种外设控制逻辑
> - C. CPU 可以从 I/O 接口读取状态信息，以了解接口和外设的状态
> - D. CPU 可以向 I/O 接口传送用来对设备进行控制的命令

本题错选为 C。对于 A，举一个很简单的例子，例如键盘，纯字符设备。

![7.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlZqyJ_xNrOiURb_4ndPo2CdwS1XRQAC1hFrG6T-SFb-0xX91kWtVAEAAwIAA3gAAz0E)

> 【2017 统考真题】I/O 指令实现的数据传送通常发生在（ ）。
>
> - A. I/O 设备和 I/O 端口之间
> - B. 通用寄存器和 I/O 设备之间
> - C. I/O 端口和 I/O 端口之间
> - D. 通用寄存器和 I/O 端口之间

本题错选为 A。IO 端口是 IO 设备的寄存器。假设 IO 设备需要向内存发送数据，那么先将数据写道 IO 端口（数据寄存器上），然后发往 CPU 内的寄存器，即 D。

![7.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAldqyKA5g6yhczGyWCdGnhsPwqC1lQAC1xFrG6T-SFbsyf57VvSmewEAAwIAA20AAz0E)

> 下列关于中断的说法中，错误的是（ ）。
>
> - A. 中断服务程序一般是操作系统模块
> - B. 中断向量方法可提高中断源的识别速度
> - C. 中断向量地址是中断服务程序的入口地址
> - D. 重叠处理中断的现象称为中断嵌套

本题错选为 A。对于 A，中断服务程序最开始三个是硬件实现的。中断向量是中断服务程序的入口地址，而不是中断向量的地址。

![7.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlhqyKCmGenxD1CozX1hDYB9V0ijKwAC2BFrG6T-SFZliTiKTyRSJQEAAwIAA3gAAz0E)

> 下列关于程序中断方式和 DMA 方式的说法中，错误的是（ ）。
>
> - Ⅰ. 程序中断过程是由硬件和中断服务程序共同完成的 / Ⅱ. 在每条指令的执行过程中，每个总线周期要检查一次有无中断请求 / Ⅲ. 检测有无 DMA 请求，一般安排在一条指令执行过程的末尾 / Ⅳ. 中断服务程序的最后指令是无条件转移指令 / Ⅴ. 中断响应判优是根据中断屏蔽字来确定中断的优先级
> - A. Ⅰ、Ⅲ、Ⅳ
> - B. Ⅱ、Ⅲ、Ⅳ、Ⅴ
> - C. Ⅱ、Ⅳ、Ⅴ
> - D. Ⅱ、Ⅲ、Ⅳ
>
> 能产生 DMA 请求的总线部件是（ ）。
>
> - Ⅰ. 高速外设 / Ⅱ. 需要与主机批量交换数据的外设 / Ⅲ. 具有 DMA 接口的设备
> - A. 仅Ⅰ
> - B. 仅Ⅲ
> - C. Ⅰ、Ⅲ
> - D. Ⅱ、Ⅲ
>
> 在具有中断向量表的计算机中，中断向量地址是（ ）。
>
> - A. 子程序入口地址
> - B. 中断服务程序的入口地址
> - C. 中断服务程序入口地址的地址
> - D. 中断程序断点

第 4 题错选为 D。对于 1，显然；对于 2，是每个指令即将结束后；对于 3，关于 DMA 是可以在指令中间执行的；对于 4，中断服务程序的最后一般不是无条件转移指令，而是继续之前的服务运行；对于 5，这里辨析一下中断响应判优和中断屏蔽字。中断响应判优是硬件排队器，焊死在主板上，而中断屏蔽字决定的事中断处理优先级，即谁能打断谁。‘中断响应判优’，管的是门外的人怎么排队进门！

‘中断屏蔽字’，管的是门内的人能不能被外面的人强行打断！

第 5 题错选为 C。高速外设不一定是使用 DMA 方式，只是最好是 DMA 方式。也可以采用其他方式，只是 CPU 会累一点。当然也可以采用管道方式。

第 6 题错选为 B。中断向量地址是中断服务程序入口地址的地址，属于背书。

![7.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAllqyKDdndZuaWtJv13eHWXi34fabQAC2RFrG6T-SFYsknV69jNhRgEAAwIAA3gAAz0E)

> 下列关于中断 I/O 方式的叙述中，错误的是（ ）。
>
> - A. CPU 对外部中断的响应不可能发生在一条指令的执行过程中
> - B. 在中断 I/O 方式下，外设接口中的寄存器和 CPU 中的寄存器直接交换数据
> - C. 中断请求的是 CPU 时间，要求 CPU 执行程序来处理发生的相关事件
> - D. 只要有中断请求发生，一条指令执行结束后 CPU 就进入中断响应周期

本题错选为 A。辨析一下外中断和内中断。在一条指令执行的时候，外中断只能发生在一条指令执行的末尾，而内中断会发生在一条指令执行的时候（例如缺页异常）。对于 D 有两种可能性，关中断/中断屏蔽。

![7.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlpqyKEIuJdshwvO4647-0SyCERPyQAC2hFrG6T-SFaMC4C2Te5KXgEAAwIAA3gAAz0E)

> 在 I/O 接口中设置中断触发器保存外设发出的中断请求，是因为（ ）。
>
> - A. 中断不需要立即处理
> - B. 中断设备的处理速度比 CPU 快
> - C. CPU 无法对发生的中断请求立即进行处理
> - D. 可能有多个中断同时发生
>
> 在中断响应周期中，由（ ）将允许中断触发器置 0。
>
> - A. 关中断指令
> - B. 中断隐指令
> - C. 开中断指令
> - D. 中断服务程序

第 14 题错选为 D。对于 A 是 C 的物理限制。多个中断同时发生，需要硬件判断器来判优，从而让 CPU 来轮流处理。

第 15 题错选为 A。背书。

![7.3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAltqyKE3T5z1oermiQ1nQteooIADSAAC2xFrG6T-SFbkL6rFm2ZUygEAAwIAA3gAAz0E)

> 设置中断屏蔽标志可以改变（ ）。
>
> - A. 多个中断源的中断请求优先级
> - B. CPU 对多个中断请求响应的优先次序
> - C. 多个中断服务程序开始执行的顺序
> - D. 多个中断服务程序执行完的次序

本题错选为 B。这里指的是中断屏蔽字，ABC 都是物理硬件的事，而谁最先，也就是门内谁可以打断谁。考虑这样一种情况，中断优先级是 A>B>C，如果没有设置中断屏蔽，那么 C 在执行过程中可以被 A 和 B 打断。如果设置中断屏蔽（例如屏蔽 A 打断的权利），那么 C 在执行过程中就不会被 A 打断。

![7.3.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAlxqyKFXDJI89tPNTzxOTuwOXIQC2AAC3BFrG6T-SFYDZ5aTDFZvMAEAAwIAA3gAAz0E)

> 以下关于 DMA 方式进行 I/O 的描述中，正确的是（ ）。
>
> - A. 一个完整的 DMA 过程，部分由 DMA 控制器控制，部分由 CPU 控制
> - B. 一个完整的 DMA 过程，完全由 CPU 控制
> - C. 一个完整的 DMA 过程，完全由 DMA 控制器控制，CPU 不介入任何控制
> - D. 一个完整的 DMA 过程，完全由 CPU 采用周期挪用法控制

本题错选为 C。前处理和后处理。

![7.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAl1qyKGFhAv0UOX63KWPtcd1p-ytlAAC3xFrG6T-SFbCg3Dh1P-ckQEAAwIAA3gAAz0E)

> 关于外中断（故障除外）和 DMA，下列说法中正确的是（ ）。
>
> - A. DMA 请求和中断请求同时发生时，响应 DMA 请求
> - B. DMA 请求、非屏蔽中断、可屏蔽中断都要在当前指令结束之后才能被响应
> - C. 非屏蔽中断请求优先级最高，可屏蔽中断请求优先级最低
> - D. 若不开中断，所有中断请求就不能响应

本体错选为 C。对于 A，DMA 请求优先；对于 B，DMA 请求在指令执行过程中就需要执行。对于 C 不确定，对于 D，有些指令即便是关中断下也必须响应。

这里需要辨析一下 DMA 和普通中断的区别，DMA 盯上的是机器周期/总线周期，而普通外中断盯上的是指令周期的缝隙。DMA 要求的是夺取 CPU 的控制权，即可以采用周期挪用/停止 CPU 访问/DMA 与 CPU 交替访问的方式。

![7.3.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAl5qyKHJPH5nKkBEdMrklFamAyQbMgAC4BFrG6T-SFajCJtK9SJH1gEAAwIAA20AAz0E)

> 中断发生时，程序计数器内容的保存和更新是由（ ）完成的。
>
> - A. 硬件自动
> - B. 进栈指令和转移指令
> - C. 访存指令
> - D. 中断服务程序

本题错选为 B。这里捋一遍中断的全流程：关中断；保存断点，也就是保存旧地址的 PC 以及 PSW；中断服务程序寻址，也就是找到新的 PC，直接覆盖；接下来是软件，把所有东西压栈，然后后续步骤。

![7.3.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAl9qyKIKBD6po12p-xXEH5x2yoB8CgAC4hFrG6T-SFZqOYsTPtQQfAEAAwIAA3gAAz0E)

> 在 DMA 方式下，数据从内存传送到外设经过的路径是（ ）。
>
> - A. 内存→数据总线→数据通路→外设
> - B. 内存→数据总线→DMAC→外设
> - C. 内存→数据通路→数据总线→外设
> - D. 内存→CPU→外设

本题错选为 A。属于低级错误。DMAC 可以理解为 DMA 的数据寄存器，数据通路是 CPU 的概念，CPU 内部主要由 CU 和数据通路构成，数据通路又可以分成数据和状态两大类，其中 ALU 属于前面的。

![7.3.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAmBqyKIdMv5-bJ2ZO-2BgWE7FtOw1QAC4xFrG6T-SFYc7w0l6BZA_AEAAwIAA3gAAz0E)

> 在磁盘存储器进行读/写操作之前，CPU 需要对磁盘控制器或 DMA 控制器进行初始化，在下列选项中，不包含在初始化信息中的是（ ）。
>
> - A. 传送信息所在的主存起始地址
> - B. 传送方向（是读磁盘还是写磁盘）
> - C. 传送信息所在的通用寄存器编号
> - D. 传送数据的字数或字节数
>
> 【2009 统考真题】下列选项中，能引起外部中断的事件是（ ）。
>
> - A. 键盘输入
> - B. 除数为 0
> - C. 浮点运算下溢
> - D. 访存缺页
>
> 【2010 统考真题】单重中断系统中，中断服务程序内的执行顺序是（ ）。
> I. 保存现场    II. 开中断    III. 关中断    IV. 保存断点    V. 中断事件处理
> VI. 恢复现场    VII. 中断返回
>
> - A. I→V→VI→II→VII
> - B. III→I→V→VII
> - C. III→IV→V→VI→VII
> - D. IV→I→V→VI→VII

第 32 题错选为 D。没必要传输 C，显然对于 DMA 方式，直接放在内存即可，不需要涉及到 CPU 寄存器

第 33 题错选为 D。属于低级错误。BCD 均为异常。

第 34 题错选为 C。辨析硬件和软件分别需要做的事情。
