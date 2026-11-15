---
title: 武忠祥高数强化 2 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 武忠祥高数强化 2 刷
category: 考研
series: NPEE
seriesOrder: 7.13
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 武忠祥高数强化 2 刷第 1 章

对于本章的重刷，低级错误非常多，评价为边看视频边写题导致的，而且对于非常多的步骤没有做一步算一步。

![1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIFq1hbl_XFmxnX2LDPDjZsMESHUGQACYBZrG8YqsVYUZn-A42KyOAEAAwIAA3gAAz0E)

> 【例 3】给出以下 4 个命题：
>
> ① 若 $f'(x_0)$ 存在，则 $f(x)$ 在 $x_0$ 点的某邻域内严格单调增加的充要条件是 $f'(x_0)>0$.
>
> ② 若 $f'(x_0)>0$，则当 $n$ 充分大时，$\left[f\left(x_0+\frac{1}{n}\right)-f(x_0)\right]\left[f\left(x_0-\frac{1}{n}\right)-f(x_0)\right]<0$.
>
> ③ 若 $\lim\limits_{x\to x_0}\frac{f'(x)}{(x-x_0)^2}=1$，则 $f(x)$ 在 $x_0$ 点的某邻域内严格单调增加。
>
> ④ 若在 $x_0$ 点的某邻域内 $f(x)$ 可导且 $f'(x)\ne 0$，则 $f(x)$ 在 $x_0$ 的该邻域内严格单调。
>
> 其中真命题个数为
>
> - A. 0.
> - B. 1.
> - C. 2.
> - D. 3.

本题选对了，但是判断具体项判断错了。1 显然错 2 显然对。对于 3，没说这点是连续的。

对于举反例一定要从不连续的角度思考。

![1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIJq1hcwVmEFyuea7iK-wfoxiJQ3rwACYRZrG8YqsVYVkG14_6kq_gEAAwIAA20AAz0E)

> (1) $\lim\limits_{x\to 0}\frac{\arctan x-\sin x}{x^3}$；

本题属于极为低级的错误，$-\frac{1}{3}+\frac{1}{6}=-\frac{1}{6}\ne-\frac{1}{2}$。

![1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCINq1hdGig1d51Qbrc7l3qMkuZpn7AACYhZrG8YqsVZusuQ03jy2gQEAAwIAA20AAz0E)

> 【例 6】$\lim\limits_{x\to 0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^2[x+\ln(1-x)]}$.

属于低级错误，如下图：

![1.3 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIRq1hdbU_E2EM74cFsjus1jL0cVtwACYxZrG8YqsVahKPtqqphX5AEAAwIAA3gAAz0E)

> [原图非题目：手写解题过程截图，为上一道极限题的求算演算]

![1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIVq1hd1SFeowQPaYGTyIRmg_OO2tQACZBZrG8YqsVZa91jCEC943gEAAwIAA3gAAz0E)

> (1) 若 $f(x)$ 可导，则当 $\lim\limits_{x\to+\infty}\frac{f(x)}{x}$ 存在时，$\lim\limits_{x\to+\infty}f'(x)$ 存在；
>
> (2) 若 $\lim\limits_{x\to+\infty}f'(x)$ 存在，则 $\lim\limits_{x\to+\infty}\frac{f(x)}{x}$ 存在；
>
> (3) 若 $\lim\limits_{x\to+\infty}[f'(x)+f(x)]$ 存在，则 $\lim\limits_{x\to+\infty}f(x)$ 存在；
>
> (4) 若 $f(x)$ 连续，则当 $\lim\limits_{x\to+\infty}f(x)$ 存在时，$\lim\limits_{x\to+\infty}\frac{\int_0^x f(t)\,\mathrm{d}t}{x}$ 存在。
>
> 其中正确命题的个数是
>
> - A. 1.
> - B. 2.
> - C. 3.
> - D. 4.

本题错选为 A。
对于这道题，首先 1 显然是错误的，取 $x+\sin x$；

对于 2，我的想法错在让前者取 $0$，即便前者取 $0$，那么后者 $\frac{C}{x}$，当 $x$ 趋于无穷的时候，后面那个也是 $0$。

对于 3，想当然没去做。

综上所述，本题 2 和 4 其实是对洛必达法则的理解问题。如果一个函数 $n$ 阶可导，那么可以洛 $n-1$ 次。如果知道这个函数第 $n$ 阶可导的时候同时它还存在，那么就可以洛 $n$ 次。

对于第 3 空，其实是犯了一个神秘的错误，那就是没想到同时乘上 $e^x$。事实上这道题在 880 里出现过的！

![1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIZq1hf3n0qotqVClIQJFBI_vDMXWAACZRZrG8YqsVbCCUDKQD3LKwEAAwIAA20AAz0E)

> 求极限 $\lim\limits_{x\to 0}\left(\frac{1}{x^2}-\cot^2 x\right)$.

对于这道题属于很低级的错误，是因为通分完了之后在那里滥用等价无穷小（直接把 $\sin x$ 的平方看成了 $x$ 去算）

![1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIdq1hgy0MWQ_6G5BFpn3ZCiRxm8CQACZhZrG8YqsVbZJ1vrP82uuwEAAwIAA20AAz0E)

> $\lim\limits_{x\to +\infty}\left[\frac{x^{1+x}}{(1+x)^x}-\frac{x}{e}\right]$.

本题属于低级错误，对于这道题，等价无穷小，$1-e^x$ 等价无穷小代换为 $-x$，脑子抽了想着 $1-e^{-x}$ 代换为 $x$。评价为过拟合。

![1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIhq1hhF96XkjKZdTsudgYooB6ooxgACZxZrG8YqsVY-lPcyLRWIfwEAAwIAA20AAz0E)

> 求极限 $\lim\limits_{x\to +\infty}x\left(1-\frac{\ln x}{x}\right)^x$.

本题错误原因在 $x$ 凑上去的时候应该是 $+\ln x$，而不是 $\times\ln x$。

![1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIlq1hhVPu5SaYSpKYrw-hIFtFiUaAACaBZrG8YqsVaU2eujbMpdVwEAAwIAA20AAz0E)

> 求极限 $\lim\limits_{x\to 0}\left(\frac{\arcsin x}{x}\right)^{\frac{1}{1-\cos x}}$.

泰勒公式问题，$\arcsin x$ 的三阶泰勒展开为 $\frac{1}{6}$，而不是 $\sin x$ 的。

![1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIpq1hhmtSR_MOw1vByg5bFlfh3kJAACaRZrG8YqsVYtKOAFaoCaRAEAAwIAA20AAz0E)

> (3) $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^2+1^2}}+\frac{1}{\sqrt{n^2+2^2}}+\cdots+\frac{1}{\sqrt{n^2+n^2}}\right)$.
>
> (4) $\lim\limits_{n\to\infty}\left[\frac{n}{(n+1)^2}+\frac{n}{(n+2)^2}+\cdots+\frac{n}{(n+n)^2}\right]$.

