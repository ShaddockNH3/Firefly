---
title: 计组王道选择题 2 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 计组王道选择题 2 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.06
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 计组王道选择题 2 刷

### 计组王道选择题 2 刷第 1 章

发生溢出和发生舍入是两个概念。

IEEE 表示法理解为科学计数法，10(24 个 0),精读其实不会发生丢失。

![1.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeBqx7QCBBKwwZEIlmkC9wywkYlEdgAC3hJrGz_BQFbS20Cs750TsgEAAwIAA3gAAz0E)

> 完整的计算机系统应包括（ ）。
>
> - A. 运算器、存储器、控制器
> - B. 外部设备和主机
> - C. 主机和应用程序
> - D. 配套的硬件设备和软件系统
>
> 冯·诺依曼机的基本工作方式是（ ）。
>
> - A. 控制流驱动方式
> - B. 多指令多数据流方式
> - C. 微程序控制方式
> - D. 数据流驱动方式

第 1 题错选为 A。运算器 + 控制器 + 存储器是 CPU，而不是完整的计算机系统；主机 + 外设只有硬件，没有软件；主机 + 应用没有外设。

第 2 题错选为 D。冯诺伊曼机也就是现代计算机的前身，根据汇编来看的话，事实上每一条指令都是数据（只是解释的方式不一样），所以采用的是数据流驱动。显然，前面是错误的解释。对于 A，现代的计算机是根据 PC 来进行的；对于 B，指的是多核 CPU；对于 C，指的是 CPU 内部控制器；对于 D，其打破了按照顺序驱动的方式，而是某条指令的数据需求好了就立刻开始运行。

![1.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeJqx7RBmX0iaHvV6Pvgyf7izrqzOQAC3xJrGz_BQFaof20k8Rzw7QEAAwIAA3gAAz0E)

> 计算机系统采用层次化结构，从最上层的应用程序到最底层的硬件，其类型层次自上而下依次为（ ）。
>
> - A. 高级语言虚拟机→操作系统虚拟机→汇编语言虚拟机→机器语言机器
> - B. 高级语言虚拟机→汇编语言虚拟机→机器语言机器→操作系统虚拟机
> - C. 高级语言虚拟机→汇编语言虚拟机→操作系统虚拟机→机器语言机器
> - D. 操作系统虚拟机→高级语言虚拟机→汇编语言虚拟机→机器语言机器

本题错选为 A。本题可以从系统结构那门课的角度去看，并且操作系统事实上可以由汇编/高级语言编写，显然，前面是错误的解释。事实上应该从谁为谁服务的角度去考虑。机器语言只认识二进制指令，OS 对硬件（也就是裸机）进行扩展，提供了系统调用，操作系统是最接近硬件的软件；有了 OS 提供的基础服务后，程序员可以直接用汇编语言来写程序，不仅可以直接用硬件的机器指令，还可以调用 OS 提供的系统调用。

![1.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeNqx7S-XWkPRKhnyBgSja1l4Xm8VAAC4RJrGz_BQFbfQvj_K6xiQQEAAwIAA3gAAz0E)

> 【2016 统考真题】将高级语言源程序转换为机器级目标代码文件的程序是（ ）。
>
> - A. 汇编程序
> - B. 链接程序
> - C. 编译程序
> - D. 解释程序

本题错选为 D。梳理一下，这几个概念：链接指的是打包 exe；汇编指的是将汇编语言程序转换为机器级语言程序；编译指的是将高级语言转换为汇编或者机器级别语言；解释指的是将高级语言程序一条条翻译为机器级代码，不会生成代码文件。

![1.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeRqx7Tn_hDZUPBMsoHscDR9wO2N-QAC4hJrGz_BQFaidsFNYLHRmAEAAwIAA3gAAz0E)

> 在计算机 M1 和计算机 M2 上分别运行功能完全相同的高级语言程序，程序在 M1 和 M2 上的平均 CPI 相等，则对于该类程序而言（ ）。
>
> - A. M1 和 M2 执行速度相等
> - B. M1 和 M2 中主频高的计算机执行速度快
> - C. M1 和 M2 中主频低的计算机执行速度快
> - D. 无法确定哪台机器的执行速度快

本体错选为 B。平均 CPI 相等意味着每条指令的平均时钟周期数相等，功能完全相同意味着程序需要执行的指令数相同（存疑？），并且假设数量为 N。假设有两个主频，G1 和 G2，且 G1>G2，则时钟周期分别为 1/G1，1/G2，执行时间分别为 N/G1< N/G2，即 M1 中主频搞得计算机执行速度快。

事实上，功能完全相同并不意味着指令的数量相同，所以无法确定哪一台机器更快。

![1.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeVqx7UCsgT5thcNghNJX-JOLv6ujgAC4xJrGz_BQFZFTkDvUl1yowEAAwIAA3gAAz0E)

