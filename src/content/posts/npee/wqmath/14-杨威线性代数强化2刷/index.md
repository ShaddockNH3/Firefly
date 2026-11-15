---
title: 杨威线性代数强化 2 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 杨威线性代数强化 2 刷
category: 考研
series: NPEE
seriesOrder: 7.14
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
辨析一下最几把抽象的秩概念

行等价可以推导出等价，列等价可以推导出等价，只有等价推导不出来任何东西，只能说明秩相等。

假设 $A$ 和 $B$ 列等价，那么 $AQ=B$，$C$ 和 $D$ 行等价，那么 $PC=D$。

对于矩阵 $A$ 和 $B$，假设 $A$ 和 $B$ 行等价，那么 $AX=0$ 和 $BX=0$ 同解。

判断向量组 $\alpha_1$，$\alpha_2$，$\alpha_n$ 是否线性相关，本质上是看等式 $x_1\alpha_1+x_2\alpha_2+\cdots=0$ 时候有零解，所以拼成矩阵 $A$，本质就是齐次线性方程 $Ax=0$。如果只有零解，那么线性无关，有非零解，所以线性相关。而 $A$ 做行变换的时候，可以保证解不变。

对矩阵 $A$ 做初等列变换，那么矩阵列的秩保持不变（也就是说列等价），变了的东西是列向量的线性系数表达。

对矩阵 $A$ 做初等行变换，那么矩阵行的秩保持不变（也就是行等价），系数关系是保留的，但是里面的东西变了。

总共就是这些重要概念比较重要的抽象概念。

## 杨威线性代数强化 2 刷第 1 章

![1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLdq1iZcPTMWfP8exSN6VzlT6XkpcQACrBZrG8YqsVb-PplNhHmMYQEAAwIAA3gAAz0E)

> （2021，数二、数三）多项式 $f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}$ 中的 $x^3$ 项的系数为 ______。

算错了 $2$ 次。先化简到 $3$ 维的形式，然后利用对角线法去做，做的时候尤其要注意两点，一个是最后那一项最高是 $x$ 的四次方，第二是在利用副对角线的时候，一开始就有个负号。

![1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLhq1iZzsEeLFTMMCLuLcjgeBWXPbwACrRZrG8YqsVZI1MBoXuqH8wEAAwIAA3gAAz0E)

