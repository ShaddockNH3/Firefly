---
title: DS 王道选择题 2 刷
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · DS 王道选择题 2 刷"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.05
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## DS 王道选择题 2 刷

### DS 王道选择题 2 刷第 1 章

![1.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADy2rFHD9qCarlJkIZk02KjGRq7QFzAAK6FGsbxNooVmV88A6bSeh4AQADAgADbQADPQQ)

> 某算法的时间复杂度为 O(n²)，则表示该算法的（ ）。
>
> - A. 问题规模是 n²
> - B. 执行时间等于 n²
> - C. 执行时间与 n² 成正比
> - D. 问题规模与 n² 成正比

错选为 D。考虑一个 n×n 大小的图，我的任务是得到这个图边 1 的入度，那么我只需要竖着遍历一次即可，即时间复杂度是 O(n)

![1.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADzGrFHGf5DJSqDOiBLyahlGwAASDISQACuxRrG8TaKFaMq7pTKC5CfwEAAwIAA3gAAz0E)

> 【2022 统考真题】下列程序段的时间复杂度是（ ）。
>
> ```c
> int sum=0;
> for(int i=1;i<n;i*=2)
>     for(int j=0;j<i;j++)
>         sum++;
> ```
>
> - A. O(log₂n)
> - B. O(n)
> - C. O(nlog₂n)
> - D. O(n²)
>
> 【2025 统考真题】下列程序段的时间复杂度是（ ）。
>
> ```c
> int count=0,i,j;
> for(i=1;i*i<=n;i++)
>     for(j=1;j<=i;j++)
>         count++;
> ```
>
> - A. O(log₂n)
> - B. O(n)
> - C. O(nlog₂n)
> - D. O(n²)

第 17 题错选为 C。显然，执行时间为 $1+2+4+8+\cdots+2^t$，其中 $t \le \log_2 n$。前者由等比数列求和公式可得 $2^{t+1}-1$，将 $t \le \log_2 n$ 代入，显然是 $n$ 的规模。

第 18 题错选为 C。显然，执行时间为 1+2+3+…+t，其中 t^2≤n。前者由数列求和公式可得 (1+t)t/2，将 t≤sqrtn 代入，显然是 n 的规模。

### DS 王道选择题 2 刷第 2 章

![2.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADzWrFHILmAwtvb4Z406DeocHKL_0UAAK8FGsbxNooVtCx9jGM2KTWAQADAgADeAADPQQ)

> 线性表是具有 n 个（ ）的有限序列。
>
> - A. 数据表
> - B. 字符
> - C. 数据元素
> - D. 数据项

本题错选为 D。数据元素的意思是一个 struct，而数据项是数据元素里的数据。

![2.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADzmrFHKjJtuVvHrYazeHPM_PmJHhAAAK_FGsbxNooVlxL5Ae6KMpNAQADAgADeAADPQQ)

> 链式存储设计时，结点内的存储单元地址（ ）。
>
> - A. 一定连续
> - B. 一定不连续
> - C. 不一定连续
> - D. 部分连续，部分不连续

本题错选为 C。这里注意是结点内的单元。

![2.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADz2rFHL3ENueBMP4UsONhoOubdl5uAALAFGsbxNooVmsw80_Jg-xnAQADAgADeAADPQQ)

> 给定有 n 个元素的一维数组，建立一个有序单链表的最低时间复杂度是（ ）。
>
> - A. O(1)
> - B. O(n)
> - C. O(n²)
> - D. O(nlog₂n)

本题错选为 B。注意这里是有序。

并且可以注意，可以先对数组进行排序然后再插入，从而选 D。

![2.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD0GrFHXGPQkmXUi67BxRVIDRXvCBCAALCFGsbxNooViUvHDhZZ9ubAQADAgADeAADPQQ)

> 对于一个带头结点的循环单链表 L，判断该表为空表的条件是（ ）。
>
> - A. 头结点的指针域为空
> - B. L 的值为 NULL
> - C. 头结点的指针域与 L 的值相等
> - D. 头结点的指针域与 L 的地址相等

本题错选为 D。L 本身就是指针。

![2.3.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD0WrFHaL1XAfBQaymsjaMxNkHh0mCAALDFGsbxNooVmntTF-HV-kOAQADAgADeAADPQQ)

> 有两个长度都为 n 的双链表，若以 h₁ 为头指针的双链表是非循环的，以 h₂ 为头指针的双链表是循环的，则下列叙述中正确的是（ ）。
>
> - A. 对于双链表 h₁，删除首结点的时间复杂度是 O(n)
> - B. 对于双链表 h₂，删除首结点的时间复杂度是 O(n)
> - C. 对于双链表 h₁，删除尾结点的时间复杂度是 O(1)
> - D. 对于双链表 h₂，删除尾结点的时间复杂度是 O(1)

本题错选为 C。属于低级错误，没仔细看。

![2.3.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD0mrFHe8aPrzXkXMgtKZ7oBmjPp6QAALFFGsbxNooVpTg6zIAAd0F3QEAAwIAA3gAAz0E)

> 【2016 统考真题】已知表头元素为 c 的单链表在内存中的存储状态如下表所示。
>
> - [图示] 表格三列：地址 / 元素 / 链接地址；各行：1000H / a / 1010H；1004H / b / 100CH；1008H / c / 1000H；100CH / d / NULL；1010H / e / 1004H；1014H / 空 / 空
>
> 现将 f 存放于 1014H 处并插入单链表，若 f 在逻辑上位于 a 和 e 之间，则 a、e、f 的“链接地址”依次是（ ）。
>
> - A. 1010H、1014H、1004H
> - B. 1010H、1004H、1014H
> - C. 1014H、1010H、1004H
> - D. 1014H、1004H、1010H
>
> 【2021 统考真题】已知头指针 h 指向一个带头结点的非空循环单链表，结点结构为 data|next，其中 next 是指向直接后继结点的指针，p 是尾指针，q 是临时指针。现要删除该链表的第一个元素，正确的语句序列是（ ）。
>
> - [图示] 结点结构小图：data | next 两个域
>
> - A. h->next=h->next->next;q=h->next;free(q);
> - B. q=h->next;h->next=h->next->next;free(q);
> - C. q=h->next;h->next=q->next;if(p!=q) p=h;free(q);
> - D. q=h->next;h->next=q->next;if(p==q) p=h;free(q);

第 33 题错选为 C。注意这道题是 a，e，f，最终的选项不是 a，f，e。

第 34 题错选为 C。属于低级错误，模拟一遍既可以得到正确答案。

### DS 王道选择题 2 刷第 3 章

![3.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD02rFHhCbrX94o28Wysxwdwu-oM_YAALHFGsbxNooVhrrS6NHCHtEAQADAgADeAADPQQ)

