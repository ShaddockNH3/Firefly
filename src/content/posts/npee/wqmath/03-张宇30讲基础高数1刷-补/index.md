---
title: 张宇 30 讲基础高数 1 刷（补）
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 张宇 30 讲基础高数 1 刷（补）
category: 考研
series: NPEE
seriesOrder: 7.03
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
最开始没有写错题本，所以是后续补充的。

## 张宇 30 讲基础高数 1 刷第 1 章

![1.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADY2rEbDgrtnm0uM3Khp0seiILh1PXAALoEmsbxNooVrEQjdCAbn6IAQADAgADeAADPQQ)

> 求函数 $y=f(x)=\ln\left(x+\sqrt{x^2+1}\right)$ 的反函数 $f^{-1}(x)$ 的表达式及其定义域。

没想出来怎么做，函数有四大性质：奇偶性，有界性，单调性，周期性，考虑该函数为奇函数，由此解答。

其实也有利用到奇函数的特性，我是利用相加去做的，最后做的有点复杂，但是也能做出来。

![1.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADZGrEbV1dabx8pmsEUxW9_xYnN1x5AALrEmsbxNooVu_IcbwuJ2gVAQADAgADeAADPQQ)

> 设 $g(x)=\begin{cases}2-x, & x\leq0\\ 2+x, & x>0\end{cases}$，$f(x)=\begin{cases}x^2, & x<0\\ -x-1, & x\geq0\end{cases}$，则 $g[f(x)]=$ ______。

本题混淆定义域和值域的概念，对于这种题，首先要画图，然后将里面函数的值域作为外面函数的定义域带入，但是最后的定义域是写内层函数的。

![1.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADZWrEbZdIur3NJ9iNZ7mLwWh16FeZAALsEmsbxNooVsZlWadPJS5YAQADAgADeAADPQQ)

> 证明函数 $f(x)=\dfrac{x}{1+x^2}$ 在 $(-\infty,+\infty)$ 内有界。

做这道题的时候利用的是导数的性质。而答案采用的是基本不等式，上下同时除以一个绝对值 $|x|$（需要排除 $0$）。当然我认为不如分开讨论 $x$、$-x$ 和 $0$，上下同时除以 $-x$ 然后用基本不等式感觉也不错。

![1.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADZmrEbcKoxW40lvbMze1ajIy1NCunAALuEmsbxNooVugYtadLzWizAQADAgADeAADPQQ)

> 设 $0<x<\dfrac{1}{2}$，求 $y(x)=x^6(1-x)^2(1-2x)^4$ 的最大值点。

针对这种题的思路是同取对数进行处理。

并且本题 1 刷时数字抄错（$6\ln x$ 求导时少抄了 $6$），错题重刷时 $14^2-12^2$ 少算一个 $10$（算成 $42$）充分证明了计算错误的可怕，以及一步一回头的必要性。

![1.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADZ2rEbglvbEfn9g_2xdFWn1YcK8MaAALvEmsbxNooVoY63rrXmkmTAQADAgADeAADPQQ)

> 已知 $e^x=\sum\limits_{n=0}^{\infty}\dfrac{x^n}{n!}, x\in R$，则 $2^x=$（ ）。
>
> - A. $\sum\limits_{n=1}^{\infty}\dfrac{(x\ln 2)^n}{n!}$
> - B. $\sum\limits_{n=0}^{\infty}\dfrac{(x\ln 2)^n}{n!}$
> - C. $\sum\limits_{n=1}^{\infty}\dfrac{(\ln 2)x^n}{n!}$
> - D. $\sum\limits_{n=0}^{\infty}\dfrac{(\ln 2)x^n}{n!}$

本题在 1 刷时采用类泰勒公式的解法，而事实上 $2^x$ 可以化成类似 $e^x$ 的形式，直接将 $x$ 带入即可。

如果采用类似泰勒公式的解法，则是事实上完全不需要给出这个式子。

直接像下面那样子 $x=0$ 处泰勒展开就好了。

![1.1.11 过程](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADaGrEbiXlqUT-q5v_-WG99drSewUSAALwEmsbxNooVtYJjGhGu28CAQADAgADeAADPQQ)

> [原图非题目：主人手写解题过程截图]

![1.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADaWrEbls5BmE9VKtmk1nXejKUefcJAALxEmsbxNooVgMT5TIEeagJAQADAgADeAADPQQ)

> 设 $y=\sin x, 0\leq x\leq2\pi$，求其所有单调区间上的反函数。

本题的做法是需要注意到 $y=\arcsin x$ 的值域为 $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$，所以得分区间进行讨论。1 刷的时候进入了一个很大的误区，那就是：

令 $y=\sin(x-\pi)$，$x$ 的范围为 $\left[\frac{\pi}{2},\frac{3\pi}{2}\right]$，此时也就是说 $x-\pi$ 的范围是 $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$，如果直接取反三角函数，也就是 $\arcsin y=x-\pi$，最后得到 $x=\arcsin y+\pi$。

错误点在于，原函数其实是 $y=\sin x$（也就是此 $y$ 非彼 $y$），$x$ 的范围为 $\left[\frac{\pi}{2},\frac{3\pi}{2}\right]$，变化为 $-y=\sin(x-\pi)$ 才对，而不是直接令 $y=\sin(x-\pi)$。

![1.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADamrEbnzDk6CuJcEh5yHWccLgIVStAALyEmsbxNooVrsjvgR0UtL4AQADAgADeAADPQQ)

> 在下列区间内，函数 $f(x)=\dfrac{x\sin(x-3)}{(x-1)(x-3)^2}$ 有界的是（ ）。
>
> - A. $(-2,1)$
> - B. $(-1,0)$
> - C. $(1,2)$
> - D. $(2,3)$

本题采用直觉做，错误，告诫一定每一题都要算出来，而不是依靠直觉。

![1.1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADa2rEbpUSJ_iYGGtj3LDi1qsxfVa-AALzEmsbxNooVsKsVuGW04ONAQADAgADeAADPQQ)

> 证明：(1) 若 $\lim\dfrac{f(x)}{g(x)}=A$，且 $\lim g(x)=0$，则 $\lim f(x)=0$；
>
> (2) 若 $\lim\dfrac{f(x)}{g(x)}=A\neq0$，且 $\lim f(x)=0$，则 $\lim g(x)=0$。

关于这题，对是对了，可以注意一下解法，也就是令 $g(x)=\frac{f(x)}{f(x)/g(x)}$，当然直接反过来得到 $1/A$ 也是没什么问题的。

![1.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADbGrEbq5r5zJHqUWfLRl6mYTNf19ZAAL0EmsbxNooVpS9ew8X-WSJAQADAgADeAADPQQ)

> 设函数 $f(x)=\lim\limits_{n\to\infty}\dfrac{x^2+nx(1-x)\sin^2\pi x}{1+n\sin^2\pi x}$，则 $f(x)=$ ______。

本题把两边同时除以一个 $n$，错误点在于没有讨论 $x=k$ 的情况。

![1.1.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADbWrEbspy95kfIRmZ3CR9ragfEGDlAAL1EmsbxNooVv6BbvCFgCBoAQADAgADbQADPQQ)

> 求极限 $\lim\limits_{x\to1^-}\ln x\ln(1-x)$。

本题采用洛必达，不过其实用 $x\ln x$ 的快慢收敛更简单。

![1.1.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADbmrEbt0TmxQjVyFfWuqarUTKwDz5AAL2EmsbxNooVkuXHMHbHJkJAQADAgADbQADPQQ)

> 求 $I=\lim\limits_{x\to0}x\left[\dfrac{10}{x}\right]$，其中 $[\cdot]$ 为取整符号。

这道题需要注意方法，也就是夹逼定理。需要注意的是其等号的作用范围。尤其需要注意当 $\frac{10}{x}$ 时，符号方向得反过来。

![1.1.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADb2rEbvPy9FHPexanYygKEy0uLoDXAAL4EmsbxNooViJE4aQcPQUOAQADAgADbQADPQQ)

> 求极限 $\lim\limits_{x\to0}\left(\dfrac{e^x+e^{2x}+e^{3x}}{3}\right)^{\dfrac{e}{x}}$。

关于本题，其实是作对的，但是一开始的时候把 $\ln(x+y)$ 拆成 $\ln x+\ln y$ 了，尤其需要注意。

![1.1.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADcGrEbwrM0qR3R5o7PdAgez0g3YGDAAL5EmsbxNooVi2C2zUFLkL6AQADAgADeAADPQQ)

> 设函数 $f(x)=\dfrac{\sin x}{1+x^2}$ 在 $x=0$ 处的 3 次泰勒多项式为 $ax+bx^2+cx^3$，则（ ）。
>
> - A. $a=1,b=0,c=-\dfrac{7}{6}$
> - B. $a=1,b=0,c=\dfrac{7}{6}$
> - C. $a=-1,b=-1,c=-\dfrac{7}{6}$
> - D. $a=-1,b=-1,c=\dfrac{7}{6}$

本题完全忽略了 $(1+x)^2$ 也可以展开，所以没做出来。

尤其需要注意两个展开式应该相乘，而不是展开式直接相加。

![1.1.36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADcWrEbzRqc0eXx9gtVKPfCvAYsWhFAAL6EmsbxNooVvNNi8diU9faAQADAgADeAADPQQ)

> 已知 $f(x)=\begin{cases}(\cos x)^{x^{-2}}, & x\neq0\\ a, & x=0\end{cases}$ 在 $x=0$ 处连续，则 $a=$ ______。

$\frac{\ln(\cos x)}{x^2}$，其中不可以直接利用 $\ln x<x$，第一是因为这是无穷大时的结论，第二是因为 $\ln 1=0$，$\frac{0}{0}$ 属于未定式。

![1.1.37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADcmrEb0twAAGE94hsNh2uj1MAAdA1QHsAAvsSaxvE2ihW8ufwvzVW8xUBAAMCAAN4AAM9BA)

> 函数 $f(x)=\dfrac{e^{\frac{1}{x-1}}\ln|1+x|}{(e^x-1)(x-2)}$ 的第二类间断点的个数为（ ）。
>
> - A. 1
> - B. 2
> - C. 3
> - D. 4

注意求的是第二类间断点个数，不要把第一类算进去了。

求解这类题的时候，首先是找出可能的点，然后一个个去试，需要注意 $\arctan x$、$e^x$、$|x|$。

![1.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADc2rEb2OJgDqC07BUJMuja-xle7XQAAL8EmsbxNooVnk0BB4rUEzGAQADAgADeAADPQQ)

> 设函数 $f(x)=\dfrac{1}{e^{\frac{x}{x-1}}-1}$，则（ ）。
>
> - A. $x=0,x=1$ 都是 $f(x)$ 的第一类间断点
> - B. $x=0,x=1$ 都是 $f(x)$ 的第二类间断点
> - C. $x=0$ 是 $f(x)$ 的第一类间断点，$x=1$ 是 $f(x)$ 的第二类间断点
> - D. $x=0$ 是 $f(x)$ 的第二类间断点，$x=1$ 是 $f(x)$ 的第一类间断点

错选为 C。想当然的锅，事实上认真算一下就知道了。

![1.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADdGrEb4Oz1r8Jt2oP9LW6i25HKIHuAAL9EmsbxNooVhS2xKQ42yQ1AQADAgADeAADPQQ)

> 设函数 $f(x)=\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}$，关于该函数的间断点，下列结论正确的是（ ）。
>
> - A. 不存在间断点
> - B. 存在间断点 $x=1$
> - C. 存在间断点 $x=0$
> - D. 存在间断点 $x=-1$

错选为 C。只考虑了 $>1$，没有考虑 $<1$ 的情况，倒反天罡。

![1.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADdWrEb5lYhDd-p7Ddd2gufMcWM_wSAAL-EmsbxNooVsrIEXIwtoBSAQADAgADeAADPQQ)

> 设函数 $f(x)=\dfrac{x}{1+x}, x\in[0,1]$，定义函数列：$f_1(x)=f(x), f_2(x)=f[f_1(x)],\cdots, f_n(x)=f[f_{n-1}(x)](n=1,2,3,\cdots)$，则 $f_n(x)=$ ______。

本题也是错在想当然上面，$1+x+x=2+x$，然后填错了。

![1.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADdmrEb62USAdkSRChuw7Fc2RuVZMeAAL_EmsbxNooVlGqqujdvEEFAQADAgADbQADPQQ)

> 设 $f(x)=\arcsin(\sin x)$，画出 $f(x)$ 的图形。

做出来是一条直线，对完答案之后没有复盘。

![1.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADd2rEb7-oT4lVWx54DUT6qMyDatCSAAMTaxvE2ihWZa6F6QH1oysBAAMCAANtAAM9BA)

> 求极限 $\lim\limits_{x\to0}\left(\dfrac{e^x+xe^x}{e^x-1}-\dfrac{1}{x}\right)$。

对于这题，化简到 $xe^x-e^x+1$ 的时候，如果提取 $e^x$ 然后一阶泰勒展开就可以得到经典的错误，标准的零分。原因是底下是 $x^2$，而泰勒展开是有皮亚诺余项的，显然不足以满足。

![1.2.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADeGrEb961vOma03HE6yzabuJADQn-AAIBE2sbxNooVsh-vq5GSMaJAQADAgADbQADPQQ)

> 设 $\lim\limits_{x\to0}\dfrac{\ln(1+x)-(ax+bx^2)}{x^2}=2$，求常数 $a,b$。

-() 要变号，低级错误。

![1.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADeWrEb_rbO3eGnkuHC7tk56yTcrSHAAICE2sbxNooVp2ymQet2IcvAQADAgADeAADPQQ)

> 求常数 $a$ 和 $b$ 的值，使得函数 $f(x)=x-(a+b\cos x)\sin x$ 在 $x\to0$ 时是 $x$ 的 5 阶无穷小。

泰勒展开只对 $\sin x$ 展开，没有考虑 $\cos x$。事实上这题应该把 $\sin x\cos x$ 视为 $\sin 2x$ 来处理会很方便。

## 张宇 30 讲基础高数 1 刷第 2 章

![2.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADemrEdunCODNv-p7nwXacaO8189sbAAIGE2sbxNooVibRGtyr4pfHAQADAgADeAADPQQ)

