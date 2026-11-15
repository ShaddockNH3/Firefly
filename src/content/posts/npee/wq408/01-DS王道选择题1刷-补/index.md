---
title: DS 王道选择题 1 刷（补）
published: 2026-10-01
description: "考研冲刺前的总结 —— 错题本（408） · DS 王道选择题 1 刷（补）"
image: /covers/npee-wq408.webp
category: 考研
series: NPEE
seriesOrder: 8.01
tags:
  - 总结
track: "错题本"
subject: "408 错题本"
unlisted: true
draft: false
---
## DS 王道选择题 1 刷（补）

由于时间过于久远，就不翻当初选错为什么了。

### DS 王道选择题 1 刷第 1 章

![1.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBr9q0Lx14eALMcGTh14n1NwHwOVf1gACWhRrG6jniFbvJwJ3LG7xAAEBAAMCAAN4AAM9BA)

对于 A，顺序表指的是数组相关，包含了物理信息。

对于 B，哈希表有逻辑有物理，哈希表的物理指的是用数组模拟，或者使用链表。

对于 C，有序表没什么信息，可以选。

对于 D，显然有物理信息。

本题应该选 C。

![1.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsBq0L2f1HI3U-dk1woRvysf7AbplgACXBRrG6jniFYMpJMTTQQbrgEAAwIAA3gAAz0E)

本题应该选 C，属于背书题。

对于 ABD，不需要存储，而是实现。

### DS 王道选择 1 刷第 2 章

![2.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsFq0L38BFxs3mOc-_UUArglZ2Bw-QACXRRrG6jniFYCez-CSUVduwEAAwIAA3gAAz0E)

本题应该选 A，注意这道题是节点内的地址，节点内的地址肯定是连续的。

![2.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsJq0L4xhhxQqG9TbBNVz8naVEPowwACXhRrG6jniFbXNjKZzR2WKgEAAwIAA3gAAz0E)

本题应该选 C，在遍历 m 之后，直接把 m 后的指针指向后面的东西。

![2.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsNq0L5dQ9i6sVDOhVKHQS-kxjZAKwACYRRrG6jniFYer9wY3m7DMwEAAwIAA3gAAz0E)

本题应该选 D，线性表没有物理信息。

![2.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsRq0L6MKBRsp17PH57bbBrzO231FAACYhRrG6jniFY3XCQVjseddQEAAwIAA3gAAz0E)

本题应该选 D。纯模拟。

![2.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsVq0L6k5pZnwcgdvZpg3FPpQVoaNwACYxRrG6jniFZSTqHBR8_IRQEAAwIAA3gAAz0E)

本题应该选 C。头节点指针指向自己，也就是指向自己的值，而不是指向自己值的地址。

### DS 王道选择题 1 刷第 3 章

![3.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBshq0Npn-VOykxx4GjgQ8EoBVnyj6AACiRRrG6jniFZJKdGfw9hQBgEAAwIAA3gAAz0E)

本题应该选 C。

![3.1.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBslq0Np-sDu27IIEOsfT6Y_lucVLOwACihRrG6jniFZsM4ad2RqVzwEAAwIAA3gAAz0E)

本题应该选 C。

![3.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBspq0NqgQ1wBSUX84NHpD8OZkWNVsgACixRrG6jniFZsgmYuESVL-wEAAwIAA3gAAz0E)

第 11 题应该选 D。对于 A，长度不是无限的，最起码也是磁盘限制。对于 B，顺序队列和链式队列出入队时间是一样的，对于 C 显然是可以的。

第 12 题应该选 B。对于 C 和 D，队列需要在双端操作，所以可以排除，对于 A 则是没有必要。

第 13 题应该选 A，对于 A 没法在双端操作，所以不选。

![3.2.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBstq0NtDsCk-mNOZNagQl8LYZxnyYAACjBRrG6jniFY4uEWmSxOxCQEAAwIAA3gAAz0E)

本题应该选 A。

![3.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBsxq0Nu7l98lNLWivMXmmNohVOqKLgACjRRrG6jniFYtT0j4q7TaXwEAAwIAA3gAAz0E)

本题应该选 B，纯模拟题。

![3.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBs1q0Nvi0EQIWJ5HRX-BIS7LiSbwpgACjhRrG6jniFaGOghiCYz5HQEAAwIAA3gAAz0E)

第 6 题应该选 C。

对于 F(8)=F(6)+F(4)+1, F(6)=F(4)+F(2),F(4)=F(2)+F(0)，所以也就是递归调用 9 次。

第 7 题应该选 C。