> 设三阶行列式
>
> $D_1=\begin{vmatrix}a&b&c\\a^2&b^2&c^2\\a^3&b^3&c^3\end{vmatrix}$，$D_2=\begin{vmatrix}1&1&1\\a^2&b^2&c^2\\a^3&b^3&c^3\end{vmatrix}$，
>
> $D_3=\begin{vmatrix}1&1&1\\a&b&c\\a^3&b^3&c^3\end{vmatrix}$，$D_4=\begin{vmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{vmatrix}$，求 $D_1,D_2,D_3,D_4$。

这道题没有很好的思路。利用范德蒙行列式构造一个四维行列式，然后进行系数对照。

此外，范德蒙行列式的值算出来是是什么，这个也忘记了。

![1.4 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLlq1iaDCbomQcDCvFU_jqaG1kue-AACrhZrG8YqsVafLlc-OVt_OwEAAwIAA20AAz0E)

> [原图非题目：主人手写解答例 1.4 中各行列式的演算过程截图]

![1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLpq1iaOhhF0jq5bfvgMS0pyaGa-GQACrxZrG8YqsVaVnLGDwONUqgEAAwIAA3gAAz0E)

> 设矩阵 $A$，$B$ 满足 $A^*BA=2BA-4E$，其中 $A=\begin{bmatrix}1&0&0\\0&1&0\\0&0&-2\end{bmatrix}$，求 $|B|$。

算成 $-\frac{1}{2}$ 了。其实答案应该是 $2$。

取绝对值得时候，里面的 $2$ 要提出去变成 $2^3$，这个错了无数次了。

![1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLtq1iasMLCLGXcErUDGs69nGjrgXQACsBZrG8YqsVYWNVYXeUKIeAEAAwIAA3gAAz0E)

> 设 $A$，$B$ 均为 3 阶矩阵，且 $|A|=4$，$|B|=-2$，则 $|3B^*A^{-1}+B^{-1}A^*|=$ ______。

混淆 $A^*$ 的行列式和数字提取出去的次数了。

![1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLxq1ia82_Vx526qsoEJuePMfFF1WwACsRZrG8YqsVbqBqH8FR_fVQEAAwIAA3gAAz0E)

> （1995，数学一）设 $A$ 为 $n$ 阶矩阵，满足 $AA^T=E$，$|A|<0$，$|A+E|=$ ______。

从直接的性质去考虑，$A$ 和 $A^{\mathrm{T}}$ 的行列式为 $E$，同时取行列式，也就是 $A$ 行列式必然为 $1$ 或者 $-1$。对于这道题，我仅仅只在想 $A^{\mathrm{T}}$ 和 $A^{-1}$ 之间的关系，而没有去想基于行列式出发的角度去考虑。

还有一点，$A^{\mathrm{T}}+B^{\mathrm{T}}=(A+B)^{\mathrm{T}}$，这个是很多其他东西无法给予的性质，也属于较为冷门的考点。

![1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCL1q1ibRHbqMusr9Wam8yMD1a2VoggACshZrG8YqsVb26teYFRG-VwEAAwIAA3gAAz0E)

> （2012，数二、数三）设 $A$ 为 3 阶矩阵，$|A|=3$，$A^*$ 为 $A$ 的伴随矩阵，若交换 $A$ 的第 1 行与第 2 行得矩阵 $B$，则 $|BA^*|=$ ______。

$3^3$ 是 $27$，不是 $9$。

![1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCL5q1ibi2cwGV5QJZKp9hFyD_9vNngACsxZrG8YqsVa_kvfVHmK7WAEAAwIAA3gAAz0E)

> 设 $A$，$B$ 都是 3 阶矩阵，已知 $|A|=2$，$|B|=3$，$A^*$ 是 $A$ 的伴随矩阵，令 $M=\begin{pmatrix}O&3A^*\\2B^{-1}&O\end{pmatrix}$，则 $|M|=$ ______。

分块矩阵，注意是 $(-1)^{n\times m}$，而不是 $n+m$。

![1.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCL9q1ib4EAZKr96huz647XWzbd6IkgACtBZrG8YqsVaj7zNzGwHSGwEAAwIAA3gAAz0E)

> （2000，数四）设 $\alpha=(1,0,-1)^T$，矩阵 $A=\alpha\alpha^T$，$n$ 为正整数，则 $|aE-A^n|=$ ______。

方法复杂 + 算错。$A^{-1}$ 的符号搞错，写成了 $a^{+}$。此外，这道题应该利用特征值来解，首先显然特征值为 $0$，$0$，$2$，所以用 $n$ 次方，$a^{-1}$ 这些，最后乘起来。

小总结一下，这些属于比较零碎但是高频的考点，需要反复练习，不然很容易遗忘。

对于小考点选填考点，切记不可轻视。

## 杨威线性代数强化 2 刷第 2 章

![2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMBq1ieqMOUQM1Vm9hDXbvs99pEM3QACvxZrG8YqsVYvWIJpR1QW2wEAAwIAA20AAz0E)

> 设矩阵 $A=\begin{bmatrix}1&0&0\\3&1&0\\1&8&1\end{bmatrix}$，求 $A^n$。

这道题放在这里，拆成 $E+B$ 然后用二项式定理去做。

思考，对于这类题，我的想法依然还是一下子去算特征值，特征方程之类的，对于这届求 $A^3$，左下角那个值没想到怎么解。

![2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMFq1igJCXYBGoaf-V09kYumzBs26gACwBZrG8YqsVZHeirwluZcCgEAAwIAA3gAAz0E)

> 已知矩阵 $A=\begin{bmatrix}1&-2&3&4\\2&1&-4&3\\3&-4&-1&-2\\4&3&2&-1\end{bmatrix}$，求 $A^{-1}$。

这道题感觉没招，考场上肯定一下想不出来 $AA^{\mathrm{T}}=aE$。

![2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMJq1igztcQsOUrPr8ai-ldtpN0zfAACwRZrG8YqsVYWm9mz-3sMSgEAAwIAA3gAAz0E)

> （2015，数二、数三）设矩阵 $A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix}$，且 $A^3=O$。
>
> （Ⅰ）求 $a$ 的值；
>
> （Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为三阶单位矩阵，求 $X$。