> 下列可用于评价计算机系统性能的指标是（ ）。
>
> - Ⅰ. MIPS / Ⅱ. IPC / Ⅲ. CPI / Ⅳ. 字长
> - A. Ⅰ、Ⅲ
> - B. Ⅰ、Ⅲ和Ⅳ
> - C. Ⅰ、Ⅱ和Ⅲ
> - D. 全部
>
> 计算机的机器字长与下列（ ）指标最密切相关。
>
> - A. 运算速度
> - B. 存取速度
> - C. 内存容量
> - D. 运算精度

第 7 题错选为。辨析一下各个概念，CPI 指的是平均一条指令执行需要多少个时钟周期，IPC 指的是一个时钟周期内可以执行多少条指令，IPS 指的是每秒指令执行条数；MIPS 指的是每秒执行百万条指令条数；字长可以分为 64 字，32 字等。

第 8 题错选为 B/C。机器字长越大，意味着精读越高。对于 A，运算速度更和 CPU 主频之类的相关；对于 B，存取速度（并非效率）和硬件相关；对于 C，内存容量可以堆上去。

### 计组王道选择题 2 刷第 2 章

![2.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAeZqx7Wg_KjAtFhVVD4S_6pLg4faHgAC5hJrGz_BQFazZ61K0zv5oQEAAwIAA3gAAz0E)

> 若定点整数为 64 位，含 1 位符号位，则采用补码表示的绝对值最大的负数为（ ）。
>
> - A. -2^64
> - B. -(2^64-1)
> - C. -2^63
> - D. -(2^63-1)
>
> 下列关于补码和移码关系的叙述中，（ ）是不正确的。
>
> - A. 相同位数的补码和移码表示具有相同的数据表示范围
> - B. 0 的补码和移码表示相同
> - C. 同一个数的补码和移码表示，其数值部分相同，而符号位相反
> - D. 一般用移码表示浮点数的阶码，而补码表示定点整数

第 9 题错选为 A，属于低级错误。对于这种题尤其需要注意补码的范围，千万不要想当然。补码可以表示 -2^63~2^63-1，对于无符号数则是 0~2^64-1。

第 10 题错选为 C。本题需要注意，在没有 IEEE 的语境之下，移码的默认偏移量就是 2^(n-1)，而不是 IEEE 浮点数的标准。

![2.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAedqx7XVcI-Q68d3hXS2vb7-MjgqTwAC5xJrGz_BQFaikJMMJSsCHQEAAwIAA3gAAz0E)

> 设 x 为真值，x*为其绝对值，满足[-x*]补=[-x]补，当且仅当（ ）。
>
> - A. x 任意
> - B. x 为正数
> - C. x 为负数
> - D. 以上说法都不对

错选为 B。注意 0。

![2.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAepqx7aRKECATAPy950wVRLcybw_zAAC6RJrGz_BQFYYGz89MddfbwEAAwIAA3gAAz0E)

> 若寄存器内容为 11111111，若它等于 +127，则为（ ）。
>
> - A. 反码
> - B. 补码
> - C. 原码
> - D. 移码

错选为 C。属于低级错误。

![2.1.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAetqx7bF5zJfU38CX9h2kUBxI2-luwAC6hJrGz_BQFaBo37_v9d5KQEAAwIAA3gAAz0E)

> 在计算机中，通常用来表示主存地址的是（ ）。
>
> - A. 移码
> - B. 补码
> - C. 原码
> - D. 无符号数

错选为 B。本题和后续的概念混淆，对于主存地址（显然没有负数），但是对于偏移寻址的偏移量而言，是有正负的概念之分的。

![2.1.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAexqx7bsZTZt6YkguVQIwW7gKaejpQAC7BJrGz_BQFZf9aIUNRzvwAEAAwIAA3gAAz0E)

> 【2012 统考真题】假定编译器规定 int 型和 short 型长度分别为 32 位和 16 位，执行下列 C 语言语句：
> unsigned short x = 65530;
> unsigned int y = x;
> 得到 y 的机器数为（ ）。
>
> - A. 0000 7FFAH
> - B. 0000 FFFAH
> - C. FFFF 7FFAH
> - D. FFFF FFFAH

本题错选为 A，属于低级错误，65536。unsigned short 首先先扩展为 unsigned int，也就是从 FFFA 扩展为 0000FFFA。

![2.1.34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAe1qx7b_4nFueqjvcv30_LGgaEGIWAAC7RJrGz_BQFa41dxmlQrAsAEAAwIAA3gAAz0E)

> 【2025 统考真题】在 32 位计算机上执行下列 C 语言代码段后，ui 的值是（ ）。
> short si = -32767;
> unsigned int ui = si;
>
> - A. 2^15-1
> - B. 2^15+1
> - C. 2^32-2^15-1
> - D. 2^32-2^15+1