F(5)=F(3)+F(1)，F(3)=2，F(1)=2，得到 4，所以第四个应该是 F(4)。

![3.4.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBs5q0NzIDBV6AAEqAmoAAXSLDdfqObxqAAKSFGsbqOeIVt_bjAABGG-4UgEAAwIAA3gAAz0E)

![3.4.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBs9q0Nz5Bf9XdLOy2kabeB0etewMbgACkxRrG6jniFYln_eryT33vwEAAwIAA3gAAz0E)

第 7 题应该选 C。

第 8 题应该选 B。

这两道题用特值法最快，

我记得当时错 7-8 是因为把主对角线想成副对角线了。

第 9 题应该选 B。一般采用三元组存储，采用三元组存储失去随机特性。

第 10 题应该选 D。对于 1，显然第一行和最后一行不是；对于 2，0 也是元素。

### DS 王道选择题 1 刷第 4 章

![4.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtBq0N2zdSWUI6Pxc9c63CA7Q4KsmgAClRRrG6jniFbvbRFCmKe_OQEAAwIAA3gAAz0E)

本题应该选 B。

当时错这个是因为没看到滑动距离。

### DS 王道选择题 1 刷第 5 章

![5.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtFq0N34ZbougtauYa7J6kNwApoRqgAClhRrG6jniFaArrub7wdkcQEAAwIAA3gAAz0E)

本题应该选 A，属于背书题。

![5.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtJq0N4duUGOau4EosLu8coz-6ysxgAClxRrG6jniFa0Uj_4tvwXTQEAAwIAA3gAAz0E)

本题应该选 D。

假设度为 1 的结点有 n1 个，则结点总数与边的关系为：3n3+2n2+n1+1=n3+n2+n1+n0，计算可得 9+n1=9+n1，无法确定 n1 具体是多少。

![5.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtVq0N-aXu6ov152DdY1282nYXB23wACnRRrG6jniFZpagyefwq0HQEAAwIAA3gAAz0E)

第 2 题应该选 C。

第 3 题应该选 A。

对于 B，n0+n1+n2=n1+2n2+1。

对于 D，可能不存在。

![5.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtZq0OAETWJ2Oa_L95dLvHCwLUKNbwACohRrG6jniFYGJWOTMuL35wEAAwIAA3gAAz0E)

本题应该选 D。

使用特值法，具有 1 个结点且高度为 1 的二叉树数目显然为 1，代入也就是 C 或者 D，对于 2 个结点且高度为 2 的二叉树，也可以得到 C 或 D，对于 3 个结点且高度为 3 的二叉树，可以构造出 4 个，所以应该选 D。

![5.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtdq0OB7ftOHEyb3OdaR0wt12zkBMAACpRRrG6jniFZFZE1wof6dXwEAAwIAA3gAAz0E)

本题应该选 C。

这道题的意思是说在所有可能的 n 的情况下找，而不是特定的 n 下下面是否存在。

所以一个二叉树有 2n 个结点，假设结点是 n0+n1+n2=n1+2n2+1，则 n0=n2+1，也就是必然存在奇数个 n1 结点，所以 C 是错的。

![5.2.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBthq0OKLpp9atL8Q3BzDrJt9SRxZlgACqhRrG6jniFY0Ce0xDain-wEAAwIAA3gAAz0E)

本题应该选 C

![5.2.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtlq0OK9jcUjnhAq27iE_sVY4ktfbAACqxRrG6jniFb4r1NChwGtrwEAAwIAA3gAAz0E)

本题应该选 A。

得存放所有的。

![5.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBtpq0OLyUw5sQYdjOz4bUV3PrYIHLQACrBRrG6jniFZ9q9CSlY8QWQEAAwIAA3gAAz0E)

本题应该选 C。

![5.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1hq0f4ysFZgvaI5PTeBL8lEKkYJVAACSxtrG-BrkFZAeawLiF0nNwEAAwIAA3gAAz0E)

注意是所有条件，所以应该选 C。

![5.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1lq0f53ofmXJkJTAUez_PtFL-O5KAACTBtrG-BrkFbEfJ7OsG9k0QEAAwIAA3gAAz0E)

本题应该选 B。访问页结点的顺序是一样的，只是访问根的顺序不一样。

![5.3.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1pq0f64MfB1hyTgOOhuHHaF5WJLGwACThtrG-BrkFYUWHRmNygyJwEAAwIAA3gAAz0E)

本题应该选 B。

对于这类题应该套到模型上去理解，例如本题升序序列改为降序序列，原本中序遍历的顺序是左根右，也就是要改成右根左的顺序，所以 CD 可以排除。