> 4 个元素依次入栈的次序为 abcd，则以 cd 开头的出栈序列的个数为（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

本题错选为 B。本题的意思是说，出栈的时候，必须 c 是第一个，d 是第二个。所以一开始必须 a 压进去，然后 b 压进去，c 压进去的时候必须立刻出去，然后 d 压进去的时候也必须立刻出去，然后出 b 和 a。这道题的意思不是 c 或 d 是最开始的，而是必须出栈顺序是 cd。

![3.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD1GrFHi8Mfv6RKhOKDxEsusukmc8XAALIFGsbxNooVtUzf5iT0gHSAQADAgADbQADPQQ)

> 队列的“先进先出”特性是指（ ）。
>
> - I. 最后插入队列中的元素总是最后被删除 / II. 当同时进行插入、删除操作时，总是插入操作优先 / III. 每当有删除操作时，总要先做一次插入操作 / IV. 每次从队列中删除的总是最早插入的元素
> - A. I
> - B. I 和 IV
> - C. II 和 III
> - D. IV

本题错选为 D。漏看了选项。

![3.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD1WrFHkXXkbMKIg2hKbQjfBlZDuvxAALKFGsbxNooVge7RIYYHLxtAQADAgADeAADPQQ)

> 用链式存储方式的队列进行删除操作时需要（ ）。
>
> - A. 仅修改头指针
> - B. 仅修改尾指针
> - C. 头尾指针都要修改
> - D. 头尾指针可能都要修改
>
> 在一个链式队列中，假设队首指针为 front，队尾指针为 rear，x 所指向的元素需要入队，则需要执行的操作为（ ）。
>
> - A. front=x, front=front->next
> - B. x->next=front->next, front=x
> - C. rear->next=x, rear=x
> - D. rear->next=x, x->next=NULL, rear=x

第 15 题错选为 A。全删的话，需要全部指向 null。其实多考虑几种情况，如果用的是循环双链表。

第 16 题错选为 C。D 这个选项更好，应该是这个意思。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD1mrFHmZuoyMejQE9JfgmOFXJnG6-AALLFGsbxNooVnDvouvgQLUbAQADAgADeAADPQQ)

> 设有如下递归函数，则计算 F(8) 需要调用该递归函数的次数为（ ）。
>
> ```text
> int F(int n){
>     if(n<=3) return 1;
>     else return F(n-2)+F(n-4)+1;
> }
> ```
>
> - A. 7
> - B. 8
> - C. 9
> - D. 10

本题错选为 B。对于这类题有几个非常需要注意的地方，那就是调用最后不需要调用，这道题的思想反而在计组的 19 年大题理解了，以前还以为单纯是粗心大意。

对于这类题只需要记住，如果 f(1)=1 而不是调用，则不需要算。绘制出调用树即可（只需要包含 f 的结点）

![3.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD12rFHpbbciptkWXPmg-09cNu3ugIAALMFGsbxNooVpuZe2b5zBFLAQADAgADeAADPQQ)

> 下列说法中，正确的是（ ）。
>
> - A. 消除递归不一定需要使用栈
> - B. 对同一输入序列进行两组不同的合法入栈和出栈组合操作，所得的输出序列也一定相同
> - C. 通常使用队列来处理函数或过程调用
> - D. 队列和栈都是运算受限的线性表，只允许在表的两端进行运算

本题错选为 D。显然栈只允许在一端进行操作。对于 A，例如可以用动态规划。

![3.4.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD2GrFHrFjy9CCo5mZN9YQcLJ2zr9HAALPFGsbxNooVgb-Sw4AAdoXdgEAAwIAA3gAAz0E)

> 下列关于矩阵的说法中，正确的是（ ）。
>
> - I. 在 n（n>3）阶三对角矩阵中，每行都有 3 个非零元素 / II. 稀疏矩阵的特点是矩阵中的元素较少
> - A. 仅 I
> - B. 仅 II
> - C. I 和 II
> - D. 无正确项

本题错选为 B。对于 1，显然第一行和最后一行不是；对于 2，需要考虑 0 这个元素。

### DS 王道选择题 2 刷第 4 章

![4.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD2WrFHzZkHRpq37h2-El4TzP_fSuQAALQFGsbxNooVtPG6akP4PfwAQADAgADeAADPQQ)

> KMP 算法使用 nextval 数组进行模式匹配，模式串为 S='ababaa'，当主串中的某个字符与 S 中的第 6 个字符失配时，S 向右滑动的距离是（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

![4.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD2mrFH09Brg1P_ymqLlIe0B15hjLrAALSFGsbxNooVnr94f6sKhp_AQADAgADeAADPQQ)

> 【2024 统考真题】KMP 算法使用修正后的 next 数组进行模式匹配，模式串为 S='aabaab'，当主串的某个字符与 S 的某个字符失配时，S 向右滑动的最长距离是（ ）。
>
> - A. 5
> - B. 4
> - C. 3
> - D. 2

这两题放一起讲，属于同类错误。首先先分别计算出两道题的 nextval，next 数组，然后尤其注意这道题是“滑动”距离，移动到的下标。

其他方面，注意一下下标问题。放在上面的是数字，放在下面的是移动到 xx，注意上面的开始是 0，下面的开始是 1。

### DS 王道选择题 2 刷第 5 章

![5.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD22rFH3oiQV2S2KbrEehwDlo4ge1RAALTFGsbxNooVtTvsRUs-mDsAQADAgADeAADPQQ)

> 设有 n（n≥1）个结点的二叉树采用三叉链表表示，其中每个结点包含三个指针，分别指向其左孩子、右孩子及双亲（若不存在，则置为空），则下列说法中正确的是（ ）。
>
> - I. 树中空指针的数量为 n+2 / II. 所有度为 2 的结点均被三个指针指向 / III. 每个叶结点均被一个指针所指向
> - A. I
> - B. I、II
> - C. I、III
> - D. II、III

本题错选为 B。对于 1，显然正确；对于 2，显然根节点并非；对于 3，对于只有一个根节点的树并非。

![5.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD3WrFIP0sxdii8yWWVD9_YyzGOj6gAALXFGsbxNooVhIil4SIUwxmAQADAgADeAADPQQ)

> 设 n, m 为一棵二叉树上的两个结点，在中序遍历时，n 在 m 前的条件是（ ）。
>
> - A. n 在 m 右方
> - B. n 是 m 祖先
> - C. n 在 m 左方
> - D. n 是 m 子孙

本题错选为 D。这道题得考虑多种情况，而不是只考虑一种。

![5.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD32rFIREPu3pWS2jBOhGYFHHbFKdWAALYFGsbxNooVh1FrRJ62LFnAQADAgADeAADPQQ)

