---
title: 数学近年真题（21-26）1 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 数学近年真题（21-26）1 刷
category: 考研
series: NPEE
seriesOrder: 7.18
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
- 完成时间：20261018-20261023
- 平均分：
- 平均作答时间：

## 2021 真题

- 完成时间：20261018
- 分数：142
- 时间：90+60

模拟卷还是太神秘了，果然还得是真题。

来点聊天记录：

21 年真题 136

感觉有点低

21 年真题是改革以来最简单的一年真题了

+1 分吧

大题俩低级错误，分别 -1，-2

填空一个不会做

一个低级错误 -5

这份卷子 90min 写完，然后检查了 60min，检查出来一道大题错了

挽救了 6 分大概

你大爷的

我要给我自己 +5 分

题印错了

我就说我怎么算都算不出来

那就是 150min 142，还可以

我说

非真题太怪了

而且这份卷子题我大多数应该都没做过

那些写教辅的老师应该在有意控制

总的来讲，其实最后大多数时间都在算第 14 题，题印错了那没招。这提示了我一定要找好的材料去印。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDZq1OdvE1qg8V3nY1qFmfeAGAIlTQACSRNrG1-fqVYKUEHel-QtjAEAAwIAA3gAAz0E)

本题属于低级错误，直接想当然认为是 $r^3-r=0$，但是实际上应该是 $r^3-1=0$，这个错误我错过非常多次了，包括之前总结的时候也总结了。

这道题在二次做的时候依旧没有反应过来。

![18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDdq1OgMOolAeHIGUR63UDfEFMJbwwACShNrG1-fqVanznH2gYtT0QEAAwIAA3gAAz0E)

本题凹凸区间的凹凸二阶导都算出来了，但是最后忽略了 $(x+1)^3$ 也可以讨论正负性，所以 -2。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDhq1OhXbByOvtxF_1IubFUds4xw6QACSxNrG1-fqVbDZpv0--cN-QEAAwIAA3gAAz0E)

题目里明确说了 $x>0$，而我写了 $2$ 个解，所以 -1。

## 2022 真题

- 完成时间：20261020
- 分数：140
  - 大题：-10
- 时间：120+30

还可以，以为自己寄了，其实做的真还行。30min 检查选择题检查出来 1 个。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCXxq2K4XrslwMVfmwn2BznYZfPA15wACGRVrG89ByVbkmM2NwL2TpwEAAwIAA3kAAz0E)

本题有半边犯了一个非常低级的错误：

$\frac{(x-y)^2}{(y-x)^2}=1\ne-1$，从而 -4。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCX1q2K5xWuSwliiy1P8fXg-17VjlBAACGhVrG89ByVZKY99L78s1xQEAAwIAA3kAAz0E)

充分性不会证明，先过。

## 2023 真题

- 完成时间：20261026
- 分数：145
  - 选择：-5
- 时间：90+10+45（第一遍过 + 第二遍过 + 检查）

还可以，但是这 5 分扣在了不该扣的地方。其实也不算不该扣，这道题算二级结论，然后结论忘了，但是推导不熟练，结果就是推错了。

这几个结论的变式需要额外再掌握一下。

检查 45min 检查出来俩填空，一个是法线没加 -，一个是最后一题单纯做的乱七八糟的连贯的低级错误。

![8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfBq3umXh0hcQVZzqhcYbqCUP-VzpwAC8xdrG3KB-VZPxs5NhJx6FAEAAwIAA3cAAz0E)

这道题我自己在做的时候，D 右下角的 B\* 的 \* 漏印了，但是不重要。

这道题我的思路是对的，不过最后还是没执行下去：

分块矩阵求逆只能用分块初等行变换，不能对某一块行「取逆」。即使看起来是取逆，但是更应该表述为同时左乘或者右乘一个什么东西。

$\begin{pmatrix}A&E\end{pmatrix}$ 不是方阵，没有逆；分块矩阵的行只是若干行拼成的行组，本身不是矩阵。可用的操作只有三类：交换两块行；用可逆矩阵左乘某一块行；把某一块行左乘一个矩阵后加到另一块行。