第 3 题属于低级错误，$\ln\left(x+\sqrt{1+x^2}\right)$，将 $1$ 代入，结果代入成 $\ln 2$。

第 4 题不能用夹逼定理。

![1.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCItq1hh6TL-79ODcNuIXzpWoCF8Z0gACahZrG8YqsVbaMPR2tdR-nwEAAwIAA3gAAz0E)

> 求极限 $\lim\limits_{n\to\infty}\left[\frac{n\ln\left(\frac{n}{n+1}\right)}{n^2+1}+\frac{n\ln\left(\frac{n}{n+2}\right)}{n^2+2}+\cdots+\frac{n\ln\left(\frac{n}{n+n}\right)}{n^2+n}\right]$.

对于这道题，也是积分代入的时候漏代入了。

![1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCIxq1hiK42vkH1AjMPg2FZ0Q6zfOYgACaxZrG8YqsVY07JkuT4Q2UQEAAwIAA20AAz0E)

> 设 $a_n=\sqrt{\frac{1}{2}\times\frac{3}{4}\times\cdots\times\frac{2n-1}{2n}}$，求极限 $\lim\limits_{n\to\infty}a_n$.

对于这种题，首先先思考方法，无非采用取对数凑积分定义或者采用夹逼定理。对于这题，显然是没法采用凑积分定义去做的，所以考虑夹逼定理。显然本题的上界为 $1$，考虑如何凑下界。利用移位技巧可以凑出来。

