---
title: 408 近年真题 2 刷（23-26）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 408 做题总结"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.16
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 408 2023 真题 2 刷

- 完成时间：20261119

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCnpq_fdAio9mWOzH2SxfCJULn0KnnQACJBdrG1aE8FfGaxkk-4YlygEAAwIAA3cAAz0E)

本题应该选 D。

很显然，对于线性表而言，查找，插入和删除平均时间复杂度都是 O(n)。

对于链表而言，如果有尾节点或者特定的结点作为插入的前缀，那么插入和删除的平均时间复杂度是 O(1)

对于查找，二者都是 O(n)

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCntq_ffFi7BhsZ9oZ9VHbKDzKfkmQgACJRdrG1aE8FcnSwvdNzPF6wEAAwIAA3cAAz0E)

本题应该选 C。

纯模拟题，考场上碰到这类题一定要回头检查的题型。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCnxq_ff-vtxtZ2u3Q9o2B2fCZWrlkgACJhdrG1aE8FfsCkHAf7FLPgEAAwIAA3cAAz0E)

本题应该选 A。

显然，对于三元组而言，只需要保存 M 的数值，M 在第几行，M 在第几列即可，和 M 中包含非零元素的行列数无关。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCn1q_fg6IpXE46IeO1saiGhy9SnaegACJxdrG1aE8FfUy5WnImmFBgEAAwIAA3cAAz0E)

本题应该选 B。

首先计算 WPL，WPL 就是加权路径，也就是 90，权值总和是 36，也就是 90/36=2.5。

顺带复习一下加权平均周转时间。

假设 0 时刻甲和乙都要打饭，甲需要 1min，乙需要 10min，乙的优先级比甲高。

普通周转时间即 10+11=21

平均周转时间即 21/2=10.5

带权周转时间即周转时间/运行时间之和，即 10/10+11/1=12

带权平均周转时间也就是 12/2=6

这个除以多少是按人头数算，而 WPL 那个是按照权值之和算。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCqFq_ht1HvlPTSl3oqg2Sldw6NjSAAN8F2sbVoTwVzqVt38IrjgoAQADAgADdwADPQQ)

本题应该选 A。

后序遍历如果是 f,d,b,e,c,a，那么也就是说，a 是填在根的，所以 C 和 D 直接排除。

将后序遍历填入树，很显然是 A 正确。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCqBq_hs9cwABXfoh9opnr6mi1Z8cyIoAAnsXaxtWhPBX58mguCCv2dgBAAMCAAN3AAM9BA)

本题应该选 B。

单源 BFS 路径查找！

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCp9q_hani_WaNRArvKB8u5VP0VC7rQACehdrG1aE8FewTqCtOeYDVAEAAwIAA3cAAz0E)

本题应该选 D。

对于 1 显然正确，对于 2，B 树的叶节点指的是空的那一层，所以一定会有变化。

对于 3，这是 B+ 树的性质，对于 4 是正确的。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCp5q_hZ33E3Y0bPTuXMQKwHLs7mziAACeRdrG1aE8FecBYmqbTcPXgEAAwIAA3cAAz0E)

本题应该选 B。

log2 601 向上取整，很显然是 10。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCp1q_hYPddXvLoGYr1edVWk9qEDqqwACeBdrG1aE8FcEECP3E35W2AEAAwIAA3cAAz0E)

本题应该选 C。

2022->2026, 2026%5=1

12->16, 16%5=1

25->29, 29%5=4

删除了关键字后，其占位不变。也就是说，最后应该是：

1+3+2+1+2=9, 9/5=1.8.

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpxq_hWqaPWkApadlLaWq73iU2eaogACdxdrG1aE8Fd9dwqhtyHWeQEAAwIAA3cAAz0E)

本题应该选 C。

属于背书题，1,3,4 不稳定。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCn5q_fiLRYMdxtl17l-Q_iCc_GjyewACKBdrG1aE8FfpvhJvHh-m_AEAAwIAA3cAAz0E)

