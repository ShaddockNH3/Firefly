---
title: OS 王道选择题 3 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · OS 王道选择题 3 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.12
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## OS 王道选择题 3 刷

### OS 王道选择题 3 刷第 1 章

![1.2.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADMWrDa1vde90eW_N0IfEow2b25Uf7AAIpEmsbgF8gVv6TUDJ2B8ClAQADAgADeAADPQQ)

本题错选为 B，应该从极端情况思考，显然进程数如果特别多的话，可能会引发死锁等问题，而对于 B 而言，在早期的多道程序处理系统有应用。

![1.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADMmrDbU4f7on8BywXrdXsnz5RM-NrAAIsEmsbgF8gVvtRIdpCWcULAQADAgADeAADPQQ)

错选为 A。4 是想多了，想成特殊情况例如原本进程出错需要操作系统持续接管。

![1.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADM2rDbfgxbCX0MAR7AlVOXQVFvOfoAAIxEmsbgF8gVqxyJWzcHXUxAQADAgADeAADPQQ)

错选为 C，属于低级错误。trap 指令是异常的第二类，即自陷。

![1.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADNGrDbk89K6QpWaG6LeJY1yqHTtHgAAIyEmsbgF8gVtq1iy7_6IWpAQADAgADeAADPQQ)

本题错选为 C。这道题主要是围绕概念的理解。

发生系统调用 = 系统调用的调用过程，运行在用户态。

执行系统调用 = 系统调用的被调用过程，运行在内核态。

所以，B 等价于执行系统调用，C 等价于执行一般调用。

![1.6.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADNWrDbs4hyh0Su9nYhe7QQ01UMnDhAAI0EmsbgF8gVtrgg44REwAB7QEAAwIAA3gAAz0E)

本题错选为 B，这道题属于背书题，即下面这张图：

![27 王道 p29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADNmrDbxbT-3T683LcbAlhPYP-hQwdAAI2EmsbgF8gVkqAxjheExxSAQADAgADeAADPQQ)

这张图属于薄弱点，需要着重注意。

### OS 王道选择题 3 刷第 2 章

![2.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADN2rDb2remTrpgHdbzXm0o-tIVyWFAAI4EmsbgF8gVs31eTCYoR8fAQADAgADeAADPQQ)

本题错选为 A。生命周期连续的含义指的是执行态阶段，显然在非执行态阶段，其生命周期并不连续。对于 D，总的来讲不具备可再现性。

![2.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADOGrDb7rqu9s-Ht8XWu5tWwwjMiIVAAI5EmsbgF8gVrYweg68KZd3AQADAgADeAADPQQ)

这道题需要着重理解，错选为 A。只有 CPU 才能改变运行状态。

举一个极端的例子，假设我某个程序不需要使用打印机，但是我故意写一个程序申请一台打印机（即使我全程都用不到），恰好我在申请的时候是有资源的，所以我不需要进入阻塞态，但是其他人一定要打印机的就不一定了。

![2.1.49](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADOWrDcDQvBoOzks8juC3AVGCV-hqAAAI6EmsbgF8gVo1IHYxSh7z-AQADAgADeAADPQQ)

辨析内核级线程以及用户级线程，对于用户级线程已经比较明晰了，但是对于内核级扔需要再在意。本题错选为 B，是把这道题看成了用户级线程。对于 A，由于是内核级线程，所以也是得内核切换，开销大；对于 B，在用户级线程的时候，被阻塞了那其他所有同一个进程内的线程都得被阻塞，但是内核级并非。

![2.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADOmrDcNsSp0HoSHHO8QABj-g5mU5HfAACPBJrG4BfIFYPvbCjb27-HgEAAwIAA3gAAz0E)

本题错选为 A。知识迁移不够到位，对于 3 是内存管理的只是，对于 4 是文件系统的知识。很显然后两者都是按照进程划分的。

![2.2.44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADO2rDcTTeG9dud3m8yuvkHZYshvuFAAI9EmsbgF8gVuIoAZnz71SuAQADAgADeAADPQQ)

想当然认为这道题的输入、输出设备共 1 台，错选为 C。