注意，$XA=\cdots A$，那么 $X-\cdots A=0$，前者不一定为 $0$。

![2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMNq1ihGz_PTMWD8tUPuQgvngAECyQACwhZrG8YqsVY8msG50imfuwEAAwIAA3gAAz0E)

> 设 $A$、$B$ 均为 $n$ 阶矩阵，且满足 $AB+BA=E$，$E$ 为 $n$ 阶单位矩阵，$k$ 为正整数，则 $A^kB+(-1)^{k+1}BA^k=$ ______。

主要是想不到分析方法。对原式子进行变形后也继续利用原来的式子，本题和上一题我认为都可以从整个角度出发，也就是：

![2.12 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMRq1ihonCe7w1CXcn1qCn0LcYmUAAPHFmsbxiqxVug4bhEtglt0AQADAgADeAADPQQ)

> [原图非题目：【评注】关于对矩阵等式作恒等变形时两种情况的流程说明配图（图 2.13 矩阵等式恒等变形的两种情况）]

![2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMVq1ih2uqQQPnsmwYyVmHol-eJdTAACyBZrG8YqsVZGqYLUBe03SAEAAwIAA3gAAz0E)

> 设 $A$ 为 $n$ 阶实对称矩阵，且 $A^3+A^2=2E$，那么以下命题中不正确的是（ ）
>
> - A. $A$ 一定是单位矩阵
> - B. $A$ 一定是正定矩阵
> - C. $A$ 一定是正交矩阵
> - D. $A^2+2A+2E$ 可能是奇异矩阵

结果其他方法分析入脑了，特征值分析又不会了。

![2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMZq1imOymtGX_nuCiHXHMHS-uBd_gAC1RZrG8YqsVbXxRQtUB2jLwEAAwIAA3gAAz0E)

> （2021，数一）设 $A$，$B$ 为 $n$ 阶实矩阵，下列不成立的是（ ）
>
> - A. $r\begin{pmatrix}A&O\\O&A^TA\end{pmatrix}=2r(A)$
> - B. $r\begin{pmatrix}A&AB\\O&A^T\end{pmatrix}=2r(A)$
> - C. $r\begin{pmatrix}A&BA\\O&AA^T\end{pmatrix}=2r(A)$
> - D. $r\begin{pmatrix}A&O\\BA&A^T\end{pmatrix}=2r(A)$

对于这类题进行变换的时候，需要利用乘上某个矩阵进行变换，而不可以是某一行乘上什么加到哪里去，因为这个变化可能是不可逆的。

例如这道题，B 和 D，对于 B 是右乘列变换，对于 D 是左乘行变换，而对于 C 则是不伦不类！

![2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMdq1imh0TB6d5imEV9wShBXB5F2xAAC1hZrG8YqsVYCHUUsGLWDeQEAAwIAA3gAAz0E)

> （2012，数一）设 $\alpha$ 为三维单位列向量，$E$ 为三阶单位矩阵，则矩阵 $E-\alpha\alpha^T$ 的秩为 ______。

没上手做，想当然。

## 杨威线性代数强化 2 刷第 3 章

![3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMhq1ipb_g33Aef9VWvGU8VvycL5QgAC2BZrG8YqsVbh7cwcEDVB0AEAAwIAA3gAAz0E)