> 已知 $a_n=1-\dfrac{(-1)^n}{n}(n=1,2,\cdots)$，则 $\{a_n\}$（ ）。
>
> - A. 有最大值，有最小值
> - B. 有最大值，没有最小值
> - C. 没有最大值，有最小值
> - D. 没有最大值，没有最小值

本题利用函数极限的保号性，只不过是对 $1$ 保号，也就是最终肯定是在 $1$ 处附近。所以前有限项只要有比 $1$ 更大的，那么就存在最大值，前有限项只要有比 $1$ 更小的，那么就存在最小值。

> 其实是保序性。

![2.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADe2rEh8q1Z4liJ8E5A9pDtw2yOYv-AAIaE2sbxNooVvXmEZkcrcOaAQADAgADeAADPQQ)

> $\lim\limits_{n\to\infty}\left(\dfrac{1}{n^2+n+1}+\dfrac{2}{n^2+n+2}+\cdots+\dfrac{n}{n^2+n+n}\right)=$ ______。

低级错误，脑测为 1。

![2.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADfGrEh-9RMOhyUfoFS7rY3YOn6C6jAAIbE2sbxNooVjwNySxP3mZvAQADAgADeAADPQQ)

> 设 $0<a_n<\dfrac{\pi}{2}, 0<b_n<\dfrac{\pi}{2}, \cos a_n-a_n=\cos b_n$，且 $\lim\limits_{n\to\infty}b_n=0$，求 $\lim a_n,\lim\dfrac{a_n}{b_n^2}$。

本题 1 刷时毫无思路，对于第一问，显然是使用夹逼定理；对于第 2 小问，应该想办法把 $a_n$ 或者 $b_n$ 变成对方，从而得出答案。既然思路是这样，那么根据等式，$a_n$ 显然不方便进行代换，所以换 $b_n$。由于 $b_n^2$ 和 $1-\cos x$ 可以代换，所以进行代换，从而迎刃而解。

本题作为错题二刷时做错了，因为分数倒腾来倒腾去导致计算错误。

![2.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADfWrEiA0OyJ0TXPh9uwABHHRLV5ETkQACHBNrG8TaKFZ-zRjayhwd6gEAAwIAA3gAAz0E)

> 设 $0<x_1<3, x_{n+1}=\sqrt{x_n(3-x_n)}(n=1,2,\cdots)$，证明数列 $\{x_n\}$ 的极限存在，并求此极限。

证明此类题有两种做法，证单调有界，利用压缩映射（先猜再证）

对于本题，先证单调性。后一项减去前一项，可得一串式子，这串式子算对了，但是最后想利用单调性的时候，$\frac{3}{2}$ 算成 $\frac{3}{4}$，且没有利用有界性。

顺带提一嘴，本题在二刷的时候最后脑算 $2A^2=3A$，算错了。

![2.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADfmrEiCZt3u03C58mbekkUScUQ_1NAAIdE2sbxNooVrTDKYXSzPuLAQADAgADeAADPQQ)

> 设 $x_{n+1}=f(x_n)$，则以下命题正确的是（ ）。
>
> ① 若 $f(x)$ 单调增加，且 $x_1<x_2$，则数列 $\{x_n\}$ 单调增加
>
> ② 若 $f(x)$ 单调增加，且 $x_1>x_2$，则数列 $\{x_n\}$ 单调减少
>
> ③ 若 $f(x)$ 单调减少，且 $x_1<x_2$，则数列 $\{x_n\}$ 单调增加
>
> ④ 若 $f(x)$ 单调减少，且 $x_1>x_2$，则数列 $\{x_n\}$ 单调减少
>
> - A. ①②
> - B. ①③
> - C. ②③
> - D. ②④

利用结论，1 刷和错题刷都错了。

事实上，只需要画图就可以很好的理解这个结论。

![2.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADf2rEiD_wNGYU5f4vE4mh3-HIcR_kAAIeE2sbxNooVuyiEO-CpaBjAQADAgADeAADPQQ)

> (1) 证明方程 $x=\cos x$ 在 $\left(0,\dfrac{\pi}{3}\right)$ 内有唯一实根 $a$；
>
> (2) 设 $-1\leq x_1\leq1$，定义 $x_{n+1}=\cos x_n, n=1,2,\cdots$，证明 $\lim\limits_{n\to\infty}x_n$ 存在，且极限值就是 (1) 中的 $a$。

本题 1 刷和错题订正都没做出来，原因是不会。当然经过强化之后，这点知识是还可以的，因为这道题明显是上面说的第 2 类做法，在进行压缩映射的时候，需要利用拉格朗日中值定理等条件去放缩。

![2.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADgGrEiFlaSeOXiU9lGEEBgl3TEicSAAIfE2sbxNooVmPzllZRtJbuAQADAgADeAADPQQ)

> “存在正整数 $N$，当 $n\geq N$ 时，恒有 $|x_n-a|\leq\dfrac{1}{n}$”是数列 $\{x_n\}$ 收敛于 $a$ 的（ ）。
>
> - A. 充分不必要条件
> - B. 必要不充分条件
> - C. 充分必要条件
> - D. 既不充分也不必要条件

用夹逼定理和特值法做。

![2.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADgWrEiG8OeWiwH8aBpozp6t-m_VecAAIgE2sbxNooVrgl_jm-iaI8AQADAgADbQADPQQ)

> $\lim\limits_{n\to\infty}\left(\sqrt{n+\sqrt{n}}-\sqrt{n-\sqrt{n}}\right)=$ ______。

本题为低级错误，$\sqrt{n}$ 除下去的时候要注意。

![2.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUlqxl12d-8HWWe0RNpOI6kmWWXZEAACshRrGz_BMFYEVSHwnvL3egEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在 $[a,b]$ 上连续，$x_1,x_2,\cdots,x_n$ 是 $[a,b]$ 上的一个点列，求 $\lim\limits_{n\to\infty}\sqrt[n]{\dfrac{1}{n}\sum_{k=1}^{n}e^{f(x_k)}}$。

违规使用等价无穷小代换

考虑夹逼定理，这题二刷差点没做出来。比较正规的做法是分块算，也就是把 $\frac{1}{n}$ 和后面的一大坨给分开。

![2.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUpqxl2OsjeRA3C2okXR9tgvZEsIyQACsxRrGz_BMFYv1gvqpordTAEAAwIAA3gAAz0E)

> 设 $x_1=2$，$x_n+(x_n-4)x_{n-1}=3$（$n=2,3,\cdots$），证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求其值。

一刷时没思路，错题重刷时没写，现在再做一次，二刷的时候再做一段时间才做出来。本质的思路是把 $x_n$ 解出来，然后 $x_1<x_2$，对应的函数单调递增，可得单调性，有界性对于 $x_n$ 而言显然。

## 张宇 30 讲基础高数 1 刷第 3 章

![3.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUtqxl2uTkzEtRQetIGxlkQBmixkFgACtBRrGz_BMFb86YJAucSN7gEAAwIAA3gAAz0E)

> 设函数 $f(x)=(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)$，其中 $n$ 为正整数，则 $f'(0)=$（ ）。
>
> - A. $(-1)^{n-1}(n-1)!$
> - B. $(-1)^n(n-1)!$
> - C. $(-1)^{n-1}n!$
> - D. $(-1)^n n!$

关于这道题，1 刷的时候暴露了一个问题，那就是我不是不会做，而是总是在最后一两步的时候突然犯蠢。所以不只是得走一步看一步，还得着重检查最开始和最后，这些都是最容易让人懈怠的。

![3.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAUxqxl3thdvbaB7XEZN0mDktVRvyGAACthRrGz_BMFaYNCGtUOCWAAEBAAMCAAN4AAM9BA)

> 设 $f(x)$ 在 $x=a$ 处连续，$F(x)=f(x)|x-a|$，则 $f(a)=0$ 是 $F(x)$ 在 $x=a$ 处可导的（ ）。
>
> - A. 充要条件
> - B. 充分非必要条件
> - C. 必要非充分条件
> - D. 既非充分又非必要条件

![3.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAU1qxl4Ga5WW-LFZRdyCIvIxjwLoMgACtxRrGz_BMFbnyRbGMU7sqgEAAwIAA3gAAz0E)

> 设函数 $f_1(x)=(x^2-1)|x^3+x^2-2x-2|$，$f_2(x)=(x^2-1)|x^3-2x^2-x+2|$，$f_3(x)=(x^2-1)|x^3+3x^2-2x-6|$，将函数 $f_i(x)$（$i=1,2,3$）的不可导点个数记为 $n_i$，则（ ）。
>
> - A. $n_2<n_1<n_3$
> - B. $n_1<n_2<n_3$
> - C. $n_3<n_2<n_1$
> - D. $n_2<n_3<n_1$

这两题可以放在一起讲。这道题其实是有结论的，具体结论在武忠祥老师的强化课基本搞明白了。包括我没放进来的下一题，重点是记住这两个：

$x|x|$ 以及画图，画一张图就能理解函数的导数绝对值之间的关系了。

当然也可以用传统做法做。

例 3.5 就是想当然了，算一半直接选了错误选项。

例 3.6 则是试根用长除法，但是 2 刷的时候才突然意识到，原来可以先因式分解，然后问题就迎刃而解了。

开卷子初期时候补充：需要注意本身就不可导的点，例如 $x^{1/2}$，$x=0$ 不可导。

![3.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAU5qxl4wMgtqXMqAkVneiaa77-DEwAACuRRrGz_BMFZg6O0XAdNL6gEAAwIAA3gAAz0E)

> 设曲线 $y=f(x)=x^n$ 在点 $(1,1)$ 处的切线与 $x$ 轴的交点为 $(\xi_n,0)$，则 $\lim\limits_{n\to\infty}f(\xi_n)=$ ______。

这道题是一刷的时候没算完，只算出来了交点没算完极限。

![3.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAU9qxl5KnUZN6evN71D-66hbgvnGvQACuhRrGz_BMFbNJvq1K_xXPgEAAwIAA3gAAz0E)

> 设函数 $y=f(x)$ 在任意点 $x$ 处的增量 $\Delta y=\dfrac{y\Delta x}{x+\sqrt{x^2+y^2}}+o(\Delta x)$，且 $f(0)=1$，则 $y=f(x)$ 在点 $x=0$ 处的微分 $\mathrm{d}y=$（ ）。
>
> - A. $0$
> - B. $\mathrm{d}x$
> - C. $2\mathrm{d}x$
> - D. $3\mathrm{d}x$

![3.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVBqxl5iPLLv2bidZKjqjV-I2yWtMwACuxRrGz_BMFYmQceHkIQxUwEAAwIAA3gAAz0E)

> 设函数 $f(u)$ 可导，且 $y=f(x^2)$，当自变量 $x$ 在 $x=-1$ 处取得增量 $\Delta x=-0.1$ 时，相应的函数增量 $\Delta y$ 的线性主部为 $0.1$，则 $f'(1)=$（ ）。
>
> - A. $-1$
> - B. $0.1$
> - C. $0.5$
> - D. $1$

这两题可以放在一起讲，1 刷的时候明显对概念不熟悉，错题重刷的时候也一般，2 刷的时候险些没反应过来。

对于不经常考的考点也需要注意。

![3.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVFqxl57b8lSRA07C0n3TLAlfUXJhAACvBRrGz_BMFbZ6c-bkT5twgEAAwIAA3gAAz0E)

> 设函数 $y=f(x)$ 在点 $x_0$ 处可导，且 $f'(x_0)\neq 0$，当自变量有增量 $\Delta x$ 时，函数 $y=f(x)$ 的增量为 $\Delta y$，则当 $\Delta x\to 0$ 时，$\Delta y-\mathrm{d}y$ 是 $\mathrm{d}y$ 的（ ）。
>
> - A. 高阶无穷小
> - B. 低阶无穷小
> - C. 同阶非等价无穷小
> - D. 等价无穷小

本题是知识点的不熟悉，需要注意。

![3.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVJqxl6TmhXes30m8qHYzqhS3JCm6QACvRRrGz_BMFaukBvp3zVpBgEAAwIAA3gAAz0E)

> 证明：(1) 若 $F(x)$ 在 $[x_0,x_0+\delta)$（$\delta>0$）连续，在 $(x_0,x_0+\delta)$ 内可导，当 $\lim\limits_{x\to x_0^+}F'(x)=A$ 时，有 $F'_+(x_0)=A$；
>
> (2) 若 $F(x)$ 在 $(x_0-\delta,x_0]$（$\delta>0$）连续，在 $(x_0-\delta,x_0)$ 内可导，当 $\lim\limits_{x\to x_0^-}F'(x)=A$ 时，有 $F'_-(x_0)=A$。

没想到洛必达。

2 刷的时候看了提示才想起来。

在这里可以辨析一下洛必达可以洛几次，如果某个函数在一个区间内 $k$ 阶可导，那么在这个区间内可以洛 $k$ 次；如果一个函数在某点处 $k$ 阶可导，那么在这个区间内只能洛 $k-1$ 次。

上面这个说法是错误的！一样只能洛 $k-1$ 次。可以洛的前提是第 $k$ 阶导存在（或为无穷）

## 张宇 30 讲基础高数 1 刷第 4 章

![4.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVNqxl75y2QOxcALDrvnnZLQ58wydwACvhRrGz_BMFaga02l5J1WFgEAAwIAA3gAAz0E)

> 设 $f(x)=\prod\limits_{n=1}^{100}\left(\tan\dfrac{\pi x^n}{4}-n\right)$，则 $f'(1)=$ ______。

本题一开始想成相加，后来做的时候使用的是上一节的导数思想，然而在处理 $\tan\frac{\pi x}{4}$ 的时候翻车了，这里 $x$ 趋向于 $1$，而不是 $0$，所以在这里的处理需要小心。2 刷的时候用的是洛必达，感觉也是可以去凑一下的，但是没必要。

本题答案的解法采用的是第 2 种，也就是采用 $(uv)'$ 的求导。

![4.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVRqxl8UDT7SkjKtZpdtyiHDbdac7wACwBRrGz_BMFaMI0q27PcIYAEAAwIAA3gAAz0E)

> 当 $x>0$ 时，设 $y=f(x)=3x^2+e^x$ 有反函数 $x=\varphi(y)$，则 $\varphi''(3+e)=$ ______。

注意辨析 $x$ 和 $y$ 之间的关系，这里的 $3+e$ 指的是 $y$，也就是当 $y=3+e$ 的时候，$x=1$，而不是 $x=3+e$

![4.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVVqxl82gXQyCywWaE7OorsbDjU6gwACwRRrGz_BMFZecPMH5_OK1gEAAwIAA3gAAz0E)

> 设函数 $y=y(x)$ 由方程 $y^3+xy^2+x^2y+6=0$ 确定，且 $y'(1)=0$，求 $y''(1)$ 的值。

连续的 yx 等的计算错误以及加减号

![4.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVZqxl9K0JIUHoPer9M6xMy0ND2hYAACwhRrGz_BMFY6GQdwobYdowEAAwIAA3gAAz0E)

> 设 $y=y(x)$ 由参数方程 $\begin{cases}x=\sin t,\\ y=t\sin t+\cos t\end{cases}$ 确定，则 $\left.\dfrac{d^2y}{dx^2}\right|_{t=\frac{\pi}{4}}=$ ______。

这题错在利用公式法的时候，求解出 $\frac{\mathrm{d}y}{\mathrm{d}t}$ 和 $\frac{\mathrm{d}x}{\mathrm{d}t}$，直接拿前者去对 $t$ 求导，而不是拿 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 对 $t$ 求导。本题 2 刷时尝试使用公式法。

![4.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVdqxl9d1JcWM-gTed-dTnNN95wQrQACwxRrGz_BMFaq0qF9fvScmgEAAwIAA3gAAz0E)

> 设函数 $y=y(x)$ 由 $\begin{cases}x=\arctan t,\\ 2y-ty^2+e^t=5\end{cases}$ 所确定，则 $\dfrac{\mathrm{d}y}{\mathrm{d}x}=$ ______。

本题错在两个地方，第一，$x=\arctan t$ 求导求出来最后是带 $x$ 的，第二，一个经典的错误，标准的零分：除以 $\frac{1}{1+t^2}$ 一定不是直接把这个写在分母。

![4.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVhqxl-jZwGwg9rQOXETh76lqtWQEQACxBRrGz_BMFYII1TkMFaCoQEAAwIAA3gAAz0E)

> 设函数 $y=y(x)$ 由方程 $xe^{f(y)}=e^y\ln 2$ 确定，其中 $f$ 具有二阶导数，[?] $f'\neq 1$，则 $\dfrac{d^2y}{dx^2}=$ ______。

大量的计算错误，且一开始没注意到取对数。

![4.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVlqxl-5e6LcxXLr8TNGkn0CWIma4wACxRRrGz_BMFaVlHFOISiQHAEAAwIAA3gAAz0E)

> 设 $y=\dfrac{1-x}{1+x}$，则 $y^{(n)}(0)=$（ ）。
>
> - A. $(-1)^n 2\cdot n!$
> - B. $-2^n\cdot n!$
> - C. $2^n\cdot(n-1)!$
> - D. $-2^n\cdot(n-1)!$

题没看完，求的是 $x=0$ 时的点，而不是完整的。

![4.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVpqxl_MOTQ-0uLWIODi9nmVHqeYJgACxhRrGz_BMFapAYOGQ-5PWgEAAwIAA20AAz0E)

> 设 $f(x)=xe^x$，则 $f^{(n)}(x)=$ ______。

本题可以采用归纳法，1 刷时采用牛莱公式，但是确在计算 $C_n^1$（上 1 下 n）时出现问题，做出来等于 $1$，实际上应该为 $n$。

![4.1.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVtqxl_kR-KgUhTK8ucSLLym-vWo6AACyBRrGz_BMFa7R576nCaxBAEAAwIAA3gAAz0E)

> 设 $f(x)=x^2 2^x$，则当 $n\geqslant 1$ 时，$f^{(n)}(0)=$ ______。

利用牛莱公式，结果 $C(n,k)$ 再次记错公式。

![4.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAVxqxn1AaXmvJdsUIv8vXvJ84f4GtwACEhVrGz_BMFbE-3Yph5AayAEAAwIAA20AAz0E)

> 设 $f(x)=\lim\limits_{t\to0} x(1-2t)^{-\frac{x}{t}}$，则 $f'(x)=$ ______。

低级错误，漏抄了一个 2

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAV1qxn1WIFnCo5JljL5xXtYOeH4HtgACExVrGz_BMFbflYdWkd3EygEAAwIAA3gAAz0E)

