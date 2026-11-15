---
title: 杨威线性代数强化 1 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 杨威线性代数强化 1 刷
category: 考研
series: NPEE
seriesOrder: 7.08
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 杨威线性代数强化 1 刷第 1 章

![1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBoVq0LM7a3z87KmtsKmhC9zAxEyDZQACChRrG6jniFbb5FlOWl40NgEAAwIAA3gAAz0E)

> 设三阶行列式
>
> $D_1=\begin{vmatrix}a&b&c\\a^2&b^2&c^2\\a^3&b^3&c^3\end{vmatrix}$，$D_2=\begin{vmatrix}1&1&1\\a^2&b^2&c^2\\a^3&b^3&c^3\end{vmatrix}$，
>
> $D_3=\begin{vmatrix}1&1&1\\a&b&c\\a^3&b^3&c^3\end{vmatrix}$，$D_4=\begin{vmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{vmatrix}$，
>
> 求 $D_1,D_2,D_3,D_4$.

对于这种题，一定要想着往范德蒙行列式上面去凑。

![1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBoZq0LNPZOMB3Q267OZZ_7gfqpBfDgACCxRrG6jniFYToAJTUUP-lQEAAwIAA3gAAz0E)

> (2008，数一、数二、数三) 设 $A$ 为 $n$ 阶非零矩阵，$E$ 为 $n$ 阶单位矩阵，且 $A^3=O$，则（ ）
>
> - A. $E-A$ 不可逆，$E+A$ 不可逆
> - B. $E-A$ 不可逆，$E+A$ 可逆
> - C. $E-A$ 可逆，$E+A$ 可逆
> - D. $E-A$ 可逆，$E+A$ 不可逆

对于这道题，我没有任何思路，用的是排除法。事实上，只需要凑出来 $AB=E$ 这个式子，那么 $A$ 和 $B$ 必然是可逆的（为方阵的前提下）

![1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBodq0LNpDJFFCNEpFMo4LGtRp48aOAACDBRrG6jniFapoRznmhO7swEAAwIAA3gAAz0E)

> (2018，数三) 设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是线性无关的向量组，若 $A\alpha_1=\alpha_1+\alpha_2$，$A\alpha_2=\alpha_2+\alpha_3$，$A\alpha_3=\alpha_1+\alpha_3$，则 $|A|=$ ______.

这道题做的是对的，但是理解有误，没有理解为什么为什么可以这么做以及这么做的含义在哪里（本质是对知识点串联不起来）。

![1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBohq0LN4QUUZGwq1RkYdutz2nNyIBQACDhRrG6jniFYSSaBnNAemIwEAAwIAA3gAAz0E)

> 设矩阵 $A$，$B$ 满足 $A^*BA=2BA-4E$，其中 $A=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-2\end{pmatrix}$，求 $|B|$.

本题为计算问题，即把数字从行列式提出去，一定是 $n$ 次方。这点要和 $A^*$ 的行列式区分开来，$A^*$ 的行列式是 $n-1$ 次方。

![1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBolq0LOJ595hC-O9BIZ6buTTztKIrAACEBRrG6jniFZovms-lnBsfQEAAwIAA3gAAz0E)

> (1995，数学一) 设 $A$ 为 $n$ 阶矩阵，满足 $AA^{\mathrm{T}}=E$，$|A|<0$，$|A+E|=$ ______.

本题采用特值法求解。对于这类题的核心要义是去凑，以及 $A^{\mathrm{T}}+B^{\mathrm{T}}=(A+B)^{\mathrm{T}}$。

![1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBopq0LOgtzbo2GxhQT308iF7bDpcOwACERRrG6jniFZTQ0cGJW0pXwEAAwIAA3gAAz0E)

> 设 $A$，$B$ 都是 3 阶矩阵，已知 $|A|=2$，$|B|=-3$，$A^*$ 是 $A$ 的伴随矩阵，令 $M=\begin{pmatrix}O&3A^*\\2B^{-1}&O\end{pmatrix}$，则 $|M|=$ ______.

计算错误。注意 $(-1)^{n\times n}$。

![1.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBotq0LPZGnedNSUGyPPh4mjxUlS-VwACExRrG6jniFaL89PvenvBogEAAwIAA3gAAz0E)

> 设 $A=(a_{ij})$ 是三阶非零矩阵，$|A|$ 为 $A$ 的行列式，$A_{ij}$ 为 $a_{ij}$ 的代数余子式，若 $a_{ij}+A_{ij}=0$（$i,j=1,2,3$），则 $|A|=$ ______。

本题设出来所有的值，然后试图一个个代入计算，这是错误的。事实上应该考虑到他们的内在联系，即 $A^*$ 和 $A$ 的联系，从而凑出答案。

![1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBoxq0LPsqaH1gtsJMZJaWBpbYkwt3wACFBRrG6jniFZM1PC71Hyn3wEAAwIAA3gAAz0E)

> （2021，数一）设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为代数余子式，若 $A$ 的每行元素之和均为 2，且 $|A|=3$，$A_{11}+A_{21}+A_{31}=$ ______。

对于这道题没有思路。事实上这道题的思路来源应该是第 5 章，也就是 $A$ 的每行元素之和均为 $2$，所以有一个特征值 $2$，而 $A^*$ 的特征值对应为 $A$ 的行列式/特征值，特征向量不变，所以这道题应该是 $1.5$。这道题的本质是在求 $A^*$ 的特征值。

![1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBo1q0LQLy0ELni-g-ocf8RfV4Ev36wACFRRrG6jniFa6D3TBu-gWtAEAAwIAA3gAAz0E)

> 设 $A$ 为 $n$ 阶矩阵，满足 $A^2-2A=3E$，且 $A\neq -E$，证明 $|A-3E|=0$。

概念理解问题，$A\ne-E$，只能说明 $A+E\ne O$，而不可以说明 $A$ 满秩。

![1.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBo5q0LQbKhB2sDG8JrfW9mRk7IH4LQACFhRrG6jniFY0JqK9tfnvuAEAAwIAA3gAAz0E)

> （2015，数二、数三）设 3 阶矩阵 $A$ 的特征值为 $2,-2,1$，$B=A^2-A+E$，其中 $E$ 为 3 阶单位矩阵，则行列式 $|B|=$ ______。

属于小学三年级级别的错误，$3\times 7=21$，而不是 $24$。

![1.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBo9q0LQp6LQW8WK4iG69YvO7hXH6tgACFxRrG6jniFb2gyjBhYZc6gEAAwIAA3gAAz0E)

> （2000，数四）设 $\alpha=(1,0,-1)^T$，矩阵 $A=\alpha\alpha^T$，$n$ 为正整数，则 $|aE-A^n|=$ ______。

这道题错在两个地方，思路错误以及抄错了。

对于这类题，首先计算 $A$ 的 $n$ 次方，然后再 $aE$ 去减即可。本质也是后续知识的串联。

## 杨威线性代数强化 1 刷第 2 章

![2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpBq0LQ9oaMVOuaV9KLddcukGZUtnQACGBRrG6jniFZzpn_-5-OozgEAAwIAA3gAAz0E)

> 已知矩阵 $A=\begin{pmatrix}1&-2&3&4\\2&1&-4&3\\3&-4&-1&-2\\4&3&2&-1\end{pmatrix}$，求 $A^{-1}$。

这道题没思路，利用的是最传统的方法去做。对于这类题，可以考虑 $A$ 和 $A^{\mathrm{T}}$ 之间的关系，从而去凑答案。

![2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpFq0LRODHuf0jlI2NVEFBpUXHEGMwACGRRrG6jniFb5G6YZ_mrYlgEAAwIAA3gAAz0E)

> 设 $A$、$B$ 均是 $n$ 阶实矩阵，以下命题错误的是（ ）
>
> - A. 若 $AB=A+B$，则 $AB=BA$；
> - B. 若 $AB=A+B$，则 $A-E$ 和 $B-E$ 都可逆；
> - C. 若 $tr(AA^T)=0$，则 $A=O$；
> - D. 若矩阵 $A$ 与 $B$ 等价，则一定存在矩阵 $P$，使得 $AP=B$；

概念理解问题。等价，不等价，行等价，躐等贾，这个辨析在二刷那里有详细说明。

此外，对于 $AB=A+B$ 这个式子，一定要记住去凑 $+E-E$。

![2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpNq0LTWn1ltsopjE3DJQUpE0bAI_gACHxRrG6jniFYWUgJowdfPCQEAAwIAA3gAAz0E)

> （2015，数二、数三）设矩阵 $A=\begin{pmatrix}a&1&0\\1&a&-1\\0&1&a\end{pmatrix}$，且 $A^3=O$。
>
> （Ⅰ）求 $a$ 的值；
>
> （Ⅱ）若矩阵 $X$ 满足 $X-XA^2-AX+AXA^2=E$，其中 $E$ 为三阶单位矩阵，求 $X$。

计算 + 思路的双重错误。对于这道题，尤其需要注意能不能取逆。这道题的 $A$ 不可逆，所以必须得配凑去消元。

而原题是注意到利用 $(A+E)^3/(A-E)^3$，我认为考场上我不可能这么注意到。将 $A$ 右乘，然后得到一个式子，再右乘 $A$ 然后带回原式，我认为这个思想才是可取的。

所以也就是说，对于原始式子可能不只是只利用一次，得蜿蜒曲折地前进。

![2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpRq0LTxd4jwYFvuwMDzMDq6B8QhkAACIBRrG6jniFZzf8_cPODzYQEAAwIAA3gAAz0E)

> （2005，数四）设 $A,B,C$ 均为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，若 $B=E+AB$，$C=A+CA$，则 $B-C=$（ ）。
>
> - A. $E$
> - B. $-E$
> - C. $A$
> - D. $-A$

这道题在做的时候采用了特值法。一样也是去提公因子然后去凑就可以了。

![2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpVq0LaIdE00jHQDwQIjQAzc2dG6uwACJBRrG6jniFbU8YWblbGj0wEAAwIAA3gAAz0E)

> 设 $A$、$B$ 均为 $n$ 阶矩阵，且满足 $AB+BA=E$，$E$ 为 $n$ 阶单位矩阵，$k$ 为正整数，则 $A^kB+(-1)^{k+1}BA^k=$ ______。

对这道题没有什么思路。事实上这道题就是前面说的，蜿蜒曲折地前进，以及去凑。例如对于这个式子，两边同时左乘一个 $A$，然后再利用原始的式子进行化简，蜿蜒曲折地前进。

![2.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpZq0LaeJMSrXw_4WXwxZ0HbWrBBEwACJhRrG6jniFZmmmE_qwgZrAEAAwIAA3gAAz0E)

> （2023，数一）设 $A,B,C$ 均为 $n$ 阶矩阵，$ABC=O$，$E$ 为 $n$ 阶单位矩阵，记矩阵 $\begin{pmatrix}O&A\\BC&E\end{pmatrix}$，$\begin{pmatrix}AB&C\\O&E\end{pmatrix}$，$\begin{pmatrix}E&AB\\AB&O\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则（ ）
>
> - A. $r_1\leq r_2\leq r_3$
> - B. $r_1\leq r_3\leq r_2$
> - C. $r_3\leq r_1\leq r_2$
> - D. $r_2\leq r_1\leq r_3$

这道题凭感觉，没有使用严格推到。

对于这类题的变换，一定是要采用乘上可逆矩阵的方法，不可以想当然。例如右乘只能做列变换，左乘只能做行变换，这类东西一定要捋地清清楚楚。

![2.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpdq0LcJHE-KCwIDqHKxv1GKPH_pGAACJxRrG6jniFYIvrBDncGVQgEAAwIAA3gAAz0E)

> （2024，数二）设 $A$ 为 4 阶矩阵，$A^*$ 为 $A$ 的伴随矩阵，若 $A(A-A^*)=O$，且 $A\neq A^*$，则 $r(A)$ 取值为（ ）
>
> - A. 0 或 1
> - B. 1 或 3
> - C. 2 或 3
> - D. 1 或 2

凭直觉做对的。对于这类题一定要注意，$AA^*=|A|E$，当 $A$ 不满秩的时候，$A$ 的行列式为 $0$，从而直接 $AA^*=O$。

![2.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBphq0Lca_P0Xr8bhcbMLncS4VxURvwACKBRrG6jniFaVI3OTI_cttAEAAwIAA3gAAz0E)

> （2018，数二、数三）设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X\ Y)$ 表示分块矩阵，则（ ）
>
> - A. $r(A\ AB)=r(A)$
> - B. $r(A\ BA)=r(A)$
> - C. $r(A\ B)=\max\{r(A),r(B)\}$
> - D. $r(A\ B)=r(A^T\ B^T)$

