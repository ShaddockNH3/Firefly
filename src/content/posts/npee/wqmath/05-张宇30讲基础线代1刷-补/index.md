---
title: 张宇 30 讲基础线代 1 刷（补）
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 张宇 30 讲基础线代 1 刷（补）
category: 考研
series: NPEE
seriesOrder: 7.05
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 张宇 30 讲基础线代 1 刷第 1 章

![1.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBe9q0JX64p_eJp4IMVKrLgvy0J2KAAM6E2sbqOeIVm-iUYRompU2AQADAgADbQADPQQ)

> 计算 $D_4=\begin{vmatrix}2&-1&0&0\\0&2&-1&0\\0&0&2&-1\\-1&0&0&2\end{vmatrix}=$（ ）。
>
> - A. 17
> - B. 15
> - C. 13
> - D. 11

本题错误原因为第 3 行第 4 列的 $-1$ 抄成了 $1$。

![1.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfBq0JYMCtZFtb2-XdrqVcjQsQ816QACOxNrG6jniFa9zaY7AQ1NIwEAAwIAA20AAz0E)

> 计算行列式 $\begin{vmatrix}1&1&1&1\\1&2&0&0\\1&0&3&0\\1&0&0&4\end{vmatrix}$。

本题错误原因为行列式不是矩阵，对某一行乘上一个 $k$，那么外面需要除以一个 $k$，而不是什么都不做。

![1.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfFq0JZhvFpHbJBXHJYQsaI1TTLPJQACPBNrG6jniFZY5BsvTDGrYgEAAwIAA20AAz0E)

> 计算 $n$ 阶行列式 $D_n=\begin{vmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}$。

在全部加到第 1 行提取出来之后不会做了。这道题属于经典题，需要注意。

![1.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfJq0JaIQnsxiuZcPaRTaqjX5YEiVwACPRNrG6jniFZR4J6bGttqvQEAAwIAA20AAz0E)

> 计算行列式 $\begin{vmatrix}a&b&c\\a^2&b^2&c^2\\b+c&a+c&a+b\end{vmatrix}$。

本题硬做的，没想到范德蒙行列式。

![1.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfNq0JaZUm4ygvwhMo_gsw1tMGB5UQACPhNrG6jniFZA-93IAuUIfAEAAwIAA3gAAz0E)

> 计算 $D_4=\begin{vmatrix}1-a&a&0&0\\-1&1-a&a&0\\0&-1&1-a&a\\0&0&-1&1-a\end{vmatrix}=$（ ）。
>
> - A. $a^4+2a^3+6a^2+2a+1$
> - B. $a^4-2a^3+6a^2+a$[?]（原图右侧被裁）
> - C. $a^4+a^3+a^2+a+1$
> - D. $a^4-a^3+a^2-a+1$

三对角矩阵用递推法，本题硬做没做出来。

![1.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfRq0JazU6mQz-sjbDL4dquByZZkJAACPxNrG6jniFYhtIZkuXln_gEAAwIAA20AAz0E)

> 设 $f(x)=\begin{vmatrix}1&0&x\\1&2&x^2\\1&3&x^3\end{vmatrix}$，求 $f(x+1)-f(x)$。

硬算然后算错了。

![1.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfVq0JbY3viiblx73UI7GLpSMyaqEQACQBNrG6jniFZmRi0GX7H4uQEAAwIAA20AAz0E)

> 设关于 $\lambda$ 的方程 $\begin{vmatrix}\lambda-1&-2&3\\1&\lambda-4&3\\-1&a&\lambda-5\end{vmatrix}=0$ 有二重根，求参数 $a$ 的值。

只想到了一边，没想到另一边。

![1.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfZq0Jbr2jJEVFBSLgX7qneVBOMl6wACQRNrG6jniFadqhtH_6sl1wEAAwIAA3gAAz0E)

> 设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维列向量，已知 $A=[\alpha_1,\alpha_2,\alpha_3]$，$B=[\alpha_1-\alpha_2+2\alpha_3,\ 2\alpha_1+3\alpha_2-5\alpha_3,\ \alpha_1+2\alpha_2-\alpha_3]$，且 $|A|=2$，则 $|B-A|=$ ______。

可拆分矩阵，再做一遍果然能有新的不同理解！

![1.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfdq0Jb7CMP60TDIwyEj8rCQcDID1gACQhNrG6jniFYjHo2yJZsdbQEAAwIAA3gAAz0E)

> 设 $|A|=\begin{vmatrix}2&-1&2&3\\0&1&-1&0\\2&3&4&5\\1&1&1&1\end{vmatrix}$，则 $A_{31}+A_{32}+A_{33}+M_{34}=$（ ）。
>
> - A. 8
> - B. 6
> - C. 4
> - D. 2

对概念的理解，没想到替换行。

![1.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfhq0Jcae8dUECFIg62A85P3lhKECQACQxNrG6jniFaPRwftqM6ZgwEAAwIAA3gAAz0E)

> 已知 3 阶矩阵 $B\neq O$，且 $B$ 的每一个列向量都是以下方程组的解：
>
> $\begin{cases}x_1+2x_2-2x_3=0,\\2x_1-x_2+\lambda x_3=0,\\3x_1+x_2-x_3=0.\end{cases}$
>
> (1) 求 $\lambda$ 的值；
>
> (2) 证明 $|B|=0$。

再做一遍确有不晓得收获，对于这道题一开始完全没有意识到是什么意思，也就是学了后面的才知道这道题应该怎么分析，用矩阵不等式，而不是像答案里这样用反证法。

![1.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBflq0JcqWwzHCqd733Vqunabv0Q6lwACRBNrG6jniFZ18CS2_JxlkQEAAwIAA3gAAz0E)