错选为 B。对于这类题总结一下，首先先基于原来的性质去扩展位数，也就是从 short 先扩展为 int，从 -32767，也就是 1-2^15，即 8000 0000 0000 0001，扩展为 FFFF FFFF FFFF FFFF 8000 0000 0000 0001，然后再根据 unsigned int 去解释，也就是 2^32-1-(2^15-1-2)=2^32-2^15+1。

![2.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAe5qx7cZmuDLt0R0MH8YgZpGX2E07AAC7hJrGz_BQFbZkS3CKXk8mAEAAwIAA3gAAz0E)

> 下列四个补码整数存放于 8 位寄存器中，算术左移不会发生溢出的是（ ）。
>
> - A. 80H
> - B. 90H
> - C. B0H
> - D. C0H

本题错选为 C，为低级错误。算数左移不会发生溢出=符号位不变，向左移动一位，只有 D 的第一位是保持不变的。

![2.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAe9qx7cvnXZoOshrt8KpF55v7atzmQAC7xJrGz_BQFYSplHsmYq7-AEAAwIAA3gAAz0E)

> 机器运算发生溢出的根本原因是（ ）。
>
> - A. 寄存器的位数有限
> - B. 运算中将符号位的进位丢弃
> - C. 运算中将符号位的借位丢弃
> - D. 数据运算中发生错误

本题错选为 C。根本。

![2.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfFqx7eg1K7Qz-b-Y_UQtQX3QjcmtwAC8BJrGz_BQFax2nuCchZ0ogEAAwIAA3gAAz0E)

> 某计算机中有一个 8 位加法器，有符号整数 x 和 y 的机器数用补码表示，[x]补 = F5H，[y]补 = 7EH，若在该加法器中计算 x-y，则加法器的低位进位输入信息和运算后的溢出标志 OF 分别是（ ）。
>
> - A. 1、1
> - B. 1、0
> - C. 0、1
> - D. 0、0

本题错选为 B，逻辑混乱了，属于低级错误。[-y]补=10000010，[x]补+[-y]补=11110101+10000010=1 01110111，溢出，所以 OF 是 1。而由于是减法，所以补 1，所以这道题应该选 A。

![2.2.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfJqx7f6rOlDIEBCQs3w2M-O943-RwAC9BJrGz_BQFYCv8IIDw_DfQEAAwIAA3gAAz0E)

> 【2018 统考真题】减法指令 "sub R1, R2, R3" 的功能为 "(R1)-(R2)→R3"，该指令执行后将生成进位/借位标志 CF 和溢出标志 OF，若 (R1) = FFFF FFFFH，(R2) = FFFF FFF0H，则该减法指令执行后，CF 与 OF 分别为（ ）。
>
> - A. CF = 0, OF = 0
> - B. CF = 1, OF = 0
> - C. CF = 0, OF = 1
> - D. CF = 1, OF = 1
>
> 【2023 统考真题】已知 x, y 为 int 型，当 x = 100, y = 200 时，执行 "x 减 y" 指令得到的溢出标志 OF 和借位标志 CF 分别为 0, 1，那么当 x = 10, y = -20 时，执行该指令得到的 OF 和 CF 分别为（ ）。
>
> - A. OF = 0, CF = 0
> - B. OF = 0, CF = 1
> - C. OF = 1, CF = 0
> - D. OF = 1, CF = 1

第 31 题错选为 B。按照朴素的想法，显然按照有符号数解释，FFFF FFFFH=-1，FFFF FFF0H=-16，相减后肯定不会溢出，所以 OF=0，而按照无符号数解释，FFFF FFFFH>FFFF FFF0H 显然成立，够减，所以显然 CF=0。

对于这道题，理解错了 CF 的具体含义，CF 的计算方式是：A(加法为 0，减法为 1) 异或进位，朴素的可以理解为加法会不会溢出，减法够不够减，而不是判断有没有溢出。

第 32 题错选为 A。本题错误原因与 31 类似。显然按照有符号数去解释是不会发生溢出的，而按照无符号数去解释，是一个小的数去减一个很大的数，肯定不够减，所以 CF=1。

![2.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfRqx7g4KLSMYrldnloQTCnj7OqKZgAC9hJrGz_BQFZLpqSaU1t6lgEAAwIAA3gAAz0E)

> 设 x 是采用 IEEE 754 标准表示的 32 位单精度浮点数，下列说法中正确的是（ ）。
>
> I. 当|x| < 1.0×2⁻¹²⁶ 时，x 将被置为机器零
> II. 当|x| > 1.0×2¹²⁷ 时，将发生溢出
> III. x 所能表示的最小非规格化正数与最大非规格化负数的绝对值相等
> IV. x 可表示的最大正数与最小负数的绝对值相等
>
> - A. I, II, III, IV
> - B. I, II
> - C. II, III, IV
> - D. III, IV