这道题利用特值法派出了 CD。事实上对于这类题一定是要利用矩阵的秩不等式，采用类似“夹逼”的思想。

![2.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBplq0LeEj58ZhXgLUx1rkMJsvHPM3gACKxRrG6jniFY-AStLhb5o9wEAAwIAA3gAAz0E)

> （2012，数一）设 $\alpha$ 为三维单位列向量，$E$ 为三阶单位矩阵，则矩阵 $E-\alpha\alpha^T$ 的秩为 ______。

没有思路，这道题是和后面知识点的关联。

![2.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBpxq0LfXr40wZZ7WScbqx5yDsrjl_AACLRRrG6jniFZLVbnSMzVqfAEAAwIAA3gAAz0E)

> 设矩阵 $A=\begin{pmatrix}1&1&1\\1&2&a\\1&4&a^2\end{pmatrix}$ 与 $B=\begin{pmatrix}1&3&1\\0&-1&0\\2&0&2\end{pmatrix}$ 行等价，则 $a=$ ______。

行等价一定是做行变换等价，所以是化简为行最简。

![2.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBp1q0Lfq8Q9vombAqCnPGqo6NSfPXgACLhRrG6jniFbIqwvY9SF7DAEAAwIAA3gAAz0E)

> 设 $A$、$B$、$C$、$P$ 都是矩阵，以下命题错误的是（ ）
>
> - A. 若 $AB=AC$，且 $A$ 列满秩，则 $B=C$。
> - B. 若 $n$ 阶矩阵 $A$ 满足 $(A+3E)(A-2E)=O$，则 $r(A+3E)+r(A-2E)=n$。
> - C. 若 $n$ 阶矩阵 $A$ 满足 $A^2=O$，则 $A^*=O$。
> - D. 若矩阵 $A$ 列满秩，则 $r(AB)=r(B)$。