> 已知 $f'(x)=Ae^x$（$A$ 为正常数），则 $f(x)$ 的反函数的二阶导数为 ______。

低级错误，求二阶导的时候求成 $A+1$ 了。

![4.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAV5qxn1riDUazGB23KPGklmJLHabJgACFBVrGz_BMFbAHRID_K3qswEAAwIAA3gAAz0E)

> 设函数 $y=y(x)$ 由 $\begin{cases}x=\ln(1+t^2)+1,\\ y=2\arctan t-(t+1)^2\end{cases}$ 确定，则 $\dfrac{d^2y}{dx^2}=$ ______。

低级错误，求 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 的时候忘记除以 $\frac{\mathrm{d}x}{\mathrm{d}t}$ 了。

![4.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAV9qxn2GSHk63kT4sf2i94UlnvWm7gACFRVrGz_BMFbtzvlJXylwpQEAAwIAA3gAAz0E)

> 已知 $g(x)$ 在 $x=0$ 处二阶可导，且 $g(0)=g'(0)=0$，设 $f(x)=\begin{cases}\dfrac{g(x)}{x},&x\neq0,\\ 0,&x=0\end{cases}$，证明：$f(x)$ 的导函数在 $x=0$ 处连续。

没想到用泰勒公式

![4.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWBqxn2fHS3VCMXKOwKaUrHu_29OugACFhVrGz_BMFZIXo9CK0goEQEAAwIAA3gAAz0E)

> 求函数 $f(x)=x^2\ln(1+x)$ 在 $x=0$ 处的 $n$ 阶导数 $f^{(n)}(0)$（$n\geqslant3$）。

进行泰勒展开的时候需要尤其注意最后求的是什么，而不是直接把 x 的形式保留在那里。

## 张宇 30 讲基础高数 1 刷第 5 章