> 设 $f(x)=\begin{vmatrix}x-2&x-1&x-2&x-3\\2x-2&2x-1&2x-2&2x-3\\3x-3&3x-2&4x-5&3x-5\\4x&4x-3&5x-7&4x-3\end{vmatrix}$，则方程 $f(x)=0$ 的根的个数为（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4
>
> 设 $|A|=\begin{vmatrix}1&-1&0&1\\-2&1&-1&1\\3&-2&2&-1\\0&0&3&4\end{vmatrix}$，$A_{1j}$ 是元素 $a_{1j}(j=1,2,3,4)$ 的代数余子式，则 $A_{11}-A_{12}=$（ ）。
>
> - A. 4
> - B. $-4$
> - C. 2
> - D. $-2$
>
> 多项式 $f(x)=\begin{vmatrix}x&x&1&2x\\1&x&2&-1\\2&1&x&1\\2&-1&1&x\end{vmatrix}$ 中 $x^3$ 项的系数为 ______。

第 1 题，第 3 题没做，除了硬解之外没什么好方法。

第 2 题直接带进去了，没有考虑是否应该变号。

## 张宇 30 讲基础线代 1 刷第 2 章

![2.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfpq0JdA30DM-cmbqZwiIOxANEQCJgACRRNrG6jniFZb3HJuExFBfgEAAwIAA3gAAz0E)

> 设 $\alpha=[a_1,a_2,a_3]^T$，$\beta=[b_1,b_2,b_3]^T$，$A=\alpha\beta^T$，则 $A^n=$ ______。

本题没想到可以中间合并，需要注意的是，不要把矩阵当一个简单的 $a$，$b$ 数值元素看待 0。

![2.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBftq0JduZbJJoW_0wI_fJ6CHsf6K4gACRxNrG6jniFZ6Dh8NTmgSrgEAAwIAA20AAz0E)

> 设 $A=\begin{bmatrix}1&-1&-1&-1\\-1&1&-1&-1\\-1&-1&1&-1\\-1&-1&-1&1\end{bmatrix}$，则 $A^9=$ ______。

本题犯了一个经典的错误，标准的零分，那就是将 $A$ 先变形成好算的样子再求幂，先变形意味着 $A$ 不再是原本的 $A$ 了。

![2.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBfxq0Je96WOARZxfgk1atRWs_1zduwACSBNrG6jniFb0ESTKN-sYcAEAAwIAA20AAz0E)

> 已知 $A=\begin{bmatrix}1&1&0\\0&1&1\\0&0&1\end{bmatrix}$，求 $A^n$。

本题是没想到可以将 $E$ 拆出来，事实上对于这种题后续直接用求相似的方式去解就可以了。

![2.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBf1q0JfZpG6brh72mmg2QV4rqqEaeAACSRNrG6jniFZZ-590MOBNbgEAAwIAA3gAAz0E)

> 设 $A,B$ 是同阶可逆方阵，且 $A^{-1}+B^{-1}$ 可逆，证明 $A+B$ 是可逆矩阵，并求 $(A+B)^{-1}$。

本题没有思路。事实上需要将二者联系起来，也就是找一个可逆矩阵联系起来就好了。

多个可逆矩阵相乘一定是可逆矩阵，用行列式证明即可。

![2.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBf5q0Jf5KCwCif71fqZBMLlKUGYiagACShNrG6jniFYK7eq6AR7pCgEAAwIAA3gAAz0E)

> 已知 $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$，写出 $A$ 可逆的一个充要条件，当 $A$ 可逆时，求 $A^{-1}$。

$A^*$ 是竖着写。

![2.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBf9q0JgHVTZLVrxTPNyiQVts6j0u4AACSxNrG6jniFZZUNfjX92flAEAAwIAA20AAz0E)

> 求矩阵 $A=\begin{pmatrix}1&0&1\\2&1&0\\-3&2&-5\end{pmatrix}$ 的逆矩阵。

算出 $A^*$ 后，第一行第三列符号抄反。

![2.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgABatCYGGzmcNf46vzz3LYpojp0L2cAAkwTaxuo54hWhD3425z2QygBAAMCAAN4AAM9BA)

> 设 $A$，$B$ 均为 2 阶方阵，$A^*$，$B^*$ 分别为 $A$，$B$ 的伴随矩阵，若 $|A|=2$，$|B|=3$，则分块矩阵 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$ 的伴随矩阵为（ ）。
>
> - A. $\begin{pmatrix}O&3B^*\\2A^*&O\end{pmatrix}$
> - B. $\begin{pmatrix}O&2B^*\\3A^*&O\end{pmatrix}$
> - C. $\begin{pmatrix}O&3A^*\\2B^*&O\end{pmatrix}$
> - D. $\begin{pmatrix}O&2A^*\\3B^*&O\end{pmatrix}$

忘记拉普拉斯定理。

![2.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgFq0JgsF8daY4E03oWsMtfsCv7dagACTRNrG6jniFbriFO_DaB8PwEAAwIAA3gAAz0E)

> 设 $A$，$B$ 是 $n$ 阶方阵，$|A|=2$，$|B|=-4$，则 $|2B^*A^{-1}|=$ ______。

提取提出去的时候要 $n$ 次方，需要注意。

![2.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgJq0Jg_LHU2SfB-P3bc41jka6gJ2gACThNrG6jniFbSRS9sfAb-pgEAAwIAA3gAAz0E)

> 设矩阵 $A$ 的伴随矩阵 $A^*=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&-3&0&8\end{pmatrix}$，且 $ABA^{-1}=BA^{-1}+3E$，其中 $E$ 是 4 阶单位矩阵，求矩阵 $B$。

本题错误原因在使用伴随矩阵提出去的时候没有按照行列式去算，也就是没有 $n$ 次方。

![2.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgNq0JhWYNOpCnpo5gXaiWevtXfHqAACTxNrG6jniFZcHFybIRQGBgEAAwIAA3gAAz0E)

> 设矩阵 $A=\begin{pmatrix}1&0&1\\-1&-1&1\\0&2&a\end{pmatrix}$，$B=\begin{pmatrix}1&0&1\\0&-1&2\\0&0&0\end{pmatrix}$。
>
> (1) 当 $a$ 为何值时，矩阵 $A$ 和 $B$ 等价；
>
> (2) 当 $A$ 和 $B$ 等价时，求一个可逆矩阵 $P$，使得 $PA=B$。