有思路，但是分析错误，尤其是对于 C 的特例。

对于 $C$，显然是举出一个例子，当 $n=2$ 时，对于 $C$ 不成立。对于 $B$ 则是利用秩不等式去“夹”出来，对于 $A$ 和 $D$，由于 $A$ 列满秩，所以对于 $m\times n$ 的矩阵，$m\ge n$，且 $r(A)=n$。利用秩不等式，$r(AB)\ge r(A)+r(B)-n$，即 $r(B)\le r(AB)\le r(B)$，所以 $r(AB)=r(B)$。同理，$r(AC)=r(C)$，所以 $r(B)=r(C)$。

从另一种角度考虑，移过去解方程，方程唯一，所以 $B=C$。

## 杨威线性代数强化 1 刷第 3 章

![3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBp5q0LgAAcecOjoOKNAq6pK3njG7Lu4AAjQUaxuo54hWwj5NApvrYN4BAAMCAAN4AAM9BA)

> （2011，数一、数二、数三）设向量组 $a_1=(1,0,1)^T$，$a_2=(0,1,1)^T$，$a_3=(1,3,5)^T$ 不能由向量组 $\beta_1=(1,1,1)^T$，$\beta_2=(1,2,3)^T$，$\beta_3=(3,4,a)^T$ 线性表示。
>
> （Ⅰ）求 $a$ 的值；
>
> （Ⅱ）将 $\beta_1,\beta_2,\beta_3$ 用 $a_1,a_2,a_3$ 线性表示。