> 设 $\alpha_1,\alpha_2,\beta_1,\beta_2$ 都是 3 维列向量，且 $\alpha_1,\alpha_2$ 线性无关，$\beta_1,\beta_2$ 线性无关，则一定存在非零向量 $\gamma$ 既可以由 $\alpha_1,\alpha_2$ 线性表示，也可以由 $\beta_1,\beta_2$ 线性表示。

我的想法是说构造一个 $\gamma=k_1\alpha_1+k_2\alpha_2=l_1\beta_1+l_2\beta_2$，然后变形。最后分类讨论一下，说明必然存在。

答案这里用了一个更高级的结论，$4$ 个 $3$ 维向量一定是线性相关的，所以必然存在一个 $x_1\alpha_1+x_2\alpha_2+x_3\beta_1+x_4\beta_2=0$，其中 $x_1$，$x_2$，$x_3$，$x_4$ 不全为 $0$，然后利用上面的结论，使用反证法证明即可。

一定要记住一个结论，$m$ 个 $n$ 维向量一定是线性相关向量组（$m>n$）

![3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMlq1ip1pVXY1QAB_YnUpDkfvlfolxoAAtkWaxvGKrFWxTuFa-qcVnQBAAMCAAN4AAM9BA)

> （2014，数一、数二、数三）设 $\alpha_1,\alpha_2,\alpha_3$ 均为三维向量，则对任意常数 $k,l$，向量组 $\alpha_1+k\alpha_3,\alpha_2+l\alpha_3$ 线性无关是向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关的（ ）
>
> - A. 必要非充分条件
> - B. 充分非必要条件
> - C. 充分必要条件
> - D. 既非充分也非必要条件

本题错选为 C。对于我自己的推导法而言，第 3 个系数被焊死了在（$km+ln=0$）上，而对于线性无关而言，$x_1$，$x_2$，$x_3$ 必须是三个独立的数。

![3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMpq1iqKtpOF8mBCdatRcIrjopk_LwAC2hZrG8YqsVbXyFJ5OuNzPgEAAwIAA3gAAz0E)

> 设 4 阶矩阵 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 经过初等行变换化为矩阵 $B=(\beta_1,\beta_2,\beta_3,\beta_4)$，向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，且 $\alpha_1-2\alpha_2-3\alpha_3-4\alpha_4=0$，则错误的是（ ）
>
> - A. 向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 与 $\beta_1,\beta_2,\beta_3,\beta_4$ 等价；
> - B. 向量组 $\beta_2,\beta_3,\beta_4$ 线性无关；
> - C. 向量组 $\beta_1,\beta_2,\beta_3,\beta_4$ 中的任一向量都可以由其余向量唯一线性表示；
> - D. $\beta_1=2\beta_2+3\beta_3+4\beta_4$.

本题选出来 $4$ 个选项都是对的。尤其是对于 A，对于 A 想当然认为这是正确了，尤其要注意不可以说明。

这里再次辨析一下等价的概念。行等价可以推导出矩阵等价，列等价可以推导出矩阵等价。这道题向量组等价的意思是说列等价，而这道题的初等变换是行等价。

## 杨威线性代数强化 2 刷第 4 章

![4.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMtq1iqsf4zejmxPZaann943Eq0uyAAC2xZrG8YqsVZBuqo4k8xP-gEAAwIAA3gAAz0E)

> （2012，数一、二、三）设 $A=\begin{pmatrix}1&a&0&0\\0&1&a&0\\0&0&1&a\\a&0&0&1\end{pmatrix}$，$\beta=\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}$。
>
> （Ⅰ）求行列式 $|A|$；
>
> （Ⅱ）当实数 $a$ 为何值时，方程组 $Ax=\beta$ 有无穷多解，并求通解。

非常低级的错误，逐步分析，不要因为题简单而轻视。狮子搏兔，亦用全力。

![4.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCMxq1irCj6hGVfqo6LHSq91KLDfHOwAC3BZrG8YqsVbLd7334a5d0gEAAwIAA3gAAz0E)