与错题重刷时错误原因一致，没有考虑到可逆。

![2.1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgRq0Jhn4slgJFOGOtmrRV7iDN0-uwACUBNrG6jniFaQyQ9-yhS2QAEAAwIAA3gAAz0E)

> 设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times m$ 矩阵，$E$ 为 $m$ 阶单位矩阵，若 $AB=E$，则（ ）。
>
> - A. $r(A)=m$，$r(B)=m$
> - B. $r(A)=m$，$r(B)=n$
> - C. $r(A)=n$，$r(B)=m$
> - D. $r(A)=n$，$r(B)=n$

主要是矩阵不等式的应用需要熟练。

![2.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgVq0Jh5epaNLLRzv6liICaP-0rYdAACURNrG6jniFagECWQeu7KbAEAAwIAA3gAAz0E)

> 设 3 阶矩阵 $A=\begin{pmatrix}a&b&b\\b&a&b\\b&b&a\end{pmatrix}$，其中 $b\ne0$，已知 $A$ 的伴随矩阵 $A^*$ 的秩为 $r(A^*)=1$，则 $a$，$b$ 应满足关系（ ）。
>
> - A. $a=b$
> - B. $a=-2b$
> - C. $a=0$
> - D. $a=2b$

本题没有考虑利用行列式法进行考虑。

![2.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgZq0JiJdFThGe3hN3SySKChNi7YowACUhNrG6jniFaOzXhWeLL-qAEAAwIAA20AAz0E)

> 设 $A=\begin{pmatrix}1&2&-1\\-2&-4&2\\3&6&-3\end{pmatrix}$，则 $A^n=$ ______。

本题 $-6$ 的 $n$ 次方的 $n$ 系数错误，属于低级错误。

![2.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgdq0Ji3GdrKrjATU1Z93kJdN4agWgACUxNrG6jniFafK9nGTqvgGAEAAwIAA3gAAz0E)

> 设矩阵 $A$ 满足 $A^2+A-4E=O$，其中 $E$ 为单位矩阵，则 $(A-E)^{-1}=$ ______。
>
> 设 $A=\begin{pmatrix}1&0&0&0\\-2&3&0&0\\0&-4&5&0\\0&0&-6&7\end{pmatrix}$，$E$ 为 4 阶单位矩阵，且 $B=(E+A)^{-1}(E-A)$，则 $(E+B)^{-1}=$ ______。
>
> 设矩阵 $A=(a_{ij})_{3\times3}$ 满足 $A^*=A^T$，其中 $A^*$ 为 $A$ 的伴随矩阵，$A^T$ 为 $A$ 的转置矩阵，若 $a_{11}$，$a_{12}$，$a_{13}$ 为三个相等的正数，则 $a_{11}=$ ______。
>
> 设矩阵 $\begin{pmatrix}a&-1&-1\\-1&a&-1\\-1&-1&a\end{pmatrix}$ 与 $\begin{pmatrix}1&1&0\\0&-1&1\\1&0&1\end{pmatrix}$ 等价，则 $a=$ ______。

第 9 题主要是没想到可以用那种方法表达。

第 10 题取逆的时候化简错误。

第 11 题在那里展开算，而不是同时取行列式分析，属于方法性错误。

第 12 题没有考虑到等价是秩相等。

![2.2.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBghq0JjPbb-WRe72_Pcy5t6publYzwACVBNrG6jniFbCxH8s_EZs0gEAAwIAA3gAAz0E)

> 设 3 阶方阵 $A$，$B$ 满足 $A^{-1}BA=6A+BA$，且 $A=\begin{pmatrix}\frac{1}{3}&0&0\\0&\frac{1}{4}&0\\0&0&\frac{1}{5}\end{pmatrix}$，求 $B$。
>
> 设 4 阶矩阵 $B=\begin{pmatrix}0&-1&0&0\\0&0&-1&0\\0&0&0&-1\\0&0&0&0\end{pmatrix}$，$C=\begin{pmatrix}2&1&3&4\\0&2&1&3\\0&0&2&1\\0&0&0&2\end{pmatrix}$，且矩阵 $A$ 满足关系式 $A(E-C^{-1}B)^TC^T=E+A$，求矩阵 $A$。

第 14 题主要的问题是提取错误，例如 $B-AB=(E-A)B$，这个需要尤其注意。

第 15 题取逆计算错误。

## 张宇 30 讲基础线代 1 刷第 3 章

![3.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBglq0JjszvY6BiGfzyWy3p0WseXuAgACVRNrG6jniFZ4u2A-UT_ZYgEAAwIAA3gAAz0E)

> 已知 $\alpha_1=[1,4,0,2]^T$，$\alpha_2=[2,7,1,3]^T$，$\alpha_3=[0,1,-1,a]^T$，$\beta=[3,10,b,4]^T$。问：
>
> (1) $a$，$b$ 取何值时，$\beta$ 不能由 $\alpha_1$，$\alpha_2$，$\alpha_3$ 线性表示？
>
> (2) $a$，$b$ 取何值时，$\beta$ 可由 $\alpha_1$，$\alpha_2$，$\alpha_3$ 线性表示？并写出此表达式。

对于这题，本质上是一刷的时候没有捋清楚向量组和方程之间的关系，所以完全不会做。

![3.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgpq0JkGnwKOR724yrgf-I-iEvMiKwACVhNrG6jniFbtHk5QmuptDwEAAwIAA3gAAz0E)

> 已知 4 维列向量组 $\alpha_1$，$\alpha_2$，$\alpha_3$，$\alpha_4$ 线性无关，则下列向量组中线性无关的是（ ）。
>
> - A. $\alpha_1-\alpha_2$，$\alpha_2-\alpha_3$，$\alpha_3-\alpha_4$，$\alpha_4-\alpha_1$
> - B. $\alpha_1+\alpha_2$，$\alpha_2+\alpha_3$，$\alpha_3+\alpha_4$，$\alpha_4+\alpha_1$
> - C. $\alpha_1+\alpha_2$，$\alpha_2+\alpha_3$，$\alpha_3-\alpha_4$，$\alpha_4-\alpha_1$
> - D. $\alpha_1+\alpha_2$，$\alpha_2+\alpha_3$，$\alpha_3+\alpha_4$，$\alpha_4-\alpha_1$