注意方法的简便性与章节的联系。由于 $A$ 不能由 $B$ 表出，那么显然 $A$ 的秩大于 $B$ 的秩。由于 $A$ 满秩，所以 $B$ 不满秩，所以 $|B|=0$。

![3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBp9q0LgSAm3ZV8ZhS1F531fm5sjwqAACNRRrG6jniFbPCO65V4lLEgEAAwIAA3gAAz0E)

> （2019，数二、数三）已知向量组 Ⅰ：$a_1=(1,1,4)^T$，$a_2=(1,0,4)^T$，$a_3=(1,2,a^2+3)^T$；
>
> Ⅱ：$\beta_1=(1,1,a+3)^T$，$\beta_2=(0,2,1-a)^T$，$\beta_3=(1,3,a^2+3)^T$，
>
> 若向量组 Ⅰ 与 Ⅱ 等价，求 $a$ 的取值，并将 $\beta_3$ 用 $a_1,a_2,a_3$ 线性表示。

属于经典的错误标准的零分。秩不满则是无穷多解，我就写了一个，此外满秩也应该进行讨论。

![3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqBq0Lghg1h5tIgGIaxKgyqciSSOBgACNxRrG6jniFYEIeoVMPdW-AEAAwIAA3gAAz0E)

> （2023，数一、数二、数三）已知向量 $a_1=\begin{pmatrix}1\\2\\3\end{pmatrix}$，$a_2=\begin{pmatrix}2\\1\\1\end{pmatrix}$，$\beta_1=\begin{pmatrix}2\\5\\9\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}$。若 $\gamma$ 既可由 $a_1,a_2$ 线性表示，也可以由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$（ ）
>
> - A. $k\begin{pmatrix}3\\3\\4\end{pmatrix},k\in R$
> - B. $k\begin{pmatrix}3\\5\\10\end{pmatrix},k\in R$
> - C. $k\begin{pmatrix}-1\\1\\2\end{pmatrix},k\in R$
> - D. $k\begin{pmatrix}1\\5\\8\end{pmatrix},k\in R$

采用特值法。这道题最正规的做法就是令 $\gamma$ 等于两个式子，然后两个式子变形解出来答案。

但是感觉不如特值法。

![3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqFq0Lgx0Fkxyt8G1LZ1VphOLK3tVgACOBRrG6jniFazzauYLQ_ztAEAAwIAA3gAAz0E)

> 设 $a_1,a_2,\beta_1,\beta_2$ 都是 3 维列向量，且 $a_1,a_2$ 线性无关，$\beta_1,\beta_2$ 线性无关，则一定存在非零向量 $\gamma$ 既可以由 $a_1,a_2$ 线性表示，也可以由 $\beta_1,\beta_2$ 线性表示。

对于这类题要采用反证法。

![3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqJq0LhsVyrdHt-Zd-U5SKLQeDL88AACORRrG6jniFZZFGwRNrFzRwEAAwIAA3gAAz0E)

> （2014，数一、数二、数三）设 $a_1,a_2,a_3$ 均为三维向量，则对任意常数 $k,l$，向量组 $a_1+ka_3,a_2+la_3$ 线性无关是向量组 $a_1,a_2,a_3$ 线性无关的（ ）
>
> - A. 必要非充分条件
> - B. 充分非必要条件
> - C. 充分必要条件
> - D. 既非充分也非必要条件

没有任何思路，二刷的时候也错了。

把握 $P$ 的思想，这个思想特别常见。

![3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqNq0LiPY0816LeRdosF9okeFPCBBwACOhRrG6jniFakEhwJZXQWSwEAAwIAA3gAAz0E)