![5.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWFqxn3P4uiXvDJXRlRahVMKbNbHggACGBVrGz_BMFb3GEwgUis4DAEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 可导，且 $f(x)f'(x)>0$，则（ ）。
>
> - A. $f(1)>f(-1)$
> - B. $f(1)<f(-1)$
> - C. $|f(1)|>|f(-1)|$
> - D. $|f(1)|<|f(-1)|$

看了半眼才反应过来是构造函数

![5.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWJqxn3qI3GUrtAfVM5WgilC2WZ3wAACGRVrGz_BMFYI62cLAafJYQEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 二阶可导，且在 $x=x_0$ 处取极大值，则有（ ）。
>
> - A. $f''(x_0)<0$
> - B. $f''(x_0)\leqslant0$
> - C. $f''(x_0)>0$
> - D. $f''(x_0)\geqslant0$

严谨的证明是利用费马定理 + 举特例

![5.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWNqxn44e2N28pRzCfz05PrNc5TR_gACGhVrGz_BMFYujSuMpTEHtAEAAwIAA20AAz0E)

> 求曲线 $y=\dfrac{1}{x}+\ln(1+e^x)$ 的渐近线。

关于这题，需要注意两件事。第一，看到 $e^x$ 一定要想到正无穷和负无穷；第二，关于无穷的时候 $e^x>x>\ln x$，这个要记住。

![5.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWRqxn5rCSsBWnWylf3T2u7D-ANZ_AACGxVrGz_BMFapO_jF3y-q2AEAAwIAA20AAz0E)

> 求数列 $\{\sqrt[n]{n}\}$ 的最大项。

数列。

![5.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWVqxn9eanVO-h1NgPleyQABGAdIJTEAAiAVaxs_wTBWq_Pi2WxWuQYBAAMCAAN4AAM9BA)

> 曲线 $\begin{cases}x=\cos^3 t,\\ y=\sin^3 t\end{cases}$ 在 $t=\dfrac{\pi}{4}$ 对应点处的曲率为 ______。

1 刷时已经根据不出草稿了判断出哪里计算错了，二刷时则是因为对 $\tan x$ 求导，求导求成 $\sec x$ 求导。

![5.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWZqxn98AuJ0pcKHvgoNFphELIYKzAACIRVrGz_BMFYpkV4DC14DigEAAwIAA3gAAz0E)

> 设函数 $f(x),g(x)$ 具有二阶导数，且 $g''(x)<0$。若 $g(x_0)=a$ 是 $g(x)$ 的极值，则 $f[g(x)]$ 在 $x_0$ 取极大值的一个充分条件是（ ）。
>
> - A. $f'(a)<0$
> - B. $f'(a)>0$
> - C. $f''(a)<0$
> - D. $f''(a)>0$

低级错误。1 刷时做对了，但是选错选项了（答案是 B，错选为 D）

![5.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWdqxn-OKwy0INE1RYTKzVJMtyfgZQACIhVrGz_BMFbU-et7jmWVlwEAAwIAA20AAz0E)

> 曲线 $y=(2x-1)e^{\frac{1}{x}}$ 的斜渐近线方程为 ______。

本质是极限的计算错误：

1 刷的时候错误在计算 $y-ax$ 的时候，单独先算了前一项；错题重刷时错了是因为不知道为啥洛必达的时候，把 $-e^x$ 跳步成了 $-xe^x$。

## 张宇 30 讲基础高数 1 刷第 6 章

![6.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWhqxn-oYippMztNv_JMmMoUKxMReAACIxVrGz_BMFYKm1ZcEl3pMwEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在 $[0,1]$ 上连续，且 $f(1)=0$，$f(\frac{1}{2})=1$，证明：存在 $\eta\in(\frac{1}{2},1)$，使得 $f(\eta)=\eta$。

注意零点定理的作用范围。在 $[a,b]$ 连续，在 $(a,b)$ 上有零点

![6.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWlqxn-7fcbWOVT3FjLQTSwC9P2fVAACJBVrGz_BMFbsnrTJDP6JIQEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[a,b]$ 上可导，证明当 $f'_+(a)\cdot f'_-(b)<0$ 时，存在 $\xi\in(a,b)$，使得 $f'(\xi)=0$。

做这题的时候完全没有任何思路，只尝试了一下用二阶导表达。但是显然二阶导不能用

![6.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWpqxn_RkijWxHyplrD49wryXwqTmAACJRVrGz_BMFYL4Tj7tp9ynQEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$f(a)=0$，$a>0$，证明：存在 $\xi\in(a,b)$，使得 $f(\xi)=\frac{b-\xi}{a}f'(\xi)$。

本题做的时候当时还没学为微分方程，所以没做出来。

这题 2 刷的时候虽然做出来了，但是花了大量的时间，原因有以下两点：

1. 被一阶线性非齐次微分方程的通解公式给影响了
2. $e^x$，$e$ 的次方上面的式子假设是 $a\ln x$，那么不可以变成 $e^a\cdot e^{\ln x}$，原因很简单，$e$ 的乘法等于幂上的加法。

![6.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWtqxn__RgY0TYU0JZhCvqakOAj7hQACJhVrGz_BMFa3Ie5K8NoNBAEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在区间 $[0,1]$ 上具有二阶导数，且 $f(1)>0$，$\lim\limits_{x\to0^+}\frac{f(x)}{x}<0$。证明：方程 $f(x)f''(x)+[f'(x)]^2=0$ 在区间 $(0,1)$ 内至少存在两个不同实根。

应该是做了一会儿没思路直接看的答案。

本题可以利用罗尔原话去做，具体就不讲了。

![6.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAWxqxoAdls5AyR4-cMgi0inNf4glMwACJxVrGz_BMFZtsNMZkHP-RwEAAwIAA3gAAz0E)

> 若 $f(x)$ 在 $(a,b)$ 内可导且 $f'(x)$ 有界，证明：$f(x)$ 在 $(a,b)$ 内有界。

这题证明的时候采用的是导数的定义，其实是可以做的，最后也是导向类似拉格朗日中值定理，但是当时做的时候完全没反应过来。

![6.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAW1qxoBA4s9ryAcBg8ZBcoOnTSqeLQACKBVrGz_BMFbp397cH8cwRQEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，$f(0)=0$，且 $f(x)$ 在 $[0,1]$ 上不恒等于零。证明：存在 $\xi\in(0,1)$，使得 $f(\xi)f'(\xi)>0$。

$$
x^2 \ge 0
$$

![6.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAW5qxoBysa_uHzBgde-eui-hxl-lcAACKRVrGz_BMFaaIAqcsmB3EAEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 满足 $f(0)=0$，且当 $x>0$ 时，$f(x)<0$，$f'(x)<0$，$f''(x)>0$，则当 $0<a<x<b$ 时，有（ ）。
>
> - A. $xf(x)>af(a)$
> - B. $bf(b)>xf(x)$
> - C. $xf(a)>af(x)$
> - D. $xf(b)>bf(x)$

这题做的是对的，不过除了构造法之外，还可以用拉格朗日中值定理。

![6.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAW9qxoCIELiOKArSZ0J1mLFn3jRhGAACKhVrGz_BMFbUg_WzH-p7AAEBAAMCAAN4AAM9BA)

> 设函数 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $\int_0^1 f(x)\,dx=0$，则（ ）。
>
> - A. 当 $f'(x)<0$ 时，$f(\frac{1}{2})<0$
> - B. 当 $f''(x)<0$ 时，$f(\frac{1}{2})<0$
> - C. 当 $f'(x)>0$ 时，$f(\frac{1}{2})<0$
> - D. 当 $f''(x)>0$ 时，$f(\frac{1}{2})<0$

一刷时标记先跳过，结果也没看。

![6.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXBqxoCe1h4ZQrk1C2WFXU0-uidOlAACKxVrGz_BMFZUxrAeUkeUcQEAAwIAA20AAz0E)

> 证明 $2^x-x^2-1=0$ 有且仅有三个根。

这道题可以注意一下，可以看出有 3 个根，然后证唯一性可以用罗尔定理的推论来获得上界。

![6.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXFqxoC8zOFHEazEQWtcc79wHr1OTAACLBVrGz_BMFZ2m_HqUKBIowEAAwIAA3gAAz0E)

> 已知方程 $x^n+nx-1=0$，其中 $n$ 为正整数。证明此方程存在唯一正实根 $x_n$。

本题没看完题目（求正实根）

![6.1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXJqxoDzA1_5gAb9VNyl0-HHayYf-gACLRVrGz_BMFbRr9DHo4NCbwEAAwIAA20AAz0E)

> 证明：$\left(\ln\frac{1+x}{x}-\frac{1}{1+x}\right)^2<\frac{1}{x(1+x)^2}$（$x>0$）。

本题 1 刷时没做，2 刷时也没做，难度不高计算量很大，就放了。

但是可以注意一开始如何设函数。

![6.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXNqxoEIBZAXEkuzBozZCl4BDoW8EgACLhVrGz_BMFYWHdE0gSWGVwEAAwIAA3gAAz0E)

> 设 $0<a<b$，证明不等式 $\frac{2a}{a^2+b^2}<\frac{\ln b-\ln a}{b-a}<\frac{1}{\sqrt{ab}}$。

![6.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXRqxoEavzqqagABp19wZKZqnMvQU7cAAi8Vaxs_wTBW57lbeNmy8W4BAAMCAAN4AAM9BA)

> 设实数 $a_0,a_1,a_2,\cdots,a_n$ 满足 $a_0+\frac{a_1}{2}+\frac{a_2}{3}+\cdots+\frac{a_n}{n+1}=0$。证明：方程 $a_0+a_1x+a_2x^2+\cdots+a_nx^n=0$ 在 $(0,1)$ 内至少有一个根。

本题和答案方法不一样，利用罗尔原话！

这道题我自己是在做的时候硬求导然后反复利用题设的结论。

![6.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXVqxoEvRJtO9jmSYvz3r_6fsN59GwACMBVrGz_BMFZq-5eLIIFq9wEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在 $[a,b]$ 上连续（$0<a<b$），在 $(a,b)$ 内可导，且 $f(a)\ne f(b)$。证明：存在 $\xi,\eta\in(a,b)$，使得 $\frac{f'(\xi)}{2\xi}=\frac{f'(\eta)}{b+a}$。

没做出来。对于这类题在强化的时候总结为要证两可以相等的，用两次拉个两日/柯西中值去凑。

![6.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXZqxoFJxGoYSm5xyoUPJjPxj9Zp7QACMhVrGz_BMFYTqt2eysazGAEAAwIAA20AAz0E)

> 证明 $0<x<\frac{\pi}{4}$ 时，有 $\tan x<\frac{4}{\pi}x$。

本题采用隐函数反带入做的，但是和 2 刷时的 $\sin x$ 那个一样，可以采用罗尔原话！

## 张宇 30 讲基础高数 1 刷第 7 章

![7.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXdqxoFhLmcUHlCxDTHzNoh1ZkePjwACMxVrGz_BMFbn7tXXxIclMQEAAwIAA3gAAz0E)

> 已知动点 $P$ 在曲线 $y=x^3$ 上运动，记坐标原点与点 $P$ 间的距离为 $l$。若点 $P$ 的横坐标对时间的变化率为常数 $v_0$，则当点 $P$ 运动到点 $(1,1)$ 时，$l$ 对时间的变化率是 ______。

用定义去做

![7.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXhqxoFxzX_BunoCjsT7nsNp6pJ_4QACNRVrGz_BMFZMRLAOWAP8pAEAAwIAA3gAAz0E)

> 质点 $P$ 沿抛物线 $x=y^2$（$y>0$）移动，$P$ 的横坐标 $x$ 对时间的变化率为 5cm/s。当 $x=9$ 时，点 $P$ 到原点 $O$ 的距离对时间的变化率为 ______。

单位

![7.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXlqxoGHMyoctb59W0RnPmG3fEbjbAACNhVrGz_BMFZc8ICXFAABHrcBAAMCAAN4AAM9BA)

> 甲车以 24km/h 的速度向北行驶，同时正东 10km 处乙车以 20km/h 的速度向东行驶。从这一时刻起经过 1 小时后，求两车间的距离对时间的变化率。

1 刷时没做。

## 张宇 30 讲基础高数 1 刷第 8 章

![8.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXpqxoG7zaimcgc6wT5ACXOBd_VOoAACNxVrGz_BMFaCAAHEvzf425kBAAMCAAN4AAM9BA)

> 设 $0<x<1$，且 $\int(1-x^2)f(x^2)\,dx=\arcsin x+C$，则 $f(x)=$（ ）。
>
> - A. $(1-x)^{\frac{3}{2}}$
> - B. $(1-x)^{-\frac{3}{2}}$
> - C. $(1-x^2)^{\frac{3}{2}}$
> - D. $(1-x^2)^{-\frac{3}{2}}$

1 刷时没想到两边同时对 x 求导，需要注意这一点。同时求导可以消去积分号。

错题重刷时这题算错了。

![8.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXtqxoH4UC0kKXe3fLuseUVNYceahAACOBVrGz_BMFYMSa1-WXsNygEAAwIAA3gAAz0E)

> 设可导函数 $y=f(x)$ 在 $[0,+\infty)$ 上的值域是 $[0,+\infty)$，$f(0)=0$，$f'(x)>0$，$x=\varphi(y)$ 是 $y=f(x)$ 的反函数。记 $I=\int_0^a f(x)\,dx+\int_0^b\varphi(y)\,dy$，常数 $a,b>0$，当 $a<\varphi(b)$ 时，则（ ）。
>
> - A. $I>ab$
> - B. $I<ab$
> - C. $I=ab$
> - D. $I$ 与 $ab$ 的大小关系不确定

想到用几何法做了，但是在做的时候没有沉下心来捋清楚对应关系所以才做错了。沉下心来捋清楚关系其实不难。

![8.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAXxqxoIWtnstMEBKh5x92VpRldaURgACORVrGz_BMFYUb9_3LnN8QgEAAwIAA3gAAz0E)

> $y=e^{-x}\sin x$ 在 $[0,+\infty)$ 上与 $x$ 轴所围平面区域的面积写成如下表达式：
> ① $\int_0^{+\infty}e^{-x}|\sin x|\,dx$；② $\left|\int_0^{+\infty}e^{-x}\sin x\,dx\right|$；③ $\lim\limits_{n\to\infty}\sum\limits_{k=0}^{n}\left|\int_{k\pi}^{(k+1)\pi}e^{-x}\sin x\,dx\right|$。（③ 积分上下限末字不清 [?]）
> 其中正确表达式的个数是（ ）。
>
> - A. $0$
> - B. $1$
> - C. $2$
> - D. $3$

3 没想到用几何法去做，而 2 则是想当然的直接认为是对的。

事实上这题结合图像去做很简单。

![8.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAX1qxoIq31d59EfdT7B1KsX_gOMvUgACOhVrGz_BMFZ1Az-lg6BZcQEAAwIAA3gAAz0E)

> $\lim\limits_{n\to\infty}\left(\frac{n+1}{n^2+1}+\frac{n+2}{n^2+4}+\frac{n+3}{n^2+9}+\cdots+\frac{n+n}{n^2+n^2}\right)=$（ ）。
>
> - A. $\int_0^1\frac{1+x}{1+x^2}\,dx$
> - B. $\int_0^1\frac{1}{1+x}\,dx$
> - C. $\int_0^1\frac{x}{1+x^2}\,dx$
> - D. $\int_0^1\frac{2x}{1+x^2}\,dx$

想到强化阶段时武忠祥老师的一个简单结论，如果变化和 n 程度相当，大概率是往定积分方向去想，所以先提出一个 1/n，然后去凑形式。

这题错是因为上下同时乘上 n，而不是一步步去凑形式。

![8.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAX5qxoJBG3Muqb0nJgJbu8yuDj_zBgACOxVrGz_BMFZW1-vLS_NtwwEAAwIAA3gAAz0E)

> 设 $I_1=\int_0^{\frac{\pi}{4}}\frac{\tan x}{x}\,dx$，$I_2=\int_0^{\frac{\pi}{4}}\frac{x}{\tan x}\,dx$，则（ ）。（积分上限小分数的分母不清 [?]）
>
> - A. $I_1>I_2>1$
> - B. $1>I_1>I_2$
> - C. $I_2>I_1>1$
> - D. $1>I_2>I_1$

本题错在 2 个方面。第 1 是经典的错误标准的零分，$\tan\frac{\pi}{4}=1$，而不是 $\frac{1}{2}$，$\tan\frac{\pi}{2}$ 不存在，而不是 $1$；第 2 是没有想到怎么放缩，也就是对放缩用的不熟练，这题是一个经典的放缩，并且在第 6 章的课后题有证明。

![8.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAX9qxoJXkv4Gfp6Ld_NFZNx-ZfA1dQACPBVrGz_BMFaYRSoiuWrbfAEAAwIAA3gAAz0E)

> 设 $M=\int_0^{\frac{\pi}{2}}\sin(\sin x)\,dx$，$N=\int_0^{\frac{\pi}{2}}\cos(\cos x)\,dx$，则（ ）。（积分上限小分数的分母不清 [?]）
>
> - A. $M<1<N$
> - B. $M<N<1$
> - C. $N<M<1$
> - D. $1<M<N$

没想到怎么做。对于含三角的式子，第一反应就应该是区间再现。

![8.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYBqxoJxsk1jN3q0T65UW__Io4v0CQACPRVrGz_BMFZflV8GKn_WYgEAAwIAA3gAAz0E)

> 设函数 $y=f(x)$ 在区间 $[-1,3]$ 上的图形如图所示，则函数 $F(x)=\int_0^x f(t)\,dt$ 的图形为（ ）。
>
> - [图示] 题干 $f(x)$ 图形：在 $[-1,0)$ 上为 $y=1$ 的水平线段（$x=0$ 端为空心点）；在 $(0,2)$ 上为自 $(0,-1)$ 上升、过 $(1,0)$、至 $(2,2)$ 的曲线；在 $[2,3]$ 上为 $x$ 轴上的水平线段（两端为实心点）。
>
> - A. [图示] $F(x)$ 的候选图形：左支自 $x$ 轴上方下降穿过原点，在 $x=1$ 附近取极小值后上升，$[2,3]$ 上为水平线段。
> - B. [图示] $F(x)$ 的候选图形：左支自 $x$ 轴下方上升穿过原点，在 $x=1$ 附近取极小值后陡升，$[2,3]$ 上为 $x$ 轴上的水平线段。
> - C. [图示] $F(x)$ 的候选图形：自 $(-1,0)$ 上升至 $(0,1)$（实心点），再下降至 $x=1$ 附近的极小值后上升，$[2,3]$ 上为水平线段。
> - D. [图示] $F(x)$ 的候选图形：左支自 $x$ 轴下方上升穿过原点，在 $x=1$ 附近取极小值后上升，$[2,3]$ 上为水平线段。

变限积分存在就连续，其他就是应用对于变限积分的讨论了。这题应该是不小心看到了答案，做的还是没问题的。

![8.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYFqxoKrqAiodaoG0VPVmwG9rwc_zwACPhVrGz_BMFaWLr1jcAmAjQEAAwIAA3gAAz0E)

> 设 $f(x)=\begin{cases}e^{x^2}+x^2,&x\ne0\\a,&x=0\end{cases}$，其中 $a$ 为常数，令 $F(x)=\int_{-1}^x f(t)\,dt$，则以下命题：①当 $a=1$ 时，$F(x)$ 在 $x=0$ 处可导；②当 $a\ne1$ 时，$F(x)$ 在 $x=0$ 处可导；③当 $a=1$ 时，$F(x)$ 在 $x=0$ 处不可导；④当 $a\ne1$ 时，$F(x)$ 在 $x=0$ 处不可导。所有真命题的序号为（ ）。
>
> - A. ①④
> - B. ①②
> - C. ③④
> - D. ②③

导函数在该点存在不意味着导函数在该点连续。事实上这道题只需要说明导函数在该点存在就可以了，显然这道题导函数的左右极限都相等，所以存在导数。

又可以联想到此前的论证，函数极限存在和函数连续是两码事，函数的极限存在和 $\lim\limits_{x\to x_0^-}f(x)=\lim\limits_{x\to x_0^+}f(x)$ 一样，但是 $\lim\limits_{x\to x_0^-}f(x)=\lim\limits_{x\to x_0^+}f(x)=f(x_0)$ 才可以说明函数连续，这是一个我经常错误的点，需要注意。

当然这道题用结论做就好了。

![8.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYJqxoLF4t2N2zDzr5WSBEZkQZX1UgACPxVrGz_BMFaxoIHZf267tQEAAwIAA3gAAz0E)

> 设 $a>0$，函数 $f(x)$ 在 $[0,+\infty)$ 内连续有界，$C$ 为任意常数，证明 $y=e^{-ax}\left[\int_0^x f(t)e^{at}\,dt+C\right]$ 有界。

这道题没有思路，但是放在 2 刷来看的话，其实绰绰有余，不断地利用绝对值不等式以及积分不等式就可以了，对于这类题，必要的时候也应该联想到拉格朗日中值定理。

![8.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYNqxoLYcBOherASuW2-eiaAGXgeOAACQBVrGz_BMFZP5IEj6c27sAEAAwIAA20AAz0E)

> 以下反常积分发散的是（ ）。
>
> - A. $\int_1^{+\infty}\left[\ln\left(1+\frac{1}{x}\right)-\frac{1}{1+x}\right]dx$
> - B. $\int_0^{+\infty}\frac{\ln x}{1+x^2}\,dx$
> - C. $\int_{-1}^{1}\frac{dx}{\sin x}$
> - D. $\int_{-\infty}^{+\infty}\frac{\sin x}{1+x^2}\,dx$

这道题可以注意一下，是凭感觉直接做的。

![8.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYRqxoL6Ek0hlp3hGUZkv3FaGJLe8QACQRVrGz_BMFa1MDld_2adrAEAAwIAA3gAAz0E)

> 已知 $\alpha>0$，则对于反常积分 $\int_0^1\frac{\ln x}{x^\alpha}dx$ 的敛散性的判别，正确的是（ ）。
>
> - A. 当 $\alpha\geqslant 1$ 时，积分收敛
> - B. 当 $\alpha<1$ 时，积分收敛
> - C. 敛散性与 $\alpha$ 的取值无关，必收敛
> - D. 敛散性与 $\alpha$ 的取值无关，必发散

![8.1.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYVqxoMGBUB_8SWoAawUTDtzTmYBSwACQhVrGz_BMFZPCRkNQ-EyLgEAAwIAA3gAAz0E)

> 已知 $\alpha>0$，则对于反常积分 $\int_1^{+\infty}\frac{\ln x}{x^\alpha}dx$ 的敛散性的判别，正确的是（ ）。
>
> - A. 当 $0<\alpha\leqslant 1$ 时，积分收敛
> - B. 当 $\alpha>1$ 时，积分收敛
> - C. 敛散性与 $\alpha$ 无关，必收敛
> - D. 敛散性与 $\alpha$ 无关，必发散

这两题放在一起讨论。这两题张宇的课本给的都是很玄学的做法，导致我完全不能理解这一块内容。事实上，对于反常积分而言，并不是所有的点都是在 0 或者在 + 无穷处无定义，1 这个点只是常用分界点，而不是必然分界点。

所以，对于第 18 题，观察到无定义点为 $0$ 和 $1$，所以分区间讨论，分成 $\left(0,\frac{1}{2}\right)$ 和 $\left(\frac{1}{2},1\right)$。当 $x\to0$，可以发现 $\ln x$ 对 $x$ 无影响，所以由 $p$ 积分可知 $a<1$；当 $x\to1$ 时，对 $\ln x$ 进行变形可以得到 $x-1$，对其进行讨论发现其无论如何都可以积出来，所以不影响收敛性。

对于 19 题是类似的，这里就不展开了。

![8.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYZqxoMZHG2lEzvGHsqSvp6h455WwAACQxVrGz_BMFbzD16-YgfZ0QEAAwIAA3gAAz0E)

> 设 $I_1=\int_0^{\frac{\pi}{2}}\frac{\sin x}{x}dx$，$I_2=\int_0^{\frac{\pi}{2}}\frac{x}{\sin x}dx$，则（ ）。
>
> - A. $I_1>I_2>1$
> - B. $1>I_1>I_2$
> - C. $I_2>I_1>1$
> - D. $1>I_2>I_1$

没想到简单做法，在那里硬算。

![8.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYdqxoM1o2nxpyCIlsokjbF7wVRDUQAC7g5rGz_BOFaeY9oL9JX_0gEAAwIAA3gAAz0E)

> 设 $f(x)=\begin{cases}x,&x<0\\\frac{1}{2},&x=0\\1,&x>0\end{cases}$，则下列命题：
>
> ① $f(x)$ 在 $[-1,1]$ 上有原函数；② $f(x)$ 在 $[-1,1]$ 上可积；
>
> ③ $F(x)=\int_{-1}^{x}f(t)dt$ 在 $x=0$ 处可导；④ $F(x)=\int_{-1}^{x}f(t)dt$ 在 $x=0$ 处连续但不可导。
>
> 正确命题的个数为（ ）。
>
> - A. $1$
> - B. $2$
> - C. $3$
> - D. $4$

和前文同质错误，也就是原函数，可积和变限的可导连续判断。

![8.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYhqxoNOFkCxy-kCVn14Iq_DNeSMxgAC7w5rGz_BOFYAAe7KOmpqx0gBAAMCAANtAAM9BA)

> $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^2+n}}+\frac{1}{\sqrt{n^2+2n}}+\frac{1}{\sqrt{n^2+3n}}+\cdots+\frac{1}{\sqrt{n^2+n^2}}\right)=$ ______。

本题没有踏踏实实计算，直接化简成了 $\frac{1}{\sqrt{1+x^2}}$ 去做，很是低级。

![8.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYlqxoOJGEANvsg2chV87IHrn_RUzQAC8A5rGz_BOFYhefjQwX94mAEAAwIAA20AAz0E)

> $\lim\limits_{n\to\infty}\sum\limits_{i=1}^{n}\frac{\sin\frac{i\pi}{n}}{n+\frac{1}{i}}=$ ______。

没想到怎么做，本题是夹逼定理和积分的结合。

![8.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYpqxoOtzJbCea77wH5eqakLQECh1AAC8Q5rGz_BOFa2xWpBTIeotQEAAwIAA3gAAz0E)

> 设 $F(x)=\int_0^x(t-[t])dt$，其中 $[x]$ 表示不超过 $x$ 的最大整数，则 $F'_-(1)+F'_+(1)=$ ______。

本题采用一个很低效的办法做，也就是定义，而且最后还因为+-错误而错误。事实上，这道题可以利用本章第 1 题的做法，两边同时求导，就很轻松能做出来。

![8.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACAYxqxoQP_pMSsS67iBb2dSjwvjdLIgAC8g5rGz_BOFbFTbo8bklsxwEAAwIAA20AAz0E)

> 讨论 $\int_2^{+\infty}\frac{1}{x\ln^p x}dx$ 的敛散性，其中 $p$ 为任意实数。

和前文的敛散性判断同质错误。

## 张宇 30 讲基础高数 1 刷第 9 章

关于这一章，计算问题非常的大，需要多复盘。

![9.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYZq0IUOF9oYnre-DVNlTiwqTruYlQACwxJrG6jniFY2dRKgKCzKPAEAAwIAA20AAz0E)

> 求不定积分 $\int\sqrt{a^2-x^2}dx$（$a>0$）。

1 刷，错题重刷等多次错误。包括但不限于对 a 的处理以及+c

![9.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYdq0IUjd9D8Of9vc9ZyE4enDeLE7wACxBJrG6jniFaOHSA-_yPXkQEAAwIAA20AAz0E)

> 求不定积分 $\int\frac{xe^x}{\sqrt{e^x-1}}dx$。

1 刷采用换元法进行处理，做错了，2 刷忘+c。

![9.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYhq0IU7lX1bM0-7hMAKab7tbPYmYgACxRJrG6jniFbuenRwEBtWpAEAAwIAA20AAz0E)

> 求不定积分 $\int\frac{xe^{\arctan x}}{(1+x^2)^{\frac{3}{2}}}dx$。

+c

![9.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYlq0IVNN6yp9F7Uw1zmGplDRDnmUgACxxJrG6jniFanuXMlmHAPgwEAAwIAA20AAz0E)

> 设 $f(\ln x)=\frac{\ln(1+x)}{x}$，计算 $\int f(x)dx$。

采用换元法，但是这道题题抄错了，题抄成 $f(\ln x)=\frac{\ln x}{e^x}$ 了。

+C

![9.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYpq0IVh_ZhA5vLWOaa_fyFAcVp_sAACyBJrG6jniFalbkZqHVWoNQEAAwIAA20AAz0E)

> 计算不定积分 $\int e^{2x}(\tan x+1)^2dx$。

毫无思路。考虑到 $e^x$ 的存在，猜测这道题应该是弄出来两项可以消掉或者可以合并。又考虑到三角恒等式。

![9.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYtq0IV0_yYzu9zpeO8f-7tit8jYDAACyRJrG6jniFZHQzoqPi40ZAEAAwIAA20AAz0E)

> 求 $\int\frac{4x^2-6x-1}{(x+1)(2x-1)^2}dx$。

1 刷的时候极为轻视，将这题直接跳过了，强化阶段也选择性的跳过了这部分。事实上，结果就是 2 刷的时候第 8 题错的一塌糊涂。

![9.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBYxq0IWJYQqa1XTUu_LJAvD0_O6H_AACyhJrG6jniFbktU-Dow2skAEAAwIAA20AAz0E)

> 求 $\int\frac{x}{x^3-x^2+x-1}dx$。

本题处理时对于 $x^2+1$ 项用的直接是 $B$，而不是 $Bx+C$

![9.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBY1q0IWeI05c0m91mpFprqTCe5hhiwACyxJrG6jniFYin6_K4CMfGAEAAwIAA20AAz0E)

> $\int\frac{2x+3}{x^2-x+1}dx=$ ______。

对于 $\arctan x$ 的变形公式背错。我认为对于这种不应该去背公式，而应该求导完之后再算一次看看有没有问题。

![9.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBY5q0IWwzvJCkuXzwlOsKuDZOcL7hwACzBJrG6jniFbkkyx_dvXW6QEAAwIAA20AAz0E)

> $\lim\limits_{n\to\infty}\frac{1}{n}\sum\limits_{i=1}^{n}\left[\ln(3n-2i)-\ln(n+2i)\right]=$ ______。

算这道题的时候题抄错了，少抄了一个 $\ln$。另外可以注意一下区间再现。

![9.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBY9q0IX3FKvO4iPC8oq-FnlLMxeicwACzRJrG6jniFbP-TFUsUYLJQEAAwIAA20AAz0E)

> $\int_0^1\arcsin\sqrt{1-x^2}dx=$ ______。

![9.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZBq0IYGXsKpNUmqLBGA-6FZlHD5FAACzhJrG6jniFa9OnSddx0AAVQBAAMCAANtAAM9BA)

> $\int_0^1 x\arcsin\sqrt{4x-4x^2}dx=$ ______。

这两题可以放一起讲。后面那题没去算，因为计算太复杂了。前面那题则是没想到可以利用 $\arcsin(\sin x)$ 去简便计算。

![9.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZFq0IZplz4iUEDgAAE7_Vl_Hr91UB8AAs8Saxuo54hWdydzIwIz79kBAAMCAAN4AAM9BA)

> 设 $f(x)$ 在 $[0,1]$ 上连续，证明 $\int_0^{\pi}xf(\sin x)dx=\frac{\pi}{2}\int_0^{\pi}f(\sin x)dx$，并计算 $\int_0^{\pi}x\sin^9 x\,dx$。

需要注意，这道题的结论的积分上限一直是 $\pi$，其他变形另说，而不是一步到位。

![9.1.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZJq0IZ-5c3aKdri_N9CCvCiQlhsRgAC0BJrG6jniFZJpX4VYQABdJYBAAMCAAN4AAM9BA)

> 设 $f(x)=\int_1^{x^2}e^{-t^2}dt$，则 $\int_0^1 xf(x)dx=$（ ）。
>
> - A. $\frac{1}{4}(e^{-1}+1)$
> - B. $\frac{1}{4}(e^{-1}-1)$
> - C. $\frac{1}{4}(e+1)$
> - D. $\frac{1}{4}(e-1)$

一步步计算，本题变限积分求导的时候，一定要注意是 $x^4$！

![9.1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZNq0IaOvswOM6SIezOCErT0RU-AygAC0RJrG6jniFbticoPYA1s2AEAAwIAA20AAz0E)

> 曲线 $y=\int_0^{[?]}e^{t^2}dt$ 在点 $(0,0)$ 处的法线方程为（ ）。
>
> - A. $y=\frac{1}{2}x$
> - B. $y=-\frac{1}{2}x$
> - C. $y=x$
> - D. $y=-x$

法线。

![9.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZRq0Ia_Xl0HwrE53rM-VoKrDxUvgwAC0hJrG6jniFadHttweRiYJgEAAwIAA3gAAz0E)

> $F(x)=\int_0^x|\sin x-\sin t|dt$（$x\geqslant 0$）在 $x\to 0^+$ 处的二次泰勒多项式为 $a+bx+cx^2$，则 $abc=$ ______。

第一是没想到应该拆绝对值。碰到绝对值想办法拆绝对值，这基本是铁律。

第二是理解错泰勒公式。这道题是 F(x) 展开式后面的式子，而不是里面的东西展开是这个式子。

![9.1.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZVq0IbRcGxLrdvm9TUGIf_Z4s7rpwAC0xJrG6jniFYqMY-3MLOw1QEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 可导，且 $f(x)<-2xf'(x)$，则曲线 $F(x)=\int_0^x tf'(x^2-t^2)dt$（ ）。
>
> - A. 在 $x=0$ 处取极大值
> - B. 在 $x=0$ 处取极小值
> - C. 拐点是 $(0,0)$
> - D. 在 $(0,0)$ 处既非极值点也非拐点

这题在做的时候应该是认为里面的太复杂了，然后没敢化简。事实上，这题化简一下就可以迎刃而解了。

![9.1.27](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZZq0IbsiocPAAFTOFN4JqPWiVZ8NVMAAtUSaxuo54hWvco1nvrjXTUBAAMCAANtAAM9BA)

> 求 $\int_3^{+\infty}\frac{dx}{(x-1)^4\sqrt{x^2-2x}}$。

这道题应该是一直在那里想着怎么拆，对于这种题，一定要想一下三角换元。

![9.1.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZdq0IcKlAnBtLjuWwatNuKi79d_LQAC1hJrG6jniFau1o1v3PdD_QEAAwIAA20AAz0E)

> 计算 $I_n=\int_0^{+\infty}x^n e^{-x}dx$（$n$ 为非负整数）。

![9.1.29](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZhq0IcVCaf0vJsD6alVKWA8g7z2pwAC1xJrG6jniFbSljB47fg_YQEAAwIAA3gAAz0E)

> 设 $f(x)=\begin{cases}\frac{4x^2}{a^3\sqrt{\pi}}e^{-\frac{x^2}{a^2}},&x>0\\0,&x\leqslant 0\end{cases}$，[?] 为正常数，则 $\int_0^{+\infty}x^2f(x)dx=$ ______。

这两题都没做，问题不大，和数学 1,3 相关。

![9.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZlq0Ic0km0v7toNS_9pxKUzgRJf6wAC2BJrG6jniFbLZUC_CoX5uAEAAwIAA20AAz0E)

> 求 $\int\max\{1，|x|\}dx$。

做的时候没处理好连续。

![9.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZpq0IdH3WGd7vZeNiKkjlFIni0LhAAC2RJrG6jniFZMN-cOkFJeGgEAAwIAA20AAz0E)

> 求定积分 $\int_0^{\frac{3}{4}\pi}\frac{1}{1+\cos^2 x}dx$。

定义，$\tan x$ 在 $\frac{\pi}{2}$ 上无定义。

![9.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZtq0IddSxpwJh0N7M5TvXmiitXc7QAC2hJrG6jniFbo3M4PN3a1JQEAAwIAA20AAz0E)

> 计算 $\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}}e^{\frac{x}{2}}\frac{\cos x-\sin x}{\sqrt{\cos x}}dx$。

不会做。

![9.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZxq0IglwPo-21rQxPDlOGRdRAqvEQAC3RJrG6jniFbl6voVldSHhQEAAwIAA20AAz0E)

> 求 $\int_{-1}^{1}\frac{x+1}{1+\sqrt{x^2}}\,dx$。

没有想到可以先利用奇偶性化简，导致做出来很复杂，然后计算错误。

![9.2.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZ1q0Ig3FDQ4KeR2Fd_CJ1MpJxDs5wAC3hJrG6jniFYMcC39yaq6FgEAAwIAA20AAz0E)

> 求连续函数 $f(x)$，使它满足 $\int_0^1 f(tx)\,dt=f(x)+x\sin x$。

思路正确，但当令 $tx=u$ 进行变量代换时，对 $x$，$t$ 和 $u$ 之间谁是变量谁是常量混淆。

![9.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZ5q0IhHRsFi1P9AXuWByU3BJgEefwAC3xJrG6jniFY4-Kxk0tkzLQEAAwIAA20AAz0E)

> 设 $f(x)=\int_0^1 t|t-x|\,dt$，求 $f'(x)$。

没考虑定义域。

## 张宇 30 讲基础高数 1 刷第 10 章

![10.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBZ9q0IhcifX4W-nujniHwxVm7RJFzgAC4BJrG6jniFYDcP-1ApGRiQEAAwIAA3gAAz0E)

> 设 $A_n$ 是曲线 $y=x^n$ 与 $y=x^{n+1}\,(n=1,2,\cdots)$ 所围区域的面积，则
>
> $\lim\limits_{n\to\infty}\left(2\sum\limits_{k=1}^{n}A_k\right)^n=$ ______。

没有想好定义域和值域，也没有画图直接想当然做，导致减反了。

![10.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaBq0IhzBcPq3Yz-JW3HAAFQinNZvHsAAuESaxuo54hWC60NIfCLhAoBAAMCAAN4AAM9BA)

> 求由摆线 $\begin{cases}x=a(t-\sin t)\\ y=a(1-\cos t)\end{cases}$ $(a>0)$ 的一拱（见图）与 $x$ 轴所围平面图形的面积。
>
> - [图示] 摆线一拱与 $x$ 轴围成的阴影区域；纵轴标 $y$，原点标 $O$，横轴右侧标 $2\pi a$，拱高标 $2a$，图中另注参数方程及 $(a>0)$

对于本类题无从下手，事实上这种题相当于换元。

![10.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaFq0IiKk7lQQxJf1aMCj8EkbR2HtAAC4hJrG6jniFbu1qzOudM8aQEAAwIAA20AAz0E)

> 伯努利双纽线 $r^2=a^2\cos2\theta$ 围成的图形的面积为 ______。

对于这种题没有头绪，但是事实上这种常见曲线需要背诵。另外需要注意其定义域。

![10.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaJq0IikzPNwFE4HZCubJATpKId-4AAC4xJrG6jniFZE8vUPvhXQ7AEAAwIAA20AAz0E)

> 求曲线 $y=e^{-x}\sin x\,(x\ge0)$ 与 $x$ 轴所围平面图形的面积。

对于这题想到了这道题有很多个区间，但是没想到要分成 $k\pi\sim(k+1)\pi$ 讨论，这点需要着重注意。另外可以注意一下等比数列的计算。

![10.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaNq0IjQH9Jc_KpcCie0cxkYn4LaOgAC5BJrG6jniFb80qVj2vwjgwEAAwIAA3gAAz0E)

> 求曲线 $y=e^{-\frac{x}{2}}\sqrt{\sin x}$ 在 $[0,2\pi]$ 部分与 $x$ 轴围成的平面图形绕 $x$ 轴旋转一周所成的旋转体的体积。

第一，注意定义域；第二，计算错误，最后这道题没有除以 2。

![10.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaRq0IjmvINWDJ45vLSiaXA63SDFdQAC5RJrG6jniFZrEqyC0y-naAEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 的定义域为 $(0,+\infty)$，且满足 $2f(x)+x^2f\left(\frac{1}{x}\right)=\frac{x^2+2x}{\sqrt{1+x^2}}$。求 $f(x)$，并求曲线 $y=f(x)$、直线 $y=\frac{1}{2}$、$y=\frac{\sqrt{3}}{2}$ 及 $y$ 轴所围图形绕 $x$ 轴旋转一周所成旋转体的体积。

本题直接列公式硬算，但是最后在换元法的时候积分上下限理解错误。

但是我觉得这道题不应该硬算，而应该利用强化课武忠祥老师的方法去做，这样这道题就不会碰到什么很神秘的问题了。

![10.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaVq0Ij49fdT3Zm-56Q1EASnP9Ol4QAC5hJrG6jniFaD8jyZjjqTDwEAAwIAA3gAAz0E)

> 过坐标原点作曲线 $y=e^x$ 的切线，该切线与曲线 $y=e^x$ 以及 $x$ 轴围成的向 $x$ 轴负向无限伸展的平面图形记为 $D$。求：
>
> (1) $D$ 的面积 $A$；
>
> (2) $D$ 绕直线 $x=1$ 旋转一周所成的旋转体的体积 $V$。

采用微元法第 2 问计算错误。和上一题类似的，对于这类题用二重积分的思想去解题。这里微元法的错误来自于对锥形的计算错误，因为这道题的锥形是绕着 $x=1$ 去算的，所以不可以粗浅的理解为绕着 $y$ 轴转那样去算。

![10.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaZq0IkVFqzqE1vOUDTN0aUKxRBkfgAC5xJrG6jniFaWsxI1mcheXQEAAwIAA3gAAz0E)

> 设 $f(x)$ 连续，且 $f(x+2)-f(x)=x$，$\int_0^2 f(x)\,dx=0$，则 $f(x)$ 在 $[1,3]$ 上的平均值为 ______。

对于变上限积分理解不足。

![10.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBadq0IkpZI6SxtRpxiuX4FyPf_bWkwAC6BJrG6jniFbZelgsbb1DeQEAAwIAA3gAAz0E)

> 曲线 $y=\sqrt{x}$ 与 $y=x$ 所围平面有界区域绕直线 $y=x$ 旋转一周所得旋转体的体积为 ______。

没做。利用强化课的二重积分思想即可。

![10.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBahq0Ik-AAGzYDesV5K8mWJGTMZG-IIAAukSaxuo54hWW8tZDkCM7fEBAAMCAAN4AAM9BA)

> (仅数学一、数学二) 曲线 $x=\frac{1}{4}y^2-\frac{1}{2}\ln y$ 相应于 $1\le y\le e$ 的一段弧的长度为 ______。

属于低级错误。对 1/y 积分，求出来是 lny，而不是-lny。

![10.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBalq0IlTmpIsrbfW-ZYAAde8sX96myEAAuoSaxuo54hWQ3NxsUje_EIBAAMCAAN4AAM9BA)

> 设 $D_1$ 是由抛物线 $y=2x^2$ 和直线 $x=a$、$x=2$ 及 $y=0$ 所围成的平面区域，$D_2$ 是由抛物线 $y=2x^2$ 和直线 $y=0$、$x=a$ 所围成的平面区域，其中 $0<a<2$。
>
> (1) 求 $D_1$ 绕 $x$ 轴旋转一周而成的旋转体体积 $V_1$，$D_2$ 绕 $y$ 轴旋转一周而成的旋转体体积 $V_2$；
>
> (2) 问当 $a$ 为何值时，$V_1+V_2$ 取得最大值？并求此最大值。

漏看范围，以及提取因子提取错误。

![10.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBapq0Il-jN9uI9rJin5S5NobmLsjMQAC6xJrG6jniFaBkrLi7svVWAEAAwIAA3gAAz0E)

> 求曲线 $y=3-|x^2-1|$ 与 $x$ 轴围成的封闭图形绕直线 $y=3$ 旋转一周所得旋转体的体积。

微元法的锅了，这道题采用二重积分思想很快。

## 张宇 30 讲基础高数 1 刷第 11 章

![11.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBatq0ImQYM93Yo7iKduEwj5bv0xjWwAC7BJrG6jniFbdzy7kK-QNswEAAwIAA3gAAz0E)

> (1) 设 $f(x),g(x)$ 在 $[a,b]$ 上连续，且 $g(x)$ 在 $[a,b]$ 上不变号。证明：存在 $\xi\in(a,b)$，使得 $\int_a^b f(x)g(x)\,dx=f(\xi)\int_a^b g(x)\,dx$；
>
> (2) 设 $f(x)$ 在 $[1,2]$ 上连续，计算 $\lim\limits_{n\to\infty}\int_1^2 f(x)e^{-x^n}\,dx$。

本题错在这几个方面。第 1，没想到变限积分；第 2，关于第 2 问，把 e 踢出去，而不是把 f(x) 提出去。这样犯了两个问题，其一，利用推广后的积分中值定理需要注意内部是不变号的，其二，就算 f(x) 是不变号的，那么提取出去的东西会有一个很抽象的问题，那就是随着 n 的变化，ε会变。

![11.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBaxq0Imqu75OqGlHMnHT_nDNWe_pdAAC7RJrG6jniFaGUmsMSG7mIQEAAwIAA3gAAz0E)

> $\lim\limits_{n\to\infty}\int_0^1 (n+1)x^n\ln(1+x)\,dx=$（ ）。
>
> - A. $\ln2$
> - B. $1$
> - C. $e^2$
> - D. $+\infty$

夹逼定理。

![11.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBa1q0Im9XeQQ1jw7cw9VOyDyg6cFowAC7hJrG6jniFb-bPD3hx6TCQEAAwIAA3gAAz0E)

> 设函数 $f(x)=x-[x]$，其中 $[x]$ 表示不超过 $x$ 的最大整数，则 $\lim\limits_{x\to+\infty}\frac{1}{x}\int_0^x f(t)\,dt=$ ______。

![11.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBa5q0InOZujiyIxjSbqn2UfPhfrWJgAC7xJrG6jniFYcTE3VhANGWQEAAwIAA3gAAz0E)

> 设 $f(x)$ 的二阶导数 $f''(x)$ 在 $[0,1]$ 上连续，且 $f(0)=f(1)=0$。证明：
>
> (1) $\int_0^1 f(x)\,dx=\frac{1}{2}\int_0^1 x(x-1)f''(x)\,dx$；
>
> (2) $\left|\int_0^1 f(x)\,dx\right|\le\frac{1}{12}\max\limits_{0\le x\le1}\{|f''(x)|\}$。

没做。

![11.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBbdq0ItiN-eg7runYZWPW_1egE3fFQAC_hJrG6jniFYUVfeh7_9weAEAAwIAA3gAAz0E)

> 设函数 $f(x),g(x)$ 在区间 $[a,b]$ 上连续，且 $f(x)$ 单调增加，$0\le g(x)\le1$。证明：
>
> (1) $0\le\int_a^x g(t)\,dt\le x-a$，$x\in[a,b]$；
>
> (2) $\int_a^{a+\int_a^b g(x)\,dx} f(x)\,dx\le\int_a^b f(x)g(x)\,dx$。

这道题的问题本质上来源于对变限积分的不熟悉。

![11.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBbhq0It5_89SP3xjoicDMxqyXoH0jQACARNrG6jniFZWjuvIKSaLHQEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上具有二阶连续导数，且 $f(0)=f(1)=0$。记 $M=\max\limits_{x\in[0,1]}\{|f''(x)|\}$。证明：$\left|\int_0^1 f(x)\,dx\right|\le\frac{1}{4}M$。

这道题想到利用两次拉格朗日中值定理并不难，但是难的是想到放缩这里要拆开放缩。

![11.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBblq0IuNkQb8nuHUkW-hysfhPmJ52AACAhNrG6jniFY7Cib_qM3G3gEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,2\pi]$ 上具有一阶连续导数，且 $f'(x)\ge0$。证明：对任意正整数 $n$ 有 $\left|\int_0^{2\pi} f(x)\sin nx\,dx\right|\le\frac{2}{n}[f(2\pi)-f(0)]$。

![11.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBbpq0IuZ07LleKIIO8Uxy-aMAlHRzQACAxNrG6jniFaw18GrxCn0-wEAAwIAA3gAAz0E)

> 设 $f'(x)$ 在 $[a,b]$ 上连续，且 $f(a)=f(b)=0$。证明：$|f(x)|\le\frac{1}{2}\int_a^b|f'(x)|\,dx$。

这两题放在一起讲。本质是因为路径依赖，始终想到利用拉格朗日中值定理。但是事实上除了中值定理之外，面对积分还有两个处理路径。第一是分部积分，第二是牛莱公式。在拉格朗日中值定理走不通的情况下，可以考虑用分部积分或者牛莱公式，而且对于分部积分的考虑应该提前。

![11.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBbtq0Iy9PY5DWtIKk8qu3WoFx4pHwwACBBNrG6jniFZpna1pWXUQIQEAAwIAA3gAAz0E)

> 若函数 $\varphi(x)$ 具有二阶导数，且满足 $\varphi(2)>\varphi(1)$，$\varphi(2)>\int_1^2\varphi(x)\,dx$。证明：至少存在一点 $\xi\in(1,3)$，使得 $\varphi''(\xi)<0$。

没想到积分中值定理。

![11.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBbxq0I08S79_JUWmUQ6jFQ1S3APunwACBRNrG6jniFbKe_vzLWbPZgEAAwIAA20AAz0E)

> 证明：$\int_0^{\frac{\pi}{4}}\frac{\cos x}{1+x^2}\,dx\ge\int_0^{\frac{\pi}{4}}\frac{\sin x}{1+x^2}\,dx$。

没想清楚本质是在证明什么。

这道题只需要证明里面的大于等于 0 即可。

![11.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBb1q0I1z9LAySWm8cmP6RUdzILqfnwACBhNrG6jniFbC85MjZE31VQEAAwIAA3gAAz0E)

> 设 $\varphi(x)$ 是可微函数 $f(x)$ 的反函数，且 $f(1)=0$。证明：$\int_0^1\left[\int_0^{f(x)}\varphi(t)\,dt\right]dx=2\int_0^1 xf(x)\,dx$。

和 11.10，11.11 一样。

![11.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBb5q0I2ocVYQHOCHoFujNmouiNKmFgACCBNrG6jniFbQtNfObR_eiAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[a,b]$ 上连续且严格单调增加，证明：$(a+b)\int_a^b f(x)\,dx<2\int_a^b xf(x)\,dx$。

这道题 1 刷的时候完全没想明白在干啥，事实上利用一个很“土”的办法就是变量代换 $b$ 为 $x$，迎刃而解。

![11.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBb9q0I2_yxc66lYAAXUyb8yxr8wTSw4AAgkTaxuo54hW55pOWWpq5kEBAAMCAAN4AAM9BA)

> 设 $f(x)$ 在区间 $[0,1]$ 上有二阶导数，且 $f\left(\frac{1}{2}\right)=1$，$f''(x)>0$。证明：$\int_0^1 f(x)\,dx\ge1$。

泰勒公式背错了。

## 张宇 30 讲基础高数 1 刷第 12 章

![12.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcBq0I3WKDViArvCXeFmeusR6LBINAACChNrG6jniFb2vwX3Kls1AQEAAwIAA3gAAz0E)

> 用铁锤将一铁钉击入木板，设木板对铁钉的阻力与铁钉击入木板的深度成正比，在击第一次时，将铁钉击入木板 $1\,\mathrm{cm}$。如果铁锤每次击打做功相等，则第二锤可将铁钉又击入 ______。

“又”

![12.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcFq0I3w_d-swVwOAAFKglnqhuVP-AwAAgsTaxuo54hWTh7SXKrXXfsBAAMCAAN4AAM9BA)

> 有一倒圆锥形容器，高为 $a$，上底半径为 $b$，装满水。记水的密度为 $\rho$，重力加速度为 $g$，则将容器中的水全部从容器顶部抽出所做的功为 ______。

搞清楚坐标系的位置，对于这类题，一定要搞清楚 $x$ 和 $s$ 之间到底分别是什么。

![12.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcJq0I4KHxYZTMGUq4QW77LkAk3oDAACDBNrG6jniFacDzL6W14wjAEAAwIAA3gAAz0E)

> (仅数学一、数学二) 斜边长为 $2a$ 的等腰直角三角形平板铅直地沉没在水中，且斜边与水面相齐。记重力加速度为 $g$，水的密度为 $\rho$，则该平板一侧所受的水压力为 ______.

这里的 $P$ 其实就是 $F$（公式里的），按照自己的理解就好了。

![12.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcNq0I4cInAMzLGyZ1CAW9Fy-_Ge8QACDRNrG6jniFaL5WRW3xirOAEAAwIAA3gAAz0E)

> (仅数学一、数学二) 有一半径为 $4\mathrm{m}$ 的半球形水池蓄满了水，现在要将水全部抽到距水池原水面 $6\mathrm{m}$ 高的水箱中，求需做多少功.(水的密度 $\rho=1000\,\mathrm{kg/m^3}$，重力加速度 $g=9.8\,\mathrm{m/s^2}$，$\pi=3.14$)

不会做。对于物理应用题，事实上强化那块搞一下才真正大概搞明白怎么个回事，对谁积分，谁是变量等，以及抽水做功是对重力做功，而不是对压力做功。

## 张宇 30 讲基础高数 1 刷第 13 章

![13.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcRq0I42ELn35W3Pogm_CPTUjgrO8wACDhNrG6jniFZA7YVuUHARhQEAAwIAA20AAz0E)

> 设 $I_1=\lim\limits_{\substack{x\to0\\y\to0}}\frac{|xy|}{\sqrt{x^2+y^2}}$，$I_2=\lim\limits_{\substack{x\to0\\y\to0}}\frac{x|y|}{x^2+y^2}$，则（ ）.
>
> - A. $I_1$ 存在，$I_2$ 不存在
> - B. $I_1$ 存在，$I_2$ 存在
> - C. $I_1$ 不存在，$I_2$ 存在
> - D. $I_1$ 不存在，$I_2$ 不存在

本题没想到用夹逼定理，对于这类题，根据强化经验可知，先判断是否齐次，然后一般采用夹逼定理去证明。

![13.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcVq0I5HVdaCQJqyVA86ne5sbLEmgwACDxNrG6jniFaIZDgI6R3FtgEAAwIAA20AAz0E)

> 设函数 $f(t)$ 连续，令 $F(x,y)=\int_0^{x-y}(x-y-t)f(t)\,dt$，则（ ）.
>
> - A. $\frac{\partial F}{\partial x}=\frac{\partial F}{\partial y}$，$\frac{\partial^2F}{\partial x^2}=\frac{\partial^2F}{\partial y^2}$
> - B. $\frac{\partial F}{\partial x}=\frac{\partial F}{\partial y}$，$\frac{\partial^2F}{\partial x^2}=-\frac{\partial^2F}{\partial y^2}$
> - C. $\frac{\partial F}{\partial x}=-\frac{\partial F}{\partial y}$，$\frac{\partial^2F}{\partial x^2}=\frac{\partial^2F}{\partial y^2}$
> - D. $\frac{\partial F}{\partial x}=-\frac{\partial F}{\partial y}$，$\frac{\partial^2F}{\partial x^2}=-\frac{\partial^2F}{\partial y^2}$

本题巧合做对，事实上这道题如果采用换元法问题会很大，即便换元了，还是里面的 t 还是 t，又不会发生变化。

![13.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcZq0I5cxfP0PemqXzc0v53mXVKvoAACEBNrG6jniFYG6PZxjzZoYQEAAwIAA20AAz0E)

> 设函数 $f(x,y)=\int_0^{xy}e^{-x^2t^2}dt$，则 $f_x'(1,+\infty)=$ ______.

对于这题需要注意这几个问题：第一，$u^2$ 抄错了；第二，换元法之后的代回问题。

![13.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcdq0I5t7kZUVNPqWQa_hJV0FAABKCAAAhETaxuo54hWEOfgqTu53moBAAMCAAN4AAM9BA)

> 设 $z=f(e^x\sin y,x^2+y^2)$，其中 $f$ 具有二阶连续偏导数，$f_1'(0,0)=1$，$f_2'(0,0)=-1$，则 $\left.\frac{\partial^2z}{\partial x\partial y}\right|_{(0,0)}=$（ ）.
>
> - A. $0$
> - B. $1$
> - C. $2$
> - D. $-1$

本题巧合做对。原因是没有对 $f_1$ 等进行求导。

![13.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBchq0I6Be7N8oOlH4Jkbq7EAAe6N5i4AAhITaxuo54hWxgUvr3UfyO8BAAMCAAN4AAM9BA)

> 设函数 $f(x,e^x)=x+e^x$，且 $\left.f_x'(x,y)\right|_{y=e^x}=1+2e^x$，则 $\left.f_y'(x,y)\right|_{y=e^x}=$ ______.

关于这题主要是对记号理解不清晰，对于第一个式子求导，是对 $f(x,e^x)$ 求导，而不是对 $f(x,y)$ 求偏导，这种题可以联想到先代后求和先求后代。

![13.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBclq0I6VZMV4MxaXndnjbNH5Rl52HwACExNrG6jniFb4QkcQyPyvHwEAAwIAA3gAAz0E)

> 设对任意的 $x,y$ 有 $\left(\frac{\partial f}{\partial x}\right)^2+\left(\frac{\partial f}{\partial y}\right)^2=4$，用变量代换 $x=uv$，$y=\frac{u^2-v^2}{2}$ 将函数 $f(x,y)$ 变换成函数 $g(u,v)$，且满足关系式 $a\left(\frac{\partial g}{\partial u}\right)^2-b\left(\frac{\partial g}{\partial v}\right)^2=u^2+v^2$，求 $a,b$.

想当然没取倒数。

![13.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcpq0I6q8p3k2533icAWzwGSJ-KrJgACFRNrG6jniFa7fGtZT7tFaAEAAwIAA3gAAz0E)

> 设 $F(x,y)$ 在点 $(x_0,y_0)$ 的某邻域内有连续的偏导数，且 $F(x_0,y_0)=0$，则 $F_y'(x_0,y_0)\neq0$ 是 $F(x,y)=0$ 在点 $(x_0,y_0)$ 的某邻域内能确定一个连续函数 $y=y(x)$，且满足 $y_0=y(x_0)$，并有连续导数的（ ）.
>
> - A. 必要非充分条件
> - B. 充分非必要条件
> - C. 充要条件
> - D. 既不充分又不必要条件

没想到举反例：$(y-x)^3$。

![13.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBctq0I66SC9Djaavv7VrS0Taomyz2QACFhNrG6jniFZIZXSdoKYazAEAAwIAA3gAAz0E)

> 设函数 $z=z(x,y)$ 由方程 $F(x+2y^{-1},y+2x^{-1})=0$ 所确定，其中 $F$ 具有连续偏导数，且 $xF_1'+yF_2'\neq0$，则 $x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=$ ______.

公式法求的时候要有负号。

![13.1.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBcxq0I7PJiZgGe2HPkPApPr1iaBWogACFxNrG6jniFbD4I53bigcuwEAAwIAA3gAAz0E)

> 二元函数 $f(x,y)$ 在点 $(x_0,y_0)$ 处取得极值是一元函数 $f(x,y_0)$ 和 $f(x_0,y)$ 分别在 $x_0$ 和 $y_0$ 处取得极值的（ ）.
>
> - A. 充分条件
> - B. 必要条件
> - C. 充要条件
> - D. 既非充分也非必要条件

![13.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBc1q0I7btNR27yR9rdOhrkf6J3vMRwACGBNrG6jniFamvDHwMHd3WwEAAwIAA3gAAz0E)

> 设函数 $f(x,y)$ 具有二阶连续偏导数，且在点 $(x_0,y_0)$ 处取极大值，记 $a=\left.\frac{\partial^2f}{\partial x^2}\right|_{(x_0,y_0)}$，$b=\left.\frac{\partial^2f}{\partial y^2}\right|_{(x_0,y_0)}$，则（ ）.
>
> - A. $a>0,b>0$
> - B. $a\geq0,b\geq0$
> - C. $a<0,b<0$
> - D. $a\leq0,b\leq0$

![13.1.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBc5q0I7oJaaYz9mHuoe69qlgmyGS0gACGRNrG6jniFbx10gheWWfEgEAAwIAA3gAAz0E)

> 已知函数 $z=z(x,y)$ 由方程 $(x^2+y^2)z+\ln z+2(x+y+1)=0$ 确定，求 $z(x,y)$ 的极值。

![13.1.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBc9q0I715soH0sk4HCXDW0HpYg5eeAACGhNrG6jniFbB5mHTuFVSJgEAAwIAA3gAAz0E)

> 设 $a,b$ 满足 $\int_a^b|x|dx=\frac{1}{2}$（$a<0,b>0$），求曲线 $y=x^2+ax$ 与直线 $y=bx$ 所围区域面积的最大值和最小值。

本题是不封闭曲线（也就是得考虑区间），所以使用拉格朗日乘数法算出来的只是边界条件。

事实上这道题 2 刷的时候用了三角换元，迎刃而解。

![13.1.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdBq0I8LsMkdkOd4oNLmtnUwt9P2ogACGxNrG6jniFZJaIwo_H8_pAEAAwIAA3gAAz0E)

> 已知函数 $z=f(x,y)$ 的全微分 $dz=2xdx-2ydy$，并且 $f(1,1)=2$.求 $f(x,y)$ 在椭圆域 $D=\left\{(x,y)\left|x^2+\frac{y^2}{4}\leq1\right.\right\}$ 上的最大值和最小值。

这题当时 1 刷的时候没看懂是什么意思，其实很简单，先利用偏积分求出原函数，然后因为是面积内，所以需要考虑边界和本身。

![13.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdFq0I8ika4mbFzD2b5RnQ1NO1_-rAACHBNrG6jniFYhI4pq_vXIfQEAAwIAA20AAz0E)

> 函数 $f(x,y)=\sqrt{|xy|}$ 在点 $(0,0)$ 处（ ）.
>
> - A. 偏导数不存在
> - B. 偏导数存在，但不可微
> - C. 可微，但偏导数不连续
> - D. 偏导数连续

属于低级错误，本题做对了，选项选错了。

## 张宇 30 讲基础高数 1 刷第 14 章

![14.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdJq0I83nmFn4My-NDxXqyCS3L-PRAACHRNrG6jniFZ5nW14pjFa4gEAAwIAA3gAAz0E)

> 设平面闭区域 $D_i(i=1,2,3,4)$ 分别是由 $L_1:x^2+y^2=1$，$L_2:x^2+y^2=2$，$L_3:x^2+2y^2=2$，$L_4:2x^2+y^2=2$ 围成的平面区域，记 $I_i=\iint_{D_i}\left(1-x^2-\frac{1}{2}y^2\right)dxdy$，则 $\max\{I_1,I_2,I_3,I_4\}=$（ ）.
>
> - A. $I_1$
> - B. $I_2$
> - C. $I_3$
> - D. $I_4$

对于本题应该利用定义求解，没有理解定义。

![14.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdNq0JAgbmWVyzwFQPHo8ZYc2QQBSgACHhNrG6jniFYbwJA7Ze87jQEAAwIAA20AAz0E)

> 设 $D(t)=\{(x,y)\mid2x^2+3y^2\leq6t\}(t\geq0)$，
>
> $f(x,y)=\begin{cases}\frac{\sqrt{1-(x^2+y^2)}-1}{e^{x^2+y^2}-1},&(x,y)\neq(0,0),\\ a,&(x,y)=(0,0)\end{cases}$
>
> 为连续函数，令 $F(t)=\iint_{D(t)}f(x,y)dxdy$，则 $F_+'(0)=$ ______.

对于这道题，没有想到用二元积分的积分中值定理去做，对于二元积分的积分中值定理，可以类比一元的去理解。

![14.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdRq0JB6PzDLgGqMqgjxZplHi_wkDwACHxNrG6jniFZZTOB93Q2L_gEAAwIAA3gAAz0E)

> 设 $I_i=\iint_{D_i}\sqrt{x-y}\,dxdy\ (i=1,2,3)$，其中 $D_1=\{(x,y)\mid0\leq x\leq1,0\leq y\leq1\}$，$D_2=\{(x,y)\mid0\leq x\leq1,0\leq y\leq\sqrt{x}\}$，$D_3=\{(x,y)\mid0\leq x\leq1,x^2\leq y\leq1\}$，则（ ）.
>
> - A. $I_1<I_2<I_3$
> - B. $I_3<I_1<I_2$
> - C. $I_2<I_3<I_1$
> - D. $I_2<I_1<I_3$

对于这题，没有理解什么是 $x-y$ 给的条件是什么，也是用定义去做。

![14.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdVq0JCgCUjtfjt_P1rOUjtsj_kfugACIBNrG6jniFZJZlmjEc8cwQEAAwIAA20AAz0E)

> 设 $f(x)=\iint_{D(x)}\frac{v\ln\sqrt{u^2+v^2}}{u+v}dudv$，$D(x)=\left\{(u,v)\left|\frac{1}{4}\leq u^2+v^2\leq x^2,u>0,v>0\right.\right\}\left(x>\frac{1}{2}\right)$，则 $f(x)=$（ ）.
>
> - A. $\frac{1}{4}\iint_{D(x)}\ln(u^2+v^2)dudv$
> - B. $\frac{1}{2}\iint_{D(x)}\ln(u^2+v^2)dudv$
> - C. $\iint_{D(x)}\ln(u^2+v^2)dudv$
> - D. $2\iint_{D(x)}\ln(u^2+v^2)dudv$

对于这题犯了一个经典的错误，也就是 $\frac{1}{2}\left(\frac{1}{2}x+\frac{1}{2}x\right)=\frac{1}{2}$

![14.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdZq0JC3vIV6k36_lXq59RfyzWmf3gACIRNrG6jniFZCMLMH3Ua3dQEAAwIAA20AAz0E)

> 设函数 $f(x,y)$ 连续，则二次积分 $\int_0^{\pi}dx\int_{\sin x}^{1}f(x,y)dy=$（ ）.
>
> - A. $\int_0^1dy\int_{\pi+\arcsin y}^{\pi}f(x,y)dx$
> - B. $\int_0^1dy\int_{\pi-\arcsin y}^{\pi}f(x,y)dx$
> - C. $\int_0^1dy\int_{[?]}^{\pi+\arcsin y}f(x,y)dx$
> - D. $\int_0^1dy\int_{[?]}^{\pi-\arcsin y}f(x,y)dx$

对于这种题，曾经一直执着于直接带入去计算，事实上只需要画出积分区间就很简单了。

![14.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBddq0JDLyqi6ygU5cIDXKQRBIkSItgACIhNrG6jniFYVCz00cE5lfAEAAwIAA3gAAz0E)

> 当 $x\to0^+$ 时，$f(x)=\int_0^{x^2}dy\int_x^{\sqrt{y}}\sin\frac{y}{t}dt$ 与 $g(x)=ax^b$ 是等价无穷小量，则 $ab=$ ______.

对于这题是对 $t$ 和 $y$ 积分，尤其需要注意是对谁积分，二刷的时候也差点没捋过来。

![14.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdhq0JH8Ky-fq8-0aXCeqc5ZcRg_YQACIxNrG6jniFanlyIU7tdyDAEAAwIAA3gAAz0E)

> 设区域 $D=\{(x,y)\mid x^2+y^2\leq\sqrt{2}\}$，则 $\iint_D\left(x^2+\frac{y^2}{2}\right)dxdy=$ ______.

没有想到轮换对称性在那里硬解。

![14.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdlq0JIY-O3fuUTH_PSzILb7TT_YnAACJBNrG6jniFb74k2JQqo7KAEAAwIAA3gAAz0E)

> 设平面有界区域 $D$ 位于第一象限，由曲线 $x^2+y^2-xy=1$，$x^2+y^2-xy=2$ 与直线 $y=\sqrt{3}x$，$y=0$ 围成，计算 $\iint_D\frac{1}{3x^2+y^2}dxdy$.

没有想到利用极坐标且这道题跳步导致计算错误。

![14.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdpq0JNibt-1DtiFYo6faR1vKUXJ1QACJhNrG6jniFay-Fi_pMbM4gEAAwIAA3gAAz0E)

> 设 $f(x)=\iint_{D(x)}\frac{v\ln\sqrt{u^2+v^2}}{u+v}dudv$，$D(x)=\left\{(u,v)\left|\frac{1}{4}\leq u^2+v^2\leq x^2,u>0,v>0\right.\right\}$，求曲线 $y(x)=\int_1^x f(t)dt\left(x>\frac{1}{2}\right)$ 的拐点。

积分区域搞成整个圆。

![14.1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBdtq0JN17Me9eMZivX__cWKrzTvQ3wACJxNrG6jniFa3zWxZtfQvbgEAAwIAA3gAAz0E)

> 计算 $\int_0^{+\infty}e^{-x^2}dx$.
>
> 计算 $\int_{-\infty}^{+\infty}x^2e^{-x^2}dx$.

这俩没啥好说的，直接跳。

![14.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBd1q0JPnRZ2oYwy7JBukfIrsBnC2xQACKBNrG6jniFbs42gVq-jOhgEAAwIAA20AAz0E)

> 已知 $\lim\limits_{x\to+\infty}\frac{\int_0^x t^2e^{x^2-t^2}dt+ae^{x^2}}{x^b}=-\frac{1}{2}$，求 $a,b$ 的值。

本质这道题 $a$ 不会算是对极限的定义理解不清晰以及对知识点迁移的能力还是不够。

![14.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBd5q0JQGYhHMFv5HoQr4J82S-1A_OQACKRNrG6jniFbmiprxzvH3UwEAAwIAA20AAz0E)

> $\int_0^1dx\int_{1-x}^{\sqrt{1-x^2}}\frac{x+y}{x^2+y^2}dy=$ ______.

考虑轮换对称性，然后被薄纱。对于这种题需要就事论事去分析。

![14.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBd9q0JQg402S1xAFYsuF4-2ct9_ciQACKhNrG6jniFa8H0BFwyFEgQEAAwIAA3gAAz0E)

> $\int_{-1}^{1}dx\int_{x^2}^{\sqrt{2-x^2}}\sin(x^2+y^2)dy=$（ ）.
>
> - A. $\frac{\pi}{4}(\cos2-1)$
> - B. $\frac{\pi}{4}(-\cos2+1)$
> - C. $\frac{\pi}{4}(\cos2+1)$
> - D. $\frac{\pi}{4}(-\cos2-1)$

最后一步。

![14.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeBq0JRpCW2X60YSqMJ5PpV1LerxvQACKxNrG6jniFYX0MgHFU5hQgEAAwIAA3gAAz0E)

> 设 $a>0$，$f(x)=g(x)=\begin{cases}a,&0\leq x\leq1,\\ 0,&\text{其他},\end{cases}$ 而 $D$ 表示全平面，则 $I=\iint_Df(x)g(y-x)dxdy=$ ______.

没想到怎么做。

![14.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeFq0JR7I7w9MOgfmoXInX-pzc4ThgACLBNrG6jniFYD-NrzQFsOkwEAAwIAA3gAAz0E)

> 设区域 $D=\{(x,y)\mid x^2+y^2\leqslant 1,x\geqslant 0\}$，计算二重积分 $I=\iint_D \frac{1+xy}{1+x^2+y^2}\,dxdy$。

没想到先化简。

![14.2.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeJq0JSN_VFMxaUi3iaQHDlz2MRAowACLRNrG6jniFbUeRvpPK5zbwEAAwIAA20AAz0E)

> 计算二重积分 $I=\iint_D r^2e^{-r^2\sin^2\theta}\cos\theta\,dr\,d\theta$，其中 $D=\{(r,\theta)\mid r\geqslant 0,\frac{\pi}{4}\leqslant\theta\leqslant\frac{\pi}{2}\}$。

![14.2.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeNq0JSYL7fAPV9LFByNKO6Yw-cJqgACLhNrG6jniFa1bG0ytKn7nAEAAwIAA3gAAz0E)

> (1) 设积分区域 $D$ 能使二重积分 $\iint_D (1-2x^2-y^2)\,d\sigma$ 的值达到最大，求出该积分区域 $D$；
>
> (2) 对 (1) 中的二重积分 $\iint_D (1-2x^2-y^2)\,d\sigma$，求出其最大值。

对于这两题没有稳扎稳打去分析，非常浮躁（这两题最开始先跳了，回头再来写的）

## 张宇 30 讲基础高数 1 刷第 15 章

![15.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeRq0JTCC6jPXt2kk0C5ARn_Ll-B1QACLxNrG6jniFa45M4NFC_BLQEAAwIAA20AAz0E)

> 求微分方程 $dy=\sin(x+y+100)\,dx$ 的通解。

本题没想到积分怎么积分，其实这个积分也是经典积分：$\frac{1}{1+\sin u}$。

![15.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeVq0JTUpReL5rmLjLvxVXVfPspisQACMBNrG6jniFYeMFOxSYg9ygEAAwIAA3gAAz0E)

> 设 $L$ 是一条平面曲线，其上任意一点 $P(x,y)(x>0)$ 到坐标原点的距离恒等于该点处的切线在 $y$ 轴上的截距，且 $L$ 经过点 $(\frac{1}{2},0)$，求曲线 $L$ 的方程。

本题没有辨析清楚 $y$ 和 $Y$ 的区别。

![15.1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBeZq0JTuUt1WPUOc_EIDuY73oI5X-gACMRNrG6jniFZ9urUYKZ-eTgEAAwIAA3gAAz0E)

> 微分方程 $ydx+(x-3y^2)dy=0$ 满足条件 $y\big|_{x=1}=1$ 的解为 $y=$ ______。

本题应该辨析清楚 $y$ 和 $x$ 的关系，这道题采用 $\frac{\mathrm{d}x}{\mathrm{d}y}$ 便迎刃而解。

![15.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBedq0JUSV7quW86A-Fn6Byl0RnwBmgACMhNrG6jniFZ9cgMvNOXZRgEAAwIAA3gAAz0E)

> 设函数 $y=\varphi(x)$ 是微分方程 $y'+ay=(1-\frac{1}{x})^x$ 的一个解，则 $\lim\limits_{x\to+\infty}\varphi(x)=$（ ）。
>
> - A. $e$
> - B. $e^2$
> - C. $\frac{1}{e}$
> - D. $\frac{1}{e^2}$

这里 1 刷的时候是没有搞明白变限积分函数和不定积分的联系是什么，所以没有联想起来。

![15.1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBehq0JUkSYnCEayoDLRuJdZ-A1p6yQACMxNrG6jniFY76KLVnmc08gEAAwIAA3gAAz0E)

> 设 $a>0$，函数 $f(x)$ 在 $[0,+\infty)$ 内连续有界。证明：微分方程 $y'+ay=f(x)$ 的解在 $[0,+\infty)$ 内有界。

本题错误原因和上一题类似。

![15.1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBelq0JVDWwlAxkwiyWgwNjkVZqnsZgACNBNrG6jniFZ0KE1xby0tvgEAAwIAA3gAAz0E)

> 求微分方程 $y''=y'[1+(y')^2]$ 满足 $y(0)=0,y'(0)=1$ 的特解。

对于这一题是利用换元法，但是在写这道题的时候却进入误区，惯性思维直接 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 转换为 $\frac{\mathrm{d}p}{\mathrm{d}y}$，而没有就题论题去分析。

![15.1.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBepq0JVV2-120tgNg-sqKO7VItSQ3QACNRNrG6jniFbPKFK9GaKgYAEAAwIAA3gAAz0E)

> 设函数 $y=y(x)$ 是微分方程 $y''+y'-2y=0$ 的解，且在 $x=0$ 处 $y(x)$ 取得极值 $3$，则 $y(x)=$ ______。

这道题在转换为特征方程的时候错误，所以还是一步步计算。

后面的题 1 刷的时候都没做，需要注意的是做了一道物理题，但是要分辨清楚变化率的正负性。

![15.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBetq0JVnYcnhosTJi4xrmoTo8o5CYAACNhNrG6jniFay-k32lBxxXgEAAwIAA3gAAz0E)

> 微分方程 $y''-4y'+4y=x^2+8e^{2x}$ 的一个特解应具有的形式为（其中 $a,b,c,d$ 为常数）（ ）。
>
> - A. $ax^2+bx+ce^{2x}$
> - B. $ax^2+bx+c+dx^2e^{2x}$
> - C. $ax^2+bx+cxe^{2x}$
> - D. $ax^2+(bx^2+cx)e^{2x}$

本题错在想当然上面，和 2 刷的时候的一个错误点（也就是没有想清楚 2 重根）类似。

![15.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBexq0JWHW_I4xQ2_8VEvJfIv9oJABgACNxNrG6jniFabVyFWo6oB_gEAAwIAA3gAAz0E)

> 已知 $y_1=e^{3x}-xe^{2x}$，$y_2=e^x-xe^{2x}$，$y_3=-xe^{2x}$ 是某二阶常系数非齐次线性微分方程的 3 个解，则该方程满足 $y(0)=0,y'(0)=1$ 的特解为 ______。

本题没有搞懂怎么做，但是其实慢慢分析能做出来。

![15.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBe1q0JWXR5fVnOyS-vMxREO_Zoe_VQACOBNrG6jniFYGlMxHAAHtVt8BAAMCAANtAAM9BA)

> （仅数学一、数学二）微分方程 $xy''+3y'=0$ 的通解为 ______。

关于这道题，手生 + 计算量大，所以没算完。

![15.2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBe5q0JWnGVFjdZvAX1cuA6LENZEbwQACORNrG6jniFamoVrVPaJ-wQEAAwIAA20AAz0E)

> 设函数 $f(t)$ 在 $[0,+\infty)$ 上连续，且满足方程 $f(t)=e^{4\pi t^2}+\iint_{x^2+y^2\leqslant 4t^2}f(\frac{1}{2}\sqrt{x^2+y^2})\,dxdy$，求 $f(t)$。

本题错在没有一点一点分析背后的本质，所以心虚没做对。