而要改成右根左，也就是递归的交换左子树，递归的交换右子树，所以应该选 B。

![5.3.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1tq0f-WMXp0B801f5D49v1n0gqlRwACUBtrG-BrkFZiK6bePPVzhwEAAwIAA3gAAz0E)

本题应该选 C。

2 个结点的线索二叉树线索为 3，采用特值法即可以迎刃而解。

![5.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB1xq0f_vn-r-N7SCx4Piej3OJHQ8owACURtrG-BrkFYEuVKOmgRwbQEAAwIAA3gAAz0E)

第 25 题应该选 D。采用特值法，模拟一个 5 个结点只有🈶有孩子的树，可以观察到第一个结点的左孩子和最后一个结点的右孩子指向空。

第 26 题应该选 D。典型的代表是先序的先序和后序的后序。

![5.3.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB11q0gABpHVJhQdO_nnQiAaZ7cinW7AAAlIbaxvga5BW7ROjDTk397IBAAMCAAN4AAM9BA)

本题应该选 A，绘制求解即可。

![5.3.31](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB15q0gAB2Gez1J85AAF2lBuolayh33yJAAJTG2sb4GuQVsKM9l4Pm7ojAQADAgADeAADPQQ)

本题应该选 D。

先序遍历是根左右，中序遍历是左根右，中序遍历相反是右根左，所以根左右=右根左，也就是该树没有右孩子，所以 D。

![5.4.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB19q0gEw5kwsmgABpw64EGWYEKG4iiMAAlQbaxvga5BWNemxhbSBLfcBAAMCAAN4AAM9BA)

本题应该选 D。

![5.5.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Bq0gFOiLscEU6sueDvZ2I7cFZx1wACVRtrG-BrkFZUkGW2ptoAAZkBAAMCAAN4AAM9BA)

本题应该选 C。

哈夫曼树没有 n1 结点，由于有 5 个叶节点，所以由 n0+n1+n2=n1+2n2+1 可得 n0=n2+1，所以 n2=4。

所以一直向左，也就是 5 个。

![5.5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Fq0gHPG4RdPpO2gA6pW2KF_xVW2AACVhtrG-BrkFaHjioQtA1VGAEAAwIAA3gAAz0E)

本题应该选 C，属于结论算是。不过用特值法也可以做。

### DS 王道选择题 1 刷第 6 章

![6.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Jq0gzP3gZ0nHJPYhBxMtIeisXWiwACaRtrG-BrkFYuXJKS_TOeDgEAAwIAA3kAAz0E)

本题应该选 A。前者最少为树，后者最少为环。

![6.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Nq0g4xlgGYEjg-39qChEOyLabaUQACbBtrG-BrkFZitOg2pjTctgEAAwIAA3gAAz0E)

第 10 题应该选 D。

对于 1，连通分量的意思是要撑满，所以 1 是错的。

对于 2 和 3 是对的。

第 11 题应该选 C。

利用几个结点构成最大的，也就是 7×6/2=21，也就是扣了 7 个结点，51-7=44，所以总共是 45。

第 12 题应该选 B。

![6.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Rq0g9SNrXgldPirKJC4jq73xs3rwACbhtrG-BrkFZPam9oIZs7wAEAAwIAA3gAAz0E)

第 16 题应该选 C。

第 17 题应该选 B。

![6.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Vq0g-l5Vs2LKxN5o3TLj91VwK1MAACbxtrG-BrkFbI7GqzhhyrrwEAAwIAA3gAAz0E)

本题应该选 B。

![6.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2Zq0g_JH5CVYgrJjk8i3ttpb_W3dAACcBtrG-BrkFYIwKa498-WVAEAAwIAA3gAAz0E)

BD。

![6.3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2dq0g_szd2W4TgKV58L1I4G7wJ-4wACcRtrG-BrkFbwRF6DsR6BzwEAAwIAA3gAAz0E)

本题应该选 D。

对于 1 显然错误。

对于 2，不存在回路，考虑一个结点下有多个结点，未标记则会重复访问。

对于 4，可以考虑 1->2->3。

![6.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2hq0hIHy0Ya505LmcHsuodQ0NATUAACdRtrG-BrkFZkR--KFlbP2gEAAwIAA3kAAz0E)

本题 D。

![6.3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2lq0hJDOnGRzOMAAXYQBnrFmrND7bAAAnYbaxvga5BW64snOnVAS6QBAAMCAAN5AAM9BA)

本题应该选 D。