> 对二叉树的结点从 1 开始进行连续编号，要求每个结点的编号大于其左右孩子的编号，同一结点的左右孩子中，其左孩子的编号小于其右孩子的编号，可采用（ ）次序的遍历实现编号。
>
> - A. 先序遍历
> - B. 中序遍历
> - C. 后序遍历
> - D. 层次遍历

本题错选为 D。为想当然的错误。这道题一下子比较反直觉，不过想一下就知道应该是 C 了。

![5.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD4GrFISsiT2zZeZbVtJYUzyjP19s2AALZFGsbxNooVpdGAAGjVpSHvQEAAwIAA3gAAz0E)

> 一棵完全二叉树的后序遍历序列为 CDBFGEA，则其先序遍历序列是（ ）。
>
> - A. CBDAFEG
> - B. ABECDFG
> - C. ABCDEFG
> - D. 无法确定

本题错选为 A。首先后序遍历的最后一个 A 是根，所以选项 A 可以直接排除。然后再绘制出完全二叉树的位置，一个个填上去就行了。

![5.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD4WrFIXYSjPNpDPCxong0-fWvwav6AALaFGsbxNooVtOmnZZvlocTAQADAgADeAADPQQ)

> 某二叉树 T 采用二叉链表存储结构，T 的中序遍历序列为一个升序序列，要求采用某种方法对 T 进行某种操作之后得到一棵新的二叉树 T'，要求 T' 的中序遍历序列为一个降序序列，则下列关于该算法的叙述中，正确的是（ ）。
>
> - A. 采用中序遍历的方法最合适
> - B. 采用后序遍历的方法最合适
> - C. T' 中的根结点一定不是原 T 中的根结点
> - D. T' 中的叶结点不一定是原 T 中的叶结点

本题错选为 D。T 的中序遍历是一个升序序列，也就是原本的顺序是左根右，现在需要的顺序是右根左，所以采用递归交换左右子树，也就是先递归交换最左子树，递归交换右子树，最后再向上传递。对于 C 和 D 显然错误。

对于销毁，修改树而言，后序遍历一般是最优解也是最安全的。先把左右子树处理完之后再向上汇报。

![5.3.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD4mrFIb0oGdAcYnc-SzK4s0QipVPvAALbFGsbxNooVqlEJl__dpIeAQADAgADbQADPQQ)

> 判断线索二叉树中 *p 结点有右孩子结点的条件是（ ）。
>
> - A. p!=NULL
> - B. p->rchild!=NULL
> - C. p->rtag==0
> - D. p->rtag==1

本体错选为 B。线索二叉树的指针可能是指向下一个点，也可能是指向结点。对于 tag 而言，如果 tag==0，那么意味着该结点有孩子，如果 tag==1，那么意味着这个指针指的是下一个点。

![5.3.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD42rFIdbugiZLQkwKBw5jXoCuspGDAALcFGsbxNooVuGEUOVLUwZ3AQADAgADeAADPQQ)

> 二叉树在线索化后，仍不能有效求解的问题是（ ）。
>
> - A. 先序线索二叉树中求先序后继
> - B. 中序线索二叉树中求中序后继
> - C. 中序线索二叉树中求中序前驱
> - D. 后序线索二叉树中求后序后继

本题错选为 A。首先排除 BC。对于 A，无法解决先序前驱问题，对于 D，无法解决后续后继问题。

![5.5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD5GrFJVGiDGofjF0V6hJx5EalHsmIAAIFFWsbxNooVlAXsCRo6VlsAQADAgADeAADPQQ)

> 若度为 m 的哈夫曼树中，叶结点数为 n，则非叶结点的个数为（ ）。
>
> - A. n-1
> - B. ⌊n/m⌋-1
> - C. ⌈(n-1)/(m-1)⌉
> - D. ⌈n/(m-1)⌉-1

本题错选为 A。首先辨析概念，什么是度为 m 的哈夫曼树。首先辨析一下什么是度，对于普通的二叉树来说，每个非叶结点最大的度数为 2，对于 m 叉树，每个非叶节点最大的度数为 m。这里这道题指的是 m 叉树。

和后续的外部排序联系起来，这里可能会引入空结点。

![5.5.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD5WrFKJEFyjNy1v7ztdVXlOX-JS6MAAIIFWsbxNooVqqbmqUw2bW4AQADAgADeAADPQQ)

> 【2014 统考真题】5 个字符有如下 4 种编码方案，不是前缀编码的是（ ）。
>
> - A. 01,0000,0001,001,1
> - B. 011,000,001,010,1
> - C. 000,001,010,011,100
> - D. 0,100,110,1110,1100

本题错选为 C，属于低级错误。显然对于 D，110，1100 重复。

![5.5.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD5mrFKKlrj5lq1qF7s2QfQZD6AajiAAIJFWsbxNooVq3ZwWaZPNd7AQADAgADeAADPQQ)

> 【2022 统考真题】对任意给定的含 n（n>2）个字符的有限集 S，用二叉树表示 S 的哈夫曼编码集和定长编码集，分别得到二叉树 T₁ 和 T₂，下列叙述中，正确的是（ ）。
>
> - A. T₁ 与 T₂ 的结点数相同
> - B. T₁ 的高度大于 T₂ 的高度
> - C. 出现频次不同的字符在 T₁ 中处于不同的层
> - D. 出现频次不同的字符在 T₂ 中处于相同的层

本题错选为 C。对于 T1 而言，显然可能成立可能不成立。对于这类题应该多考虑边界情况。

### DS 王道选择题 2 刷第 6 章

![6.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD52rFKTJRr4DDQzJXfcP3o906s-emAAIKFWsbxNooVpmWNOLn1wHKAQADAgADeAADPQQ)

> 以下关于图的叙述中，正确的是（ ）。
>
> - A. 图与树的区别在于图的边数大于或等于顶点数
> - B. 假设有图 G={V,{E}}，顶点集 V'⊆V，E'⊆E，则 V'和{E'}构成 G 的子图
> - C. 无向图的连通分量是指无向图中的极大连通子图
> - D. 图的遍历就是从图中某一顶点出发访问遍图中其余顶点

本题错选为 D。对于 D，图可能是不连通的，所以不成立

![6.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD6GrFKVjL86tz-xqzZlVTqZ1riORNAAIMFWsbxNooVmNG1neYk4GiAQADAgADeAADPQQ)

> 一个有 28 条边的非连通无向图至少有（ ）个顶点。
>
> - A. 7
> - B. 8
> - C. 9
> - D. 10

对于这道题，显然让一个结点孤立无援，剩下的所有节点成为完全图。所以 n(n-1)/2=28，可得 n=8，所以 n+1=9。注意这里不是 n(n+1)。

![6.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD6WrFKW6lkFQvkwvLS1rMJIfycJnNAAINFWsbxNooVj4k_geqRVO2AQADAgADeAADPQQ)