$0$ 向量肯定和其他向量线性相关。

![3.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgtq0JkVArvMM8n8OaVjnNbewVug0wACVxNrG6jniFYlbLKIQqbhUAEAAwIAA3gAAz0E)

> 设 $a_1$，$a_2$，$\cdots$，$a_s$ 是 $s$ 个互不相同的数，试讨论 $s$ 个 $n$ 维列向量 $\alpha_i=[1,a_i,a_i^2,\cdots,a_i^{n-1}]^T\ (i=1,2,\cdots,s)$ 的线性相关性。

没有考虑过方阵时采用行列式法。

![3.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBgxq0JkntWX7smPeXjoZzOT1hJKgwAACWBNrG6jniFYyZh-Xshl7pwEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}1&-2&-1&2\\2&-3&-2&3\\2&-2&-2&2\\1&-1&-1&1\end{pmatrix}=BC$，$B=\begin{pmatrix}-1&-2\\-2&-3\\-2&-2\\-1&-1\end{pmatrix}$，则 $CB=$（ ）。
>
> - A. $\begin{pmatrix}1&0\\-1&2\end{pmatrix}$
> - B. $\begin{pmatrix}1&0\\-1&-2\end{pmatrix}$
> - C. $\begin{pmatrix}-1&0\\-1&2\end{pmatrix}$
> - D. $\begin{pmatrix}-1&0\\-1&-2\end{pmatrix}$

用矩阵定义去做，错题重刷时计算错误（$-1$ 想成 $1$）

![3.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBg1q0Jk7pBqVAAHTwBgAAZXcNiIPFT6LAAJaE2sbqOeIVn-k7BIa7YUbAQADAgADbQADPQQ)

> 证明：$r(AB)\le\min\{r(A),r(B)\}$。

![3.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBg9q0JoHgmkovJISZl9x9REI5MDR0AACWxNrG6jniFa_bWybATyS9wEAAwIAA3gAAz0E)

> 设 $A$，$B$ 均是 $m\times s$ 矩阵，证明：$r(A+B)\le r([A,\ B])\le r(A)+r(B)$。

![3.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhBq0JoSzD24H5BA37YRULXj1-kyvwACXBNrG6jniFbPSFRKAm-BIQEAAwIAA3gAAz0E)

> 设 $A$ 是 $n(n\ge2)$ 阶方阵，$A^*$ 是 $A$ 的伴随矩阵。证明：$r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)<n-1.\end{cases}$

这三题 1 刷的时候直接跳了。

![3.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhFq0JoiqD5aVO-ekQKrv7-NpqstuwACXRNrG6jniFZNMX2KZfX2zgEAAwIAA3gAAz0E)

> 设 $\alpha_1=\begin{pmatrix}0\\0\\c_1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}0\\1\\c_2\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\-1\\c_3\end{pmatrix}$，$\alpha_4=\begin{pmatrix}-1\\1\\c_4\end{pmatrix}$，其中 $c_1$，$c_2$，$c_3$，$c_4$ 为任意常数，则下列向量组线性相关的是（ ）。
>
> - A. $\alpha_1$，$\alpha_2$，$\alpha_3$
> - B. $\alpha_1$，$\alpha_3$，$\alpha_4$
> - C. $\alpha_1$，$\alpha_2$，$\alpha_4$
> - D. $\alpha_2$，$\alpha_3$，$\alpha_4$
>
> 设 $\alpha_1=\begin{pmatrix}\lambda\\1\\1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\\lambda\\1\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\1\\\lambda\end{pmatrix}$，$\alpha_4=\begin{pmatrix}1\\1\\\lambda^2\end{pmatrix}$。若向量组 $\alpha_1$，$\alpha_2$，$\alpha_3$ 可由 $\alpha_1$，$\alpha_2$，$\alpha_4$ 线性表示，则 $\lambda$ 的取值范围是（ ）。
>
> - A. $\{1,-1\}$
> - B. $\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne1\}$
> - C. $\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne-1\}$
> - D. $\{\lambda\mid\lambda\in\mathbf{R},\lambda\ne1,\lambda\ne-1\}$

第 2 题为低级错误，但凡多想一下就不会错。

第 3 题是想错了谁应该秩更大。

## 张宇 30 讲基础线代 1 刷第 4 章

![4.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhJq0Jo7oN_ZTRzRPBMQILbR2uW7LAACXhNrG6jniFZ0OhCjeGILWgEAAwIAA3gAAz0E)

> 求齐次线性方程组 $\begin{cases}x_1+x_2-3x_4-x_5=0,\\x_1-x_2+2x_3-x_4=0,\\4x_1-2x_2+6x_3+3x_4-4x_5=0,\\2x_1+4x_2-2x_3+4x_4-7x_5=0\end{cases}$ 的通解。

单纯是没有捋清楚解这种题的套路。

![4.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhNq0Jp3PjPBqEvVdRj3xRMqspsDhQACXxNrG6jniFbHKcbo2Vv8IAEAAwIAA3gAAz0E)

> 与向量 $\alpha_1=[2,-1,-3]$，$\alpha_2=[-3,1,5]$ 都正交的单位向量 $\beta^0=$ ______。

没有捋清楚背后的转换，以及没有填+-