以 $P=\begin{pmatrix}A&E\\O&B\end{pmatrix}$ 为例，把 $P$ 与 $E$ 并排。第一块行左乘 $A^{-1}$，第二块行左乘 $B^{-1}$：

$$
\left(\begin{array}{cc|cc}A&E&E&O\\O&B&O&E\end{array}\right)
\longrightarrow
\left(\begin{array}{cc|cc}E&A^{-1}&A^{-1}&O\\O&E&O&B^{-1}\end{array}\right).
$$

第一块行减去「第二块行左乘 $A^{-1}$」，即第二块行左乘 $-A^{-1}$ 加到第一块行：

$$
\left(\begin{array}{cc|cc}E&O&A^{-1}&-A^{-1}B^{-1}\\O&E&O&B^{-1}\end{array}\right),
$$

于是

$$
P^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{pmatrix}.
$$

当时做到这里没有继续，是想用左乘把 $(1,2)$ 的 $A^{-1}$ 化成 $E$。左乘对整块行生效，$A^{-1}$ 化成 $E$ 的同时，$(1,1)$ 的 $E$ 会被乘回 $A$，两块一起变，得不到 $\begin{pmatrix}E&O\end{pmatrix}$。$(1,2)$ 的目标是 $O$，而 $O$ 只能由「另一块行左乘后加过来」实现，也就是第二步的做法。

求分块伴随只需两件事：$P$ 可逆时 $P^*=|P|P^{-1}$；以及恒成立的 $PP^*=P^*P=|P|E$。所以 $P^*$ 由 $P^{-1}$ 与 $|P|$ 决定，符号只可能来自 $P^{-1}$ 中各块的位置与正负，以及 $|P|$ 的符号。$A$、$B$ 不可逆时，用 $A+tE$、$B+tE$ 替换后令 $t\to 0$ 即可（两端都是 $t$ 的多项式），结论不变。下文按 $A$ 为 $n$ 阶、$B$ 为 $m$ 阶写，三、四两类涉及单位块，取本题的 $A$、$B$ 同为 $n$ 阶。

一、对角型

$$
\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix},
\qquad
\left|\begin{pmatrix}A&O\\O&B\end{pmatrix}\right|=|A||B|,
$$

求逆与求行列式都不需要交换块行，所以没有符号：

$$
\begin{pmatrix}A&O\\O&B\end{pmatrix}^*=\begin{pmatrix}|B|A^*&O\\O&|A|B^*\end{pmatrix}.
$$

注意对角块上配的是另一个块的行列式：$(1,1)$ 是 $|B|A^*$，不是 $|A|A^*$。

二、副对角型

$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}.
$$

块的位置互换，$A^{-1}$ 移到左下，这一步本身不产生符号。符号来自行列式：把第二块行（$m$ 行）整体移到第一块行（$n$ 行）之上，需要 $m\cdot n$ 次相邻行交换，每次变号，所以

$$
\left|\begin{pmatrix}O&A\\B&O\end{pmatrix}\right|=(-1)^{mn}|A||B|,
$$

$$
\begin{pmatrix}O&A\\B&O\end{pmatrix}^*=\begin{pmatrix}O&(-1)^{mn}|A|B^*\\(-1)^{mn}|B|A^*&O\end{pmatrix}.
$$

$(-1)^{n\times m}$ 的来源是交换次数等于两块行数之积，与 $n+m$ 无关：$n=m$ 时 $n^2$ 与 $n$ 同奇偶，可以写成 $(-1)^n$；$n=1$、$m=2$ 时为 $+1$，若按 $(-1)^{n+m}$ 会算成 $-1$。

三、上三角型（本题）

$|P|=|A||B|$，不产生符号，$P^{-1}$ 已在订正里用分块行变换算出。若不用行变换，也可以用 $PX=E$ 解块方程，设 $X=\begin{pmatrix}X_{11}&X_{12}\\X_{21}&X_{22}\end{pmatrix}$：

$$
AX_{11}+X_{21}=E,\quad AX_{12}+X_{22}=O,\quad BX_{21}=O,\quad BX_{22}=E.
$$

由后两式 $X_{21}=O$、$X_{22}=B^{-1}$，代回前两式得 $X_{11}=A^{-1}$，以及