> 设有无向图 G=(V,E) 和 G'=(V',E')，若 G'是 G 的生成树，则下列不正确的是（ ）。
>
> - I. G'为 G 的连通分量 / II. G'为 G 的无环子图 / III. G'为 G 的极小连通子图且 V'=V
> - A. I、II
> - B. 只有 III
> - C. II、III
> - D. 只有 I

本题错选为 C。这道题一定要注意，连通分量指的是最大连通子图。

![6.2.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD6mrFNKJzGcr3VeQyvzSmeLqNVwx9AAIXFWsbxNooVs7T4qClWewWAQADAgADeAADPQQ)

> 假设有 n 个顶点、e 条边的有向图用邻接表表示，则删除与某个顶点 v 相关的所有边的时间复杂度为（ ）。
>
> - A. O(n)
> - B. O(e)
> - C. O(n+e)
> - D. O(ne)
>
> 设 n 个顶点、e 条边的有向图用邻接表表示，则求某顶点 v 的入度的时间复杂度为（ ）。
>
> - A. O(n)
> - B. O(e)
> - C. O(n+e)
> - D. O(ne)

第 14 题错选为 D。第 15 题错选为 D。对于这题，被求入度和删除结点被要遍历所有边影响了。辨析一下，这道题注意是 1 个，如果要求所有结点的入度的话，是 O(n^2+ne)（得注意 n 和 e 谁更大），当然如果用数组记录的话会是 n+e。D 属于经典迷惑项，需要注意。

![6.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD62rFWEFEv7GWOiLmB2_bMOa2m-OfAALoD2sbxNowVkBJOzCZ86uUAQADAgADeAADPQQ)

> 下列关于图的说法中，错误的是（ ）。
>
> I. 对一个无向图进行深度优先遍历时，得到的深度优先遍历序列是唯一的
> II. 若有向图不存在回路，即使不用访问标志位，同一顶点也不会被访问两次
> III. 采用深度优先遍历或拓扑排序算法可以判断一个有向图中是否有环（回路）
> IV. 对任何非强连通图必须 2 次或以上调用广度优先遍历算法才可访问所有的顶点
>
> - A. I、II、III
> - B. II、III
> - C. I、II
> - D. I、II、IV

本题错选为 C。对于 1 和 2 显然是错误的。对于 4，非强连通图显然对于有向图 A->B->C，其只需要一次遍历即可。

对于 2，可以采用返利 A->C，B->C。

对于 4，可以采用 A->B，A->C。

对于判环——

对于无向图，可以采用 dfs/bfs。

对于有向图，可以采用 bfs/拓扑排序。

强连通图：全员两两互通、双向奔赴。

![6.4.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD7GrFWHDK0zVKP6HXt3AlFu7jVHCFAALpD2sbxNowVhSZ70CjoL_GAQADAgADeAADPQQ)

> 下列关于图的最短路径的相关叙述中，正确的是（ ）。
>
> I. Dijkstra 算法求单源最短路径不允许边的权为负
> II. Dijkstra 算法求每对顶点间的最短路径的时间复杂度为 O(n[?])
> III. Floyd 算法求每对顶点间的最短路径允许边的权为负，但不允许含有负权的回路
>
> - A. I、II 和 III
> - B. 仅 I
> - C. I 和 III
> - D. II 和 III

本题错选为 A。对于 1 和 3 显然正确，对于 2，这道题的意思是求所有的每一对顶点，所以是 On3。

![6.4.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD7WrFWjLAWc51IY60KJji1QdqKUoYAALqD2sbxNowVtPJotDIhkUxAQADAgADeAADPQQ)

> 下面关于求关键路径的说法中，不正确的是（ ）。
>
> - A. 求关键路径是以拓扑排序为基础的
> - B. 一个事件的最早发生时间与以该事件为始的弧的活动的最早开始时间相同
> - C. 一个事件的最迟发生时间是以该事件为尾的弧的活动的最迟开始时间与该活动的持续时间的差
> - D. 任何一个活动的持续时间的改变可能会影响关键路径的改变

本题错选为 D。对于 D，可能。对于 C，是从所有出发的活动里最迟开始时间的最小值，这里不需要再减去什么东西。

![6.4.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD7mrFWm8Di4bJEv-5M0Rv4INSy6AtAALrD2sbxNowVkzWeH7DUhi9AQADAgADeAADPQQ)

> 在求 AOE 网的关键路径时，若该有向图用邻接矩阵表示且第 i 列值全为 ∞，则（ ）。
>
> - A. 若关键路径存在，第 i 个顶点一定是起点
> - B. 若关键路径存在，第 i 个顶点一定是终点
> - C. 关键路径不存在
> - D. 该有向图对应的无向图存在多个连通分量

本题错选为 C。入度为 0，所以一定是起点。

辨析一下符号的含义，对于无权图，1 代表有线，0 代表无线，对于带权图，具体的值为有线且权值为 w，而 0 只会出现在主对角线，无穷大代表没有路。

![6.4.44](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD72rFWqaFjHPGjwxvjY3Q1_locI05AALsD2sbxNowVvQ1-8hw4rrtAQADAgADeAADPQQ)

> 【2021 统考真题】使用 Dijkstra 算法求下图中从顶点 1 到其余各顶点的最短路径，将当前找到的从顶点 1 到顶点 2，3，4，5 的最短路径长度保存在数组 dist 中，求出第二条最短路径后，dist 中的内容更新为（ ）。
>
> - [图示] 带权有向图，顶点 1、2、3、4、5:1→5 权值 6，1→2 权值 26，1→3 权值 3，5→2 权值 15，5→4 权值 8，5→3 权值 6，4→2 权值 1，4→3 权值 6，3→2 权值 22
>
> - A. 26, 3, 14, 6
> - B. 25, 3, 14, 6
> - C. 21, 3, 14, 6
> - D. 15, 3, 14, 6

![6.4.44 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD8GrFWtJSozUV4azG4PZUpJx4ae3OAALtD2sbxNowVqufDOQ0K7RoAQADAgADeAADPQQ)

> [原图非题目：主人记录本题错选 B 的手写订正笔记截图，含 dist 数组表格与段落标记]

![6.4.46](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD8WrFWuujI8OXY4Og3IhUdSWjqC64AALuD2sbxNowVujonMuMmjjiAQADAgADeAADPQQ)

> 【2023 统考真题】已知无向连通图 G 中各边的权值均为 1，在下列算法中，一定能够求出图 G 中从某顶点到其余各顶点最短路径的是（ ）。
>
> I. Prim 算法
> II. Kruskal 算法
> III. 图的广度优先搜索算法
>
> - A. 仅 I
> - B. 仅 III
> - C. 仅 I、II
> - D. I、II、III

显然 1 和 2 是错的，3 是对的，所以是 B。