![2.2.56](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADPGrDcWnvUf2mq_r_S0okk8EWw6ZPAAI-EmsbgF8gVuJYNQHnxrQmAQADAgADeAADPQQ)

本题错选为 B，属于低级错误。忽略了优先级从高到低这个条件，所以选错了。由于是从高到低，所以插入的时候是 O(n)，拿的时候是 O(1)。

![2.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADPWrDcbq5xrQgfLYzwN45b2uN6fgCAAI_EmsbgF8gVh1RlUwZ1D2IAQADAgADeAADPQQ)

第 8 题错选为 C，第 9 题错选为 A。

这两题放一起讲，对于第 8 题，看错题目了，这道题是不属于临界资源，显然 B 不属于临界资源。

简单来说这道题看到临界资源和 C 就直接选了，而没有再考虑更多。

第 9 题没看 B 就直接选了 A，对于磁盘，是操作系统协调的，可以类比 SSD，SSD 肯定不是临界资源。

![2.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADPmrDcjQOo93fJ89ZkjQdsEjCksl2AAJBEmsbgF8gVvVsQuhqfPH7AQADAgADeAADPQQ)

本题错选为 B。属于没读完题目直接选 B 的低级错误。

![2.4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADP2rDcmWLuQ1x7Vb-9IomhVOQUDCqAAJCEmsbgF8gVmMMMri2nIIAAQEAAwIAA3gAAz0E)

本题错选为 A。对于 C，想成破坏循环条件了。只是区分优先级并不是区分申请顺序。

![2.4.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADQGrDcs9BeGYfvp1c-dKP5Bn81nztAAJDEmsbgF8gVoPhlG7mBpOLAQADAgADeAADPQQ)

本题错选为 A，单纯是因为想当然没有画图。

![2.4.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADQWrDc3xWTxECODo9_qPZYR6Lu-mLAAJEEmsbgF8gVmiuqY-jLkrVAQADAgADeAADPQQ)

纯懒得算。n×(k-1)+1≤m，然后把 nk 解出来就好了。

### OS 王道选择题 3 刷第 3 章

![3.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADQmrDdAQbHLUblPgc_eXnqK0h_-M9AAJFEmsbgF8gVvX6YMrUJeIZAQADAgADeAADPQQ)

本题错选为 D。对于 D，应该从 2 方面理解：

但是假设目标程序总共要 0-300 号，把 0-100 号装入第一部分内存，把 200-300 装入第 2 部分内存，这不就需要了吗？

反驳这个从两方面入手，对于传统的动态重定位，也就是整个 CPU 只有一个动态重定位寄存器，比如得连续放；即便采用分页，分段，也是按照分页规定的大小分配，根本不需要知道目标程序是什么。

![3.1.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADQ2rDdQ3goaV1AsgRacdtHgEVxWgGAAJJEmsbgF8gVqD5PIAleB1lAQADAgADeAADPQQ)

本题错选为 B。最佳使用算法是每次选择都要重新排序，根据顺序索引走的，而不是随机索引。

![3.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADRGrDdZrjKlXTNpvsH3R-qBLqPDxUAAJNEmsbgF8gVuriv8-zziOoAQADAgADeAADPQQ)

本题错选为 B。对于 B 是共享页表干的，本题应该选 A。

![3.1.38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADRWrDdd0V8jNv3IwMKQ6ocE2uVmO-AAJOEmsbgF8gVkc0DWBG-EHbAQADAgADeAADPQQ)

本题错选为 A，很经典的做对选错。

![3.1.42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADRmrDdgpN78pALc4YLsIg-o5_27fIAAJPEmsbgF8gVucSSG7Eh7SrAQADAgADeAADPQQ)

本题错选为 B。单用户连续分配指的是只有 1 个用户，所以不适合多道程序设计。

![3.1.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADR2rDdp0M2GYnrLc5BO1SZOCmTuYnAAJQEmsbgF8gVnp1ec1T5TSOAQADAgADeAADPQQ)

本题错选为 C，页内无需指定。

![3.1.60](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADSGrDdsb52EkhgLKwssTc5takrue9AAJREmsbgF8gVlzsyymfvscZAQADAgADeAADPQQ)

本题错选为 D，这道题的意思是 1 段最长，而不是总共。