![6.4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2pq0iFtJVNuCfYaFuqnZMLozRmTFwACtxtrG-BrkFbvMHAnhESeVwEAAwIAA3gAAz0E)

本题应该选 A。

对于 1，显然成立。

对于 2，假设该图所有权值最小的边刚好全选构成了无向图，那么这课树就是唯一的，所以不选。

对于 3，假设这 n-1 条权值最小的边刚好构成了一个环，那么就不是最小生成树。

对于 4，含有 n 个顶点，假设选取另外 n-1 个顶点刚好构成环，那么就不是最小生成树。

![6.4.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2tq0iJV7dwLTVwCUCBCwCK4S1FSmAACuRtrG-BrkFaZJdwNNb6dJgEAAwIAA3gAAz0E)

本题应该选。

对于 1，迪杰斯特拉算法不能使用负权边。

对于 2，迪杰斯特拉算法求每一对顶点间的时间复杂度，这里要注意是每一对，也就是每一条路，需要求 n 次，所以应该是 O(n^3)。

对于 3，属于背诵，是对的。

![6.4.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB2xq0iLMqavCD5ZdzsJ-1vaJM1YXJQAC3xtrG-BrkFaMJp8i5Qv22wEAAwIAA3gAAz0E)

第 10 题应该选 D。

第 11 题应该选 I 和二，答案错了，三跟四都是错的，广搜也没办法。

![6.4.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB21q0iO7rZuHOHYoEzoDgGtnwXTrYwAC4RtrG-BrkFZfGa50CGCXggEAAwIAA3gAAz0E)

本题应该选 D。

对于 1，有向图存在环路，则必不可能存在拓扑排序。

对于 2，拓扑排序暂存入度为 0 的点可以使用队列也可以使用栈，典型的例子是使用 BFS 入队实现拓扑排序，第二是利用 DFS 退栈的时候逆向输出。

对于 3，如答案图所示。

![6.4.13 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3Nq0xV7E2ZYwCx7fcz_c8YvkI7ZDgACChlrG-BrmFZEg_oWoenpzAEAAwIAA3gAAz0E)

对于 4，出度为 0 的结点不唯一，那么这些结点就都可以作为拓扑排序的终点。