### DS 王道选择题 2 刷第 7 章

![7.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD8mrFWyKhKUQ0shciHWFovM0U3oLIAALvD2sbxNowVgNkLbGbbpn5AQADAgADeAADPQQ)

> 由 n 个数据元素组成的两个表：一个递增有序，一个无序。采用顺序查找算法，对有序表从头开始查找，发现当前元素已不小于待查元素时，停止查找，确定查找不成功。已知查找任意一个元素的概率是相同的，则在两种表中成功查找（ ）。
>
> - A. 平均时间后者小
> - B. 平均时间两者相同
> - C. 平均时间前者小
> - D. 无法确定

本题错选为 C。对于这道题，想当然没有计算 ASL，想当然导致的错误。

![7.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD82rFXEt1zqtaqRjaLGxZ36rzZMAlAALwD2sbxNowVr4NEpOmkeWFAQADAgADeAADPQQ)

> 为提高查找效率，对有 65025 个元素的有序顺序表建立索引顺序结构，在最好情况下查找到表中已有元素最多需要执行（ ）次关键字比较。
>
> - A. 10
> - B. 14
> - C. 16
> - D. 21

对于这类题，首先先开根号。65025 开根是 255。现在最开始 255 进行折半查找，得出 8 次比较，而因为是最好的情况，所以内部也是有序的，所以也是 8。

![7.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD9GrFXGgr5hVWDQLVfxfoE6j8iGQ7AALxD2sbxNowVtxQFY6NL_xKAQADAgADeAADPQQ)

> 含有 20 个结点的平衡二叉树的最大深度为（ ）。
>
> - A. 4
> - B. 5
> - C. 6
> - D. 7
>
> 具有 5 层结点的平衡二叉树至少有（ ）个结点。
>
> - A. 10
> - B. 12
> - C. 15
> - D. 17

对于第 11 题和第 12 题，采用递推求解方式，也就是 Cn=Cn-1+Cn-2+1，代入计算即可。

这个公式算的是总结点数，而不是那一层的结点数。

$N_0 = 0$（空树，高度为 0）

$N_1 = 1$

$N_2 = 2$

$N_3 = N_2 + N_1 + 1 = 2 + 1 + 1 = 4$

$N_4 = N_3 + N_2 + 1 = 4 + 2 + 1 = 7$

$N_5 = N_4 + N_3 + 1 = 7 + 4 + 1 = 12$

$N_6 = N_5 + N_4 + 1 = 12 + 7 + 1 = 20$

![7.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD9WrFXTNNXDzaIHEjMts-xnrGd3pZAALyD2sbxNowVqoWfBU4S_eQAQADAgADeAADPQQ)

> 将关键字 1, 2, 3, ⋯, 1024 依次插入到初始为空的平衡二叉树中，假设只有一个根结点的二叉树的高度为 0，则插入结束后的平衡二叉树的高度为（ ）。
>
> - A. 8
> - B. 9
> - C. 10
> - D. 11
>
> 下列关于红黑树和 AVL 树的说法中，不正确的是（ ）。
>
> I. 一棵含有 n 个结点的红黑树的高度至多为 2log₂(n+1)
> II. 若一个结点是红色的，则它的父结点和孩子结点都是黑色的
> III. 红黑树的查询效率一般要优于含有相同结点数的 AVL 树
> IV. 若 AVL 树的某结点的左右孩子的平衡因子都是零，则该结点的平衡因子也是零
>
> - A. I、III
> - B. III
> - C. II、IV
> - D. III、IV

对于第 15 题，注意这道题只有一个根节点的二叉树高度是 0。

对于第 16 题，显然 AB 正确。

对于 3：

AVL 树是绝对高度平衡的（左右子树高度差绝对值小于 1），树高严格控制在约 $1.44\log_2 n$；

红黑树是弱平衡的（最长路径不超过最短路径的 2 倍），树高最高可达 $2\log_2 n$；

红黑树的优势在于减少旋转开销。

对于 4：左右孩子可以左孩子高为 2，右孩子高为 1，孩子平衡但是自己不平衡。

![7.4.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD9mrFXirTSRr0nw7DPIGnVDgMz8DaAALzD2sbxNowVl0O3SQ0Y36oAQADAgADeAADPQQ)

> 右图所示是一棵（ ）。
>
> - [图示] 根结点框内「12 25」，其下三个孩子结点框内分别为「05 10」「15 19 22」「26 28」，根与三个孩子之间有连线
>
> - A. 4 阶 B 树
> - B. 3 阶 B 树
> - C. 4 阶 B+ 树
> - D. 无法确定

本题错选为 A。如果是 4，那么 4/2 取高，也就是至少有 2 个分叉，至少 1 个结点，至多 3 个结点；如果是 3，那么 3/2 取高，也就是至少 2 个分叉，至少 1 个结点，但是至多 2 个结点；如果是 5，那么 5/2 取高，也就是至少 3 个分叉，至少 2 个结点，至多 4 个结点。所以可能是 4，5。

![7.4.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD92rFXki-P__kAzYqGN6fqLjeQWZKAAL0D2sbxNowVsQeGcY3taN-AQADAgADeAADPQQ)

> 在一棵 m 阶 B 树中做插入操作前，若一个结点中的关键字个数等于（ ），则插入操作后必须分裂成两个结点；在一棵 m 阶 B 树中做删除操作前，若一个结点中的关键字个数等于（ ），则删除操作后可能需要同它的左兄弟或右兄弟结点合并成一个结点。
>
> - A. m，⌈m/2⌉-2
> - B. m-1，⌈m/2⌉-1
> - C. m+1，⌈m/2⌉
> - D. m/2，⌈m/2⌉+1
>
> 具有 n 个关键字的 m 阶 B 树，应有（ ）个叶结点。
>
> - A. n+1
> - B. n-1
> - C. mn
> - D. nm/2

第 4 题错选为 A。属于低级错误。显然应该是 B。

第 5 题错选为 D。m 阶 B 树，假设 3 阶 B 树有 1 个关键字（需要注意 B 树的叶节点指的是 null），那么显然是 2 个页结点。

![7.4.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD-GrFXrQI9qqynihRWli4iJwhfnyVAAL1D2sbxNowViXoXR2Pxoj2AQADAgADeAADPQQ)

> 含有 n 个非叶结点的 m 阶 B 树中至少包含（ ）个关键字。
>
> - A. n(m+1)
> - B. n
> - C. n(⌈m/2⌉-1)
> - D. (n-1)(⌈m/2⌉-1)+1
>
> 已知一棵 5 阶 B 树中共有 53 个关键字，则树的最大高度为（ ），最小高度为（ ）。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5

第 7 题错选为 A。一样注意 B 树的叶节点指的是 null，所以假设 m 为很大的数，n 为 1，那么关键字至少为 1，显然可以排除法做出为 D。