本题错选为 C，忽略了非规格化小数。

![2.3.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfVqx7hOwoDZYq5_I84KES26Z4WD_AAC9xJrGz_BQFaxSopylAaxVQEAAwIAA3gAAz0E)

> 在按字节编址的 32 位计算机中，按边界对齐方式为以下结构型变量 x 分配存储空间：
>
> ```text
> struct cont info{
>     char id;
>     unsigned post;
>     char phone;
> } x;
> ```
>
> 若 x 的首地址为 0x8049820，则成员变量 phone 的起始地址为（ ）。
>
> - A. 0x8049828
> - B. 0x8049826
> - C. 0x8049825
> - D. 0x8049822

本题错选为 C。尤其需要注意“边界对齐”。观察这个 struct，char 占 1，unsigned(int) 占 4，char 占 1，所以每一个结构体都是 12，所以 phone 的起始地址是 +8，也就是 A。

![2.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfZqx7hhBoFXMm3OQAzfx6GO0JL4RQAC-BJrGz_BQFYc3-3Na_wuIAEAAwIAA3gAAz0E)

> 有以下 C 语言代码段：
>
> ```text
> int m=13;
> float a=12.6,x;
> x=m/2+a/2;
> printf("%f\n",x);
> ```
>
> 执行上述代码后，输出的 x 值为（ ）。
>
> - A. 12.000000
> - B. 12.300000
> - C. 12.800000
> - D. 12
>
> 【2009 统考真题】浮点加、减运算过程一般包括对阶、尾数运算、规格化、舍入和判断溢出等步骤。设浮点数的阶码和尾数均采用补码表示，且位数分别为 5 和 7（均含 2 位符号位）。若有两个数 X = 2⁷×29/32 和 Y = 2⁵×5/8，则用浮点加法计算 X + Y 的最终结果是（ ）。
>
> - A. 00111 1100010
> - B. 00111 0100010
> - C. 01000 0010001
> - D. 发生溢出

第 25 题错选为 C。属于低级错误，先计算再解释（也就是和别人合并的时候才强制类型转换，而不是一开始就强制类型转换。

第 26 题错选为 B。先过。

![2.3.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfdqx7iHSynKFqS64wEY3qdogEKLmgAC-RJrGz_BQFaMreOzZ5zlOQEAAwIAA3gAAz0E)

> 【2012 统考真题】某计算机存储器按字节编址，采用小端方式存放数据，假定编译器规定 int 型和 short 型长度分别为 32 位和 16 位，并且数据按边界对齐存储。某 C 语言程序段如下：
>
> ```text
> struct{
>     int     a;
>     char    b;
>     short   c;
> }record;
> record.a = 273;
> ```
>
> 若 record 变量的首地址为 0xC008，地址 0xC008 中的内容及 record.c 的地址分别为（ ）。
>
> - A. 0x00, 0xC00D
> - B. 0x00, 0xC00E
> - C. 0x11, 0xC00D
> - D. 0x11, 0xC00E

错选为 A。一样是边界对齐的问题。273=00 00 00 01 00 01 00 01，按照小端存储，第一个是 01，而对于 record.c，因为边界对齐，所以 short 必须得是偶数开头，所以得再 +1。

![2.3.37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfhqx7ie6TF-XhTsGnk4D2t4pIF4fQAC-hJrGz_BQFbgb0Ue64saFQEAAwIAA3gAAz0E)

> 【2020 统考真题】在按字节编址、采用小端方式的 32 位计算机中，按边界对齐方式为以下 C 语言结构型变量 a 分配存储空间：
>
> ```text
> struct record{
>     short  x1;
>     int    x2;
> } a;
> ```
>
> 若 a 的首地址为 2020 FE00H，a 的成员变量 x2 的机器数为 1234 0000H，则其中 34H 所在存储单元的地址是（ ）。
>
> - A. 2020 FE03H
> - B. 2020 FE04H
> - C. 2020 FE05H
> - D. 2020 FE06H

本题错选为 B。short 为 2，int 为 4，边界对齐，所以 x2 的首地址为 2020FE04H，由于采用的是小端法存储，所以机器数 00 先存，也就是 00，00，34，12，也就是 D。

![2.3.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAflqx7i5NHiCt65xEZEISOeHyCkbJQAC-xJrGz_BQFZ0h2RodezjQQEAAwIAA3gAAz0E)

> 【2023 统考真题】已知 float 型变量用 IEEE 754 单精度浮点数格式表示。若 float 型变量 x 的机器数为 8020 0000H，则 x 的值是（ ）。
>
> - A. -2⁻¹²⁸
> - B. -1.01×2⁻¹²⁷
> - C. -1.01×2⁻¹²⁶
> - D. 非数（NaN）