本题应该选 D。

枢轴在执行完一趟排序后，最终应该是左侧只有比自己小的数，右侧只有比自己大的数（暂时不考虑等于的情况）。

所以，对于 A 而言，显然 68 比他大；对于 B 而言，70 的右侧有 23，舍去；对于 C 而言，80 的右侧有 77，舍去。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCn9q_fnbiCfSgPYv-q4rPYckPFrGRAACKRdrG1aE8Ff5NrYhrzmBdwEAAwIAA3cAAz0E)

本题应该选 C。

f=1.5GHz. N=5✖️10^5.

指令执行速度即 1.5G/1.2=1.25GIPS

总共执行指令所花费的时钟周期是 5✖️1.2✖️10^5=6✖️10^5，也就是说执行时间为 6✖️10^5/1.5G=4✖️10^-4=0.4ms。

综上所述，应该选 C。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoBq_ftqiKRU9CkS5p_EHzQK2O1eSAACKxdrG1aE8FdkmMkZhT4j4gEAAwIAA3cAAz0E)

本题应该选 A。

x=-8190，short 是 16 位。-8190=-8192+2=-2^13+2=1110,0000,0000,0010B=E002H，也就是 A。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoFq_fwMgkV_9su8y8SKTqbExYy1hwACMhdrG1aE8FfFgXBPnl6ipgEAAwIAA3cAAz0E)

本题应该选。

8020,0000H=1｜000,0000,0｜010,0000,0000,0000,0000,0000B.

观察符号位，显然是负数。

观察阶码，显然本题是非规格小数，加上尾数，也就是：

-0.01✖️2^-126=-1✖️2^-128，也就是选 A

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoJq_f33MTF8FUbxnrTUZevJFbeYMwACNBdrG1aE8Fex-mMFcZMbiwEAAwIAA3cAAz0E)

本题应该选 C。

30 根地址线，要求划分为 3:1，也就是说前 2 根地址线将作为地址，由于 ROM 在高位，所以很明显可以看出答案是 C。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoNq_f5oux5g4Sg13dWt5GQp9mHLtAACNRdrG1aE8FdTyfBl4HQUrQEAAwIAA3cAAz0E)

本题应该选 B。

x-y 得到的 OF 和 CF 是干扰项（也就是说出现这个和答案选不选得出来完全无关）

首先考虑 OF，由于 x 和 y 都是 int 类型，所以 x-y 在数值上是 30。30 肯定在 int 的表示范围之内，所以 OF 应该是 0。

对于 CF 而言，首先对 y 进行转义，-20 也就是 2^32-20。而 10 减去一个非常大的数，当然不够减，所以 CF=1。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoRq_f-GNeUwa_txXn5KFiLPgCIe3wACOBdrG1aE8FdyJTzYowiyMgEAAwIAA3cAAz0E)

本题应该选 A。

本题和 2010 年的某道题是同源题。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoVq_f-tG0RMcIH8tyKCZCmeEjgOuwACORdrG1aE8FeUP-076uP3_AEAAwIAA3cAAz0E)

本题应该选 B。

从这个角度理解很好理解：谁不在意下一个时序状态，也就是不留记忆。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoZq_gFe2lDo4n6hY7pFPq3VkD0WIQACOhdrG1aE8FeEe4R5cIXR2gEAAwIAA3cAAz0E)

本题应该选 C。

对于 I1 和 I2，由于采用旁路转发技术，所以可以避免。

对于 I2 和 I3，是 load-use，所以 I3 被阻塞。

对于 I3 和 I4，由于 I3 是 beg，所以要硬件阻塞，所以 I4 被阻塞。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCptq_hENJt4DCP7VJq0xg0e-Afa8lwACdRdrG1aE8FcuZRh8tGgwegEAAwIAA3cAAz0E)

本题应该选 D。

