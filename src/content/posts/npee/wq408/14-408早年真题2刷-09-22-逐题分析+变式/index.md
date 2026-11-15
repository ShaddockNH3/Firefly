---
title: 408 早年真题 2 刷（09-22，逐题分析 + 变式）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · 408 早年真题 2 刷（09-22，逐题分析 + 变式）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.14
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## 408 早年真题 2 刷（09-22，逐题分析 + 变式）

二刷采用分析 + 一遍过的方式，不允许检查。

### 408 2009 真题 2 刷

- 分数为 148
- 第 40 题错误，FTP 协议数据端口和控制端口分析问题

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARtqxjZVxFykGM7L_ln6lZW6n2E9NQAC5xNrGz_BMFZrl2tlKseJMQEAAwIAA3gAAz0E)

本题应该选 B。

分析 A，对于栈在计算机的应用主要是递归函数，自身的应用可以是求后缀表达式，dfs，先序遍历，中序遍历，后序遍历。

分析 B，自身的应用例如树和图的层次遍历。在操作系统中，除了缓冲区之外，还可以在公平竞争的调用队列（比如说 RR 调度，比如说读写公平的读者写者问题）

分析 C，树可以用来表示文件系统，也可以作为关系数据库的索引（例如 B+ 树）

分析 D，图在操作系统里也可以表示文件系统，应用例如资源分配图，进程前驱图（和拓扑排序相关）

本题考察的内容在王道书 3.3 小节。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARxqxjhqygqk0_N93LnK0yvsMVlOfAAC6xNrGz_BMFb0X_7s2YJa4wEAAwIAA3gAAz0E)

本题应该选 C。

队列是 FIFO，出队顺序等于出栈顺序，所以：

a

a，b

a，c

a，c，d

a，e

a，e，f

g

顺序如上所示，所以最长是 3。

这类题的变式例如受限队列，也就是两端均可插入但只有一端可以出队，或者只有一端可以入队但是有两端可以出队。主要是要看清楚题目意思，不会难。

还有的变式就是判断求后缀表达式值的时候，栈的大小，需要注意数在哪，求后缀表达式的时候，默认双操作符的数是：

后弹出来的 op 先弹出来的。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAR1qxjnxgj3G44RVSOmR9HnpQ40RjQAC7hNrGz_BMFYe5vAeBlqzJQEAAwIAA3gAAz0E)

本题应该选 D。

遍历方式主要有 4 种，先序遍历对应根左右，中序遍历对应左根右，后序遍历对应左右根，层次遍历没有对应的。

但是需要注意一个特殊情况，也就是根右左，注意到根右左是后序遍历左根右的逆序。

当然对于其他情况，例如右根左等也需要具体题目具体分析。

本题显然是右根左的情况，所以是 RNL，也就是 D。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAR5qxjq0DUJw4H4rRg8gZh53U9bdkAAC8RNrGz_BMFZFPV2mt9FqqQEAAwIAA3gAAz0E)

本题应该选 B。

树这块考研大纲主要有以下几类：

- 二叉树
- 线索二叉树
- 森林
- 二叉排序树
- 平衡二叉树
- 红黑树
- B 树/B+ 树
- k 叉哈夫曼树

对于树的形态辨析，主要是集中在二叉排序树（二叉搜索树），平衡二叉树，红黑树，B 树/B+ 树。

对于二叉排序树，其只需要满足按照中序遍历为不减序列即可。

对于平衡二叉树，则需要满足整棵树左子树和右子树高只差的绝对值小于等于 1 即可，可以注意最少结点的平衡二叉树公式，即变式的斐波那契数列。对于高为 h 的 AVL 树，和标准斐波那契数列的关系是 N(h)=F(h+2)-1。标准斐波那契数列是 0,1,1,2,3,5,8,13,21。例如对于高为 5 的平衡二叉树，其最小应该是 13-1 即 12 的高度。

对于红黑树，则是 12 字咸鱼口诀：左根右，根叶黑，不红红，黑路同。注意红黑树查找略比平衡二叉树慢，红黑树相交易平衡二叉树的优化主要在减少了频繁调整上。

对于 m 阶 B 树，一个结点最多可以有 m-1 个值，除了根节点之外，最少则是 m/2 向上取整 -1。

对于 B+ 树，必须得查找到最后一层，且可以按照顺序查找的方式查找。

此外还需要注意，红黑树，B 树，B+ 树的叶子结点都指的是空节点。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAR9qxj0zUb7UFtXxyVzyqdYjIu4hMgAC9RNrGz_BMFYZbFbaHcVkygEAAwIAA3gAAz0E)

本题应该选 C。

什么是完全二叉树，完全二叉树的意思是说以父亲表示法排列，必须从头开始连续到尾巴。

这类题需要考虑两种情况，第一种是第 6 层是最后一层，第二种是第 7 层是最后一层。求最多一定是第 7 层是最后一层。

完全二叉树结点的计算公式为：$2^h-1$，前 6 层是满的，那么也就是 $2^6-1=63$。对于第 7 层，当第七层是满的时候，应该有 $2^{7-1}=64$ 个结点，为了让上一层有 8 个叶节点，那么也就是 $64-8\times2=64-16=48$。

所以，总共应该是 63+48=111，选 C。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASBqxj4HgCEIr2y8HhfBV1j4xRH7tgAC9xNrGz_BMFbvKxnek7GOvgEAAwIAA3gAAz0E)

本题应该选 B。

森林和二叉树的关系，主要用特值法求解。

但是有两个需要注意，森林的先根遍历=二叉树的先序遍历，森林的后根遍历=二叉树树的中序遍历，普通树的先序遍历=二叉树的先序遍历，普通树的中序遍历=二叉树的中序遍历。

![6 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASFqxj8u9eLNEFCQ48c2EwyZ7kLn0gAC-xNrGz_BMFYCJ5zStCPnYQEAAwIAA3cAAz0E)

本题的关系如图所示，可能有这四种关系。根据左孩子右兄弟可以进行如下分析：

关系 1，u 是 v 的祖父

关系 2，u 是 v 的父亲

关系 3，u 是 v 的叔父，即 u 与 v 的父亲结点是兄弟

关系 4，u 是 v 的兄弟

综上所述，1 和 2 正确，3 错误，所以选择 B。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASJqxj_asGktsw89rEZiIDLQh9Jb7wAC_hNrGz_BMFZfBjbx4NfIKAEAAwIAA3gAAz0E)

- A.只有 1
- B.只有 2
- C.1 和 2
- D.1 和 3

本题应该选 A。

做这类题一般是用排除法和特值法。

什么是无向连通图，无向连通图的意思是说从任意一个结点出发都可以到达另一个结点。

对于 1，由于所有结点都必须和别人互通，所以图中的每一条边，都恰好为图的顶点度数之和贡献了 2 点（握手定理）

对于 2，如果边数=顶点数 -1，在它是无向连通图的前提下，它是一棵树，一棵树显然是连通的，所以 2 错了，如果想让他正确，应该改为边数大于等于顶点个数 +1。还有一点需要注意，如果没有无向连通图这个前提，只说了边数大于等于顶点数 -1，不能判断其是否连通，因为可以一堆点自己排列，然后其他点使用最大的连接方式。

对于 3，只有一个顶点的图也是连通图。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASNqxkG9rwN7PbTSaf-bdninAAEc2EAAAgIUaxs_wTBW0H_ofAh0XB8BAAMCAAN4AAM9BA)

本题应该选 D。

D 是 B+ 树的特性。关于 B 树和 B+ 树的区别，主要在于：

m 阶 B 树一个结点内关键字最多 m-1 个，而 B+ 树则是 m 个，B 树最少是 m/2 向上取整 -1，而 B+ 树则是 m/2 向上取整。

B+ 树非叶结点的关键字都只是为了查找，数据都在叶结点，所以必须要查找到最后一层，且 B+ 树支持顺序查找。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASRqxkLDzn5bNI138-bWKcR052R9LQACBBRrGz_BMFbjqaCKnU3oWwEAAwIAA3gAAz0E)

本题应该选 A。

堆采用树的父亲表示法，用于排序（而不用于查找）。对于堆排序，首先先花费 On 的时间建堆，然后花费 nlogn 的时间排序。

需要注意，排成升序序列采用大根堆，反之则采用小根堆。

堆插入的时候是在最后一个位置插入，如图所示进行交换。

![9 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASVqxkOz3HxSd-ygMnIAAWEWCg4fE_AAAgkUaxs_wTBWNUjRB3drUXkBAAMCAAN5AAM9BA)

除了这种考法之外，还可以考比较次数。对于比较次数，尤其需要注意，假设 a 被换上来的，那么即便最终不会再换上去，也需要再和可能的比较一次（这个需要记住）

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASZqxkQjOBr2kg8TzkeDjs65rs2I-AACCxRrGz_BMFbh-MqPkdtOKgEAAwIAA3gAAz0E)

本题应该选 B。

第二趟排序问题可能会考大纲里的所有排序，这里就不列举了。

重要的是一定要记清楚每一个排序的过程是什么。对于这道题：

11,12,13,7,8,9,23,4,5.

对于冒泡排序，是“沉底”，也就是每次都交换出来一个最大的到最后或者最小的到最前，舍去。

对于直接插入排序，是本题的结果。

对于选择排序，简单选择排序是每次选择一个最小的数放在开头，然后开头标记 +1（或者最大的放末尾），舍去。

对于二路归并排序，本题总共是 9 个数，所以应该切分为：11,12,13,7；8,9,23,4,5，然后再切分：11,12；13,7；8,9；23,4,5，然后再切分变成只有一个数，然后按照从后向前的顺序依次归并。显然这道题也不是，舍去。

考的比较多的还有希尔排序和快排。

还有一些其他考法，例如比较次数，交换次数等的比较，一定要分清楚比较次数和交换次数。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASdqxkVVpJLwaz2bFvY0FQ-XECVkUAACEBRrGz_BMFZ5578BsofiFwEAAwIAA3gAAz0E)

本题应该选 C。

冯诺依曼计算机指令和数据都以二进制的形式存放在存储器中。

对于 A，指令操作码的译码结果意思是把这条指令翻译成具体的意思，例如从内存 0x00h 中取出一个数（直接寻址）指令译码和数据毫无关系。

对于 B，指令的寻址方式有 2 中，顺序寻址和跳跃寻址，数据的寻址方式有 10 种，隐含寻址，立即数寻址，直接寻址，间接寻址，寄存器寻址，寄存器间接寻址，相对寻址，基址寻址，变址寻址，堆栈寻址。跳跃寻址和相对寻址是类似的，所以不可以通过这两个来区分。

对于 C，以指令流水段的不同阶段举例，一条指令需要经过五个阶段：取指令，分析指令，执行指令，访存和写回。显然对于一个取数指令，在取指令的阶段得到指令的数据，在分析指令的过程得到其含义，而通过这个含义去执行取数指令（简单的访存指令没有执行阶段），通过访存得到数据，从而找到数据。

对于 D，显然错误。

还可以注意冯诺依曼计算机是指令流驱动。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAShqxkbad4ulfYE12TQJCN1IbGnLTwACGxRrGz_BMFZjuFVXNRVUZgEAAwIAA3gAAz0E)

本题应该选 D。

显然排除 A 和 B。127-9=118=7×16+6，所以选 D。

这类题除了这么考，还可以考更深的数的扩展，数是否溢出，精度是否丢失，或者考 OF，ZF，SF，CF 的值。

还可以注意，对于很多时候，都可以使用十进制计算来快速判断，而不是在那里二进制算半天。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASlqxkd_FlNH6lGgMLBBiYKie2InFwACIhRrGz_BMFbeOhiTufNtOwEAAwIAA3gAAz0E)

本题应该选 D，这题先跳过，因为 2009 年之外，其他年份都是考 IEEE 浮点数。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASpqxkegh3YtKtTUWHkgs8xz_i_Y1wACJBRrGz_BMFbqbBwa40hijAEAAwIAA3gAAz0E)

本题应该选 C。

这类题在刚开始学计组的时候是难题，但是放在现在一定是简单题。cache 有 16 块，采用 2 路组相联，所以时 16/2=8 组，也就是需要 3 位。块内地址有 32B，也就是 5 位。

主存单元 129 号，意思不是块，而是考虑了块内地址的（这个要和多少号主存单元区分）。

129=1000,0001B，前 3 位为 100，所以是第 4 组。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAStqxkhuwI5HSAKWLIkfntRUg-4RQQACLxRrGz_BMFZytQ_teF0DUQEAAwIAA3gAAz0E)

本题应该选 D。

4KB/(2KB)=2

64K-4KB=60KB。

60KB/(4K×4bit)=30

这类题考起来也不会很难，难一点的需要将 16 进制转换为 2 进制进行分析。

需要注意地址线可能会用不满，而且也需要根据题目具体题目具体分析地址线高位是 0 还是低位是 0。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACASxqxkkY49tA-QKr-kXJU-f1nQM71QACMxRrGz_BMFZIRypBpAHy6AEAAwIAA3gAAz0E)

本题应该选 C。

PC+“1”是硬件自动完成的，这道题的“1”是 +2，所以执行 2000H 的时候，地址是在 2002H，偏移字段为 06H，则 +6H 即可，也就是 C。

但是要注意反套路，有些很神秘的题目是按字编址，

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAS1qxkmBEb6zKl32D82GAbTR6OqFkwACNRRrGz_BMFZVUwABNWMRuiQBAAMCAAN4AAM9BA)

本题应该选 A。

辨析 RISC 和 CISC，其实也就是辨析 MIPS 和 x86 两套东西，这个和计组大题强相关。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAS5qxkm-bDn4WG65ZA6jE4vCZ8egIAACNhRrGz_BMFZE0pU3kfra8AEAAwIAA3gAAz0E)

本题应该选 A，指令流水段根据最长的来定。

同类知识点还可以注意指令流水段的相关概念，超标量技术，超流水线技术和超长指令字技术。

对于超标量技术采用的加硬件的方法，并没有缩短流水段，对于超流水线技术才是缩短了流水段。

知识可以迁移到单周期 CPU，单周期 CPU 由于要保证间隔相同，所以取决于最长的指令，也因此单周期 CPU 不适合乘法，因为乘法消耗太大了，所有东西都得为它让路。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAS9qxkqYajKaqwI5tW4_8-j_bE_CKgACQBRrGz_BMFZOH8D6j6GwqAEAAwIAA3gAAz0E)

本题应该选 D。

这道题考的是背书，和 17 题一样，本质是两种架构的辨析。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATBqxkrBzlC1AQcvWJXHecxTOK2NEAACQxRrGz_BMFYpOXtFvGcV5QEAAwIAA3gAAz0E)

本题应该选 B。

本题时钟频率为 10MHz，一个总线周期传 4B 信息，一个总线周期占 2 时钟周期，那么 1 时钟周期传 2B 数据，所以带宽为 2B×10M=20MB。

带宽计算，这种题其实非常坑，要非常小心去做。除了要分清楚时钟周期和总线周期之外，还要注意一些很恶心的东西，例如 24 年和 25 年的带宽计算。前者是给了一堆无用条件，后者是说了一大堆无用条件然后信息在括号里。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATFqxkuJq4Q4qkOrZifvjbDWFplQ0QACRhRrGz_BMFYGoPJFm7gFnwEAAwIAA3gAAz0E)

本题应该选 D。

缺失 50 次，也就是命中 1000-50=950，950/1000×100%=95%

cache 缺失次数，缺失率等，这类题考起来也很阴。主要可以考以下几个方面：

- 一维数组
- 一维数组一条指令访问多次该数
- 二维数组
  - 正常的二维数组
  - 比 cache 小的二维数组
  - 行比 cache 行小的二维数组

此外还需要注意到地球的是命中率还是缺失率。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATJqxkxQQfRE_Xr6QaLj-H1jF2CllQACRxRrGz_BMFYXNMD7uVDeEwEAAwIAA3gAAz0E)

本题应该选 A。

外中断与内中断，中断与异常。

这类题考频非常高，除了像这样直接的考之外，还可能会结合具体场景，例如指令要不要返回当前指令。

- 内中断（异常）
  - 故障：缺页异常，除 0 异常（需要返回当前）
  - 自陷：trap 指令，需要返回下一条
  - 终止：访问主存错误
- 外中断：请求设备，时钟中断

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATNqxkzXnRb-7hoLwrAE94UCW11oFQACShRrGz_BMFb3LiEwsto4mgEAAwIAA3gAAz0E)

本题应该选 D。

处理机是否可以并行，需要注意并行和并发。并行指的是真正的同时，对于单处理机，进程与进程只能并发，所以选 D

此外可以注意，多道处理程序具有并行和并发的特点（尽管并发就足够了），单处理机系统也可以是多道程序处理系统。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATRqxk03k4xU29sopEm3ZT8Y8y4jnQACTBRrGz_BMFYYK5i_pPuXPAEAAwIAA3gAAz0E)

本题应该选 D。

本题考察的是进程调度算法，要对每一个算法有印象。

对于高响应比优先调度，要记住公式：1+ 等待时间/运行时间

RR 必然是抢占的。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATVqxk2es5QhywPLh3HsvRbWVHYy1gACThRrGz_BMFZhFoht7EKGswEAAwIAA3gAAz0E)

本题应该选 C。

8 个打印机，假设有 m 个进程，每个分 2 台，8/2=4

这类题考察过很多次，不难但是要注意表述，有可能问的是可能会发生死锁 K 的最小值，也可能问的是不会发生死锁 K 的最大值。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATZqxk4Bd-aQhgFuX0o0ZHoaKMsYWgACTxRrGz_BMFajHhd-0kklNAEAAwIAA3gAAz0E)

本题应该选 A。

分区分配的意思是提前划分好内存以供使用，可以是同样的长度，也可以预先分配为特定的长度。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATdqxk5unD4jP1YjS-VcAAEG8AAB_NywAAJSFGsbP8EwVmx_0tdq1O7AAQADAgADeAADPQQ)

本题应该选 C。

地址长度 32 位，段号 8 位，所以段内地址有 24 位，所以一段最长是 C。

分页管理，分段管理和段页式管理。和计组类似的，这类计算刚上手很难，但是到现在这个阶段应该要不成问题了。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAThqxk60BkVNii-Oe3Qox2cAAXrFLo8AAlUUaxs_wTBWDcLHz68pG28BAAMCAAN4AAM9BA)

本题应该选 B。

本题考的也是概念，要分析清楚三种文件组织方式。

连续结构可以随机访问，但是扩展很不方便。

链式结构分为隐式链接分配和显式链接分配，对于前者不需要额外的外部空间去存储信息，但是每个块最后需要存储指针信息，对于后者则需要额外使用静态链表存储，常用于 FAT32 系统。

对于链式结构有三种，单级，多级以及混合索引，其中混合索引常用于 UFS 系统。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATlqxk9e_AABM3ejzWqAoqKuOXcTBAUAAlgUaxs_wTBWo_xT7Cq06skBAAMCAAN4AAM9BA)

本题应该选 A。

需要增加，105 向后一定是 110，然后是 170 等。这道题应该选 A，对于 B 方向反了，对于 C 是 C-SCAN，D 啥也不是。

这类题不难，但是要小心翼翼，看清楚题目意思（就是很恶心），首先辨析 SCAN，C-SCAN，LOOK 和 C-LOOK，SCAN 是从 0 到最大（假设一开始是从 0 开始），然后从最大到 0，C-SCAN 则是从 0 到最大，然后还是从 0 到最大，LOOK 则是看当前的值来决定（对 SCAN 的优化）

但是，比较恶心的是：有的时候真题会混用这两个概念，但是大体上都不会混用。如果题目里实在没给前者的条件（最大），那么只能根据后者来处理，因为王道书上有这么一句，前者在实际工业意思是后者。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATpqxlBFFjyJsqvmTNn5CXs4pKIXHwACXhRrGz_BMFZzrminaxbS8QEAAwIAA3gAAz0E)

本题应该选 A。

这类题就是辨析概念。对于 A，需要辨析一下 UFS 和 FAT 系统的区别。UFS 的文件访问控制信息肯定是不存在 inode 里的，而是存在具体信息里；对于 FAT 则是存。

文件分配表得分为系统文件打开表和进程文件打开表，对于前者一整个操作系统只有一张，对于后者一个进程有一张，且可以自行管理权限。需要注意，对于线程而言，没有自己的打开文件表，而是依托于进程存在的。

用户口令表是访问控制信息的一种。

系统注册表是软件在操作系统留下的东西。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATtqxlFBpWDJAAGuPyDHj0SqNqpIhXQAAmEUaxs_wTBW1s-ox9k9ke8BAAMCAAN4AAM9BA)

本题应该选 B。

辨析软连接和硬链接。这类题主要是记忆，考过挺多次的。

F1 软链出去 F2，那 F2 就是一个独立新的，计数为 1，而 F1 硬链接出去 F3，所以 F1 和 F3 都是 2，删了 F1，F2 独立，不变，所以是 1，F3-1，所以也是 1。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACATxqxlGrGV-ZzB_pA71jhlpBVRI4PAACYhRrGz_BMFan9fStbQ3jzwEAAwIAA3gAAz0E)

本题应该选 A。

面向程序员的是逻辑号，这样不需要每次写程序都需要根据电脑修改。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAT1qxlHsTlYTcuOiMfGIkcUIyVH-ggACYxRrGz_BMFbY-i7P9840SQEAAwIAA3gAAz0E)

本题应该选择 B。

这类题很恶心，纯记忆的题，关于 OSI 模型和 TCP/IP 模型有很大的不同，主要体现为：

OSI 模型数据链路层就要实现差错控制，流量控制；网络层需要实现拥塞控制，并且可以无连接和有连接；会话层管理打断点和通信；表示层管理数据格式转换，加密。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAT5qxlKe4sgxKHa26YhtihbhCWO6IQACaBRrGz_BMFZVXr84H3MEewEAAwIAA3gAAz0E)

本题应该选 B。

2Wlog2V=2×3000×4=24kbps

这类题才是真的非常不好上手，但是经过了 3 刷王道选择题，现在已经基本搞明白了。

首先要注意有没有最大这两个字，没有最大这两个字不需要采用奈奎斯特定理，其次如果给了波特率和比特率的关系，才需要在香农定理的题目里都考虑。

具体想要再练可以去看王道的选择题。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAT9qxlNMnaRcm-gvNbbs_wwcqnGdggACbhRrGz_BMFbL5wlmZCoAAZ8BAAMCAAN4AAM9BA)

本题应该选 C。

三种方式：停止等待协议，GBN 协议和 SR 协议。中间那个可以累计确认，外面那俩不行。

这几个协议在选择题里倒还好，但是在大题里，一定要引起高度重视。因为 TCP 采用的是类 SR 的协议，没有累计确认。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUBqxlPZc3frsueUv11f-_2BybSH1wACbxRrGz_BMFa96p2iQ6nBsAEAAwIAA3gAAz0E)

本题应该选 A。

这类题就是背书题了，主要是看清题目就可以了。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUFqxlQXpmJMNW85mtUt4fWZEwj-EwACcRRrGz_BMFaDy63gGS_soQEAAwIAA3gAAz0E)

本题应该选 D。

假设站点距离为 x，那么 RTT 应该是 2x/(2×10^8)，而数据帧应该是 10x。

数据帧 -800bit，那么那么也就是 10y=10x-800，解得 y=x-80，所以应该选 D。

这类题感觉是必考题，除了题目给的信息之外，还需要注意一些字眼，例如单向传播时延，10BaseT，100BaseT 附带的隐含信息。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUJqxlV1E9i4AV_7_d7ujqywqsjJxQACiBRrGz_BMFbOS66U8x8k1AEAAwIAA3gAAz0E)

本题应该选 D。

第一个段起始：200，结束：499

第二个段起始：500，结束：999

确认序号是我希望你发什么，也就是我希望你发 1000。

这类题也是不难但是需要小心谨慎。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUNqxlXl9lhD5mnOcv_EkYXm2tMAAcsAApUUaxs_wTBWnniisKjEMMoBAAMCAAN4AAM9BA)

本题应该选 C。

16KB 超时，也就是新门限值为 8KB。

所以应该是：

- 1
- 2
- 4
- 8
- 9

过了 4 个 RTT 应该是 9。

注意如果是发送窗口，要考虑对方的接受窗口大小。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAURqxlZNMLQX8y68lha7zMeg0HxkywACmhRrGz_BMFbASzs0J11FFAEAAwIAA3gAAz0E)

本题应该选 B，属于背书题。

只有信号走的是控制连接。

本题分析错误，应该选 A。

控制指的是发号施令，协调动作的信息，请求下载，退出等。FTP 命令举例，比如说请求下载，请求下载肯定走的不是数据连接（因为只有传数据的时候才是走的数据连接，并且数据连接一旦传输完数据了之后就释放了）

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUZqxlbyM89NmmGoNcVhA1KNIPwnogACnxRrGz_BMFa1x411HFlnkgEAAwIAA3gAAz0E)

解：

不可以，考虑这样一种情况：

![41 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUVqxlbF4b5taJ0C2spGf94lDW5FUQACnRRrGz_BMFZIsg9RJuUIbAEAAwIAA3kAAz0E)

假设要求 a 到 d 的距离，那么一开始 u 是 a，选择最短的路径是 a-b，那么从 b 出发继续，选择 b-d 到达中断，总花费为 101，然而显然花费最短的路径应该是 a-c-d，总共花费 5。

这道题没什么好讲的，直接过就好了，不过初见端倪，图考的特别频繁。

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUdqxld38Y73ByuRWA09n2QKz2IyDwACoBRrGz_BMFZbOIC-2VNvRwEAAwIAA3gAAz0E)

解：

(1)

根据数学原理，假设链表长度为 n，将链表分成两部分，k 和 n-k，显然取一个指针先遍历 k 个单位，那么当前指针再向后遍历 n-k 个单位就为空，所以天然的得到 n-k 这个值，而题目要求正是得到第 n-k 个结点。

(2)

1. 定义两个指针 l1，l2，都指向带头结点链表 list 的下一个结点
2. l1 先遍历 k 个单位，如果遍历过程中 l1 是空，那么意味着 k 大于 list 的长度 n，直接返回 0
3. l2 与 l1 共同遍历，直到 l1 为空
4. 此时 l2 指向的结点就是倒数第 k 个结点

(3)

```c++
struct LNode{
  int data;
  LNode* link;
}

void solve(LNode *L){
  // 为空直接返回 0
  if(L->link==nullptr){
    return 0;
  }
  LNode l1=L->link;
  LNode l2=L->link;
  // l1 指针向后 k 个位置
  for(int i=0;i<k;i++){
    // 如果 k 超过 l1 长度，那么直接返回 0
    if (l1==nullptr){
      return 0;
    }
    l1=l1->link;
  }
  // l1 和 l2 共同向前走
  while(l1!=nullptr){
    l1=l1->link;
    l2=l2->link;
  }
  printf("%d",l2->data);
  return 1;
}

```

这道题是链表的基本操作，我觉得没什么好说的，过了。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUhqxlrmbbfOfz5F31G-g7QoSuOD7wACqBRrGz_BMFafRcIer3ygMAEAAwIAA3gAAz0E)

解：

(1)

时钟周期：1/500M

一条指令的执行时间：5/500M

中断服务需要的时间：20×5/500M

假设传输 1s 的数据，即传送 0.5MB 的数据，总共要传输 0.5MB/4B=0.125M 次中断。

所以中断需要的时间是：0.125M×20×5/500M=0.125×20×5/500=0.025=2.5%

(2)

假设传输 1s 的数据，即传输 5MB 的数据，总共要 DMA 处理 5MB/5000B=1K 次。

依次 DMA 预处理和后处理开销时间为：500/500M=1/1M。

所以 DMA 总共需要的处理开销时间是：1K/1M=0.1%。

本题考察的是外设相关的知识，我认为这道母题十分重要。核心思路是以运行 1s 为例得到具体的字节数，这样计算会很方便。

此外还需要注意题目的表述（即时钟周期和指令条数变来变去）

总的来讲这类题不会难，但是需要注意这类题可以出变种，例如 2016 年的真题，一些问题留到那道题解释。

![44 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAdlqx2waHjqnUDIi9RTLiQKLw7c75QACTxBrGz_BOFYiO0sBHz3kpwEAAwIAA3gAAz0E)

![44 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAdpqx2wt96eMWfiXXxCKMfAkBIEjrQACUBBrGz_BOFaixxYCxqef3AEAAwIAA3gAAz0E)

这类题非常经典，在 15/22 年真题也考了差不多的内容。

主要就是要辨析清楚每一个小步骤到底做了什么事情。

C5 (R0)->A R0out, Ain

C6 (R1)->MAR R1out, MARin

C7 M(MAR)->MDR MemR, MDRinE

C8 (MDR)+(A)->AC MDRout, ACin, Add

C9 (AC)->MDR ACout MDRinE

C10 (MDR)->M(MAR) MemW, MDRoutE

我觉得这类题还是得多做。

假设换一个任务，将这些数据存入 (R3)，那么：

C10 应该是：

C10 (R3)->MAR

C11 (MDR)->M(MAR) MemW, MDRoutE

其实都是类似的，主要还是要记住具体流程，尤其是 C1 到 C4 指令阶段。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAdtqx2yKVXsqCuKFe0UZcLcm28U55QACUhBrGz_BOFYo25Q2feuGMAEAAwIAA3gAAz0E)

```c
func P1(){
  while(1){
    produce();
    P(空位); N
    互斥锁 1
    put();
    互斥锁
    V(奇数);
    V(偶数);
  }
}

func P2(){
  while(1){
    P(奇数); 0
    互斥锁
    getodd();
    互斥锁
    V(空位);
    countodd();
  }
}

func P3(){
  while(1){
    P(偶数); 0
    互斥锁
    geteven();
    互斥锁
    V(空位);
    counteven();
  }
}
```

```c
semaphore mutex=1; // 互斥锁
semaphore empty=N; // 缓冲区空位
semaphore num_odd=0; // 奇数的个数
semaphore num_even=0; // 偶数的个数
func P1(){
  while(1){
    n=produce(); // 生成一个数
    P(empty); // 请求缓冲区空位
    P(mutex); // 互斥锁
    put(); // 放数
    V(mutex); // 释放互斥锁
    if(n%2==1){ // 判断这个数是奇数还是偶数
      V(num_odd); // 如果是奇数，则生成 num_odd 信号
    }else{
      V(num_even); // 如果是偶数，则生成 num_even 信号
    }
  }
}

func P2(){
  while(1){
    P(num_odd); // 消耗一个奇数位置
    P(mutex);
    getodd(); // 访问缓冲区得到奇数
    V(mutex);
    V(empty); // 释放一个缓冲区空位
    countodd(); // 统计奇数个数
  }
}

func P3(){
  while(1){
    P(num_even);
    P(mutex);
    getodd();
    V(mutex);
    V(empty);
    countodd();
  }
}
```

咸鱼六部曲：

1. 分析总共有几个人
2. 用中文描述每个人的动作，以及是否需要循环
3. 分析这个动作前需要 P 什么，有 P 就有 V
4. 分析互斥锁以及变量初值
5. 检查连续的 P 是否会导致死锁
6. 誊写并且检查

本题是经典的生产者消费者问题，只是做了一点简单的变式。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAdxqx3BWG6KI2qXLnnQL6b4R-xlcQAACfhBrGz_BOFb0V97EjWKhmQEAAwIAA3gAAz0E)

解：

(1)

题目的表述是“访问”。访问虚地址的目的是为了得到物理地址，由于题目里没有提到 cache，所以得到物理地址之后还需要根据这个物理地址去拿到东西。

页面大小为 4KB，则为低 12 位，所以：

2362H 的页号为 2，1565H 的页号为 1，25A5H 的页号为 2.

访问 2362H，首先访问 TLB，由于 TLB 为空，所以访问页表，根据页号 2 得到物理页框号 254H 并写入 TLB，得到物理地址后再进行访问内存得到数据，总计：10+100+100=210ns

访问 1565H，首先访问 TLB，由于 TLB 为空，所以访问页表，发现页表内没有，由于分配的物理页框是 101H 和 254H，且 254H 刚被访问了，由 LRU，将 101H 分配给页号 0，缺页异常结束后，信息写入页表和 TLB，指令回到读 TLB，，得到物理地址后访存，总计：10+100+10^8+10+100=100000220ns

访问 25A5H，读 TLB，得到物理地址后访存，总计：10+100=110ns

(2)

由上分析可知是 101H

本题其实不难，不过近些年的考研不会考这么简单了。主要是要捋清楚页号，页框之间的逻辑以及分配问题（不过选择题还有可能这么考，例如 21 和 22 年的选择题都有）

此外还需要注意，缺页异常结束后数据直接写入 TLB。

![47 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAd1qx3K_-wABGUe1v-ElbZ3cCnwUNQQAAocQaxs_wThWNn0zLs4YUFUBAAMCAAN4AAM9BA)

![47 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAd5qx3LUsOyvPuwIVOpUqBZ3CwlymAACiBBrGz_BOFZrfvan7j3GCQEAAwIAA3gAAz0E)

解：

(1)

202.118.1.0/24，可以拆分为：

202.118.1.0 - 202.118.1.127

202.118.1.128 - 202.118.1.255

所以，可以分配给局域网 1 的地址是：202.118.1.0/25，分配给局域网 2 的地址是：202.118.1.128/25。

(2)

局域网 1 的路由：202.118.1.0 255.255.255.128 / E1

局域网 2 的路由：202.118.1.128 255.255.255.128 / E2

域名服务器路由：202.118.3.2 255.255.255.255 202.118.2.2 L0

互联网路由：0.0.0.0 0.0.0.0 202.118.2.2 L0

(3)

202.118.1.0 255.255.255.0 202.118.2.1 L0

这道题我记得在最开始做的时候，云里雾里，是因为需要注意，采用/的记录方法等价于网络号 + 子网掩码。

此外还可以注意，对这类题还可能结合 NAT 考（而且非常常见）

### 408 2010 真题 2 刷

- 分数为 138
- 第 16 题没有一个选项一个选项分析，用的显然正确分析，导致低级错误认为 3 也是对的
- 第 27 题分析出来是皮特松算法了，但是仔细看选项直接选的
- 第 43 题 -2，想当然分析导致错误，二地址指令默认存储在目的操作数，而不是源操作数。
- 第 44 题 -2，想当然认为块内地址是 32B，实际上应该是 64B
- 第 45 题 -4，这个需要着重注意，不是低级错误。首先是一个低级错误，加法减法算错；其次是算数据传输时延，也就是转一圈的时间除以磁道数，这个还是第一次想明白怎么算。

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAd9qx7CDmiJU2MZ1spWrfrDErbyqXQAC1hJrGz_BQFZ7oiDf9VGuAQEAAwIAA3gAAz0E)

本题应该选 D。

进行模拟：

对于 A，进栈 abcd，退栈 dc，进栈 e，退栈 eb，进栈 f，退栈 fa。

对于 B，进栈 abc，退栈 cb，进栈 d，退栈 da，进栈 e，退栈 e，进栈 f，退栈 f。

对于 C，进栈 ab，退栈 b，进栈 c，退栈 ca，进栈 de，退栈 e，进栈 f，退栈 fd。

对于 D，进栈 a，退栈 a，进栈 bcdef，退栈 fedcb。

所以选择 D。

对于这类题不会难，多检查一下就可以了。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1VqyOWUq2n5TGKsaenaRM29LWCDcAACKBNrG6T-SFYb5_-S5rQgXQEAAwIAA3kAAz0E)

本题应该选 C。

受限队列，两端入队一端出队。

对于 A，a，ba，bac，bacd，bacde。

对于 B，a，ba，bac，dbac，dbace。

对于 C，a，不行了。

对于 D，a，ba，cba，cbad，acbad。

这类题也不难，主要还是要搞清楚受限如何受限

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1ZqyOcEI9D8vCzcOFvfcczLY3GYXgACLBNrG6T-SFazQgABNm1OJ38BAAMCAAN4AAM9BA)

本题应该选 D。

后序线索二叉树遍历即 dbca，后序线索二叉树是沿虚线走的，显然选 D。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1dqyOerPprN9wLKF0w95RAMvj7pcwACLRNrG6T-SFZBKvmLpzljYgEAAwIAA3gAAz0E)

本题应该选 C，如下图所示：

![4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1hqyOkNcS6J1NpauJLvUg3tJVWl1wACLxNrG6T-SFZT6OcCVL_DXQEAAwIAA3cAAz0E)

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1lqyOkgFNQ-sO4lqZlvjigXNV0LRQACMBNrG6T-SFY3QwZfm2JfqAEAAwIAA3gAAz0E)

本题应该选 B。

公式度的和 +1=边 +1=结点数。

所以，20×4+10×3+1×2+10×1+1=123=20+10+1+10+n=41+n，所以 n=123-41=82。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1pqyOnKvqQxxf5rQ2qv7MoSStWlYwACMhNrG6T-SFaT1L8MEu4G8QEAAwIAA3gAAz0E)

本题应该选 A。

这类题应该在掌握哈夫曼树的基础上然后看清题目举反例做。显然取 1,2,3,4,5 构造出来的树不是完全二叉树。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1tqyOqe9NvrQBCT20FXy6wo2yWF9gACNBNrG6T-SFayNPlTguyefgEAAwIAA3kAAz0E)

本题应该选 C。

必须连通，所以让 6 个结点的边最大 +1 即可，也就是 6×5/2+1=16，也就是 C。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA1xqyOrennJ5opDZoViD7OFAGTeSNQACNRNrG6T-SFa-2LhkQMowZQEAAwIAA3gAAz0E)

本题应该选 B。

- a
  - b
    - ced
    - ecd
  - ebcd

所以总共是 3 个，也就是 B。

这类题也不难，重点是捋清楚。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA11qyOtNrnP_9kzw7dyrlHJomfR-1QACNxNrG6T-SFZwB1JQF8zs2wEAAwIAA3gAAz0E)

本题应该选 B。

本题考察的是折半查找判定树，绘制如图：

![9 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA15qyOuuo2N7BlHCN5WBVpOa0raa8gACORNrG6T-SFZXqkP2KxllXQEAAwIAA3kAAz0E)

所以应该是 5。

搞清楚本质。

还有一类考法就是计算关键字比较次数，这个也需要注意。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA19qyOvKVsnZ2lvJdb_jcixgxh3dQAACOhNrG6T-SFYg7Mz5fomlpQEAAwIAA3gAAz0E)

本题应该选 D。

递归次数与一开始的初始数据有关，和长短分区和先后无关，因为无论是先处理谁，最后都是一样的结果（和处理顺序无关）

这道题初上手反套路。

比较可能考的是各类排序的性质，比如说快排不稳定等，以及优缺点。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2BqyOxiLleXUnKDpkPLa-PNdjAcFQACTBNrG6T-SFZKV3e0T5-LrgEAAwIAA3gAAz0E)

本题应该选 A。

比较的是排序猜测，09 年真题也考了。对每个排序理解清楚是什么意思就可以了。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2FqyOy-hihqHCKDFKbv9AKwaojg8AACdhNrG6T-SFZoUxTC93Ee1QEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，提高 CPU 时钟频率，在更高频的 CPU 跑程序肯定会更快，23 就不说了。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2NqyO0G1FEcjKkFpnUSgqHMEDjUzgACeBNrG6T-SFakT84MMGQKCAEAAwIAA3gAAz0E)

本题应该选 B。

这类题转换成十进制计算然后判断是最快的，r1=FEH=1111,1110B=-2，r2=1111,0010B=-1-13=-14，r3=90H=1001,0000B=-128+16=-112，r4=F8H=1111,1000B=-8。

所以，r2×r3 显然溢出

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2RqyO3IDblSadfxSd8cmOekYJEGoAACehNrG6T-SFZkKZmxQ6OzaQEAAwIAA3kAAz0E)

本题应该选 B。

1 显然正确，2 显然错误。

对于 3，变大再变小不会，正确，对于 4 会导致精度丢失，所以错误。

应该选 1,3

考察单精度浮点数双精度浮点数，int，long，long long 等类型的转换，需要注意溢出和精度丢失问题。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2VqyO49goycw-4NQw5eUnFMhv_qUgACexNrG6T-SFZbcGNcGBqJ0QEAAwIAA3kAAz0E)

本题应该选 D。

2K×4 位需要 8 块组成 8K×8 位，但是由于先进行位扩展，所以可以视为 2K×8 位组成 8K×8 位的存储器。

8KB=2^13B，也就是 000H-FFFH 地址 B1FH 的 B 是 1011，所以应该是第 2 块，2K×8 位，也就是 1000,0000,0000B=800H，所以选择 D。

这类题也不会难，重点在于捋清楚。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2ZqyO8mzKuo32O_D3BXYX9Iv2eCswAChxNrG6T-SFadBElKMA7FhQEAAwIAA3gAAz0E)

本题应该选 A。（低级错误选为 D，因为没分析 3）

对于 1,2，显然正确。对于 3，ROM 显然不可以用来做 cache；对于 4，只有 RAM 需要刷新，ROM 不用刷新，所以应该选 C。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2hqyPCRyVEKygWPekvWU8I_f37hvAACiRNrG6T-SFbfbVDAQYIx-QEAAwIAA3gAAz0E)

本题应该选 D。

page 未命中说明不在内存，所以 tlb 和 cache 必不可能命中。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2lqyPDEOiFgy7ovIpvAuKAG4-nLAQACixNrG6T-SFbJ_HngYmTNwAEAAwIAA3gAAz0E)

本题应该选 B。

可见与不可见需要深度辨析，汇编程序员可见的是 PC，通用寄存器组，状态寄存器（只能看到不能改）

这类题也是经典题目，需要区分透明和可见。透明的意思是感觉好像不存在，所以这道题透明的应该是 MAR，MDR 和 IR。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2pqyPESQ92JRzzB3nmIjHQVJ3ymlQACjBNrG6T-SFa4jvvBtr--OAEAAwIAA3gAAz0E)

本题应该选 A

旁路转发是解决数据冲突的方式（除了 load-use），本题 BCD 则是三种冲突的方式。

20 题超纲。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2tqyPFI5zxKdyVzc-Ng3nRZODapZgACjRNrG6T-SFbrKoG_LS0zAAEBAAMCAAN4AAM9BA)

本题应该选 A。

中断分为两个主要的阶段，中断响应与中断服务程序的执行。前者是硬件执行的，后者是操作系统负责的。

硬件，也就是 CPU 负责硬件关中断，保存 PSW，PC 以及找到中断向量的入口地址。

操作系统负责后续的。

根据题目，BC 可以排除（因为一开始就是关中断）

对比之下应该选择 A。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA2xqyPJURPsYmp8AAQpjKGovmgWdD4sAAo4Taxuk_khWmNUH2iQbY9oBAAMCAAN4AAM9BA)

本题应该选 D。

其实吧所有数据乘起来就好了，也就是 1600×1200×24×85×2=D。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA21qyPLzJvwOFpNdOommcQgxU58KJwACjxNrG6T-SFYZrqzk4-5LFQEAAwIAA3gAAz0E)

本题属于背书题，选 A。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA25qyPMC2kKOVmbKiRiDriW-rpp8DAACkBNrG6T-SFaLNs4UPRz_dAEAAwIAA3gAAz0E)

本题应该选 C。

导致创建新进程主要是看有没有创建新的 PCB，对于 1 和 3 都要，对于 2 则是让进程从运行态进入阻塞态，所以 2 排除，应该选 1 和 3。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA29qyPNl-zQ3sIPFeJHQ3SZc8EleowACkhNrG6T-SFYLUayf0dq01AEAAwIAA3gAAz0E)

本题应该选 B。

如果要有等待的进程，那么当前信号量应该是负数，所以 AC 排除，可用为 1，即 B。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3BqyPOpDAwIO2FfP_irG5Y62qAr4AACkxNrG6T-SFafnElii1JRwQEAAwIAA3gAAz0E)

本题应该选 A。

对于 BC，刚完成 io 应该提升优先级

对于 D，考虑抢占式优先级调度，如果已从就绪态变成运行态，优先降低会导致完全一上处理机就下去。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3FqyPR5t4OLz8hSgMPMPfuju_uwwwAClRNrG6T-SFbmyWbdzCGOIwEAAwIAA3gAAz0E)

本题应该选 D（低级错误选为 B，因为没看完题目）

做这种题的时候考虑经典模型，显然这道题是皮特松算法，会导致让权等待，但是不会导致题目里这两个，所以选 D。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3JqyPS49rK_ct4vtoShvSoOWz2u7gAClhNrG6T-SFYr8JJq1TnmNgEAAwIAA3kAAz0E)

本题应该选 B。

这类题最重要的事情是：每次需要重新排序最短长度，而不是保持不变。

![28 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3NqyPVUlCwuAn8b4Lr-i1wxEkPTSgACmhNrG6T-SFbnTVuuJJ8FMwEAAwIAA3cAAz0E)

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3RqyPV4HT8jb1v1LklQbp--x2IQBgACnRNrG6T-SFatUnP0G_wyXAEAAwIAA3gAAz0E)

本题应该选 B。

一页内最多可以存在 512 个表项，也就是 9 位，所以 2 级页号是 9，页目录号是 16-9=7，所以选 B

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3VqyPhcy9qZiZRBKJSUHSTx67krzwACohNrG6T-SFb2wCA61qCu2wEAAwIAA3gAAz0E)

本题应该选 C。

256B/4B=64，即一块磁盘可以存 64 个，所以，总共应该是（4+2×64+64×64）×256B。

也就是（1+2×16+64×16）KB=（1+32+2^10）KB=（1+32+1024）KB=1057KB。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3ZqyPj2Ad13UB566fUB7a7c3tdD4QACphNrG6T-SFa28s3pSRTh0QEAAwIAA3gAAz0E)

本题应该选 C，显然不解释了。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3dqyPkWxCcSkdZa9OYtYx1w62smhQACpxNrG6T-SFa42fb80eoR5AEAAwIAA3gAAz0E)

本题应该选 B。

中断处理的全流程，见 [以 scanf 分析设备管理](/posts/npee/os/#%E4%BB%A5-scanf-%E5%88%86%E6%9E%90%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86)

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3hqyPmmKCiM_YBgK9IqdtOjlIJu7QACqBNrG6T-SFYhCfXGjcQQdwEAAwIAA3gAAz0E)

本题应该选 C，属于背书题，不解释了。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3lqyPnAlv_L-q95PFGFuplmi-fSkQACqRNrG6T-SFbdUCG9OYGP_wEAAwIAA3gAAz0E)

本题应该选 C。

首先计算分组数，1000x=98000+20x，解得 x=1000。

走过一段链路的时间是 1000B/100Mbps=80us。

显然平着走是最短的，经过 2 个路由器，也就是 3 段链路，所以 1002×10us=C。

这类题感觉最难的也就是考 2025 年真题那样子，好好分析即可。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3pqyPnNLZ38Y-qfqqfxFUQm4B2ZawACqhNrG6T-SFZR-YaZ2J8F8AEAAwIAA3gAAz0E)

本题应该选 D。

背书题，RIP 协议 16 跳代表不可达。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3tqyPnciDeXvAQLqItVdo7Dt3rz4wACqxNrG6T-SFattU5wXvV2lAEAAwIAA3kAAz0E)

本题应该选 C。

背书题。

不过值得注意的是，源点抑制在新版本的 ICMP 被废除了。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA3xqyPnpahFnJYP4OMHFDNMbC9daYQACrBNrG6T-SFYzH6O_g2gBqwEAAwIAA3kAAz0E)

本题应该选 B。

248=255-7=1111,1000B。所以子网数为 32，可分配地址减去网络地址和广播地址是 6.

此外还需要注意，可分配，可用都指的是应该挖去网络地址和广播地址，而 ip 数，之类的表述不需要挖去。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA31qyPn6QAQns0ApyRQsHIEfovhvKwACrRNrG6T-SFbEPbAbenjayAEAAwIAA3gAAz0E)

本题应该选 D。

属于背书题。

广播风暴可以使用路由器和 vlan 抑制

冲突域可以用网桥和交换机划分

中继器和集线器只是对信号整形放大。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA35qyPoI0pffuHbofs4TZhGf0tRFUQACrhNrG6T-SFa_oqM4ZVA7UQEAAwIAA3kAAz0E)

本题应该选 A。

拥塞窗口为 4，也就意味着当前甲最多可以发送 4 个单位数据，题目要求是发 2 个单位，所以应该是：

1,2，3 和 4 待发送。

收到了 1 的确认，所以拥塞窗口：2,3,4,5（然后有可能是到 6，也有可能是 6,7,8,9）

但是接收窗口只有 2 了，所以发送窗口变为 2,3

而 2 已经发送未确认所以不需要再发，所以还可以发 3，也就是还可以发 1000B。

这类题也是很经典的题目，从早年考到了近些年年份。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA39qyPoYnNhve5S2DB8W155dAAHhzIAAAq8Taxuk_khWakxhHUc5DpMBAAMCAAN5AAM9BA)

本题应该选 A。

背书题。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA4BqyPooi8mn3GA7l3Y3QHVP6vMQWwACsBNrG6T-SFadtTbfzbqMdQEAAwIAA3gAAz0E)

解：

(1)

| 关键字 | 关键字乘 3 | 最大 | 模 |
| ------ | ---------- | ---- | -- |
| 7      | 21         | 21   | 0  |
| 8      | 24         | 21   | 3  |
| 30     | 90         | 84   | 6  |
| 11     | 33         | 28   | 5  |
| 18     | 54         | 49   | 5  |
| 9      | 27         | 21   | 6  |
| 14     | 42         | 42   | 0  |

由装填因子可知长度为 10。

所以最终应该是：

| 下标   | 0 | 1  | 2  | 3 | 4  | 5  | 6  | 7  | 8 | 9  |
| ------ | - | -- | -- | - | -- | -- | -- | -- | - | -- |
| 关键字 | 7 | 14 | 空 | 8 | 空 | 11 | 30 | 18 | 9 | 空 |

(2)

查找成功的概率：

| 关键字           | 查找次数 |
| ---------------- | -------- |
| 7                | 1        |
| 8                | 1        |
| 30               | 1        |
| 11               | 1        |
| 18               | 3        |
| 9                | 3        |
| 14               | 2        |
| 总比较次数       | 12       |
| 成功平均查找长度 | 12/7     |

查找失败的概率：

| 散列地址         | 比较次数 |
| ---------------- | -------- |
| 0                | 3        |
| 1                | 2        |
| 2                | 1        |
| 3                | 2        |
| 4                | 1        |
| 5                | 5        |
| 6                | 4        |
| 总比较次数       | 18       |
| 失败平均查找长度 | 18/7     |

由于是 mod7，所以算到这里就结束了，总共是 18，也就是 18/7

这种题历年考了 2 次，不难但是要注意留档。

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA4FqyPo3STA0nAQ0j3QqfXC6nvpiZAACsRNrG6T-SFbCfr0qkk9miwEAAwIAA3gAAz0E)

解：

(1)

根据数学原理，以第 p 个数前的序列记为 a，后面记为 b，则 ab 的转置为 b 的转置 a 的转置，分别再对 b 的转置 和 a 的转置 进行转置，得到需要的序列。

(2)

```c++
void reverse(int A[],int l,int r){
  while(l<r){
    int tmp=A[l];
    A[l]=A[r];
    A[r]=tmp;
    l++;
    r--;
  }
}

void solve(int A[],int p,int n){
  reverse(A,0,p-1);
  reverse(A,p,n-1);
  reverse(A,0,n-1);
}
```

(3)

时间复杂度：O(n)

空间复杂度：O(1)

解 2：

(1)

1. 设置一个辅助数组 tmp，长度为 n
2. 将第 A[(i+p)%n] 位的数组复制到 tmp[i]
3. 将 tmp 的每一位复制回 A

(2)

```c++
void solve(int A[],int p,int n){
  int tmp[n];
  for(int i=0;i<n;i++){
    tmp[i]=A[(i+p)%n]
  }
  for(int i=0;i<n;i++){
    A[i]=tmp[i];
  }
}
```

(3)

时间复杂度：O(n)

空间复杂度：O(n)

考数组的题就看有没有写过了，几秒内没有想出最优解直接暴力也可以拿大多数分数。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA45qyeiJkbEeVJ480g0ZfhmXAAFyr1gAAq0Raxuk_lBWBWpFKOuYZrsBAAMCAAN4AAM9BA)

解：

(1)

OP 有 12 到 15 4 位，所以是 16 条指令。

根据图，Md 有 3 位，Md 和 Rd 共 0 到 5 也就是 6 位，所以 Rd 是 3 位，也就是 8 条指令。

由于贮存地址空间大小为 128KB，按 16 位的字编址，所以地址空间是 128KB/16bit=128KB/2B=64KB，也就是 2 的 16 次方，所以 MAR 是 16 位。

字长 16 位，所以 MDR 需要 16 位。

(2)

看指令的最后一行，意思是当前寄存器中读一个值（该值为 16 位），以当前指令的下一条指令为基准，向上和向下偏移。

显然整个地址空间都可以被覆盖，所以目标地址范围是 0000H-FFFFH。

(3)

确定 OP 码：0010B

确定源操作数操作方式：寄存器间接寻址，001B

确定源操作数 Rs：4，也就是 100B

确定目的操作数操作方式：寄存器间接、自增，也就是 010B

确定目的操作数 Rd：5，也就是 101B。

组合起来，0010,0011,0001,0101B=2315H

该指令的意思是：从 R4 中取出 1234H 解析数据得到 5678H；从 R5 中取出数据 5678H 解析数据得到 1234H，5678H+1234H=68ACH，~~覆盖 R4 中的地址数据 1234H 指向的数据 5678H~~，然后 R5 中的数据 5678H+1

综上所述，~~存储单元 1234H 的数据从 5678H 变为 68ACH~~；R5 中的数据从 5678H 变为 5679H。

这类题最重要的就是看清楚题目格式，不要想当然自己觉得怎么解释就是怎么解释。

还有就是要注意按字编址还是按字节编址，这道题是少见的按字编址。

本题 -2，想当然分析导致，二地址指令默认存储在目的操作数，而不是源操作数。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA49qyejCV5RYuu0zbPtvoPPpKBPEzAACrxFrG6T-UFZ9q3WFfYNHnQEAAwIAA3gAAz0E)

解：

(1)

主存空间：256MB，也就是 28 位。

8 个 cache 行，也就是 3 位，采用直接映射，无需缩减位数。

cache 行大小 64B，也就是 6 位。

tag 位=28-3-6=19 位

cache 至少需要 tag 位和有效位，所以每一个 cache 行需要额外的 20 个位。

所以一个 cache 行需要 64×8bit+20bit=532bit，总共有 8 行，所以是 8×532bit=4256bit。

(2)

`a[0][0]` 放在 320=000,0140H。

由于 31=1,1111B，31×4=111,1100=7CH，所以 `a[0][31]` 是 000,01BCH。~~将倒数第 2 位取出即 BH=1011B，取前三位也就是 101B=5。~~

~~所以在第 5 组。~~

将 1BCH 展开，即 0001,1011,1100B，取 110B，也就是 6。

由于一行是 256 个数据，又要 256+1，所以 257=1,0000,0001B，×4 也就是 100,0000,0100B=404H。所以 `a[1][1]` 是 000,0544H。~~将倒数第 2 位取出即 4H=0100，取前三位也就是 010B=2。~~

~~所以在第 2 组。~~

将 544H 展开，即 0101,0100,0100B，取 101B，也就是 5。

块内地址是 64B，而不是想当然的 32B

(3)

一个 cache 行可以容纳 64B/4B=16 个数据。

程序 A 数据命中率为 1-1/16=15/16=93.75%

程序 B 数据命中率为 0%

这类题挺常考的，可以注意一下几类 cache 的分析方式。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5BqyejV58wmvCWSj8ZZzGHxSzYebQACsBFrG6T-UFZUyd-IXyf5ZQEAAwIAA3gAAz0E)

解：

(1)

2KB=2×8Kbit=16Kbit=16×1024bit=16386bit。

所以本题采用位图法进行管理。

(2)

没有明确给最大磁道是多少，所以只能将 CSCAN 视为 CLOCK。

磁盘时延=寻道 + 旋转 + 寻址 + 读数据

沿增大的方向移动，所以访问序列为：100,120,30,50,90，总共需要访问 20+90+60=~~180~~ 个磁道。

~~所以寻道消耗 180ms。~~

所以寻道消耗 170ms。

一分钟旋转 6000 次，也就是 1 秒旋转 100 次，也就是 5ms 旋转 0.5 次。

所以旋转消耗 20ms。

~~对每个磁道随机读取 1 个分布的扇区，由于有 100 个扇区，所以可以视为 5ms/100，也就是 0.05ms~~

~~所以寻磁道需要消耗 0.2ms。~~

数据传输的意思是，10ms 转 1 次，所以 10ms/100=0.1ms，一圈的时间除以 100 得到数据传输时间。

4 次总共是 0.4ms

~~所以总计 200.2ms。~~

所以总计为 190.4ms。

(3)

FIFO。

Flash 存储器可以随机寻址，寻址时延接近为 0，所以按照 FIFO 最好。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5Fqyejqot5jRqPRL335QaLO7OXV5wACsRFrG6T-UFaRqF_HHJHadAEAAwIAA3kAAz0E)

(1)

逻辑地址空间为 64KB，所以总计 16 位，由于页内地址为 1KB，占 10 位，所以页号为前 6 位。

17CAH=0001,0111,1100,1010B，取前 6 位 00,0101B，也就是页号为 5。

(2)

采用 FIFO，显然应该替换掉最早装入的，也就是页号 0。将物理页框号 7 分配给页号 5，所以物理页号为 00,0111B，拼接也就是 0001,1111,1100,1010B=1FCAH。

(3)

采用 CLOCK 算法，找出近期访问位为 0 的页并淘汰，如果当前页为 1 那么将 1 改为 0。

扫一圈所有页都是近期访问，所以都改为 0，从开始重新扫描，所以选逻辑页为 2 对应的物理页框 2=00,0010B，拼接可得 0000,1011,1100,1010B=0BCAH。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5Jqyej-eycddQdOAzED_JCCVbKPLAACshFrG6T-UFaAkCUTVxJgRQEAAwIAA3gAAz0E)

解：

(1)

RTT=4km/200000(km/s)=20us。

所以最短经过 10us，最长经过 20us。

(2)

除数据帧之外总共消耗 6+6+2+4=18B，最大的数据是 1500B。

甲的数据传输时间是 1518B/10Mbps，乙的数据传输时间是 64B/10Mbps

所以总时间消耗是 RTT+(1518+64)B/10Mbps= RTT+(12656)/10Mbps=20us+1265.6us=1285.6us。

所以数据传输速率是 1500B/1285.6us=1.16677B/us

注意这里求的是有效数据传输速率，而不是求利用率。

### 408 2011 真题 2 刷

- 分数为 142
- 第 9 题，回路的定义是 a-b-c-a，要回到本身，而简单路径的定义是没有重复路径的结点
- 第 42 题 -1，算法题没写最优解（二分法），问题不大
- 第 43 题 -2，第 4 问整体逻辑错误。第四问问的是带符号数，而我回答了有符号数相关的内容。并且这道题考察的是计算机内部如何比较，也就是得从硬件层面出发，而不是看 OF 标志位
- 第 47 题 -3，文件系统与磁盘。本题结合磁盘来考，需要注意从磁盘的角度分析

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5NqygHvMaUDuO0PKKYGFbuAYdg0kAACsxFrG364UVbmLJKbCy5VYwEAAwIAA3kAAz0E)

本题应该选 A。

令 $t$ 是次数，则 $2 + 2\times2 + \cdots + 2\times2^t = 2^{t+2}-2 = n/2$

变形得 t=logn，所以应该选择 A。

这类题最重要的事情就是一步步算出来，而不是想当然直接脑子想。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5RqygLY-flLIBWVRstxlKpvZC983gACtBFrG364UVagoxdsmY0f7wEAAwIAA3kAAz0E)

本题应该选 B。

以 d 为开头的元素，也就是一开始的入栈顺序是 abcd，然后 d 出栈。

所以从后面开始，有可能是：ecba，ceba，cbea，cbae，总共 4 种。

这类题纯模拟，只要不出错就可以了。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5VqygM_NWC0xHXM_R1DTZUe0n4XwwACtRFrG364UVZK5WJoS8FuYAEAAwIAA3kAAz0E)

本题应该选择 B。

本题插入第一个元素后，f 指向 A0，r 指向 A0，出队，r-1，指向 n-1。

这类题有 4 种变式，可以注意题目的要求。

这类题的做法就是假设已经有了第一个元素，然后出队一次（只动 rear 指针），得到初始值。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5ZqygQFPTSUSI9koR1MdgXSfjellgACtxFrG364UVaudXAovhio-AEAAwIAA3gAAz0E)

本题应该选 C。

完全二叉树至多有一个度为 1 的结点，假设度为 0 的节点个数为 n0，度为 2 的节点个数位 n2，度为 1 的结点个数为 n1（只有可能是 0 或 1）。

可以列出公式：n0+n1+n2=n1+2n2+1=768，化简可得 n0=n2+1，所以 2n2+1+n1=768，2n2+n1=767。

为了让 n2 有解，所以 n1 取 1，所以 2n2=767-1=766，n2=766/2=383。

所以 n1=n2+1=384，也就是 C。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5dqygT0fcBW1mThPoIMON-25XBUpAACvBFrG364UVaas4JYRKgKQQEAAwIAA3kAAz0E)

本题应该选 C。

对于 A，可以构造出全向右的树。

对于 B，假设前序遍历为 1,2,3,4，中序遍历为 2,3,4,1，可以绘制出树，并且可以确认后序遍历确实是 4,3,2,1

对于 C，假设前序遍历为 1,2,3,4，中序遍历为 3,2,4,1，可以的到后序遍历为 3,4,2,1。

对于 D，可以构造全向左的树。

先序/后序/层次遍历和中序遍历可以确认一棵树

本题就是一个个去判断，主要是恶心。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5hqygUEbnEm8KxkK5Qe8j3ysi307gACvRFrG364UVY2kVoahZ4QVwEAAwIAA3kAAz0E)

本题应该选 D。

这类题使用特值法会特别快，假设有一棵树，如图所示：

![6 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5lqygXMWLK5j_rho5mq2xLyOb4bdQACvxFrG364UVZIxtWgKwza0gEAAwIAA3cAAz0E)

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5pqygXevZrWe8OxO5JxHAABgyt8_Q0AAsARaxt-uFFWR6Zbd04Wp9IBAAMCAAN5AAM9BA)

本题应该选 A。

绘制出 A 对应的树求其中序遍历序列，发现 94 冲突。

二叉排序树，我认为这类题求中序遍历比我一开始想的绘制树取硬想来的快很多。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5tqygYHtcKWOY7frf-UZ9eXB0uklQACwRFrG364UVagSdGQGc6GiwEAAwIAA3gAAz0E)

~~本题应该选 D。~~

本题应该选 C。

简单路径的意思是没有重复结点的路径，~~1 显然正确~~；对于 2 显然错误，对于 3 显然正确，所以应该选 D。

因为上面的解释，回路是包含自己本身的，所以 1 是错的。

多用特值法举例。

需要注意，邻接矩阵存储稀疏图会有大量的 0（0 也是数据）。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA5xqygZozgR1tWNQnD92XPQZAzDICQACwxFrG364UVZOxuq-dGPSlwEAAwIAA3kAAz0E)

本题应该选 D。

对于 1，装填因子越大，说明元素越多，越容易冲突，所以 1 错误。

对于 2 和 3 显然正确。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA51qygcm5Suwzucq0IIGnVuaRYU_HgACxBFrG364UVbiBpNl07B3wgEAAwIAA3kAAz0E)

本题应该选 A。

快排只能用顺序存储，属于背书题。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA55qygdI2tF5Gychg96uUgrFZ4zhFAACxRFrG364UVabfm1hhEIxtQEAAwIAA3kAAz0E)

本题应该选 B。

如图所示，将 18 插入尾巴，先和 10 比较，交换，然后和 25 比较，不交换。

![11 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA59qyge3kmuUyt1dcRkhoXfu9cDroQACxhFrG364UVbnziE--xM56gEAAwIAA3gAAz0E)

这就是前面说的，需要注意即使不换也要比较。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6BqygfJDPhzwfZvi1yDXQmgDGhF1wACxxFrG364UVaH1PwlShleUwEAAwIAA3kAAz0E)

本题应该选 D，背书题。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6FqygfchQJLUApH6h-vMVpn1wILAgACyBFrG364UVbjCW8nY-AJ3AEAAwIAA3kAAz0E)

本题应该选 A。

符号位：1

8.25=1000.01=1.00001×2^3，所以阶码为 3+127=130=1000,0010B。

尾数为 0001。

拼起来，也就是 1100,0001,0000,0100,0000,0000,0000,0000B=C104,0000H，也就是 A。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6Jqygizp9VgmB8YrST3xgd5o_QuuAACyhFrG364UVbwnDYqZKlXzwEAAwIAA3kAAz0E)

本题应该选 B。

但是注意，CDROM 可以随机读，不能随机写。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6NqygjfejxfEEoGygH1gb1-XiQIcAACyxFrG364UVaSoth9eer_5AEAAwIAA3kAAz0E)

本题应该选 D。

由于存储器按字节编址，贮存空间大小为 64MB，可知需要 26 位。后面的是干扰条件，因为 MAR 是硬件，是寻址能力。

后者类似于加内存条。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6RqygxwAktlWpYMFMKNmg7n3yp5dgAC0BFrG364UVbr3BDrhwABSdoBAAMCAAN5AAM9BA)

本题属于背书题，选 A。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6VqygyAV3P_OmlPfEglkXJfFt63HQAC0RFrG364UVZBmNjnOGICDgEAAwIAA3kAAz0E)

本题应该选 C。

无符号数看 CF 位有没有溢出，此外还要比较零，所以取 CF 和 ZF 标志位。

由于是大于，所以 CF 应该不溢出，为 0，且 ZF 不等于 0，也就是 ZF=0，也就是 CF 和 ZF 同时为 0 的时候为真。

本题背书 + 使用代入法即可很轻松地解出来。

当然，这类题大题也有可能考，根据学过的数字电路知识解释就可以了。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6Zqyg3E318uja0vsTewO4uZ-FYmvwAC1xFrG364UVa3KFGqElt94wEAAwIAA3kAAz0E)

本题应该选 D。

本题属于背书题，流水线和 RICS 相关。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6dqyg6IeZgJOhYGVSrX4MCAkcRQbgAC2RFrG364UVY3hAiXJ89i-wEAAwIAA3kAAz0E)

本题应该选 C。

对于 A，由于没有 cache，所以地址转换之后必须去内存读数据。

对于 B，没有采用超标量等技术，显然是对的。

对于 C，即使是空操作指令，PC 也会 + “1”

对于 D，开中断显然可以被打断。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6hqyg9C7haZKBpsPMRcNILCb7BUdAAC3RFrG364UVaOGCGNF2biRwEAAwIAA3gAAz0E)

本题应该选 C。

总线分为数据总线，地址总线和控制总线，数据总线是双向的，地址总线是单向的，控制总线有的是双向的，有的是单向的。

对于控制总线，只会传输信号，例如读写信号，时钟同步，中断信号等，而对于数据都是走的数据总线。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6lqyhBUUs8Dljq55wnS9iBi1iU-EQAC3xFrG364UVYGcPkW0xg51QEAAwIAA3kAAz0E)

本题应该选 D。

1 表示不能打断我，0 表示可以打断我，为了防止同级自身无限递归嵌套，所以自己要把自己屏蔽了。

这个我一直搞混，属于我自己比较生的考点。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6pqyhHviSP1SWgM8Gz4v_CX_EEeWwAC4xFrG364UVasF-2a5vxfMgEAAwIAA3kAAz0E)

本题应该选 C。

假设总共处理 1s，查询一次所需要的时间是 500/50M=10/M=10us。

由于总共需要查询 200 次，所以总共需要的时间是 2000us=2ms=0.002，所以应该选 C。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6tqyhJWz7UFiHTaex9jshLiJnXXkgAC5RFrG364UVapLMLPFf-D1AEAAwIAA3gAAz0E)

本题应该选 B，这道题不严谨，不用在意。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA6xqyhJw9CEiEeHjNtn2O9ry8QsCqgAC5hFrG364UVaW0gXF0-5hGwEAAwIAA3gAAz0E)

本题应该选 A。

不知道该怎么解释，很神秘。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA61qyhKfpY9dwuDCpyChq8Asryoy2AAC5xFrG364UVaYWu_xNF0H0gEAAwIAA3gAAz0E)

本题应该选 D。

线程之间有独立的栈指针，可以独立占有 CPU 运行，其他基本都是进程的。

线程与进程共享的是什么，属于重难点。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA65qyhLgysuDSXyGcBhTn9Gl1BthBgAC6RFrG364UVZg_avbTYy6gAEAAwIAA3gAAz0E)

本题应该选 B。

本题套到 scanf 经典模型去理解，当然这些背书是可以背到的。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA69qyhQQlRtnxsD5Yz4ql63GkuicMwAC6hFrG364UVZ-gTQdPVeR8wEAAwIAA3kAAz0E)

本题应该选 D。

这道题是已经帮忙算好了，可用资源减去尚需分配，显然只有 P1 才可以，分配给 P1 后，可用资源变为 2,2,1，此时可以分配 P4，分配完之后可用资源变成 2,2,2。然后就分配不了了，所以选择 D。

死锁避免的解决方法，死锁避免的计算。

这类题不会难，主要还是小心谨慎。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7BqyhTFp1xBuNIMzLcO2aHGOVT76QAC7RFrG364UVai4SXEFQXOEQEAAwIAA3kAAz0E)

本题应该选 D。

对于 1，假设页表已经满了，此时需要替换一个页，1,2,3 都会发生。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7FqyhUAAaqxPzJeSGBqH1KfgQpTK8UAAu4Raxt-uFFWcOdMj_vttCcBAAMCAAN4AAM9BA)

本题应该选 A。

系统发生抖动的主要原因是 CPU 很闲，内存 - 磁盘一直在缓入缓出，解决的根本办法只有扩大内存和撤销进程，所以应该选 A。

对于 B 治标不治本。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7JqyhVA-E9bb2QS-WRWghcqN77n-gAC7xFrG364UVZmrGeJq3LTewEAAwIAA3kAAz0E)

本题应该选 C。

这道题很阴，前面说了那么多废话，然后最后问逻辑地址。

逻辑地址形成是链接。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7NqyhVtD6HyKPGOCsl2YoddN781LQAC8RFrG364UVbm7AOdTdP77gEAAwIAA3kAAz0E)

本题应该选 B

单缓冲区双缓冲区的辨析，见下图：

![31 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7RqyhdPAAEK_XGWA_DYeFTchDXd0dEAAvMRaxt-uFFWUfidrqzvkawBAAMCAAN5AAM9BA)

这类题王道书上有很多。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7VqyhdlcB4iKN4N0_R1aEVRSnsKLQAC9BFrG364UVZf7mGQujLxjQEAAwIAA3kAAz0E)

本题应该选 C。

这类题的解题方法可以是先标号，也就是左侧标 1,2,3，右侧标 4,5,6，然后考虑不同的顺序对结果的影响。

假设执行顺序为 1,2,3,4,5,6，那么 x 值为 1。

假设执行顺序为 1,4，然后 3 是最后执行的，那么 x 值为 2；同理，执行顺序为 1,4，然后 6 是最后执行的，那么 x 值为 0

综上，应该是 0,1,2，不可能是 -1。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7ZqyhgpFwZODuUa692IQFTOK3iQYwACAxJrG364UVaf5Fgir74gewEAAwIAA3gAAz0E)

本题应该选 A。

属于背书题，需要区分 OSI 和 TCP/IP。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7dqyhhZZlSojcHbCg_Ivatrq-Ag0gACBRJrG364UVZxRwjlNOAxsgEAAwIAA3kAAz0E)

本题应该选 B。

本题没说最大，所以按照正常算就好了，2400=Blog2 4，所以 B=1200

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7hqyhiJmxanFXPu3UChvF__VsgxYwACBxJrG364UVZAWixKiaYMYAEAAwIAA3kAAz0E)

本题应该选 B。

选择重传协议没有累计确认，而 0 和 2 超时，没提到 3，所以只用重传 0 和 2 就可以了，也就是 B。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7lqyhi8KB8zBNf16DHAXbdTQEWpOQACCBJrG364UVZMdSg05frafwEAAwIAA3gAAz0E)

本题应该选 D，属于背书题。

CSMA/CA 协议用于无线网传输，使用类似停止等待协议的机制。而 CSMA/CD 协议不需要确认（因为用有线，几乎不会出错）。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7pqyhk5Oh9W0jb1_CpaGynpy7yYJQACCxJrG364UVaGbi3ZZOejTwEAAwIAA3kAAz0E)

本题应该选 D。

首先排除 A 和 B。

这道题考的是路由聚合，将 R2 连接的左右两个子网聚合，可得 192.168.2.0/24，也就是对应的 D。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7tqyhmybZet-M2zox6Kndv1OjhWpgACEhJrG364UVaePqPBXQQAAasBAAMCAAN5AAM9BA)

本题应该选 C。

对于该子网，后者 IP 分组是一个广播地址，所以应该是 2 个主机。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA7xqyhn82tJLnn2oGsibmn5kHuUXoQACExJrG364UVbIuzO2iJ1U3wEAAwIAA3kAAz0E)

本题应该选 C。

首先确认乙的 ack，乙的 ack 意思是我期待你接下来要发什么，乙已经接收到 11220，所以期待收到 11221，所以 BD 可以排除。

由于是建立 TCP 连接，所以显然是 C。

这类题非常常见，可以注意。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA71qyhpbLX3kghzuHh4JnfGKF0F76wACFBJrG364UVZnYqBmdU8grgEAAwIAA3kAAz0E)

本题应该选 B。

第三个段的初始序号为 900，那么第 2 个段的初始序号为 500，第一个段的初始序号为 200，仅收到第 1 和第 3 段，那么接收方的 ack 会始终要发送方发第 2 段的数据，也就是 500。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA75qyiQOKNTig9fjtFQLu-8Roo0evwACLBJrG364UVZQRbctNmNbiAEAAwIAA3kAAz0E)

![41 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Fqyi8pjcVa5i3G1lJEMcUi1-aJdgAC3RJrG364UVYj3x5nsskBZAEAAwIAA3kAAz0E)

无向图里，对角线为 0，没连接的线为 0；有向图里，对角线为 0，没连接的线为无穷。

绘制数据结构的题以及横着存储的题，其实不会难，主要是要捋清楚。

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA79qyiRwp-BB3oHKm4mCJ8nSv_JNCAACLRJrG364UVbC7-kE_eEkDQEAAwIAA3kAAz0E)

解：

(1)

方法 1：

1. 设一个长度为 2L 的数组 S，将 S1 复制到 S 的前半部分，S2 复制到 S 的后半部分
2. 对 S 进行快速排序
3. S[L-1] 即为题目要求的数

方法 2：

1. 设一个长度为 L 的数组 S
2. 取 i，j，k，初值设 0，分别指向 S1，S2，S
3. 如果 S1[i]<=S2[j]，S[k++]=S1[i++]；
4. 如果 S1[i]>S2[j]，S[k++]=S1[j++]
5. 重复上述过程，直至 k 的值=L
6. S[L-1] 即为题目要求的数

方法 3：

1. 设一个长度为 L 的数组 S，以及一个变量 pre
2. 取 i，j，k，初值设 0，分别指向 S1，S2，S
3. 如果 S1[i]<=S2[j]，pre=S1[i++]；
4. 如果 S1[i]>S2[j]，pre=S1[j++]
5. 重复上述过程，直至 k 的值=L
6. pre 即为题目要求的数

方法 4：

利用二分法。

(2)

```c
int patition(int A[],int l,int r){
    int p=A[l];
    while(l<r){
        while(A[r]>=p&&l<r){
            r--;
        }
        A[l]=A[r];
        while(A[l]<=p&&l<r){
            l++;
        }
        A[r]=A[l];
    }
    A[l]=p;
    return l;
}

void Qsort(int A[],int l,int r){
    if(l>=r){
        return;
    }
    int mid=patition(A, l, r);
    Qsort(A,l,mid-1);
    Qsort(A,mid+1,r);
}

int solve1(int S1[],int S2[],int L){
    int S[2*L];
    for(int i=0;i<L;i++){
        S[i]=S1[i];
        S[i+L]=S2[i];
    }
    Qsort(S, 0, 2 * L - 1);
    return S[L-1];
}

int solve2(int S1[],int S2[],int L){
    int S[2*L];
    int i=0,j=0;
    for(int k=0;k<L;k++){
        if (S1[i]<=S2[j]){
            S[k]=S1[i];
            i++;
        }else{
            S[k]=S2[j];
            j++;
        }
    }
    return S[L-1];
}

int solve3(int S1[],int S2[],int L){
    int pre=S1[0];
    int i=0,j=0;
    for(int k=0;k<L;k++){
        if (S1[i]<=S2[j]){
            pre=S1[i];
            i++;
        }else{
            pre=S2[j];
            j++;
        }
    }
    return pre;
}

int solve4(int A[], int B[], int n) {
    int s1 = 0, d1 = n - 1; // 序列 A 的起止下标
    int s2 = 0, d2 = n - 1; // 序列 B 的起止下标
    int m1, m2;
  
    while (s1 != d1 || s2 != d2) {
        m1 = (s1 + d1) / 2;
        m2 = (s2 + d2) / 2;
      
        if (A[m1] == B[m2]) {
            return A[m1]; // 两个中位数相等，直接返回
        }
      
        if (A[m1] < B[m2]) { // A 的中位数较小，舍弃 A 前半部分和 B 后半部分
            if ((s1 + d1) % 2 == 0) { // 元素个数为奇数
                s1 = m1;     // 包含中间点
                d2 = m2;     // 包含中间点
            } else {                 // 元素个数为偶数
                s1 = m1 + 1; // 舍弃前半部分
                d2 = m2;     // 保留后半部分
            }
        } else {             // B 的中位数较小，舍弃 B 前半部分和 A 后半部分
            if ((s1 + d1) % 2 == 0) { // 元素个数为奇数
                d1 = m1;
                s2 = m2;
            } else {                 // 元素个数为偶数
                d1 = m1;
                s2 = m2 + 1;
            }
        }
    }
    return A[s1] < B[s2] ? A[s1] : B[s2];
}
```

(3)

解法 1，时间复杂度：O(nlogn)，空间复杂度：O(n)

解法 1，时间复杂度：O(n)，空间复杂度：O(n)

解法 1，时间复杂度：O(n)，空间复杂度：O(1)

解法 4，时间复杂度：O(logn)，空间复杂度：O(1)

方法四不管他，前三种得会。方法四是 ai 生成的，其他都是自己写的。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Bqyi4kpHcYlq-alrbRVGgpvLsmJwAC2RJrG364UVbEmEJ2Al8-jQEAAwIAA3kAAz0E)

解：

先分析：

134=128+6=1000,0110B

246=255-9=1111,0110B

R1 寄存器内保存的值是 1000,0110B，解释为 134

R2 寄存器内保存的值是 1111,0110B，解释为 246

R3 寄存器内保存的值是 1000,0110B，解释为 -128+6=-122

R4 寄存器内保存的值是 1111,0110B，解释为 -1-9=-10

R5 寄存器内的值解释为 134+256-246=144=128+16=1001,0000B

R6 寄存器内的值解释为 134+246-256=134-10=125=127-3=0111,1100B

R7 寄存器内的值解释为 -122+10=-112

R8 寄存器内的值解释为 -122-10+128=-132+128=-5

(1)

R1 内容是 86H

R5 内容是 90H

R6 内容是 7CH

(2)

m 值为 -122

k1 值为 -112

(3)

可以。

无符号数的减法等价于加上减数取补 +1，有符号数的减法等价于减数取反 +1。

无符号数和有符号数的加减法实质上过程是一样的，只是解释方式不一样。

(4)

~~无符号整数加减法通过 CF 位，如果 CF=1 那么发生溢出，如果 CF=0 那么不发生溢出。~~

~~有符号整数加减法通过 OF 位，如果 OF=1 那么发生溢出，如果 OF=0 那么不发生溢出。~~

（计算机内部如何判断，而不是人类如何判断）

最高位的进位和符号位的进位相同，则不发生溢出，相反则发生溢出。

上述程序中：

~~unsigned int z2=x+y~~

（题目要求的是带符号数，无符号数上面那俩都溢出了）

int k2=m+n;

发生溢出。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Jqyi9PT-7IfxXl5EdMtsMM_xdp0AAC3hJrG364UVZ_w4keh93zGgEAAwIAA3kAAz0E)

解：

(1)

虚拟地址空间大小为 16MB，也就是 2^24 B，所以虚拟地址共有 24 位。

由于页面大小为 4KB，也就是 2^12B，所以页内地址是 12 位，所以虚页号有 24-12=12 位。

物理地址空间大小为 1MB，也就是 2^20B，所以物理地址共有 20 位。

由于页内地址占 12 位，所以页框号有 20-12=8 位。

(2)

物理地址空间为 20 位，cache 采用直接映射，共 8 行，需要 3 位存储。

主存与 cache 块交换大小是 32B，占 5 位。

所以 tag 号占 20-3-5=20-8=12 位。

所以 tag 号前 12 位，cache 占中 3 位，块内地址占后五位。

(3)

00,1C60H，取前三位为虚页号 001 访问主存，由于有效位为 1，所以可知在主存里。

由页号 001 得到物理页号 04，得到主存地址 0,4C60H。

0,4C60H=0000,0100，1100,0110,0000B，第 5-7 位为 cache 号，即 011，也就是 3 号 cache。比较 tag 号，自己的 tag 号为 04C，而题中第 3 行是 105，所有 cache 不命中。

(4)

四路组相联需要可以存放 8 个表项，所以总共有 2 组 TLB，需要 1 位 TLB 号。

所以虚拟地址空间前 11 位为 tag 号，tag 号后一位为 TLB 组号。

02,4BACH=0000,0010,0100,1011,1010,1100B.

可知在第 0 组 TLB。虚拟地址 tag 号为 000,0001,0010B=012H，对比 TLB 发现其有效位为 1。由于在 TLB 内必在页表内，所以必在主存。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Nqyi9u9iFh6s6Dq9rtJS_sWefwWQAC3xJrG364UVZDG8subEEaYQEAAwIAA3kAAz0E)

```c
cobegin{
  process 顾客i
  {
    P（座位）； // 10
    P（取号机）； // 1
    从取号机获取一个号码；
    V（取号机）；
    V（顾客数量）；
    等待叫号；
    P（营业员空位）；// 0
    V（座位）
    获取服务；
  }
  process 营业员
  {
    while(1){
      P（顾客数量）；// 0
      叫号；
      V（营业员空位）；
      为顾客服务；
    }
  }
}
```

```c
semaphore seat=10;
semaphore mutex=1;
semaphore service=0;
semaphore cust=0;

cobegin{
  process 顾客i
  {
    P(seat); // 10
    P(mutex); // 1
    从取号机获取一个号码;
    V(mutex);
    V(cust);
    等待叫号;
    P(service);// 0
    V(seat);
    获取服务;
  }
  process 营业员
  {
    while(1){
      P(cust);// 0
      叫号;
      V(service);
      为顾客服务;
    }
  }
}
```

本题为理发师问题，属于生产者消费者问题的变种，历年考题只考过这一题。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Rqyi9_4vzxDVtwJxxay2oJTdsizAAC4BJrG364UVY1XE6Xnc-czAEAAwIAA3kAAz0E)

解：

(1)

连续存储。

使用连续存储具备随机访问的特点，减少磁盘移动距离。

一次性写入数据，链式存储可以一次性写入数据，必须得慢慢写。

采用索引结构额外需要索引块，对于不可修改的小文件存储开销太大。

起始块号，长度。

(2)

集中存储。

集中存储在查找 FCB 的时候可以减少磁头移动距离和磁盘 IO。（扫到了答案才想出来的）

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Vqyi-azQawSAvIO13vPbh_2HB9CAAC4RJrG364UVYaXfcHz8_i6AEAAwIAA3kAAz0E)

首先分析本题：

00 21 27 21 51 ee 为目的 mac 地址，本题的目的 mac 地址应该是 R 的。

00 15 c5 cl 5e 28 为源 mac 地址。

08 00 为类型号

45 为版本号和头部长度

00 为服务类型

01 ef 为总长度

11 3b 为标识

40 00 为标志和片偏移

80 为 TTL

06 为协议

ba 9d 为头部校验和

Oa 02 80 64 为源 IP 地址

40 aa 62 20 为目的 IP 地址

(1)

Web 服务器 IP 地址即本题的目的地址，也就是 40H.AAH.62H.20H

该主机默认网关 MAC 地址即 R 的 Mac 地址，也就是 00-21-27-21-51-ee

(2)

ARP 协议

ff-ff-ff-ff-ff-ff

(3)

图中显然是已经建立好了 TCP 连接开始传输 HTTP 数据了。

首先花费 1RTT 的时间得到 html，然后花 5RTT 的时间请求 5 次小图像，总共 6RTT。

(4)

TTL，目的 IP 地址，头部校验和

![47 参考资料](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8Zqyzh01Or0OTh7GeAUKcezjNZRmwACqhNrG364WVYc8JbQKO_BeAEAAwIAA3kAAz0E)

408 不需要背诵 IP 和 TCP 的数据报，但是需要背以太网的。

### 408 2012 真题 2 刷

- 分数为 146
- 第 43 题 -3，第 2 问没看清楚题目，题目说的是在 cache 缺失的基础上；第 4 问则是一个体是按 4B 算，而不是 16B
- 第 47 题 -1，第 2 问分析正确，答案写错了（1,0000B 应该是 16，而不是 32）

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8hqy0kgq8gH84zvzG6Z4GlNWmXHfQAC6RRrG364YVabWnas4psQVwEAAwIAA3gAAz0E)

本题应该选 B。

阶乘，属于熟知。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8lqy0lb1Rj_jxM5Nxt3IWsYfCQKbgAC6hRrG364YVada8w3gav1MAEAAwIAA3kAAz0E)

本题应该选 A。

模拟过程过于混乱，就不放草稿纸过程了。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8pqy0l6FQvlupLbSBKNaK7jM_fucQAC7BRrG364YVaP4KsuOG3LJAEAAwIAA3kAAz0E)

本题应该选 A。

本题属于非常规题，不过可以确定根节点是 a。

由前者为根左右，后者为左右根可知紧邻着 a 的 e 必然为其孩子（不一定是左孩子还是右孩子），并且可以得出无论 e 是左孩子还是右孩子，a 都不存在另一边了。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8tqy0oDZxtjy62SX_uYIPSEmxj8XwAC8RRrG364YVbCPAOipBMJCgEAAwIAA3kAAz0E)

本题应该选 B。

最小结点平衡二叉树，高度为 6 也就是第 8 个斐波那契数列的值 -1。

0,1,1,2,3,5,8,13,21

所以是 21-1=20。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA81qy0qsAVYEInKWYgKEViifzL7zhQAC8xRrG364YVYt2gPwd7dIzAEAAwIAA3kAAz0E)

本题应该选 C。

广度优先遍历，考虑得到结点 A 的，那么只需要遍历 A 的边表结点就可以得到 A 的邻近结点，根据其邻近结点，遍历其邻近结点的边表结点即可。

需要注意的是，访问某个结点的时间复杂度是 O(1)，也就是可以随机访问。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA85qy0rXO0wP_lSH0xFEj1W0BJLCdQAC9BRrG364YVaJIyCqOPOm8wEAAwIAA3kAAz0E)

本题应该选 C。

主对角线以下元素均为 0，也就意味着至少有一个元素入度为 0。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA89qy0sOWDKoIEw3vZrNEQNUoYbrNgAC9RRrG364YVZIDSTD0IYWRQEAAwIAA3kAAz0E)

本题应该选 C。

这类题不需要用手算法，不过手算法需要会。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Bqy0swOnzQxZWu8WCrOjIuE5SbWwAC9hRrG364YVbDQ7Jl6eg8TAEAAwIAA3gAAz0E)

本题应该选 A。

1 显然是正确的。

对于 2，假设所有权值都是一样的，或者权值相同的构成了环然后额外出去一个，都不行，所以 2 是错的。

对于 3，prim 算法从不同顶点开始得到的树不一定相同，同样考虑一个完全图，权值都是一样的，此时显然可能性很多。

对于 4，总不是错误的。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Fqy0vz-JGtXIesRM98JknNl_pJtgAC-BRrG364YVYTF6x2AuKjlQEAAwIAA3kAAz0E)

本题应该选 D。

删除 B 树的结点，先看左右兄弟能不能补，本题可以补，所以从所以把 65 从父节点换下来，把 62 变成父节点。

所以最右结点关键字是 65。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Jqy0xU8kivGvSUjLAaOINXHZEJKgAC-RRrG364YVZmW8KzY0oT5wEAAwIAA3kAAz0E)

本题应该选 A。

对于 1，简单选择排序的原理是每次动待排序数组中选择一个最小的换上去，所以 1 可以选

对于 2 希尔排序只能在当前 d 里选，不一定。

对于 3，每次都确认一个元素的最终位置，将之划分为比他小的和比他大的

对于 4，堆排序每次都选择一个最大的元素排至队尾，所以可以

对于 5，二路归并不一定。

所以应该选 1,3,4，也就是 A。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Nqy0zeS9OJStcD-kkd5vMD2t8UGgAC_BRrG364YVZiWi_pfjF3RgEAAwIAA3kAAz0E)

本题应该选 D。

折半插入排序只是可能减少选取到待排序数组的某个数，交换次数等没有任何差别。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Rqy005xu8sH-5zL4dOwifMXD0yBAAC_hRrG364YVbyjvVn5TAW3wEAAwIAA3kAAz0E)

本题应该选 D。

IO 时间为 10s，假设总任务量为 N，那么 N/CPU1 主频=90，CPU2 主频=CPU1 主频×1.5，所以 N/(CPU1 主频×1.5)=60s。

所以新的程序耗时 D。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Vqy092Nif9RXSra_dhUoZ9DrWVBgADFWsbfrhhVpqvUu-oAW8GAQADAgADeQADPQQ)

本题应该选 B。

unsigned short x=65530=65535-5=1111,1111,1111,1010B=FFFAH.

unsigned int 直接进行 0 扩展，也就是 B。

如果本题是 int x，那么也就是先 0 扩展为 unsigned int，然后按照 int 解释，所以也是 B。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9Zqy1F7rfto_0UUoqrAQarfTIlgAgACBhVrG364YVawhDx6TJzt8wEAAwIAA3gAAz0E)

本题应该选 D。

这类题用二进制做，符号位为 0，阶码为 1111,1110，尾数 23 位全为 1。

254-127=127

所以是 1.111（23 个 1）$\times 2^{127}$，也就是 1111（24 个 1）$\times 2^{104}$。

所以也就是 2^104 加到 2^127=2^128-2^104，也就是 D。

需要注意阶码特殊情况。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9dqy1kAAeoUuMrCMkmyXwrP_oDwvVAAAhwVaxt-uGFWiLTbWqVQl7QBAAMCAAN5AAM9BA)

本题应该选 D。

按字节编址，以 int 为边界，也就是 int 开头是 C008H，char 的开头是 C00CH，由于需要边界对齐，所以 C00DH 为空，record.c 应该是 C00EH。

本题采用小短发，所以 273=256+16+1=1,0001,0001B=0000,0111H。

所以低位应该是 11H。

综上所述，应该选 D。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9hqy1lFteB9IFvsgi-KvMdtptQo9wACHRVrG364YVb2kaJYHcUk0wEAAwIAA3gAAz0E)

本题应该选 A。

对于 A，flash 存储器读速度接近 ram，写速度接近 rom，所以错误。

17 猎奇（出题组的锅），直接过。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9pqy1pAimY2q66gAerAl6Wn_bN8OwACHxVrG364YVbatn-NgQkgLwEAAwIAA3kAAz0E)

本题应该选 C。

分别包含 7,3,12,5,6 个微命令，每个微命令需要额外一个 1 个停机位，所以总共就是 8,4,13,6,7，也就是 3,2,4,3,3，加起来是 15。

此外可以注意一下其他两种编码方式，直接控制（编码）法，字段直接编码法，字段间接编码法。

对这道题，如果采用字段直接编码法，也就是几个指令全都加起来即可，也就是 7+3+12+5+6=33。

本题推导不出来字段间接编码，不过可以做出如下修改：

微指令中设有控制字段 A 和操作字段 B。已知字段 A 用 2 位代码作为模式控制信号；字段 B 在字段 A 的不同模式下，可以分别解释为 4 组互不相容的微命令集。若这 4 组微命令集分别包含 7, 5, 6, 8 个互斥微命令，且各组均需包含“不操作”状态，则字段 A 和字段 B 的总位数至少为多少位？

这道题是 2 位 + 后面最大的也就是 4 位（因为 8+1），总共 6 位。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9tqy1xizIthzG4f6mlGuLxi63POsAACKhVrG364YVZAiWHnPBQbDgEAAwIAA3kAAz0E)

本题应该选 C。

传送 128bit 的数据，传数据本身需要花费 128/32=4 个时钟周期，而支持促发，传输一个地址，需要 1 个时钟周期，总共需要 1 个，所以总计是 5 个时钟周期。

5/100M=50ns。

20 超纲。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA9xqy113N8DT-Oe3VxnOzS9a-FdhEAACKxVrG364YVaIAAGJAbnbZGwBAAMCAAN4AAM9BA)

本题应该选 D。

控制线上传输的一般是信号。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA-tqy2qd3wt6hJPb9fUXPyXaTiV_VgACphVrG364YVY5TUkuzEPcFgEAAwIAA3gAAz0E)

本题应该选 B。

本题是背书题，关中断，保存断点，形成中断服务程序入口并送入 PC，也就是 1 和 3，通用寄存器是操作系统做的。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA-xqy2s7t4loB1LP-HK1oCSHlNX8KQACqBVrG364YVZwiWU-qjs85AEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，系统调用的发生在用户态，执行在内核态，对于 B 和 D 也是如此。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_Rqy2uI9YjHZ8ISdO2bJsPe3yMUXwACqhVrG364YVYRPnZwh0AMNQEAAwIAA3kAAz0E)

本题应该选 B。程序状态字寄存器只有中断需要保存（因为要切换进程），而子程序调用不需要切换进程。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_Vqy2u5hsdghEnsOkfxSSzRKxC9cQACqxVrG364YVaM9tKdxCqXIwEAAwIAA3gAAz0E)

本题应该选 B。

对于 C 和 D，虚拟存储不受任何东西的限制，对于 A 和 B，虚拟内存只能基于非连续的分配，如果是基于连续的，虚拟存储都是从逻辑 0 开始，那么必然会炸，所以需要分配地址。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_Zqy2wtghon22NNUzot_qmFTMqf1QACrBVrG364YVZDBk1UISHmqgEAAwIAA3kAAz0E)

本题应该选 A。

属于背书题。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_dqy2xTFZ4pA1vFb5XenTynQl4uvQACrRVrG364YVZSrCUpNP9wGAEAAwIAA3kAAz0E)

本题应该选 D。

本题也是比较经典的题，已分配资源总数为：

R1 已分配：3+4+4+2+3=16

R2 已分配：2+1=3

R3 已分配：3+3+5+4+4=19

所以，R1 还剩下 2，R2 还剩下 3，R3 还剩下 3，得到三元组 2,3,3

P0 资源还需要 2,3,7

P1 资源还需要 1,3,3

P2 资源还需要 0,0,6

P3 资源还需要 2,2,1

P4 资源还需要 1,1,0

2,3,3 显然可以从 P4 开始分配，不过 P4 题目选项里没有。

分配给 P0，显然不行

分配给 P1，得到新的三元组 5,5,6，分配给 P0，显然不行。

分配给 P2，显然不行。

分配给 P3，得到新的三元组 6,3,7；分配给 P4，得到新的三元组 9,4,11；分配给 P2，得到新的三元组 13,4,14；分配给 P1，得到新的三元组...

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_hqy2xj3TjkRtVANTKz_5yn1eAHGQACrhVrG364YVY6jE36daR5XAEAAwIAA3kAAz0E)

本题应该选 A。

open 和 read 的辨析，这个属于重难点。

对于 1，文件数据不在内存里，需要从运行态进入阻塞态来获取数据。

对于 2，请求 read 之后，CPU 进入内核态 IO

对于 3，read 不需要包含文件名，因为 open 返回了文件描述符，去文件打开表里拿文件描述符就可以了。

所以，1 正确，2 正确，应该选 A。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_lqy2zJO_u-_yojfOFQNcfzjfEowQACsBVrG364YVaMCoTrSguPxgEAAwIAA3kAAz0E)

本题应该选 B。

这类题最重要的是要画图，尤其是要注意我红笔圈出来的东西得计算上。

我特别容易忽略计算这一块内容。

![29 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDlqzPVpQFALLGJLgJXv9BG---DihwAC2hJrG8y1YVZfy89hbvj5qwEAAwIAA3kAAz0E)

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_pqy20tc2ft7XZn_NxscI2Y7nJiUgACsRVrG364YVYyJ52tJE5zOgEAAwIAA3kAAz0E)

本题应该选 C。

对于 A，进程结束也就是从运行态变成终止态，此时处理机空出来了，所以需要调度。

对于 B，创建新进程之后，需要从创建态调度到就绪态。

对于 C，进程处于临界区不意味着其不可以调度，只是其占有的设备不可以被释放。

对于 D，系统调用返回用户态，可以理解为 scanf 结束后，此后处于正常运行阶段，所以按照普通进程来考虑。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_tqy224YUQHWv2S4-ATyh46ZmtGogACsxVrG364YVZZyqGl82bVkQEAAwIAA3gAAz0E)

本题应该选 A。

对于 A，这句话是对的，进程是资源分配的单位。

对于 B，进程是资源分配的基本单元，线程是调度的基本单位。

对于 C，系统级线程需要内核支持，用户级线程不需要内核支持

对于 D，同一个进程中的各个线程只有自己的栈空间，地址是依附于进程的。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_xqy24QOSmxthUl7q8x6Ll2xPWsuAACtBVrG364YVZS4z0GNkgmgwEAAwIAA3gAAz0E)

本题应该选 B。

对于 B，磁盘设置多个分区可以理解为 windows 的分区，也就是分为 C 盘 D 盘，显然对磁盘设备 IO 性能毫无影响。

对于 A，重排 IO 次序例如把杂乱无章的顺序改为顺序，这样就可以减少磁臂移动

对于 C，预读也就是在将要访问之前，从磁盘提前把数据读入内存，滞后写也就是设置脏位，或者在关闭文件的时候不立刻写入，因为可能会在短时间内再次打开

对于 D，假设是链式分配，链式分配对应的磁盘块对应到磁盘上可能会导致多次移动。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_1qy27p_WF9PHnHDp14wkqXVCRR1QACtxVrG364YVb9Y2qnCyG34QEAAwIAA3gAAz0E)

本题是背书题，选 B。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_5qy28AAZ3ujMf7mbU1wo8gL1nANZAAArgVaxt-uGFWPuzuR6CXdAYBAAMCAAN4AAM9BA)

本题属于背书题，选 C。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA_9qy28RWaB9QGFRekkIK7ImitkX9QACuRVrG364YVbU_9JSSlg1oAEAAwIAA3gAAz0E)

本题属于背书题，选 A。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAABastvJg593LrJ8Kr5hX-pWRbrtE8AAroVaxt-uGFWMQ7ejc2--EYBAAMCAAN5AAM9BA)

本题应该选 B。

假设数据帧是 x 字节，传播一个帧的时间是 xB/16kbps，也就是 x/2000。

所以，列式子 NTd/(Td+Ta+RTT)≥1，RTT=540ms，解得：

$N = \left\lceil 2 + \frac{1080}{x} \right\rceil$

所以 x 应该取比较小的数据，也就是 128。1080/128 约等于 1024/128=8，所以 2+9=11，所以也就是得要 4 位。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAFqy2_zL2dI29PG5rfkl_FCuWuKwAACuxVrG364YVbeWmhH6cDK0gEAAwIAA3gAAz0E)

本题应该选 C。

124 都是路由器的功能，对于 3 错在不丢失，差错校验是对的，但是没有差错控制。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAJqy3B2tLb5MS4Fak61BtdTOQ9-CQACvBVrG364YVaKCsOEhWcOKQEAAwIAA3gAAz0E)

本题属于背书题，选 A。

对于 C 是 DNS，其他都是棍母。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBANqy3CdLoFff_uhsvn010RVRKh2JQACvRVrG364YVaUHBmNcU9LfgEAAwIAA3kAAz0E)

本题应该选 D。

主机地址 180.80.77.55，将 77 展开为二进制，也就是 77=64+13=0100,1101B，子网掩码 252=255-3=1111,1100B。

由于是广播分组，所以 77 应该是 0100,11｜11。也就是 77+2,79。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBARqy3ERspl7rQ02cSwFS2kOucR1hQACvhVrG364YVY87CFrNsNv1gEAAwIAA3kAAz0E)

本题属于背书题，选 D。

用户给邮件服务器是 SMTP，邮件服务器之间是 SMTP，用户拉邮件服务器是 POP3。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAVqy3FKStiL_eBfQM5Scn-yGCcHZQACvxVrG364YVYBnB-rSuicigEAAwIAA3kAAz0E)

解：

(1)

1. 将 A 和 B 合并得到新的有序表 AB，总长度为 45
2. 将 C 和 AB 合并得到新的有序表 ABC，总长为 85
3. 将 D 和 E 合并得到新的有序表 DE，总长为 110
4. 将 ABC 和 DE 合并得到新的有序表 ABCDE，总长为 195
5. 将 ABCDE 和 F 合并得到新的有序表 395

对于比较次数，最大比较次数为 m+n-1，所以：45+85+110+195+395-5=825

(2)

0. 采用构建哈夫曼树的策略
1. 从原有序表中选取最短的两个有序表，进行合并
2. 将步骤 1 得到的有序表放回原序列
3. 从新的有序表中选取最短的两个有序表，进行合并
4. 重复上述步骤，直至有序表数量变为 1 个

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACA8dqy0Y8l_NWGkByrEvt4rrIGj7UKgAC2xRrG364YVYySjdXmR_FHwEAAwIAA3kAAz0E)

解：

(1)

1. 分别遍历 str1 和 str2，得到其长度 m，n
2. 将 str1，str2 中较长的那一个，先向前遍历 |m-n| 个单位
3. str1 和 str2 同时向前遍历，如果其相等，那么返回
4. 直到 str1 和 str2 为空，返回 nullptr

(2)

```cpp
struct LNode{
    char data;
    LNode* next;
};

int getLength(LNode* L){
    LNode* tmp=L->next;
    int sum=0;
    while(tmp!=0){
        sum++;
        tmp=tmp->next;
    }
    return sum;
}

LNode* solve(LNode* str1,LNode* str2){
    int n1=getLength(str1);
    int n2=getLength(str2);

    LNode* curr1=str1->next;
    LNode* curr2=str2->next;

    int n=0;

    if(n1>n2){
        for(int i=0;i<n1-n2;i++){
            curr1=curr1->next;
        }
    }else{
        for(int i=0;i<n2-n1;i++){
            curr2=curr2->next;
        }
    }
    while (curr1 != nullptr && curr2 != nullptr){
        if(curr1==curr2){
            return curr1;
        }
        curr1=curr1->next;
        curr2=curr2->next;
    }
    return nullptr;
}
```

(3)

时间复杂度：O(m+n)

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAZqy3F-eEgvEO5VDftVkX8_1ZLdVAACwBVrG364YVYB-1VLlLWHRwEAAwIAA3kAAz0E)

解：

(1)

MIPS=80/4=20

1s 内执行 20M 条指令，访存 30M 次，由于命中率为 99%，所以缺失率为 1%，也就是 0.3M 次缺失

0.3M 次缺失总共流数据 0.3M×16B=4.8MB（M 为 10^6），所以主存带宽需要 4.8MB/s。

(2)

~~访存 30M 次，缺页率为 0.0005%，也就是 150 次缺页。~~

~~页面大小为 4KB，缓冲器数据位 32 位，也就是 4KB/32bit=4KB/4B=1024 次。~~

缺失是 0.3M，缺页基于 cache 缺失，也就是 0.3M×0.0005%=1.5 次。

页面大小为 4KB，缓冲器数据位 32 位，也就是 4KB/32bit=4KB/4B=1024 次，也就是一页需要启动 DMA 1024 次，平均 1.5 次缺页，也就是 1.5×1024=1536。

(3)

DMA 控制器优先级更高。

DMA 常用于传送高速设备数据块，如果 CPU 优先则可能会丢失数据。

(4)

~~一个存储体的周期为 50ns，达到稳定的情况下，50ns 可以流动 4×16B=64B 的数据，所以数据率为 64B/50ns=1.28GB/s，这里的 G 是 10^9。~~

一个体是看存储器总线宽度，也就是 4B，而不是 16B，所以最后这个流动是 4×4B=16B，所以数据率为 16B/50ns=320MB/s

![44 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDtqzPw8L_L0Pc-zkmfbjLdBYGOdDQAC4RJrG8y1YVZCks5whA2g-gEAAwIAA3kAAz0E)

![44 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDxqzPxWZ-1qz1A6WLmk6QH1oYH9cAAC4hJrG8y1YVbEh6-ge9TmzgEAAwIAA3kAAz0E)

解：

(1)

由于是 16 位计算机，-513=1111,1101,1111,1111B，算术右移一位，也就是 1111,1110,1111,1111B=FEFFH。

(2)

由于是连续的 4 条指令，所以应该是 8 条。

(3)

I3 的 ID 被阻塞的原因是因为 LOAD-USE 冲突，需要等待将数据写回后才可以 ID。

I4 的 IF 被阻塞的原因是需要等待上一条指令 ID 完之后才可以 IF。

(4)

如下图所示，最短是 17。

![44 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWpq2Io8gHr3a9HhfJXIIDK_ouwglwAC8hNrG89ByVaLRFK5x6rXGwEAAwIAA3kAAz0E)

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAhqy3Gc3YWWfiHIeY6sISNI54UbwwACwhVrG364YVaftxvEiFCcKAEAAwIAA3kAAz0E)

解：

先梳理全流程：

- 0-4
  - 访问<1,1>，将物理页框 32 分配给逻辑页 1
  - 访问<3,2>，将物理页框 15 分配给逻辑页 3
  - 访问<0,4>，将物理页框 21 分配给逻辑页 0
- 5-9
  - 访问<0,6>，刷新页 0
  - 将逻辑页 1 对应的物理页框 32 回收，并挂到空闲页框链尾
  - 将逻辑页 3 对应的物理页框 15 回收，并挂到空闲页框链尾
  - 此时空闲页框链表为 41,32,15
- 10-14
  - 访问<1,11>，由于空闲页框链尾仍存在，所以将 32 重新分配给逻辑页 1
  - 访问<0,13>，刷新页 0
  - 访问<2,14>，将物理页框 41 分配给逻辑页 2

(1)

21

(2)

32

(3)

41

(4)

适合时间局部性好的程序，因为近 5 个时间点没访问过的只是被挂到链尾，不需要访问磁盘就可以读到数据。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAlqy3G0_HGuokIso-j1-jBJ9-hyYwACxRVrG364YVYe5n0gxY4KRQEAAwIAA3kAAz0E)

解：

(1)

总容量为 4TB，也就是 2^42B，由于磁盘块大小为 1KB，也就是 2^10B，所以总共有 2^32 个磁盘块，也就是需要 32bit 存储，也就是 4B，所以表项中块号至少 4B。

一个索引表大小为 512B，512B/4B=128 个磁盘，所以一个文件最多占 128 个磁盘，也就是 128KB。

(2)

起始块号占 6B，块数占 2B，也就意味着块数是 2B=16bit，也就是 2^16 个磁盘块。

504B/6B=84 个磁盘块，所以总共是（2^16+84）KB，也就是 65536+84=65620 KB。

为了使单个文件长度最大，则需要尽可能扩大连续存储的空间，所以应该尽可能增加块数占比的字节数。

由上一问可知，表项至少需要 4B，所以起始块号至少占 4B，也就是块数至多占 4B。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBApqy3HTO_bGLwoK0HUYuAoAAd_2db8AAscVaxt-uGFWaEDXb9PhXzIBAAMCAAN5AAM9BA)

（注意，题目的报文 3 的第二行，50f0,4380H 扫描错误，应该是 5010,4380H。

解：

先分析五个报文。

对于报文 1，总长度为 30H，标识为 019bH，标志和片偏移为 4000H，生存时间 TTL 为 80H，协议为 06H，头部校验何为 1de8H，原 IP 地址为 c0H.a8H.00H.08H，目的地址为 d3H.44H.47H.50H，源端口号为 0bd9H，目的端口为 1388H，序号为 846b,41c5H，确认号为 0000,0000H，数据偏移、保留和 URG 等位为 7002H，窗口为 4380H，校验和为 5db0H，紧急指针位 0000H。

(1)

源 IP 地址为 H，也就是 192.168.0.8 = c0H.a8H.00H.08H 的数据报。比对可知编号为 1,3,4 IP 分组是 H 发送的。

建立 TCP 连接是 A 发送请求建立，然后 B 接收并发送 ACK，然后 A 再次发送 SYN 等信息。

报文 1 的这些信息是 02H，也就是 0000,0010B，可以看到 SYN 号为 1，其他位为 0，并且序号为 846b,41c5H

报文 2 的这些信息是 12H，也就是 0001,0010B，可以看到 SYN 号为 1，ACK 号为 1，并且序号为 eO59,9fefH，确认号为 846b,41c6H，可以判断出确实是回复的报文。

报文 3 的这些信息是 10H，也就是 0001,0000B，ACK=1，表示建立。

所以报文 1,2,3 建立 TCP 连接。

（报文 4 看数据字段携带了应用层数据）。

看数据字段，以太网数据帧至少要 64B，IP 首部为 20B，所以至少是 44B 的数据，观察 3 和 5，28H=40<46，所以报文 3 和 5 经过快速以太网的时候必须经过填充。

28H

(2)

根据报文 5 的确认号，846b,41d6H，以及报文 3 的序号 846b,41c6H，可知总共发送了 846b,41d6H-846b,41c6H=10H=0001,0000B，~~也就是 32B 的数据。~~

最后一步错了，应该是 16B。

(3)

观察 S 初始 TTL 字段，显然是 40H，而报文 5 是 31H，40H-31H=FH，也就是 15 个路由器。

![47 参考资料](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAtqy3Hl3Gp4KmZub6t3Shvvhy_tdQACyBVrG364YVZ-QGjzpHyFzgEAAwIAA3gAAz0E)

### 408 2013 真题 2 刷

- 分数为 143，分数没 1 刷高。1 刷的时候选择题全对，然后错的也是第 43 和第 44，错的点几乎一模一样
- 第 3 题低级错误，图画的是对的，但是题看错了
- 第 43 题 -4，IO 相关分析错误
- 第 44 题 -1，为什么是指令寄存器？

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBAxqy4UkyyYgg4EWN607foVPwCjRzQACHRZrG364YVagRzuEtHgOAAEBAAMCAAN5AAM9BA)

本题应该选 D。

考虑这样一种情况，短序列为 1,999，长序列为 2,3,4,5...，998，那么需要接 2-998 的数。根据这个这个应该选 D。

本题和 2012 年的数据结构应用题类似，但这道题考的不是比对次数，而是合并次数。

这里的坑和排序的交换次数、比较次数类似。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBA1qy4h9CnsfzDBacZd7DZh3jTBvvgACURZrG364YVZ3xHDsry83dwEAAwIAA3kAAz0E)

本题应该选 C。

这类题应该采用特值法，也就是取 n=4，可知想要 p2 是 3，那么第一个出栈的必然是 1 或者 2，等待 3 出栈后，底下的数是 可以决定 p3 和 p4 的归属，可以是 1/2 或者 4 排序。

所以，p3 可以取 n-1。

当然不放心的话可以多试几个，因为这道题有无法确定。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBA5qy4nSsqgTcLVvDT2VfDuvgzfloAACZxZrG364YVYTvfqVISXUYgEAAwIAA3kAAz0E)

~~本题应该选 A。~~

本题应该选 D。

本题属于模拟题，只要记住平衡二叉树的性质以及如何转转即可。

![3 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBA9qy4p3GS4ve7d38EDBUn9nk0V41QACcxZrG364YVa8lv2gLk1mKQEAAwIAA3cAAz0E)

上述的解是对的，但是题看错了，上述为 0 的确实是 3。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBBqy4qTvyb8gKp6qirDDUkSMQnvjAACdBZrG364YVbBUtQviIwWlAEAAwIAA3kAAz0E)

本题应该选 B。

本题考察的是多❌哈夫曼树，也就是最佳归并树。有 6 个叶节点，显然 (6-1)%(3-1)=1，所以要额外加 (3-1)-1=1 个虚段。

绘图如下：

![4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGVqzeD0QIHfa_HRM5Kaq3ZSs6bHLAACUBFrG8y1aVY9l7uaF0uLKwEAAwIAA3kAAz0E)

可以得到 B。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBFqy4sOtgbS9jSMOLakvgzSPewdOAACdRZrG364YVZI4WjO2yvcTgEAAwIAA3kAAz0E)

本题应该选 A。

假设 Y 和 X 的父节点为 A，则由于左右根，X 是右，所以接下来应该是根，也就是 X 的父节点。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGZqzeF0vYKvpVT_zpiz5l52a059XwACURFrG8y1aVYv16B8wrLeEwEAAwIAA3kAAz0E)

本题应该选 C。

使用排除法，考虑一个树的结点只有 1,2,3，且 2 为根，删除叶节点 3 之后再插入，T1 和 T3 不变，所以 1 排除；考虑相同的结点，但是 1 为根，删去 2，此时插入的时候就不一样了。所以 4 排除。

综上所述，叶节点的时候，T1 和 T3 相同，不是叶节点，T1 和 T3 不同，也就是 2,3 正确。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGdqzeIr1Fkmq7mwVoxjhwLBBUrvDAACVBFrG8y1aVaXmXL1p2OEjgEAAwIAA3kAAz0E)

本题应该选 C。

按行之和求出来是出度，按列之和求出来是入度。

所以第一行之和是 2，第一例之和是 1，所以第 0 个结点的度应该是 3，排除法可以选择出来是 C。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGhqzeJ1mkHckVgi7FattBiWd094FQACVRFrG8y1aVYYsGUJRdtjmQEAAwIAA3kAAz0E)

本题应该选 D，D 是深度优先遍历。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGlqzeKZWAp3F-BATfAJA6vIhNQYMAACVhFrG8y1aVZ909Y2FkGNlwEAAwIAA3kAAz0E)

本题应该选 C。

求关键路径可得 本题关键路径有 3 条，也就是 1,3,2,4,6、1,3,2,5,6 和 1,3,5,6

然后逐个分析。

对于 A，取 c 和 e，也就是影响 2,4 和 2,5，完全不影响关键路径 3，舍去。

对于 B，取 c 和 d，也就是影响 2,4 和 3,2，完全不影响关键路径 3，舍去。

对于 C，去 d 和 f，也就是影响 3,2 和 3,5，均影响。

对于 D，取 f 和 h，也就是影响 3,5 和 5,6，完全不影响关键路径 1，舍去。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGpqzeQq-DIYCVg57mEwaOSbj1G5bwACWxFrG8y1aVYaiVeg6Uj4QwEAAwIAA3gAAz0E)

本题应该选 A。

5 阶 B 树非根最少需要含有 5/2 向上取整 -1=2 个结点，根最少得有一个结点也就是 2 ❌，所以最后应该选 A。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGtqzeRka26sfPptWYHrfCxRaPagIAACXBFrG8y1aVaSaUtAaq-t-QEAAwIAA3kAAz0E)

本题应该选 C。

逐个分析，第一趟排序的结果为：110,120,911,122,114,007,119；第二趟排序的结果为：007,110,911,114,119,120,122。

对比可得本题应该选 C。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBNqzJEHd99b9kUVO8EUjs2tNnKBjwACoxFrG8y1YVZNdMYxH-E-QQEAAwIAA3kAAz0E)

本题应该选 C。

首先计算平均 CPI，也就是 2×0.5+3×0.2+4×0.1+5×0.2=1+0.6+0.4+1=3。

所以平均 CPI 为 3。

由于主频为 1.2GHz，所以每秒可以执行 1.2G/3=0.4G 条指令，也就是 400M 条指令。

所以本题应该选 C。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBRqzJG6AZRgaPZsZXP3EroZM52duAACqxFrG8y1YVaA-Ze5ulbeKAEAAwIAA3kAAz0E)

本题应该选 A。

C640,0000H=1｜100,0110,0｜100,0000,0000,0000,0000,0000B

根据划分，符号位为 1，也就是是负数。

阶码 1000,1100B=128+12=127+13，所以应该是 2 的 13 次方。

尾数显然是 1。

所以最终应该是 -1.1B×2 的 13 次方，也就是 -1.5×2 的 13 次方，所以选 A。

本题题目应该是打印错误了，不过问题不大。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBVqzJN_O4Kte2AVr-AAAff6RDj2zTwAArwRaxvMtWFWYL9CEfdJAoQBAAMCAAN5AAM9BA)

本题应该选 A。

这类题就像前面说的，最好的办法就是转换为 10 进制，不过这道题是乘 2 除以 2，用二进制算更方便。

对于 x×2，算数左移，也就是 1110,1000B，对于 y/2，算数右移，也就是 1101,1000B

二者之和也就是 1110,1000B+1101,1000B=1100,0000B，所以选择 A。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBZqzKAhG9BWu9gsu05WMyllx_tMRgAC7hFrG8y1YVYYXJdc_O-E5wEAAwIAA3kAAz0E)

本题应该选 C。

海明码的计算公式是 2^k≥n+k+1，n=8 的时候，也就是 2^k≥9+k，所以 k 应该取 4.

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBdqzKB1Joj8gczFkBqdTrNtxXU4NgAC7xFrG8y1YVbaGwAB4SkeC40BAAMCAAN5AAM9BA)

本题应该选 A。

虚拟空间大小有 4GB，也就是 2^32B，所以占 32 位，页内地址为 4KB，所以占 12 位，所以页号占前 20 位。

对 03FF,F180H 进行虚实地址变换，可以得到其页号为 0,3FFFH，查看页表可得到页框号为 0153H。

所以变换结果应该是 015,3180H，也就是选项 A。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBhqzKEF2L2R4eRKhKbygjxMbiCH3gAC8RFrG8y1YVZfpIyWzB3g0gEAAwIAA3kAAz0E)

本题应该选 D。

变址寻址是 1000H+2000H，得到数据的地址 3000H，根据地址 3000H 得到数据 4000H。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBlqzKFJalEKXYbpjJR__oNmKWQDQwAC8xFrG8y1YVYOhjdr_7JvMQEAAwIAA3kAAz0E)

本题应该选 C。

4 采用 4 级指令流水线执行 100 条指令需要 103 个时钟周期，所以执行 100 条指令需要耗时 103/1.03G，也就是执行 1 条指令平均需要 103/1.03G 一整个除以 100，计算可得是 C。

19 超纲。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBpqzKHLM8c8HoUFFr_rKxfnoKaB-gAC9BFrG8y1YVaBoZJRqnzVQgEAAwIAA3kAAz0E)

本题应该选 B。

本题属于背书题。

对于 1 和 3 可以背书背到。

条带化不知道是什么，增加 cache 机制可以使数据访问变快，而不是可靠性。

条带化是指将连续的数据切分成固定大小的块，轮流分散写入多个物理磁盘中，其作用是通过多盘并行读写来成倍提升 I/O 传输速率与吞吐量（但没有任何容错冗余，不提升可靠性）。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBtqzKLK2QonbW2A1ZRg4Ey7bkiv3wAC9RFrG8y1YVYG5wUKGjtluAEAAwIAA3kAAz0E)

本题应该选 B。

磁盘控制器时延是 0.2ms（下达指令需要的时间）

寻道时延是 6ms。

计算旋转时延，10000rpm 即 10000/60 rps，转半圈也就是 0.5/(10000/60)=3ms。

读数据需要 4KB/20MB/s=0.2ms。（2011 真题特别指出读数据读取扇区这个时间等同于读数据的时间）

所以总共是 9.4ms。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBBxqzKX2HD80xQQzY2qhM5LbfgAB29kAAvoRaxvMtWFWP73kHTY4bmcBAAMCAAN5AAM9BA)

本题应该选 D。

对于 A，中断方式指的是让 CPU 帮忙搬数据，DMA 方式指的是争夺总线。

对于 B，说法正确，需要注意 DMA 响应发生在一个总线事务完成后，至少也得等这个流水段做完，不可能打断这个流水段。

对于 C，说法正确，DMA 传送数据是通过硬件执行，最后说自己好了是要 CPU 参与。

对于 D，说法错误，错误于所有。对于中断 IO 方式，运用在快速设备上会导致数据丢失；~~对于不支持 DMA 方式的快速设备而言，也不可以用 DMA 方式。~~

DMA 方式确实适用于快速设备，注意方向。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBB1qzKdOICqRbgf_FuoiYwzvdrNUWAACARJrG8y1YVZXzp0FoPKp6QEAAwIAA3kAAz0E)

本题应该选 A。

对于 A，删除某文件不需要删除目录（即便该目录下之后其一个文件），因为目录本身也是一个文件。

对于 BCD，显然如此。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBB5qzKfG6e03tCVAzqsWvYKerLDrFAACAxJrG8y1YVbi5EVL1dL-ygEAAwIAA3kAAz0E)

本题应该选 A。

CD 可以直接存取（不能说随机读），但是定位之后，读写只能顺序。

直接存取的含义是是指激光读写头可以按块（扇区）地址直接寻道定位，实现对盘片上任意逻辑地址的独立读取，无需顺序遍历前置数据。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBB9qzKkcYyljvsrZIeOmUhmtT_4CMgACCBJrG8y1YVZ037eYzilIQwEAAwIAA3kAAz0E)

本题应该选 C。

系统调用程序需要做的事情是把用户程序的高级语言翻译成设备可以听得懂的语言，而设备驱动需要做的事情是需要把给设备听的语言翻译为给操作系统听的。

所以计算磁盘应该是驱动程序做的事情，因为系统调用（也就是设备无关性软件）做的事情只能是给设备对应的信号，而给不了到操作系统级别的。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCBqzKs1y0qJHtPhE06rvgSpFgHo5AACDhJrG8y1YVZVW2FvCGdRwQEAAwIAA3kAAz0E)

本题应该选 A。

对于 A，inode 结点总数指的是总共可以有多少个文件，和一个文件的长度无关。

对于 B，间接地址级数越大，显然可以越长

对于 C，地址项个数越多，所拥有的单级磁盘块就越多。

对于 D，地址项乘文件块大小。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCFqzKunAlG7iuRFgmxpRWEiZALfIAACFBJrG8y1YVYcI40_9k5HTQEAAwIAA3kAAz0E)

本题应该选 C。

对于单缓冲，可以绘图如下：

![27 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCJqzKwkIyprBpHaZKa0InkzqUBeiQACFRJrG8y1YVbmqQmCij7CmwEAAwIAA3kAAz0E)

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCNqzKw6SvB0vgLFSfdtsrPylu44vAACFhJrG8y1YVb1LH608U4uewEAAwIAA3kAAz0E)

本题应该选 B。

对于 1，是内部中断，异常分类下的故障

对于 2，是库函数

对于 3，read 系统调用需要进入内核态 IO。

所以应该选 1 和 3。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCRqzKyT_G1vl-4GnK2lC2T3n5AKqQACGBJrG8y1YVbRoIfgxI5qxgEAAwIAA3kAAz0E)

本题应该选 D。

这类题出现了非常多次了，属于背书题和细节题。

注意最终被加载，操作系统肯定是最终被加载到内存里。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCVqzKzGaBnvRig68d4WDkmjtJutDAACGRJrG8y1YVYxTfxs-yvD5QEAAwIAA3kAAz0E)

本题应该选 B。

对于 1，如果是处理越界错误，那么会导致故障。产生缺页的前提是操作系统肯定访问过页表了，既然已经访问了页表，那么就不可能存在越界错误。

对于 2，如果页表满了需要替换。

对于 3 必然会发生。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCZqzK0oj_dHGUU5ga_zKc3Glx385gACGhJrG8y1YVZP9hRE50Pd1QEAAwIAA3kAAz0E)

本题应该选 B。

背书题，长 IO 优先级更大。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCdqzK086DhIx-nH9-mig7xtgF1dIAACGxJrG8y1YVZm4uTr8fYQZQEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，银行家算法是死锁避免，死锁预防指的是破坏死锁的四个必要条件。

对于 B 是对的。

对于 C，处于不安全状态的时候，只是可能会出现死锁，而不是必然。假设现在系统处于不安全状态，进程一直都没去要他的 3 个设备。

对于 D，破坏死锁必要条件是死锁预防干的事，银行家算法根本没破坏请求和保持。

死锁的四个必要条件是：

- 互斥
- 不剥夺
- 保持并请求
- 循环等待

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBChqzK4Eb67wJeC4AY5LW-VkD923lQACHRJrG8y1YVbWkHHra7TycgEAAwIAA3gAAz0E)

本题选 B。

属于背书题，OSI 参考模型从下到上应该是：

物理层，数据链路层，网络层，传输层，会话层，表示层，应用层。其中会话层的作用是对话管理，表示层的作用是数据格式转换。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBClqzK5yXrYM77IFbwwJq3ocbQ6j0wACIRJrG8y1YVYkcjbQUgEUigEAAwIAA3kAAz0E)

本题选 A。

属于半道背书题，10BaseT 使用的是曼彻斯特编码，也就是在一个区间内，向上为 0，向下为 1。

对比题目，也就是 0011,0110，所以选 A。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCpqzK7KS71FSFDr-1dicvA8MqaaMQACIxJrG8y1YVbJVqIZKllhlwEAAwIAA3kAAz0E)

本题应该选 D。

对于报文 8Mb/10Mbps=800ms，两端链路也就是 1600ms。

对于一组数据 10kb，在一条链路上传输时延为 10kb/10Mbps=0.001s。总共 8Mb/10kb=800 组，也就是 801 个传输时延，所以 801×0.001=801ms。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCtqzK_bo_L3iuuI9gTcHchVvdTVIwACJBJrG8y1YVZR2X2O8nfRGAEAAwIAA3gAAz0E)

本题应该选 B。

CDMA，TDMA，FDMA 分别指的是码分复用，时分复用，频分复用。

CSMA 指的是载波监听多点传输。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBCxqzLAWWJ4I0gZkyrUSkoh2XoRVDAACJxJrG8y1YVaJbtYX_pkHDwEAAwIAA3gAAz0E)

本题应该选 A。

HDLC 协议已经从大纲里删了，但是只要知道其是比特切分，也就是连续的五个 1 后面需要插入一个 0。

对于原码 011111｜00 011111｜10，在竖线位置后再插入一个 0，显然也就是 01111100 00111110 10，也就是 A。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBC1qzLCQAAFsskYcGqmUyIlyJd5vYV8AAioSaxvMtWFW27VLrth_54QBAAMCAAN5AAM9BA)

直通的意思就是啥也不看，只看 mac 地址，也就是 6B，所以应该选 B。

存储转发：整帧全部收进缓存 → 算 CRC 校验纠错 → 没错才发出去。（安全可靠、延迟稍高）

直通交换：只收前 6 B 目的地址 → 硬件秒查端口 → 边收边发“抢跑”出去。（速度极快、不纠错、可能传坏帧）

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBC5qzLF_g6hPnAssxz2VvhR_A1pQkQACLBJrG8y1YVaEe8h7aPzFXAEAAwIAA3kAAz0E)

本题应该选 B。

这类题也是经典题。甲收到乙的序号为 1913，确认序号为 2046，有效载荷为 100，也就意味着乙发了从 1913 开始的 100B 数据，并且希望甲发以 2046 开头的数据，所以甲的序号应该是 2046，确认号是甲希望乙发从多少字节开始的数据，由于已经发了 1913-2012 这几个帧，所以下一个帧应该是发 2013，所以这道题应该是 2046,2013，也就是选 B。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBC9qzLIVh7Ogpv9oQ4xAi3oeo76KIQACLxJrG8y1YVY8F8rUjbFrMwEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDBqzLI46Z9D85Sjl_QeExCPbQOXgAACMhJrG8y1YVYJZn9koP5DSwEAAwIAA3kAAz0E)

解：

(1)

解 1：

1. 对 A 进行快速排序
2. 第 (n-1)/2 个数可能是超过一半的数，记为 candidate。
3. 遍历 A，统计 candidate 的出现次数，如果超过 n/2，那么返回 candidate，否则返回 -1

解 2：

1. 用数组模拟哈希表 hasmap
2. 遍历数组，将数组元素作为 key，值则为出现的次数，每次出现该值 +1
3. 遍历哈希表，如果 value 超过 n/2，那么返回 candidate，否则返回 -1

解 3：

1. 使用摩尔投票法，假设第一个数为候选人 candidate，候选者出现次数 curr=1
2. 从第二个元素开始遍历数组，如果当前值不是 candidate，那么 curr-1，否则 +1
3. 一旦 curr 归零，那么需要更新 candidate 为当前数组的值，并且令 curr=1
4. 重复上述过程直至数组遍历完
5. 遍历 A，统计 candidate 的出现次数，如果超过 n/2，那么返回 candidate，否则返回 -1

(2)

```c
int patition(int A[],int l,int r){
    int p=A[l];
    while(l<r){
        while(p<=A[r]&&l<r){
            r--;
        }
        A[l]=A[r];
        while(A[l]<=p&&l<r){
            l++;
        }
        A[r]=A[l];
    }
    A[l]=p;
    return l;
}

void Qsort(int A[],int l,int r){
    if(l>=r){
        return;
    }
    int p=patition(A, l, r);
    Qsort(A,l,p-1);
    Qsort(A,p+1,r);
}

int solve1(int A[],int n){
    Qsort(A,0,n-1);
    int candidate=A[(n-1)/2];
    int cnt=0;
    for(int i=0;i<n;i++){
        if (A[i]==candidate){
            cnt+=1;
        }
    }
    if (cnt>n/2){
        return candidate;
    }
    return -1;
}

int solve2(int A[],int n){
    int hasmap[n];
    for(int i = 0; i < n; i++){
        hasmap[i] = 0;
    }
    for(int i=0;i<n;i++){
        hasmap[A[i]]++;
    }
    for(int i=0;i<n;i++){
        if(hasmap[i]>n/2){
            return i;
        }
    }
    return -1;
}

int solve3(int A[],int n){
    int candidate=A[0];
    int curr=1;
    for(int i=1;i<n;i++){
        if(A[i]!=candidate){
            curr--;
        }else{
            curr++;
        }
        if(curr==0){
            candidate=A[i];
            curr=1;
        }
    }
    int cnt=0;
    for(int i=0;i<n;i++){
        if (A[i]==candidate){
            cnt+=1;
        }
    }
    if (cnt>n/2){
        return candidate;
    }
    return -1;
}
```

(3)

解 1 时间复杂度：O(nlogn)，空间复杂度：O(logn)

解 2 时间复杂度：O(n)，空间复杂度：O(n)

解 3 时间复杂度：O(n)，空间复杂度：O(1)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDFqzLeXLq6MfyI4N_lndmtTWm9DMAACNxJrG8y1YVZhu8u5SmLj0wEAAwIAA3kAAz0E)

解：

(1)

采用顺序存储法，排列为：S1={do, while, for, repeat}。查找第一个是 1，第二个是 2，第三个是 3，第四个是 4，所以计算可得，ASL=1×0.35+2×0.35+3×0.15+4×0.15=2.1

(2)

采用链式存储，使用链表，排列为 do->while->for->repeat。查找第一个是 1，第二个是 2，第三个是 3，第四个是 4，计算可得 ASL=2.1

本题第 2 问还可以采用树型存储。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDJqzMoiaOGZSiWTN8X1NCgZ2IMdfQACbhJrG8y1YVb6RCZwjakFEwEAAwIAA3kAAz0E)

解：

(1)

CPU 时钟周期为 1/800M=1.25ns。

总线时钟周期为 1/200M=5ns。

假设传输 1s 的数据，总共有 1/5ns=200M，所以 200M×32bit=800MB/s。

(2)

当 cache 缺失时，由于 cache 块大小为 32B，且每次突发传送传送 32B，所以需要传送一次地址即可。

(3)

~~32B/4B=4，所以总共需要 5 个总线时钟周期。~~

~~所以 5×5ns=25ns。~~

第 4 问考虑到了存储体的问题，但是第 3 问没考虑到，感觉属于比较低级的错误。

传送地址 5s，启动第一个 40ns，然后启动 8 体，也就是 8×5ns，总共加起来也就是 85ns。

(4)

首先计算 100 条指令的时间花费，也就是 100×4×1.25ns=500ns。

~~一条指令平均需要 1.2 次访存，也就意味着总共需要 120 次访存，120 次访存也就意味着总共需要访存 120/8×40ns=600ns~~

~~cache 缺失率为 5%，也就意味着 100 条指令里有 5 条指令 cache 缺失，也就意味着需要 5×25ns=125ns 去处理 cache 缺失问题传送数据。~~

~~所以总共也就是 1225ns。~~

cache 缺失率为 5%，也就意味着 100 条指令里有 100×1.2=120 次访存，也就是 120×0.05=6 条指令 cache 缺失，也就意味着需要 6×85ns=510ns 去处理 cache 缺失问题传送数据。

所以总共加在一起应该是 1010s。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDNqzM87yCNB4etJ2otmkU7hMvryIQAChRJrG8y1YVZbhXp_miFE6QEAAwIAA3kAAz0E)

![44 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDRqzM9USyt4r-ecZRGXGl9_HonRugAChhJrG8y1YVaqCd4UB6zvdAEAAwIAA3gAAz0E)

解

(1)

按字节编址，因为 16 位定长本题采用是的 +2。

OFFSET 为 8 位，按照有符号数的表示范围是 -128 到 127，所以向后最多可以跳转 127 条指令。

(2)

本条指令 C=0，Z=1，N=1。

当 CF=0，ZF=0，NF=1 时，触发跳转，所以 200CH +2 +2×1110,0011B，也就是 200EH+1100,0110B=200E+FFC6H=1FD4H

当 CF=1，ZF=0，NF=0 时，未触发跳转，所以 200CH+2=200EH。

(3)

C=1

Z=1

N=0

(4)

1. ~~译码器~~
2. 移位寄存器
3. 加法器

应该是指令寄存器，指令寄存器连着那个是多路选择器。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDVqzNHOrdLEZV7_7YfTNGV6B4hWPgACihJrG8y1YVY59n2iUGlBGwEAAwIAA3kAAz0E)

![45 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDZqzNHjKIpPN58AAfLmIaQg7GsM92QAAosSaxvMtWFWljQxQU11XYUBAAMCAAN5AAM9BA)

解：

```c
cobegin
  参观者进程 i：
  {
    P（空位）； // 500
    P（出入口）； // 1
    进门；
    V（出入口）；
    参观；
    P（出入口）；
    出门；
    V（出入口）；
    V（空位）；
  }
```

```c
semaphore empty=500;
semaphore mutex=1;

cobegin
  参观者进程 i:
  {
    P(empty);
    P(mutex);
    进门;
    V(mutex);
    参观;
    P(mutex);
    出门;
    V(mutex);
    V(empty);
  }
```

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDdqzNMUmdwSESFHqUMjycdZzW_l-wACjBJrG8y1YVY9OMUqzGpbWAEAAwIAA3kAAz0E)

解：

(1)

由于页内偏移量为 12 位，所以页大小为 4KB。

页号为 20 位，所以最多 2^20 个页表，每个个表项需要 4B，所以页表最大占用 4MB。

(2)

页目录号：LA/2^22

页表索引：（LA%2^22）/2^12

(3)

代码起始逻辑地址为 0000,8000H，所以页号是 8。

由于一个页表项大小为 4B，所以物理地址 1 为 0020,0000H+8×4=0020,0000H+20H=0020,0020H。

物理地址 2 为 0020,0024H。

物理地址 3 为 0090,0000H+1000H=0090,1000H。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBDhqzNV8M9bKS_RAL6WaMrdBM3FEmQACjxJrG8y1YVYhTJuzicAQzgEAAwIAA3kAAz0E)

解：

(1)

首先考虑 S0 口的两个网络，很显然聚合起来是 153.14.5.0/24。

然后考虑 E0，

根据最长前缀匹配原则，访问 194.17.20.128/25 和 194.17.20.0/25 并不冲突，所以对于前者填其本身即可。

考虑 S1：

20=0001,0100B

21=0001,0101B

显然其前 23 位是一样的，所以应该是 194.17.20.0/23

综上所述，表项为：

153.14.5.0/24 153.14.3.2 S0

194.17.20.128/25 / E0

194.17.20.0/23 194.17.24.2 S1

(2)

根据最长前缀匹配原则，194.17.20.200 跟 194.17.20.128/25 匹配，所以应该从 E0 转发。

(3)

BGP 协议

TCP。

### 408 2014 真题 2 刷

- 147
- 第 44 题 -1，应该把通式写出来
- 第 45 题 -1，load 指令问题，这里的 load 指的是数组，而不是代码
- 第 46 题 -1，最终的文件长度块大小没 -4B

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBD1qzRkBOEJpt1a_8FWeNBu-ena-JQACpA9rG8y1aVY4o8vqsKAdsAEAAwIAA3gAAz0E)

本题应该选 C。

记当前为 1，那么也就是 n×n+n/2×n+...，也就是 C。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBD5qzRl05zX01IxUJCngoheBXiUy8gACpg9rG8y1aVaZ2DMtvs9zxQEAAwIAA3kAAz0E)

本题应该选 B。

属于模拟应该是 B。

草稿太乱了，不放上来了。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGxqzg86s_eQU4riXiNrWtru-JxXCgACnhVrG7fmcVbVFxhqK72wNwEAAwIAA3kAAz0E)

本题应该选 A。

按照之前说的技巧，假设已经有一个元素了，然后 rear 指针回退一格，也就是有一个元素的时候，end1 指向 0，end2 指向 1，出队，也就是 end2 指向 0，所以初始为空的时候，end1==end2。

当队伍满的时候，这类题采用空一位的做法，不应该是 mod M-1，应该是 mod M

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBG1qzg_NKh3XfAb_V9XdL46e2MFMQwACoRVrG7fmcVYyiej8LySAewEAAwIAA3kAAz0E)

本题应该选 D。

本质上这道题求的是中序遍历，所以对该二叉树中序遍历，也就是：

d,e,b,x,a,c，所以左右线索分别指向 b 和 a，也就是 D。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBG5qzhApJAABV4NBEfQLcdK5BUWTlM0AAqQVaxu35nFWryr3ISiRDbABAAMCAAN4AAM9BA)

本题应该选 C。

这类题采用特值法排除是最快的，反例如图所示：

![5 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBttq0OavhnHoTc-cQkUH4ZGaXGwXtQACuRRrG6jniFY0_HYWCzyf-AEAAwIAA3kAAz0E)

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBG9qzhE_GbFT1-DUymM8qr94poXD8QACpxVrG7fmcVbJFope3gXeggEAAwIAA3gAAz0E)

本题应该选 D。

这类题最简单的做法是观察，注意到 D 的 110 是 1100 的前缀。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBHBqzhFzWPK1bb2RDkxCD7OxCiCgcwACqBVrG7fmcVaUeQ5u2WqbTQEAAwIAA3gAAz0E)

本题应该选 D。

这类题最好的办法就是逐个模拟。

对于 A，3,1 之后，对于 2 之前需要完成 4，所以舍去。

对于 B，和 A 类似。

对于 C。3,1,4,2 之后如果取 5 的话，则需要完成 6，舍去。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBHFqzhHsKkJiO1kD45bswVKjw70L4AACqxVrG7fmcVZtMPcfzoBfvwEAAwIAA3kAAz0E)

本题应该选 D。

对于 A 和 C，不管寻址寻了多久，存储空间都是消耗那么多。

对于 B 是提前固定的，显然不会受到影响。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBHJqzhIoUszXbGsJv0J3oAS7oFXc_gACrBVrG7fmcVYHal7vsnC2gAEAAwIAA3gAAz0E)

本题应该选 D。

一棵 4 阶 B 树，至少拥有 4/2 向上取整 -1 个的结点，也就是 1，要让关键字节点个数最多，也就是让单个结点内含有的关键字数量越少。

一个结点内至少含有 1 个关键字，所以这道题应该选 D。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBHNqzhLKMN2Fh_cXacGW98uEIMghHgACrxVrG7fmcVYq73vg8RiRUgEAAwIAA3kAAz0E)

本题应该选 B。

观察到 9 和 1，所以 d 不可能是 1。

观察到 9 和 4，所以 d 不可能是 2。

观察到 9,13,20；2,7,23；4,8,15，所以可能是 3。

观察到 9,7，所以不可能是 4。

观察到 9,8，所以不可能是 5。

综上所述，应该是 3。

这类题也没什么有技巧的，都是模拟。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBD9qzbjMVLhqVc32m-rjmTihQOidHQAC1RBrG8y1aVaM6OWaOuNDhwEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，可以选择 2 和 9 分别作为轴。

对于 B，可以选择 2 和 9 分别作为轴。

对于 C，只能选出来 9 当轴。

对于 D，可以选择 5 和 9 当轴。

对于这类题，一定要优先想边界。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEBqzbnEXAq8P21CrHhcVJOU_SVk0wAC1hBrG8y1aVYoU-IaHxzHqwEAAwIAA3kAAz0E)

本题应该选 D。

假设 P 原本执行的指令数量是 N，CPI 是 X，主频为 M，那么也就是 NX/M=20。根据题目所说的公式，0.7N×1.2X/N，也就是 0.7×1.2×20=16.8。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEFqzbqxF5xsC0Nsgcjq-7x8baF8_AAC1xBrG8y1aVbk61W-b9QnhQEAAwIAA3kAAz0E)

本题应该选 C。

这道题应该按照十进制考虑，8 位定点补码运算的范围是 -128-127，那么显然 x-y =128 会溢出，所以应该选 C。

本题应该选。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEJqzbrs3oAxlGglx7KfAAGy_CloGtIAAtgQaxvMtWlWqoWICPqJWhQBAAMCAAN5AAM9BA)

本题应该选 A。

CC90,0000H=1｜100,1100,1｜001,0000,0000,0000,0000,0000B.

B0C0,0000H=1｜011,0000,1｜100,0000,0000,0000,0000,0000B.

首先看符号位，f1 和 f2 的符号位都是 1，也就是都是负数，所以 x 和 y 符号相同。

观察阶码，x 阶码显然大于 y 的阶码，所以 x 的次数显然大于 y 的次数，由于是负数，所以次数越大的数越小，所以 y 更大，也就是 x < y。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBENqzbuf7F2kR9PmGIIaORAt4bpRYgAC3RBrG8y1aVb6cakE8pl4cAEAAwIAA3kAAz0E)

本题应该选 A。

本题属于比较阴的题目，DRAM 芯片的地址引脚和数据引脚，而不是问的是存储器。

对于 DRAM，没有特殊说明默认采用地址复用技术，所以总共 4M=2^22，也就是 11 根地址线。

数据总线显然是 8 根，所以总共 19 根。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBERqzbxtAaGYzdpsCrx_OOYdiOBVBgAC3hBrG8y1aVYIAUG6s0Kp6wEAAwIAA3gAAz0E)

本题应该选 D。

指令 cache 和数据 cache 分离，是因为要减少访存冲突，也就是流水线冲突。

从流水线的角度思考，一般是五段式流水线，取指令，分析指令，执行指令，访存，写回。如果指令和数据 cache 没有分离，那么取指令和访存冲突。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEVqzb_Qt3WWkcTxmP7hqnPzaMPlxAAC3xBrG8y1aVbv033cvIbGeAEAAwIAA3kAAz0E)

本题应该选 A。

16 个通用寄存器占 4 位，操作码字段占 8 位，由于 store 指令需要指令从谁存到谁，需要 2 个寄存器位，也就是 32-8-4-4=16。

16 位的偏移应该是 A，因为 offset 的计算公式是当前指令 + “1”+offset×x 编址数

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEZqzb_ks5Fk--Oz-Zw6tZWAXfA-ZgAC4BBrG8y1aVZauiVUqfywRwEAAwIAA3kAAz0E)

本题应该选 C。

采用微程序控制器，共有 32 条指令，由于每条微指令平均由 4 条微指令组成，所以总共有 4×32=128 条微指令。

由于还有公共的 2 条微指令，所以总共有 130 条微指令，也就是需要 8 位才能存储。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEhqzcKjKT16_4vkKT4aPXsg5rcHfwAC5hBrG8y1aVbM39Zt9krALQEAAwIAA3kAAz0E)

本题应该选 C。

由于地址/数据线有 32 根，所以一次最多传送 4B 的数据，由于每个时钟周期内传送 2 次数据，所以 1s 内可以传输 66M×2=132M 次数据，所以 132M×4B=528MB/s，也就是 C。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBElqzcMQkwsHgAwPqnPOelBkyjSHDwAC6BBrG8y1aVYDFNwc7VM4JwEAAwIAA3kAAz0E)

本题应该选 C，属于背书题。

对于 A 和 B 是并行和串行的概念，现代一般采用串行，因为并行很容易导致信号干扰。

对于 D，同步传输、异步传输、半同步传输

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEpqzcQD3cmS8M4TJInHNN7jqc7csQAC7BBrG8y1aVbaSk1IAAH3VAgBAAMCAAN4AAM9BA)

本题应该选 D。

统一编址情况下，CPU 可以使用一样的访存指令访问 IO 接口，比如 Load 和 Use。

控制寄存器，状态寄存器和数据寄存器。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBEtqzcRck5pcK3-Y9OrLuLtaIJXW6QAC7RBrG8y1aVavaX7hCapq1QEAAwIAA3kAAz0E)

本题应该选 B。

延迟 50ns，但是这 100ns 都是在这 400ns 里的。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBExqzcRt4zT2F64SjYUjSmKHfQgywAAC7hBrG8y1aVbd2KL-_jssRwEAAwIAA3gAAz0E)

本题应该选 A。

对于 A 是绝对公平的算法，所以不会导致饥饿现象。

对于 B，静态优先数优先，假设来了非常多高优先级的进程，低优先级的进程始终得不到满足，所以排除。

对于 C 和 D，无论是抢占式短作业还是非抢占式短作业都会导致饥饿现象。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBE1qzchH8e5bTGuIuiEzoSCq8MJCzAAC9RBrG8y1aVbqmtIN86OXsQEAAwIAA3kAAz0E)

本题应该选 B。

先求会导致死锁的最大个数，也就是 2+3+4=9，所以不会导致死锁的是该个数 +1，也就是 10。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBE5qzciQwya61V4O_97Qm19MW9ietQAC9hBrG8y1aVa9mvKxCTF2hAEAAwIAA3gAAz0E)

本题属于背书题，应该选 D。

对于 A，trap 在用户态运行，让操作系统进入内核态执行系统调用。

对于 B，可以考虑 jmp。

对于 C，可以考虑递归函数调用。

对于 D，关中断必须在内核态执行。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBE9qzc2awdXbKDhVO-fOwKbxQy_7mQACARFrG8y1aVZn0if8mdzGPgEAAwIAA3gAAz0E)

本题应该选 A。

对于 A，读磁盘操作完成的意思是 IO 完成，操作系统需要让其从阻塞态变成就绪态，所以 A 必然是需要执行的。

对于 B 显然是错误的，除非故意这么做，一般来讲操作系统不改变其优先级或者增加进程优先级。

对于 C，如果该进程前方还有其他进程正在执行，此时进程还在就绪态，所以不需要分配内存。

对于 D 和 B 类似。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFBqzc57Beq0HYfBDpsy7pxZAoyKgAACAhFrG8y1aVbiPw6tFYKG9gEAAwIAA3kAAz0E)

本题应该选 A。

10GB 的磁盘分区，簇大小为 4KB，也就是总共有 10GB/4KB = 10×2^18 个簇，需要 10 ×2^15B 的存储空间，也就是 10×2^15B/4KB=80 个簇。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFFqzc9hJjFrRcKB490LZwo7JY2bvAACBRFrG8y1aVaC-MevpEO_8gEAAwIAA3gAAz0E)

本题应该选 C。

对于 1，增大 TLB 容量可以使 TLB 命中提升，显然正确。

对于 2，页表常驻内存可以让页表本身不会缺失，所以可以，对于这种情况可以考虑二级页表。

对于 3，增大交换区的意思是让磁盘和内存的交换空间变大，交换空间变大并不意味着速度可以变快，只是空间变大了。

所以应该选 1 和 3。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFJqzdDcn9PA17mwb_E8wlRrI4mU4QACCRFrG8y1aVadfIpLTGyF9AEAAwIAA3kAAz0E)

本题应该选 B。

这道题的本质是考察 open 和 read 的区别，本题题设意思是 open 之后，操作系统需要做什么。

对于 ABD，open 需要文件名作为参数，需要将文件控制块读入内存中，然后在系统文件打开表中登记，read 的作用是根据文件描述符去磁盘中读具体的内容到内存里，然后返回用户进程文件的数据缓冲区。

所以 A 错误，B 正确，D 错误。

对于 C，打开文件的时候不需要修改文件控制块的读写权限，与之无关。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFNqzdG3LEKLVF76zbP69aMu2fjOqgACCxFrG8y1aVYJ2CXg7xF91wEAAwIAA3kAAz0E)

本题应该选 A，属于背书题。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFRqzdHYpalNpviYdqpfEzJyqpROeQACDBFrG8y1aVaNC8p_6KC1qwEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，管道是半双工的，所以不能实现双向数据传输。

对于 B，管道的容量不受磁盘容量的大小限制，应该是受内存大小的限制。

对于 C 和 D，考虑类似读者写者问题，假设一个管道内有读进程，那么可以允许其他读进程进入。

这类题需要深度辨析管道和管程的区别。

管程属于语法范围，作用是管理 PV 操作，但是其和 PV 操作有区别，管程的 P 操作如果在没有资源的时候，并不会 -1，而是等待。

此外还可以注意，管程只允许一个读进程或者一个写进程进入（因为操作管程必须是互斥的），但是进入管程后（意思是在管程外）可以有多个读进程同时操作里面的东西，也就是说过通道需要互斥，但是里面的东西可以同时访问。

这个通道指的是管程，这个里面的东西指的是管程外。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFVqzdNDJ8bseZY4iC1xmi1ffFs9wwACGBFrG8y1aVYRQfOSGlO_ZAEAAwIAA3gAAz0E)

本题属于背书题，应该选 D。

对于 ABC 属于多级页表的缺点，引入多级页表之后需要额外进行多次地址转换，同时缺页中断可能性也会增加，由于要管理页表的页表，所以页表项的个数会变多，不过不会改变页表项本身占的字节数。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFZqzdP24PMAAccYiR8NdmWzCwPthQMAAhsRaxvMtWlWrUN-dmVd5jQBAAMCAAN4AAM9BA)

本题属于背书题，应该选 C。

OSI 参考模型从下至上应该是物理层 - 数据链路层 - 网络层 - 传输层 - 会话层 - 表示层 - 应用层。为会话层提供服务的应该是传输层。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFdqzdRmzG1RGkqDNvigMaRm_PVcGQACHRFrG8y1aVYjqcvIIu142AEAAwIAA3kAAz0E)

本题应该选 B。

a1 向 c1 发送数据帧，经过交换机，交换机通过自学习功能先登记 a1 和端口 1，然后查表发现没有，所以发广播询问，得到 3 的回应后记录目的地址 c1 和端口 3。由于这个过程是广播，所以应该从除了 1 之外的所有端口发送，也就是 2,3

c1 向 a1 发送确认帧，查转发表发现有对应的项，所以直接单播传输即可，也就是 1。

综上应该选 B。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFhqzdUjiEwI7H4K0TUBfhL9_oaBvQACHhFrG8y1aVZWlmJCFVhPsgEAAwIAA3gAAz0E)

本题属于背书题，应该选 D。

数据传输速率的意思是发送时延，发送时延显然和 ABC 相关，D 和 RTT 相关，属于传播时延。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFlqzdVRtRXmSUici4uzIqZI1iaAlwACIBFrG8y1aVaFCJ0NDnI1YgEAAwIAA3kAAz0E)

本题应该选 C。

首先计算发送一个数据帧的时间，也就是 1000B/100Mbps=8000bit/100Mbps=8×10^-5s=0.08ms，记为 Td，忽略 Ta。

而 RTT=100ms

所以最大发送窗口公式应该是：

NTd/(Td+RTT)≥1，就算可得 N≥1251。而 N 最大是 1000，所以意味着数据率不可能打满。

所以发送 1000×1000B 之后，就需要等待第一个帧回到手后才可以发送下一个 1000×1000B。发送 1000×1000B 所需要的时间是 80ms，RTT 是 100ms，所以第一个帧的回应应该是 100ms，也就意味着每间隔 100ms 才可以发送 1000×1000B。

1s 内总共有 10 个 100ms，所以总共可以发送 10×1000×1000B 的数据，也就是 80Mbps。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFpqzdg4jMeiYLgr45PeiWVsxNm9kgACKRFrG8y1aVaGllFRcVIwmAEAAwIAA3kAAz0E)

本题应该选 B。

码片的计算应该是按照向量乘法计算，A 的码片是 1111，C 受到的第一片是 2020，相乘单位化得到 1，第二片是 0，-2，0，-2，相乘单位化得到 -1，第三篇是 0202，相乘单位化得到 1。

由于是 1,-1,1，译码得到 101，也就是 B。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFtqzdj5AwEQQqia5WiFBVQfH8F94QACKxFrG8y1aVaMxMdkmfpydgEAAwIAA3kAAz0E)

本题应该选 A。

甲在发生超时的时候拥塞窗口为 8KB，也就意味着新的拥塞窗口是 4KB。

所以 t 时刻的发送窗口是 min{1, 10}，t+1 时刻前者是 2，t+2 时刻前者是 4，t+3 时刻前者是 5，直到 t+8 时前者是 10，而当 t+9 时，前者是 11，但是后者接收窗口最大为 10。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBFxqzdmSc_U0CbWHYnYWByOYHsXksAACLBFrG8y1aVYnxuxSK-SkUQEAAwIAA3gAAz0E)

本题应该选 B，属于背书题。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBF1qzdmpnTNzbnxXWn1H5V3s_psxHQACLRFrG8y1aVar7Rxz6_isNAEAAwIAA3gAAz0E)

本题应该选 D，属于背书题。

PPP 协议是局域网接入广域网的协议，所以可能会用到，对于 D 是邮件传输协议，不可能使用到。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBF5qzdrlZ4cZpIefJDEzcn_F1a3CvwACLhFrG8y1aVbwc9I3uxXrYwEAAwIAA3kAAz0E)

解：

(1)

1. 设置一个全局变量 WPL
2. 对该树进行先序遍历，如果结点为空，那么返回
3. 如果该结点为叶结点，那么结算，WPL+=深度×权值
4. 如果该结点不是叶节点，那么递归的遍历其左子树和右子树

(2)

```c++
struct TNode{
  int weight;
  TNode* left;
  TNode* right;
}
```

(3)

```c++
int WPL=0;

void getWPL(TNode* T,int depth){
  if(T==nullptr){
    return;
  }
  if(T->left==nullptr&&T->right==nullptr){
    WPL+=T->weight*depth;
  }
  getWPL(T->left,depth+1);
  getWPL(T->right,depth+1);
}

int solve(TNode* T){
  getWPL(T,0);
  return WPL;
}
```

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBF9qzdxY0FAYN8NIXAzdvb6vWqh4ggACMxFrG8y1aVagSf4LIiDfRgEAAwIAA3kAAz0E)

解：

(1)

图。

(2)

略。

(3)

R1 到达 192.1.1.0/24，花费 1，路径：R1-192.1.1.0/24

R1 到达 192.1.6.0/24，花费 4，路径：R1-R2-192.1.6.0/24

R1 到达 192.1.5.0/24，花费 3，路径：R1-R3-192.1.5.0/24

R1 到达 192.1.7.0/24，花费 8，路径：R1-R2-R4-192.1.7.0/24

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGBqzdxzU0xo4VJkMNVpLCmmZMAiVwACNBFrG8y1aVb20rxemcjTdwEAAwIAA3kAAz0E)

解：

(1)

R1 到 192.1.1.0/24 通过 E0 口；到 192.1.5.0/24 通过 L1 口，到达其他两个通过 L0 口，所以需要路由聚合 192.1.6.0 和 192.1.7.0/24。

6 展开是 0000,0110B，7 展开是 0000,0111B，所以所以聚合完应该是 192.1.6.0/23

所以，最终的表项应该是：

192.1.1.0/24 / E0

192.1.5.0/24 10.1.1.10 L1

192.1.6.0/23 10.1.1.2 L0

(2)

L0

61

(3)

Prefix: 0.0.0.0/0

Metric：10

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGFqzdyJjH7dJzHo7O3oguX1vSR45wACNRFrG8y1aVZaXV8Pu59g_wEAAwIAA3kAAz0E)

解：

(1)

字节。

因为地址变号 1 和地址编号 2 之间差 4H，而编号 1 的机器代码占 4B，4/4=1，所以编址单位为字节。

(2)

4B。

因为 R2 种存储的是 i 的信息，i 左移两位也就是×4，所以也就是 4B。

(3)

OFFSET 应该是 -6。

bne 目标地址公式应该是：0804,8114H+4H+OFFSET×4。

~~占位符~~

这一步没写，最后应该指出 (PC)+4H+OFFSET×4。

(4)

绘图如下：

| 指令     |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  | 10  | 11  | 12  | 13  | 14  | 15  | 16  | 17  | 18  | 19  | 20  | 21  | 22  | 23  | 24  | 25  | 26  | 27  |
| :------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1. sll   | IF  | ID  | EX  | MEM | WB  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| 2. add   |     | IF  |  s  |  s  |  s  | ID  | EX  | MEM | WB  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| 3. load  |     |     |     |     |     | IF  |  s  |  s  |  s  | ID  | EX  | MEM | WB  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| 4. add   |     |     |     |     |     |     |     |     |     | IF  |  s  |  s  |  s  | ID  | EX  | MEM | WB  |     |     |     |     |     |     |     |     |     |     |
| 5. add   |     |     |     |     |     |     |     |     |     |     |     |     |     | IF  | ID  | EX  | MEM | WB  |     |     |     |     |     |     |     |     |     |
| 6. bne   |     |     |     |     |     |     |     |     |     |     |     |     |     |     | IF  |  s  |  s  |  s  | ID  | EX  | MEM | WB  |     |     |     |     |     |
| 分支气泡 |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     | nop | nop | nop |     |     |     |     |     |
| 下轮 1   |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     | IF  | ID  | EX  | MEM | WB  |

可以注意，指令 6 从 EX 开始阻塞 3 个单位，恰巧使得编号 1 解决了数据冲突。

根据图分析，数据相关：编号 2,3,4,6；控制冒险：6。

根据图所示，指令 1 对 R2 的访问在时钟 5 的时候就写回了，下一次访问 R2 是 15，在此期间并没有再写 R2，所以不会因为数据阻塞。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGJqzdyjU1KaJ-FAdOK_Ze4-I7I42QACNhFrG8y1aVbJ9-DwdOVcSAEAAwIAA3kAAz0E)

解：

(1)

1000

(2)

cache 16 行，和主存交换块大小 32B，也就是 16×32B=512B。

本题问的是指令 cache 的命中率，由于机器代码已经调入主存但不在 cache 内，所以需要进行一次调入。而整个指令总共有 08048100H-080408114H，也就是 18H=24B，可以存储在 512B 内，所以只会发生 1 次 cache 缺失，也就是刚调入的时候的第 1 条指令。

所以总共运行 6000 次只缺失 1 次，也就是 5999/6000=99.98%

(3)

add RI, RI, R5 可能会发生溢出。

~~loop: s11 R4, R2, 2 可能会导致缺页。~~

load 指令会导致缺页（这里的缺页指的是缺数据，而不是命令）

对于数组 A 的访问，只需要读取 1 个磁盘调入页表；

由于 TLB 第一次不命中，需要调入，又由于所有数组元素都在一页，所以第一次的时候访问 TLB 不命中，第二次重新访问，也就是 1001 次。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGNqzdy1xitqurSeBvDd4IszLPvCrwACNxFrG8y1aVbq_wceCXBTnAEAAwIAA3kAAz0E)

解：

(1)

采用连续分配方式，最短是将 29 个记录读入，然后向前移动一个单位，然后写入本身。需要访问 59 个磁盘。

F 文件控制块的长度会发生改变，起始位置也会发生改变。

(2)

采用链式分配，读入前 29 个，然后写入第 30 个之后，修改第 29 个的指针，所以总计 31 次。

每个存储块大小为 1KB，4 字节存放链接指针，4B=32bit，也就是 2^32 个磁盘块，~~所以最大长度应该是 2^32KB，也就是 4TB。~~

最大长度应该是 2^32×(1024-4)B=4080GB。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBGRqzdzEOrtevENwkzF-WBXNMBqJXAACOBFrG8y1aVZ3GdXZcZeWeQEAAwIAA3kAAz0E)

解：

```c
func 生产者_i(){
  while(1){
    生产；
    P（空位）； // 1000
    P（mutex）； // 1
    访问缓冲区；
    V（mutex）；
    V（生产）；
  }
}

func 消费者_j(){
  while(1){
    P（锁）； // 1
    // 执行 10 次
    P（生产）；
    P（mutex）；
    访问缓冲区；
    V（mutex）；
    V（空位）；
    V（锁）；
  }
}
```

```c
semaphore mutex=1;
semaphore empty=1000;
semaphore product=0;
semaphore key=1;

func producer_i(){
  while(1){
    produce();
    P(empty);
    P(mutex);
    putin();
    V(mutex);
    V(product);
  }
}

func consumer_j(){
  while(1){
    P(key);
    for(int i=0;i<10;i++){
      P(product);
      P(mutex);
      get();
      V(mutex);
      V(empty);
    }
    V(key);
  }
}
```

### 408 2015 真题 2 刷

- 136 分，这份卷子 1 刷的时候 147，错了第 8 题和计组的有一题没分析直接写的答案
- 这份的 2 刷选择题是很久之前做的，然后一直没对答案，又犯老毛病了，然后本来标记的要检查的题因为迁移到 codebuddy 没了，但是我觉得是次要原因，本来第一次做 147 的题第二次怎么就只有这个分。
- 第 6 题：分析对了选错了。
- 第 10 题：堆的比较问题
- 第 15 题：忽略了 cache 位。
- 第 27 题：低级错误，漏看了最后一个数字。
- 第 36 题：低级错误，要么错误看成正确，要么 CSMA/CD 协议看成 CA。
- 第 44 题 -4：第 2 问属于低级错误，想当然认为是 write，以及看图说话又想当然了

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBHRqzhh0k1rKZjjO8X6IutKq0DapUAACwhVrG7fmcVYV9C4tsJG-SAEAAwIAA3kAAz0E)

本题应该选 A。

函数调用压栈是在底端，调用所以栈底应该是最先运行的，所以应该选 A。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBI9qzyctIL3nk794CO9bV352-EhI3gAC6RJrG7fmeVboh7WWuenBHgEAAwIAA3gAAz0E)

本题应该选 B。

纯模拟题，没什么好说的。

![2 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJBqzyqZSNBVhJ8UugaDbxVwpgfc7AAC-BJrG7fmeVbKKghLHL06KAEAAwIAA3kAAz0E)

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJFqzyqzAAFpCVQBLqHVXFmrPQABtTsvAAL7Emsbt-Z5VtCugG1IogYRAQADAgADeQADPQQ)

本题应该选 D。

纯模拟题，模拟如下：

![3 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJJqzytgu8jwxkNyqtZ3r463QmiVnQACARNrG7fmeVbFOr65bezdiAEAAwIAA3kAAz0E)

第 4 题棍母。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJRqzyveeXbu-GubZiPxJ1jl5L0unAACBRNrG7fmeVb8DqrwHN_j_AEAAwIAA3kAAz0E)

本题应该选 D。

绘制出对应的图，然后逐个模拟即可。

![5 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJVqzyxgruKpOpYX5pFrg_CW8Am7gwACChNrG7fmeVbsrTN_mHMb3QEAAwIAA3cAAz0E)

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJZqzyx4js2E_sn7B1TY4jPq3PRZ4QACCxNrG7fmeVaBOzz_DM36uQEAAwIAA3kAAz0E)

~~本题应该选 D。~~

~~这道题也是纯模拟题。~~

~~Kruskal 是选边，首先选择最短的边，也就是 V1-V4，然后可以选择 V1-V3 或者 V2-V3。~~

~~Prim 算法是选结点，假设从 V1 开始选择，那么下一个加入集合的应该是 V4，再然后是 V3，V3 可以通过 V1-V3 或者 V3-V4，所以这道题应该选 V3-V4。~~

订：

克鲁斯卡尔第一次选 V1-V4，然后可以选择 V1-V3，V3-V4，V2-V3

Prim 算法从 V4 开始，第一次是 V1-V4，然后可以是 V1-V3 或者 V3-V4

分析对了选错了。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJdqzy1ofPyoVbLpqOP591ihu2-PBAACEBNrG7fmeVaMjLwfY0kJtAEAAwIAA3gAAz0E)

本题应该选 A。

这道题也是纯模拟题，注意别模拟错了。

![7 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJhqzy5BP-Cj5oIqzSOoZR4n20Ip8QACFRNrG7fmeVa9OCSun0gcGwEAAwIAA3kAAz0E)

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJlqzy5Xx-r5lBy6CQchzvTNDpiZEwACFhNrG7fmeVY7BlNlkbq-QgEAAwIAA3kAAz0E)

本题应该选 C。

KMP 算法的手算，算出来模式串是 011223。

![8 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJpqzy_Jj5EecJmvCRfi5Fv_XMuIMgACJBNrG7fmeVamBH6YfOJAOQEAAwIAA3kAAz0E)

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJtqzzZhfROzxwOzCrhWhWFmKnADwAACNRNrG7fmeVaSEdJWhnoQmQEAAwIAA3gAAz0E)

本题应该选 C。

这类题需要注意是移动次数还是比较次数，对于移动次数。

考虑 A，如果是直接插入排序，1,2,3,4,5,6,7，那么完全不需要移动。

考虑 B，如果是冒泡排序，1,2,3,4,5,6,7 也完全不需要移动。

考虑 C，基数排序每轮都要把对应的数放到对应的桶里，所以无关。

考虑 D，如果快排初始序列已经接近排序完成，那么移动次数会远高于乱序。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJxqzzh6-vDyMPzwD7xQfB7_OAf2nQACQBNrG7fmeVZF0kkfCVwYlwEAAwIAA3kAAz0E)

~~本题应该选 B。~~

~~这道题也是模拟，模拟如下：~~

~~![10 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJ1qzzknZ7yxb3c1scNfg3WRgJjldwACQxNrG7fmeVbinRG54Rna5wEAAwIAA3cAAz0E)~~

订：中间那个得比较两次

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJ5qzzlClu1x1RoXl7QxGBU8x5n9QQACRBNrG7fmeVbgiNBc_njEewEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。希尔排序默认采用的是直接插入排序。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBJ9qzzllcSn-w2j62pK5jNRRtFLRogACSxNrG7fmeVbTVm-5wdPQiwEAAwIAA3gAAz0E)

本题应该选 A。

属于背书题，计算机硬件可以直接运行的是机器语言程序，对于 x86 的 CPU 而言，微程序指令硬件也可以直接运行。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKBqzzoSxgKA7XsIDrN-_D20AgMsewACThNrG7fmeVarhjMtO_vTrQEAAwIAA3gAAz0E)

本题应该选 B，

对于补码要尽可能小，所以也就是负权位放一个 1，然后正权要尽可能的小，所以可以安排为 1000,0011B，也就是 -128+3=-125。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKJqzzuGrK79-8XupPvOP7UNKWI9ZQACVBNrG7fmeVbKCh_rYeOySAEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，考虑极端情况，阶码分别取 1111,1110B 和 0000,0001B，小对大，也就是跨越范围是 253，完全没超过。

对于 2，右归的时候数字向右移动导致阶码应该增大。阶码增大有可能导致上溢。

对于 3，左规的时候数字向左移动导致阶码应该减少。可能引起下溢变成 0。

对于 4，考虑溢出的是 0，结果不会溢出。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKNqz0AEdQw2PwrW_jCVcElLLdXmIAACYRNrG7fmeVYy7SZD8frabwEAAwIAA3kAAz0E)

~~本题应该选 D。~~

~~主存块大小为 4 个字，一个字 32bit，所以块内地址应该占 16B，也就是 4 位，采用直接映射，也就是 tag 号占 28 位。~~

~~cache 本身的有效位占 1 位，采用回写法脏位占 1 位。~~

~~数据总共是 4×32bit=128bit。~~

~~所以一个 cache 行占 28+2+128=158 位。~~

~~存放 4K 个字的 cache 总计 4K/4=1K 的主存块，所以也就是 158K。~~

订：

存放 4K 字的数据 cache，也就是 4K/4=1K 个 cache 行，也就是需要 10 位。由于块内地址是 4B×4=16B，所以占 4 位。也就是 tag 号占 32-10-4=18 位。

后续的分析都是一样的。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKRqz0E7on5Yy8RaGva_cVnDo1i0LAACZBNrG7fmeVYWqZoW6o0JqAEAAwIAA3kAAz0E)

本题应该选 B。

假设 TLB 和 cache 都命中，那么只需要访存写回一次（因为是直写法）。所以应该选 B。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKVqz0F5ky6aWEHEt7jMJdnIgK4bhQACZRNrG7fmeVan0D9bWNY8VAEAAwIAA3gAAz0E)

本题应该选 B。

本题属于背书题，显然 C 和 D 应该排除。SRAM 是静态的，DRAM 是动态的，SDRAM 为同步 DRAM，本质上也要刷新。

所以应该选 B。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKZqz0HQbtpgTI-v-U4WoNMmlKa8kwACZhNrG7fmeVbZcnJZ7Xn7kwEAAwIAA3kAAz0E)

本题应该选 D。

按照四体交叉，本题可以绘图如下：

![18 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKdqz0Ifhy97ln6llbL60IljtoT0HgACaRNrG7fmeVZz_oqAvGgm-AEAAwIAA3kAAz0E)

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKhqz0K09qqOF3L2ElOQTwznEwFlVQACbBNrG7fmeVZ51FY0r4SzmQEAAwIAA3gAAz0E)

本题应该选 C。

本题属于背书题，对于 A 和 B，有 3 类，不互锁，半互锁和全互锁；对于 C，同步信号必须得由设备总线提供。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKlqz0MKCS0anYp9EvULqFO8KIbd0QACbRNrG7fmeVYaMJU9NFzKMwEAAwIAA3kAAz0E)

本题应该选 B。

寻寻道时间 8ms，转速 7200rpm=120rps，转半圈需要花的时间是 0.5/120=0.0042=4.2ms

由于每个磁道包含 1000 个扇区，访问一圈所需要的时间是 1/120，而访问 1000 中的一个也就是 1/120 整个再/1000，所以可以忽略不计。

所以这道题应该选 B。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKpqz0QcGTAEdkB40hv1c0xsgwreigACchNrG7fmeVbilAnKuU3VBQEAAwIAA3kAAz0E)

本题应该选 B。

由于是采用中断控制方式，所以可以不需要传主存地址。

还有一类题可以分为两条链路思考。

CPU - IO 端口 - 设备本身

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKtqz0SnNwzgszHq_i6SXeWDxyRVzwACcxNrG7fmeVYiVU37vTOPDwEAAwIAA3kAAz0E)

本题应该选 D。

对于故障会回到当前指令，例如缺页

对于 trap 是到下一条指令

对于终止程序直接都没了。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBKxqz0Tfv8zpgfBnJmLEYXCqhfsQOQACeBNrG7fmeVYCsviBolh9hwEAAwIAA3gAAz0E)

本题属于背书题，应该选 B。

PC 是硬件保存的，不需要保存 C 和 D 中的内容。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBK1qz0UQeYZ9azTe_CeB_Ja7aY8ncgACexNrG7fmeVbiFjPE1uAz-wEAAwIAA3kAAz0E)

本题应该选 C。取非属于库函数。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBK5qz0Uu-TzJH43fTwOb4WjySwYyVAACfhNrG7fmeVZQ3t4VzEO46gEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，执行 P 操作后可能会保持就绪态，可能会从就绪态变成阻塞态。

对于 B，申请内存失败后进行页回收，内存紧收等，实在不行还可以 OOM killer。实在失败了，拿到失败信号之后纯看程序员是怎么写的，采用未处理则非法退出，采用处理则可以采用避退，降级等策略。

对于 C，启动 IO 设备会导致就绪态变成阻塞态。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBK9qz0Zo86AV4Syu9agB9B6XEduI3QACkBNrG7fmeVara2L5O9biVQEAAwIAA3kAAz0E)

本题应该选 B。

死锁避免指的是银行家算法，死锁检测指的是资源分配图那一块。

S1 也不会限制用户申请资源的顺序，可以考虑系统资源充足的情况，此时就根本不会限制。考虑极端一点也可以考虑有两个安全分配序列，先后分给谁无所谓。至于只有一条路的是过于极端的想法。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLBqz0divNafevn3-OWiKfDKTUnd8AAClRNrG7fmeVb0glMWNxeSSAEAAwIAA3kAAz0E)

~~本题应该选 B。属于纯模拟的题。~~

~~![27 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLFqz0fgDZFPeaIkhINeyfK0gM1FkQACmBNrG7fmeVY6_mKecTmSLwEAAwIAA3kAAz0E)~~

订：如下图所示

![27 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXFq2I6ngmL_nS0Ktzhawm9pDljxtAAC_xNrG89ByVbAaK2T_CzRegEAAwIAA3cAAz0E)

我估计是写的时候漏看了最后一个数字。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLJqz0f5niTlH7DVc3BR-wUU_rsmyQACmRNrG7fmeVZ2ey3XLkgdUQEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLNqz0gVhVhBQj9UbTTpLQcvsfpMuAACmxNrG7fmeVYI6AlfM_dc2QEAAwIAA3kAAz0E)

本题应该选 B。

磁盘块大小为 1KB，索引指针占 4B，所以一个磁盘块内可以存储 1KB/4B=256 个索引。

直接索引有 10 个，也就意味着初始可以存 10KB 的数据。由于第一个数据在 1234B，所以只需要根据索引结点直接读入磁盘即可，也就是需要访问 1 个磁盘块。

对于 307400B 约等于第 307 个磁盘，所以应该在二级索引，也就是根据直接索引得到 1 级间接索引，根据 1 级间接索引读入 2 级间接索引，然后根据该索引读入磁盘，也就是 3 个。

所以应该选 B。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLRqz0lX8cBDI4nMWeG3IC228JHspwACphNrG7fmeVZ87LpzVsytQQEAAwIAA3gAAz0E)

本题应该选 C，属于背书题。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLVqz0lzRt1A6_-GEuz34N6glVdWHwACpxNrG7fmeVarz_9_NApqHgEAAwIAA3kAAz0E)

本题应该选 C。

使用位图法，假设释放的盘块号是 409612，由于 1024×8=8192，409612/8192=50.00146，也就是说按从 0 开始算，记录在第 50 个盘块，所以从 32 开始算，是第 82 号块。

409612-8192×50=12，也就是第 12 个 bit 应该在从 0 开始计算的第 1 字节里。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLZqz0mEJVcU1YbbOceli_AX7YQMtwACqBNrG7fmeVZePTUkbniqOAEAAwIAA3kAAz0E)

本题应该选 C。

采用 SCAN 调度，也就意味着应该是从 58 向 200 移动。移动到 200 后然后超小的移动。

大致计算可得 200-58+200-15=142+185=327，所以应该选 325。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLdqz0n5h5fYhPTyOrGoa3k_22e5dAACqRNrG7fmeVZ4MJ5ubKN6wgEAAwIAA3gAAz0E)

本题应该选 D，属于背书题。POP3 使用 TCP。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLhqz0oTzI3HiN9485IYOA4RY1bVLAACqxNrG7fmeVYbpqqoRTDl1wEAAwIAA3kAAz0E)

本题应该选 A。

首先观察编码 1，显然是非归零编码，所以 CD 排除。

对于编码 2，假设是曼彻斯特编码，可以得到题目中的。假设是差分曼彻斯特编码，跳变代表 0，不跳变代表 1。

看中间，1010100，无法匹配上。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLlqz0rGs6fZXiqEqio3jZJBTfN2vQACrBNrG7fmeVY6scyLEoXTXAEAAwIAA3kAAz0E)

本题应该选 B。

滑动窗口协议，假设最大可以传播 N 帧，先计算 Td，Td=1000B/128000，也就是 Td=8000/128000=8/128=1/16。

RTT=500ms，所以通过公式：NTd/(Td+RTT)≥0.8，计算可得 N≥7.2。也就是 N 至少取 8。

这里应该考虑极限情况，也就是后退 N 帧协议，而不是考虑选择重传协议。

所以根据公式，8≤2^n-1，也就是 n 应该取 4。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLpqz0z4ju5RgMuEUf4mOsiRug3q-wACuRNrG7fmeVYf269FQ4crrwEAAwIAA3gAAz0E)

~~本题应该选 A，属于背书题。~~

订：对于 A，CSMA/CD 显然是边发送数据帧边检测是否发生冲突，显然我是把题目想成了 CSMA/CA，或者只看了前两项，正确想成错误。肯定是 B，CSMA/CA 才是无线链路。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLtqz00PjBECkJK4T8CwYSVov5IZWwACuhNrG7fmeVZIkucLIQZ4JgEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

B 应该是广播域，C 应该是冲突域，对于 D 由于只是在数据链路层，所以没法让不同网络层协议互联。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBLxqz008wg6PB2_2G00-X4uV7xgDygACuxNrG7fmeVZ7bOO8CQgZAAEBAAMCAAN5AAM9BA)

本题应该选 C。

根据最长前缀匹配原则。5 是 0101，32-27=5，也就是覆盖最后 5 位，显然包含在内，所以本题应该选 C。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBL1qz02VZ4C1xsn7nqGGdd0eoP3duAACvRNrG7fmeVbqHxxbdY96QgEAAwIAA3kAAz0E)

本题应该选 A。

0 时刻，拥塞窗口为 1，接收窗口为 16

1 时刻，拥塞窗口为 2，接收窗口为 15

2 时刻，拥塞窗口为 4，接收窗口为 13

3 时刻，拥塞窗口为 8，接收窗口为 9

4 时刻，拥塞窗口为 16，接收窗口为 1。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBL5qz04GUHwqf6pATdvPxgK59PpVHgACvxNrG7fmeVbzIocEAAEDh78BAAMCAAN4AAM9BA)

本题应该选 C。

题目里有 close。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBL9qz04ryFOsOZ_LfSWg_ZATOtOmJgACwBNrG7fmeVZLCQ9CWLBuYgEAAwIAA3kAAz0E)

解：

(1)

1. 设置两个指针，pre 和 curr，分别指向头节点和头节点的下一个结点
2. 设置一个数组 hasmap[n+1]，充当哈希表使用
3. 判断 curr 指向数据的绝对值是否出现在哈希表里，如果存在，那么删除当前结点，pre 不动，curr 重新定义为 pre->link
4. 如果不存在在哈希表里，那么设置为存在，pre 和 curr 共同向前移动一个单位
5. 重复上述步骤，直至 curr 为空

(2)

```c++
struct LNode{
    int data;
    LNode* link;
};
```

(3)

```c++
int abs(int x){
    if (x<0){
        return -x;
    }
    return x;
}

void solve(LNode* L,int n){
    int hasmap[n+1];
    LNode* pre=L;
    LNode* curr=L->link;

    while(curr!=nullptr){
        if(hasmap[abs(curr->data)]==1){
            LNode* tmp=curr;
            pre->link=curr->link;
            delete tmp;
            curr=pre->link;
        }else {
            hasmap[abs(curr->data)]=1;
            pre=pre->link;
            curr=curr->link;
        }
    }
}
```

(4)

时间复杂度：O(n)

空间复杂度：O(n)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWtq2IqtIGrBgHIzfW0k4JE38IcSEAAC9BNrG89ByVY561AamSsVuAEAAwIAA3gAAz0E)

解：

(1)

行、列下标都从 0 开始，图是无向图，所以矩阵对称：

```c
A[5][5] = {
    {0, 1, 1, 1, 0},
    {1, 0, 0, 1, 1},
    {1, 0, 0, 1, 0},
    {1, 1, 1, 0, 1},
    {0, 1, 0, 1, 0},
};
```

7 条边分别是 01、02、03、13、14、23、34。每行非零个数就是度数，deg(0)=3、deg(1)=3、deg(2)=2、deg(3)=4、deg(4)=2，加起来 14=2×7，对得上。

(2)

```c
A^2[5][5] = {
    {3, 1, 1, 2, 2},
    {1, 3, 2, 2, 1},
    {1, 2, 2, 1, 1},
    {2, 2, 1, 4, 1},
    {2, 1, 1, 1, 2},
};
```

0 行 3 列的元素是 2，含义是从顶点 0 到顶点 3 长度为 2 的路径有 2 条，也就是 0-1-3 和 0-2-3。

乘的时候想清楚，`(A²)[i][j] = Σk A[i][k]·A[k][j]`，k 枚举的是中转点，所以算出来就是 i 经过一个中转点走到 j 的走法数。

A² 依然是对称的，而且对角线 `A²[i][i]` 恰好等于 deg(i)，算完拿这两条验一遍，不对称就是乘错了。

(3)

`B^m` 中第 i 行第 j 列的非零元素表示：顶点 i 到顶点 j 存在长度为 m 的路径，也就是走 m 条边能够到达，元素的值就是这种路径的条数。

m 只到 n 是因为 n 个顶点的图里，两点之间只要有通路，就一定存在长度不超过 n-1 的简单通路，再长必然重复经过顶点，拆掉回路以后还是同一条通路，问不出新东西。

这题问的是「非零元素」的含义，先答存在长度为 m 的路径，再答条数。只写条数会把可达性那层意思漏掉。

还有一点，这里数的是通路，允许重复经过顶点和边，不是简单路径。上面 0 到 3 那两条刚好都是简单路径，容易让人误以为在数简单路径。

顺手记一下连通性的判法，拿 A+A²+…+A^(n-1) 去看，每一对顶点之间那一项都非零就是连通。

（这道题是 AI 做的，我觉得没必要再做一遍了）

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWxq2IrGPGUxgz7tGzl7WpBjmiESygAC9RNrG89ByVZkp7GfOjOjDwEAAwIAA3gAAz0E)

解：

(1)

R0，R1，R2，R3，PC 是程序员可见的。

因为是单总线结构，假设 ALU 需要执行一个双指令数指令，那么数据会在总线上冲突，所以应该先送一个数到 T，然后再送一个数到另一侧。

(2)

ALUop 位数至少为 3

SRop 位数至少为 2

(3)

SRout 控制的部件为三态门，由于是单总线结构，所以要在某些时刻不需要 SRout 的数据。

(4)

1,2,3,5,8

(5)

7->4

6->9

(6)

为了 PC 自动 +"1"，因为是 16 位的计算机，所以是 2B，也就是 +2。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXBq2IspOxS_5hCaiCIZWKLQCQYhAAP5E2sbz0HJVoliFbsJMTNHAQADAgADeQADPQQ)

解：

(1)

寻址方式有 0 和 1 两种，也就是 1 位，目的操作数为通用寄存器，有 0,1,2,3 4 种，也就是 2 位，由于最多支持 3 地址指令，所以除了指令操作码剩下的部分应该是 16-3×3=7，也就是 OP 为 7 位。

所以也就是 2^7=128 条指令。

(2)

0000001 001 000 000B=0000,0010,0100,0000B=0240H

~~0000010 001 010 000B=0000,0100,0101,0000B=0450H~~

~~0000011 111 010 011B=0000,0111,1101,0011B=07D3H~~

订：

0000010 010 001 000B=0488H

0000011 011 101 010B=06EAH

(3)

- 0
- mov
- mova
- left
- read
- sub
- mov
~~- write~~

订：SRout

(4)

4

2

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCW1q2IrcCHub05qECizw9ieUS_ia3gAC9hNrG89ByVbntk4kU8n0IwEAAwIAA3gAAz0E)

```c
semaphore emptyA=M-x;
semaphore emptyB=N-y;
semaphore fullA=x;
semaphore fullB=y;
semaphore mutexA=1;
semaphore mutexB=1;

func A(){
  while(true){
    P(fullA);
    P(mutexA);
    从 A 信箱里取邮件;
    V(mutexA);
    V(emptyA);
    回答问题并提出一个新的问题;
    P(emptyB);
    P(mutexB);
    将新邮件放入 B 的信箱;
    V(mutexB);
    V(fullB);
  }
}

func B(){
  while(true){
    P(fullB);
    P(mutexB);
    从 B 信箱里取邮件;
    V(mutexB);
    V(emptyB);
    回答问题并提出一个新的问题;
    P(emptyA);
    P(mutexA);
    将新邮件放入 A 的信箱;
    V(mutexA);
    V(fullA);
  }
}
```

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCW5q2IrtH7QD5hRBugqwbCHeqoxdJAAC9xNrG89ByVaU4B_MMTW0LgEAAwIAA3gAAz0E)

解：

(1)

页的大小为 2^12B=4KB

页框的大小为 2^12B=4KB

进程的虚拟地址空间大小为 2^20 页

(2)

页目录项和页表项均占 4B。

先计算页目录表，页目录表需要 2^10 个，也就是 2^10×4B/4KB=1，即 1 页。

再计算页表，页表需要 2^20 个，也就是 2^20×4B/4KB=1024，即 1024 页。

所以总共是 1025 页。

(3)

访问虚拟地址 1:0100,0000H=0000,0001,00｜00,0000,0000,｜0000,0000,0000B，页目录号为 4，页号为 0

访问虚拟地址 2:0111,2048H=0000,0001,00｜01,0001,0010,｜0000,0100,1000B，页目录号为 4，页号为 2+32+512=546

显然一开始的时候访问的都是同一个页目录表（该地址位于内存），根据页目录号 4 得到其页表的物理地址并访问。

所以访问的是同一个二级页表。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCW9q2IsDHGO3oFhBmPvlHyz7tvRmigAC-BNrG89ByVab6krQo0dwCwEAAwIAA3kAAz0E)

解：

(1)

考虑 111.123.15.3/24，网络号占 24 位，也就是可供分配的总共是 32-24=8 位。当前已经分配了 1,2,3,4，则还可以分配 2^8-4-2=250 个 IP 地址，也就是 111.123.15.5-111.123.15.254

DHCP 协议获取 IP 地址的过程中，发送封装 DHCP Discover 报文的 IP 分组源目的地址为：0.0.0.0，目的 IP 地址为 255.255.255.255

(2)

ff-ff-ff-ff-ff-ff

00-a1-a1-a1-a1-a1

(3)

可以访问 WWW 服务器，由于默认网关为 255.255.255.0，所以 WWW 服务器和主机 1 在同一个网络下。

不可以访问 Internet，因为默认网关是 DHCP 服务器，无法转发 IP 数据报到互联网。

### 408 2016 真题 2 刷

- 分数为：143，1 刷为 122
- 第 44 题 -6，第一问应该是每秒钟，脑子抽了算成每分钟了，第二问应该按照时钟周期算，我按照时间算了。分析大体是没问题的
- 第 47 题 -1，显示链接分配 VS 隐式链接分配

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCcpq3FmBj3bxXnLO92c_kLkdkgS4RgACeRBrG2MQ4FaHUJJ_eMjm7wEAAwIAA3cAAz0E)

本题应该选 D。

应该采用模拟法，随便找一个考试模拟，假设选 a，那么根据链接地址：

a->e->b->d->NULL。

很显然缺了 c，所以再次观察，c->a->e->b->d->NULL，总共五个元素齐全。

f 位于 1014H，插入单链表。f 逻辑上位于 a 和 e 之间，那么意味着 a 之后的地址应该改为 1014H，f 之后的地址应该改为 1010H，e 的地址保持不变是 1004H。

所以，aef 的链接地址分别为 1014H，1004H，1010H。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCctq3FqYZxZ6-9Af5EH0grQfkX7JdQACfBBrG2MQ4FY9OY_GsMtoyAEAAwIAA3cAAz0E)

本题应该选 D，示意图如下：

![2 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCcxq3GJYVvjybMB3GulZA9Nc1qOqugACjBBrG2MQ4FY96ltY3sAltQEAAwIAA3cAAz0E)

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCc1q3GJvpytmka2nQhc1M8u-4DYslAACjhBrG2MQ4Fbd1_fT_zizawEAAwIAA3cAAz0E)

本题应该选 C。

采用模拟法如下：

![3 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCc5q3GMdmGJ9EpsOCLukGkRbrfuz1gACjxBrG2MQ4FazriEL2HTyhgEAAwIAA3kAAz0E)

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCc9q3GM7YrkPsWy1yy_YHSrdc9z29wACkBBrG2MQ4FaBSiwt7LxJRQEAAwIAA3cAAz0E)

本题应该选 B。

注意本题是三对角矩阵，按照行压缩存储如下图所示：

![4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdBq3GP-P6DgcjFB2n3fcD9KSuWgQAACkRBrG2MQ4Fao79-D14iSRwEAAwIAA3kAAz0E)

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdFq3GQQdozTYPFy5i2kHJHAoHmILAACkhBrG2MQ4FZ4NeMN0NlcQAEAAwIAA3kAAz0E)

本题应该选 C。

一棵树有 15 条边，也就是可以 16 个结点一棵树。剩下 25-16=9 个结点，所以 9+1=10，应该选 C。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdJq3GULMMK7i59Bj9yOXOOYs0jWMwAClRBrG2MQ4Fa9aElXEIIyfgEAAwIAA3kAAz0E)

本题应该选 D。

对于 A，如果 V1 到 V5，那么下一个一定是 V4，然后 V3，V2，所以是对的。

对于 B，如果 V1 到 V3，那么下一个一定是 V2，然后后面一定是 V5，然后是 V4，所以是对的。

对于 C，如果 V1 到 V2，那么下一个一定是 V5，然后是 V4，最后是 V3，所以是对的。

对于 D，如果 V1 之后是 V2，那么之后一定是 V5，而不是 V3，所以错误。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdNq3GW1MwdEXoqATxHNNaol4Kl7gAAClhBrG2MQ4Fbky8F0sJ6ujAEAAwIAA3cAAz0E)

本题应该选 B。

拓扑排序本质上是选择一个入度为 0 的结点，然后选取这个点出去的所有结点即可（顺着抓取）。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdRq3GcNsJW_6cd-Tp8iFfxNWnEEdAACnBBrG2MQ4FYAAd2pm581y3MBAAMCAAN3AAM9BA)

本题应该选 B。

这类题直接试，而不是用计算法，太麻烦了。

一开始是 1，然后看 1 出去是什么，显然 5 是最短的，所以第二个是 5。然后看 5 出去可以是 2 和 6，然而此时最短的应该是 1 出去的 2，所以第二个应该选 2（这都是和题目一样的）。

2 出去可以是 4,3。到 3 最短是 7，到 6 最短是 9，到 4 最短是 11，所以最短应该选 3，所以 CD 排除。

最后看 AB，到 4 最短是 11，到 6 最短是 9，所以应该先是 6。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdVq3GkUMUHqWgAB-mfxx8ndNP8f13sAAg4RaxtjEOBWX8wY1cWuuJkBAAMCAAN3AAM9BA)

本题应该选 B。

这类题属于看代码说话，分析具体代码即可。

这道题的意思是，当 k=0 的时候，跳到数组的第 3 个元素，然后比对第 3 个，第 2 个和第 1 个元素，然后 k+3。

对于 A，x 不在数组的时候，前者需要比对 n 次，后者则是 log2n

对于 B，x 接近开头的时候，是常数次，非常少，后者则是 log2n。

对于 C，x 接近数组尾的时候，前者需要比对 n 次，后者则是 log2n

对于 D，x 位于数组中间的时候，前者需要比对 n/2 次，后者则是常数次。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdZq3GnpqhsId4e1R7M5xqRjor5y1QACWRFrG2MQ4Fa7fNejnVCjUAEAAwIAA3kAAz0E)

本题应该选 A。

B+ 树最后一条有一个专门的链表，支持顺序查找。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCddq3GoaLppEP05rqAeNaeBIsTMmbAACXxFrG2MQ4FYqpgUkIL9UcgEAAwIAA3kAAz0E)

本题应该选 D。

考察的是外部排序，外部排序利用归并排序。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Fq0eN0Ex7lN2h0Q4O708TJ2jcQuQACpxBrG6jnkFYkqxM_rRESZQEAAwIAA3gAAz0E)

本题应该选 C。

高级语言程序转换成机器语言或者转换成汇编语言的过程称之为编译。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Jq0eSWUv2y3b9GS1aMd0hhH0gtsgACqRBrG6jnkFaJUUHi01gc8wEAAwIAA3gAAz0E)

本题应该选 D。

short si = -32767;，由于 65536/2=32768，所以 si=1000,0000,0000,0001B。

unsigned short usi 是强制转义，所以也就是 32768+1，也就是 D。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Nq0eUtW3gcWjAecoNLBfpu6rroVQACqhBrG6jnkFbA5CNXE2At8AEAAwIAA3kAAz0E)

本题应该选 A。

由于是小端法，所以 40H 存储的是 88H，41H 存储的是 77H，以此类推。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Rq0eV5aTJ_F4c6tAOgrkSiYKTCpAACqxBrG6jnkFbxy__lXi-OBgEAAwIAA3kAAz0E)

本题应该选 C。

数据区大小为 1KB。块为 16B，一个块可以存储 4 个数据，又 1000 个数据肯定装不下整个 cache，所以只需要考虑当前即可。

由于每缺失一次就可以访问 4 个数据，又由于 a[k] 一次访问 2 次，所以 8 次里缺失 1 次，最终应该是 1/8，也就是 C。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Vq0eY6oowmv4yrcPzsMHa1ERywlgACrBBrG6jnkFZ_MlGPtxM3hAEAAwIAA3kAAz0E)

本题应该选 C。

5FFFH-4000H=1FFFH，也就是 0001,1111,1111,1111B，所以可以看到是 2^13B，也就是 8KB。所以 64KB-8KB=56KB。

所以，56KB/(8K×4bit)=14。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Zq0ei_Rdzmdpe5Dd1JJ1caJNW9JAACrhBrG6jnkFZH0PtdVP2xaAEAAwIAA3kAAz0E)

本题应该选 C。

本题问的是操作数的地址，变址寻址得到的是间址寻址的初值，间址寻址寻址一次是操作数的地址，得寻址 2 次才可以得到操作数，所以应该是 C。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0dq0ekMVIwn5TweD8qq_d8eJ7NEhQACrxBrG6jnkFYeR-ggmXeKPAEAAwIAA3kAAz0E)

本题应该选 B。

主存空间 4GB，也就是 2^32B，由于采用 32bit=4B 的指令字长，所以 PC 最短可以是 2^32B/4B=2^30，所以 PC 应该至少是 30，IR 应该至少是 32。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0hq0elj7nPo40ptzKG9Lq5MlX4r0gACsBBrG6jnkFa6pjj_0_tbjgEAAwIAA3kAAz0E)

本题应该选 B

数据冒险有 2 类，数据冲突和写后读。

本题 I2 和 I3 之间存在写后读，而对于 I3 和 I4 是读后写，只要保证先读了就可以了。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0lq0en_ghi8TKcvSTLKVNMeBvAWgAACsxBrG6jnkFbVthUlyCEpcgEAAwIAA3kAAz0E)

本题应该选 A。

单周期不可能采用单总线。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0pq0eofMGnHv6AnQrFYrYFT9GbGMAACtBBrG6jnkFajKBB-Dq5oTwEAAwIAA3gAAz0E)

本题属于背书题，应该选 A。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0tq0eq4b9hFsl53ufxA7urH4yguIwAC1RBrG6jnkFaVqGVbM16JjgEAAwIAA3kAAz0E)

本题属于背书题，缺页属于异常中的故障，其他三个都是对的，应该选 A。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0xq0ervhhHMl0EhHIHa13lemPUWfAAC1hBrG6jnkFbVI1g7ReO5rQEAAwIAA3gAAz0E)

本题应该选 A。

对于 1，批处理用户不允许和用户计算机交互。

对于 2，属于背书问题。

对于 3，属于背书问题。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB01q0eyhrHm8SmtQUuTF5wq9E0Z_gQAC2xBrG6jnkFYgYhyf7ohbvwEAAwIAA3kAAz0E)

本题应该选 B。

这类题并不是输入输出设备里缓冲区，所以并不互斥，只有当前的东西是互斥的，这个需要搞清楚。

所以，A 连续执行 2,3,4，B 得在 A 的 2 结束后执行 2，在 3 结束后执行 3，在 4 结束后执行 4，所以 B 总计开销 3+4+4=11，不过只引入了最后的 4ms，对于 3 也是同理，只引入了最后的 4ms。

所以最后应该是 2+3+4+4+4=17。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB05q0e23609fKCb_aa7e-xWmoDP_nQAC3hBrG6jnkFZ5HEtVIPT7zgEAAwIAA3kAAz0E)

本题应该选 C。

这类题首先应该往经典模型上套，使用资源分配图，可以绘制出是一个经典哲学家问题的变种。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB09q0fMHlXl5ykpFFZ-UIvveS1_McQAC-RBrG6jnkFZcFf3OmzmouwEAAwIAA3kAAz0E)

本题应该选 A。

属于背书题，访问位优先，所以访问位应该是 0，然后是 1，所以也就是应该选 A。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Bq0fOFv5qD0HVgCbu0Y0jx2J2rQAAC-hBrG6jnkFaakUkJLIX5JgEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，操作系统负责唤醒阻塞进程，而不是退出临界区的进程

对于 B，显然如此

对于 C，满足让权等待原则的在考纲里其实只有信号量方法

对于 D，如果 TSL 在关中断下执行，那么事实上永远都不会获得锁。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Fq0fdcK-OPLKNAjkDmc0fJZlJl0gACORtrG-BrkFZQxEVeK9P7IgEAAwIAA3gAAz0E)

本题应该选 D。

观察到短号为 2 的段长最多为 300，所以越界。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Jq0fe62Si2cDYDP5Co_KtArA6qOAACOxtrG-BrkFZan9sQXEuklgEAAwIAA3gAAz0E)

本题应该选 A

本题超纲，不过能做，工作集的概念是当前 t 向前 k 个单位，k 为窗口大小。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Nq0ffvuKkpYgr0Rf3Pxoj_q0zW1wACPBtrG-BrkFY0rRwWdOPt7wEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，局部变量是无所谓的。

对于同一个进程内的线程才会互斥，不同进程的不会，所以 BD 排除。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Rq0fh82X5peOV37CoC0ygWeNVjlwACPhtrG-BrkFZZVu7OG9oNugEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，SPOOLing 技术是需要将数据存储在磁盘里的，而不是内存。

对于 BC 显然。

对于 D，应该是操作系统控制的。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Vq0fjI153pzhYtiN5Lmh9FtMSZzwACPxtrG-BrkFZjdGyOCduh3AEAAwIAA3gAAz0E)

本题应该选 A。

管程还能实现进程的同步。

![33-41 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1Zq0fkC-bklWU9hfsMhN3XOhnqpuwACQBtrG-BrkFYd4Z1bb2-fnQEAAwIAA3gAAz0E)

![33-34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1dq0fkaeO8M4AABfIoskU20x4KWPA8AAkEbaxvga5BWCnuRmUTubuQBAAMCAAN5AAM9BA)

第 33 题应该选 C，R1 是路由器，最高在网络层；R2 是交换机，最高在数据链路层；R3 是集线器，最高在物理层。

第 34 题应该选 C。考虑香农定理，30=10log10S/N，S/N=1000，8000log2(1+1000)≈8000×10=80000，也就是 C。

![35-40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdpq3IwgVd0PwNCl_AXLiBMwh5-akQAC6hFrG2MQ4FZ9E1lpAuA_qwEAAwIAA3cAAz0E)

第 35 题应该选 D。

第 36 题应该选 B。

由于是 100base-T 交换机，所以采用的是 100Mbps 和 64B 的最短帧。

所以 RTT 应该是 64B/100Mbps=5.12us。

也就是说，假设 H3 和 H4 距离为 x，那么最短应该是 2x/200+1.535×2=5.12，所以 x=205。

需要注意双向，所以应该再生 2 次。

第 37 题应该选 B。

由于坏消息传得慢。

第 38 题应该选 D。

R2 装了 NAT 服务，所以源 IP 地址应该是公网地址。而对于 C 的公网地址是网络地址。

第 39 题应该选 C。

对于 C，H1 和 H3 不属于同一个网络，所以 H1 想和 H3 通信，应该交付给默认网关。然而本题 H1 没有具体的默认网关路由器，所以无法通信。

第 40 题应该选 C。

本题问的是最多和最少，先考虑最少的情况：

最少的情况，域名服务器本身有缓存，所以是 0 次。

最多的情况，域名服务器向根，也就是 . 查询，得到 .com 顶级域名服务器的 IP 地址；然后根据这个 IP 地址查询 .xyz.com，得到 .xyz.com 权限域名服务器的 IP 地址；根据这个 IP 地址查询，得到 .abc.xyz.com 二级权限域名服务器的 IP 地址；根据这个 IP 地址查询，得到所需的 IP 地址。

注意，如果是最大，那么有多台权限域名服务器。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdtq3Iw_G27aNbjxd-wYovOM3I0K-gAC6xFrG2MQ4FZfDf0ey4EXvgEAAwIAA3cAAz0E)

解：

(1)

由于一开始的时候，初始序号是 100，那么 H3 发送的第二次握手期待其发 101。

SYN=1，ACK=1

确认序号 ack=101

(2)

逐次模拟，注意这里收到的确认段指的是已经建立连接后的。

设已经建立好连接的时刻为 t1，那么：

t1 时刻，H3 的拥塞窗口为 1

t2 时刻（接收到 1 个确认段），H3 的拥塞窗口为 2，S 的接收窗口为 19

t3 时刻（接收到 2 个确认段），H3 的拥塞窗口为 4，S 的接收窗口为 19-2=17

t4 时刻（接收到 4 个确认段），H3 拥塞窗口为 8，S 的接收窗口为 17-4=13。

t4.1 时刻（接收到 1 个确认段），H3 拥塞窗口为 9，S 的接收窗口为 13-1=12。

综上所述。

H3 收到第 8 个确认段所通告的接收窗口是 12kB。

此时 H3 拥塞窗口是 9KB。

H3 的发送窗口是 min{9KB,12KB}=9KB

(3)

以及 t4 时刻继续向下模拟。

t5 时刻（接收到 8 个确认段），H3 拥塞窗口为 16，S 的接收窗口为 13-8=5。

t6 时刻（接收到 5 个确认帧），H3 拥塞窗口为 21，S 的接收窗口为 0

当 H3 的发送窗口为 0 时，也就是此前总共发送了 20KB 的数据，由于 MSS=1KB，也就是说发了序号 1024×20=20480 序号，也就是从 101 开始作为第一个数据，所以下一个数据应该是 20581。

由上述可知，总共经过了 5RTT，所以数据率也就是 20KB/5RTT=20KB/(5×0.2s)=20KB/s

(4)

从 t 时刻 H3 请求断开连接，H3 发给 S 第一个 fin，H3 进入 fintime1，S 回复 H3ack，H3 收到后进入 fintime2，S 发剩下的数据（本题为 0），然后发送 fin，进入 closewait 阶段），H3 收到后回复 ack，进入 closewait 阶段。

根据分析，S 释放连接最短的时间是 1.5RTT=300ms。

简单总结一下，这类题不难，重要的是逐个分析清楚具体步骤。

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdlq3In8Cgv-Fl0n3awgYgRmQBp3rgAC4xFrG2MQ4FYUfROjh-EaowEAAwIAA3cAAz0E)

解：

(1)

对于 k 叉正则树，显然结点的度只有 0 和 k 两种可能性。假设叶节点个数为 n，题设给了非叶节点为 m。

所以，m+n=mk+1，也就是 n=mk+1-m。

(2)

结点数最多，也就是每一层都是满的。对于高为 h 的树，每一层都是满的也就是 1+k+...+k^(h-1)=(k^h-1)/(k-1)

结点数最少，也就是每次一层只多 3 个，所以也就是 1+k+k+...+k=1+(h-1)k。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdhq3HFAGxllTAnn6wHr4Zw4k91qPQACqRFrG2MQ4FaxjFHHSexJLAEAAwIAA3cAAz0E)

解：

(1)

采用方法 1：

0. n1-n2 绝对值最小，也就意味着 n1 接近 n2，在此基础上 n1 可以小于 n2 1，以保证 S1-S2 绝对值最大
1. 显然 n1=n/2，n2=n-n1
2. 对数组 S 进行快排
3. 设置一个变量 sum=0，遍历 S 的前 n1 个数，遍历的值记为 a，sum-a
4. 遍历 S 后 n2 个数，遍历值记为 b，sum+b
5. n1，n2，sum 即为题目所要求的

采用方法 2：

0. n1-n2 绝对值最小，也就意味着 n1 接近 n2，在此基础上 n1 可以小于 n2 1，以保证 S1-S2 绝对值最大
1. 求第 n1 大的数。设置一个划分初值 p，l=0，r=n-1，对 l 到 r 划分，轴采用 l，划分后更新下标 p
2. 如果 p==n1，那么 p 即为第 n1 大的数
3. 如果 p < n1，那么应该 l=p+1，再次划分
4. 如果 p > n2，那么应该 r=p-1，再次划分
5. 设置一个变量 sum=0，遍历 S 的前 n1 个数，遍历的值记为 a，sum-a
6. 遍历 S 后 n2 个数，遍历值记为 b，sum+b
7. n1，n2，sum 即为题目所要求的

(2)

```c++
# include <cstdio>

int pation(int A[],int l,int r){
    int p=A[l];
    while(l<r){
        while(p<=A[r]&&l<r){
            r--;
        }
        A[l]=A[r];
        while(p>A[l]&&l<r){
            l++;
        }
        A[r]=A[l];
    }
    A[l]=p;
    return l;
}

void QSort(int A[],int l,int r){
    if(l>=r){
        return;
    }
    int p=pation(A,l,r);
    QSort(A,l,p-1);
    QSort(A,p+1,r);
}

void caculate(int A[],int n,int n1,int n2){
    int S=0;
    for(int i=0;i<n1;i++){
        S-=A[i];
    }
    for(int i=n1;i<n;i++){
        S+=A[i];
    }
    printf("n1=%d,n2=%d,S=%d\n",n1,n2,S);
}

void solve1(int A[],int n){
    QSort(A,0,n-1);
    int n1=n/2;
    int n2=n-n1;
    caculate(A,n,n1,n2);
}

void solve2(int A[],int n){
    int n1=n/2;
    int n2=n-n1;
    int p=-1,l=0,r=n-1;
    while(p!=n1){
        p=pation(A,l,r);
        if(p<n1){
            l=p+1;
        }else{
            r=p-1;
        }
    }
    caculate(A,n,n1,n2);
}

// 题目明确说了划分算法，所以这个方法不能用
// 而且题目没给数据范围，哈希表的这个 n 是有毛病的
// 假设数据范围正整数是 1-N
// 所以时间复杂度应该是 O(N)，空间复杂度为 O(N)
void solve3(int A[],int n){
    int hasmap[N];
    for(int i=0;i<n;i++){
        hasmap[i]=0;
    }
    int n1=n/2;
    int n2=n-n1;
    for(int i=0;i<n;i++){
        hasmap[A[i]]+=1;
    }
    int S=0;
    int cnt=0;

    for(int i=0;i<N;i++){
        while(hasmap[i]!=0){
            if(cnt<n1){
                S-=i;
            }else{
                S+=i;
            }
            cnt++;
            hasmap[i]--;
        }
    }
    printf("n1=%d,n2=%d,S=%d\n",n1,n2,S);
}
```

(3)

采用法 1：

时间复杂度：O(nlogn)，空间复杂度：O(logn)

采用法 2：

时间复杂度：O(n)，空间复杂度：O(1)

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCdxq3JMGoQ8lSkj8fOXC0OtUObPCWAACBxJrG2MQ4Faoc4NlJUVUxQEAAwIAA3cAAz0E)

解：

(1)

10 位（因为需要额外的 1 位停止位）

~~从 D 接收启动命令到字符送入 IO 端口需要 0.5ms，也就是 60/0.0005=120000 个字符。~~

订：每秒，而不是每分钟，从 D 接收启动命令到字符送入 IO 端口需要 0.5ms，也就是 1/0.0005=2000 个字符。

(2)

对于一次工作，也就是 0.5ms=500us。

对于一次中断响应，也就是 10 个时钟周期~~，也就是 10/50M=0.2us。~~

对于一次中断服务程序，共 20 条指令~~，也就是 20×4/50M=1.6us，而执行前 15 条指令也就是 15×4/50M=1.2us。~~

综上所述，一次的时间也就是工作 + 请求响应 + 执行前 15 条指令~~，也就是 500+0.2+1.6=501.8，501.8×1000=501800us=0.5018s。~~

CPU 需要介入的时间是~~：1000×1.6-0.4=1599.6us=1.5996ms。~~

中断响应阶段，CPU 做的事情是：保存 PSW，保存 PC，~~形成中断屏蔽字地址。~~

订：

主频为 50MHz，也就是 1/50Mhz=20ns。

所以 0.5ms/20ns=25000 时钟周期。

响应和请求是 10 个时钟周期。

响应全过程应该是 20 条指令，也就是 80 个时钟周期，其中响应到启动是 60 个时钟周期。

所以，(25000+10+60)×1000+20=25070020 个时钟周期。

CPU 运行 (80+10)×1000=90000 个时钟周期。

关中断，保存 PSW 和 PC，形成中断源

做这类题的时候，一定是要辨析清楚指令周期和时钟周期，当然也要看清楚具体时间。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCd5q3JmYugELorx6bLbr_2y0UQjeRQACdBBrG2MQ6FbopkgDafg2-AEAAwIAA3cAAz0E)

解：

(1)

由于虚拟地址是 32 位，页大小是 8KB=2^13，所以页号是 32-13=19 位。

由于 TLB 采用全相连映射，所以标记号等于页号=19 位。

由于物理地址是 24 位，页大小是 2^13，所以物理页号应该是 24-13=11 位，物理页内地址应该是 13 位

cache 数据区容量是 64KB，64KB/64B=1K=2^10，由于采用 2 路组相联，所以也就是 2^10/2=512，也就是 cache 位占 9 位。

所以 tag 号应该占 24-9-6=9。

综上所述：

- A：19
- B：19
- C：11
- D：13
- E：9
- F：9
- G：6

(2)

4099 是主存快号，也就是说，4099=4096+3=00,0001,000｜0,0000,0011B，也就是第 3 组 cache，对应 H 的字段是 0,0000,1000B=008H

(3)

cache 缺失的时间开销小，缺页处理时间开销大。前者缺失访问主存，后者缺失访问磁盘，显然访问磁盘的时间开销远大于访问内存。

(4)

cache 缺失的时候访问内存，时间开销较小，相对可以接受。

修改页面时访问磁盘，时间开销很大，远高于访问内存。

这类题不解释，必须满分。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCd1q3Jhd2pywSVFg-xfdpS7L00j62gACcxBrG2MQ6FZ3ubbs6V3ztwEAAwIAA3cAAz0E)

解：

(1)

假设有若干个进程，分别为 a,b,c,d,e，每个进程的优先级分别为 1,2,3,4,5。

此时来了很多进程 abcd，就会导致 e 积压，始终得不到处理机，从而出现饥饿现象。

(2)

p=nice+k1×cpuTime-k2×waitTime

注意本题是优先数越小，越先执行。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCd9q3JuJXTst5ykQfvsP8kKoU836IAACdRBrG2MQ6FYGrhHZ6GBi1wEAAwIAA3cAAz0E)

解：

(1)

dir 目录文件

文件名 簇号

dir1 48

dir1 目录文件

文件名 簇号

file1 100

file2 200

(2)

FAT 占 2B=2^16bit，也就是最多 2^16 个簇，所以 FAT 最多占 2^16 ×2B=2^17B=128KB。

该文件系统支持的最大文件长度为：2^16×4KB=256MB

(3)

106 位于 100

108 位于 106

(4)

dir 目录文件已经读入内存，那么也就是读取 dir1 所在的 48 号以及 file1 所在的~~ 100 ~~和 106。

订：我知道 100 不需要被读入（因为背答案），但是我现在终于明白为什么不用读入了。因为这个系统采用的是 FAT，也就是显示链接分配，可以算出来并且直接访问，而不是隐式链接分配。

### 408 2017 真题 2 刷

- 分数为 144，1 刷为 143
- 第 13 题再次没有考虑边界对齐
- 第 43 题 -1 第 2 问 0111B 应该是 7，而不是 8
- 第 47 题 -3，一方面是又忘记考虑乙的发送情况了，这个在答题过程中没列出来，第二方面是没有考虑乙已经发了的帧需要接收。这道题需要重点注意
- 1 刷的时候错的也基本是这几题，第 13 题，计组第 43 题 1 刷的时候错的是正数的 float 第一位应该是 0，而不是 1；计网第 47 题第 2 问也是因为没考虑乙的发送情况，不过第 3 问做对了

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_xq01gRwyB1sVSxV9yumYz4m8b23QACDBprG-BrmFYyBv1kISKrHwEAAwIAA3gAAz0E)

本题应该选 B。

1+2+3+...+t=t(t+1)/2=n，所以 t=sqrt(n)

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_1q01iT6q1p2ag_Oymb6fWcMfOQrAACDRprG-BrmFa_03O74N62WgEAAwIAA3gAAz0E)

本题应该选 C。

对于 1，可以考虑计算斐波那契数列，此时递归转为迭代可以使用动态规划，所以错误。

对于 2，函数调用栈需要保存信息，以便回到当前。

对于 3，考虑入栈次序 1,2,3,4,5，那么出栈次序可以是 1,2,3,4,5，也可以是 5,4,3,2,1，非常多。

对于 4，栈是一种受限的线性表，只允许在顶端操作。

综上所述，1,3,4 错误，也就是 C。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_5q01m5DbBdRQABbu5EWMMgtJtKZ5oAAhIaaxvga5hWqvrOu_FJx7EBAAMCAAN4AAM9BA)

本题应该选 A。

属于背书题。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_9q01pF-T3Koq4BxdWH3rY00CsJNwACExprG-BrmFZxWVs4u1hEEQEAAwIAA3kAAz0E)

本题应该选 B。

考虑遍历情况，先序遍历的遍历为根左右，中序遍历为左根右，显然想要他们相同必须没有左子树，这个时候就是根右。

所以应该只有右子树。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAABatNan1vMZKZa3BscUyOwj34xMMgAAhUaaxvga5hWE8mMrwjlE0oBAAMCAAN5AAM9BA)

本题应该选 B。

其实没什么好说的？根据后序遍历左右根可以很轻松得出答案。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAFq01v1MEB5EAxbcSuXgP7tNNiebAACGhprG-BrmFabgrUcvCUBFQEAAwIAA3kAAz0E)

本题应该选 D。

哈夫曼树的译码，其实不难，一个个个看下去就可以了。原串和切分为：

0100|011|001|001|011|11|0101

所以可以译码为：afeefgd，也就是 D。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAJq01zKAT_eK3jjbw8a0Sw_I2YBkQACHRprG-BrmFaoIctiDn8LZwEAAwIAA3gAAz0E)

本题应该选 B。

属于模拟题，绘制如图：

![7 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCClq1H33EFAyMbgaRSRLfawrvVT7BgACMBJrG1-fqVa6uwb5cLIXMAEAAwIAA3kAAz0E)

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCANq010kkmgp3iJC0fI-8UZu8a0ErwACHhprG-BrmFZyQTBEvwfPMgEAAwIAA3gAAz0E)

本题属于背书题。首先排除 B 和 C。对 A 和 D 进行模拟，可知 A 是对的。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCARq019_4QWRmkponcBJCPyIMVB-KwACIBprG-BrmFa8vereNjG4zwEAAwIAA3gAAz0E)

本题应该选 B，属于背书题。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAVq01-erDEXWvoyAUxVvjuz7qOx1QACIRprG-BrmFbLAAGvcAuR3i8BAAMCAAN4AAM9BA)

本题应该选 B。

对于 1，归并程序反而代码更长。

对于 2，归并排序需要一个 O(n) 的辅助数组，而插入排序不需要。

对于 3，归并排序执行效率是 O(nlogn)，而插入排序是 O(n^2)。

综上所述，3 是对的。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAZq02AGkR5mraEL1DVMoZcFTsoqEwACIhprG-BrmFZzeIMWVy7_dAEAAwIAA3gAAz0E)

本题应该选 D。

关键是开有没有利用随机访问。

对于 1，插入排序可以使用双链表，所以不需要使用随机访问。

对于 2，简单选择排序只需要记录当前排序指针即可。

对于 3，冒泡排序是前后交换，可以通过 pre 指针实现。

对于 4，希尔排序强要求随机访问。

对于 5，堆排序使用的是父亲表示法，所以肯定是要用随机访问的。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAdq02Dgbm1GS_yOrcpuVq8srrQBxQACIxprG-BrmFZTAo-x5DhawAEAAwIAA3gAAz0E)

本题应该选 C。

假设基准程序 P 总共有 N 条指令，所以，在 M1 上需要执行 N×2/1.5G，在 M2 上需要执行 N×1/1.2G。

所以也就是 8/5=1.6，所以应该选 C。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAhq02Gg6cuG16SeWVk1CxCnwbGojAACJRprG-BrmFZJeHMciwP4RwEAAwIAA3gAAz0E)

~~本题应该选 B。~~

~~一个 double 型的数据是 8B，由于是 4 体交叉，一个体是 1B，所以需要 2 个存储周期。~~

没考虑边界对齐。A=1010H，所以应该选 C。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAlq02IregoqbVyAU1GDVQcgDaNXSQACJhprG-BrmFbdbk5WC2t64gEAAwIAA3gAAz0E)

本题应该选 A。

时间局部性的意思是最近我还可以访问自己，空间局部性的意思是最近我还可以访问自己的邻居。

本题显然具备空间局部性，对于时间局部性，由于 j=0，它是一直遍历自己的，所以有时间局部性。所以应该选 A。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCApq02LMjjmU-a0-JVEEHGSxcmZPmgACJxprG-BrmFZni4qSv-ek0wEAAwIAA3gAAz0E)

本题应该选 D，属于背书问题。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAtq02Mf-vEtAZ3KM9m1_lEMrLoS9QACKhprG-BrmFaOoklY4AgFZAEAAwIAA3gAAz0E)

本题应该选 A。

本题是类似哈夫曼树的解法，一个地址字段 6B，由于最大的是 3 地址指令，所以地址字段应该是 3×6B=18B。又由于 29 条指令需要 2^5=32，所以至少前面填 5bit，也就是 18+5=23，又由于是按字节编址的，所以应该选 A。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCAxq02QNP8xTHF4SBEFLcB-MofauHAACKxprG-BrmFYslsIn99ppRAEAAwIAA3gAAz0E)

本题应该选 C。

对于 1，显然不可以缩短流水线功能段（因为流水线功能段本身想缩短得通过细分，而不是超标量技术）

对于 2 和 3 是正确的。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCA5q02UqCNiDX-W682yCZ9UGFZ9T7wACLhprG-BrmFYsKh8iuKhoggEAAwIAA3gAAz0E)

本题应该选 B。

A 的说法正确，主存在 CPU 外，控制存储器在 CPU 内。

B 的说法错误，控制存储器也按照地址访问（可以理解为存储微指令，访问微指令也是要地址访问的）

C 的说法正确。

D 的说法正确，注意 BIOS。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCA9q02Wy1G_FTTeQU8GNUx4w3mEjrQACMRprG-BrmFZFsBQz0qtIUwEAAwIAA3gAAz0E)

本题应该选 A。

本题应该这么考虑，数据通路和控制通路，后者可以理解为 CU。所以生成控制信号的部件显然是 CU 内部做的事情。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBBq02Y2wo-WsIxlsVGn7OO-qzzR8QACMxprG-BrmFbtdbN_7cmXMQEAAwIAA3gAAz0E)

本题超纲，但是问题不大，选 D。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBFq02ZMgCchOkdftbTiHlkz0IDWpwACNBprG-BrmFbVDeDmmOJ9yAEAAwIAA3gAAz0E)

本题应该选 D。

IO 端口也就是 IO 设备内部的寄存器，一般来讲交换数据是 IO 端口 - 主存或者 IO 端口 - 寄存器。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBJq02aCfAI0FHQ4IXf7lIZIzSCm9wACNRprG-BrmFYFEsQVxf5jFgEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，CPU 在一条指令结束的时候响应中断，这是背书的部分。

对于 B，CPU 在执行中断本身的时候，是开中断状态，可以理解为多级中断。

对于 C，可以考虑 IO。

对于 D 是正确陈述句，没什么好说的。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBNq02uAabl_PsGjgNta9Fb55I9FrgACORprG-BrmFYTL_2lryKACgEAAwIAA3gAAz0E)

本题应该选 D。

先来先服务也就是看谁最先到达，显然 J1 是最先到达的，排除 A 和 C。由于是短作业优先，且 t=2 的时候 J4 还没到，所以最开始运行 J3。

综上所述，应该选 D。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBRq02vBuyUaNXmgCttqaitsrcKmVAACOhprG-BrmFb75Xmil8Z0-gEAAwIAA3gAAz0E)

本题属于经典背书题，应该选 C。先传参再 trap，不然 trap 之后操作系统都不知道自己要干嘛。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBVq022olnIfxUMDQpbFjGqgTpgaewACOxprG-BrmFbisBVCEnxgDwEAAwIAA3gAAz0E)

本题应该选 B。

回收起始 60K，大小为 140KB 之后，可以观察起始为 20K，大小为 40KB 以及起始为 200K，分区大小为 200KB 的都能合并，所以总共只剩下了 3 个分区，所以 C 和 D 排除。

由于是按照最佳适应算法，要重排为最小的，所以应该选 B。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBZq023Dall_DpqwSh6TUtkx5Sj8bAACPBprG-BrmFY0laIMh7gCGQEAAwIAA3gAAz0E)

本题应该选 D，磁盘按簇分配。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBdq025RvnPjOUoGuZdKJub_jd9mfAACPhprG-BrmFYN7O2acmprugEAAwIAA3gAAz0E)

本题应该选 B。

对于 B，时间片用完之后，进程状态应该从执行态变成就绪态，所以应该选 B。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBhq026Er6oiOhP-QUJFd2vghRiD-AACPxprG-BrmFayGuO1-kBSdwEAAwIAA3gAAz0E)

本题应该选 D。

由于多道程序系统的 CPU 和 IO 设备可以并行工作，所以 1、3、4 都是正确的。多道程序系统会让系统开销变大。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBlq1HFACb5zJL-IK0_y7QisODYYWwACBxJrG1-fqVaM4WLOQj7cGQEAAwIAA3gAAz0E)

本题应该选 B。

磁盘的物理格式化做的事情是确定磁盘扇区校验码以及基本的块。

然后磁盘需要进行分区。

由逻辑格式化做的事情是初始化以及建立文件系统等。

综上所述，1 错误，3 错误，所以应该选 B。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBpq1HGkrV-LO2L4v3Neb6xJ4M-ZnwACCBJrG1-fqVbquIzOa-7TigEAAwIAA3gAAz0E)

本题应该选 D。

由于不只是存储一个状态，需要存储所有用户的所有信息（意思是每个人可能拥有多个权限）。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCBxq1HHb89tpCsBdONPDpVikMGORmAACCRJrG1-fqVZLk3WhmZ2qaQEAAwIAA3gAAz0E)

本题应该选 B。

f1 硬链接出去是 f2，他们占用同一个内存索引结点，指向系统打开文件表的同一个区域，但是拥有独自的读写指针以及独自的用户打开表。

所以 2 和 3 是正确的。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCB1q1HI4KKB8dHMNMQABEtpzMcgECrAAAgoSaxtfn6lW6_VIK7aYDVkBAAMCAAN4AAM9BA)

本题应该选 B。

本题属于背书题，考查 DMA 的全流程。也就是说：从题目入手，先排除 A 和 D。

第一步是初始化 DMA 控制器并启动磁盘，第二步是从磁盘传输数据到内存缓冲区，第三步是中断，第四步是执行中断服务程序，所以应该选 B。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCB9q1HLvUB2l8YY36jc1B9j6-MeCmwACCxJrG1-fqVarEImGMP1UbwEAAwIAA3gAAz0E)

本题应该选 A。

OSI 参考模型总共有 7 层，从上至下分别是：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。按照题设，物理层向上封装不需要引入额外的开销，数据链路层向上引入 20B 开销，网络层向上引入 20B 开销，传输层向上引入 20B 开销，会话层向上引入 20B 开销，表示层向上引入 20B 开销，应用层不需要引入开销，所以总共是引入了 100B 的开销。

所以，总计发送了 500B 的数据，传输效率为 400B/500B=80%。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCFq1HjZuyuAi1G1i6Apc1a_PTjvBAACHRJrG1-fqVYO8HvGF_ClAwEAAwIAA3gAAz0E)

本题应该选 D。

30=10log10S/N，所以 S/N=1000。假设信号状态数为 x，则 2Wlog2x≥Wlog2(1+S/N)，也就是 2log2x≥log2(1+S/N)，所以 log2x≥log2(1+S/N) / 2。后者是小于 5 的，所以 x 需要大于等于 32。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCJq1HmQOBjVFQPRBja8equkRG8E3gACIRJrG1-fqVbw4RHFwqIJYgEAAwIAA3gAAz0E)

本题应该选 B。

主机 H 发送给 AP，也就是谁收，谁发，最终发给谁，所以也就是 AP 收，主机 H 发，最终发给路由器。

也就是 9b，9a，9c，对比选 B。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCRq1HreBbFCYLSnvafN9nCNNdnMGQACJBJrG1-fqVacMdUKi416nAEAAwIAA3gAAz0E)

本题应该选 A。

属于背书题，0.0.0.0 只能作为源 IP 地址，不可以作为目的 IP 地址；255.255.255.255 只能作为目的 IP 地址，不可以作为源 IP 地址；127.0.0.1 既可以作为源 IP 地址，也可以作为目的 IP 地址；200.10.10.3 是一个正常的 IP 地址，既可以作为源 IP 地址，也可以作为目的 IP 地址。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCVq1HsrDKI2KPTSasdRC_II569gqwACJhJrG1-fqVYwLs_tJN9AbQEAAwIAA3gAAz0E)

本题应该选 D。

属于背书题，RIP 由 UDP 封装，OSPF 跑在 IP 上，BGP 报文跑在 TCP 上。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCZq1HtdDlYwu1a3HIC0_8PrW7oZmwACJxJrG1-fqVZ208Q9zbhH_AEAAwIAA3gAAz0E)

本题应该选 C。

可分配的 IP 地址，首先排除 B 和 D。题设给的是一个 B 类地址，由于划分为 128 个规模相同的子网，占 7 位，所以网络号可以占 16-7=9 位，也就是 2^9-2=510。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCdq1Hugrjxk3t7wbH04lBv3dZGb-wACKBJrG1-fqVbrPg_uNs7zvwEAAwIAA3gAAz0E)

本题应该选 A。

0 时刻拥塞窗口为 1，发送 1 数据。

1 时刻拥塞窗口为 2，发送 2 数据。

2 时刻拥塞窗口为 4，发送 4 数据。

3 时刻拥塞窗口为 8，发送 8 数据。

4 时刻拥塞窗口为 16，发送 16 数据。

5 时刻拥塞窗口为 32，由于乙开辟的为 64，取小也就是 32，到达题设的要求。

所以 0-1,1-2,2-3，3-4,4-5 总共消耗 5RTT，也就是 25ms。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCChq1HwjWO8hkbV1moA-emjA_gxelAACKRJrG1-fqVYFy18iznMfdAEAAwIAA3gAAz0E)

本题应该选 C。

A 和 B 属于背书范畴，对于 C，数据连接不一定是端口 20。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCpq1H4cvSL1zeDl3IkD1yxbVZ3MogACMRJrG1-fqVaPokZ7rcOoigEAAwIAA3gAAz0E)

解：

(1)

1. 采用中序遍历的方式
2. 在递归非根和非叶结点的左子树之前输出一个左括号
3. 递归到自己的时候输出自己本身
4. 在递归非根和非叶节点的右子树之后输出一个右括号。

(2)

```c
void inorder(struct node *BTree, int depth){
    if(BTree==NULL){
        return;
    }
    if(!(BTree->left==NULL&&BTree->right==NULL || depth==1)){
        printf("(");
    }
    inorder(BTree->left, depth+1);
    // printf("%c",BTree->data[0]);
    printf("%s",BTree->data);
    inorder(BTree->right, depth+1);
    if(!(BTree->left==NULL&&BTree->right==NULL || depth==1)){
        printf(")");
    }
}

void solve(struct node *BTree){
    inorder(BTree, 1);
}
```

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCtq1ICP27kCrQlJS1TCL_7UovP9YAACNxJrG1-fqVbmozbMT_JScwEAAwIAA3gAAz0E)

解：

(1)

使用 Prim 算法，从顶点 A 开始。

观察顶点 A，发现 A-D 边最短，所以顶点集合为「A，D」，边集合为「A-D」。

观察顶点 A 和 D，发现 D-E 最短，所以顶点集合为「A，D，E」，边集合为「A-D，D-E」。

观察顶点 A，D，E，发现 C-E 最短，所以顶点集合为「A，D，E，C」，边集合为「A-D，D-E，C-E」。

观察顶点 A，C，D，E，发现 B-C 最短，所以顶点集合为「A，B，C，D，E」，边集合为「A-D，D-E，C-E，B-C」。

(2)

唯一。

(3)

权值唯一。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCCxq1IFArpySZ_5CzY2TRWC8PmhwGwACOBJrG1-fqVbGdN07QXzIkQEAAwIAA3gAAz0E)

解：

(1)

当 n=0 时，根据无符号数的计算规则，0-1=0+2^32-1=2^32-1，也就是 FFFF,FFFFH。所有的 32 位无符号整数均小于等于这个数，所以会出现死循环。

不会。

因为 int 型变量 0-1=-1，0<=-1 显然不成立，跳出循环。

(2)

相等。

f1(23)=0000,0000,1111,1111,1111,1111,1111,1111B=00FF,FFFFH

对于 f2，其符号位为 0，1111,1111,1111,1111,1111,1111B=1.111,1111,1111,1111,1111×2^23。所以阶码为 23+127=150=128+22=128+16+6=1001,0110B。所以也就是 0100,1011,0111,1111,1111,1111,1111,1111B=~~4B8F,FFFFH。~~

4B7F,FFFFH.

(3)

float 型的尾数发生溢出，导致精度丢失。

(4)

int 型整数的表示范围为 -2^31~2^31-1，f(31)=2^32-1 超出表示范围，值为 FFFF,FFFFH，解释为 -1。

23。

(5)

7F80,0000H=0111,1111,1000,0000,0000,0000,0000,0000B，由于阶码全 1 且其他位均为 0，所以为正无穷。

126

23

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCC1q1IOkwY-vZ3cKPeSKg7nLawNArgACPBJrG1-fqVbu9KTUIbwepAEAAwIAA3kAAz0E)

解：

(1)

CISC，因为指令字长不等。

(2)

0040,107FH+1H-0040,1020H=0040,1080H-0040,1020H=0000,0060H=0110,0000B，也就是 32+64=96B。

(3)

0-1=FFFF,FFFFH，执行 0000,0000H-FFFF,FFFFH=0000,0000H+0000,0001H=0000,0001H。

~~这里应该解释一下 CF 怎么算的~~，CF=进位异或减法标志（1）=1

CF 标志位为 1。

(4)

不可以。对 float 型使用 shl 指令会破坏其格式。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCC5q1IY3O--mO631tb3v3oveTWtvaQACPxJrG1-fqVYqBe6UPjuKXwEAAwIAA3gAAz0E)

解：

(1)

页内偏移量为 12 位，所以页的大小为 2^12B=4KB。由于 f1 机器指令为 96B，显然可以被 1 页装下，所以占 1 页。

(2)

第一条指令的逻辑地址为 0040,1020H=0000,0000,01｜00,0000,0001｜,0000,0010,0000B。也就是访问页目录表的第 1 项和页表的第 1 项。

(3)

执行 scanf 的过程中，首先系统检查输入缓冲区，发现为空，执行系统调用，从用户态进入内核态，操作系统将进程由运行态变为阻塞态，等待用户输入。

待用户输入后，操作系统先将键盘缓冲区上的内容冲到内核缓冲区，然后再冲入用户缓冲区，然后操作系统将进程从阻塞态变为就绪态。

待再一次分配到处理机，进程从就绪态变为运行态之后，继续 scanf 函数，发现用户缓冲区有内容，系统调用结束，操作系统从内核态变成用户态，scanf 结束。

所以，P 的状态由运行态变为阻塞态，从阻塞态变为就绪态，从就绪态变为运行态。

CPU 会进入内核态。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCC9q1IfBhIpqhjxJG8D_8WUsgt8CAwACRBJrG1-fqVaOqK4bBP_1AAEBAAMCAAN5AAM9BA)

```c
semaphore mutexX=1;
semaphore mutexY1=1;
semaphore mutexY2=1;
semaphore mutexZ=1;

thread1{
  P(mutexX)
  P(mutexY1);
  cnum w;
  w=add(x,y);
  V(mutexY1);
  V(mutexX);
}

thread2{
  P(mutexY2);
  P(mutexZ);
  cnum w;
  w=add(y,z);
  V(mutexZ);
  V(mutexY2);
}

thread3{
  P(mutexY1);
  P(mutexY2);
  P(mutexZ);
  cnum w;
  w.a=1;
  w.b=1;
  z=add(z,w);
  y=add(y,w);
  V(mutexZ);
  V(mutexY2);
  V(mutexY1);
}

```

本题为类读者写者问题。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDBq1Ii-GPik2qdVq31a-n4VsrhDuAACRhJrG1-fqVZoBXpqlI6r5wEAAwIAA3gAAz0E)

解：

(1)

GBN 协议有累计确认，R3,3 的意思是乙方发送的序号是 3，希望甲方发送 3，那也就意味着乙已经收到了 0，1，2 这三帧。

所以，甲可以断定乙正确收到了 3 个帧，分别为 S0,0，S1,0，S2,0。

(2)

由于数据帧的发送和确认序号字段均为 3bit，所以总窗口是 8，也就是发送窗口为 7，接收窗口为 1。

假设甲从 t0 时刻的待发送序号为 0,1,2,3,...，那么在 t0 到 t1 时刻，甲已经成功发送并确保了 0,1,2 这三个帧，已经发送但没确保 3,4 这个帧乙是否成功接收。

所以甲理论还可以发送 3,4,5,6,7,0,1 这 7 个帧，不过 3,4 已经发送了，所以只能发送 5,6,7,0,1 这 5 个帧。

~~由于乙发了 R3,3 这个帧，意味着甲收到了 3 这个帧，期待乙发送 4 这个帧，所以第一个帧应该是 S5,4，最后一个帧应该是 S1,4。~~

由于乙发送的是 0,1,3，没有发送 2 这个帧，所以对于 3 这个帧应该直接丢弃，因此甲还是期待乙发送 2 这个帧，也就是 S5,2，S1,2。

(3)

分析该图，甲已经发送了 0,1,2,3,4 这 5 个帧，确认了乙的 0,1 帧，乙已经发送了 0,1,2 这 3 个帧，确认了甲的 0,1 帧。

由于 S2,0 超时，所以得重发 2,3,4 这 3 个帧，~~重发的第 1 帧应该是 S2,2~~。

应该是 S2,3，因为 R2,2 已经发了。

(4)

帧长为 1000B，所以一段 1000B/100Mbps=8000bit/100Mbps=80us。RTT=0.96ms=960ms。

所以，7×80/(80+80+960)=50%。

### 408 2018 真题 2 刷

- 分数为：148
- 第 43 题 -1，第 1 问理解错误。
- 第 44 题 -1 TLB 采用全相联，而我写成直接映射

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDlq1POs3r07OhCf-DqQGHfrkwIviQACjBNrG1-fqVaHNvjbYnAzhgEAAwIAA3gAAz0E)

本题应该选 B。

这类题方法是模拟，S1 操作数依次是 5,8,3,2，其中 2 在栈顶。所以第一次是弹出来 2 和 3，并且计算 3+2=5，然后放回栈里，此时栈里应该是 5,8,5。第二次弹出来是 5 和 8，计算 8-5，得到 3，然后放回栈里，此时栈应该是 5,3。第三次弹出来是 3 和 5，计算 5×3=15。

所以最后答案应该是 B。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDpq1PS1MNwi_pulRb2Le3TfMJcmSQACjRNrG1-fqVYIeHYqhg4ScgEAAwIAA3kAAz0E)

本题应该选 C。

这类题也是模拟，

对于 A，1 和 2 出队并输出元素，3,4 出队并入栈，5,6 出队并输出，4,3 出栈。

对于 B，1 出队入栈，2,3,4,5,6 出队输出，1 出栈输出。

对于 C，1,2 出队入栈，3,4,5,6 出队输出，矛盾。

对于 D，1,2,3,4,5,6 入栈，6,5,4,3,2,1，出栈输出。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDtq1PTdAfM8PobAhAssA6c0hA37iwACjhNrG1-fqVbqgqa383fXhQEAAwIAA3kAAz0E)

本题应该选 A。

这类题也算模拟，套公式不如手动计算。m1,1 放在 0，m1,2 放在 1，以此类推，m1,12 放在 11，所以 m2,2 放在 12，m2,3 放在 13，以此类推 m2,12 放在 22，所以 m3,3 放在 23。

所以，m1,1 放在 0，m2,2 放在 12，m3,3 放在 23，中间差值是 12,11，以此类推，后续是 10,9 等。

所以 m4,4 应该是 33，m5,5 应该是 42，m6,6 应该是 42+8=50。

所以应该选 A。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDxq1PV_7aWA2bAvTZ5T6T95b4VDSQACjxNrG1-fqValPCABGHE_GQEAAwIAA3kAAz0E)

本题应该选 A。

每个分页节点都有 2 个子节点，意味着没有度为 1 的结点。所以由 n0+n1+n2=n1+2n2+1，可得 n0=n2+1，由于 n0=k，所以 n2=k-1，所以总结点数为 2k-1。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCD1q1PaQpqgBQXR6lX8y5nfCLKODBAACkBNrG1-fqVY48UwsQsIimAEAAwIAA3gAAz0E)

本题应该选 A。

这道题有两种做法，一种是构造哈夫曼树，另一种是瞪眼法，出现次数少的编码较长，出现次数多的编码较短。

所以，由于 e 出现了 10 次，所以直接可以排除掉 B。由于 C 中 00 是 0011 的前缀，所以排除。

只剩下 A 和 D 可以选择，观察 D 选项 b 出现 3 次但是却拥有短哈夫曼编码，所以排除。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCD5q1PcyEXNevPR2Dwha91-rS7gzVQACkhNrG1-fqVbl9Olo2pxQ7gEAAwIAA3gAAz0E)

本题应该选 C。

根据中序遍历，本题顺序从小到大应该是：x1,x3,x5,x4,x2，所以 A，B，D 可以排除。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCD9q1Pd6-0mnk30gUp1P9VG6LWB8FAAClBNrG1-fqVZXVyPUsLeSpgEAAwIAA3gAAz0E)

本题应该选 D。

这种题一个个代入就好了，对于 D，拿走了 5 之后想要拿 2，但是拿 2 之前得拿 1，所以不是拓扑排序。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEBq1PfDXmDodLNNwnH8GyPc2fYI1wAClRNrG1-fqVaA9ynWzqn4SgEAAwIAA3gAAz0E)

本题应该选 B。

三阶 B 树一个结点至少拥有 3/2 向上取整 -1=1 个关键字，所以高度为 5 的 3 阶 B 树至少有 1+2+4+8+16=31 个关键字。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEJq1PhjRgVn9_wbdGaGOJPHZQAB4ZoAApkTaxtfn6lWvp3ksQXjj-gBAAMCAAN4AAM9BA)

本题应该选 C。

纯模拟方案，22%7=1，43%7=1，15%7=1，所以查找成功的总长度应该是：

1+2+3=6，所以 6/3=2。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEFq1Pg6y9c8AstzHwfrmjljCqDgpgACmBNrG1-fqVb9hLdkvKRjIwEAAwIAA3kAAz0E)

本题应该选 D。

这类题采用观察法，第一趟排序结果第一个关键字为 1，所以 1 和 8 必然要互换，所以第一次应该间隔是 5。第二趟 排序结果第二个关键字是 2，也就是说 2 和 3 要换，所以增量应该是 3。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCENq1PmzAjJZ9M_k42e1Yk3OH27d2gACnBNrG1-fqVYdIxZyo2Y86QEAAwIAA3gAAz0E)

本题应该选 A。

采用纯模拟法，构造大根堆，如下图所示：

![11 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGtq1djfIqEoTCUGtM7SKsfVxeM2iAACBhJrG1-fsVYnB5cp3NnT7wEAAwIAA3cAAz0E)

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCERq1Pn-AuFJlrSY4lsEtxjPy9JyjwACnRNrG1-fqVZoREkcccQligEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，二进制规则确实运算简单，不需要考虑过多的进位；

对于 2，两个稳态的物理器件容易，是因为不需要考虑范围，高是 1，低是 0；

对于 3，使用逻辑门电路实现算术运算也是正确的。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEVq1PpGkSvIMn2ydmrIPrUwvTylWgACnhNrG1-fqVYLIRi1-NwuTwEAAwIAA3gAAz0E)

本题应该选 C。

首先排除 A 和 D，因为题设中的 y 是 16 进制。

-y 的补码是 FFFF,FFBEH+0000,0001H=FFFF,FFBFH。

所以 x-y=FFFF,FFDFH+FFFF,FFBFH=FFFF,FF9EH。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEZq1Ptuy2jtx9SiODQm50P1X_G_yAACoBNrG1-fqVbUydzJ_gh3AAEBAAMCAAN4AAM9BA)

本题应该选 A。

按照单精度浮点数的表示，符号位为 0，阶码为 0000,0001，尾数全为 0 的数是最小的。阶码为 1，也就意味着 1-127=-126，所以最小的规格化正数是：1.0×2^-126。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEdq1P2IafDrt4SNHXTZ56FFCVxvlQACoRNrG1-fqVY05hM7FDFzRQEAAwIAA3gAAz0E)

本题应该选 A。

32bit 的数需要 32/8=4 个字节，也就是 8 个 4 位二进制数表示，两个一组。

-64 的机器数是：FFFF,FFC0H，2 个一组的小段法，也就是先读入 C0H，也就是应该选 A。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEhq1P4Sad_8WJGTdCLiVeduC-0OyAACoxNrG1-fqVYveoxXzzYPRgEAAwIAA3kAAz0E)

本题因该选 B。

逻辑右移指的是补 0，算术右移指的是按照符号位。

所以，原始的数 1101,1000B 逻辑右移一位，也就是 0110,1100B，算术右移一位也就是 1110,1100B。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCElq1P6buEAURpTKoqujAAFFbOwvA8MAAqQTaxtfn6lWpAZciCGLv3YBAAMCAAN4AAM9BA)

本题应该选 C。

对于 2K×1 位的引脚，显然是 2^11，一般来讲要让 r 接近 c，如果不能接近，那么行应该短一些，所以一那个该选 C。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEpq1P739PkHNN8Osznvd_5PaucqIQACpRNrG1-fqVahqC_-luiPowEAAwIAA3gAAz0E)

本题应该选 B。

2100H-2000H=0100H。0100H=2^8=256，256/8=32，所以应该选 B。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCEtq1P9er1MiP7fNCSW6hkGk3YjV9QACphNrG1-fqVYcDiY0ktCZdwEAAwIAA3gAAz0E)

本题应该选 A。

考虑无符号数的情况，显然 CF 应该是 0，因为是够减的。对于有符号数的情况，负数减一个负数必然是够减的，所以 OF 也应该是 0。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCExq1QABQm2-801E4_oj8kWoWRI1HC4AAqcTaxtfn6lWuZLTS7xjnOIBAAMCAAN4AAM9BA)

本题应该选 D。

选最长的。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCE1q1QABc2_iwGu0bgoeEWNU9MHmSMkAAqkTaxtfn6lWXcVNjHkJebgBAAMCAAN4AAM9BA)

本题应该选 B。采用总线复用显然是降低数据传输率的方法。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCE5q1QS93_Xm1bpFMRvKDsaZtYSU2wACsBNrG1-fqVb1Rf9XBRGR2QEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，按照本身的优先级排序。

对于 B，通用寄存器是操作系统保护的。

对于 C 是一个正确的描述。

对于 D，只有处于开中断的时候，才会执行中断服务程序。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCE9q1QU5slC8mrv3m3L3OVQRaOCF1AACshNrG1-fqVanXKCnnk4wjAEAAwIAA3gAAz0E)

对于 1，多任务操作系统至少需要并行，并发是其更高级的方式。

对于 2，多任务操作系统需要实现对共享资源的保护。

对于 3，但 CPU 环境就可以跑并发了，可以考虑 RR。

本题应该选 C。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFBq1QYWoWmyUQ3M94x4NWTX7OJUXAACsxNrG1-fqVY-yCKHtYGHggEAAwIAA3kAAz0E)

本题应该选 D。

由于 P2 的优先级最高，所以其周转时间应该是 24us。由于求的是系统周转时间，所以 P1 和 P3 等待的时间应该完整计入。

由于 P2 运行完之后是 P3，P3 首先等待 18us（此时 P1 等待时间剩下 12us），上处理机 1us，总计运行 36us，总和也就是 24+18+1+36=79us。

P1 在 P3 运行完之后等待 30us，上处理机 1us，总计运行 12us，总和也就是 79+30+1+12=122us。

所以，24+79+122=225，225/3=75us。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFFq1QYwkXlXX3apPPPheEyQ2BSpfwACtBNrG1-fqVZ4urM0hziaJwEAAwIAA3gAAz0E)

本题应该选 B。

thread1 按照 1,2,3 记录，thread2 按照 4,5,6 记录。

显然，值为 2 的序列为：1,2,3,4,5,6；4,5,6,1,2,3。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFJq1QZBpiWbZK3jZOW6ExsuZTtkjQACtRNrG1-fqVaKv_40j0eY7QEAAwIAA3gAAz0E)

本题应该选 A。

先计算仍需分配的资源，仍需分配 2,2,1，系统中还剩下 4-2-1=1 个资源，所以不存在安全序列。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGFq1RDRfO62LwABnfzj7d4lnITKwPAAAsYTaxtfn6lWp5DKPRMc6B0BAAMCAAN4AAM9BA)

本题应该选 C。

对于 1，可以理解为进程 P 想申请打印机，那么可能从运行态转为阻塞态。

对于 2，可以理解为 read 指令，那么显然需要。

对于 3，可以理解为抢占式优先级，显然是运行态转换为就绪态。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGBq1RCk3gaVt0CwQshNYOMdnTQ7uwACxRNrG1-fqVbVcDRUxcfRWwEAAwIAA3gAAz0E)

本题应该选 D。

管程本身就带有互斥机制，所以 A 是错的。对于 B，作用反了，x.signal 才是唤醒，对于 C，x 本身是条件变量，而不是信号量。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCF9q1RCJ3QKdV6NMnLsJ7d0yU6kWUgACxBNrG1-fqVYeegGMI2KL7AEAAwIAA3gAAz0E)

本题应该选 D，起始没什么好分析的。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCF5q1Q-I3caN_BHvKMKKLrLQB0ISMwACwxNrG1-fqVan7VCVQXHkEwEAAwIAA3gAAz0E)

本题应该选 A，先来先服务是完全根据进程进入系统的时间来排序的。

对于 B，最短寻道往往会出现饥饿现象，并且往往会出现往左了之后一直向左。

对于 C 和 D，循环扫描粘着现象更严重。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCF1q1Q4blWQJLerIi2Y0Y_LH04mvEgACwhNrG1-fqVbQetg221OVKwEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，提前读的意思是提前把数据从磁盘读入内存，以供进程读取，显然是可以省时间的。

对于 2，为文件分配连续的簇，意思是假设文件存储在磁盘里，并且该文件占据多个磁盘块，那么在寻道的时候可以减少寻道时延。

对于 3，延迟写的意思是说在把数据写入磁盘之前，先把数据写入到缓冲区，以便在需要的时候再写入磁盘。

对于 4，显然是对的，磁盘高速缓冲类比 cache 机制。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFxq1Q4C7Rw_y-RVeUuPiFVAUbeB_QACwRNrG1-fqVYg2Pf-OhxxQgEAAwIAA3gAAz0E)

本题属于背书问题，应该选 C。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFtq1Q3oKF8RDum3iIbilsDVmUN_ZQACwBNrG1-fqVZKrVu2gI7XqQEAAwIAA3gAAz0E)

本题属于背书问题，应该选 B。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFpq1Q3URK5CzwK_2CZUSFuVH2x4zAACvxNrG1-fqVabhH7es-ZalAEAAwIAA3gAAz0E)

本题应该选 C，属于背书问题。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFlq1Q0kZ_8XdHclEVsyEBVStN3s-QACvhNrG1-fqVaaTk1fdNFyXgEAAwIAA3gAAz0E)

本题应该选 D。

属于背书题。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFhq1Qwdg_aZMqo4QlaZef14-I4Q8gACvBNrG1-fqVZsXY6nzyeVvgEAAwIAA3gAAz0E)

本题应该选 D。

假设一个数据帧长度为 xbit，那么传播耗时 x/3000，所以可以列出式子：（x/3000）/（x/3000+0.4）=0.4，解得 x=800。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFZq1Qulh4W-POnO7acGENGrq0WdGAACuRNrG1-fqVY3HjhviKDH_gEAAwIAA3gAAz0E)

本题应该选 D。

H1 的目的 mac 地址应该是路由器的，所以是 51，H2 收到的源 mac 地址也应该是路由器的，所以是 61。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFVq1QrOm6TtidJrN5RBKNtcA1abJAACuBNrG1-fqVZmvksiM3obIgEAAwIAA3gAAz0E)

本题应该选 C。

观察，展开 32,40,48,56 为二进制，分别为：0010,0000B，0010,1000B，0011,0000B，0011,1000B。

显然，这些数字的前三位是一样的，所以应该是 16+3=19 位的子网掩码，所以应该选 C。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFRq1QpLLeLlzWM-qslv80KeOpFoBAACtxNrG1-fqVbUh45qn2S4YAEAAwIAA3gAAz0E)

本题应该选 B。

分用指的是到了目的地址后，根据目的端口号把原有的数据分开来给对应的东西。

复用指的是根据源端口号。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCFNq1QoWCx6x27y8K023XwkP4xEwjQACthNrG1-fqVbJ4tcuZeMf8AEAAwIAA3gAAz0E)

本题应该选 D，属于背书题，SMTP 协议直接传输的只能是阿斯科编码，需要使用 MINE 协议扩展才能传输其他东西。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGJq1RG5v5IQ8Z1mF8g6Pkl6ISWY9wACxxNrG1-fqVZe_Guhi-wTeAEAAwIAA3gAAz0E)

解：

(1)

1. 设置一个数组模拟哈希表 hasmap[n+1]
2. 遍历数组，如果 A[i]<=n&&A[i]>0，那么 hasmap[A[i]]=1
3. 遍历 hasmap，如果 hasmap[i]==0，那么返回 i
4. 如果遍历完了，那么返回 n+1

(2)

```c
int solve(int A[],int n){
    int hasmap[n+1];
    for(int i=0;i<n+1;i++){
        hasmap[i]=0;
    }
    for(int i=0;i<n;i++){
        if(A[i]<=n&&A[i]>0){
            hasmap[A[i]]=1;
        }
    }
    for(int i=1;i<n+1;i++){
        if(hasmap[i]==0){
            return i;
        }
    }
    return n+1;
}
```

(3)

时间复杂度：O(n)

空间复杂度：O(n)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGNq1RJhhrKLeZ5iqBf8Z3WlFgt27wACyBNrG1-fqVbxUug6zX4t5gEAAwIAA3kAAz0E)

解：

(1)

如图所示：

![42 解 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGpq1czmXvMXMxMBksETvoBWXHZ5gQAC4RFrG1-fsVZyj_yeOmtx6QEAAwIAA3cAAz0E)

16

(2)

邻接矩阵。

Prim 算法。

(3)

采用第一种方式可以收到分组。

采用第二种方式不可以收到分组。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGRq1RKOqi0Vt9J7WhHTgBWkc_XNYQACyRNrG1-fqVYXerUmm_wkXAEAAwIAA3gAAz0E)

解：

(1)

假设执行 1s，则总共传输 2MB 的数据。

一条指令耗时：4/500M，一次输入输出 10 条指令，则消耗 40/500M，~~也就是至少 80ns 查一次。~~

订：

$$
\text{满载时间} = \frac{4\ \text{B}}{2 \times 10^6\ \text{B/s}} = 2 \times 10^{-6}\ \text{s} = 2\ \mu\text{s}
$$

而 IO 接口为 32bit=4B，传输 2MB 至少最要 2MB/4B=0.5M 次中断。

也就是 1s 内总共执行 40/500M×0.5M=4%，也就是需要消耗 4% 的时间。

(2)

假设执行 1s，则总共传输 40MB 的数据。

设备 B 一次中断时间为 400/500M。

IO 接口为 4B，传输 40MB 至少需要 40MB/4B=10M 次中断。

也就是 1s 内总共执行 400/500M×10M=8s，矛盾。

所以不可以使用中断 IO 方式。

(3)

假设执行 1s，则总共传输 40MB 的数据。

设备 B 一次 DMA 的时间为 500/500M。

一次传输 1000B，传输 40MB 至少需要 40MB/1000B=40K 次中断。

也就是 1s 内总共执行 500/500M×40K=4%。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGVq1RKgufKUelaFNbIemCFvf2JTHgACyhNrG1-fqVbMR-LjngX3FwEAAwIAA3gAAz0E)

解：

(1)

28 位。

(2)

~~直接映射。~~

订：全相联映射

SRAM。

(3)

2 路组相联。

脏位 1 位。

LRU 替换位 1 位。

一行 cache 是数据+tag+ 有效位 + 脏位+LRU 替换位，也就是 2^5×8+20+1+1+1=279。由于总共有 8 组 cache，一组 2 个，所以是 16 个 cache 行，也就是 16×279=4464bit。

Cache 有效位的作用是：当进程切换的时候，原来的 cache 失效，所以需要有效位来确保当前进程是用的 cache 是自己的数据。

(4)

0008,C040H 按照虚页号切也就是 tag 位为 0008CH，对比 TLB，发现 0008CH 的有效位为 1，且对应实页号为 0040H，所以得到物理地址 004,0040H。

物理地址 004,0040H=0000,0000,0100,0000,0000,｜010｜0,0000B，也就是在第 2 组 cache，tag 号为 00400H。由于有效位为 0，所以未命中 cache。

由于虚拟地址给的后 8 位不会变，所以解析后 8 位即可，也就是 60H=011｜0,0000B，对应的是第 3 组 cache。

![44 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGZq1RKyQNj42lwwVjs3Epk_eUtikwACyxNrG1-fqVZPMD1bJc8MVAEAAwIAA3gAAz0E)

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGdq1RLQ2GDKIq-Kzpgs7JaDSfMFegACzBNrG1-fqVav1JMus0Q8yQEAAwIAA3kAAz0E)

解：

(1)

页目录号为：00,0000,0110B。

页号为：00,0000,0110B。

页内偏移量为：0000,0000,1000B。

拼接起来也就是 0000,0001,1000,0000,0110,0000,0000,1000B=0180,6008H

(2)

物理地址。

进程切换时，PDBR 内容发生变化。一个进程对应一张独立的页目录表。

线程切换时，PDBR 内容不发生变化。线程依托于进程，没有自己独自的物理地址空间。

(3)

近期访问位，近期修改位。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGhq1RLkvapvD5KXKUB-PJVslC0AAYsAAs0Taxtfn6lWhIYEqOV9risBAAMCAAN4AAM9BA)

解：

(1)

一个簇大小为 4KB，所以一个簇内可以存储 4KB/64B=64 个文件索引节点。

所以，最大文件长度应该是 (8+64+64^2+64^3)×4KB。

(2)

用 1M 个簇存放文件节点，也就意味着 1M×4KB/64B=2^26 个。

用 512 个簇存放文件数据，也就意味着 512M×4KB/5600B=2^41/5600>2^41/2^13=2^28 个。

所以，最多可以存放 2^26 个。

(3)

6KB/4KB=1，也就意味着其最大数据放在第 2 个簇里（按 1 开始）。

40KB/4KB=10，也就意味着其最大数据存放在第 10 个簇里。

由于第 2 个簇是在直接地址项，第 10 个簇在第一级地址项，读取磁盘的次数不一样。

所以获取 F1 和 F2 最后一个簇号所需要的时间不同。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCGlq1RL0DB0wecITpXkxX-oSET508QACzhNrG1-fqVY8c0Lwj05kkwEAAwIAA3kAAz0E)

解：

(1)

由于是均分，所以销售部被分配到的应该是 192.168.1.1-192.168.1.125，技术部被分到的应该是 192.168.1.129-192.168.1.253。

销售部希望的广播地址是：192.168.1.127。

技术部希望的希望地址是：192.168.1.128。

若为每个主机分配一个 IP 地址，那么技术部子网还可以连接从 209-253，也就是 253-209+1=45 台。

(2)

由题设可知，数据长度是 1480B，由于技术部子网的 MTU 为 800B，尝试发 780B 的数据。然而 780/8 不可被整除，所以第一段数据应该是 776B，776/8=97。剩下的数据 1480-776=704B。

所以，最大一个 IP 封片封装的是 776B。

至少需要 2 个分片。

第一个分片的偏移量是 0，第二个分片的偏移量是 97。

### 408 2019 真题 2 刷

- 分数为：145，1 刷为 144，错的选择题为 24
- 第 5 题：对关键路径的理解错误
- 第 26 题：对于 4，FAT 表兼具了已使用管理和未使用管理，可以理解为静态链表，也就是显示链接分配。
- 第 42 题：-1，队满的时候应该采用牺牲一个节点的方式。

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCG1q1fj_ySZgH3yq29BWnQ7GmgcKKAACBBZrG8YqsVaMftrtk-xLmQEAAwIAA3gAAz0E)

本题应该选 B。

自增然后按照平方比较，所以应该运行根号 n 次。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCG5q1fqMSPK6nuCB7jQhI2MoiKSKHQACChZrG8YqsVaoeuSXGHJpswEAAwIAA3gAAz0E)

本题应该选 B，属于背书题。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCG9q1fqt076COcbfYSsITrKtN3AtxgACCxZrG8YqsVbWrflm3FVwZgEAAwIAA3gAAz0E)

本题应该选 C。

哈夫曼树不存在度为 1 的结点，根据公式 n0+n1+n2=n1+2n2+1，也就是 n0=n2+1，由于 n1=0，n0+n1+n2=115，所以 2n2+1=115，也就是 2n2=114，n2=114/2=57，所以 n0=57+1=58。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHBq1f7ZhLJgviwAATy2fD-DpUTQBA0AAhgWaxvGKrFW5VyM-3oZZIwBAAMCAAN4AAM9BA)

本题应该选 A。

对于 1，v 是 T1 叶节点，那么可以构造两个树如下图，所以 A 是对的，都有可能。

对于 3 可以构造出来肯定是错的。

![4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXJq2JiF0YH9nsbfnJswGs_3MmnhmwACCxRrG89ByVbc5eV8Xx0_EwEAAwIAA3kAAz0E)

所以，1 是对的，3 是错的，可以排除掉 BD。

对于 2，如果不是叶节点，那么删去后再插入必然是叶节点，所以 2 是错的。

综上，只有 1 是对的，也就是 A。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHFq1f-2gH7R5EyL_i56hQyXwHYIlwACGRZrG8YqsVZLcJWnTSwUfAEAAwIAA3gAAz0E)

~~本题应该选 B。~~

~~这类题采用模拟的做法，如下图所示：~~

~~![5 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZFq2fFJ0wVnhBsyAjWfiwjAMrU8_wACmhJrG89B0VZHPEk8379qGQEAAwIAA3kAAz0E)~~

订：好像这类题学的有点问题，必须得再学一遍。

总结一下，在 AOE 网中，必须得区分定点和有向边。

定点的左上角指的是最早发生时间，右上角指的是最迟发生时间，指的是对所有边来讲，这个点必须从什么时候开始起步**第一个**事件（因为可能这个点有多个出度）

对于有向边活动时间，最早开始时间直接严格等于起点 i 的最早发生时间，最迟开始时间等于指向结点的最晚开始时间 - 持续时间。

切记不可以读特定的结点。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXNq2Jizeh38DvloYtIAAZl-jSNgrbcAAgwUaxvPQclW4gL77gWq4cQBAAMCAAN4AAM9BA)

本题应该选 A。

构造如下图所示：

![6 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXRq2JlxvL7s3Tf9lwQK7g07akit5gACDhRrG89ByVbzgYBMa5mxWwEAAwIAA3cAAz0E)

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXVq2JmEJSHlD3Sk9c76KxcAAaUCTmAAAg8UaxvPQclWXqWuDRJ10OUBAAMCAAN4AAM9BA)

本题应该选 D。

对于 1，数据的规模如果非常大，那么可以采用快排等排序算法，但如果数据量很小，有的时候不如采用其他算法。

对于 2，如果数据采用链式存储，那么用不了快排。

对于 3，对于一些结构体排序而言，这是必须考虑的。

对于 4，如果数据的初始状态就是接近有序的，那么使用快排效率会很差。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXZq2Jni5ArfPS9ju0Pq1t1D4yzmnwACEBRrG89ByVY_7lXQH0eBmQEAAwIAA3kAAz0E)

本题应该选 C。

首先计算所有数的模 7。

87,40,30,6,11,22,98,20

3,5,2,6,4,1,0,6

由于采用线性探测法解决冲突，可以构造出哈希表，填满 0-7。

而散列函数是 0-6，所以应该是 9+8+7+6+5+4+3=42，42/7=6。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXdq2Ju1qhrhnFOIJi47vR7gAAE6pI4AAjYUaxvPQclWZn4CruWpo74BAAMCAAN5AAM9BA)

本题应该选 B。

如下图所示，应该是 B。

![9 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXhq2JxQjKYF4KNMPudffkvaBxNS1AACNxRrG89ByVb4PgabmEN7SgEAAwIAA3kAAz0E)

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXlq2JxpQj8G8NldUJrXvaqp38y0BAACOBRrG89ByVbvQd_-JlwkpAEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，最大可以选 72，中间可以选 28

对于 B，最小可以选 2，最大可以选 72

对于 C，最小可以选 2，大的那一侧可以选 28

对于 D，小的一侧可以选 12，大的一侧可以选 32，但是由于不包含边界，所以至少得 3 个数是最终位置，错误。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXpq2J3m52ow3qo8Ag5dS6-leNWwNgACOhRrG89ByVZM-UTt7UJF-wEAAwIAA3kAAz0E)

本题应该选 B。

120 个初始段，也就是 119%11=9,11-9=2。

所以也就是补充 2 个。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHJq1f_O_iZnU8rSDxkbwZjeQ2MZPQACGhZrG8YqsVayYxeBaNJnXQEAAwIAA3gAAz0E)

本题应该选 C。对于 C，数据在指令中可以以很多种方式给出，典型的寻址方式就有 10 种。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHNq1gABDnTD7AOw2zX5LWNyIrwB6kYAAhsWaxvGKrFWIi-HwmSOVywBAAMCAAN4AAM9BA)

本题应该选 A。

unsigned short usi=65535，也就是 FFFF,FFFFH。

转译为 short，也就是 -1。0

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXtq2J5xEyZLNeJWpx5Y6oxAkhB5cwACOxRrG89ByVZU4zofw5hNcwEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，显然是对的。地址转换是硬件做的事情，所以是 CPU 检测到的。

对于 B，缺页处理需要由操作系统提供的缺页程序来完成，这里辨析一下，缺 cache 的时候是纯硬件。因为前者是要把外存里的数据搬到内存里。缺页本身是异常，但是需要通过 IO 来搬数据。

对于 C，如 B 所说。

对于 D 是错误的，缺页一定是回到当前指令重新执行。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYFq2eCKIR7-fLWI7pQrCO_QjxGuywACYBJrG89B0VZvdcgmq6MhIAEAAwIAA3gAAz0E)

本题应该选 D。

首先先基址寻址找到操作数的起始地址，也就是 F000,0000H+FFFF,FF12H=EFFF,FF12H。

由于采用打断法，所以最低有效字节应该是 00H，也就是 EFFF,FF15H。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYJq2eEhnUebqQAB2JZLA3qd0AeQCFYAAmESaxvPQdFWj3hEsPMRQ9ABAAMCAAN4AAM9BA)

本题应该选 D。

对于 D，考虑使用同步方式，可能是多个时钟脉冲才执行一条指令。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYNq2eFj26e76GZzZItPIBzndiOAhgACYhJrG89B0VZAVsiflihNfQEAAwIAA3kAAz0E)

本题应该选 B。

对于 1，显然使用了 R，那么也就意味着使用了通用寄存器组。

对于 2，由于实现了加法，那么肯定使用了 ALU。

对于 3，由于 M 访存了，所以肯定使用到了存储器。

对于 4，译码在执行之前，所以错误。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYRq2eG0b1ylER1V4PiK4ZIq9qkBwwACZBJrG89B0VYMWSSy6_SjcQEAAwIAA3kAAz0E)

本题应该选 C。

默认不采用数据转发和 load-use 处理，所以也就是需要 nop 3 次。

大部分情况下需要处理的都是写后读。

分析全流程，对于 I1 和 I2 之间没有冲突，I2 和 I3 之间存在冲突，I3 和 I4 之间存在冲突，所以排除 B 和 D。

现在观察 A 和 C 两个间隔的，也就是 I1，I3；I2，I4 有没有冲突。

对于 I1 和 I3，由于 I1 和 I3 只间隔 1 个段，所以本来要 nop 3 次，现在只需要 nop 2 次，然而还是要 nop 的，所以存在冲突。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYVq2ePKtNXhouny0Vzv-00GPc1wIQACbBJrG89B0VbClEqwupcbpAEAAwIAA3kAAz0E)

本题应该选 B。

采用 3 通道存储器总线，也就意味着有 3 条通道，所以总带宽应该是 1333M×3×64bit/8=32GB/s。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYZq2eSShjVK2AI15s-QVov-vidafwACexJrG89B0VYk4ggrnU2u_AEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，格式化容量比非格式化容量小，因为磁盘格式化的时候要划道，会导致损耗。

对于 B，属于背书。

对于 C，磁盘存储器的最小读写单位为一个簇。

对于 D，属于背书。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYdq2eWUugKKc1jYO-9Vcf_g47llUAACgBJrG89B0VbuiU2kxIFhdgEAAwIAA3kAAz0E)

本题应该选 A。

CPU 主频为 1GHz，数据缓冲寄存器为 32bit=4B。

由于数据传输率为 50000B/s，假设传输 1s，也就是总共传输 50000B，50000B/4B=12500 次中断，也就是总共需要 12500×1000/1G=0.0125s，也就是 0.0125×100%=1.25%。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYhq2ebac4opBXJOFWTW9p4ZxQ4qSgACgRJrG89B0VZ_JHJVTbln0gEAAwIAA3gAAz0E)

本题应该选 D。

再次辨析一下 DMA 全流程，首先是 CPU 发起 DMA 请求，DMA 控制器接收到请求后从内存里搬，等到搬完一块数据后请求中断。

其中有几个区别，如果采用周期挪用，那么是争夺总线使用，DMA 每次准备好一个数据缓冲区的数据就要发一次请求，适用于中高速的设备；如果采用停止 CPU 访问，那么是传一整个块期间，CPU 都不能访问内存，适用于适用于极高速外设（如高速磁盘、千网/万兆网卡）；对于交替访问，将一个 CPU 时间周期严格分成两部分，前半部分给 CPU 后半部分给 DMA，适用于 CPU 工作周期比主存存取周期长 的系统，硬件实现较复杂。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYlq2eimlJ_dQKEzUz15C9g5Zs7GVQACghJrG89B0VbJDYsn8ovBfwEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，动内核，自然需要操作系统，所以正确。

对于 B，操作系统分配一个内核进程，然后其他线程都依托于这上面（用户线程）。

对于 C，显然是对的，不需要操作系统介入

对于 D，显然正确，用户线程可以在不支持内核级线程的操作系统实现

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYpq2ejw0vSyMrJvD6O3xUpVRZy9vAACgxJrG89B0Vaw3EE0MjwFRgEAAwIAA3kAAz0E)

本题应该选 C。

进程唤醒的意思是：进程从阻塞态到就绪态。

对于 1，IO 结束后，操作系统会将进程从阻塞态挂到就绪态，显然如此。

对于 2，某个进程退出临界区后，意味着其用完了临界资源，所以会导致从阻塞态变成就绪态。

对于 3，当前进程时间片用完，会导致进程从运行态转变为就绪态，所以排除 3。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYtq2ev3myKdBt25P9sWpRBq-iimuAACjhJrG89B0Vbt4gbbSvGbCwEAAwIAA3kAAz0E)

本题应该选 C。

对于 1，执行系统调用的过程属于内核态。

对于 2，IO 采用必须要进入内核态。

对于 3，可以理解为 mac 和 windows 有没有为应用程序提供了统一的接口，显然是没有的，所以 3 是错的。

对于 4，属于背书。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCYxq2exNg67giUm94jvUAAGz1dyp3DgAAo8SaxvPQdFW8KwJemE20VkBAAMCAAN5AAM9BA)

~~本题应该选 C。~~

注意功能，本题功能是管理空闲磁盘块。

对于 1，位图显然是管理空闲磁盘块的。

对于 2，索引节点指的是还可以创造多少个文件。

对于 3，空闲磁盘块链指的是链式分配下有哪些空闲磁盘块。

~~对于 4，文件分配表指的是文件分配，也就是已经使用了哪些，而不是未使用。~~

对于 4，FAT 表兼具了已使用管理和未使用管理，可以理解为静态链表，也就是显示链接分配。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCY1q2ezhmuzQkXYaJN01IZyxo7XfAgACkhJrG89B0VbI4lPUQ12NoAEAAwIAA3kAAz0E)

本题应该选 C。

注意这道题问的是平均等待时间，采用模拟法，考虑 P1，P1 时间是 30ms，执行完一个时间片后开始等待。此时 P2 上处理机运行一个时间片，然后 P1 和 P2 分别剩下 20ms，10ms，由于第二个队列是短进程优先，所以第二个进程继续运行 10ms，然后 P1 运行剩下的 20ms。

所以，P1 总共等待 10+10ms，P2 总共等待 10ms。总计等待 30ms，也就是平均等待时间是 15ms。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCY5q2e1S49DFL4-5-13DfZ_fpfdUmgAClBJrG89B0VacKL9khoLYlwEAAwIAA3kAAz0E)

本题应该选 B。

本题考察的是共享段表。

对于 A，物理只存一份这是对的。

对于 B，段 S 在 P1 和 P2 中就是逻辑段，逻辑段自由分配，所以错误。

对于 C，显然是共享的。

对于 D，是分配那块的只是，是对的。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCY9q2e2vuaTq4H_ggZWNM7d_IDx79gAClRJrG89B0VbdmdGP78BlSgEAAwIAA3kAAz0E)

本题应该选 C。

如图所示：

![29 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZBq2e4xB4U3_HR67A1cqlG94WoRvAAClhJrG89B0VZbcFXW1G7GNgEAAwIAA3kAAz0E)

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCH9q1hJ2dasunDoLH8363eWUc7uWhgACVRZrG8YqsVaau6c6nIp5LAEAAwIAA3gAAz0E)

本题应该选 B。

对于 3，银行家算法并不可以判断系统是否处于死锁，只能判断系统是否处于不安全的状态。即便是不安全的状态，也不一定发生死锁。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCH5q1hEIdQ1HkInq8hhM8EDuxa0i2gACUxZrG8YqsVYBPjZ9wUBAKAEAAwIAA3gAAz0E)

本题应该选 A。

2050,1225H=0010,0000,01｜01,0000,0001｜,0010,0010,0101B.

所以页目录号分别是 00,1000,0001B=081H，页号应该是 01,0000,0001B=101H。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCH1q1hCgdsEUoDZCPr4qTh2a1MlrbwACUhZrG8YqsVaCHFt7QWnbSQEAAwIAA3gAAz0E)

本题应该选 C，属于背书题。

对于 A，首次适应算法反而是利用的时候最佳的。

对于 B，最坏适应算法最后会导致大的进程无法装入。

对于 C，最佳适应算法会留下难以利用的内存碎片。

对于 D，每次都从上次结束的地方开始向后，是一种优化，但是实践下来没有首次适应算法好。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHxq1hBcqLPZMeYWojwjUf9uIsIPJwACUBZrG8YqsVZjGT1HnwtfRgEAAwIAA3gAAz0E)

本题应该选 C。

OSI 参考模型自下而上应该是物理层，数据链路层，网络层，传输层，会话层，表示层，应用层。绘画层的功能是会话管理。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHtq1g8NaA7Hq7YEkbCn5DcIwJogHgACTBZrG8YqsVaa_1JTaIDcPgEAAwIAA3gAAz0E)

本题应该选 A。

属于背书题，应该选双绞线。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHpq1g66ErcakYGNBn3u9ai9aTUewQACPBZrG8YqsVZNSD1MOfCVdgEAAwIAA3gAAz0E)

本题应该选 B。

对于滑动窗口协议，3bit 的编号发送窗口 + 接收窗口是 8，所以 8-5=3，也就是 3。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHlq1gyRFEP1CQq59wURnhmSK12dLAACNBZrG8YqsVbSkd7AJ_KptQEAAwIAA3gAAz0E)

本题应该选 B。

首先题印错了，应该是 100Mb/s。

本题问的是最短单向传播时延，先算 RTT，RTT=128×8/10^8=2^10/10^8=10.24us。

问的是单向传播时延，所以应该是 B。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHhq1guvJCyHmYWkobF7sXhSBcAUngACMxZrG8YqsVbhTke6N9gneAEAAwIAA3gAAz0E)

本题应该选 B。

将 101.200.16.0/20 分成 5 个子网，采用类似哈夫曼树的分法，也就是 0,10,110,1110,1111，所以也就是最后 8 bit，也就是 B。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHdq1gs777K5SCAG6JyawLPQBDQHdwACMhZrG8YqsVZUC-9LbWmydQEAAwIAA3gAAz0E)

本题应该选 C。

快重传，在收到三个冗余 ack 的时候立刻发送，三个冗余 ack 的意思是总共收到 4 个 ack，所以是 t3 时刻立刻发送。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHZq1grXalFzRCTmlhbwHovUkGjRuwACMBZrG8YqsVYLR88mhQ0yCwEAAwIAA3gAAz0E)

本题应该选 D。

第一次握手的时候，甲发送的是 2018；

第二次握手的时候，乙发送的是 2046,2019；

第三次握手的时候，甲发送的是 2019,2047。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHVq1gqtq2eDhec69YCmFMU485YgowACLxZrG8YqsVbxflt3-WIbPwEAAwIAA3gAAz0E)

本题应该选 B，在 CS 模式中，客户应该通过服务器通信。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCHRq1gZPQ2xfdiA4MHxODTLSzjU0sAACIhZrG8YqsVbcTefd7T72RgEAAwIAA3gAAz0E)

解：

(1)

1. 计算出链表的长度 n
2. 找到第 n/2 个节点，将第 n/2-1 个结点的尾指针指向空，设置一个新的头节点 L2，L2 指向第 n/2 个节点
3. 逆置 L2
4. 将 L2 的结点摘下按照题设要求接入 L
5. 如果 L1 遍历完，L2 仍不空，则将 L2 剩余结点拼接在 L 后。

(2)

```c++
typedef struct node{
    int data;
    struct node *next;
} NODE;

int get_length(NODE *L){
    int len = 0;
    NODE *tmp = L->next;
    while(tmp != nullptr){
        len++;
        tmp = tmp->next;
    }
    return len;
}

void reverse(NODE *L){
    NODE *curr = L->next;
    L->next = nullptr; // 断开旧连接，防止自己指自己成环
    while(curr != nullptr){
        NODE *tmp = curr->next;
        curr->next = L->next;
        L->next = curr;
        curr = tmp;
    }
}

void solve(NODE *L){
    int len = get_length(L);
    if(len <= 2){
        return;
    }
    NODE *pre = L, *curr = L->next;
    for(int i = 0; i < len / 2; i++){
        pre = pre->next;
        curr = curr->next;
    }
    pre->next = nullptr;

    NODE *L2 = new NODE;
    L2->next = curr;
    reverse(L2);

    pre = L->next;
    curr = pre->next;
    while(curr != nullptr){
        NODE *tmp = L2->next;
        L2->next = tmp->next;

        pre->next = tmp;
        tmp->next = curr;
        curr = curr->next;
        pre = pre->next->next;
    }

    if(L2->next != nullptr){
        pre->next = L2->next;
    }

    delete L2;
}
```

(3)

时间复杂度：O(n)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeZq3aOZMshcpuliGDjWOFJDUKi8ygACsRJrG2MQ8FZGMFG6hRFBrgEAAwIAA3cAAz0E)

解：

(1)

链式存储结构，因为需要动态增长空间。

(2)

```c
// 判断队空
bool isempty(S,f,r){
  if(f==r){
    return true;
  }
  return false;
}
// 判断队满
bool isfull(S,f,r){
  return !isempty(S,f,r)&&r->next==f;
}
```

订：判断队满错了，本题应该采用牺牲一个结点，所以不需要有非队空。

(4)

```c
void rudui(S,f,r，data){
  if(isfull(S,f,r)){
    创建一个新的结点 a;
    a->data=data;
    a->next=f;
    r->next=a;
    r=a;
  }else{
    r=r->next;
    r->data=data;
  }
}

void chudui(S,f,r){
  if(isempty(S,f,r)){
    return;
  }else{
    f=f->next;
  }
}
```

2,3,4 需要绘图的部分如下图所示

![42 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCedq3abyJGdr6R4sftfzpcOg67wRnQACtBJrG2MQ8FZjTZmh1O3cAgEAAwIAA3kAAz0E)

这类题按照我的习惯依旧是先画出已经入队一个的状态，然后删一个，rear 指针回退一格，所以应该先做第 3 题，而不是第 2 题。

因为要充分利用空间，所以应该采用循环单链表。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeFq3ZsU6eSeSjoOXoF9w2fEy30sywACoRJrG2MQ8FZ0sk_Xr5Dq0AEAAwIAA3cAAz0E)

```c
semaphore mutex=1;
int A[n]; // 初值均为 0
int m;
func philosopher_i(){
  while(1){
    P(mutex);
    if(m>=1 && A[i-1]==0 && A[i%n]==0){
      m-=1;
      A[i-1]=1;
      A[i%n]=1;
      break;
    }
    V(mutex);
  }
  V(mutex);
  进餐();
  P(mutex);
  m+=1;
  A[i-1]=0;
  A[i%n]=0;
  V(mutex);
}
```

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeBq3ZfKiSt7jNxNs8tNufWLw7467AACnxJrG2MQ8FZg2FqSd4z8VwEAAwIAA3cAAz0E)

解：

(1)

由题设可知，柱面（磁道）有 300 个，盘片有 10 个，扇区有 200 个。

这里的每个柱面有 10 个磁道主要是需要注意表述，虽然磁道和柱面可以相互代替这使用，但是还是得注意题设的表述。

所以，磁盘的容量为 300×10×200×512B=300000 KB

(2)

簇号分别为 100260、60005、101660、110560，分别×2，可以得到：

200520、120025、203320、221120，分别除以 2000，可以得到：

100、60、101、110（假设按照 0 号为第 1 道）

所以，按照 SSTF 算法，顺序应该是：85、100、101、110、60，按簇，也就是：

100260、101660、110560、60005

(3)

100530×2/2000=100，所以柱面号应该是 100。

100530×2-100×2000=1060。由于 1060/200=5，所以盘片号应该为 5。

1060-5×200=60，所以簇号应该为 60。

将簇号转换为物理地址是由 IO 系统的驱动程序完成的。

![45-46 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeNq3Z4qwAX6tp9lDIKBseP5ihvduwACphJrG2MQ8FZxpBGemm6iqwEAAwIAA3cAAz0E)

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeRq3Z5Fj5EQhGGncNGAZ9v3ZXhKHQACpxJrG2MQ8FbOMN9evXDYHgEAAwIAA3cAAz0E)

解：

(1)

f(10)=10×f(9)=10×9×f(8)=...=10×9×8×7×6×5×4×3×2×f(1)=10×9×8×7×6×5×4×3×2×1=3628800

所以，总共调用了 10 次 f1。

return n×f1(n-1) 会递归调用 f1。

(2)

条件转移指令：

`jle f1+35h (00401035)`

一定跳转的指令：

`call f1 (00401000)`

`jmp f1+3Ah (0040103a)`

`ret`

(3)

根据第 16 行的 call 指令，第 17 行的虚拟地址应该是 160040102AH。

采用相对寻址，也就是要从 160040102AH 开始计算回退，也就是 0040,102AH-0040,1000H=0000,002AH。将  0000,002AH 按位取反并 +1，也就是 FFFF,FFD6H。

小端方式。

(4)

int 的表示范围为 -2^31-2^31-1，f(13) 的数值溢出。

将 int 改为 long long。

(5)

高 32 位不全等于第 31 位的时候，OF=1。

trap

![45-46 图](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeNq3Z4qwAX6tp9lDIKBseP5ihvduwACphJrG2MQ8FZxpBGemm6iqwEAAwIAA3cAAz0E)

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeVq3aIvaj3USemMBwUiKwytrbD3OwACsBJrG2MQ8FbI7VsqZtDQ7gEAAwIAA3cAAz0E)

解：

页大小为 4KB，也就是 4KB=2^12B，也就是 12bit，所以页号是前 20bit。

第一条 push 指令的页号是 00401H，ret 指令页号也是 00401H，所以处于同一页。

指令 cache 有 64 行，采用 4 路组相联，也就是有 64/4=16=2^4，占 4bit 的 cache 组号。主存块号是 64B=2^6B，也就是占 6 位。

所以

后 6 位是块地址

中间 4 位为 cache 组号。

前 32-4-6=22 位是 tag。

读到第 16 行 call 指令的时候，对应的逻辑地址是 00401025H=0000,0000,0100,0000,0001,00|00,00|10,0101B。

所以处于第 0 组 cache。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCeJq3ZzgRuedsb3UvTj-vdm6xjMtFQACoxJrG2MQ8FZJZ4NCwOjC1wEAAwIAA3cAAz0E)

解：

(1)

设备 1：路由器

设备 2：以太网交换机

设备 3：以太网交换机

(2)

设备 1 的 IF1，IF2，IF3 都需要配置 IP 地址，分别为：

设备 1 IF1:192.168.1.254/30

设备 1 IF2:192.168.1.1/26

设备 1 IF3:192.168.1.65/26

(3)

NAT

(4)

H3 发送一个目的地址是 192.168.1.127 的 IP 数据报，首先辨析该数据报，127=0111,1111B。

对比子网掩码，也就是其和 H3 和 H4 属于同一个网络，所以不需要额外交付给默认网关。

由于该数据报为广播地址，所以 H3 发送 H4 肯定会收到。

### 408 2020 真题 2 刷

- 分数为 141
- 第 4 题背书错误。
- 第 25 题，中断相关的背书，这个一定要着重注意。
- 第 41 题 -3，非最优解，问题不大，但是还是得再看
- 第 44 题 -1，背书问题，乘法器
- 第 46 题 -1，二级页表的页目录表相关计算

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCP5q1wr36vAFr1FIhejmMVYLlrV8oQACLRNrG8YquVbxb7BcreTxZQEAAwIAA3gAAz0E)

本题应该选 C。

这类题有计算公式，但是比起背公式，不如模拟或者数学归纳法找规律来的速度快。

采用列优先的方式，m1,1 存储在 0，m2,1 存储在 1，m2,2 存储在 2，m3，1 存储在 3，m3,3 存储在 5，m4,1 存储在 6，m4,4 存储在 9，m5,1 存储在 10，m5,5 存储在 14，m6,1 存储在 15，m6,6 存储在 20，所以 m7,2 存储在 22。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCP9q1wxGQLSlzOIs1aGkB7nHVpUJcQACLxNrG8YquVZiGdm3UbXbHwEAAwIAA3gAAz0E)

本题应该选 D。

这类题也是纯模拟，入栈序列为 a,b,c,d,e，按照题设模拟：

push：a

push：a，b

pop：a，输出 b

push：a，c

pop：a 输出 c

push：a，d

push：a，d，e

pop：a，d 输出 e

所以应该是 bce。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQABatcMz6OjjhKb_kKjOT_Xuhu6sR0AAjETaxvGKrlWStcZ9jMzhUsBAAMCAAN4AAM9BA)

本题应该选 A。

高为 5，有 10 个结点，高为 5 也就意味着有 5 行。

假设 5 行均存满，也就是一个高为 5 的满二叉树，需要 2^5-1=31 个存储空间。

由于不能确定到这 10 个结点具体的位置，所以要考虑上述最坏情况，也就是 31。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQFq1w0v-0bo0hN9nOKkvSSGmYe9HQACMhNrG8YquVbzU7c4gG4yigEAAwIAA3gAAz0E)

~~本题应该选 A。~~

~~属于背书题，T 的后根遍历=F 的中序遍历，也就是 A。~~

![4 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTNq12RAbBCEjrmdDjeJeGoXOBMCtgAClBRrG8YquVafqweIxUYZlQEAAwIAA3gAAz0E)

树的后序遍历=二叉树的中序遍历。

本题问的是森林，森林的先序遍历=二叉树的先序遍历，森林的中序遍历=对应二叉树的中序遍历，所以可以直接求出二叉树的结构，然后求出其后序遍历如下图：

![4 订 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTRq12WTjgAB-C4yiK9EQP0oslQH13UAApoUaxvGKrlWDtnSkK4DbOEBAAMCAAN5AAM9BA)

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQJq1w1Y3FWkSeNNRdXpPUyTUk62OgACNBNrG8YquVb3kJVPmDr3RAEAAwIAA3gAAz0E)

本题应该选 B。

注意本题是二叉排序树，而不是其他树。

采用纯模拟法，对于 B 构造出来的树如下图所示：

![5 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQNq1w3gtAn-kNCjPoUb3XcQNzqgQwACNRNrG8YquVaP8ANX1H0n3wEAAwIAA3kAAz0E)

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQRq1w4CTZvySTVlxb05xfGLeahqxQACNhNrG8YquVYCHGAN5iP3yQEAAwIAA3gAAz0E)

本题属于背书题，应该选 B。

但是我觉得这道题得回头再来思考这是为什么。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQVq1w4ln1hFG0aQlyX1DhwSxQYyjQACNxNrG8YquVaXEetZI88ycQEAAwIAA3gAAz0E)

本题应该选 A。

使用克鲁斯卡尔算法，也就是选择权值最小的边：

b-f，b-d，a-e。

选出前三个，就可以选出来是 A 了。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQZq1w52wVOJzt6k-jXGwU0JPAFa4gACOBNrG8YquVZP6IVghgABMIABAAMCAAN4AAM9BA)

本题应该选 B。

对于 C，增加关键路径长度必然会延长工期。

对于 D，缩短关键活动不一定会缩短工程周期，假设有两个相同长度的关键路径且没有任何相同的边，缩短其中一条另一条依旧是关键路径。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQdq1w7k95Wq0pZb6IYe0ZqvPFBPYQACORNrG8YquVZuF3cXj9cgEgEAAwIAA3gAAz0E)

本题应该选 C。

对于 1，堆可以视为一棵完全二叉树，因为其性质是符合完全二叉树的。

对于 2，由于上一条性质以及堆的计算方式，可以采用顺序存储的方式保存堆。

对于 3，堆并非二叉排序树，以小根堆为例，小根堆是最小的值在堆顶，而次层比其大，不符合二叉排序树中序遍历为升序序列的特点。

对于 4，大根堆的次大值一定在根的下一层，如果不在下一层，那么调整堆的时候会慢慢浮上来。

所以，1,2,4 正确，也就是 C。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQhq1w_XGIuaWMoxBXjImzr5cu4ggAACPRNrG8YquVZ84o8tKkcHTAEAAwIAA3gAAz0E)

本题应该选 B。

一棵 4 阶 B 树每一层除了根节点之外至少含有 4/2 向上取整 -1 =1 个关键字，至多有 4-1=3 个关键字，所以模拟如下图：

![10 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQlq1xFW56gMEwfNONtXo_IEXNEyuAACShNrG8YquVZNZXX8TVYprgEAAwIAA3kAAz0E)

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQpq1xFo5NoOgeABSPoyBTiEqnffFwACSxNrG8YquVZywgKz4K3-LwEAAwIAA3gAAz0E)

本题应该选 A。

对于 1，是正确的，取极端情况考虑，已经有序，直接插入排序只需要比较 n-1 次，而简单选择排序需要比较 n^2 量级次。

对于 2，直接插入排序和简单选择排序都不需要额外的空间。

对于 3，直接插入排序的移动次数通常来讲是大于简单选择排序的，因为对数组进行移动和交换的开销不同。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQtq1xHvqfnhdKxe6NMNza_GkJPR7QACThNrG8YquVY5DAt8xZY7RgEAAwIAA3gAAz0E)

本题应该选 B。

对于 1 和 3 显然和机器字长相同。

对于 2，指令寄存器的大小=总容量/PC。或者从其他角度考虑，例如超长指令字。

对于 4，浮点寄存器则需要考虑任务。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQxq1xI_QdWWQxWTz0JEihu1EzP2fwACTxNrG8YquVZVSLV32QyxOgEAAwIAA3gAAz0E)

本题应该选 A。

x 的机器数是 C800,0000H=1100,1000,0000,0000,0000,0000,0000,0000B。

按照 int 解释，也就是 -2^31+2^30+2^27=-16×2^27+8×2^27+2^27=-7×2^27，也就是 A。

按照 float 解释，也就是符号位为 1，阶码为 1001,0000B=128+16=127+17，所以次数应该是 17，也就是 -2^17，显然题目里没有这个选项。

这类题要注意是 int 还是 unsigned int，不要解释错了。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQ1q1xM5yIBMrgWqRUcJys1JVfbILgACVxNrG8YquVZhTzlwlkZHmgEAAwIAA3gAAz0E)

本题应该选 D。

注意边界对齐，a 的首地址是 2020,FE00H，也就是 x1 的首地址是 2020,FE00H，x2 的首地址是 2020,FE04H。

采用小端法，x2 的 00 存储在 04，第二个 00 存储在 05，34 存储在 06，也就是 D。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQ5q1xOy8CPUemEc5VYojKUBLxhhjwACWBNrG8YquVa6Maw_3QjvdwEAAwIAA3gAAz0E)

本体应该选 D。

显然 D 是错的，TLB 和 Cache 都是由 SRAM 存储器组成。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCQ9q1xPzxZICDCEqyaK3V6ar8NLrggACWRNrG8YquVY1WXaIoZTpmgEAAwIAA3gAAz0E)

本题应该选 A。

有 48 条指令，也就是需要 6 位存储，采用 4 种寻址方式，也就是需要 2 位存储。也就是指令总共消耗 8 位，还剩下 16-8=8。由于是直接寻址，所以寻址范围没有负数，应该选 A。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRBq1xRadJg8mMfqB5v1AmNm87DABQACWhNrG8YquVa94ga3OUCu7QEAAwIAA3gAAz0E)

本题应该选 B。

本题问的是理想情况下，在理想情况在，显然单周期 CPU 恒定 CPI=1，基本流水线 CPU 稳定后理论值为 1，超标量流水线 CPU 的 CPI<1。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRFq1xYeDuy3lOmOTdL5b_O657EmzwACYxNrG8YquVasqHG3xd6RiAEAAwIAA3gAAz0E)

本题应该选 A。

对于 A，trap 属于内部中断，也就是异常。异常分为故障，陷阱和终止。

对于 B 和 C 显然正确。

对于 D，接着 A 说，故障一般是返回当前指令，陷阱一般是到下一条指令。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRJq1xgJHRvcC1WubKQHVqZCd8p_nAACbRNrG8YquVbFDgQi1BHcIAEAAwIAA3gAAz0E)

本题应该选 C。

这类题如果给了公式或者括号内的提示，那么这些是最大的，以往的经验都需要忽略。

根据公式，首先计算每秒传送次数。由于 80bit 的信息，也就是 64bit 的数据分 2 个时钟周期传送，每个时钟周期传送 2 次，可以得知在一个时钟周期内传递 2 次 16bit 的数据，也就是说每个时钟周期传送 1 次 4B 的数据。

所以 2.4G×4B=2.4G×8B=19.2GBps。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRNq1xmpufSL9mcvGnD_PkhgiKA4WQACchNrG8YquVacIx-Nh9hMGQEAAwIAA3gAAz0E)

本题属于背书题 C。

对于 1，缺页属于内部中断，异常中的故障。

对于 2，定时器到时属于外部中断，可以理解为 RR 相关。

对于 3，网络数据包到达可以理解为 IO 相关。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRRq1xoE8k2LDUOV2ryZfNSS7l8dcAACdRNrG8YquVY0QSdbybaouAEAAwIAA3gAAz0E)

本题应该选 B。

本题属于背书题。

对于 A，CPU 处于关中断状态下也可以响应不可屏蔽中断。

对于 B，得看是否处于开中断状态下，所以错误。

对于 C，一般来讲是对的。

对于 D，可以改变处理优先级，而不是响应优先级。响应优先级的决定因素是硬件，处理优先级的决定因素是软件。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRVq1xp40Ip88Z1hiN5W7JyGPC_L7QACdhNrG8YquVbWk97x8Po3JwEAAwIAA3gAAz0E)

本题应该选 C。

对于 A，由于采用的是周期挪用，所以每准备好一次数据发一次总线请求（并非中断请求）

对于 B 属于背书题，如果不这么做会导致数据丢失。

对于 C，是周期挪用，所以 CPU 可以访问主存。

对于 D，属于 DMA 流程。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRZq1xrFYywdq2Gor069KOyXR7VChQACfRNrG8YquVZD3okC7YdxVgEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，显然是错误的，各个进程可以写可以读，只不过得采用类似读者写者问题或者特定的规律访问。

对于 B，系统文件打开表中只有一个 F，正确。

对于 C，用户打开表不同，例如访问权限等。

对于 D，关闭 F，得看是不是最后一个，所以错误。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRdq1xsohbgmuhwtFMot3RlsaCM_rAACfxNrG8YquVbAqXNWmLLz9AEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRhq1xtEL-7NYJF3EsyQte0Td4pxagACgBNrG8YquVbSQqZI7yoTvAEAAwIAA3gAAz0E)

本题应该选 D，属于背书题。

复盘一下硬件做的事情：关中断，保存断点（PC），中断服务程序寻址，其他都是软件做的事情。

这道题给自己算错，因为背书背错了，以为中断屏蔽字是硬件做的，中断屏蔽字本身就是一个软件的东西。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRlq1xuX4I5uiAOLDwp8yweSvD_wHQACghNrG8YquVY3XNhPxZyhvQEAAwIAA3gAAz0E)

本题应该选 D，属于背书题。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRpq1xu9V_-m1Har34lB5NkEX14AAVUAAoMTaxvGKrlWLqn1NqySZXMBAAMCAAN4AAM9BA)

本题应该选 B。

首先计算 A 和 B 仍需数量，对于 P1 是 2,1，对于 P2 是 1,0，对于 P3 是 2,2。

然后计算剩余资源，得到序列是 1,0。

1,0 可以匹配到 P2，所以可分配资源变为 3,1，对比可以得到 P1。

分配给 P1 后，还剩下 5,4，显然可以支持 P3。

所以顺序应该是 P2，P1，P3。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRtq1xxYEj9C_rk-DSLOF1WW6aOCJwACjBNrG8YquVaP3uADMgcI7AEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，缺页率越低，显然效率越高。

对于 2，当缺页时，系统需要从磁盘调数据到内存，所以磁盘读写时间越少，效率越高。

对于 3，访问页表需要访问内存，访问内存时间越短，效率越高。

对于 4，显然。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCRxq1xzWC4Xsm62pcgY2W3zCFMqUkQACjRNrG8YquVbBRTZEWCWd-gEAAwIAA3gAAz0E)

本题应该选 B。

虚拟地址空间是独有的。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCR1q1xzvB1rNBE-6gs2eufBmcrPehAACkBNrG8YquVaJaTkW50P5_AEAAwIAA3gAAz0E)

本题应该选 D。

属于设备无关性软件方面的知识。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCR5q1x0Uu1LtzykAAVp6iji-v51vs48AApMTaxvGKrlWPcu43IiXJFsBAAMCAAN4AAM9BA)

本题应该选 B。

由于 4 字节存放索引节点，所以文件数量上限是 2^32，60B 存放文件名，所以文件名上限是 480 位里放 26 个字母的个数。

显然前者更小。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCR9q1x1tAAFBeswSviaIMsCEVeu1adMAApgTaxvGKrlWeT55NMtztLMBAAMCAAN4AAM9BA)

本题应该选 C。

属于背书题，互斥机制主要是 4 点，忙则等待，有限等待，空闲让进，让权等待，可以不实现让权等待，也就是 CPU 空转。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSBq1x29Vtt3fXD6Qk8tvYn0fFVF1wACmhNrG8YquVY6_ldQoRLwOwEAAwIAA3gAAz0E)

本题应该选 C，看图说话。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSFq1x3rnfqgvSFhwnaRUDzGtCnLHAACnBNrG8YquVYLvKCgSA8TjwEAAwIAA3gAAz0E)

本题应该选 B。

对于 B，虚电路只是固定的路径，但是不需要预分配太宽。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSJq1x4SxKClCD-efxe2H8mSKKa_LAACnRNrG8YquVad16rSTIh6pgEAAwIAA3gAAz0E)

本题应该选 C。

路由器可以隔离广播域，交换机可以隔离冲突域。

也就是说，冲突域应该是 4 个，广播域应该是 2 个。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSNq1x47R8odBkOA_3dtxez2u8elNgACnhNrG8YquVYRVVtqKlo2OAEAAwIAA3gAAz0E)

本题应该选 D。

采用停止等待协议传输数据，Td=1000B/10kbps=8000bit/10kbps=800ms。

所以，信道的利用率应该是 800/(800+800+400)=800/2000=40%。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSdq1yCL-LGPfDvZkJAtR5yLAQsEWgACqhNrG8YquVZ1bSe-DVtnsQEAAwIAA3gAAz0E)

本题应该选 A。

本题考察的是 RTS，CTS 帧，第一个是 DIFS 间隔，后续三个都是 SIFS 间隔。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCShq1yHJ3DIzKtOFl4Wy5XRKVdIwAgACqxNrG8YquVYexK9OPjuxzQEAAwIAA3gAAz0E)

本题应该选 D。

本题问的是最长时间，最长时间也就是拥塞避免窗口小于等于 8KB 的时候。所以 8-32KB 总共消耗 32-8=24 个 RTT，也就是 48ms。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSlq1yJjUUTg_kJiazDFWihfeq57EQACrBNrG8YquVb66KjN6XGMmgEAAwIAA3gAAz0E)

本题应该选 C。

甲在最开始建立连接的时候，TCP 连接序号是 1000，也就是说建立连接消耗一个序号，开始有数据的第一个序号是 1001。

在断开连接时，考虑的是第一个 FIN，也就是 5001，所以最后一个有数据的序号是 5000。

所以，5000-1001+1=4000。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSpq1yMGvLzXeWYvvFHfc3u54FyvjAACrRNrG8YquVabNGgGSL31fwEAAwIAA3gAAz0E)

本题应该选 D。

对于最短时间，局域网委托本地域名服务器查询 DNS，命中缓存，查询 DNS 消耗 1RTT，获取 index 消耗 1RTT，总计 2RTT。

对于最长时间，局域网委托本地域名服务器查询 DNS，本地域名服务器委托根域名服务器查询 DNS，根域名服务器委托顶级域名服务器查询 DNS，顶级域名服务器委托权限域名服务器 1 查询 DNS，权限域名服务器查到之后直逐级返回，此时消耗 4RTT，获取 index 消耗 1RTT，总计 5RTT。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCStq1yQxexh9wbigqc8laafS4bKL2AACsBNrG8YquVbTjHbaJ7VEnwEAAwIAA3gAAz0E)

解：

(1)

1. 分别遍历 S1，S2，S3，每个元素为 a，b，c
2. 计算具体的 D
3. 如果当前的 D 小于此前最小的 D，更新
4. 遍历完 3 个数组后，返回 D

(2)

```c
int abs(int x){
    if(x<0){
        return -x;
    }
    return x;
}

int get_D(int a,int b,int c){
    return abs(a-b)+abs(b-c)+abs(c-a);
}

int solve1(int S1[],int S2[],int S3[],int n1,int n2,int n3){
    int min_D=get_D(S1[0],S2[0],S3[0]);
    int ans_a=0,ans_b=0,ans_c=0;
    for(int i=0;i<n1;i++){
        for(int j=0;j<n2;j++){
            for(int k=0;k<n3;k++){
                int curr=get_D(S1[i],S2[j],S3[k]);
                if(curr<min_D){
                    ans_a=i;
                    ans_b=j;
                    ans_c=k;
                    curr=min_D;
                }
            }
        }
    }
    printf("%d %d %d",S1[ans_a],S2[ans_b],S3[ans_c]);
    return min_D;
}
```

(3)

时间复杂度：O(n^3)

空间复杂度：O(1)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCSxq1yxI2aKtF1IhGENfS7D7ArilagAC8hNrG8YquVb82vKI9TKDTQEAAwIAA3gAAz0E)

解：

(1)

哈夫曼树。

(2)

1. 对于一个二进制串，遍历其每一个值，记指向当前值的指针 l1，指向树的指针一开始指向根节点，为 l2。
2. 如果 a=0，那么指针指向左孩子
3. 如果 a=1，那么指针指向右孩子
4. 如果当前结点为叶节点，那么解析，l2 指针返回根节点
5. l1 指针向后移动一位
6. 重复 1-5，直到 l1 为空

(3)

- 建立一棵仅包含根节点的空二叉树（左分支代表 0，右分支代表 1）
- 逐个插入判定：依次将每个字符的二进制编码串插入到二叉树中。对于每一个编码串，从根节点出发，根据编码位（0 走左分支，1 走右分支）向下检索或创建新节点：
  - 冲突情况 ①（当前编码是已有编码的前缀）：在向下检索的过程中，若途经了某个已经被标记为有效字符的节点，说明该已有字符是当前编码的前缀，不具有前缀特性，判定失败退出。
  - 冲突情况 ②（已有编码是当前编码的前缀）：当当前编码的所有位处理完毕到达终点节点时，若该终点节点已经被标记过字符，或者该节点已经存在子分支（即该节点是非叶子节点），说明当前编码是已有其他编码的前缀，不具有前缀特性，判定失败退出。
  - 无冲突：若未发生上述冲突，则将当前终点节点标记为该字符（作为叶子节点保存）。
- 判定成功：若所有字符的编码均能成功插入且未触发上述任何冲突，则该字符集的编码具有前缀特性。

用构造的方法来判断更好，而不是采用比对前缀的方法。

- 存储与字典序排序：将字符集中所有字符的二进制编码存入一个字符串数组中，并将该数组按字典序从小到大进行排序。按字典序排序后，若存在某个编码是另一个编码的前缀，则较短的前缀编码在数组中必然紧邻排在较长编码的前面。
- 逐对相邻比对判定：遍历排序后的字符串数组，依次比较每一对相邻的编码字符串 str[i] 与 str[i+1]：
  - 冲突情况：若 str[i] 的长度小于等于 str[i+1] 的长度，且 str[i+1] 的前 len(str[i]) 位字符与 str[i] 完全相同，说明 str[i] 是 str[i+1] 的前缀，破坏了前缀特性，判定失败退出。
  - 无冲突：若当前相邻的一对编码不满足前缀关系，则指针后移，继续检查下一对相邻编码。
- 判定成功：若遍历至数组末尾，所有的相邻元素均未发生前缀冲突，则该字符集的编码具有前缀特性。

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCS1q1y_4MAxZQP2KpfyKJ2NtFcg8MQACAxRrG8YquVa93qgwsm0SUQEAAwIAA3gAAz0E)

解：

(1)

乘法可以通过加减法和移位模拟实现。

(2)

判断循环是否结束；

~~判断是否 +1；~~

订：判断是否加法。

判断是否应该移位。

(3)

没有乘法指令的时候执行时间最长，有乘法阵列器的时候执行时间最短。

对于没有乘法指令的情况，需要通过多个指令模拟，一般来讲需要多个指令周期。

对于使用 ALU 和移位器的情况，一般只需要一条指令即可执行完毕，时间上大约是 1 条指令。

对于乘法阵列器只需要一个流水段就可以执行完毕，可以理解为一个时钟周期内。

(4)

x=0111,1111,1111,1111,1111,1111,1111,1111B=7FFF,FFFFH.

均为：0000,0000,FFFF,FFFEH。

umul 未溢出，imul 溢出。

高 n 位均为 0 则不发生。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCS5q1zANXtg8js7epUZbZdA8Vg6YtwACBBRrG8YquVZeUkXdzO5NpgEAAwIAA3gAAz0E)

解：

(1)

数据区容量为 32KB，也就意味着总共 32KB/64B=2^9 个 cache 行。由于采用 8 路组相联，也就是总共 2^9/8=64 组，对应 6 位。

所以，tag 号应该是 32-6-6=20 位。

LRU 应该占 3 位。

没有修改位。

(2)

主存地址位 0080,00C0H，显然是边界对齐的，所以只需要考虑一个主存块能装多少个 int 型数据。

一个主存块可以存 64/4=16 个 int 型数据，所以应该缺失 1024➗16=64 次。

(3)

1. 硬件将 0001,0003H 解释为 0000,0000,0000,0001,0000｜,0000,00｜00,0011B，并由于 2 进制属性，自动被切分为 tag 号：00010H，组号为 00H，块内偏移量为 03H。
2. CPU 根据地址中间 6 位组号 000000B 定位到指令 Cache 的第 0 组，并行比较第 0 组的 tag 号有没有 00010H
3. 如果有且有效位为 1 且 tag 匹配，那么命中 cache，根据偏移量选取正确的数，更新 LRU 位
4. 如果没有，那么 cache 缺失，CPU 暂停当前指令执行，向主存发出读请求，主存块起始地址为 0001 0000H
5. 从主存中读取包含该指令的整个主存块，将该 64B 主存块写入指令 Cache 第 0 组中的任意一个空闲行（如果有的话），将该行的有效位置为 1，Tag 设为 00010H；如果没有空闲行，那么根据 LRU 规则将第 0 组的最不常用行替换掉，并将该行的有效位置为 1，Tag 设为 00010H
6. 回到当前指令重新读取，CPU 重新执行访问 cache 的过程，此次命中，并根据偏移量选取数据，更新 LRU 位

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCS9q1zA524-XEMi7QUKgPs6lc6qexQACBxRrG8YquVacxlFiSCKFcwEAAwIAA3gAAz0E)

解：

```c
semaphore S1=0;
semaphore S2=0;
semaphore S3=0;
semaphore S4=0;

cobegin
  process A(){
    执行 A;
    V(S1);
  }
  process B(){
    执行 B;
    V(S2);
  }
  process C(){
    P(S1);
    P(S2);
    执行 C;
    V(S3);
  }
  process D(){
    执行 D;
    V(S4);
  }
  process E(){
    P(S3);
    P(S4);
    执行 E;
  }
coend
```

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTBq1zBNFGf979IWmDY21rwqkRXAIAACCRRrG8YquVbW_K9UU-r8IgEAAwIAA3gAAz0E)

解：

(1)

`a[0][0]` 的虚拟地址是 1080,0000H。由于 1024×4B=2^12B=1,0000,0000,0000B=0000,1000H。

所以，`a[1][0]` 的虚拟地址是 1080,1000H，`a[1][2]` 的虚拟地址是 1080,1008H。

由于 1080,1008H=0001,0000,10｜00,0000,0001｜,0000,0000,1000B，所以页目录号为 00,0100,0010=042H，页号为 001H。

由于页表项大小为 4B，页目录起始地址为 0020,1000H，第 42H 个页表项也就是 0020,1000H+0000,0042H×4B=0020,1000H+0001,0000,1000H=0020,1000H+0000,0108H=0020,1108H

页目录项中放的页框号为 00301H，~~所以页表对应的页表项物理地址应该是 0030,1008H。~~

订：这个上次也错了，不用看页内偏移量。页框号为 00301H，也就是页物理地址应该是 0030,1000H。又由于原始的页号是 1，所以应该对应的是 0030,1000H+0000,0004H=0030,1004H。

(2)

数组 a 在虚拟地址空间所占区域必须连续；

数组 a 在物理地址空间所占区域不一定连续。

(3)

按行遍历局部性更好。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTJq1zD0ijfHSUH-8HFc-m6Y8pW6swACCxRrG8YquVax8yFfQtyuQAEAAwIAA3gAAz0E)

解：

(1)

在 R2 路由器配置如下。

需要配置 NAT 表。

外网 IP 地址：203.10.2.2

外网端口号：80

内网 IP 地址：192.168.1.2

内网端口号：80

R1 路由器可以通过动态学习。

(2)

H2 发送 P 的源 IP 地址是 192.168.1.2，目的地职是 203.10.2.2

经过 R3 转发后，源 IP 地址是 203.10.2.6，目的地址是 203.10.2.2

经 R2 转发后，源 IP 地址是 203.10.2.6，目的地址是 192.168.1.2

### 408 2021 真题 2 刷

- 分数为：148
- 第 43 题 -1，主存寻址空间大小相关。
- 第 46 题 -1，背书错误，扇区划分是在物理格式化的问题。

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTVq2E-yA5BQfn19T4MGCIJW3bg4ZQACARNrG89ByVZpPwVTrb7ccwEAAwIAA3gAAz0E)

本题应该选 D。

p 是尾指针，如果删除的不是唯一的一个元素，那么根本没有 p 的事情。

只有在删除唯一一个元素的时候，需要把 p 指向头节点。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTZq2FBoWeJMeULoONztoOodIFtqEgACBBNrG89ByVb-D0fkFF8FfQEAAwIAA3gAAz0E)

本题应该选 D。

受限队列，本题考察的两端入队 1 端出队。

采用模拟。

对于 A，右侧入队 1,2，左侧入队 3,4,5。

对于 B，右侧入队 1,2，左侧入队 3，右侧入队 4，左侧入队 5

对于 C，左侧入队 1,2，右侧入队 3，错车入队 4，右侧入队 5。

对于 D，左侧入队 1，发现无法入队 2。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTdq2FEQKjc7GQ4jXrOoYYRqmOeGUwACBRNrG89ByVbNwS6CJaxQ0AEAAwIAA3gAAz0E)

本题应该选 B。

按行优先的方式存储，由于 0,0 存储地址是 100，33 存储地址是 220，可得 3,0 存储地址是 217。所以，一行是 217-100=117，117/3=39，一行有 39 个元素。

所以，5,0 的地址应该是 217+39×2=295，5,5 的地址应该是 295+5=300。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCThq2FGmP3Zxe42L5mM1nEPNrVgf9gACBhNrG89ByVa0zacieqkjuQEAAwIAA3gAAz0E)

本题应该选 C。

按照题目可以构造出 T 的结构如下图：

![4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTlq2FJL6bXdsyHtSpupT079X3PpngACCBNrG89ByVYvQjIy7uZK9QEAAwIAA3cAAz0E)

根据图可知 F 树的个数是 3 个。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTxq2FZjR4bRkpaKBXIWLWCsg74LKwACHhNrG89ByVbnjWhr7ueaRgEAAwIAA3gAAz0E)

本题应该选 B。

根据题设构造哈夫曼树即可，如下：

![5 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCT1q2Fq8KKR7gWoxT6BNkLMDnuGHhQACQxNrG89ByVaDCiBQV8taAAEBAAMCAAN5AAM9BA)

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTpq2FMQHePp6PYZND27DK-05bIqEQACDRNrG89ByVY7r6PhczLglgEAAwIAA3gAAz0E)

本题应该选 D。

如下图所示，插入 23 后，会导致 20 不平衡。很显然是右孩子的左子树导致的不平衡，所以采用 RL 操作。

![6 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCTtq2FY64Q07kHQ8QsrS4leOq5uuGwACHRNrG89ByVZfPzTwn218LwEAAwIAA3kAAz0E)

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCT5q2FrQoXVJWOp1AVnWsgABu_kgfuUAAkQTaxvPQclWLmLazbGfo2MBAAMCAAN4AAM9BA)

本题应该选 A。

采用模拟法，显然入度为 0 的结点只有 A，所以开始是 A，然后只能选 B，然后只能选 C，然后只能选 D，然后只能选 E，然后只能选 F。

所以拓扑排序只有 1 条。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCT9q2Fsy65G6HBzEJCsC3DMdXFHXdwACRRNrG89ByVZAsudonV4q2AEAAwIAA3gAAz0E)

本题应该选 C。

对于迪杰斯特拉算法，本题的要求是起点为 1。

所以对于 1，一开始是已经好了，is 数组打✅，然后先看最短的路径，1 出去的路径有 1-5,1-3,1-2，也就是 1 到 2,1 到 3，1 到 5 的最短距离分别为 26,3,6，显然可以确定 1-3 为确定的路径。

经由 3 出发，可以到 2，所以可以更新到 2 的最短路径是 25，然后应该选择 1-5 当最短的边，所以现在确定了结点 1、3 和 5。

从结点 5 走，可以到 2,3,4，显然可以更新到 2 的路径为 21，到 3 的路径依旧为 3，到 4 的路径变更为 14，到 5 的路径依旧为 6。此时选取第二天边结束，准备选取第 3 条边。

所以也就是 C。

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUBq2FtD8eWE8FcXRue26SwGepteogACRhNrG89ByVYqCg8yRmf-2gEAAwIAA3gAAz0E)

本题应该选 A。

高度为 3 的 3 阶 B 树，对于 3 阶 B 树，一个结点最多有 2 个关键字，至少有 1 个关键字

由于第二程有 4 个关键字，又由于每一层都必须是满的，所以只能如下图所示：

![9 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUFq2Fwl8_uGw1jJen7QqJE6ubeSbwACSxNrG89ByVZDKjte0k9eoQEAAwIAA3kAAz0E)

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUJq2FxS9zckre_tynjCBZ_xPAia5wACTBNrG89ByVaDelfrnY_i2wEAAwIAA3gAAz0E)

本题应该选 C。

采用低位优先，也就是第一趟排序后应该是：151,301,372,892,93,43,485,946,146,236,327,9。所以 372 之前应该是 301，之后应该是 892。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUNq2Fzl-id_W6VobTC1qrmOlRvwlQACUBNrG89ByVaCC5Y26MGj4AEAAwIAA3gAAz0E)

本题应该选 B。

采用纯模拟法如下，注意堆应该是一棵完全二叉树。

![11 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCURq2F2HC1b0ynD-L4w43tU_JUnJqQACVBNrG89ByVZoG5Hz6tEN4AEAAwIAA3kAAz0E)

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUVq2F2aKgqblTYj6sP5Y5GYqQPJGAACVRNrG89ByVZ4PbqiYWzttQEAAwIAA3gAAz0E)

本题应该选 D。

P=10^15，而千万亿=10^15，所以 B 和 C 本质是一个意思。亿亿是 10^16。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUZq2F4Px91rQbuOxNWa_nD48XPa9QACWhNrG89ByVZjUoY3PFhbMgEAAwIAA3gAAz0E)

本题应该选 D。

采用纯模拟法，如果是无符号数，显然 `z<y<x`，题设没有这个选项。

如果是有符号数，那么显然 z 是最大的，因为 z 是正数。对于 x 和 y，由于 x 更接近 -1，所以 x 更大。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUdq2GACKoBGCVvmqkRiX4ou3zoxUQACYhNrG89ByVZcbO6ZfVcV5QEAAwIAA3gAAz0E)

本题应该选 A，显然如此。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUhq2GCAjt2CQzqgT_vPyhj9A5VtiAACZRNrG89ByVYwOZ7IGjS-QAEAAwIAA3gAAz0E)

本题应该选 C。

这类题也是经典题，先考虑位扩展，显然位扩展应该从 8 位扩展到 32 位，所以也就是位扩展需要 4。

然后考虑字扩展，RAM 区域为 00,0000H-3F,FFFFH，也就是 0011,1111,1111,1111,1111,1111B，对应 2^22 个字。

所以 2^22/512K=2^22/2^19=8。

所以也就是需要 4×8=32 个芯片。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUlq2GHVsLzyd9AjrRohSt16F8fdlgACdRNrG89ByVasyKwUomWCwgEAAwIAA3gAAz0E)

本题应该选 A。

Cache 数据区大小为 32KB，主存块大小为 32B，采用直接映射的方式，也就是需要 32KB/32B=1K=1024，也就是需要 10 位的 cache 位，也就意味着 tag 位是 32-10-5=17 位。

由于采用回写的策略，所以需要 1 位的脏位。

cache 自带 1 位的有效位，所以总共需要 17+1+1+32×8=275。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUpq2GJl7a2AeUwAAdPH2LsVi3axkTIAAnYTaxvPQclWRFxPEXJ7BxMBAAMCAAN4AAM9BA)

本题应该选 D，属于背书题。

对于 1，指令寄存器也就是 IR，程序员不可见。

对于 2，这个是在 CPU 微程序里的，程序员也不可见。

对于 3，可以理解为某些程序必须得基于寄存器偏移。

对于 4，状态/标志寄存器对程序员半透明。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUtq2GLCHtAR0DMHQir588GQGZxiMwACdxNrG89ByVa2oKKLprkUswEAAwIAA3gAAz0E)

本题应该选 C。

对于 CPU 内部的组织，可以理解为控制通路和数据通路。控制通路主要是 CU，数据通路主要是 ALU 相关。

根据这个，显然可以得知数据通路包含 abcd 涉及到的所有原件。

对于 C，如果没有异常检测的电路，那么就不可能检测出来异常，例如计算越界等。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCUxq2GQ0wEefyZXel-Nbk94EiqEz1wACehNrG89ByVZSj52p7Aor0wEAAwIAA3gAAz0E)

本题应该选 C。

对于 C，如果采用突发传送，那么一次握手的过程中不可能只传输一位的数据。

对于 A，总线指的是两个或多个部件之间交换数据的介质，总的来讲，是交换数据的。

对于 B，时钟频率不等于工作频率的意思是工作频率可以很慢，可以多个时钟频率过去了才执行一次设备。

对于 D 是突发的概念。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCU1q2GTn0KWND04p2F_v-W8lwfK31QACfBNrG89ByVaOjwFgjn178QEAAwIAA3gAAz0E)

本题应该选 A。磁盘驱动器的意思就等同于磁盘。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCU5q2GUFBdASIneCWtf0GRREUHaQVQACfRNrG89ByVZcfOZlbl1e6wEAAwIAA3gAAz0E)

本题应该选 B。

本题实质性考察的是外部中断和内部中断的分类。

对于 A，系统调用属于外部中断，需要到下一条指令执行。

对于 B，缺页属于内部中断异常的故障，需要回到当前指令重新执行。

对于 C，DMA 传送结束属于外部中断。

对于 D，打印机缺纸属于外部中断。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCU9q2GWaX7nE9NC7dG4DY8s0IGQKNgACfhNrG89ByVaQuiE5Z_O1pwEAAwIAA3gAAz0E)

本题应该选 A。

对于 A，CPU 响应和检测中断看的是是否处于开中断状态在，和用户态内核态无关。

对于 B，CPU 只有在检测到响应中断后才能进入响应周期，这句话是对的。

对于 C，进入中断响应周期后，操作系统需要改为开中断的状态，以便别人来打断。

对于 D，CPU 检测到中断请求信号，意味着中断屏蔽字对当前的屏蔽处于 0 位，也就是不屏蔽其打断。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVBq2GZa5zwFZaUl4U0ZLwfRT8I0MwACgRNrG89ByVb5wRsYkfYaMAEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，trap 指令是在传送完必要的参数后，用户程序主动发起系统调用。

对于 B，IO 指令只能在内核态执行。

对于 C，数据传送指令可以解释为两类，一种是通过 IO 操作把磁盘的数据调入内存，还有一种是在通用寄存器内相互操作（当然还有非常多），有些在内核态，有些在用户态。

对于 D，设置断点指令也是有一部分在内核态，有一部分在用户态。对于在用户态的，可以理解为编程时打断点。对于内核态，可以理解为内核开发者调试操作系统内核。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVFq2GdmT-mQ5hU34Dm7OQABFB2gIAcAAoQTaxvPQclWDZK8YC1Zr24BAAMCAAN4AAM9BA)

本题应该选 B。

对于 1 和 2 显然是正确的，对于 3 的意思是说把进程从就绪态变成执行态，这显然是错误的。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVJq2Geh-MRV5VE38ij14xizcOpFYgAChRNrG89ByVb0G4mIW4iq4QEAAwIAA3gAAz0E)

本题应该选 C。

采用排除法，RR 肯定是不需要进程阻塞队列的，所以只剩下 A 和 C，而时钟信息应该存储在进程控制快内。

综上应该选 C。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVNq2GgPzrAhS9EIaHOrx_rWw1TK8gAChhNrG89ByVZBJt2mz5Q5CwEAAwIAA3gAAz0E)

本题应该选 C。

对用户进程的磁道号先进行排序，也就是 176,182,184,187,199，一开始在 184，采用最短寻道的方式，也就是：

184 到 182，总共是 2 个，182 距离 176 是 182-176=6，182 距离 187 是 187-182=5，所以下一步应该是 182 到 187，总共是 5 个。187 到 199 应该是 199-187=12 个，187 到 176 是 187-176=11 个，所以下一步应该是 187 到 176，总共是 11 个。最后只剩下一个了，也就是 176 到 199，总共是 199-176=23。

加在一起，也就是：2+5+11+23=41。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVRq2Gkk8JdEUzOdhHj5pduOz37LRAAChxNrG89ByVYPN7QTJrQQ3AEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，中断处理结束可以理解为 IO 结束，IO 结束意味着从阻塞态变成就绪态。

对于 2，进程阻塞意味着有进程从运行态变成阻塞态。

对于 3，进程执行结束意味着有进程从执行态变成终止态。

对于 4，进程的时间片用完意味着有进程从运行态变成了就绪态。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVVq2GmtfRYfzgAB38gYpKc-RemlvLAAAooTaxvPQclWjnUUl7xFBWABAAMCAAN4AAM9BA)

本题应该选 C。

由于分配了两个固定页框，采用 clock 算法，也就是说应该淘汰页号为 3，然后把页框 60H 分配给页号 02。

所以地址转换之后应该是 C。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVZq2GtwdDKpz4cH3d6OuGE0MAIl3wACkxNrG89ByVYvBn-Vw_QdhAEAAwIAA3gAAz0E)

本题应该选 B，属于背书问题。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVdq2G1p1c2hweTSbL0av5es_zD28wACnRNrG89ByVZRw1TAxmCn5AEAAwIAA3gAAz0E)

本题应该选 A。

属于常识题？以及硬链接软连接。file1 的快捷方式可以理解为软连接。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVlq2G4er3soCDmxNYwcXQwXQVHyzgACoBNrG89ByVZBvQnmgmlDhAEAAwIAA3gAAz0E)

本题应该选 C。

每个进程平均需要某类临界资源 2 个，也就是说 n 个进程每个人握有一个资源的时候，也就是总计 n 个资源的时候，会导致死锁，所以只需要 n+1 即可。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVpq2G8Jqvc2U1wZpR0M8iicf9ojuAACpBNrG89ByVaoWJW_g9nSTQEAAwIAA3gAAz0E)

本题应该选 C。

需要做概念辨析，系统调用指的是用户进程请求操作系统做事情，而不是操作系统自己做事情。

意思也就是说，页置换和进程调度都是操作系统自己做的事情。

而创建新进程是用户要求操作系统做的事情。

生成随机数属于库函数。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVtq2G-BFU4Yt7w0TOmIYqJHklaDjgACphNrG89ByVYH4ELN-QQAAYkBAAMCAAN4AAM9BA)

本题应该选 B。

对于 TCP/IP 参考模型中，从下到上应该是网络接口层，网络层，传输层，应用层。传输层的下一层是网络层，网络层的作用是路由选择。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCVxq2HEGKAy8Yfij08tLhjYuUebGugACqxNrG89ByVazf4yderBTewEAAwIAA3gAAz0E)

本题应该选 A

本题是差分曼彻斯特编码，也就是在边缘跳变的时候才换数。

边缘跳变代表 0，边缘不跳变代表 1，也就是 0.1.1.1.0.0.1 第一个数未知。对比可得应该选 A。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCV1q2HHuCESWsE3n9szxR6tQEbPoJAACrRNrG89ByVYq5nhKeMq_YAEAAwIAA3gAAz0E)

本题应该选 B。

这类题应该采用类似哈夫曼树的思想。

只考虑最后 8 bit，给定题目也就是 10｜00,0000B，号为 1,0，所以可以提前绘制出其树的结构，可以得出：0,10,11 一定存在，且子网掩码分别为 25,26,26，根据这个例子，A 和 C 必然是对的。

考虑另一种情况，10｜00,0000B，但是前 25 位是给定的，所以可以得到 0 是单独的，也就是说，可以得到：10,110,111，所以可以得到 D 是对的。

综上所述，B 是错误的。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCV5q2HJNDQv4KVKu_RyiGP1v4L2_QAACrhNrG89ByVYwQNA1owe7HgEAAwIAA3gAAz0E)

本题应该选 B。

第二个分片的长度为 1560-776=784。784-776=8。

所以，第二个分片长度应该是 796，并且后续还有分片。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCV9q2HJpUAgRXvhbinshBfNc9we4twACrxNrG89ByVbbRf8GT5BRtQEAAwIAA3gAAz0E)

本题应该选 D。

逐个比对即可，A 加第一列得出来应该是：9,20,32,44，B 加第二列应该是...以此类推，然后选最短的，也就是 D。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWBq2HJ3imaNjRe2VxlbqNYgifq6SwACsBNrG89ByVYLUIiVoZl0FgEAAwIAA3gAAz0E)

本题应该选 B。

客户端发送第一个 fin 之后，进入 finwait1，服务端收到后发送 ack，收到 ack 后，客户端进入 finwait2 状态，等待服务端发剩下的数据。服务端发完剩下的数据之后，给客户端发 fin，然后进入 closewait 状态，客户端收到 fin 然后发 ack，进入 timewait 状态。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWFq2HKGN43j3uQpLLFvzv89Xq6m9gACsRNrG89ByVa-SzJYQVoO9wEAAwIAA3gAAz0E)

本题应该选 D。

一个 UDP 首部是 8B，TCP 首部是 20B。12/20=0.6，12/(12+20)=0.375。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWJq2HKaCEsiBlie4JncQ-h8XBp0jwACshNrG89ByVZfJujhXtEHPwEAAwIAA3gAAz0E)

本题应该选 C。

甲在 t0 发送一个 seq 是 501，200B 的数据，并在 t1 收到一个 ack。

也就是说，这个并不是序号 501-700 的 ack，而接收窗口是 500，也就是甲可以发送 501-1000 的数据，但已经发了 501-700，所以真正还可以发送的是 701-1000。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWNq2HKsGOKD1YX_SFSljFA9tfy6FgACsxNrG89ByVasQF1SsDOWBgEAAwIAA3gAAz0E)

解：

(1)

1. 设置一个变量 cnt 记录度为奇数的点的个数
2. 按照行遍历数组，计算出每一行的度
3. 如果度为奇数，那么 cnt+1
4. 重复上述过程，直到遍历完图
5. 判断 cnt，如果 cnt 为 2 或者为 1，那么返回 1，否则返回 0。

(2)

```c++
int IsExistEL(MGragh G){
    int cnt=0;
    for(int i=0;i<MAXV;i++){
        int curr_sum=0;
        for(int j=0;j<MAXV;j++){
            curr_sum+=G.Edge[i][j];
        }
        if(curr_sum%2!=0){
            cnt+=1;
        }
    }
    if(cnt==0||cnt==2){
        return 1;
    }
    return 0;
}
```

(3)

时间复杂度：O(n^2)

空间复杂度：O(1)

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWRq2HS9vIleFcl3Cqcn-muQL5XUuAACvBNrG89ByVbmVN8DbEzfiQEAAwIAA3gAAz0E)

解：

(1)

-10,10,11,19,25,25

由于这是一个排序算法，所以不需要考虑这个算法的具体执行过程。

(2)

n(n-1)/2

(3)

不是稳定的，因为

只需要将比较语句 `if(a[i]<a[j])` 改为 `if(a[i]<=a[j])`

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWVq2HZiz4PDV9ijo_j0FzAKSq_asgACwRNrG89ByVb_ESg_vqDRCQEAAwIAA3gAAz0E)

解：

(1)

ALU 宽度为 16 位，因为字长为 16 位。

~~可寻址主存大小为 2^20✖️2B=2^21B=2MB。~~

订：按字节编址，所以就是按照 B 来算。CPU 一次可以拿 2B，也可以拿 1B。按字编址这道题是 2MB，PC 至少 19 位，不过由于对齐一般而言也是取 20 位。

指令寄存器为 16 位。

MAR 为 20 位。

MDR 为 8 位。

(2)

R 型最多定义 16 个操作。

I 和 J 总共可以定义 2^6-1=63 个操作。

通用寄存器最多有 4 个。

(3)

01B2H=0000,0001,1011,0010B=000000 01 10 11 0010，由于 `R[rd]<-R[rs] op R[rt]`，本题 rd 是 11，rs 是 01，rt 是 10，所以本题应该是 `R[3]<-R[1]-R[2]`。

分析 01B2H，也就是 `R[3]<-R[1]-R[2]`，所以由 B052H-0008H=B052H+FFF8H=B04AH，可得：R1 内为 B052H，R2 内为 0008H，R3 内为 B04AH，没发生溢出。

分析 01B3H，也就是 `R[3]<-R[1]*R[2]`。所以由 B052H\*0008H，也就是前者算术左移。B052H=1011,0000,0101,0010B<<3。由于移出的三位为 101，不全为 1，所以发生溢出，且结果为 1000,0010,1001,0000=8290H，可得：R1 内为 B052H，R2 内为 0008H，R3 内为 8290H。

(4)

符号扩展。

(5)

J 型。

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWZq2HZzdVk1U2cuXuCCJTwhRAlg_wACwhNrG89ByVajrsH4q9P_3QEAAwIAA3gAAz0E)

解：

(1)

虚拟地址为 30 位，页大小为 4KB=2^12B，也就是页内地址是 12 位，所以虚页号应该是前 30-12=18 位，页内地址是低 12 位。

(2)

由于采用 2 路组相联，共 8 组，所以需要 3bit 来存储 TLB 组号信息，也就是高 18-3=15 位为 TLB 标记，接下来 3 位是 TLB 组号。

(3)

TLB 初始为空，首先计算其模 8 后的值。

10,12,16,7,26,4,12,20，模 8 后对应：

2,4,0,7,2,4,4,4.

显然，只有 12,4,12,20 放进去的时候有可能导致 TLB 表项被替换。

进行模拟，12 放进去占第 4 组的 0 号位，LRU 位为 0，4 放进去占第 4 组的 1 号位，LRU 位更新为 1,0。访问 12，LRU 位更新为 0,1，所以访问 20 时，4 号会被淘汰。

(4)

2 位。

这类题属于非常常规的题目，我觉得一分都不能丢。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWdq2HaEOIiAaAdehwqm7tJbrktaYgACwxNrG89ByVYBXaR2kUz9GwEAAwIAA3gAAz0E)

注：本题印刷错误，while 是一个大循环，而不是直接就结束了。也就是说，方法 2 的分号得去掉。

解：

(1)

多个进程需要对同一个信号量进行访问，所以序号互斥进行。

(2)

方法 1 错误，方法 2 正确。

方法 1 在 `while(S<=0)` 处死等，如果此时 s≤0，那么别的用户进程无法申请中断使 S+1。

(3)

不能。

开关中断指令需要在内核区运行，用户态不能运行该指令。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWhq2HaWtnUfcX7Z6-_yCnKmXS8rXgACxBNrG89ByVasMigCiay19QEAAwIAA3gAAz0E)

解：

(1)

ROM 中的引导程序、磁盘引导程序、分区引导程序、操作系统初始化程序。

(2)

物理格式化、分区、逻辑格式化、操作系统的安装

(3)

~~磁盘扇区划分是在分区完成的~~，文件根目录系统建立是在逻辑格式化完成的。

订：磁盘扇区划分是在物理格式化中完成的。

这一整道题属于纯背书的题目。

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCWlq2Ham023k0m6Gaawv5mhW0HKA6AACxRNrG89ByVYlf2rJCvcO2gEAAwIAA3gAAz0E)

解：

(1)

DNS。

从应用层到传输层，通过 UDP 协议。

从传输层到网络层，通过 IP 协议。

从网络层到数据链路层：通过 CSMD/CD 协议封装。

(2)

<00-11-22-33-44-cc, 4>

<00-11-22-33-44-bb, 1>

<00-11-22-33-44-aa, 2>

(3)

分析全流程，最开始的时候 H1 要向本地域名服务器申请 IP，所以 H1 想要向本地域名服务器发送帧，然而 H1 不知道本地域名服务器的 mac 地址，H1 使用 ARP 协议进行探测，源 mac 地址是自己，目的 mac 地址是 ff-ff-ff-ff-ff-ff，交换机 S 收到后，先登记此条记录，然后向除了 4 这条的所有转发，此时 H2 也收到了。

本地 DNS 服务器向 H1 单播发送 IP 地址。

此后 H1 发送 http 请求，然而 H1 不知道 R 的 mac 地址，所以使用 ARP 协议请求，H2 收到了该帧，R 单播回应。

综上所述，至少需要接收 2 个帧，都是 ARP 请求帧，目的 mac 地址是 ff-ff-ff-ff-ff-ff。

### 408 2022 真题 2 刷

- 分数为：146
- 第 13 题低级错误，1 刷也错，非常低级，32 位补码的范围，一定要看清楚数字
- 第 43 题 -1，没写 read
- 第 44 题 -1，双面盘片没乘 2

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZlq2xLVhxJ1bP_GrbW46qWiIxVEZQACcxFrG8ST2VbV8Tj7vCtswAEAAwIAA3kAAz0E)

本题应该选 B。

记总共运行 t 次，也就是 1+2+...+√t，最后大致是 t。

所以，本题应该 B。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZpq2xUKyp6FEbSH95MyZgucXgu92QACdBFrG8ST2VYb5D52Q14AAbYBAAMCAAN5AAM9BA)

本题应该选 D。

这类题应该采用模拟法，也就是：

对于 A，假设入栈队列是 a,b,c，那么出栈序列不可能是 c,a,b，可以判定，所以 A 的表示错误。

对于 B，同样的，假设出栈序列是 c,a,b，那么入栈队列不可能是 a,b,c，所以 B 的表述错误。

对于 C，in 假设为 a,b,c，每个元素一旦入栈就出栈，所以 out 可能和 in 相同，本选项描述错误。

对于 D，in 是 ST 的入栈队列，假设为 a,b,c，那么栈底到栈顶也就是 a,b,c，先全部入栈然后再全部出栈，则可能为倒序，所以 D 是对的。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZtq2xlI2xkVxpZlzHYXbX2R5hxa_gACghFrG8ST2VbtyNAfKVifxgEAAwIAA3kAAz0E)

本题应该选 B。

这类题应该采用模拟法，中序遍历 p 在 q 前且 p 和 q 相邻。

首先分析比较简单的情况，也就是 p 是 q 的左孩子，或者 q 是 p 的右孩子。根据这个论断，那么 1 和 2 是正确的。

接下来考虑二叉排序树，也就是 a 为根，b 为 a 的左孩子，c 为 b 的右孩子，那么是符合 4 这种情况的（当然反过来，p 是 q 双亲的双亲也可以成立）

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZxq2xwTsW-m9C7AAqybYSBWfWpT1wACkhFrG8ST2VY2kWJPSAx16gEAAwIAA3kAAz0E)

本题应该选 C。

三叉数 244 个结点，本题问的是至少，所以应该尽可能的填满。由 1+3+...+3^(h-1)=(3^h-1)/2。

代入公式，$\frac{3^h-1}{2} \ge 244$，也就是 $3^h \ge 489$，也就是 $h \ge 5$ 多，所以 $h$ 最小是 6。

![5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZ1q2xz0i2MqTXZdVp0XZ3sNYX1qRQAClBFrG8ST2VafEyg8ZPvwygEAAwIAA3kAAz0E)

本题应该选 D。

注意这道题问的是正确的是。

对于 A，结点数后者一般小于前者，因为前者有大量的中间废结点。

对于 B，T1 的高度一般是小于 T2 的。

对于 C，由于是定长的，所以一定是相同的层。

对于 D，频次不同一个层这是显然的。这道题一刷的时候我想成频次相同也可以一个层，但是这句话的正确性并不影响 D 本身是对的。

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZ5q2x7bFlu3qOsW9Q3tFvXv4YzijAACmhFrG8ST2Va3i1wWp8WP6QEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，意思是定点数大于边那么 G 一定连通。考虑顶点数为 4，边为 1 的情况，显然不是连通的。

对于 B，意思是顶点数小于边那么 G 一定连通。考虑顶点为 5，边为 6 的情况，4 个顶点最大是 6 条边，那么最后一个是单独的，显然不连通。

对于 C，意思是顶点数等于边 -1 一定不连通。可以用二叉树反驳。

对于 D，意思是顶点数大于边 +1，那么一定不连通。这句话是正确的。顶点数=边 -1 的时候才有机会连通。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCZ9q2x_cmyCZtlK6uJYPZ5reoE3wIgACnBFrG8ST2Vamfs79u1QyPAEAAwIAA3kAAz0E)

本题应该选 B。

如下图所示：

![7 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCehq3bvN-L6ARcZKjUYQORA_LQnqPAAC0xJrG2MQ8FalVZnGI5I5BwEAAwIAA3kAAz0E)

注意这道题问的是时间余量，时间余量=一个活动的最晚开始时间 - 最早开始时间，最晚开始时间=事件的最晚开始时间 - 活动。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaBq2yEooLkGSbXyUZPUS7s92itamAACnxFrG8ST2VaGb44reMpEIgEAAwIAA3kAAz0E)

本题应该选 D。

如下图所示：

![8 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCelq3bzzyqNjB0n6MqfY4zw9PyBfeAAC1RJrG2MQ8FZ5lwxQXh7jPgEAAwIAA3kAAz0E)

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCb5q219RbMcS2x5GZyuLkvrG1keW0QACGRJrG8ST4VbqgkqNEgbdJwEAAwIAA3cAAz0E)

本题应该选 D。

平均查找成功 ASL 本身依赖于什么？

3 一定是正确的，如果选取了不恰当的冲突解决策略，那么 ASL 会增加。

2 也是正确的，因为假设如果采用一个偶数作为散列函数（除留余数法），那么即便选择很好的冲突解决策略，终归要解决重复。

对于 1，装填因子越大，引发冲突的概率就越大。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCb9q21-fUIQ8jQ0NTqAcgAABm8WWkSAAAhoSaxvEk-FWvb1C-LxXu3kBAAMCAAN3AAM9BA)

本题应该选 A。

二路归并的操作是把两个有序表合成 1 个新的有序表。

对于 B，这是划分操作，。

对于 C 和 D 是错的操作。

![11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCcBq21-wSNFTPwoJEOkBJRJxcVP8hQACGxJrG8ST4Vaevv6lprU97gEAAwIAA3cAAz0E)

本题应该选 D。

对于 1，大部分元素有序是快排的劣势。

对于 2，待排序元素很少的情况下，直接插入排序的效率反而更高

对于 3，快排需要 O(logn) 的空间复杂度

对于 4，快排不稳定，直接插入排序稳定。

![12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCcFq21_AsqyzAvEED_e_LBEImgV3-AACHBJrG8ST4VagF3w8lvvqIgEAAwIAA3cAAz0E)

本题应该选 A。

首先计算 CPI，0.8×1+0.2×10=2.8，所以 CPI 应该是 2.8，排除 B 和 D。

然后计算执行时间，由于执行了 10000 条指令，也就是 10000×2.8/10^9=2.8e-05=28us。

![13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaFq2yFFcyg_zrFXsA4T9CGAzIeokAACoBFrG8ST2VZ-k7-9_-3gjQEAAwIAA3kAAz0E)

~~本题应该选 D。~~

~~32 位补码标识的范围显然是 D。~~

一刷的时候这道题也错了，当时还想着哦我一刷错了，太低级了这个错误，结果 2 刷又错了，难绷啊。

![14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaJq2yHfAAE5hpUT3dbfkKjBpRlAhD0AAqQRaxvEk9lWGHIFn6gbhjIBAAMCAAN5AAM9BA)

本题应该选 A。

展开分析，-0.4375，首先确定符号位，显然符号位应该是 1。

然后确定阶码，由于 0.4375=0.25+0.125+0.0625=0.0111B=1.11×2^-2，所以阶码也就是 -2+127=125=0111,1101B。

所以综合也就是 1011,1110,1110,0000,0000,0000,0000,0000B=BEE0,0000H。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaNq2yLpopnDMsCt7Kf9XZPgKFiavgACpRFrG8ST2VZhRAJhjOCj4wEAAwIAA3kAAz0E)

本题应该选 C。

虚拟地址空间大小为 4GB=2^32B，页大小为 4KB=2^12B，也就是后 12 位，对应 16 禁止也就是后 3 个数。

所以，对于虚拟地址 0008,2840H，其页号应该是 00082H=130，也就是页框号是 018，由于存在为是 1，所以应该是 018840H，也就是 C。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaRq2yNbKopI5ehqI8WfA09wzwSKlwACphFrG8ST2VYHIOoXLnyCQgEAAwIAA3kAAz0E)

本题应该选 A。

cache 区数据区容量为 32KB，也就是总共有 32KB/64B=2^9 个 cache 行。由于采用 8 路组相联，所以总共 2^9/8=2^6 组。也就是组号占 6 位。

由于主存块大小为 64，所以主存块应该占 6 位，也就是 tag 号是 32-6-6=20 位。

综上所述，由于是 8 路组相联，所以比较器应该是 8 位，比较的是 tag 号，所以应该是 20 位。

![17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaVq2yPr9UuY1FiAXQgBAovpjNRIZgACqRFrG8ST2VamvOrstHjDQAEAAwIAA3kAAz0E)

本题应该选 C。

对于 A，8192×8192×8bit=8192×8192B=2^26B=64MB，由于存在 8 个，所以总共内存条容量是 8×64MB=512MB。

对于 B，由于支持突发传送，所以采用多模块交叉编址。

对于 C，DRAM 芯片没特别说明的情况下默认采用地址线复用技术，所以地址引脚应该是 13 位。

对于 D，行内缓冲器看的是一行，所以 D 是对的。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaZq2ySPJBEGLFAFre-w04rzrlsC-AACqhFrG8ST2VZEyBrV3OV_oQEAAwIAA3kAAz0E)

本题应该选 B。

对于 1 属于背书问题。

对于 2，CPU 时钟周期的改变并不会影响 ISA。

对于 3，通用寄存器个数和位数是依赖于 1 的，因为得解释这个指令的什么位置是寄存器。

对于 4，加法器的实现可以自由确定。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCadq2yTWDyLwGnZwhv7vTmaHEmvJnwACqxFrG8ST2VYKRh1YPVLEmgEAAwIAA3kAAz0E)

本题应该选 D。

采用类似哈夫曼树的思想，采用 16 位定长指令字格式，地址码为 6 位。由于 2 地址指令有 12 条，也就是 16-12=4，所以剩下 4bit 给后续的使用。

以地址指令有 254 条，由于 1 地址指令还有 8bit 可以使用，留下的应该是 256-254=2bit。

所以，零地址指令最多应该是 2×2^6=128 条。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCahq2yZI0UauM0ONjuOW-DeXPnZPywACrhFrG8ST2VY16HthU0VFMwEAAwIAA3kAAz0E)

本题应该选 A。

属于背书题，预处理 - 编译 - 汇编 - 链接。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCalq2yZssy17qVIpvedylUlS4l7sOAACrxFrG8ST2VYYxgKbQPRooQEAAwIAA3gAAz0E)

本题应该选 C。

对于 ABD 显然正确。

对于 C，外设的准备数据时间如果小于中断处理，那么一次中断处理的开销就会非常大。按照常识考虑，键盘输入肯定比 CPU 慢很多。

![22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCapq2ya9hVOixbmyHr1gFaJYa3lFxQACsBFrG8ST2VaVC2N9Z7FugAEAAwIAA3kAAz0E)

本题应该选 C，属于纯背书的题目，没什么好讲的，只不过还得再去复习一下偏的知识点。

![23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCatq2yb7RVSI9k3DMDh0wQABEqAKAAHPAAK1EWsbxJPZVmuTAf5fHBnmAQADAgADeQADPQQ)

本题应该选 D。

对于 AC 显然是正确的，对于 B，考虑早期的固定分区分配。对于 D，显然是有上限的。

![24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCaxq2ycj__2YnKBufohiLEmkUiVcBAACuhFrG8ST2Vb1RKUiAbOI-wEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

对于 BD 应该产生于文件系统格式化。

![25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCa1q2yeISRgWn-Lz0hv-CyTizLssVAACvBFrG8ST2VYMgzmldHcisQEAAwIAA3kAAz0E)

本题应该选 C。

注意一开始也算一次调度，如下图所示：

![25 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCepq3b2lmK41y8P_Q0z4RI_e4_5CDgAC1xJrG2MQ8FbiBOTz7iMhKwEAAwIAA3kAAz0E)

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCb1q212-aRPu4KFldyhwONx1itGRSwACFhJrG8ST4VYFAAEcD6MinSMBAAMCAAN3AAM9BA)

本题应该选 B。

本题已经把尚需资源数给了，那么直接匹配就可以。匹配可以发现 P0 一定是第一个，然后收回资源，可用资源数当前为 333，发现可以覆盖 P1/P2，也就是总共有 2 个安全序列。

![27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCa5q2yehWqneMS_dd0EihsVO50elxwACvhFrG8ST2VbNY4TLpWoUogEAAwIAA3gAAz0E)

本题应该选 C。

用户态的时候只能执行非特权指令，这道题属于简单的逻辑辨析。

![28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbxq210axHZBEcPClcgBRBKa7NJ5hAACFRJrG8ST4VZO5LGSdD_EvAEAAwIAA3cAAz0E)

本题应该选 D。

对于 1，读文件的时候也就是 IO，可能会变。

对于 2，时间片用完应该从执行态变成就绪态。

对于 3，申请外设也可以理解为 IO

对于 4，可以理解为申请到了 IO。

![29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbtq21yTsYdSKWwHJvMylVa_l7MXcgACFBJrG8ST4Va5vd76LD5aCgEAAwIAA3cAAz0E)

本题应该选 A。

淘汰页是页表满了的时候才淘汰。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbpq21v2A-jt1BfF_dlBCt-IAAFbZCkAAhISaxvEk-FWVdE_fjvowZEBAAMCAAN5AAM9BA)

本题应该选 D。

对于 A，如果采用 FIFO 算法，效果肯定相对而言没有 LRU 好。

对于 B，工作集越大，表示驻留在主存的东西越多，那么缺失的概率肯定就越小。

对于 C，进程的数量越多，显然竞争越大，换入换出的频次就越高。

对于 D，页面缓冲队列越长，意味着缺页后换回的速度越快，但是并不会影响缺页。

![31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCblq21oXzGOhXTH5NwkY3jYV2dHERQACEBJrG8ST4VaNiixc8GAyHQEAAwIAA3cAAz0E)

本题应该选 B。

对于 1，保存断点和程序状态字是中断时硬件做的事情。

对于 2，保存通用寄存器的内容是操作系统做的事情。

对于 3，操作系统负责执行系统服务条例。

对于 4，如果执行的是中断，那么第一步是硬件做的。

![32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbhq21lRAzTXZCKjJK_fNNbIKsLlzQACDhJrG8ST4Va0TG3kFg_hOwEAAwIAA3kAAz0E)

本题应该选 A。

对于 A，驱动设备与 IO 控制方式显然有关。键盘和磁盘的驱动程序肯定不一样。

![33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbdq21hycdmNorPrHdcELnLOPTpoSwACCxJrG8ST4VYIbNTiCh8bogEAAwIAA3cAAz0E)

本题应该选 B。

OSI 参考模型流量控制应该是数据联络层，拥塞控制是网络层。

![34](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbZq21adr9j9TbX_zYlJE2DuAaqY3QACBBJrG8ST4VYeT8VDDP6rWwEAAwIAA3cAAz0E)

本题应该选 C。

题设没有提供任何香农定理的条件，所以不需要考虑香农定理相关的东西。

最大数据传输率也就是 2Wlog2V=2×200k×log2(4)=800kbps，也就是 C。

![35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbVq21YUF-oLzP-YQYhlsTFT55k0UQACAxJrG8ST4VbnLMl904smKwEAAwIAA3cAAz0E)

本题应该选 B。

192 展开是 1100,0000B，72 展开是 0100,1000B。所以网络地址应该是 64。

![36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbRq21SSsRJ5yPvCIXKBxpllRvy8OAAC_xFrG8ST4VYaNCdV1Ogn3AEAAwIAA3cAAz0E)

本题应该选 D。

首先判断默认网关，显然应该是 192.168.1.62，排除 A 和 C。按照 192.168.1.62/27 配置默认网关，也就是后 8 位为 62=0011,1110B。且 32-27=5。

而本机 H 的 60 展开是 0011,1100B，也就是子网掩码是 1110,0000B，也就是 224。

综上所述，子网掩码为 255.255.255.224，默认网关为 192.168.1.62。

![37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbNq21RTRfkggpXgruHzEw3vrJMGmAAC_hFrG8ST4VbWXkVxsqjtyQEAAwIAA3cAAz0E)

本题应该选 B。

下发，也就意味着是 SDN 向流表发，也就意味着从上到下，也就是从北到南。

![38](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbJq21P7xoaNbgABFCwoSTJ1fJMBliMAAv0RaxvEk-FWkAGguRpMzvYBAAMCAAN3AAM9BA)

本题应该选 C。

主机甲和乙建立 TCP 链接，最大断肠 MSS 是 1KB。当甲拥塞窗口变成 16KB 时发生超时，新的门限值边为 8。

所以，1,2,4,8，此后就是线性增长。

![39](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbFq21M8Xg5FRo-KSKvQFO1bHjXU6AAC-xFrG8ST4VbVlp4wPbAHCgEAAwIAA3cAAz0E)

本题应该选 D。

客户 C 和客户 S 已经建立 TCP 连接，数据传输结束后，C 主动请求断开链接。

那么也就是 C 向 S 发 fin，S 收到 fin 后，发 ack 和 fin，S 在发出 ack 后进入 closewait 状态，而 S 得等到 C 的 ack 才可以关闭。

所以，C 至少等待 1650ms，S 至少等待 75ms。

![40](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCbBq20vb-sA-w0xo3dc7OHgyUutB8wAC7RFrG8ST4VbMHsMPTfyywQEAAwIAA3kAAz0E)

本题应该选 B。

从 H 请求与 S 建立 TCP 连接的时刻起，建立起 TCP 需要花费 1.5RTT，捎带要求传输 html 文件，得到 html 文件总共需要 2RTT。

接下来计算图像，由于图像文件大小为 3MSS，考虑拥塞窗口为 1 的情况，所以总共又需要 2RTT 的时间才可以接收到所有的图像。

综上所述，应该是 4RTT=40ms。

![41](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCa9q2yfVT43BYu9X0WxiPReq31PS0QACvxFrG8ST2Va0VN6dgU0_JAEAAwIAA3kAAz0E)

解：

(1)

1. 设置三个全局变量，分别为 bool 型变量 flag，初值为 true，int 型变量 pre，初值为 -3，int 型变量 curr，初值为 -2
2. 采用中序遍历的方法，如果是空节点，那么返回
3. 递归的遍历左子树
4. 判断 pre 是否>=curr，如果成立，那么 flag=false
5. 更新 pre=curr
6. 递归的遍历右子树
7. 主函数调用 isBST，传入参数 T，i=0
8. 返回 flag 的值

(2)

```c++
const int MAX_SIZE=114514;

typedef struct{
    int SqBiTNode[MAX_SIZE];
    int ElemNum;
}SqBiTree;

int pre=-3,curr=-2;
bool flag=true;

void isBST(SqBiTree *T,int i){
    // 如果是空节点，那么返回。
    if(i>=T->ElemNum || T->SqBiTNode[i]==-1){
        return;
    }
    isBST(T,(i+1)*2-1);
    curr=T->SqBiTNode[i];
    if(pre>=curr){
        flag=false;
    }
    pre=curr;
    isBST(T,(i+1)*2);
}

bool solve(SqBiTree *T){
    isBST(T,0);
    return flag;
}

```

![42](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfJq3wF89FGTMM3rd5yXe2XpG5jHGAACJRhrG3KB-VZGaOII0KX38AEAAwIAA3cAAz0E)

解：

法 1

(1)

1. 采用简单选择排序的思想，设置两个指针 i 和 j，i 指向未排序的第一个元素，j 初值指向 i
2. 取 curr_min=M[j] 为当前最小值的预备数，取 curr_min_index=j，向后遍历，遇到比其更小的则更新该数，并更新最小指针
3. 待一趟遍历完后，交换 M[i] 和 M[curr_min_index]，i+=1
4. 总计重复 1-3 10 次
5. 输出前十个数即为 M 最小的 10 个数

(2)

时间复杂度：O(n)

空间复杂度：O(1)

法 2

(1)

1. 采用堆的思想，构建大根堆，初值取 k=n/2，
2. 比较 M[k], M[k*2], M[k*2+1]，比较出最大值，如果最大值为 M[k]，则不做处理，如果最大值为 M[k*2]，则交换 M[k] 和 M[k*2]，如果最大值为 M[k*2+1]，则交换 M[k] 和 M[k*2+1]
3. k-=1
4. 重复 1-3，直到 k<0
5. 设置一个指针 i，初值为 0，输出第一个数，随后交换 M[0] 和 M[n-1-i]，i+=1
6. 设置一个指针 k 初值为 0，比较 M[k], M[k*2], M[k*2+1]，比较出最大值，如果最大值为 M[k]，则不做处理，如果最大值为 M[k*2]，则交换 M[k] 和 M[k*2]，如果最大值为 M[k*2+1]，则交换 M[k] 和 M[k*2+1]
7. k+=1
8. 重复 5-7，直到 i>=10
9. 输出的前十个数即为 M 最小的 10 个数

(2)

时间复杂度：O(n)

空间复杂度：O(1)

![43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfdq3xQ7l75adjAO4PvaG0YFKYigeAACVhhrG3KB-VbPr-HkR-WXYAEAAwIAA3cAAz0E)

解：

(1)

SF=F

A+B 时，OF=F $overline{B}$ $overline{A}$ + $overline{F}$ A B

A-B 时，OF=$overline{F}$ A $overline{B}$ + F $overline{A}$ B

(2)

1. 单内部总线，无法同时传输 2 个数据
2. 有时不需要立刻使用到该数据

(3)

16

IR

地址译码器

(4)

MARin

订：缺了一个 read

MDRin，MDRout，IRin

7 个

(5)

CU

FR，IR

![44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfZq3xK80UVQXQwKBPpiyDG3uSJIwAACUxhrG3KB-VaO7uI9f84BGgEAAwIAA3cAAz0E)

解：

(1)

磁道（柱面）、盘片、扇区

20000 个磁道，由于 2^14<20000<2^15，所以需要 15 位。

~~盘片有 4 个，所以占 2 位~~

订：双面盘，8 个，所以占 3 位

磁道有 500 个，由于 2^8<500<2^9，所以需要 9 位

(2)

寻道时延 5ms

旋转时延：7200rpm=120rps，转半圈需要 0.5/120=0.00417s=4.17ms

处理时延：转 1 个磁道需要 1/(120✖️500)=0.0166667ms=0.0167ms

所以，平均时间=5+4.17+0.0167=9.1867ms

(3)

一个扇区的读写也就是 512/8=64 次

可以。

DMA 对总线优先权比 CPU 高，因为数据不传输就会丢失。

![45](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfVq3xEQGMjJKdZ7AQPK0UE-68xpsAACURhrG3KB-VbT7y_C7w7g-wEAAwIAA3cAAz0E)

解：

(1)

文件名 索引结点号

course 2

doc 10

(2)

x=30

(3)

course 文件目录已在内存，意味着 course1 的 inode 已经在内存了。所以根据 course1 的 inode 访问磁盘，并读入，总共需要读 2 个磁盘块。

(4)

由于磁盘块是 4KB，地址项占 4B，所以一个磁盘块内可以存放 4KB/4B=1024 个地址项。

直接地址项 10 个，也就意味着直接地址最大到 40KB，1 级地址最大到 1024✖️4KB=4MB，也不够，2 级地址最大到 1024✖️1024✖️4KB=4GB，够了。

所以也就是要取 1 和 2 级间接索引。

![46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfNq3wt9PYZgvZbw9lcw4eWGgqLBZgACQBhrG3KB-VZlY_wAAecF7dIBAAMCAAN3AAM9BA)

解：

```c
// 注意线程内天然的有序性
semaphore S1=0;
semaphore S2=0;
func T1(){
  A;
  signal(S1);
  wait(S2);
  E;
  F;
}
func T2(){
  B;
  wait(S1);
  C;
  signal(S2);
  D;
}
```

![47](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfRq3w8EzctYaDErh0OMGcApDoN1mQACTxhrG3KB-VaOlsBeQO6KbgEAAwIAA3cAAz0E)

解：

(1)

设备 1:100BaseT 以太网交换机

设备 2:100BaseT 集线器

(2)

假设最远距离是 x，则由于 RTT=64B✖️8/100Mbps=5.12us。所以，2x/(2✖️10^8)=(5.12-2✖️1.51)✖️10^-6，解得 x=210m

(3)

DHCP Discovery 报文

可以

ff-ff-ff-ff-ff-ff

(4)

地址 1:00-11-11-11-11-E1

地址 2:00-11-11-11-11-C1

地址 3:00-11-11-11-11-D1