本题错选为 B。1000 0000 0010 0000 0000 0000 0000 0000，即符号位：1，阶码：0000 0000，尾数：0100…，所以本题为非规格化的小数，-2^126(0.01)，也就是移两位，所以也就是 A。

![2.3.45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfpqx7joavsNSE97ekxhtX_ZjrssSQAC_BJrGz_BQFY33U83JjBsVwEAAwIAA3gAAz0E)

> 【2025 统考真题】某 32 位计算机按字节编址，采用小端方式存放数据，编译器按边界对齐方式为下列 C 语言结构型数组变量 employee 分配存储空间。
>
> ```text
> struct record {
>     int   id;
>     char  name[10];
>     int   salary;
> }employee[200];
> ```
>
> 若 employee 的首地址为 0000 A0B0H，employee[1].id 的机器数为 1234 5678H，则该机器数中的 56H 所在存储单元的地址是（ ）。
>
> - A. 0000 A0C3H
> - B. 0000 A0C4H
> - C. 0000 A0C5H
> - D. 0000 A0C6H

本题错选为 A，一样也是边界对齐问题，struct 结构体：4+10(+2)+4，所以 0000A0B0+20=0000A0C4，由于采用的是小端法，所以 78，56，也就是 C5。

### 计组王道选择题 2 刷第 3 章

![3.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAftqx7kSaWdDq_I80iK0_aZto76l6gAC_RJrGz_BQFa08emSl8hxTwEAAwIAA20AAz0E)

> 存储器的存取周期是指（ ）。
>
> - A. 存储器的读出时间
> - B. 存储器的写入时间
> - C. 存储器进行连续读/写操作所允许的最短时间间隔
> - D. 存储器进行一次读/写操作所需的平均时间

本题错选为 D。本题主要是辨析存储时间和存储周期的概念，存储时间仅包含具体的 IO，而存储周期需要包含 IO 的恢复。

![3.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAfxqx7koyEEv6D__Bj9okpgGP5rG2wAC_hJrGz_BQFYue5dkAo5hXQEAAwIAA20AAz0E)

> 下列说法正确的是（ ）。
>
> - A. EPROM 是可改写的，因此可以作为随机存储器
> - B. EPROM 是可改写的，但不能作为随机存储器
> - C. EPROM 是不可改写的，因此不能作为随机存储器
> - D. EPROM 只能改写一次，因此不能作为随机存储器

本题错选为 A。本题与 1 刷时错因类似，随机存储器指的是 RAM

![3.2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAf1qx7lELimCeMrZT7zitwptDD2_QwAC_xJrGz_BQFaM5HhCzlfFiwEAAwIAA3gAAz0E)

> 某机器采用四体低位交叉存储器，现分别执行下述操作：① 读取 6 个连续地址单元中存放的存储字，重复 80 次；② 读取 8 个连续地址单元中存放的存储字，重复 60 次。则①、②所花费的时间之比为（ ）。
>
> - A. 1:1
> - B. 2:1
> - C. 4:3
> - D. 3:4

本题错选为 A。读取 6 个连续地址的存储字，重复 80 次，也就是需要 120 个 4 时间单位，读取 8 个连续地址单元存放的存储字，重复 60 次，也就是需要 120 个 4 时间单位，这是错误的想法。

正确的想法应该是绘制时空图，存取 6 个连续地址的存储字，1 次需要 5 个时间单位，重复 80 次需要 400 个时间单位；读取 8 个连续地址单元的存放字，1 需要 5 个时间单位，重复 60 次需要 300 个时间单位，所以 400:300=4:3。

本题需要注意这道题不是流水线，而是 1 次操作后重复。

然而即便是采用流水线，本题稳定下来的时间 1 和 2 是一样的，所以只是看重复次数。

![3.2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAf5qx7lbkaLyGK0d8jVJ6Ulzqs6m0gADE2sbP8FAVqJEXHnb7DBEAQADAgADeAADPQQ)

> 下列关于单体多字存储器的说法中，不正确的是（ ）。
>
> - A. 单体多字存储器主要解决主存容量太小的问题
> - B. 单体多字存储器中，每个存储单元存储多个字
> - C. 指令与数据的连续存放有利于单体多字存储器提高主存的读/写速度
> - D. 过多的转移指令会严重影响单体多字存储器的工作效率

本题错选为 C。和 1 刷时错的地方类似。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAf9qx7l3438jqDnC_fzCxawQe-iXrQACARNrGz_BQFa3LxJ5YlVjqAEAAwIAA3gAAz0E)

> 地址总线 A₀（高位）~ A₁₅（低位），用 4K×4 位的存储芯片组成 16KB 存储器，则产生片选信号的译码器的输入地址线应该是（ ）。
>
> - A. A₂A₃
> - B. A₀A₁
> - C. A₁₂A₁₅
> - D. A₁₄A₁₅