![3.2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADSWrDeE2nYJ49_VqkFpG2wPh7pRaOAAJUEmsbgF8gVvkk_V_3tf9bAQADAgADeAADPQQ)

页故障的意思等同于有效位为 0。本题错选为 D。

![3.2.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADSmrDePEa6v3Ei4e1RBIq6FR7Tx1rAAJWEmsbgF8gVshLJ2DVr8YEAQADAgADeAADPQQ)

本题错选为 C。便于动态链接是段表的特点，请求分页间接扩充内存（因为可以切）

![3.2.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADS2rDeQkLt-xb-iR0NSEDunayrPA-AAJYEmsbgF8gVhDj5Zn6t3aXAQADAgADeAADPQQ)

本题错选为 B。实际上将模型绘制出来，CPU 和内存的交换速度不会影响内存和磁盘的交换。

![3.2.57](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADTGrDeTiJFcFtcqS6uJyRZ3BJ15AbAAJZEmsbgF8gVhHIgbzMN49_AQADAgADeAADPQQ)

错选为 C。把换出进程挂在页面缓冲的末尾，即便可以很快的恢复，但也是缺页。

### OS 王道选择题 3 刷第 4 章

![4.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADTWrDeZUXautU6tzuWHWru-1UKrtGAAJaEmsbgF8gVqq42uuTOFJBAQADAgADeAADPQQ)

错选为 C。异步 IO 解放的是 CPU 的生产力。

![4.2.37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADTmrDemOJznrGRsYvf5e1mGmoA3JWAAJdEmsbgF8gVhD_klA1dZfzAQADAgADeAADPQQ)

错选为 C。打开文件意思是 open，这道题的 C 只说了一半。

![4.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADT2rDes9zSJPUZ4HncWRoiGzTCFyOAAJeEmsbgF8gVpGwGciLPnHbAQADAgADeAADPQQ)

错选为 A，本题属于背书题。超级块是用来描述文件系统的全局配置与控制信息。

![4.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADUGrDftv7By4JDp8gpQI-hLXu64x_AAJmEmsbgF8gVp2tHFmVzE89AQADAgADeAADPQQ)

错选为 C，属于低级错误，不解释了。

### OS 王道选择题 3 刷第 5 章

![5.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADUWrDf7eKqT0o_7vpOgZQpPFGjL63AAJpEmsbgF8gVk4hCGxbE09cAQADAgADeAADPQQ)

本题错选为 A。A 肯定是错的，物理设备是多少就是多少个，对于 C，用户感觉在使用多个逻辑设备。

![5.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADUmrDgAnVmfc4Yra1V38TM9eZ9fIcAAJtEmsbgF8gVs6HXl_eMgMmAQADAgADeAADPQQ)

第 13 题错选为 B。操作系统决定的，所以应该是绝对号。

第 14 题错选为 A。想当然错了其实，这道题是背书题。选 C。

![5.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADU2rDg6sr6N6bWaALBkBt4nLkFILPAAJzEmsbgF8gVhh720Y9qhV8AQADAgADeAADPQQ)

第 3 题错选为 D。背答案导致的错误，其实没什么好说的。

第 4 题错选为 B。缓冲技术的缓冲池是在内存，而缓冲井是在外存。

![5.2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADVGrDhAsB2S6V1v_6y5rh2wP5B3uSAAJ1EmsbgF8gVlr6Q6grjTlhAQADAgADeAADPQQ)

本题错选为 B，这道题是背书题，SPOOLing 技术应该是输入/输出井，输入/输出缓冲区，输入/输出进程。

![5.2.30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADVWrDhGW7md_fUmrvWhhocZ5uvQ8-AAJ3EmsbgF8gVg0baLDhV9VOAQADAgADeAADPQQ)

本题错选为 D。对于打印机启动程序，它是初始化打印机的。显然这道题应该选 C。

![5.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADVmrDhKm96DmkZmyZmgh-ROjjFBscAAJ4EmsbgF8gVpgxyP__2ugUAQADAgADeAADPQQ)

错选为 A。注意这里是引导，而不是分区。

### OS 王道选择题 3 刷 - 总结

回顾了一下，其实感觉低级错误还是偏多，真的自己理解上的问题并不是很多。