$$
AX_{12}=-X_{22}=-B^{-1}\ \Longrightarrow\ X_{12}=-A^{-1}B^{-1}.
$$

负号来自 $AX_{12}=-X_{22}$：右上块要把 $X_{22}=B^{-1}$ 抵消掉，对应分块行变换里「第一块行减去第二块行左乘 $A^{-1}$」那一步。于是

$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}^*=|A||B|\begin{pmatrix}A^{-1}&-A^{-1}B^{-1}\\O&B^{-1}\end{pmatrix}
=\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix}.
$$

这里 $-|A||B|A^{-1}B^{-1}=-(|A|A^{-1})(|B|B^{-1})=-A^*B^*$，块的顺序不能交换，所以不是 $-B^*A^*$。本题 $A$、$B$ 同为 $n$ 阶，答案为 D。下三角型同理：

$$
\begin{pmatrix}A&O\\C&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix},
\qquad
\begin{pmatrix}A&O\\C&B\end{pmatrix}^*=\begin{pmatrix}|B|A^*&O\\-B^*CA^*&|A|B^*\end{pmatrix}.
$$

四、混合型

$$
\left|\begin{pmatrix}O&A\\B&E\end{pmatrix}\right|=(-1)^{mn}|A||B|
$$

（先交换两块行，化为分块下三角）。求逆仍用 $PX=E$，设 $X=\begin{pmatrix}X_1&X_2\\X_3&X_4\end{pmatrix}$，则 $AX_3=E$、$AX_4=O$、$BX_1+X_3=O$、$BX_2+X_4=E$，即 $X_3=A^{-1}$、$X_4=O$、$X_1=-B^{-1}A^{-1}$、$X_2=B^{-1}$，故

$$
\begin{pmatrix}O&A\\B&E\end{pmatrix}^{-1}=\begin{pmatrix}-B^{-1}A^{-1}&B^{-1}\\A^{-1}&O\end{pmatrix}.
$$

再乘 $|P|$：

$$
\begin{pmatrix}O&A\\B&E\end{pmatrix}^*=\begin{pmatrix}(-1)^{mn+1}B^*A^*&(-1)^{mn}|A|B^*\\(-1)^{mn}|B|A^*&O\end{pmatrix}.
$$

右上、左下的 $(-1)^{mn}$ 来自 $|P|$（本题 $m=n$，即 $(-1)^n$），左上的负号来自 $-B^{-1}A^{-1}$。

最后用 $PP^*=|P|E$ 核对，以 D 为例：

$$
\begin{pmatrix}A&E\\O&B\end{pmatrix}\begin{pmatrix}|B|A^*&-A^*B^*\\O&|A|B^*\end{pmatrix}
=\begin{pmatrix}|A||B|E&-AA^*B^*+|A|B^*\\O&|A||B|E\end{pmatrix}
=\begin{pmatrix}|A||B|E&O\\O&|A||B|E\end{pmatrix},
$$

最后一步用 $AA^*=|A|E$。C 的右上块为 $-AB^*A^*+|A|B^*$，一般不为 $O$，错在把 $A^{-1}B^{-1}$ 写成 $B^{-1}A^{-1}$；A、B 的对角块配成 $|A|B^*$、$|B|A^*$，取 $n=1$、$A=(a)$、$B=(b)$ 即可排除，此时 $P^*=\begin{pmatrix}b&-1\\0&a\end{pmatrix}$。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCfFq3uoLTAiEg6-jLgwahup-niwttgAC9BdrG3KB-VYtoW7SFIINfwEAAwIAA3cAAz0E)

第 16 题可以注意一下方法，这道题我的方法是硬算出 $a$ 和 $b$，分类讨论最后都做出来是 8。

## 2024 真题

- 完成时间：20261101
- 分数：142
  - 选择：-5
  - 大题：-3
- 时间：120+25+15（做完 + 检查选填 + 检查大题前 4 题）

几天没写卷子了（其实是算休息），不过竟然写的不错，证明题也做出来了（没用答案的方法），但是，其实也暴露了一定的问题——这份卷子的选择题我猜了 2 个，并且在最后检查的时候，竟然检查出来 2 选择（1 和 3）以及 1 填空（16）。