![6.4.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3Vq0xW0saBX7A88m0c4GIClctxFAQACCxlrG-BrmFZhl-Zw7WgLpgEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，有多个出度为 0 的点，恰恰说明了这些点是拓扑排序的终点。

对于 B，很容易想到环，但是如果是先笔直的出去然后再接一个环，这样就不是强连通图了。

对于 C，有多个入度为 0 的点，恰恰说明了这些点是拓扑排序的起点。

对于 D，含有顶点数大于 1 的连通分量，意思是必然有一个环。

![6.4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3Zq0xZ8eorlWjd5Vru-EO-nxuL4XwACDBlrG-BrmFY4XnPa7LdqkwEAAwIAA3gAAz0E)

本题应该选 C。如果这道题去掉了有序两个字，那么应该选 D。

意思就是，本来完成任务 1 之后才能完成任务 2，然后故意把任务 1 标记为 2，任务 2 标记为 1。

![6.4.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3dq0xfVj2L4qcNKueUeOlGqNzxU4AACDRlrG-BrmFYO8bfF99uk3wEAAwIAA3gAAz0E)

本题应该选 C。

关键路径长度是最长的，按照题设，答案应该是 18。

![6.4.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3hq0xgkkdgudbC1Z23hAAE-pdG4F0EAAg4Zaxvga5hWc3exhGs4ywABAQADAgADeAADPQQ)

本题应该选。

对于 A，关键路径是以拓扑排序为基础的，显然正确。不过关键路径唯一推导不出来拓扑排序唯一，拓扑排序唯一也推导不出来关键路径唯一，因为关键路径并不需要所有结点都包含，重点在于路径。

对于 B 和 D 说法正确，对于 C 胡言乱语。

![6.4.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3lq0xkxf9KZ9E4Q-lCBh74D8WTecwACEBlrG-BrmFbjQHIncOAI-AEAAwIAA3gAAz0E)

C

![6.4.36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3pq0xlLe693yW4tV6SWOCKV14X8DQACEhlrG-BrmFYRJ2AAAcWoLKEBAAMCAAN4AAM9BA)

B

### DS 王道选择题 1 刷第 7 章

![7.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3tq0xmj0mLzaegLoAkHfeLwfl_ukAACExlrG-BrmFZ8XnhNgzgsiQEAAwIAA3gAAz0E)

本题应该选 B，单纯想当然没有算导致的。

![7.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB3xq0xnUsEvlHNY0OTcB-79cNsqw3AACFBlrG-BrmFYnGdmNjahFdgEAAwIAA3gAAz0E)

本题应该选 B。折半查找判定树本质是一棵二叉平衡树。

![7.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB31q0xnnZJh-fPidRdlJ3Tw4iU1vdgACFRlrG-BrmFbmlrdZWuHXAwEAAwIAA3gAAz0E)

本题应该选 D。

对于 A，还需要顺序存储；对于 B，折半查找本质是二叉平衡树，所以最坏情况下二叉查找树时间性能应该更差；对于 C，这班查找平均查找长度得看元素位置，假设元素位于最左边，那么显然不是；对于 D，显然正确。

![7.5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB35q0xqjcSf0kIac-b6DsMNNa3mw_QACFxlrG-BrmFaKSBqv9yUhoQEAAwIAA3gAAz0E)

本题应该选 D。

![7.5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB39q0xrmiPu9GSe2o4zNSuFWnCwSrgACGBlrG-BrmFYCqcwfAkrCfQEAAwIAA3gAAz0E)

第 8 题应该选 C。不能按照平时学算法的角度来想这道题。

第 9 题应该选 D。

### DS 王道选择题 1 刷第 8 章

![8.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Bq0xs7NtbvvAZucR70lfr1XQwSnAACGRlrG-BrmFbYTOoy0GaxgwEAAwIAA3gAAz0E)

本题应该选 B。

对于 A，得看使用场景，而且快排的性能在大多数情况下优于其他很多排序，例如简单选择排序。

对于 C 和 D 可以举直接插入排序和快排的例子排除。

对于 B，这里的排序结果不同，可以指的是对结构体中的某一个元素排序，然后最后导致结构体顺序不一样。

![8.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Jq0xwSAXTY8UWnKsENoVtYqlEgWQACGxlrG-BrmFYmbD4Eo1J6ZQEAAwIAA3kAAz0E)

本题应该选 B。

![8.3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Nq0xw8ohjeSaeSgSuLLVuXV-CViQACHRlrG-BrmFZdpdMDGCYh5gEAAwIAA3gAAz0E)

本题应该选 D。排除 A 和 C，看 B 和 D，对于多个相同值值这类情况可以规避，或者说可以采用三数取中法进行优化，并且影响也不如基本有序。

![8.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Rq0xzFXkFf1xBFTW_-SH38fhYu6gACIxlrG-BrmFazxIRjDNFB1gEAAwIAA3gAAz0E)

第 10 题应该选 AD。对于花费最快的情形，应该是每次选取轴的时候，尽可能均匀划分。

第 11 题应该选 B。纯模拟。

![8.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Vq0x0ZnzM87lpF7D-LOx0FGwW1yAACJBlrG-BrmFYvzZyymkgRtAEAAwIAA3gAAz0E)

本题应该选 D。

![8.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4Zq0x0uwvXZTfovX-amGpnNSaFP1wACJRlrG-BrmFY1pm65KRe0lAEAAwIAA3gAAz0E)

本题应该选 D。

![8.5.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4dq0x1czjySofHibwYF5_XhpGmy4AACJxlrG-BrmFb-XejqxJ7ksgEAAwIAA3gAAz0E)

本题应该选 B。

$$
N \le m^{S}
$$

本质上是构建 m 叉归并树，也就是。

![8.5.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4hq0x88qYlOPBSgFWKTxrnnIL86rgACLBlrG-BrmFYbZ6gt70mTJAEAAwIAA3gAAz0E)

本题应该选 D。

![8.6.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4lq0x-E2dr1yfPWLsZ_itABFJETBgACMRlrG-BrmFZYXQvLA6z1yQEAAwIAA3gAAz0E)

本题应该选 C

![8.6.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4pq0x-9RIeL-TnKkPmh64soQYTJPgACMxlrG-BrmFbdQmIJQpuM-wEAAwIAA3gAAz0E)

本题应该选 C。教材里的冒泡排序默认是有 flag 的。

![8.6.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB4tq0x_1VQfUQdb1OBlljdlfIquabAACNBlrG-BrmFaS9Hf3JH1TVgEAAwIAA3gAAz0E)

第 10 题应该选 A。对于 A，A 问的是折半插入排序本身、简单选择排序本身的比较次数，而不是对比这两者。包括我也想成了折半插入排序和直接插入排序比较比较次数了。

第 11 题应该选 C，堆不是查找的数据结构。

第 12 题应该选 A，其他两个都有子步骤，所以无所谓。