![1.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCI1q1hidYLb-cY6SxHi-8Ygs7m_yyQACbRZrG8YqsVamtAozw863lQEAAwIAA20AAz0E)

> (1) 求极限 $\lim\limits_{n\to\infty}\frac{\sqrt[n]{n!}}{n}$.
>
> (2) 求极限 $\lim\limits_{n\to\infty}\frac{n!}{(a+1)(a+2)\cdots(a+n)}$，其中 $a>0$.

对于第 1 题，$x\ln x-x$ 把 $1$ 代入的时候漏代。

对于第 2 题其实是对的，只是单纯没写完。

![1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCI5q1hixtIR4ybVrTSIv4rq3fX5mAANuFmsbxiqxVl3_RwbaAyYmAQADAgADbQADPQQ)

> 设 $\lim\limits_{x\to\infty}\left(\frac{x^2+1}{x+1}-ax+b\right)=3$，求 $a,b$ 的值。

低级错误，$b-1=3$，$b=4$ 而不是 $2$。

![1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCI9q1hjAdRqoJOmr66jDWYNNFVb63AACbxZrG8YqsVaChGPeXFlSWAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 连续，非负且 $f(0)=f(1)=0$。求证：存在 $\xi\in[0,1]$，使 $f(\xi+t)=f(\xi)$，其中 $0<t<1$.

属于低级错误。看漏了一个条件。

## 武忠祥高数强化 2 刷第 2 章

![2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJBq1hkPlutN1V7BMfjnHvYWRK0mFAACchZrG8YqsVZ2wDmO7AzgUgEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to 0}\frac{xf(x)-e^{2\sin x}+1}{\ln(1+x)+\ln(1-x)}=-3$，证明 $f(x)$ 在 $x=0$ 处可导，并求 $f'(0)$.

属于低级错误，第一步的时候 $-3$ 抄成了 $3$，从而全盘错误。思路其实是对的。

![2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJFq1hmQYoKkt8_Ms6obZO-44Bqi9QACcxZrG8YqsVbpZMZWxw9lRgEAAwIAA3gAAz0E)

> 函数 $f(x)=\sqrt[3]{(x+3)(x+1)}\,|x^3-x|$ 不可导点的个数为 ______.

后来做对了，但是还是放在这里注意一下。前面那一块。

注意本来就不可导的点。

![2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJJq1hmp0LITPL4KLXL6T1q_RJKylAACdBZrG8YqsVaU61shW9XKAQEAAwIAA3gAAz0E)

> 已知 $y=f\left(\frac{3x-2}{3x+2}\right)$，$f'(x)=\arctan x^2$，则 $\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=0}=$ ______.

漏抄了一个平方，导致计算错误。

![2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJNq1hm7lSvuSP1nv_Ay0op_DNKC9QACdRZrG8YqsVYKkOnM4KaZZAEAAwIAA3gAAz0E)

> 设 $\varphi(x)=\begin{cases}x^3\sin\frac{1}{x},&x\neq 0,\\0,&x=0,\end{cases}$ 函数 $f(x)$ 可导，求 $F(x)=f(\varphi(x))$ 的导数。

这道题我知道用不能用等价无穷小那个方法，但是还是没想到怎么做。这道题也错了非常多次了，没想到用求导法则直接得出结论。这个需要非常非常注意。可以直接用求导法则的那个结论。

![2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJRq1hnOsMqCtWXrgLoL_V5zN6PZ6wACdhZrG8YqsVbsOWsYjhoR9QEAAwIAA3gAAz0E)

> 设 $y=y(x)$ 由 $y=\tan(x+y)$ 所确定，试求 $y',y''$.

是对的，不过有更好的解法（利用原方程化简）

![2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJVq1hnf-AAB6mMVMfQM8Ko7nXobdUMAAncWaxvGKrFWmgoAAavy3jAvAQADAgADeAADPQQ)

> 设 $y=y(x)$ 由 $\begin{cases}x=3t^2+2t+3\\e^y\sin t-y+1=0\end{cases}$ 确定，求 $\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}$.