主存块大小为 32B，也就是说，32B/64bit=32B/8B=4，也就是总共是 4 个块。

准备一个块需要 6ns，也就是 24ns 打底。

由于不支持突发传送方式，所以总共要传 8 个信号。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCppq_hBHDbGIoeY0ZCB3GZN9xJfLpgACdBdrG1aE8Fd45uHNGokBZgEAAwIAA3kAAz0E)

本题应该选 D。

AB 显然都是正确说法。

对于 C，开中断的情况下自然一检测到就进行中断（以前有一次错了的误解应该在于应该在一条指令结束后检测中断所以不应该检测中断就中断响应，很显然，检测中断的前提是一条指令执行完毕）。

对于 D，外部设备不会有能力向 CPU 发送中断结束信号。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCplq_gzVGL0qMO58JmBGnpOWjjSSrgACcxdrG1aE8Ffdsj_59SG7DQEAAwIAA3kAAz0E)

本题应该选 C。

在 DMA 方式下，传送程序由 DMA 自己执行，只有齐了才是 CPU 动手。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCphq_gyv87RvWWr5MHrVlrix_8UhOAACchdrG1aE8FcmQyioHMfMjwEAAwIAA3cAAz0E)

本题应该选 D。

看到 1 直接排除，微内核的性能会差，因为要频繁的变态。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpdq_gyZNdjqcqyB8grFxmE0VXpwqQACcRdrG1aE8Fd-D-EGw_V6DgEAAwIAA3cAAz0E)

本题应该选 A。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpZq_gxFURlpCvkmd0D8x4DzWc40zAACcBdrG1aE8Fch01yBmQFZ_QEAAwIAA3cAAz0E)

本题应该选 C。

16GB/4KB=2^22 个页表，也就是 2^22/8=512KB。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpVq_gliqxHOFahKRmB2hRY9BB86xgACShdrG1aE8Fe1w72hO_FQsAEAAwIAA3cAAz0E)

本题应该选 D。

注意措辞，下列操作完成时。

进程阻塞完成时，要将之调入就绪队列，此时依旧是内核态。

执行完 CPU 调度后，注意，CPU 调度本身是由谁执行的，是操作系统，那么操作系统本身肯定不会因为执行完本次 CPU 调度就变为用户态。

其实对于 C 同理。

本题 ABC 其实都是在讲类似的事情。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpRq_gjBQZTwGX-8nxiiLxmbCL6vBgACSRdrG1aE8FdBFb1u1AyrtAEAAwIAA3cAAz0E)

本题应该选 C。

执行态变为就绪态。

如果是键盘输入，可能会从执行态变为阻塞态，阻塞态变为就绪态。

如果是缺页异常，trap 之后也是进入阻塞态。

对于 D 也是进入阻塞态。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpNq_gh-vTlENwvQr_n4sCmb3a0V8QACSBdrG1aE8Fdj9vZkvmzetQEAAwIAA3cAAz0E)

本题应该选 D。

对于 ABC 是显然正确的表述，对于 D，虚拟地址的大小和内存，硬盘无关，纯粹是自己设置的。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpJq_gdg56lT27xe1YsSnpCZCZN5_QACRxdrG1aE8Ffdab_XCZxmgwEAAwIAA3cAAz0E)

本题应该选 B。

采用纯模拟的办法，其实更准确的来讲应该是绘制时序图。

P1 进入队列之后，过了 20ms 要让给 P2，P2 执行 10ms 之后要让给 P3，P3 执行 13ms 之后，P2 重新开始执行，最后才是回到 P1。

所以，P3 的周转时间是 13ms，P2 的周转时间是 42+13=55ms，P1 的周转时间是 60+42+13=115ms

13+55+115=183，183/3=61ms。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpFq_gZG8MEYUsMWMX1Oa-u48kjgDgACRhdrG1aE8FcnMEO_Ofkp6gEAAwIAA3cAAz0E)