> （2005，数一、数二）已知 3 阶矩阵 $A$ 的第一行是 $(a,b,c)$，$a,b,c$ 不全为零，矩阵 $B=\begin{pmatrix}1&2&3\\2&4&6\\3&6&k\end{pmatrix}$（$k$ 为常数），且 $AB=O$，求线性方程组 $Ax=0$ 的通解。

注意一下 $r(A)=1$ 时的分析流程，不要被 B 误导了。

![4.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCM1q1irVGbvFh3ubGXCwM4mi2T1DTgAC3RZrG8YqsVYDcpNUpLkWiQEAAwIAA3gAAz0E)

> （2009，数一、数二、数三）设 $A=\begin{pmatrix}1&-1&-1\\-1&1&1\\0&-4&-2\end{pmatrix}$，$\xi_1=\begin{pmatrix}-1\\1\\-2\end{pmatrix}$。
>
> （Ⅰ）求满足 $A\xi_2=\xi_1$，$A^2\xi_3=\xi_1$ 的所有向量 $\xi_2,\xi_3$；
>
> （Ⅱ）对（Ⅰ）中的任意向量 $\xi_2,\xi_3$，证明 $\xi_1,\xi_2,\xi_3$ 线性无关。

我觉得我还是不要跳步了，在计算解的时候，实实在在地把 $x_1$，$x_2$，$x_3$ 的关系全列出来。

![4.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCM5q1irtoCiQE_BF4PouTMU8Qmd9rQAC4hZrG8YqsVbjePsmExElKQEAAwIAA3gAAz0E)

> 设 4 阶矩阵 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$，方程组 $Ax=\beta$ 的通解为 $(1,2,0,3)^T+k(3,0,1,-2)^T$，$k$ 为任意常数，那么以下错误的是（ ）
>
> - A. 在方程组 $Ax=\beta$ 的解集中可以找到两个线性无关的解向量；
> - B. $\alpha_2$ 能由 $\alpha_1,\alpha_3,\alpha_4$ 线性表示；
> - C. $\alpha_2$ 能由 $\alpha_1,\alpha_4,\beta$ 线性表示；
> - D. $\alpha_3$ 能由 $\alpha_1,\alpha_2,\beta$ 线性表示。

不要忘记初等方法，对于这道题，是代入分析，也就是展开为 $\alpha_1+\alpha_2+\alpha_3=\cdots$ 的形式。

![4.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCM9q1isG6TWjIdHZKbgOIfV3I_HNJwAC6xZrG8YqsVZ17x3EEAmk-AEAAwIAA3gAAz0E)

> 分析以下命题，则（ ）
>
> ①方程组 $A_{3\times5}x=0$ 一定有非零解。
>
> ②若方程组 $A_{n\times n}x=b$ 有两个不同的解，则 $|A|=0$。
>
> ③若 $m>n$，则方程组 $(A_{m\times n}B_{n\times m})x=0$ 一定有非零解。
>
> ④若任意 $n$ 维列向量 $\xi$ 均是 $Ax=0$ 的解，则矩阵 $A$ 的秩是 0。
>
> ⑤若针对任意 $n$ 维列向量 $b$，方程组 $Ax=b$ 均有解，则矩阵 $A$ 的秩是 $n$。
>
> - A. 只有 2 个命题正确
> - B. 只有 3 个命题正确
> - C. 只有 4 个命题正确
> - D. 5 个命题都正确

对于这道题的 5 分析错误，对于 4，可以利用单位向量去证明。对于 5，需要注意是任意，而不是存在。我构造出来的那个是存在。

![4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNBq1iseqF7wczuE2yX-rrcIy-EjuQAC7BZrG8YqsVagToxdI3iVfgEAAwIAA3gAAz0E)

> （2014，数一、数二、数三）设 $A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}$，$E$ 为单位矩阵。
>
> （Ⅰ）求方程组 $Ax=0$ 的一个基础解系；
>
> （Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$。

对于 2，为什么是分别的 $k_1$，$k_2$，$k_3$？