![4.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhRq0JsNL6Nlnd4ubzWlhYFd1zFkOQACYxNrG6jniFaKpBcRN5SHQwEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\end{pmatrix}$，$B=\begin{pmatrix}b_{11}&b_{12}\\b_{21}&b_{22}\\b_{31}&b_{32}\end{pmatrix}$，若 $AB=\begin{pmatrix}1&0\\2&1\end{pmatrix}$，则齐次线性方程组 $Ax=0$，$By=0$ 线性无关解的个数分别是（ ）。
>
> - A. $0$，$1$
> - B. $1$，$0$
> - C. $2$，$1$
> - D. $2$，$0$

完全没有想到从秩不等式的角度出发。

![4.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhVq0JsgUbX9SKvq5IXrQsqD7VV3JAACZRNrG6jniFY0a4Y0kqts5AEAAwIAA3gAAz0E)

> 设 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$ 是 4 阶矩阵，$A^*$ 为 $A$ 的伴随矩阵，若 $[1,0,1,0]^T$ 是方程组 $Ax=0$ 的一个基础解系，则 $A^*x=0$ 的基础解系可以为（ ）。
>
> - A. $\alpha_1$，$\alpha_3$
> - B. $\alpha_1$，$\alpha_2$
> - C. $\alpha_1$，$\alpha_2$，$\alpha_3$
> - D. $\alpha_2$，$\alpha_3$，$\alpha_4$

本题也一样是秩不等式。

![4.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhZq0JtFbrAl6XmOYe9TaP8ZjdyMpQACZhNrG6jniFapTHgqCbRHKAEAAwIAA3gAAz0E)

> 设 $\xi_1$，$\xi_2$，$\xi_3$ 是方程组 $Ax=0$ 的基础解系，则下列向量组中也是方程组 $Ax=0$ 的基础解系的是（ ）。
>
> - A. $\xi_1-\xi_2$，$\xi_2-\xi_3$，$\xi_3-\xi_1$
> - B. $\xi_1+\xi_2$，$\xi_2-\xi_3$，$\xi_3+\xi_1$
> - C. $\xi_1+\xi_2-\xi_3$，$\xi_1+2\xi_2+\xi_3$，$2\xi_1+3\xi_2$
> - D. $\xi_1+\xi_2$，$\xi_2+\xi_3$，$\xi_3+\xi_1$

本题想当然地认为 D 是错的，而没有上手去算。

![4.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhdq0JtYJXKrfRBd3a8kclCynrAE5gACZxNrG6jniFb2lfd0rHH0kAEAAwIAA3gAAz0E)

> 设非齐次线性方程组为 $A_{m\times n}x=b$，则（ ）。
>
> - A. 当 $r(A)=m$ 时，方程组有解
> - B. 当 $r(A)=n$ 时，方程组有唯一解
> - C. 当 $m=n$ 时，方程组有唯一解
> - D. 当 $r(A)<n$ 时，方程组有无穷多解

![4.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhhq0Jtk9OOGWegicpPAb8l6rySt3wACaBNrG6jniFYw97_qgOV9wgEAAwIAA3gAAz0E)

> 设 $A$ 是 $m\times n$ 实矩阵，则对任意 $m$ 维列向量 $b$，线性方程组 $A^TAx=A^Tb$（ ）。
>
> - A. 无解
> - B. 有解
> - C. 必有唯一解
> - D. 必有无穷多解

这两题都应该从秩不等式的角度去考虑。

![4.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhlq0Jt1U9dCn8WrHpEzU2wfKIQyhAACaRNrG6jniFYNomN6yMvMgwEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}\lambda&1&1\\0&\lambda-1&0\\1&1&\lambda\end{pmatrix}$，$b=\begin{pmatrix}a\\1\\1\end{pmatrix}$。已知线性方程组 $Ax=b$ 存在两个不同的解。
>
> (1) 求 $\lambda$，$a$ 的值；
>
> (2) 求方程组 $Ax=b$ 的通解。

从来没有想过可以从行列式的角度去思考，本质是对线代的理解不足，没有非常融会贯通。

![4.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhpq0JuHKx5uTD5r97M7w_DLLP_UbAACahNrG6jniFbeq1ZL_PMZiwEAAwIAA3gAAz0E)

> 设 $r(A_{4\times4})=2$，$\eta_1$，$\eta_2$，$\eta_3$ 是 $Ax=b$ 的 3 个解向量，其中 $\begin{cases}\eta_1-\eta_2=[-1,0,3,-4]^T,\\\eta_1+\eta_2=[3,2,1,-2]^T,\\\eta_3+2\eta_2=[5,1,0,3]^T,\end{cases}$ 则 $Ax=b$ 的通解是 ______。

对于这类题要辨析解的结构，然后就迎刃而解了。

![4.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhtq0JuYfWksbCziRyZQiwaydopTTQACbBNrG6jniFZ7aS2LRq5WpgEAAwIAA3gAAz0E)

> 已知 $A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4]$，其中 $\alpha_1$，$\alpha_2$，$\alpha_3$，$\alpha_4$ 是 4 维列向量，且 $\alpha_1=2\alpha_2+\alpha_3$，$r(A)=3$。若 $\beta=\alpha_1+2\alpha_2+3\alpha_3+4\alpha_4$，则线性方程组 $Ax=\beta$ 的通解是 ______。

本题没有想清楚路线，通解一定是求齐次解和非齐次解，分清楚慢慢求。

![4.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBhxq0JunnQaw7QXSefjT9pgQbUBdawACbRNrG6jniFYZFsl_i7s2cQEAAwIAA3gAAz0E)

> 设线性方程组
>
> (Ⅰ) $\begin{cases}x_1+3x_3+5x_4=0,\\x_1-x_2-2x_3+2x_4=0,\\2x_1-x_2+x_3+3x_4=0.\end{cases}$
>
> 在 (Ⅰ) 的基础上，添加一个方程 $4x_1+ax_2+bx_3+13x_4=0$，得
>
> (Ⅱ) $\begin{cases}x_1+3x_3+5x_4=0,\\x_1-x_2-2x_3+2x_4=0,\\2x_1-x_2+x_3+3x_4=0,\\4x_1+ax_2+bx_3+13x_4=0.\end{cases}$
>
> (1) 求方程组 (Ⅰ) 的通解；
>
> (2) $a$，$b$ 满足什么条件时，方程组 (Ⅰ)，(Ⅱ) 是同解方程组？

仅考虑了片面，没有考虑所有情况。

![4.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBh1q0JwaYYemqduAhvBdF7Idg1yx2wACbhNrG6jniFZGIGMKZs_K_AEAAwIAA3gAAz0E)