> （2008，数二、数三）设 $A$ 为三阶矩阵，$a_1,a_2$ 为 $A$ 的分别属于特征值 $-1,1$ 的特征向量，向量 $a_3$ 满足 $Aa_3=a_2+a_3$。
>
> （Ⅰ）证明 $a_1,a_2,a_3$ 线性无关；
>
> （Ⅱ）令 $P=(a_1,a_2,a_3)$，求 $P^{-1}AP$。

这道题错在对定义的理解上。对于这种经典的变形，也就是 $A\alpha$ 这种，一定是构造。（第二问）

对于第一问也没想到用定义的方法去做，对于证明线性无关，采用定义法证明。

![3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqRq0LioPGQVYUbBm-pJMnKRYIKrEgACOxRrG6jniFbaoV6mZ1x5IAEAAwIAA3gAAz0E)

> 已知 4 维向量组 $a_1,a_2,a_3$ 线性无关，且 4 维列向量 $\beta_1,\beta_2$ 均与 $a_1,a_2,a_3$ 正交，证明 $\beta_1,\beta_2$ 线性相关。

这道题没有思路。事实上直接令矩阵然后表达出来就可以做出来了。

大题不要老是想着用特值法。

![3.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqVq0Li7iuOhnOUOgMxFnnS1E32NQAACPBRrG6jniFZ-xZy00ggDkAEAAwIAA3gAAz0E)

> 设 $a_1,a_2,\cdots,a_t,\beta_1,\beta_2,\cdots,\beta_s$ 都为 $n$ 维列向量，存在 $t\times s$ 矩阵 $Q$，满足 $(\beta_1,\beta_2,\cdots,\beta_s)=(a_1,a_2,\cdots,a_t)Q$，以下命题错误的是（ ）
>
> - A. 若 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关，且 $s=t$，则 $a_1,a_2,\cdots,a_t$ 线性无关；
> - B. 若 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关，且 $Q$ 列满秩，则 $a_1,a_2,\cdots,a_t$ 线性无关；
> - C. 若 $a_1,a_2,\cdots,a_t$ 线性无关，且 $Q$ 列满秩，则 $\beta_1,\beta_2,\cdots,\beta_s$ 线性无关；
> - D. 若 $a_1,a_2,\cdots,a_t$ 线性无关，且 $Q$ 列降秩，则 $\beta_1,\beta_2,\cdots,\beta_s$ 线性相关。

对这类题没有头绪，也是二刷最开始写的辨析那里的问题。

![3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqZq0LjObvwXkCwD0BtGAkVXq3ZIBwACPRRrG6jniFbiJgUS91wqgwEAAwIAA3gAAz0E)

> 设 $A$ 是 $n$ 阶矩阵，$a,a_1,a_2,a_3$ 均是 $n$ 维列向量，以下正确的命题是（ ）
>
> - A. 若 $A^2a\neq0$，$A^3a=0$，则向量组 $a,Aa,A^2a$ 线性无关；
> - B. 若向量组 $Aa_1,Aa_2,Aa_3$ 线性相关，则 $a_1,a_2,a_3$ 线性相关；
> - C. 若 $Aa_1,Aa_2,Aa_3$ 线性无关，则矩阵 $A$ 可逆；
> - D. 若 $|A|=0$，则 $Aa_1,Aa_2,Aa_3$ 线性相关。

一样也是辨析的问题。

![3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqdq0LjeroeRKSfbbROtDAn_oJ2ETQACPhRrG6jniFZIHj-87fLC7QEAAwIAA3gAAz0E)

> 设 $A$ 是 $n$ 阶矩阵，$a_1,a_2,a_3$ 均是 $n$ 维列向量，若 $Aa_1=a_1\neq0$，$Aa_2=a_1+a_2$，$Aa_3=a_2+a_3$，则向量组 $a_1,a_2,a_3$ 线性无关。

思路错误，也是之前讨论的“回代”问题，题目条件不一定只使用一次。

![3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqhq0LjxY08WK00qRZ_JzrqxuiBgBgACQBRrG6jniFaOGqogmdjK8wEAAwIAA3gAAz0E)

> 以下命题错误的是（ ）
>
> - A. 设 $n$ 维列向量组 $a_1,a_2,\cdots,a_m$（$m>1$）线性无关，且 $\beta=a_1+a_2+\cdots+a_m$，那么 $\beta-a_1,\beta-a_2,\cdots,\beta-a_m$ 也线性无关。
> - B. 若 $r(A^*)=n-1$，则 $A^*$ 任意两个行（列）向量线性相关。
> - C. 若 $\beta$ 可由 $a_1,a_2,\cdots,a_m$ 线性表示，但不能由 $a_2,a_3,\cdots,a_m$ 线性表示，则 $a_1$ 可由 $\beta,a_2,a_3,\cdots,a_m$ 线性表示，不能由 $a_2,a_3,\cdots,a_m$ 线性表示。

D. 设矩阵 $A$、$B$ 满足 $AB=E$，$E$ 为 $n$ 阶单位矩阵，则 $A$ 的列向量组线性无关，$B$ 的行向量组线性无关。