本题错选为 C。注意高位和低位。

![3.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgABase5yfoc6vVbBOh_yZWrjBFSCFcAAgMTaxs_wUBWpaIbLQq8YSYBAAMCAAN4AAM9BA)

> 【2011 统考真题】某计算机存储器按字节编址，主存地址空间大小为 64MB，现用 4M×8 位的 RAM 芯片组成 32MB 的主存储器，则存储器地址寄存器 MAR 的位数至少是（ ）。
>
> - A. 22 位
> - B. 23 位
> - C. 25 位
> - D. 26 位

本题错选为 C。主存空间大小为 64MB，也就意味着至少需要 2^26，由于采用的是 4M×8 位的，也就是需要 4 块芯片来组成 32MB。由于你不知道这块主存放在哪，有可能放在后续的位置，所以还是需要 64MB。

本题需要辨析主存地址空间大小和实际存储容量。主存地址空间是 CPU 主板硬件设计时允许的最大寻址范围，而实际主存容量是掏钱自己买的。

![3.4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgFqx7nrPgZK2dDTGaJO_aN8Hn-PVwACBBNrGz_BQFa1ssSDabBuwwEAAwIAA20AAz0E)

> 下列有关磁盘存储器读/写操作的叙述中，错误的是（ ）。
>
> - A. 最小读/写单位可以是一个扇区
> - B. 采用直接存储器存取 DMA 方式进行输入/输出
> - C. 按批处理方式进行一个数据块的读/写
> - D. 磁盘存储器可与 CPU 交换盘面上的存储信息

本题错选为 B，本质是对 DMA 方式的不理解，磁盘采用的是 DMA 方式与主存交换数据，对于 D，显然错误。

![3.5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgJqx7oJdI5cXa3fbKa26FBmZ7LJvgACBhNrGz_BQFYWiKw2Jiu50QEAAwIAA20AAz0E)

> 下列关于 Cache 的描述中，比较合理的是（ ）。
>
> I. 指令 Cache 通常比数据 Cache 具有更好的空间局部性
> II. 由于空间局部性，适当增加 Cache 块大小通常会提高命中率
> III. 回写法的写主存操作次数少于直写法
>
> - A. III
> - B. I 和 II
> - C. II 和 III
> - D. I 和 II 和 III

本题错选为 A。对于 1，由于指令一般是顺序执行的，而数据只是数据，所以 1 正确；对于 2，“适当”，是正确的；对于 3，回写法是在修改的时候写 cache，而不是写主存，所以少于直写法。

![3.5.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgNqx7ppkEPAmFHH_XzJOiRw0ue8dgACCRNrGz_BQFZ_F79FV1qQ8AEAAwIAA3gAAz0E)

> 某计算机的 Cache 有 16 行，块大小为 16B，其映射方式可配置为直接映射或 2 路组相联映射，主存按字节编址，主存单元从 0 开始编号。若依次访问下列主存单元，则不论采取上述哪种映射方式都可能引起 Cache 冲突的是（ ）。
>
> - A. 52 号和 102 号单元
> - B. 48 号和 308 号单元
> - C. 60 号和 160 号单元
> - D. 46 号和 236 号单元

本题错选为 D。解题方法 1 刷复盘时写了。

![3.5.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgRqx7qM4x0AAaGsqrO-7fcoI5nvefkAAgoTaxs_wUBWpJC1yF8mrcgBAAMCAAN4AAM9BA)

> 下列关于 Cache 大小、主存块大小和 Cache 缺失率之间关系的叙述中，错误的是（ ）。
>
> - A. 主存块大小和 Cache 容量无直接关系
> - B. Cache 容量越大，Cache 缺失率越低
> - C. 主存块大小通常为几十到上百字节
> - D. 主存块越大，Cache 缺失率越低

本题错选为 B，具体原因 1 刷那里写了。

![3.5.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgVqx7qxoMqLvDLQAAHNhWERD-saIiwAAgsTaxs_wUBWdSpGv_q8lOoBAAMCAAN4AAM9BA)

> 【2009 统考真题】某计算机的 Cache 共有 16 块，采用 2 路组相联映射方式（每组 2 块），每个主存块大小为 32B，按字节编址，主存 129 号单元所在主存块应装入的 Cache 组号是（ ）。
>
> - A. 0
> - B. 2
> - C. 4
> - D. 6
>
> 【2012 统考真题】假设某计算机按字编址，Cache 有 4 行，Cache 和主存之间交换的块大小为 1 个字。若 Cache 的内容初始为空，采用 2 路组相联映射方式和 LRU 算法，则访问的主存地址依次为 0, 4, 8, 2, 0, 6, 8, 6, 4, 8 时，命中 Cache 的次数是（ ）。【提示，本题的映射方式与本书所讲的映射方式不同，具体见解析部分的"注意"】
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