本题应该选。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCpBq_gXfbYzoExx7Uwi9kESKhEyl2gACRRdrG1aE8FeOK2_xb68HLwEAAwIAA3cAAz0E)

本题应该选 B。

注意题设说的是 F 仅被 P 打开并访问，所以可以排除 D。

对于 C 和 A，一个是删磁盘上的存在，一个是删目录，自然错误。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCo9q_gUuU2EhvivmrX4_pz63DjhekgACRBdrG1aE8Fc4EYsuftlKmAEAAwIAA3cAAz0E)

本题应该选 D。

其实没什么好说的。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCo5q_gSS_VCRxzkTjxszY2miU1KuTgACQxdrG1aE8FeofgWbykACrQEAAwIAA3cAAz0E)

本题应该选 D。

一组 1000✖️8/100=80ns，由于 1MB/1000B=1000 组，又由于是 2 段链路，所以应该是 1001✖️80=80.08ms。

又由于时延带宽积是 1000bits，也就意味着单向传播时延应该是 1000/100=10us。由于 H1 发送一次，R 发送一次，所以总共消耗时延 20us。

最终也就是 80.10ms。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCo1q_gRaKb8NWUAueH5O7zLC35lR2wACQhdrG1aE8Fc7zXaHS7-TDQEAAwIAA3cAAz0E)

本题应该选 C。

48/2=24，24/4=6，所以应该选 C。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCoxq_gOf_SNRYa4bVc4Xpah80TU0xAACQRdrG1aE8FcStYOnbDdTPAEAAwIAA3cAAz0E)

本题应该选 B。

对于停止等待协议，最多可以发送 1

对于 GBN 协议，最多可以发送 7

对于 SR 协议，最多可以发送 4

所以，U1<=U3<=U2，也就是 B。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCotq_gNb296GwCeHejqrrtInsEIDSQACQBdrG1aE8FekUMbPnbOD7QEAAwIAA3cAAz0E)

本题应该选 C。

由于连续发生了 4 次冲突，窗口为 0-(2^4)-1，也就是 0-15。

所以，15✖️51.2=768，也就是 C。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCopq_gLSfacbC_4y8jdM__L-cARJ9gACPxdrG1aE8Ff6RNzGE1Qb0wEAAwIAA3cAAz0E)

本题应该选 D。

由生成多项式可得式子为 10011（其实题目给了）。

1,0111,1100 对 10011 模二除法，也就是：

10111 异或 10011=00100

下去也就是 10011 异或 10011 = 00000

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACColq_gJDi_B9VHL7gJNm-0gCy-UthQACPhdrG1aE8FeythWwIQKtfAEAAwIAA3cAAz0E)

本题应该选 A。

由于实现了 NAT 功能，所以经 R2 转发，IP 源目的地职应该是 R2 的另一个 IP 地址。由于 R1 和 R2 的链路上采用的是 /30，所以对于 34=32+2=0010,0010B，也就是另一个值是 33。所以本题应该选 A。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCohq_gGhekVqMVl2x_Hx70r3PVJO6QACPBdrG1aE8FeQT1l8GyOzdwEAAwIAA3cAAz0E)

本题应该选 B。

由于子网掩码是 20，所以前 20 位是 1，也就是说和第三个数有关。

84=64+16+4=0101|0100B，所以也就是说范围是 80-95，也就是选 B。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCodq_gFvVPW6k7KeGtpJWlTzvn5qHgACOxdrG1aE8FeloDodt_Wc7wEAAwIAA3cAAz0E)

本题应该选 D。

对于 1，应该是 2^96 倍。

对于 2，IPv6 首部长度不变。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCqJq_iIONTkvW1ffJ8c8phjLZd2CWgACfRdrG1aE8Fc_G8acyKtfrgEAAwIAA3cAAz0E)

解：

(1)

1. 图的入度即邻接矩阵列之和，出度即行之和
2. 对于每个顶点，分别遍历其行，列，计算器出度，入度
3. 比较出度和入度，如果出度 > 入度，那么输出该顶点并且计数器 +1
4. 遍历完后返回 K 值