第 8 题没做出来。注意 B 树树高只到终端节点，B+ 树树高到信息。

假设是基本空的，也就是 5/2 取高 -1，也就是每层最少 2 个结点。所以当 h=1，总共是 2 个分叉，第 2 层 2× 3 个分叉，第三层 2×3×3 个分叉，以此类推。

所以 $54 \ge 2 \times 3^{h-1}$，即 $h_{\max}=4$。（这道题用的是失败算的，也就是第 $h+1$ 层的总数至少是 $2 \times 3^{h-1}$。

![7.4.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD_GrFXyqNbmRQY6xK5Q9nKfKKkQbUAAL2D2sbxNowVgbYCPoqTXEcAQADAgADeAADPQQ)

> 在 7 阶 B 树中，按从上往下、从左往右的顺序搜索第 2016 个关键字，若根结点已读入内存，则最多需启动（ ）次 I/O。
>
> - A. 4
> - B. 5
> - C. 6
> - D. 7

本题错选为 C。根节点已经读入内存，所以不需要花费额外时间去读根。那么假设查找失败为 2017，也就是 $2017 \ge 2 \times 7^{h-1}$，可得 $h=5$

![7.4.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD_WrFX1q0Xk9ADXM1N9wXg1oL6WmSAAL3D2sbxNowVmz-Fqrf2Q6MAQADAgADbQADPQQ)

> 下列关于 B 树和 B+ 树的叙述中，错误的是（ ）。
>
> - A. B 树和 B+ 树都能有效地支持顺序查找
> - B. B 树和 B+ 树都能有效地支持随机查找
> - C. B 树和 B+ 树都是平衡的多叉树
> - D. B 树和 B+ 树都可以用于文件索引结构

本题错选为 D，属于低级错误。显然对于 B 树只支持…

![7.4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD_mrFX30JKeQpU1ECyE_O5nTwfXrUAAL4D2sbxNowVlbdWqQrYSNcAQADAgADeAADPQQ)

> 【2022 统考真题】在下图所示的 5 阶 B 树 T 中，删除关键字 260 之后需要进行必要的调整，得到新的 B 树 T₁。下列选项中，不可能是 T₁ 根结点中关键字序列的是（ ）。
>
> - [图示] 5 阶 B 树：根结点「60 90 260 350」，其下五个孩子结点分别为「30 50」「70 80 85」「100 110」「280 300」「400 500」，根与五个孩子之间有连线
>
> - A. 60, 90, 280
> - B. 60, 90, 350
> - C. 60, 85, 110, 350
> - D. 60, 90, 110, 350
>
> 【2023 统考真题】下列关于非空 B 树的叙述中，正确的是（ ）。
>
> I. 插入操作可能增加树的高度
> II. 删除操作一定会导致叶结点的变化
> III. 查找某关键字总是要查找到叶结点
> IV. 插入的新关键字最终位于叶结点中
>
> - A. 仅 I
> - B. 仅 I、II
> - C. 仅 III、IV
> - D. 仅 I、II、IV

第 23 题错选为 C。删除 260 后，可能用其直接前驱来补，所以也就是把 110 补上去。但是把 110 补上去又导致 100 那里缺了一个关键字，所以访问左右兄弟，发现左兄弟可以拿一个结点，所以变成 90，100；
删除 260 后，从其直接后继补，也就是 280，300 缺了人，左右兄弟都补不了，所以需要合并，合并的时候，显然 A 是对的，B 也是对的。假设是 D，那么……

对于这道题，直接把 D 带进去，会发现必然不可能成立，这道题分析不如直接带！

第 24 题错选为 A。1 显然是正确的，3 显然是不正确的；对于 4，插入的关键字结点最终位于叶节点，不一定，可能通过调整调整上去了，所以综合上述，CD 可以排除。考虑 2，B 树的叶节点指的是最下面一层的空结点，一旦删除那么必然会导致也会节点变化。

![7.5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQAD_2rFX8Qi1mt5r-cTpq1UfW9Oio9QAAL5D2sbxNowVj7ic1uqKHDaAQADAgADbQADPQQ)

> 散列查找一般适用于（ ）的情况下的查找。
>
> - A. 查找表为链表
> - B. 查找表为有序表
> - C. 关键字集合比地址集合大得多
> - D. 关键字集合与地址集合之间存在对应关系

本题错选为 C。很小也可以用哈希。

![7.5.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQABasVf4veYzV67n9mfs8tlU0NouPYAAvsPaxvE2jBWW6s6y6Ns5v0BAAMCAAN4AAM9BA)

> 在开放定址法中散列到同一个地址而引起的“堆积”问题是由（ ）引起的。
>
> - A. 同义词之间发生冲突
> - B. 非同义词之间发生冲突
> - C. 同义词之间或非同义词之间发生冲突
> - D. 散列表“溢出”

本题错选为 A，属于低级错误。显然对于开放定址法，非同义词之间也有可能发生冲突。

![7.5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQFqxWAE8yGUFUdlAlY7q1G9b537DgAC_A9rG8TaMFYO-3RUBKe-WgEAAwIAA3gAAz0E)

> 对包含 n 个元素的散列表进行查找，平均查找长度（ ）。
>
> - A. 为 O(log₂n)
> - B. 为 O(1)
> - C. 不直接依赖于 n
> - D. 直接依赖于表长 m
>
> 采用开放定址法解决冲突的散列查找中，发生聚集的原因主要是（ ）。
>
> - A. 数据元素过多
> - B. 负载因子过大
> - C. 散列函数选择不当
> - D. 解决冲突的方法选择不当
>
> 当用线性探测再散列法解决冲突时，计算出的一系列“下一个空位”的要求是（ ）。
>
> - A. 必须大于或等于原散列地址
> - B. 必须小于或等于原散列地址
> - C. 可以大于或小于但不等于原散列地址
> - D. 对地址在何处没有限制

第 8 题错选为 B。为低级错误。如果选择一个很烂的散列函数。

第 9 题错选为 C。为低级错误。

第 10 提错选为 D。解决冲突的时候肯定不在原来的位置。

![7.5.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQJqxWB7CJAiyXpK1nq4nSEJ0nI9hwAC_Q9rG8TaMFY9vfM5UxrejgEAAwIAA3gAAz0E)

> 一组记录的关键字为{19, 14, 23, 1, 68, 20, 84, 27, 55, 11, 10, 79}，用链地址法构造散列表，散列函数为 H(key) = key mod 13，散列地址为 1 的链中有（ ）个记录。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

本题错选为 C，属于低级错误。拉链法构造，mod13 即可，这道题忽略了 1。

![7.5.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQNqxWCaxHbQHWyqRP1AC-sFnUHzjgAC_g9rG8TaMFZMzzO5NDRepgEAAwIAA3gAAz0E)