第 29 题错选为 A。显然这道题是从 0 开始编址，129 号存储单元即 129/32=4，也就是存储在第 4 块主存块（按从 0 开始算）。采用 2 路组相联，所以需要 16/2=8，也就是 3 个 bit 存储 cache 行号。由于存储在 4 号主存块，所以 4%8=4，所以应该存放在第 4 组。

通过这道题辨析一下主存单元的概念，主存单元来源于计算机如何编址，按照字节编址，一个主存单元就是一个字，其他同理。

对于这类题，也可以直接展开为 16 进制取对应的位，也是一样的（其实等同于取模）

第 30 题棍母，先跳了。

![3.5.30 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgZqx7riWHbXWImryznfQz__Nc1G8gACDBNrGz_BQFZ3pvJevHvSfwEAAwIAA3gAAz0E)

> [原图非题目：主人关于组相联映射方式的订正/解析笔记截图，含 Cache 置换过程表与"注意"说明框]

![3.5.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgdqx7r2rj3zDFZCXiZoYpgiJPRNQwACDRNrGz_BQFbDnikVghCMbgEAAwIAA3gAAz0E)

> 【2016 统考真题】有如下 C 语言程序段：
>
> ```text
> for(k=0; k<1000; k++)
>     a[k] = a[k]+32;
> ```
>
> 若数组 a 和变量 k 均为 int 型，int 型数据占 4B，数据 Cache 采用直接映射方式，数据区大小为 1KB、块大小为 16B，该程序段执行前 Cache 为空，则该程序段执行过程中访问数组 a 的 Cache 缺失率约为（ ）。
>
> - A. 1.25%
> - B. 2.5%
> - C. 12.5%
> - D. 25%

本题错选为 D。由于采用直接映射，每块可以存储 16B/4B=4 个 int 数据，所以每访问 4 个数据就有 1 次 cache 缺失，而需要注意的是，本题每次访问两次 a[k]，总共方位 2000 次，也就是每访问 8 个数据 1 次 cache 缺失，所以最终答案是 C。

![3.6.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAghqx7uicMf5A_dEKQGDWj9H3WPZHQACDhNrGz_BQFb0OKiTdqN_7QEAAwIAA3gAAz0E)

> 虚拟存储管理系统的基础是程序访问的局部性原理，此理论的基本含义是（ ）。
>
> - A. 在程序的执行过程中，程序对主存的访问是不均匀的
> - B. 空间局部性
> - C. 时间局部性
> - D. 代码的顺序执行

错选为 C，与 1 刷时错误原因类似。

![3.6.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAglqx7wPZW1fi0tOrXToo6BmbJJP5QACERNrGz_BQFYjXGJPIjrd-AEAAwIAA3gAAz0E)

> 【2020 统考真题】下列关于 TLB 和 Cache 的叙述中，错误的是（ ）。
>
> - A. 命中率都与程序局部性有关
> - B. 缺失后都需要去访问主存
> - C. 缺失处理都可以由硬件实现
> - D. 都由 DRAM 存储器组成

本题错选为 C。本题错选为 C，显然 D 是错的。TLB 和 cache 都采用 SRAM，其中 TLB 也可以采用相联存储器 CAM。SRAM 是静态随机存储器。TLB 本质上是内存的一块区域。

![3.6.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgpqx7wo0rOmCOTErZDsqJxjnIAXmQACEhNrGz_BQFaQy8xrOU7UNQEAAwIAA3gAAz0E)

> 【2024 统考真题】某计算机按字节编址，采用页式虚拟存储管理方式，虚拟地址为 32 位，主存地址为 30 位，页大小为 1KB。若 TLB 共有 32 个表项，采用 4 路组相联映射方式，则 TLB 表项中标记字段的位数至少是（ ）。
>
> - A. 17
> - B. 18
> - C. 19
> - D. 20

本题错选为 C。TLB 的标记字段是虚拟地址。由于 TLB 页大小为 1 个页，所以需要 10bit 来存储块内地址，由于采用 4 路组相联，所以 32/4=8，需要 3bit 来存储 TLB 行号，所以 32-3-10=19。

### 计组王道选择题 2 刷第 4 章

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgtqx7xYPX_rGLBKvr87_Ovq_MblfwACExNrGz_BQFYHGIUaFaRq3wEAAwIAA3gAAz0E)

> 为了缩短指令中某个地址段的位数，有效的方法是采取（ ）。
>
> - A. 立即寻址
> - B. 变址寻址
> - C. 间接寻址
> - D. 寄存器寻址

本题错选为 B，与 1 刷时错误原因类似。