大题的 3 分错在第 3 问，最后算答案的时候，没有把最前面的 pi 写上，属于比较低级的错误。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChdq5v56GjlMDx7ouynX60OoesQ3sgACmBVrGzJyOVf8FuMzaRf_RwEAAwIAA3cAAz0E)

本题 -5，一开始没做出来，然后通分一下，乘上去，想着题目条件是发散，所以 an^2+1=0 必然大于 0，而不是像其他那样可以凑出来是 0。典型的忘了题目，题目里 an 是发散的。

不过反例，我想到了奇偶不一样的常数列（在模拟的时候）。

对于 A，构造 A 的奇数项是 2，偶数项是 1/2。

对于 B，构造 B 的奇数项是 1，偶数项是 -1。

对于 C，构造 C 的奇数项是 1，偶数项是 -1。

对于 D，由于 D 严格单调递增，所以构造不出来。

总结一下，从奇偶数列和严格单调分析

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChNq5vvFzm0zJWMbkHh6x12ZI5ht-wACeBVrGzJyOVe332VUxyUnvgEAAwIAA3kAAz0E)

本题做对了，不过是猜的，1 很容易判断出来是错的，2 和 3 猜了必然有一个是对的，一个是错的，所以就选了 B。

利用敛散性判别，x^pf 存在。这里需要注意，本题考察的是趋于无穷时的行为，所以不需要考虑 0 处。

对于 2，由于 p>1，令趋于极限时，fx^p=C，也就是 f=C/x^p。由于 p>1，所以得证。

对于 3，前者收敛，意味着 f(x) 的次数 -n，-n>1，也就是 n<-1。所以考虑 p+n<0。但是事实上，不能这么考虑，因为其并非严格的幂等函数。这个函数的“次数”根本无法用常规的 −n 来衡量，它介于 1/x 和 (1/x)^(1+ϵ) 之间

所以只需要考虑 1/(x(lnx)^2) 即可。

![10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChRq5vvnbs9jletUvhMNUxx3ekre6gAChBVrGzJyOVe5RZEWTB9zewEAAwIAA3kAAz0E)

本题做对了，不过是猜的。必要性判假很容易，取 A 和 B 都是 E 就好了。

充分性，我的想法是设 λ1 和 λ2，然后做，但是最后没做出来。

考虑 Aa=λ1a，同时左乘 B，也就是 BAa=λ1Ba=ABa=λ1Ba。如果 Ba≠0，Ba 和 a 线性相关；如果 Ba=0，那么是 0 的特征向量。

我其实想过这个证明就是了。

![19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChZq5vztpvdfwPxY3sPh9wg1KZrqIQAClRVrGzJyOVc7UMWJYQ2BDAEAAwIAA3cAAz0E)

-3，漏了一个 pi。

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChVq5vyVh_29Dln4dUKSH2lbe76lOQACkhVrGzJyOVeYyJJF9ExyAgEAAwIAA3kAAz0E)

我用的是一个很有技巧性的证明，也就是对 0 和 1 处泰勒展开，然后前者除以 x，后者除以 1-x，然后两式相减，就可以得到答案的式子。

答案的证明方法是拆绝对值设函数，我觉得那种方法才应该是第一反应应该出来的。

## 2025 真题

- 完成时间：20261102
- 分数：135
  - 选择：5
  - 大题：10
- 时间：110+50

这份卷子绝对虚高，首先是第 7 题，这个我以前做过，然后忘了怎么做了。然后其他倒还好，就是第 15 题用了复杂的方法硬算，但是这道题更好的做法是利用偏积分。

然后第 3 题卡住我了，我最后用特值法排除了一些选项，我做出来 -1 是可以的，然后呢，然后我就觉得 C 是错的了，给叉掉了，这是一个很大的失误。

选择题感觉巨奇怪，一开始直接跳了 6 题，回头才慢慢看出来的。比如说第 2 题一开始就跳了，觉得计算太麻烦；第 4 题有点生也跳了（不过后来举例子想起来了）；第 8 题则是一下没想到用配凑法做，第 10 题则是猜的答案（半猜半蒙）。