> 设方程组 $Ax=b$ 有解，证明：$A^Tx=0$ 和 $\begin{pmatrix}A^T\\b^T\end{pmatrix}x=0$ 是同解方程组。

这道题就是捋清楚有解的结论以及如何变形为同解方程组即可。

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBh5q0JxHkulLqimG1mAJBIeoOrDTQgACbxNrG6jniFZQMK5el1GBkAEAAwIAA3gAAz0E)

> 已知线性方程组 $A_{m\times n}x=0$ 有基础解系 $\xi_1=[1,2,-3,0]^T$，$\xi_2=[2,-1,0,1]^T$，$\xi_3=[1,0,-2,1]^T$，则下列向量是该方程组的解的是（ ）.
>
> - A. $[-1,5,3,7]^T$
> - B. $[0,4,-9,1]^T$
> - C. $[1,2,-3,1]^T$
> - D. $[2,-1,-2,0]^T$

没理解透增广矩阵的意义。

## 张宇 30 讲基础线代 1 刷第 5 章

![5.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBh9q0J0WpKwIxyc0vNSuwj1yZC6ehAACcRNrG6jniFbJ0-uihHOD7wEAAwIAA3gAAz0E)

> 求矩阵 $A=\begin{pmatrix}2&2&-2\\2&5&-4\\-2&-4&5\end{pmatrix}$ 的特征值与特征向量。

本题理解错行列式，对于行列式，初等行变换和初等列变换都是可以的。

![5.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiBq0J1MAQmkvbXMZayoF5sm8YExwQACchNrG6jniFaAgPqmvj3XUgEAAwIAA3gAAz0E)

> 证明：对于秩为 1 的 $n$ 阶矩阵 $A$ 或 $A=\alpha\beta^T$（或 $\beta\alpha^T$）（$\alpha,\beta$ 都是 $n$ 维非零列向量），其特征值为 $\lambda_1=\lambda_2=\cdots=\lambda_{n-1}=0$，$\lambda_n=\sum a_{ii}=\beta^T\alpha$（或 $\alpha^T\beta$）.

跳了。事实上这道题可以利用秩，显然秩为 $1$，所以有 $n-1$ 个特征值为 $0$，所以用矩阵的迹可得后面。

![5.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiFq0J1v8OEY03iGxzRGTnvHYkVhdAACcxNrG6jniFYBiXSY4rZO6QEAAwIAA20AAz0E)

> 设 $A$ 是 $n$ 阶矩阵，且满足 $A^2=A$.
>
> (1) 求 $A$ 的特征值可能的取值；
>
> (2) 证明：$E+A$ 是可逆矩阵。

对于这道题没有理解透约束，在强化阶段理解了。

![5.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiJq0J1_u8KMQBNgnDAfvBqOu_kp3wACdBNrG6jniFZdd-u4uzLlmwEAAwIAA3gAAz0E)

> 已知 $A$ 是 3 阶方阵，特征值为 $1,2,3$，则 $|A|$ 的元素 $a_{11},a_{22},a_{33}$ 的代数余子式 $A_{11},A_{22},A_{33}$ 的和 $\sum\limits_{i=1}^{3}A_{ii}=$ ______.

没想出来怎么做。本题利用 $A^*$ 和 $A$ 得关系就可以解出来了。

![5.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiNq0J2glr4P0bVAyvywk2f0C1whSwACdhNrG6jniFZ9O5P-QGurGgEAAwIAA3gAAz0E)

> 设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为元素 $a_{ij}$ 的代数余子式。若 $A$ 的每行元素之和均为 2，且 $|A|=3$，则 $A_{11}+A_{21}+A_{31}=$ ______.

本题毫无思路，原因是没有意识到 $A$ 得每行元素之和为 $2$ 意味着什么。并且本题也没有意识到 $A^*$ 与 $A$ 的关系。

![5.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiRq0J239I3PJflszdf41nuc5Xe05AACdxNrG6jniFYNS_Dvc12hRQEAAwIAA3gAAz0E)

> 设 $W=\begin{pmatrix}1&1&1\\2&2&2\\3&3&3\end{pmatrix}$，则与 $W$ 相似的矩阵是（ ）.
>
> - A. $A=\begin{pmatrix}1&0&1\\0&2&0\\0&0&0\end{pmatrix}$
> - B. $B=\begin{pmatrix}1&0&0\\0&0&2\\0&3&0\end{pmatrix}$
> - C. $C=\begin{pmatrix}1&1&1\\2&2&2\\-3&-3&-3\end{pmatrix}$
> - D. $D=\begin{pmatrix}1&2&1\\2&4&2\\1&2&1\end{pmatrix}$

矩阵相似迹相等，本题本来用的是算出特征值，其实完全没必要。

![5.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiVq0J4tprQAAQStqDG1rSgw4uzFSIUAAnsTaxuo54hWx2Cdolcfby0BAAMCAAN4AAM9BA)

> 已知 $A=\begin{pmatrix}2&0&0\\0&0&1\\0&1&a\end{pmatrix}$，$B=\begin{pmatrix}2&&\\&b&\\&&-1\end{pmatrix}$，且 $A\sim B$，则 $(a,b)=$ ______.

属于经典关系，矩阵相似迹和行列式相等。

![5.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBiZq0J4-MSV3WsajC_D8FQT-nrS0LQACfBNrG6jniFbV1cDFfg7BuAEAAwIAA3gAAz0E)

> 已知可逆矩阵 $A$ 相似于 $B$，则下列选项不正确的是（ ）.
>
> - A. $A^*+A^{-1}$ 与 $B^*+B^{-1}$ 相似
> - B. $A^2+A^{-1}$ 与 $B^2+B^{-1}$ 相似
> - C. $A^2+A^*$ 与 $B^2+B^*$ 相似
> - D. $A^2+A^T$ 与 $B^2+B^T$ 相似

判断这类题，首先从实对称矩阵入手，实对称矩阵一定可以化简成对角矩阵；对于 $B$，显然有 $3$ 个不同的特征值；对于 $C$，显然 $0$ 为其特征值，并且 $0$ 时有 $2$ 个线性无关的解，所以可以相似于对角矩阵。