讨论 $B$ 和 $D$。对于 $D$ 是辨析里面的错误，对于 $B$ 则是脑子抽了错了。被之前那题 $A$ 取 $n=2$ 的反例影响了。

![3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqpq0Llbob9jCv8turzqdjpmvf4CFQACQRRrG6jniFZGl-83bhu2JgEAAwIAA3gAAz0E)

> 设 4 阶矩阵 $A=(a_1,a_2,a_3,a_4)$ 经过初等行变换化为矩阵 $B=(\beta_1,\beta_2,\beta_3,\beta_4)$，向量组 $a_1,a_2,a_3$ 线性无关，且 $a_1-2a_2-3a_3-4a_4=O$，则错误的是（ ）
>
> - A. 向量组 $a_1,a_2,a_3,a_4$ 与 $\beta_1,\beta_2,\beta_3,\beta_4$ 等价；
> - B. 向量组 $\beta_2,\beta_3,\beta_4$ 线性无关；
> - C. 向量组 $\beta_1,\beta_2,\beta_3,\beta_4$ 中的任一向量都可以由其余向量唯一线性表示；
> - D. $\beta_1=2\beta_2+3\beta_3+4\beta_4$。

等价，行相关，列相关，行等价，列等价之类的问题。

## 杨威线性代数强化 1 刷第 4 章

![4.3 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqtq0Ll4dZllepdLnbdLLmQyxIgF6QACQhRrG6jniFYesk9VJbWytAEAAwIAA3gAAz0E)

> （2008，数一）设 $n$ 元线性方程组 $Ax=b$，其中
>
> $A=\begin{pmatrix}2a&1&&&&\\a^2&2a&1&&&\\&a^2&2a&1&&\\&&\ddots&\ddots&\ddots&\\&&&a^2&2a&1\\&&&&a^2&2a\end{pmatrix}_{n\times n}$，$x=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}$，$b=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}$。

![4.3 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBqxq0LmJqs-Bi7Rvk_BnYW_nOTILrwACQxRrG6jniFatrW9E_ZsOoAEAAwIAA3gAAz0E)

> （Ⅰ）证明行列式 $|A|=(n+1)a^n$；
>
> （Ⅱ）当 $a$ 为何值时，该方程组有唯一解，并求 $x_1$；
>
> （Ⅲ）当 $a$ 为何值时，该方程组有无穷多解，并求通解。

这道题主要是数列的首项计算错了，以及没想到克拉默法则。

![4.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBq1q0LmaeL73yXAf2LTjcE0um-mHwAACRBRrG6jniFY_-16ZMjuDnQEAAwIAA3gAAz0E)

> 已知 $3$ 阶矩阵 $A$ 的第一行是 $(a,b,c)$，$a,b,c$ 不全为零，矩阵 $B=\begin{pmatrix}1&2&3\\2&4&6\\3&6&k\end{pmatrix}$（$k$ 为常数），且 $AB=O$，求线性方程组 $Ax=0$ 的通解。

这道题主要是最后一步理解错误，假设 $A$ 的秩和 $B$ 的秩均为 $1$ 的情况下，那么 $B$ 矩阵就没用了。

![4.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBq5q0LmyqS4jkHejgVOGOX2EtTdqngACRRRrG6jniFYNXycnrSH-ggEAAwIAA3gAAz0E)

> 设三阶矩阵 $A=(\alpha_1,\alpha_2,\alpha_3)$ 有 $3$ 个不同的特征值，且 $\alpha_3=\alpha_1+2\alpha_2$。
>
> （Ⅰ）证明 $r(A)=2$；
>
> （Ⅱ）若 $\beta=\alpha_1+\alpha_2+\alpha_3$，求方程组 $Ax=\beta$ 的通解。

从原本的式子下手去变形。

![4.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBq9q0LnEq9VyE7Kfkf2vYMtkW76v-gACRhRrG6jniFa5UmtYMU4SiwEAAwIAA3gAAz0E)

> 分析以下命题，则（ ）
>
> ①若 $r(A_{[?]})+r(B_{[?]})<n$，则方程组 $A_{[?]}x=0$ 与 $B_{[?]}x=0$ 有非零公共解。
>
> ②设 $\xi_1,\xi_2$ 是方程组 $A^Tx=0$ 的基础解系，$\alpha_1,\alpha_2$ 是 $A^T$ 的线性无关列向量，则线性方程组 $x_1\xi_1+x_2\xi_2+x_3\alpha_1+x_4\alpha_2=0$ 只有零解。
>
> ③设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量，若 $r\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}=r(A)$，则方程组 $Ax=\alpha$ 有解。
>
> ④方程组 $A^TAx=A^Tb$ 总有解。
>
> - A. 只有①正确
> - B. 只有①②正确
> - C. 只有①②④正确
> - D. ①②③④都正确

没有任何思路。其实逐项分析即可。

![4.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrBq0LnXtzYMYEfHoY0gdh7vAr8m5wACRxRrG6jniFaWAzm5NZpf-AEAAwIAA3gAAz0E)