属于低级错误，利用公式法求解 $y'$ 的时候代入求错。

![2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJZq1hnw3pAERzTui586ep_zfy12rQACeBZrG8YqsVbDHoIFDKoLWgEAAwIAA3gAAz0E)

> 设 $y=f(x)$ 的反函数是 $x=\varphi(y)$，且 $f(x)=\int_1^{x^2}e^{t^2}\,\mathrm{d}t+1$，则 $\varphi''(1)=$ ______.

对于这类题，还是要注意谁是自变量谁是因变量，这个得搞清楚。

![2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJdq1hoF5NT51s3hTFmfmCr1926i4QACeRZrG8YqsVZ5UZLs2CERSwEAAwIAA20AAz0E)

> 设 $f(x)=\sin^4x+\cos^4x$，求 $f^{(n)}(x)$.

属于低级错误，$\frac{1}{2}(\sin 2x)^2$ 求导结果算的时候少了一个 $2$。

![2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJhq1hoXwLOsBrAERVBDU0lNg92wBgACehZrG8YqsVa-DXmt_ydthgEAAwIAA3gAAz0E)

> 设 $f(x)$ 有二阶连续导数，且 $f'(0)=0$，$\lim\limits_{x\to 0}\frac{f''(x)+f(x)-f(-x)}{|x|}=1$，则
>
> - A. $f(0)$ 是 $f(x)$ 的极大值。
>
> - B. $f''(0)>0$，$f(0)$ 是 $f(x)$ 的极小值。
>
> - C. $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点。
>
> - D. $f(0)$ 是 $f(x)$ 的极值，$(0,f(0))$ 不是曲线 $y=f(x)$ 的拐点。

这道题标圈了，知道自己的分析可能是有问题的。

其实这类题从大一开始就很有问题，现在彻底分析一下。拐点的定义是连续曲线，所以不存在一个点同为拐点/极值点。
$f''(x_0)=0$，判别法失效，必须得去看左右区间，而不是 $f''=0$ 的时候，$f(x)$ 这个点不是极值。

![2.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJlq1hsL0Km4xpP5rZpbkox8NG-n4gACfRZrG8YqsVZOr_yx10RVwgEAAwIAA3gAAz0E)

> 设 $f(x)$ 二阶导数连续，且 $(x-1)f''(x)-2(x-1)f'(x)=1-e^{1-x}$。试问：
>
> (1) 若 $f(x)$ 在 $x=a\,(a\neq 1)$ 取得极值，是极小值还是极大值？
>
> (2) 若 $f(x)$ 在 $x=1$ 取得极值，是极小值还是极大值？

第 1 问这里错了。依旧是利用经典不等式的时候错了。

## 武忠祥高数强化 2 刷第 3 章

![3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJpq1hsp_v8yTqAIQfx22XdeRtiy6QACfhZrG8YqsVZ3MFGrq-6gTAEAAwIAA20AAz0E)