> 【2014 统考真题】用哈希（散列）方法处理冲突（碰撞）时可能出现堆积（聚集）现象，下列选项中，会受堆积现象直接影响的是（ ）。
>
> - A. 存储效率
> - B. 散列函数
> - C. 装填（装载）因子
> - D. 平均查找长度

本题错选为 A。显然 AB 是肯定正确的，对于 C，不管有没有发生都 +1。

### DS 王道选择题 2 刷第 8 章

![8.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQRqxWEb0Feq4qO5v0in_GnJGxC6AwAC_w9rG8TaMFY8gh8Y7hMhJwEAAwIAA3gAAz0E)

> 对序列{E, A, S, Y, Q, U, E, S, T, I, O, N}按照字典顺序排序，采用增量 d = 6, 3, 1 的希尔排序算法，则前两趟排序后，关键字的总比较次数为（ ）。
>
> - A. 15
> - B. 17
> - C. 16
> - D. 18

原本的：EASYQUESTION

第一轮：EASIONESTYQU（总比较为 6 次）

第二轮：4+4+3

所以总共是 6+4+4+3=17 次。

![8.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQVqxWE8LxAh0u3-OmjlWy89E_0cDQADEGsbxNowVnima8HhEVTvAQADAgADeAADPQQ)

> 快速排序算法在（ ）情况下最不利于发挥其长处。
>
> - A. 要排序的数据量太大
> - B. 要排序的数据中含有多个相同值
> - C. 要排序的数据个数为奇数
> - D. 要排序的数据已基本有序

本题错选为 D。扣个字眼，最。对于 D，可以 shuffle 一下，但是对于 B 却无法解决。

> 安：这道题就该选 D，这个属于是课内 408 的问题。

![8.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQZqxWFXzg5w38HX-ZPt9YQoj1v4PgACARBrG8TaMFaqwpBcYoxhZAEAAwIAA3gAAz0E)

> 对 8 个元素的序列进行快速排序，在最好情况下的关键字比较次数是（ ）。
>
> - A. 7
> - B. 8
> - C. 12
> - D. 13

本题错选为 A。注意，即便是最好的情况，也就是 12345678，以 4 开始划分，那么第 1 轮比较 7 次（这仅是第 1 轮的），第 2 轮 123 比较 2 次，5678 比较 3 次；第 3 轮 78 比较 1 次，总计 7+2+3+1=13。

这里我思考成仅 1 轮。

![8.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQdqxWF4ehqi6rXYuCk4JAZrhSvZ9wACAhBrG8TaMFbIMMX_Di6-2QEAAwIAA3gAAz0E)

> 【2019 统考真题】排序过程中，对尚未确定最终位置的所有元素进行一遍处理称为一趟。下列序列中，不可能是快速排序第二趟结果的是（ ）。
>
> - A. 5, 2, 16, 12, 28, 60, 32, 72
> - B. 2, 16, 5, 28, 12, 60, 32, 72
> - C. 2, 12, 16, 5, 28, 32, 72, 60
> - D. 5, 2, 12, 28, 16, 32, 72, 60

本题错选为 B。快排的第二趟结果，意思是能不能找到 2 个轴。对于这类题一定要想到先找端点最值。对于 A，显然可以以 28 和 72 划分；对于 B，显然可以以 2 和 72 划分；对于 C，显然可以以 2 和 28 划分。

![8.3.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQhqxWGh9Ln2PtqoPQ0_qjA6O84XvQACAxBrG8TaMFaevc1fSWiOAQEAAwIAA3gAAz0E)

> 【2024 统考真题】使用快速排序算法对含 n（n>3）个元素的数组 M 进行排序，若第一趟排序将 M 中除枢轴外的 n-1 个元素划分为均不为空的 P 和 Q 两块，则下列叙述中，正确的是（ ）。
>
> - A. P 与 Q 块间有序
> - B. P 与 Q 均块内有序
> - C. P 和 Q 的元素个数大致相等
> - D. P 中和 Q 中均不存在相等的元素

本题错选为 B，属于低级错误，低级到我都不想分析了。

![8.4.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQlqxWIC6w0blmI-Mnl_255OLZ5zQgACBBBrG8TaMFbEazhgb5dffwEAAwIAA3gAAz0E)

> 已知大根堆{62, 34, 53, 12, 8, 46, 22}，删除堆顶元素后需要重新调整堆，则在此过程中关键字的比较次数为（ ）。
>
> - A. 2
> - B. 3
> - C. 4
> - D. 5

绘制树之后，22 换到最前面，先和 34，53 比较，22 和 53 换，然后再和 46 比较。总共 3 次。

![8.5.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQpqxWIZX6-_YddjxlrQ-8pNmrzm7AACBRBrG8TaMFajmD_rkqM1ogEAAwIAA3gAAz0E)

> 【2011 统考真题】已知序列{25, 13, 10, 12, 9}是大根堆，在序列尾部插入新元素 18，再将其调整为大根堆，调整过程中元素之间进行的比较次数是（ ）。
>
> - A. 1
> - B. 2
> - C. 4
> - D. 5
>
> 【2015 统考真题】已知小根堆为 8, 15, 10, 21, 34, 16, 12，删除关键字 8 之后需重建堆，在此过程中，关键字之间的比较次数是（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

第 16 题错选为 D。我都不知道为啥我会选 D。插到最后一个比较两次啊。

第 17 题错选为 D。我也不知道为啥会选错。

总之上述三题属于同质错误，需要注意的是位于第一个要比较两次。

![8.5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQtqxWI0GYxSic_FtGgQ5iuVulaDlwACBhBrG8TaMFZ7GKKBwNH5EwEAAwIAA3gAAz0E)

> 用归并排序算法对序列{1, 2, 6, 4, 5, 3, 8, 7}进行排序，共需要进行（ ）次比较。
>
> - A. 12
> - B. 13
> - C. 14
> - D. 15

本题错选为 A，首先是分治过程，先切成 1，2，6，4，5，3，8，7。第一次比较是 1 和 2，6 和 4，5 和 3，8 和 7，共计 4 次比较，排序为 12，46，35，78；第二次比较是 1 和 4，2 和 4，3 和 7，5 和 7，所以总共 4 次比较，排序为 1246，3578；第三次比较是 1 和 3，2 和 3，4 和 3，4 和 5，6 和 5，6 和 7，这部分总计 6 次。所以总共为 4+4+6=14。

![8.5.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQxqxWJPt-aGMfBRVhU1P0tyzYkkxgACBxBrG8TaMFbQ0SvalTC63gEAAwIAA3gAAz0E)