> 已知矩阵 $A=\begin{pmatrix}1&-1&-1\\2&a&1\\-1&1&a\end{pmatrix}$，$B=\begin{pmatrix}2&2\\1&a\\-a-1&-2\end{pmatrix}$。当 $a$ 为何值时，方程 $AX=B$ 无解、有唯一解、有无穷多解？在有解时，求解此方程。

![4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrFq0Lnkov9NssfGBaK7rpZK_n5iuAACSBRrG6jniFYnYKGK0RW6EgEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}1&-2&3&-4\\0&1&-1&1\\1&2&0&-3\end{pmatrix}$，$E$ 为单位矩阵。
>
> （Ⅰ）求方程组 $Ax=0$ 的一个基础解系；
>
> （Ⅱ）求满足 $AB=E$ 的所有矩阵 $B$。

这两题属于同质错误，具体在 2 刷那里讲的很清楚了。

![4.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrJq0Ln1xuBjCu6r22syrfLyXshRZQACSRRrG6jniFYvuSj9GJIh5gEAAwIAA3gAAz0E)

> 设四元齐次线性方程组（Ⅰ）为
>
> $\begin{cases}2x_1+3x_2-x_3=0,\\x_1+2x_2+x_3-x_4=0,\end{cases}$
>
> 而已知另一四元齐次线性方程组（Ⅱ）的一个基础解系为
>
> $\alpha_1=(2,-1,a+2,1)^T$，$\alpha_2=(-1,2,4,a+8)^T$。
>
> （1）求方程组（Ⅰ）的一个基础解系；
>
> （2）当 $a$ 为何值时，方程组（Ⅰ）与（Ⅱ）有非零的公共解？在有非零公共解时，求出全部非零公共解。

计算错误。

![4.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrNq0LoFTuva2OhhX_Hnd2A6K-soUAACShRrG6jniFYwYnlmOLi-2AEAAwIAA3gAAz0E)

> 已知齐次线性方程组
>
> （Ⅰ）$\begin{cases}x_1+2x_2+3x_3=0\\2x_1+3x_2+5x_3=0\\x_1+x_2+ax_3=0\end{cases}$ 和（Ⅱ）$\begin{cases}x_1+bx_2+cx_3=0\\2x_1+b^2x_2+(c+1)x_3=0\end{cases}$ 同解，求 $a$，$b$，$c$ 的值。

计算。

![4.24](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrRq0LoVpwImvYV0hxf4Obr-p595CgACSxRrG6jniFYIZRp9mf40ugEAAwIAA3gAAz0E)

> 设矩阵 $A=\begin{pmatrix}1&-1&0&-1\\1&1&0&3\\2&1&2&6\end{pmatrix}$，$B=\begin{pmatrix}1&0&1&2\\1&-1&a&a-1\\2&-3&2&-2\end{pmatrix}$，向量 $\alpha=\begin{pmatrix}0\\2\\3\end{pmatrix}$，$\beta=\begin{pmatrix}1\\0\\-1\end{pmatrix}$。
>
> （1）证明：方程组 $Ax=\alpha$ 的解均为方程组 $Bx=\beta$ 的解；
>
> （2）若方程组 $Ax=\alpha$ 与方程组 $Bx=\beta$ 不同解，求 $a$ 的值。

计算。

![4.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrVq0LomLs61r4ez41eBWPlWUYqWtgACTBRrG6jniFYDV-N62Fn1sQEAAwIAA3gAAz0E)

> 设矩阵 $A$，$B$ 均为 $n$ 阶矩阵，若 $Ax=0$ 与 $Bx=0$ 同解，则（ ）
>
> - A. $\begin{pmatrix}A&O\\E&B\end{pmatrix}x=0$ 仅有零解
> - B. $\begin{pmatrix}AB&B\\O&A\end{pmatrix}x=0$ 仅有零解
> - C. $\begin{pmatrix}A&B\\O&B\end{pmatrix}x=0$ 与 $\begin{pmatrix}B&A\\O&A\end{pmatrix}x=0$ 同解
> - D. $\begin{pmatrix}AB&B\\O&A\end{pmatrix}x=0$ 与 $\begin{pmatrix}BA&A\\O&B\end{pmatrix}x=0$ 同解

这类题就是我前面说的，可逆变换与不可逆的问题。

## 杨威线性代数强化 1 刷第 5 章

![5.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrZq0LpBgLQpkObo8pIBoTAcpKiENAACTRRrG6jniFatwSwUqg2JgwEAAwIAA3gAAz0E)

> 设矩阵 $A$ 满足：对任意 $x_1,x_2,x_3$ 均有 $A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}x_1+x_2+x_3\\2x_1-x_2+x_3\\x_2-x_3\end{pmatrix}$。
>
> （Ⅰ）求 $A$；
>
> （Ⅱ）求可逆矩阵 $P$ 与对角矩阵 $\Lambda$，使得 $P^{-1}AP=\Lambda$。

对于这题我其实不知道能不能直接约去 $x_1$，$x_2$，$x_3$，按照标准答案来写吧。