![4.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAgxqx7xtiRFe10PW6DZf4zPLoyCkiwACFBNrGz_BQFbnFVU1NwcjrQEAAwIAA20AAz0E)

> 相对寻址方式中，指令所提供的相对地址实质上是一种（ ）。
>
> - A. 立即数
> - B. 内存地址
> - C. 以本条指令在内存中首地址为基准位置的偏移量
> - D. 以下条指令在内存中首地址为基准位置的偏移量

本题错选为 C，与 1 刷时错误原因类似，属于低级错误。

![4.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAg1qx7yHKSmA9-KopZCz_FUsPBS1MAACFRNrGz_BQFapiTySaZZYfgEAAwIAA3gAAz0E)

> 寄存器 R1、R2 均为 16 位，指令 MOV R1, [R2]的功能是把内存数据传送至寄存器 R1，寻址方式为寄存器间接寻址。R2 的值为 1234H，内存单元 1234H 存放数据 56H，内存单元 1235H 存放数据 78H，采用小端方式存储，则执行指令后 R1 的值为（ ）。
>
> - A. 5678H
> - B. 7856H
> - C. 8765H
> - D. 6587H

本题错选为 A。R2 的值为 1234H，1234H 存放的数据为 56H，由于寄存器是 16 位，所以应该是移动 2B 到寄存器里，所以是将 1234H 和 1235H 的内容移动到 R1，由于采用小端法，所以在以人类的视角阅读时，和计算机是反过来的，所以低地址的在后面，高地址的在前面，也就是 7856H。

![4.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAg5qx7ydXCGa0-4yPDfKZMaMaVdMOAACFhNrGz_BQFZLTEiAcZeMLwEAAwIAA3gAAz0E)

> 【2009 统考真题】某机器字长为 16 位，主存按字节编址，转移指令采用相对寻址，由 2 字节组成，第一字节为操作码字段，第二字节为相对位移量字段。假定取指令时，每取一字节，PC 自动加 1。若某转移指令所在主存地址为 2000H，相对位移量字段的内容为 06H，则该转移指令成功转移后的目标地址是（ ）。
>
> - A. 2006H
> - B. 2007H
> - C. 2008H
> - D. 2009H

本题错选为 B。机器字长为 16 位，采用相对寻址，2 字节组成，显然一条指令长度为 2B，所以每次 PC 值应该 +2，所以由于本来在 2000H，自动 +2，也就是 2002H，转移 06H，即 2008H。

![4.2.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAg9qx7yy29PqJNDzNp9gL7IGsRtcKgACFxNrGz_BQFY8tHEWRvZwNwEAAwIAA3gAAz0E)

> 【2018 统考真题】按字节编址的计算机中，某 double 型数组 A 的首地址为 2000H，使用变址寻址和循环结构访问数组 A，保存数组下标的变址寄存器的初值为 0，每次循环取一个数组元素，其偏移地址为变址值乘以 sizeof (double)，取完后变址寄存器的内容自动加 1。若某次循环所取元素的地址为 2100H，则进入该次循环时变址寄存器的内容是（ ）。
>
> - A. 25
> - B. 32
> - C. 64
> - D. 100
>
> 【2019 统考真题】某计算机采用大端方式，按字节编址。某指令中操作数的机器数为 1234 FF00H，该操作数采用基址寻址方式，形式地址（用补码表示）为 FF12H，基址寄存器的内容为 F000 0000H，则该操作数的 LSB（最低有效字节）所在的地址是（ ）。
>
> - A. F000 FF12H
> - B. F000 FF15H
> - C. EFFF FF12H
> - D. EFFF FF15H
>
> 【2020 统考真题】某计算机采用 16 位定长指令字格式，操作码位数和寻址方式位数固定，指令系统有 48 条指令，支持直接、间接、立即、相对 4 种寻址方式。在单地址指令中，直接寻址方式的可寻址范围是（ ）。
>
> - A. 0~255
> - B. 0~1023
> - C. -128~127
> - D. -512~511

第 30 题错选为。考虑 double 型数组占 64bit，即 8B。也就是说，2100H-2000H=100H 即 0001 0000 0000，100H>>3=20H=0010 0000H，即 32。本题没有搞清楚 16 进制和 2 进制的相关问题。

第 31 题错选为。显然，该地址为 F000 0000H+FFFF FF12H=EFFF FF12H，由于采用大端法，所以 12H 作为高位存储在 EFFF FF12H，而 00H 存放在 EFFF FF15H。

第 32 题错选为 C。48 条指令意味着意味着指令长度有 2^6，也就是需要用 6 位表达，寻址方式 4 种即 2 位表示，所以还剩下 16-2-6=8 位可以用来表示地址长度，由于直接寻址只有正数，主存地址不可能为负。

### 计组王道选择题 2 刷第 5 章

---