> $I=\int_0^{\pi x}\sqrt{1-\sin 2x}\,\mathrm{d}x$.

本题在化简到最后地时候，没有考虑到 $n\pi$ 对应的是 $2$ 倍的 $\frac{\pi}{2}$，从而漏了一个 $2$。$\sin x$ 从 $0$ 到 $\pi$ 的积分应该算出来是 $2$，而不是 $1$。

![3.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJtq1htAgJt-yx7PgdGQR6jb8teHbQACfxZrG8YqsVY5Pi9OZM4pEQEAAwIAA3gAAz0E)

> 设连续函数 $f(x)$ 在 $(-\infty,+\infty)$ 内满足 $f(x)=f(x-\pi)+\sin x$，且 $\int_0^{\pi}f(x)\,\mathrm{d}x=\frac{\pi^2}{2}$，则 $\int_{\pi}^{3\pi}f(x)\,\mathrm{d}x=$ ______.

我没有采用变限积分的做法，但是这道题还是错的了。原因和上面一个一样，$\sin x$ 从 $0$ 到 $\pi$ 的积分算出来应该是 $2$，而不是 $0$。

![3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJxq1h5vJtPFw6R7uws_FcVm-hzc-gACgxZrG8YqsVaqc8omHqxJ8gEAAwIAA20AAz0E)

> $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}|\sin x|\arctan e^x\,\mathrm{d}x$.

跳步了。这道题利用区间再现后，相加没有除以 $2$。