本质上是没有理解 $AB=E$ 进行变换，为什么可以直接写成 $A$，$E$ 矩阵然后进行变化。

本质这个操作是在解并联方程组，对于 $AB=E$ 假设 $A$ 是方阵，$B$ 也是方阵，所以 $[A,E]$ 进行初等变换把左侧变为 $E$ 后，对于右侧，则是 $B$，为什么是 $B$，是因为对 $AX=0$ 的解只有 $0$ 解。所以直接就是 $B$。

那么对于 $AB=C$，$A$ 为 $3\times4$ 的情况（也就是 $m\le n$ 的情况），此时对并联方程组 $(A,C)$ 求解，变化为 $(E,x,M)$，此时对于 $x$ 而言，它是方程额外的根，例如假设有 $x$ 有两列，那么就有 $2$ 个自由变量。所以最后就是 $Ax=0$ 有 $x$ 的列数的通解，最终需要为每个变量单独 $+k$ 个这个自由变量，因为每列是相互独立的！

![4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNFq1is30Hp49iF63Z4pByjTDIHAoAAC7RZrG8YqsVba4VhXH9Ga0AEAAwIAA3gAAz0E)

> （2005，数三）已知齐次线性方程组（Ⅰ）$\begin{cases}x_1+2x_2+3x_3=0,\\2x_1+3x_2+5x_3=0,\\x_1+x_2+ax_3=0\end{cases}$ 和（Ⅱ）$\begin{cases}x_1+bx_2+cx_3=0,\\2x_1+b^2x_2+(c+1)x_3=0\end{cases}$ 同解，求 $a$，$b$，$c$ 的值。

这道题没去做，但是值得分析一下思路。首先是判断 1 必不可能是满秩，从而推导出 $a$ 的值，然后将 1 的基础解系直接代入 2，从而得到 $b$ 和 $c$ 的关系方程组。

## 杨威线性代数强化 2 刷第 5 章

![5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNJq1itLpepOkGXcATRxTQJgnqNQcgAC7hZrG8YqsVbOcuIUs6540AEAAwIAA3gAAz0E)

> 已知 $A$ 是 3 阶矩阵，非齐次线性方程组 $Ax=b$ 的通解为 $2b+k_1\xi_1+k_2\xi_2$，$k_1,k_2$ 为任意常数，求 $A$ 的特征值和特征向量。

需要注意的是，对于这类题还是要实打实的代入进去算，例如 $A(2b)=b$，那么可以知道 $Ab=0.5b$，所以特征值应该是 $0.5$ 才对。

![5.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNNq1itbO3wivMiRn47pEQ_P4KwRDAAC7xZrG8YqsVYsN_4k4gABsicBAAMCAAN4AAM9BA)

> 设 $A=(a_{ij})$ 为 $n$ 阶矩阵，且满足 $A^2=2A$。
>
> （Ⅰ）证明：矩阵 $A$ 可以相似对角化；
>
> （Ⅱ）设 $A_{ij}$ 是 $a_{ij}$ 的代数余子式，$A$ 的秩为 $n-1$，求 $A_{11}+A_{22}+\cdots+A_{nn}$ 的值。

对于第 1 问，感觉还是得灵活应用知识点，对于这道题就没想到 $A-2E$ 和 $A$，用秩不等式去讨论。

![5.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNRq1iwFZ_TC4PCsGTPziim2x9fUKAAC8BZrG8YqsVZujhn5xvhBEwEAAwIAA3gAAz0E)

> （1998，数三）设向量 $\alpha=(a_1,a_2,\cdots,a_n)^T$，$\beta=(b_1,b_2,\cdots,b_n)^T$ 都是非零向量，且满足条件 $\alpha^T\beta=0$，记 $n$ 阶矩阵 $A=\alpha\beta^T$，求
>
> （Ⅰ）$A^2$；
>
> （Ⅱ）矩阵 $A$ 的特征值和特征向量；
>
> （Ⅲ）证明 $A$ 不能相似对角化。