![5.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBidq0J5PbuGzaJMjxohoCKOOCT0cCAACfRNrG6jniFYZBj3FRoyrzwEAAwIAA3gAAz0E)

> 设 $A$ 是 3 阶矩阵，已知 $|E+A|=0$，$(3E-A)x=0$ 有非零解，$E-3A$ 不可逆，问 $A$ 是否相似于对角矩阵，并说明理由。

即凑形式。

![5.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBihq0J5hOMt1Y9d7tyUgP57JMwRKvwACfhNrG6jniFZ0MkAUCGuXTAEAAwIAA3gAAz0E)

> 设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2$ 为 $A$ 的属于特征值 1 的线性无关的特征向量，$\alpha_3$ 为 $A$ 的属于特征值 $-1$ 的特征向量，则满足 $P^{-1}AP=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}$ 的可逆矩阵 $P$ 可为（ ）.
>
> - A. $[\alpha_1+\alpha_3,\alpha_2,-\alpha_3]$
> - B. $[\alpha_1+\alpha_2,\alpha_2,-\alpha_3]$
> - C. $[\alpha_2+\alpha_3,-\alpha_3,\alpha_2]$
> - D. $[\alpha_1+\alpha_2,-\alpha_3,\alpha_2]$

一一对应，但是我认为用分开成两个矩阵再做的方式更保险。

![5.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBilq0J50P6ts33dgG_-1GixL_q6XjQACfxNrG6jniFbUXJOyBwsPEgEAAwIAA3gAAz0E)

> 设 $A$ 为 2 阶矩阵且 $A^2-A=2E$，$P=[\alpha,A\alpha]$，其中 $\alpha$ 是非零向量且不是 $A$ 的特征向量。
>
> (1) 证明 $|P|\neq 0$；
>
> (2) 求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。

本题想当然认为 $P=A\alpha$。

![5.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBipq0J6EGzaNTGS1ISHTY0s_ZBim7AACgBNrG6jniFYKYaIUHQtQ9AEAAwIAA3gAAz0E)

> 设 $A$ 为 3 阶矩阵，$P$ 为 3 阶可逆矩阵，且 $P^{-1}AP=\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$. 若 $P=[\alpha_1,\alpha_2,\alpha_3]$，$Q=[\alpha_1+\alpha_2,\alpha_2,\alpha_3]$，则 $Q^{-1}AQ=$（ ）.
>
> - A. $\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix}$
> - B. $\begin{pmatrix}1&0&0\\0&1&0\\0&0&2\end{pmatrix}$
> - C. $\begin{pmatrix}2&0&0\\0&1&0\\0&0&2\end{pmatrix}$
> - D. $\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}$

与 11 题类似的错误。

![5.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBitq0J6u2Z6QDv41VxszGbCK5-xOywACgRNrG6jniFZGaSK7nA6u9AEAAwIAA3gAAz0E)

> 设 $A$ 是 3 阶矩阵，已知 $A\xi_i=i\xi_i\ (i=1,2,3)$，其中 $\xi_1=[1,0,0]^T$，$\xi_2=[1,1,0]^T$，$\xi_3=[1,1,1]^T$，则矩阵 $A=$ ______.

本质是对概念和定义理解不清晰。

![5.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBixq0J7ekaWQ5F5mC6JriZCnUzzOmgACghNrG6jniFY4RFUxzkKslQEAAwIAA20AAz0E)

> 已知 $A$ 是 3 阶矩阵，且 $A\sim\Lambda=\begin{pmatrix}1&&\\&2&\\&&3\end{pmatrix}$. 设 $B=A^3-6A^2+11A-8E$，则 $B=$ ______.

本题二刷时也有疑惑，为什么，但是实际上证明一遍就很清楚了。

![5.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBi1q0J76eyndX2bkdgjpb-3AOJLhbQACgxNrG6jniFbEkdPbUm7a5AEAAwIAA3gAAz0E)

> 设 $A$ 是 $n$ 阶实对称矩阵，$P$ 是 $n$ 阶可逆矩阵。已知 $n$ 维列向量 $\alpha$ 是 $A$ 的属于特征值 $\lambda$ 的特征向量，则矩阵 $(P^{-1}AP)^T$ 属于特征值 $\lambda$ 的特征向量是（ ）.
>
> - A. $P^{-1}\alpha$
> - B. $P^T\alpha$
> - C. $P\alpha$
> - D. $(P^{-1})^T\alpha$

本题对与 A 相关的特征值和特征向量不熟悉，在 2 刷的时候仍然忘记了。

![5.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBi5q0J8Ml9S0IgRuXsfv4Y9ciE8quwAChBNrG6jniFYOC2TdjedtIAEAAwIAA3gAAz0E)

> 设 $A$ 是 4 阶实矩阵，$A^*$ 是 $A$ 的伴随矩阵，已知 $A^*$ 有特征值 $1,-1,2,-4$，则 $|A^3+2A^2-A-3E|=$ ______.
>
> 设 $A=\begin{pmatrix}0&0&1\\x&1&y\\1&0&0\end{pmatrix}$，若 $A$ 可相似于对角矩阵，则 $x,y$ 应满足 ______.

第 6 题理解错 $A^*$ 的行列式与 $A$ 行列式的关系，对于 $A$ 的行列式，其 $A$ 行列式/特征值可以得到 $A^*$ 的特征值，而已知 $A^*$ 的行列式，不能用这个方法反过来，而应该是利用行列式那里学的，$A^*$ 恒等式来直接算出来 $A$ 的行列式。

第 7 题应该是个关系式，只写了一个点。

![5.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBi9q0J8zCA1chNKSp01TpYqQxU-IpQAChRNrG6jniFYpqxCyEDNyxgEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}a&-1&c\\5&b&3\\1-c&0&-a\end{pmatrix}$，且 $|A|=-1$，$A^*$ 是 $A$ 的伴随矩阵，$A^*$ 有特征值 $\lambda_0$，对应于 $\lambda_0$ 的特征向量为 $\xi=[-1,-1,1]^T$，求 $a,b,c$ 及 $\lambda_0$.