大题的话，其实也做的不算很顺。首先是第 17 题计算出来很怪（但是答案就是这个样子的），第 18 题思路很卡，第 19 题和第 22 题很顺，第 20 题一开始没敢算下去，是在最后的最后算的检查的时候算的，最后还真是硬算。不过三部分我只算对的两部分，所以 -4。第 21 题证明题的充分性直接过了，先不管（但是这类式子好像挺常见的，比如说在张 8 的卷子 1 和 2 貌似都有类似的）

总的来说，第一，有好几天没按时考试然后突然来考的感觉了（而且昨晚故意小熬来模拟，今早确实状态非常非常一般）。

这份我觉得值得注意。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjBq7su0J-1vrt2vSnqXX33KEusH5AACVRRrGwnUcFcXmIoErVT2TAEAAwIAA3gAAz0E)

这道题我认为是属于不熟悉导致的问题，一下没反应过来导致的错误。这道题我认为有两种做法：

第一，特值法，也就是将 -1 等值代入。然而我当时在考的时候，使用这种方法，脑子不清楚导致错误，从而失误。

第二，分析法。对于 0 到 +♾️，很显然将左侧移过去即可以积分出来（我当时就是这么想的）。

......

纸质分析如下：

![5 分析](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjFq7tOEsKoUIm9Sv5kLu2GTiQPx8QACChZrGwnUeFc5ZdWBpkrCYwEAAwIAA3cAAz0E)

第一块尝试用原本的思路，也就是移过去然后积分，但是分析一直分析不出来。

第二块有那么一点点懂了，但是没最终算出来。

第三块看了 ai 的解法之后才真正意识到，这道题是分析范式错了。在第二块的时候就已经考虑到了 x1<0,x2<0，但是不知道怎么做，第三块看了 ai 才意识到我犯了两个错误：

1. 负数和负数比较的平方要变号
2. 可以利用韦达定理，注意韦达定理 x1+x2 是 -b/a。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjJq7tQdNirB9RJJjiCuEly69ECEogACDBZrGwnUeFdp6inFyLd5HQEAAwIAA3gAAz0E)

在考场上这道题绝对做的是错的（这道题有在武忠祥强化讲义里）

分析一下：

![7 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjNq7thozqlW7FbMOgzE8jU8tzWxUAACERZrGwnUeFe56DlCx_LLfwEAAwIAA3kAAz0E)

1，2 和 3 都是 4 的弱化性表述，都可以转换为证明 4。

对于 3，一定要记住保号性，从而推导出 A 是 0。

这道题其实当初给我的教训就是不要想当然，应该实实在在分析，当然现在给我的感觉也是。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjRq7tl-UtmTbUl8giRdLnH7I3JR8AACFhZrGwnUeFf3rNtebaerLQEAAwIAA3gAAz0E)

这道题方法用复杂了，用的是设 u=y/x 硬解。

但是事实上，这道题可以使用偏积分做，也算是给我开拓了一条思路，本题用偏积分做迎刃而解，用传统方法做非常麻烦。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjVq7topvYjXqa5Qi1IAAWN-VkH2y7gAAhcWaxsJ1HhXlEAAAaJpvc_QAQADAgADeAADPQQ)

这道题给自己 -4，原因上面说过了，从来没想到计算量真的那么大，从 0 到 pi/4 算 sinx 4 次方的积分，不过硬着头皮算下去了，三部分积分算对了两部分，算错了一部分。

不过这个算错的一部分可以用轮换对称性化简，轮换对称性我向来都只用轮换然后加减，而没敢用取 0 到 pi/4 然后双倍。

事实上本题就可以用——因为本题轮换后，积分函数是不变的，利用这个技巧就大大减轻计算量（这道题我正是算错了 pi/4 到 pi/2 拿出去的一小半函数）

![21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCjZq7tp_2YEuv3-niWPjHXOpVDhoVgACGBZrGwnUeFf5phJ82WFQsAEAAwIAA3gAAz0E)