对于这道题没啥大问题，但是需要注意一下分析形式，也就是对于这类矩阵应该如何处理。

![5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNVq1iwfdKdtSvPqy5ZHBaAlOTFXKQAC8hZrG8YqsVaNL1_oLyOA8QEAAwIAA3gAAz0E)

> 设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2$ 为矩阵 $A$ 的分别属于 $1,-1$ 的特征向量，向量 $\alpha_3$ 满足 $A\alpha_3=\alpha_2-\alpha_3$。
>
> （Ⅰ）证明向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关；
>
> （Ⅱ）证明矩阵 $A$ 不能相似对角化。

有点属于低级错误了，证明相似对角化一般有两种方式，第一种是直接找出特征值进行讨论，第二种是找出这个矩阵的相似矩阵进行讨论。

![5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNZq1iwwUIT1yy52dZ5_2I3_VfConQAC8xZrG8YqsVYepmfabldmbgEAAwIAA3gAAz0E)

> （2024，数二）设 $A$，$B$ 为 2 阶矩阵，且 $AB=BA$，则“$A$ 有两个不相等的特征值”是“$B$ 可对角化”的（ ）
>
> - A. 充分必要条件
> - B. 充分不必要条件
> - C. 必要不充分条件
> - D. 既不充分也不必要条件

感觉属于分析范式问题，不知道如何下手，特值法也用的很奇怪。对于这种题我一直想着在 $AB=BA$ 上面利用相似去变形，但是没走出来。事实上应该分开讨论，假设特征向量进行讨论。

这件事提醒了我，所有东西并不一定是都是对原本的方程进行变形，还应该想到如何利用本身的含义。

![5.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNdq1ixIP0WL042zamXsdlse0ZXFpAAC9BZrG8YqsVZjn3GnSowWHQEAAwIAA3gAAz0E)

> （2007，数一、数二、数三）设 3 阶实对称矩阵 $A$ 的特征值为 $1,2,-2$，且 $\alpha_1=(1,-1,1)^T$ 是 $A$ 的属于特征值 1 的一个特征向量，记 $B=A^5-4A^3+E$，其中 $E$ 为单位矩阵。
>
> （Ⅰ）验证 $\alpha_1$ 是矩阵 $B$ 的一个特征向量，并求 $B$ 的全部特征值和特征向量；
>
> （Ⅱ）求矩阵 $B$。

对于这道题，虽然说问题不大，但是感觉还是得注意一下思路。求出特征值和特征向量之后然后求矩阵 $B$，这里的思路需要行云流水。

![5.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNhq1ixwLLbpZGseqdSLdg2-fAEQXwAC9RZrG8YqsVbbrSJHPZdJggEAAwIAA3gAAz0E)

> （2011，数一、数二、数三）$A$ 为三阶实对称矩阵，$A$ 的秩为 2，即 $r(A)=2$，且 $A\begin{pmatrix}1&1\\0&0\\-1&1\end{pmatrix}=\begin{pmatrix}-1&1\\0&0\\1&1\end{pmatrix}$。
>
> 求（Ⅰ）$A$ 的特征值与特征向量；
>
> （Ⅱ）矩阵 $A$。

这道题其实也是问题不大，但是还是需要注意一下，对于实对称矩阵而言，非同一个特征值的向量才必然正交，如果非实对称矩阵，只能推导出来线性无关。

![5.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNlq1iyA8IeGRxExZYKN3W-TsKIVpwAC9hZrG8YqsVbc8EVHnukcGQEAAwIAA3gAAz0E)

> （2010，数二、数三）设 $A=\begin{pmatrix}0&-1&4\\-1&3&a\\4&a&0\end{pmatrix}$，正交矩阵 $Q$ 使得 $Q^TAQ$ 为对角矩阵，若 $Q$ 的第 1 列为 $\dfrac{1}{\sqrt{6}}(1,2,1)^T$，求 $a$，$Q$。