计算错误。

## 张宇 30 讲基础线代 1 刷第 6 章

![6.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjBq0J92U92yPlCybE42rJ5JFj5AeAAChhNrG6jniFao4xNog2lAbwEAAwIAA3gAAz0E)

> 写出三元二次型 $f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2-2x_1x_2-2x_2x_3+2x_1x_3$ 的二次型矩阵 $A$.

得拆成对称。

![6.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjFq0J-ecbXHZ1QhZ9WFE3gp5h8hTgAChxNrG6jniFYfqt0FJyswewEAAwIAA3gAAz0E)

> 化二次型 $f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3-x_2^2-2x_2x_3-x_3^2$ 为标准形，并写出所作的可逆线性变换。

注意配方法，以及必须得写出可逆线性变换是什么。

![6.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjJq0J-wO4DTcWXzOxKYJWNtcSDshgACiBNrG6jniFZZRmOFF8VI8QEAAwIAA3gAAz0E)

> 将二次型 $f(x_1,x_2,x_3)=x_1x_2+x_1x_3-x_2x_3$ 化为规范形，并求所用的可逆线性变换。

使用配方法的时候，没有平方项要去凑。

![6.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjNq0J_DbbTwgnTscIvklRbKGEUb3QACiRNrG6jniFZ39j7qdOYOVwEAAwIAA3gAAz0E)

> 用正交变换化二次型 $f(x_1,x_2,x_3)=2x_1^2+5x_2^2+5x_3^2+4x_1x_2-4x_1x_3-8x_2x_3$ 为标准形，并求所作的正交变换。

注意是化成标准型，而不是规范形。

![6.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjRq0J_Ux14DAcUtFC7aqqhunY7qIQACjhNrG6jniFa_8AABRLqgjuUBAAMCAAN4AAM9BA)

> 设二次型 $f(x_1,x_2)=x_1^2-4x_1x_2+ax_2^2$ 经过正交变换 $\begin{pmatrix}x_1\\x_2\end{pmatrix}=Q\begin{pmatrix}y_1\\y_2\end{pmatrix}$ 化为二次型 $g(y_1,y_2)=4y_1^2+4y_1y_2+by_2^2$.
>
> (1) 求 $a,b$ 的值；
>
> (2) 求正交矩阵 $Q$.

两次变形得到的经典题目。

![6.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjVq0J_mprl4mBnqYGKBAaAsjSH3cwACjxNrG6jniFY96RztnQoK0wEAAwIAA3gAAz0E)

> 设二次型 $f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3$ 的负惯性指数为 1，则 $a$ 的取值范围是 ______.

配方法没配出来。

![6.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjZq0KAGzcOrMsob7bnS0aPjXIY-LAACkBNrG6jniFZggkH2F20vhQEAAwIAA3gAAz0E)

> 设 $A=\begin{pmatrix}1&2&0\\2&1&0\\0&0&1\end{pmatrix}$，则下列矩阵中与 $A$ 合同的是（ ）.
>
> - A. $\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$
> - B. $\begin{pmatrix}1&0&0\\0&1&0\\0&0&-1\end{pmatrix}$
> - C. $\begin{pmatrix}1&0&0\\0&-1&0\\0&0&-1\end{pmatrix}$
> - D. $\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&-1\end{pmatrix}$

没有想明白合同应该考虑的是什么，合同应该考虑惯性系数。

![6.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjdq0KAffDarrD0ZLS7Y-9fniV7fZQACkxNrG6jniFY4M2DL8SyECwEAAwIAA3gAAz0E)

> 设 $A$ 为 3 阶实对称矩阵，互换 $A$ 的 1，2 行得到矩阵 $B$，再互换 $B$ 的 1，2 列得到矩阵 $C$，则矩阵 $A$ 与矩阵 $C$（ ）.
>
> - A. 合同但不相似
> - B. 相似但不合同
> - C. 合同且相似
> - D. 不合同也不相似

实对称矩阵必然合同；本题又是相似的变形。

![6.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjhq0KAxg_EMxuDqUojhNjlxsRrVOAAClBNrG6jniFax08OHavcRTgEAAwIAA3gAAz0E)

> 设实二次型 $f(x_1,x_2,\cdots,x_n)=x^TAx$，其中 $A=(a_{ij})_{n\times n}$ 是实对称矩阵，则 $f(x_1,x_2,\cdots,x_n)$ 为正定二次型的充要条件是（ ）.
>
> - A. $A^*$ 是正定矩阵
> - B. $A^{-1}$ 是正定矩阵
> - C. $f(x_1,x_2,\cdots,x_n)$ 的负惯性指数为零
> - D. 存在 $n$ 阶实矩阵 $C$，使得 $A=C^TC$

1 刷的时候非常迷茫，现在 2 刷再做一次理解了。

![6.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjlq0KBCjS8AATLGVKgkrJ5EUFTVmt4AApUTaxuo54hW4aQoPUnHrjoBAAMCAAN4AAM9BA)

> 设 $f(x_1,x_2)=x_1^2+3x_2^2+4x_1x_2$，则 $f(x_1,x_2)$ 对应的矩阵与下列矩阵不合同的是（ ）.
>
> - A. $\begin{pmatrix}-1&1\\1&2\end{pmatrix}$
> - B. $\begin{pmatrix}1&2\\2&1\end{pmatrix}$
> - C. $\begin{pmatrix}0&-1\\-1&1\end{pmatrix}$
> - D. $\begin{pmatrix}1&1\\1&2\end{pmatrix}$

想当然。

![6.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBjpq0KBSZkYc145qYyn4PN0Wd9g0igAClxNrG6jniFaFO6_Ppw4TzAEAAwIAA3gAAz0E)

> $f(x_1,x_2,x_3)=x_1^2+2tx_1x_2-2x_1x_3+x_2^2+4x_2x_3+5x_3^2$ 正定，则 $t$ 的取值范围是 ______.

低级计算错误。