![3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJ1q1h6FdAlkwsh3dceLB1d9z9oEXQAChBZrG8YqsVaD-2X6J9UXxgEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上有连续导数，且 $f(0)=0$。求证：
>
> $\int_0^1 f^2(x)\,\mathrm{d}x\leqslant\frac{1}{2}\int_0^1 f'^2(x)\,\mathrm{d}x$.

这题没招，我没去研究。

![3.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJ5q1h64B0dqq05hOcWwzU9mkeLWYQAChRZrG8YqsVYQQeFwPCKCdwEAAwIAA3gAAz0E)

> 设 $m,n$ 均是正整数，则反常积分 $\int_0^1\frac{\sqrt[m]{\ln^2(1-x)}}{\sqrt[n]{x}}\,\mathrm{d}x$ 的收敛性
>
> - A. 仅与 $m$ 的取值有关。
>
> - B. 仅与 $n$ 的取值有关。
>
> - C. 与 $m,n$ 的取值都有关。
>
> - D. 与 $m,n$ 的取值都无关。

注意题目所说，$m$，$n$ 均为正整数！

![3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCJ9q1h7KSbwFQDsjiZ4bnTDo1bXiUQAChhZrG8YqsVYHsoIadQ1imgEAAwIAA20AAz0E)

> 计算 $\int_0^{+\infty}\frac{xe^{-x}}{(1+e^{-x})^2}\,\mathrm{d}x$.

这道题必须放进来，犯了一个经典的错误，标准的零分。计算 $\frac{u}{v}$ 求导的时候，如果 $u$ 是 $1$，和 $u$ 是函数的求导法则不可以混用。

![3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKBq1h-BdR-Fu7nMSEz2UVeer56fOwACiBZrG8YqsVbRqmFD_L-_FQEAAwIAA3gAAz0E)

> 设 $f(x)=\int_{-1}^{x}(1-|t|)\,\mathrm{d}t\,(x\geqslant -1)$，求曲线 $y=f(x)$ 与 $x$ 轴所围图形的面积。

本题也可以用变现函数直接算的方法（当然也得分区间），只是稍微麻烦了一点。

![3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKFq1h-TMA4CSMNH_-q1IxxPGDf-bwACihZrG8YqsVYXDVHdLSntBAEAAwIAA3gAAz0E)

> 已知当 $x\in[2,4]$ 时，$ax+b\geqslant\ln x$，若 $\int_2^4(ax+b-\ln x)\,\mathrm{d}x$ 取得最小值，则 $a+b=$ ______.

这道题可以注意一下，$2(3a+b)$，这个 $3$ 其实就是当 $x=3$ 的时候。

注意切线以及几何意义。

![3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKJq1h-qiW0gxPpSu_AKAtDCqG2kdgACixZrG8YqsVYPaS3IbWi4FAEAAwIAA3gAAz0E)

> 一根长为 1 的细棒位于 $x$ 轴的区间 $[0,1]$ 上，若其线密度 $\rho=-x^2+2x+1$，则该细棒的质心坐标 $\bar{x}=$ ______.

$\frac{11}{12}$ 算出来之后，结果放到原式算的时候，变成了 $\frac{12}{11}$。

## 武忠祥高数强化 2 刷第 4 章

![4.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKNq1h_xIP1Ex1yJ9lxdAS4sSD9RUwACjBZrG8YqsVb-W8iVWviQjwEAAwIAA20AAz0E)

> $(x-\sin y)\,\mathrm{d}y+\tan y\,\mathrm{d}x=0$.

没想到把 $\mathrm{d}y$ 除下去然后利用一阶常系数。被上一题影响了，认为要凑令 $u=\tan y$。

![4.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKRq1iAHXt-dzzLS-jvYSvuz6SG-3gACjRZrG8YqsVauOQVW9-tebgEAAwIAA3gAAz0E)

> 已知 $y_1=xe^x+e^{2x}$，$y_2=xe^x-e^{-x}$，$y_3=xe^x+e^{2x}+e^{-x}$ 为某二阶线性常系数非齐次方程的特解，求此方程。

属于低级错误，$r^2-r-2=0$ 抄的时候把后面那个 $-$ 抄成 $+$ 了。

![4.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKVq1iAWzxblZD2-ek7NV3Yysw2gpQACjxZrG8YqsVZxbRWCfdXGPwEAAwIAA3gAAz0E)

> 设函数 $y(x)$ 满足方程 $y''+2y'+ky=0$，其中 $0<k<1$。
>
> (1) 证明：反常积分 $\int_0^{+\infty}y(x)\,dx$ 收敛；
>
> (2) 若 $y(0)=1$，$y'(0)=1$，求 $\int_0^{+\infty}y(x)\,dx$ 的值。

第 2 问变形过去的时候，漏抄了题目里的 $2$。

## 武忠祥高数强化 2 刷第 5 章

![5.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKZq1iAuCBIaQu99u2wRD9DWY2O90QACkBZrG8YqsVZR7-e86CanuAEAAwIAA3gAAz0E)

> 判断函数 $f(x,y)=\begin{cases}\dfrac{xy}{\sqrt{x^2+y^2}},&(x,y)\ne(0,0)\\ a,&(x,y)=(0,0)\end{cases}$ 的连续性。

属于想当然的错误。对于这类题，首先先判断次数，上面 $2$ 次下面 $1$ 次，所以很有可能可以利用夹逼定理去做。

![5.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKdq1iBJSsrsvCkQgBqcV1sdLZGcqQACkRZrG8YqsVaHZ9Zl0rvONAEAAwIAA3gAAz0E)

> 设 $f_x'(x_0,y_0)$ 存在，$f_y'(x,y)$ 在点 $(x_0,y_0)$ 处连续，证明：$f(x,y)$ 在点 $(x_0,y_0)$ 处可微。

做的是对的，不过需要注意书写。

![5.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKhq1iE5oLQDgeR2kpOvFSpwQJB6aQACkxZrG8YqsVYAASO35H4TMFkBAAMCAAN4AAM9BA)

> 设 $u=f(x,y,z)$，$y=\varphi(x,t)$，$t=\psi(x,z)$，其中 $f,\varphi,\psi$ 可微，求 $\dfrac{\partial u}{\partial x}$，$\dfrac{\partial u}{\partial z}$。

这道题想着用全微分做，属于是典型的被一种方法限制住了。也能用全微分去做，但是很麻烦。

对于这类题，首先先看是 $\mathrm{d}u$ 还是 $\mathrm{d}$ 其他的，是其他的，那么可以采用全微分，如果不是，直接求偏导就可以了。

![5.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKpq1iFaj5AFDJJhEhxYkc0nJxQ2JwAClRZrG8YqsVbfJswU4LXqugEAAwIAA3gAAz0E)

> 设 $(r,\theta)$ 为极坐标，$u=u(r,\theta)$ 具有二阶连续偏导数，并满足 $\dfrac{\partial u}{\partial\theta}=0$，且 $\dfrac{\partial^2u}{\partial x^2}+\dfrac{\partial^2u}{\partial y^2}=0$，求 $u(r,\theta)$。

![5.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKlq1iFQ5Pi2FaSgFLWJNtjs9JZYhgAClBZrG8YqsVbnzTvTGmxDfgEAAwIAA3gAAz0E)

> 若对任意 $t>0$ 有 $f(tx,ty)=t^nf(x,y)$，则称函数 $f(x,y)$ 是 $n$ 次齐次函数，试证：若 $f(x,y)$ 可微，则 $f(x,y)$ 是 $n$ 次齐次函数 $\Leftrightarrow x\dfrac{\partial f}{\partial x}+y\dfrac{\partial f}{\partial y}=nf(x,y)$。

对于这道题的充分性，其实想到了一半，把 $x$ 全用 $tx$ 代换，然后呢，然后就不会了。

![5.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKtq1iFvlN_eJWGJ5fgTNPWE-0ULwwAClhZrG8YqsVZgxkerEkCAtAEAAwIAA3gAAz0E)

> 设 $u=f(x,y,z)$，$\varphi(x^2,e^y,z)=0$，$y=\sin x$ 确定了函数 $u=u(x)$，其中 $f,\varphi$ 都有一阶连续偏导数，且 $\dfrac{\partial\varphi}{\partial z}\ne0$，求 $\dfrac{du}{dx}$。

最后抄答案的时候，漏抄了一个 $\cos x$。

![5.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCKxq1iGBCpH38NfsJhphRBAN78YgzQAClxZrG8YqsVZw_5BMGmhyYAEAAwIAA3gAAz0E)

> 设 $f(x,y)$ 有二阶连续偏导数，且 $f_x\ne0$。证明：对任意常数 $C$，$f(x,y)=C$ 为一条直线 $\Leftrightarrow f_x^2f_{yy}-2f_xf_yf_{xy}+f_y^2f_{xx}=0$。

主要是注意一下，这里的 $f(x,y)=C$，求导对 $f_1$，$f_2$，得出来的结果其实和 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 有差别。这道题是直接用全微分的不变性去做就很轻松能做出来。

![5.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCK1q1iGSKSFHKQEONbMbLhSK7_zlRwACmBZrG8YqsVYgN-CU4gcpqAEAAwIAA20AAz0E)

> 求函数 $z=x^3+y^3-3x^2-3y^2$ 的极值。

属于低级错误，此前算出来了极值点，但是在后续的时候算出来 $A$ 相关有 $6$，就直接把 $6$ 当极值点了。

![5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCK5q1iGjHfPWFgT-lGggiv2PP6ioFgACmRZrG8YqsVYQuHUmKJDe7wEAAwIAA3gAAz0E)

> 求由方程 $x^2+y^2+z^2-2x+2y-4z-10=0$ 所确定函数 $z=z(x,y)$ 的极值。

利用特殊的圆法做的时候，忽略了 $z-2$，只算了后半部分。

## 武忠祥高数强化 2 刷第 6 章

![6.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCK9q1iHsVeN4Jms9Qu-RwHuK55XWwgACmxZrG8YqsVZC9CB1zTcT7gEAAwIAA3gAAz0E)

> 计算 $\iint\limits_D x\left[\,|y|+yf(x^2+y^2)\,\right]d\sigma$，其中 $D$ 是由 $y=x^3$，$y=1$，$x=-1$ 围成的区域，$f(u)$ 为连续函数。

奇偶性利用错误，对于 $x|y|$ 的区间判断错误。

![6.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLBq1iH830fLj9jdm9iG3z6KfJ1-SQACnBZrG8YqsVYC5rPML245hwEAAwIAA3gAAz0E)

> 计算二重积分 $\iint\limits_D y\,dxdy$，其中 $D$ 是由直线 $x=-2$，$y=0$，$y=2$ 以及曲线 $x=-\sqrt{2y-y^2}$ 所围成的平面区域。

方法复杂。本题利用 $y=1$ 对称解会非常快，对于这题，直接生搬硬套参数方程反而会更慢，不如直接硬算。

![6.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLFq1iO8QGl7WUzwuKvYiO6KII0rOwACoBZrG8YqsVbg4tVuAAF_XRkBAAMCAAN4AAM9BA)

> 计算 $\iint\limits_D|x^2+y^2-2y|\,d\sigma$，其中 $D$ 由 $x^2+y^2\le4$ 所确定。

这道题错在一个地方，那就是把后者当 $r=1$ 的圆去想了。

![6.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLJq1iSNVpCp6jsqVMQP-rJn_RIX9gACoxZrG8YqsVbs-njNrR9AxwEAAwIAA3gAAz0E)

> 交换累次积分 $I=\int_{-\frac{\pi}{4}}^{\frac{\pi}{2}}d\theta\int_0^{2a\cos\theta}f(r\cos\theta,r\sin\theta)r\,dr$ 的次序 $(a>0)$。

分开分析。

![6.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLNq1iUjDdsouve9QpUYIsC32EF17gACpRZrG8YqsVaw-ZIxyIGSvwEAAwIAA3gAAz0E)

> 设 $f(x)$ 为连续，证明：$\iint\limits_D f(x-y)\,dxdy=\int_{-A}^{A}f(t)(A-|t|)\,dt$，$D:\ |x|\le\dfrac{A}{2},\ |y|\le\dfrac{A}{2}$。

![6.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLRq1iUxP-JkfMfUuUi2u1k3-9Ff4gACpxZrG8YqsVYnh-gZVu5i2AEAAwIAA3gAAz0E)

> 设区域 $D$ 由 $x^2+y^2\le y$ 和 $x\ge0$ 所确定，$f(x,y)$ 为 $D$ 上的连续函数，且 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{8}{\pi}\iint\limits_D f(u,v)\,dudv$。求 $f(x,y)$。

犯了一个经典的错误，标准的零分，牛莱公式误以为 $1-p$，$0$ 代入后为 $0$，事实上应该为 $1$。

![6.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLVq1iVU4G2oTusCCNa8J2ks4-04WwACqBZrG8YqsVbVZNDQMMWuagEAAwIAA3gAAz0E)

> 设二元函数 $f(x,y)$ 在平面区域 $D=\{(x,y)\mid0\le x\le1,0\le y\le1\}$ 上具有二阶连续偏导数，在 $D$ 的边界上取零值，且在 $D$ 上有 $\left|\dfrac{\partial^2f}{\partial x\partial y}\right|\le M$，试证：$\left|\iint\limits_D f(x,y)\,dxdy\right|\le\dfrac{M}{4}$。

注意第 2 种解法。

![6.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCLZq1iVmhvU32qw-xl6Dab7cJTRnQgACqRZrG8YqsVZpYW87A7tXQAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[a,b]$ 上连续，且 $f(x)>0$，证明：$\int_a^bf(x)\,dx\int_a^b\dfrac{1}{f(x)}\,dx\ge(b-a)^2$。

柯西积分不等式没招，回头再来看。