证明题，这类题我确实不会做，但是昨天在写 880 2 刷扫尾的时候（综合选择第 26），偶然发现了凹函数的一个定理，也就是对于 `x1<x2<x3`，x1 和 x2 点对应的斜率是 k1，x2 和 x3 对应的是 k2，x1 和 x3 对应的是 k3，通过绘图可知：`k1<k3<k2`。

尝试用这个做一下，本题必要性可以用拉格朗日中值定理证明，还是很简单的。

对于充分性，先考虑其弱化版的证明：

设函数 $f(x)$ 在区间 $(a,b)$ 内可导，证明导函数 $f'(x)$ 在 $(a,b)$ 内单调不减，即证任意 $u < v$，有 $f'(u) \le f'(v)$）的充分必要条件是：

对 $(a,b)$ 内任意的 $x_1, x_2, x_3$，当 $x_1 < x_2 < x_3$ 时，
$\frac{f(x_2)-f(x_1)}{x_2-x_1} \le \frac{f(x_3)-f(x_2)}{x_3-x_2}$

第一步：在 $u$ 和 $v$ 之间抓点

任取两个固定的点 $u < v$。

我们在它们中间任取两个动点 $x_1, x_2$，满足排列顺序：
$u < x_1 < x_2 < v$

第二步：借用已知条件（三斜率的传递性）

根据割线斜率的单调性，必然有：
$\frac{f(x_1) - f(u)}{x_1 - u} \le \frac{f(x_2) - f(x_1)}{x_2 - x_1} \le \frac{f(v) - f(x_2)}{v - x_2}$

直接抓住头尾：
$\frac{f(x_1) - f(u)}{x_1 - u} \le \frac{f(v) - f(x_2)}{v - x_2}$

第三步：分别向两头取单侧极限！

先让左边的动点逼近左端点：令 $x_1 \to u^+$。

根据导数定义与极限保号性：
$\lim_{x_1 \to u^+} \frac{f(x_1) - f(u)}{x_1 - u} = f'(u)$

于是得到：
$f'(u) \le \frac{f(v) - f(x_2)}{v - x_2}$

再让右边的动点逼近右端点：令 $x_2 \to v^-$。

根据导数定义与极限保号性：
$\lim_{x_2 \to v^-} \frac{f(v) - f(x_2)}{v - x_2} = f'(v)$

于是立刻得到：
$f'(u) \le f'(v)$

然而对于本题的充分性而言，即便采用了类似的证明方法，会导致：

若函数 $g(x) < h(y)$ 恒成立，当自变量取极限时，极限值只能保留弱不等式：
$\lim g(x) \le \lim h(y)$

因此，可以采用以下两种思路：

第一，基于上述方法的情况下，采用反证法。

若存在某对 $u < v$，使得：
$f'(u) = f'(v) = C \quad (C \text{ 为常数})$

因为 $f'(x)$ 已经单调不减，根据单调性的夹逼，对任意的 $x \in [u, v]$，导数都被死死夹在中间：
$C = f'(u) \le f'(x) \le f'(v) = C \implies f'(x) \equiv C \quad (\forall x \in [u, v])$

在区间 $[u, v]$ 上导数恒为常数 $C$，根据微积分基本事实，原函数必然是一条线性直线：
$f(x) = C x + D \quad (\forall x \in [u, v])$

既然是一条直线，那我们在 $[u, v]$ 内部任抓三个点 $x_1 < x_2 < x_3$，算它们的割线斜率：
$\frac{f(x_2)-f(x_1)}{x_2-x_1} = C, \quad \frac{f(x_3)-f(x_2)}{x_3-x_2} = C$

于是：
$\frac{f(x_2)-f(x_1)}{x_2-x_1} = \frac{f(x_3)-f(x_2)}{x_3-x_2}$

这与题目已知的“严格小于（$<$）”条件发生正面车祸，直接矛盾！

第二，额外取一点 c，也就是任意取定两个目标点 $u < v$。取 $c$，满足：$u < c < v$

这个方法有点没看懂，先过一下，大概原理就是利用 `k1<k3<k2` 的传递性，在 u x1 c x2 v 分别取斜率，然后利用拉格朗日中值定理做。

## 2026 真题

- 完成时间：20261119
- 分数：
  - 选择：
  - 填空：
  - 大题：
- 时间：