> 设线性表中每个元素有两个数据项 k₁ 和 k₂，现对线性表按以下规则进行排序：先看数据项 k₁，k₁ 值小的元素在前，大的元素在后；在 k₁ 值相同的情况下，再看 k₂，k₂ 值小的元素在前，大的元素在后。满足这种要求的排序算法是（ ）。
>
> - A. 先按 k₁ 进行直接插入排序，再按 k₂ 进行简单选择排序
> - B. 先按 k₂ 进行直接插入排序，再按 k₁ 进行简单选择排序
> - C. 先按 k₁ 进行简单选择排序，再按 k₂ 进行直接插入排序
> - D. 先按 k₂ 进行简单选择排序，再按 k₁ 进行直接插入排序

本题错选为 C。判断稳定性，简单选择排序不稳定，直接插入排序稳定。由题设可知，先按照低位的排（不要被结构体排序的思维影响了），然后再排高位，所以排除 AC。由于第一次排已经确定了低位的顺序，所以高位不能采用非稳定的排序。综上述选 D。

其实考虑 LSD，这道题意思是就是 k1k2，所以先排 k2 然后排 k1，由于简单选择排序不稳定，直接插入排序稳定，因为 k1 值不能改变 k2 的顺序，所以需要稳定。

![8.6.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQ1qxWMvVsR8iq18io4gnCgNv12kTQACCBBrG8TaMFbbgYB9sCr6lAEAAwIAA3gAAz0E)

> 排序趟数与序列的初始状态有关的排序算法是（ ）。
>
> - A. 直接插入排序
> - B. 2 路归并排序
> - C. 快速排序
> - D. 堆排序
>
> 对 n 个元素进行排序，其排序趟数肯定为 n-1 趟的排序算法是（ ）。
>
> - A. 直接插入排序和快速排序
> - B. 冒泡排序和快速排序
> - C. 简单选择排序和直接插入排序
> - D. 简单选择排序和冒泡排序
>
> 若序列的初始状态为{1, 2, 3, 4, 5, 10, 6, 7, 8, 9}，要想使得排序过程中的元素比较次数最少，则应该采用（ ）方法。
>
> - A. 插入排序
> - B. 选择排序
> - C. 希尔排序
> - D. 冒泡排序
>
> 对于元素个数相同的不同初始序列，总比较次数大致相同的排序算法是（ ）。
>
> - A. 折半插入排序和简单选择排序
> - B. 基数排序和归并排序
> - C. 冒泡排序和快速排序
> - D. 堆排序
>
> 一般情况下，以下查找效率最低的数据结构是（ ）。
>
> - A. 有序顺序表
> - B. 二叉排序树
> - C. 堆
> - D. 平衡二叉树
>
> 一台计算机具有多核 CPU，可以同时执行相互独立的任务，归并排序的各个归并段可以并行执行，在下列排序算法中，不可以并行执行的有（ ）。
>
> - Ⅰ. 基数排序 / Ⅱ. 快速排序 / Ⅲ. 冒泡排序 / Ⅳ. 堆排序
> - A. Ⅰ、Ⅲ
> - B. Ⅰ、Ⅱ
> - C. Ⅰ、Ⅲ、Ⅳ
> - D. Ⅱ、Ⅳ

第 7 题错选为 A。对于直接插入排序，排序的趟数显然一直是 n-1，不要和其他排序（例如冒泡排序混淆了）

第 8 题错选为 D。显然可以排除快排和冒泡（冒泡默认优化）。

第 9 题错选为 D。冒泡排序即便已经 ok 了，但是还是得再扫一次去判断。

第 10 题错选为 B。这道题的意思不是说选项里面的 x 和 y 有相同的，而是问其本身是不是相同的。所以 A 显然。对于 B 的基数排序，不基于关键字比较，而是基于分配与收集

第 11 题错选为 A。堆不是查找的。

第 12 题错选为 C。对于 4，根节点的所有子树可以并行。

![8.6.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQ5qxWNVoRc114DU03XN5vQRTzf_UAACCRBrG8TaMFYy2AKd0-ebSwEAAwIAA3gAAz0E)

> 【2017 统考真题】下列排序算法中，若将顺序存储更换为链式存储，则算法的时间效率会降低的是（ ）。
>
> - Ⅰ. 插入排序 / Ⅱ. 选择排序 / Ⅲ. 冒泡排序 / Ⅳ. 希尔排序 / Ⅴ. 堆排序
> - A. 仅Ⅰ、Ⅱ
> - B. 仅Ⅱ、Ⅲ
> - C. 仅Ⅲ、Ⅳ
> - D. 仅Ⅳ、Ⅴ

本体错选为 C。对于 1，2，3 都可以，而对于 4 和 5 利用了随机访问。

![8.6.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAQ9qxWN8E5-HdxTYkoyv3WXAm7u9SQACChBrG8TaMFa0QnGexi3Q0gEAAwIAA3gAAz0E)

> 【2020 统考真题】对大部分元素已有序的数组排序时，直接插入排序比简单选择排序效率更高，其原因是（ ）。
>
> - Ⅰ. 直接插入排序过程中元素之间的比较次数更少 / Ⅱ. 直接插入排序过程中所需的辅助空间更少 / Ⅲ. 直接插入排序过程中元素的移动次数更少
> - A. 仅Ⅰ
> - B. 仅Ⅲ
> - C. 仅Ⅰ、Ⅱ
> - D. Ⅰ、Ⅱ和Ⅲ

本题错选为 D。属于很低级的错误，其实也不想解释。

![8.7.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARBqxWOT1TeOXM3GPc2wqgIXYpBUYgACCxBrG8TaMFauCVqfnkeW9AEAAwIAA3gAAz0E)

> 设在磁盘上存放有 375000 个记录，进行 5 路平衡归并排序，内存工作区能容纳 600 个记录，为把所有记录排好序，需要进行（ ）趟归并排序。
>
> - A. 3
> - B. 4
> - C. 5
> - D. 6
>
> 在下列关于外部排序过程输入/输出缓冲区作用的叙述中，不正确的是（ ）。
>
> - A. 暂存输入/输出记录
> - B. 内部归并的工作区
> - C. 产生初始归并段的工作区
> - D. 传送用户界面的消息

第 4 题错选为 C。首先计算初始归并段，由于能容纳 600 个记录，所以 375000/600=625，625 个归并段一直除以 5 就好了，得到 4 趟归并。

第 5 题错选为 B。显然 D 是错的（）我也不知道为什么要选其他选项。

![8.7.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARFqxWOzuO68siEWQlRT1vviDxu9NgACDBBrG8TaMFbDl3qISnfPggEAAwIAA3gAAz0E)

> 最佳归并树在外部排序中的作用是（ ）。
>
> - A. 完成 m 路归并排序
> - B. 设计 m 路归并排序的优化方案
> - C. 产生初始归并段
> - D. 与锦标赛树的作用类似

本题错选为 A。最佳归并树是外部排序得第二步。应该是 B。