(2)

```cpp

typedef struct{
  int numVertices, numEdges;
  char VerticesList[MAXV];
  int Edge[MAXV][MAXV];
}

int printVertices(MGraph G){
  int K=0;
  for(int i=0;i<G.numVertices;i++){
    int outdegree=0,indegree=0;
    for(int j=0;j<G.numVertices;j++){
      indegree+=G.Edge[j][i];
      outdegree+=G.Edge[i][j];
    }
    if (outdegree>indegree){
      printf("%c\n",G.VerticesList[i]);
      K+=1;
    }
  }
  return K;
}

```

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCqNq_iPeYAiYRWjZ8HtKW6k1zAayjQACgBdrG1aE8FeuuZbC1ZsmLwEAAwIAA3cAAz0E)

解：

(1)

m=4 时，很显然一开始的候选值是：

51, 94, 37, 92

输出最小值 37，读入 14（14 < 37，不参与本轮）：
51, 94, 92, (14)  —— 本轮已输出：37

输出最小值 51，读入 63（63 > 51，参与本轮）：
63, 94, 92, (14)  —— 本轮已输出：37, 51

输出最小值 63，读入 15（15 < 63，不参与本轮）：
(15), 94, 92, (14)  —— 本轮已输出：37, 51, 63

输出最小值 92，读入 99（99 > 92，参与本轮）：
(15), 94, 99, (14)  —— 本轮已输出：37, 51, 63, 92

输出最小值 94，读入 48（48 < 94，不参与本轮）：
(15), (48), 99, (14)  —— 本轮已输出：37, 51, 63, 92, 94

输出最小值 99，读入 56（56 < 99，不参与本轮）：
(15), (48), (56), (14)  —— 本轮已输出：37, 51, 63, 92, 94, 99

此时工作区中 4 个数全为下一轮元素，**第一个初始归并段结束**，结果为：
**37, 51, 63, 92, 94, 99**

接下来开启**第二个初始归并段**（15, 48, 56, 14 全部激活参与本轮）：

输出最小值 14，读入 23（23 > 14，参与本轮）：
15, 48, 56, 23  —— 本轮已输出：14

输出最小值 15，读入 60（60 > 15，参与本轮）：
60, 48, 56, 23  —— 本轮已输出：14, 15

输出最小值 23，读入 31（31 > 23，参与本轮）：
60, 48, 56, 31  —— 本轮已输出：14, 15, 23

输出最小值 31，读入 17（17 < 31，不参与本轮）：
60, 48, 56, (17)  —— 本轮已输出：14, 15, 23, 31

输出最小值 48，读入 43（43 < 48，不参与本轮）：
60, (43), 56, (17)  —— 本轮已输出：14, 15, 23, 31, 48

输出最小值 56，读入 8（8 < 56，不参与本轮）：
60, (43), (8), (17)  —— 本轮已输出：14, 15, 23, 31, 48, 56

输出最小值 60（输入序列已全部读完，无新元素读入）：
(43), (8), (17)  —— 本轮已输出：14, 15, 23, 31, 48, 56, 60

此时工作区剩余 3 个数全为下一轮元素，**第二个初始归并段结束**，结果为：
**14, 15, 23, 31, 48, 56, 60**

最后开启**第三个初始归并段**（激活工作区剩余的 43, 8, 17，依次输出最小值）：
**8, 17, 43**

最终生成的 3 个初始归并段为：

- 归并段 1:37, 51, 63, 92, 94, 99
- 归并段 2:14, 15, 23, 31, 48, 56, 60
- 归并段 3:8, 17, 43

(2)

最大值是 n

最小值是 m

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCqRq_iSfgxArWuxo0ae2Un-dWk9YUgACgRdrG1aE8FdSVTmXFs6WnwEAAwIAA3cAAz0E)