![5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrdq0LpRgN5AAAEVmTvwFVK_lQ3pf2EAAk8Uaxuo54hWynepiod2VtQBAAMCAAN4AAM9BA)

> 已知 $A$ 是 $3$ 阶矩阵，非齐次线性方程组 $Ax=b$ 的通解为 $2b+k_1\xi_1+k_2\xi_2$，$k_1,k_2$ 为任意常数。求 $A$ 的特征值和特征向量。

一脸懵逼，不知道怎么做。对于通解可以挖掘出来很多东西，这道题显然 $\frac{1}{2}$ 为特征值（一定要注意不是 $2$，这里是把 $x$ 代入），以及 $0$ 为二重特征值且其特征向量分别为。

![5.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrhq0Lpj4Wi0A4k6yhLpMij8E-JxxAACURRrG6jniFatHPdB-JG0owEAAwIAA3gAAz0E)

> 设矩阵 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}$，$P=\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$，$B=P^{-1}A^*P$，求 $B+2E$ 的特征值与特征向量，其中 $A^*$ 是 $A$ 的伴随矩阵，$E$ 为单位矩阵。

可以注意一下这一系列的变形。

![5.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrlq0Lpz1zdyYNF9Y0GtPHSRRotiTgACUhRrG6jniFZOG9GsPbrg2AEAAwIAA3gAAz0E)

> 设向量 $\alpha=(a_1,a_2,\cdots,a_n)^T$，$\beta=(b_1,b_2,\cdots,b_n)^T$ 都是非零向量，且满足条件 $\alpha^T\beta=0$，记 $n$ 阶矩阵 $A=\alpha\beta^T$。求
>
> （Ⅰ）$A^2$；
>
> （Ⅱ）矩阵 $A$ 的特征值和特征向量；
>
> （Ⅲ）证明 $A$ 不能相似对角化。

这道题非常经典，可以注意一下。例如利用 $\mathrm{tr}$ 等，主要是证明相似对角化的方法。

![5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrpq0LqxKrlB2V_ZFGTfJcjnUcptsAACUxRrG6jniFZSK0U_Rkkb3AEAAwIAA3gAAz0E)

> 设 $A$，$B$ 为 $2$ 阶矩阵，且 $AB=BA$，则“$A$ 有两个不相等的特征值”是“$B$ 可以对角化”的（ ）
>
> - A. 充分必要条件
> - B. 充分不必要条件
> - C. 必要不充分条件
> - D. 既不充分也不必要条件

这道题需要注意分析方法。对于特征值还可以采用直接设特征值的做法去解。

![5.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrtq0LreCxBGm4aXlBsGVw9h0k015gACVBRrG6jniFYFnTDnWYGgJQEAAwIAA3gAAz0E)

> 设矩阵 $A=\begin{pmatrix}1&2&-3\\-1&4&-3\\1&a&5\end{pmatrix}$ 的特征方程有一个二重根，求 $a$ 的值，并讨论 $A$ 是否可以对角化。

计算问题。

![5.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBrxq0Lrwq15-xDWK1dvoKCsd3suX-wACVRRrG6jniFaEmkXpMvAfswEAAwIAA3gAAz0E)

> $A$ 为三阶实对称矩阵，$A$ 的秩为 $2$，即 $r(A)=2$，且 $A\begin{pmatrix}1&1\\0&0\\-1&1\end{pmatrix}=\begin{pmatrix}-1&1\\0&0\\1&1\end{pmatrix}$。求
>
> （Ⅰ）$A$ 的特征值与特征向量；
>
> （Ⅱ）矩阵 $A$。

抄错了。

## 杨威线性代数强化 1 刷第 6 章

![6.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBr1q0LsFteoIpr6-83pXXRFkEjGaYgACVhRrG6jniFbWWGkVZ8jH2wEAAwIAA3gAAz0E)

> 设二次型
>
> $f(x_1,x_2,x_3)=2(a_1x_1+a_2x_2+a_3x_3)^2+(b_1x_1+b_2x_2+b_3x_3)^2$，记 $\alpha=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$，$\beta=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$。
>
> （Ⅰ）证明二次型 $f$ 对应的矩阵为 $2\alpha\alpha^T+\beta\beta^T$；
>
> （Ⅱ）若 $\alpha,\beta$ 正交且均为单位向量，证明 $f$ 在正交变换下的标准形为 $2y_1^2+y_2^2$。

对这道题，注意记号问题，本质上是不理解记号的含义。

![6.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBr5q0LsZu7bIqIO4Mt_bgTQPFmahbgACVxRrG6jniFYYP5qFILZ6_AEAAwIAA3gAAz0E)

> 设二次型 $f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_2-2x_2x_3$。
>
> （Ⅰ）求二次型 $f$ 的矩阵的所有特征值；
>
> （Ⅱ）若二次型 $f$ 的规范形为 $y_1^2+y_2^2$，求 $a$ 的值。

计算过程乱七八糟的，一定要注意 $aE+B$ 的优化。

后面就基本没写了。