这道题也是对的，但是也有一件事值得注意。如果只有一个式子，那么不能确定两个不同特征值的特征向量。

另外对于这道题也可以注意一下已知向量的时候的处理方式，可以直接相乘，也可以按照上面说的方式去确认。

## 杨威线性代数强化 2 刷第 6 章

![6.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNpq1iy1wKOtdKMupY51yi2m0aiOnQAC-BZrG8YqsVY74vgYSVO5YQEAAwIAA3gAAz0E)

> （2013，数一、数二、数三）设二次型 $f(x_1,x_2,x_3)=2(a_1x_1+a_2x_2+a_3x_3)^2+(b_1x_1+b_2x_2+b_3x_3)^2$，记 $\alpha=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$，$\beta=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$。
>
> （Ⅰ）证明二次型 $f$ 对应的矩阵为 $2\alpha\alpha^T+\beta\beta^T$；
>
> （Ⅱ）若 $\alpha,\beta$ 正交且均为单位向量，证明 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$。

对于这道题的第 2 问，完全没想到什么很好的处理方式。如何证明？其实回归本初，这道题本质上是计算特征值。那么特征值有哪些，所以就可以凑。

记当前矩阵为 $A$，所以试着 $A\alpha$，$A\beta$，结果就可以得出来 $2$ 和 $1$ 是特征值，然后再利用秩不等式判断出第三个特征值为 $0$。
如果是我去做的话我肯定是不妨设 $a$ 是一个单位向量，$b$ 是另一个。

感觉还是思路问题。

![6.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNtq1izRO3u8Tf6fJdZUHP4VbZRwLQAC-RZrG8YqsVbXbOULXat0fAEAAwIAA3gAAz0E)

> （2011，数一）若二次曲面方程 $x^2+3y^2+z^2+2axy+2xz+2yz=4$ 经正交变换化为 $y_1^2+4z_1^2=4$，则 $a=$ ______。

对于这道题，要注意正交这两个字。正交变换，必须得通过矩阵的特征值去走。所以这道题就变成求矩阵的特征值，分别为 $0$，$1$，$4$ 的情况下，$a$ 是多少。

![6.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCNxq1izqmSeOhS4b81i-lbxiFjaYZAAC-xZrG8YqsVaeVBwzvxAipgEAAwIAA3gAAz0E)

> （2009，数一、数二、数三）设二次型 $f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_2-2x_2x_3$，
>
> （Ⅰ）求二次型 $f$ 的矩阵的所有特征值；
>
> （Ⅱ）若二次型 $f$ 的规范形为 $y_1^2+y_2^2$，求 $a$ 的值。

这道题没去做，问题不大，但是需要注意一下更简单的思路，对于这类题，$aE+B$ 是更好的路线。

![6.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCN1q1iz__9Z9eh4OYTMJvR_XR7D2rAAC_BZrG8YqsVb9FIVpPKH2aQEAAwIAA3gAAz0E)

> （2022，数一）设二次型 $f(x_1,x_2,x_3)=\sum\limits_{i=1}^{3}\sum\limits_{j=1}^{3}ijx_ix_j$
>
> （1）求二次型的矩阵；
>
> （2）求正交矩阵 $Q$，使得二次型经正交变换 $x=Qy$ 化为标准形；
>
> （3）求 $f(x_1,x_2,x_3)=0$ 的解。

![6.11 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCN5q1i0LEFkHW_x2c0R31UuUQCWo5AAC_RZrG8YqsVZyTF_ofsjt8gEAAwIAA3gAAz0E)

> [原图非题目：例 6.11 第（3）问的解答过程截图（含 $x=Qy$ 的展开与通解形式）]

感觉对于这道题的第 3 问应该再加深一下理解。

原方程的意思是说，$x_1+2x_2+3x_3=0$，本质上是求在这个东西的条件下，$x_1$，$x_2$，$x_3$ 的解是什么。那我随便分别取 $x_2$ 和 $x_3$ 的值，算出来也是对的。只是说利用正交变换也可以的出来解。
