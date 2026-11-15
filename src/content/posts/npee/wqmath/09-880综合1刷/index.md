---
title: 880 综合 1 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 880 综合 1 刷
category: 考研
series: NPEE
seriesOrder: 7.09
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 880 综合 1 刷第 1 章

![1.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBt9q0ZvUOWOQnt1r3S7H6_NqmRBKJAAC8g9rG6jnkFZJzoGEwHfweAEAAwIAA3gAAz0E)

> 当 $x\to0$ 时，$(1+x)^{[?]}-e^{[?]}[1-\ln(1+x)]$ 是关于 $x$ 的（ ）。
>
> - A. 等价无穷小
> - B. 同阶但非等价无穷小
> - C. 高阶无穷小
> - D. 低阶无穷小

做这种题就不要想着用泰勒公式了，提取之后展开就行（其实和第 2 章那里是一样的，如果不是在 0 处展开，那就不要用泰勒公式了）

重刷的时候错了。有关于泰勒公式阶数的问题，需要注意在展开的时候，次数得大于下面的。

![1.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuFq0Zwu9AldnUratvApxQo5ru9HdgAC9A9rG6jnkFaxoG6JVDmm8QEAAwIAA3gAAz0E)

> 设 $\{x_n\}$ 为数列，则下列结论正确的是（ ）。
>
> ①若 $\{\arctan x_n\}$ 收敛，则 $\{x_n\}$ 收敛；
>
> ②若 $\{\arctan x_n\}$ 单调，则 $\{x_n\}$ 收敛；
>
> ③若 $x_n\in[-1,1]$，且 $\{x_n\}$ 收敛，则 $\{\arcsin x_n\}$ 收敛；
>
> ④若 $x_n\in[-1,1]$，且 $\{x_n\}$ 单调，则 $\{\arcsin x_n\}$ 收敛。
>
> - A. ①②
> - B. ③④
> - C. ①③
> - D. ②④

错选为 C。本题只需要举例即可。对于 1 和 2，显然错误，当 $x_n\to+\infty$ 时，前者趋于 $\frac{\pi}{2}$，而后者肯定不是；对于 3 和 4，$\arcsin x$ 本身就是有界函数，只要证明其单调性即可。对于 3，由于 $x_n$ 收敛，所以后者肯定收敛于某个特定值，对于 4 即证明其单调性。

![1.1.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuJq0ZxRHS8VUgPpTMeEa0tHEKy_xAAC9Q9rG6jnkFa32LENLeci4AEAAwIAA3gAAz0E)

> 设 $f(x)=\lim\limits_{t\to+\infty}\frac{x+2^{tx}}{1+2^{tx}}$，则 $F(x)=\int_{-1}^{x}f(t)\,dt$ 在 $x=0$ 处（ ）。
>
> - A. 可导
> - B. 不连续
> - C. 不可导但连续
> - D. 无法判定
>
> 设 $f(x)=\begin{cases}\dfrac{(x^3-1)\sin x}{|x|(1+x^2)},&x\ne0,\\0,&x=0,\end{cases}$ $x\in(-\infty,+\infty)$，则（ ）。
>
> - A. $f(x)$ 在 $(-\infty,+\infty)$ 内有界
> - B. 存在 $X>0$，当 $|x|<X$ 时，$f(x)$ 有界，当 $|x|>X$ 时，$f(x)$ 无界
> - C. 存在 $X>0$，当 $|x|<X$ 时，$f(x)$ 无界，当 $|x|>X$ 时，$f(x)$ 有界
> - D. 对任意 $X>0$，当 $|x|\leqslant X$ 时，$f(x)$ 有界，但在 $(-\infty,+\infty)$ 内无界

第 18 题，错选为 A。本题是结论记错了，对于变上限积分函数，如果里面有可去间断点或者连续，那么变上限积分可导；如果是跳跃间断点，那么变上限积分不可导但连续。

第 19 题，错选为 D。趋于 $0$ 的时候判断错了，$0$ 这一点虽然没有定义，但是其左右极限存在，不是无穷，所以肯定是在 $0$ 的某个领域内是有界的。

本题理解错一个很重要的东西，那就是该点的极限不存在不意味着该点肯定是无穷。

![1.2.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuNq0ZxkB6XQwNgHXg-8xZ6DdYNTfwAC9g9rG6jnkFZsKmg53IetVgEAAwIAA3gAAz0E)

> 当 $x\to0$ 时，$f(x)=3x-4\sin x+\sin x\cos x$ 是关于 $x$ 的 ______ 阶无穷小。

低级错误。本题犯了一个经典的错误，标准的零分，那就是 $\sin x$ 和 $\cos x$ 同时展开后（同时展开多项），然后应该每一项都要和每一项匹配，而不是只匹配几项就开始算了。

本题类似基础三十讲第 1 章的练习最后 1 题，也可以把 $\sin x\cos x$ 三角变换一下。

![1.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuRq0Zx4moPleyZTl5obrRxoAk3X4QAC9w9rG6jnkFas94WDifcrLwEAAwIAA20AAz0E)

> 设 $\lim\limits_{x\to a}\frac{f(x)-b}{x-a}=A$，则 $\lim\limits_{x\to a}\frac{e^{f(x)}-e^b}{x-a}=$ ______。
>
> 设 $a_n=\frac{3}{2}\int_0^{\frac{n}{n+1}}x^{n-1}\sqrt{1+x^n}\,dx$，则 $\lim\limits_{n\to\infty}na_n=$ ______。

第 4 题为低级错误，考虑了等价代换和拉格朗日中值定理之后忘记把 $A$ 带进去了。然后重刷错题也错了，$\varepsilon$ 是 $b$ 没错，但是问题提示拉格朗日中值定理那个是 $e^{\varepsilon}$，好像第一次刷也是因为这个错了。

第 5 题为低级错误，计算问题。考虑将 $a_n$ 进行分部积分，然后推导出 $a_{n-2}$ 和 $a_n$ 之间的关系，这条路其实是走不通的（被以前的固定题型给影响了）。对于这种题，应该先考虑夹逼定理，再去考虑分部积分。

然后重刷也错了，这题其实就是考虑分部积分，而不是用夹逼定理。我自己做出来用夹逼定理另一侧没得放缩，所以本来就是错误的。

用答案的方法在做一遍其实还是错的，因为这题其实不是分部积分，只是普通的积分罢了。我在计算的时候把他当分部积分去算了，自然是错的。

这道题给我最大的感想就是：不要被经验影响了。

![1.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuVq0ZyxLGJv57D4E0-_aj7XLKWV-gAC-A9rG6jnkFY-4OOJyrOp4QEAAwIAA3gAAz0E)

> 设 $\lim\limits_{x\to0}\left(a[x]+\frac{\ln(1+e^{[?]})}{\ln(1+e^{[?]})}\right)=b$，其中 $[x]$ 表示不超过 $x$ 的最大整数，则 $a=$ ______，$b=$ ______。

低级错误，为计算问题。在考虑 $x\to0^+$ 和 $0^-$ 的时候，想当然然后直接写答案，而没有具体计算。

第 2 次算的时候惯性思维，认为 $[x]$ 是 $x-[x]$。

![1.2.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuZq0ZzEMms2JJlEUkL1Tri-uaeFwwAC-Q9rG6jnkFa0kzwisCN1tgEAAwIAA3gAAz0E)

> 设 $f''(1)$ 存在，$f''(1)\ne0$，则 $\lim\limits_{x\to1}\left[\frac{1}{f'(1)(x-1)}-\frac{1}{f(x)-f(1)}\right]=$ ______。

特值法解出答案。本题其实没想到怎么做，错题重刷时根据答案提供的泰勒公式解出来。

事实上我感觉这道题泰勒公式的来源应该是先通分，通分后可以发现使用泰勒公式

![1.3.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBudq0ZzYpGKcttNz8VfqZAkG8qF53wAC-g9rG6jnkFb3c8po309iGAEAAwIAA3gAAz0E)

> 求下列极限：
>
> （Ⅰ）设 $x_1=1$，$x_2=2$，$x_{n+2}=\frac{1}{2}(3x_{n+1}-x_n)$（$n=1,2,\cdots$），求 $\lim\limits_{n\to\infty}x_n$。
>
> （Ⅱ）设 $x_1=1$，$x_2=2$，$x_{n+2}=\frac{1}{2}(x_n+x_{n+1})$，求 $\lim\limits_{n\to\infty}x_n$。

第 2 小问等比数列求和计算错误。

![1.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuhq0ZzmVKWT8NArq9hyKCmUj8avPgAC-w9rG6jnkFYCcyk84kCfrwEAAwIAA20AAz0E)

> （6）计算极限 $\lim\limits_{x\to+\infty}\dfrac{\frac{1}{x^3}\int_1^x\left[(1+t^2)\sin\frac{1}{t}-\cos t\right]dt}{1-e^{\frac{1}{x}}}$。
>
> （7）计算极限 $\lim\limits_{x\to1}\dfrac{\pi\int_0^x\left[\ln(1-t)+\tan\frac{\pi}{2}t\right]dt}{\ln|\sin \pi x|}$。

第 6 题 $1-e^{1/x}$ 等价无穷小代换错误。

第 7 题 $\sec\frac{\pi}{x}$，当 $x\to0$ 时是什么，计算错误。

错题重刷时诱导公式符号又错了？其实是第一步错了，$\ln(\sin \pi x)$ 求导没有上手去求，想当然认为是 $-\cos \pi x$。

![1.3.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBulq0Zz6cblRqe72xI1I_10aSjyfxAAC_A9rG6jnkFb5pVS-qDnY-AEAAwIAA3gAAz0E)

> 设 $a$（$a>-1$）为非零常数，$\lim\limits_{x\to+\infty}\dfrac{\int_1^x\left[(t+a)^{1-\frac{1}{t}}-t^{1+\frac{1}{t+a}}\right]dt}{x}=1$，求 $a$ 的值。

对泰勒公式和无穷小的计算不熟悉。本题计算量很大，需要慢慢去分析。

错题重刷的时候没做出来。

回归基础，这道题洛必达后，是无穷 - 无穷类型，

![1.3.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBupq0Z0OAAHl1rrWaB5OvXnR-0pUi9kAAv0Paxuo55BWTtMOd_nGXRoBAAMCAANtAAM9BA)

> 求下列极限：
>
> （Ⅰ）当 $|x|<1$ 时，求 $\lim\limits_{n\to\infty}(1+x)(1+x^2)(1+x^4)\cdots(1+x^{2^n})$；
>
> （Ⅱ）当 $x\ne0$ 时，求 $\lim\limits_{n\to\infty}\cos\frac{x}{2}\cos\frac{x}{4}\cdots\cos\frac{x}{2^n}$。

高中数学，对于 1，注意到可以乘上一个 $1-x$；对于 2，注意到可以乘上一个 $\sin\frac{x}{2}$。

![1.3.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACButq0Z0nfaC4NV3UoGGdspTrURirkQAC_w9rG6jnkFbD0ojZwDAEGgEAAwIAA20AAz0E)

> 设 $x_1=\frac{1}{2}$，$x_{n+1}=x_n^2+x_n$（$n=1,2,\cdots$），求极限
>
> $\lim\limits_{n\to\infty}\left(\frac{1}{x_1+1}+\frac{1}{x_2+1}+\cdots+\frac{1}{x_n+1}\right)$。

高中数学，列项相消没想到。

## 880 综合 1 刷第 2 章

![2.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBuxq0Z0_EsfFHuOVgk_ZcOMdfsE7UgADEGsbqOeQVglH02kDP2rGAQADAgADeAADPQQ)

> 设 $f(x)$ 在 $(1-\delta,1+\delta)\,(\delta>0)$ 内存在导数，$f'(x)$ 严格单调减少，且 $f(1)=f'(1)=1$，则（ ）。
>
> - A. 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内，均有 $f(x)<x$
> - B. 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内，均有 $f(x)>x$
> - C. 在 $(1-\delta,1)$ 内，$f(x)<x$；在 $(1,1+\delta)$ 内，$f(x)>x$
> - D. 在 $(1-\delta,1)$ 内，$f(x)>x$；在 $(1,1+\delta)$ 内，$f(x)<x$

错选为 C。本题是用蓝笔改成正确选项的，应该是知道错了之后再看一眼然后才改的。

果然，这题我再做一次之后还是 C，无论是利用特值法画出一个这样的函数还是利用定义简单求解，都做出来是 C。

复盘之下发现：我特值法出来的函数与该函数的导数没有任何的联系，只是各自为营。

这道题应该是利用构造函数：$g(x)=f(x)-x$ 去做，这样就迎刃而解了。

![2.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBu1q0Z1W1Zp2AaAwQZOmvRslF2wLzgACARBrG6jnkFZ0SeqMouanUAEAAwIAA3gAAz0E)

> 设 $f(x)=(x-a)\ln x-x$ 有两个极值点，则实数 $a$ 的取值范围为（ ）。
>
> - A. $\left[-\frac{1}{e},+\infty\right)$
> - B. $\left(-\frac{1}{e},+\infty\right)$
> - C. $\left[-\frac{1}{e},0\right)$
> - D. $\left(-\frac{1}{e},0\right)$

错选为 C，属于低级错误。本题带来的启示是，如果想采用作图法来解这种题的话，一定要注意端点与两侧很可能情况是不一样的，需要单独考虑。

![2.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBu5q0Z1t_TcZNnAgDHqsmk94s28YLgACAhBrG6jnkFbbVFnfTzxHeAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $(-1,1)$ 内可导，且 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=1$，则（ ）。
>
> - A. $\lim\limits_{x\to0}\frac{f'(x)}{x}$ 存在
> - B. $\lim\limits_{x\to0}\frac{f'(x)}{x}$ 不存在
> - C. $f'(0)=0$，$f''(0)=2$
> - D. $f(0)$ 是 $f(x)$ 的极小值

错选为 ACD，本质是对可导以及洛必达这个条件理解地不够深刻。错题重刷时仍然不知道怎么做，前几天刚看的说在一个区间内可导可以用洛必达，怎么现在又不行了？

回顾基础 30 讲的第 3 章第 7 题，这题的出来的结论是：如果某个函数在一个区间内 $k$ 阶可导，那么在这个区间内可以洛 $k$ 次；如果一个函数在某点处 $k$ 阶可导，那么只能洛 $k-1$ 次。

确实是这样的，但是回归洛必达本身，洛的前提是知道洛出来的极限存在，而这道题你不知道 $\frac{f'(x)}{x}$ 极限存在，所以不能洛，得用定义去求 $f'(x)$，而这道题 $f'(x)$ 你用定义求不出来是多少。

而我的记忆里为什么会出现洛呢，因为大部分的题目都是 $f(x)$ 在某区间内二阶可导，然后这个时候你可以进行 $n-1$ 次洛（$n-1$ 次洛必然是合法的），但是对于第 $n$ 次洛，你得提前知道这个极限是多少，你才能洛，否则必须得用定义；而对于某点处，必然只能进行 $n-1$ 次洛。

基于上述可以总结，大部分情况下其实不管是某点处还是区间上都是只能进行 $n-1$ 次洛，对于区间如果已经知道洛完后的答案，那可以洛第 $n$ 次。

![2.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBu9q0Z2Uz86LIn9lyByvTDEbE3jzFQACAxBrG6jnkFYMK3KC5brn-wEAAwIAA3gAAz0E)

> 设 $y=f(x)$ 由 $\begin{cases}x=t|t|，\\ y=|t|\int_0^{|t|}e^{u^2}du\end{cases}$ 确定，则下列选项正确的是（ ）。
>
> - A. $f'(x)$ 在 $x=0$ 处连续
> - B. $f(x)$ 在 $x=0$ 处不连续
> - C. $f'(0)$ 不存在
> - D. $f'(0)$ 存在

错选为 A。我其实没看懂我 1 刷这道题的方法是什么，应该是分别对 $x$ 和 $y$ 用定义求对 $t$ 的导数（也得分对 $t^+$ 和 $t^-$），结果算出来都是 $0$，所以直接就选了 A。

这个逻辑很怪，第一方面，即便是算出来都是 $0$，那么 $\frac{0}{0}$ 也是未定式，所以不能判断；第二方面，如果当 $x>0$ 时和当 $x<0$ 时算出来的导数 $\frac{\mathrm{d}y}{\mathrm{d}x}$，可以发现他们恰好是相反数，算一下当他们分别趋向于 $0$ 的时候，前者是 $1$，后者是 $-1$，也选不出来是 A。

事实上，对于这种题应该这么思考：首先判断能不能把 $x=t$ 带入 $y$，从而化简为 $y=f(x)$ 的具体表达式；如果不行的话，考虑直接用 $f'(x)$ 导数的定义去做，而不是分别去做，分别做只能算出来分别的值，没法得到整体的定义。

我在错题重刷的时候其实也理解错了，我是直接先求的二者 $x>0$ 和 $x<0$ 的导数然后判断，这样只能判断出 A 是错的，但是判断不出来其他选项是不是对的。

![2.1.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvBq0Z2q8kPwkWaGgzljEzGc3o4NtAACBBBrG6jnkFYwLnFznfDJewEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $f''(x)>0$，$f(0)=f(1)$。当 $x\in(0,1)$ 时，下列结论正确的是（ ）。
>
> - ① $(1-x)[f(x)-f(0)]<x[f(1)-f(x)]$；
> - ② $(1-x)[f(x)-f(0)]>x[f(1)-f(x)]$；
> - ③ $x[f(x)-f(0)]<(1-x)[f(1)-f(x)]$；
> - ④ $x[f(x)-f(0)]>(1-x)[f(1)-f(x)]$。
>
> - A. ①③
> - B. ②③
> - C. ②④
> - D. ①④

错选为 B。低级错误，做出来是对的，选错了。

本题错题重刷时也只能用画图法做出来正确答案（1 是直接割线的定义，2 是拆开然后移项可以化简为 $f(1)<f(x)$，然后就有点不会证了）。

事实上，对于割线那里，直接采用拉格朗日中值定理即可证明；对于拆开之后，其实也很简单，因为 f(x) 在 (0,c) 单调递减，在 (c,1) 单调递增。

![2.1.26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvFq0Z4Re3x_C8i5aA2ovOeV4jrEygACBhBrG6jnkFaY6fqqSJDddwEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[-1,1]$ 上有定义，则“$\frac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 上严格单调递增”是“$y=f(x)$ 的图形在 $[-1,1]$ 上是凹的”的（ ）。
>
> - A. 充分必要条件
> - B. 充分非必要条件
> - C. 必要非充分条件
> - D. 既非充分条件又非必要条件

D 改为 C 又改为 B，错选为 B。这错题重刷时仍然不怎么会，感觉是没有理解透。我记得 1 刷的时候考虑到了特值法，构造了一个分段函数，从而判断不是充分条件。但是这个例子后来复盘一下，发现其实这个例子即使是给他连续起来，也是一样的。

对于这个割线严格单调递增可以得出一个结论：$f'(x)$ 是单调递增的，所以这道题可以翻译一下，$f'(x)$ 严格单调递增是 $f''(x)>0$ 的什么条件，前提仅仅是在区间内有定义。显然，即便是 $f'(x)$ 严格单调递增，$f''(x)$ 仍有可能等于 $0$，例如 $\left(x-\frac{1}{3}\right)^3$。所以这题是必要不充分条件。

但是这么理解启示是有问题的，凹函数只能推导出所有割线斜率递增，然后推导出固定端点割线递增；固定断电割线递增推导不出来导数递增，导数严格递增也推导不出来是凹函数（凹函数的定义是不可以有刚好为 0 的点）

割线斜率单调递增意味着函数只要在定义端点两侧构成的直线的下面，而具体的构造可以随意，如果是凹函数，那么可以天然的保证都在下面。

![2.1.26 解 1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvJq0Z4vU_rV9SKq6MX6tx0-WNc5mQACBxBrG6jnkFY824AhwKDnfwEAAwIAA20AAz0E)

> [原图非题目：主人手绘的函数图像草图，$xOy$ 坐标系中一条位于第一象限、整体上升的曲线，旁注 $f(x)$]

![2.1.26 解 2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvNq0Z4_SnPQRJhfOac608i6_RZgAwACCBBrG6jnkFZrIqodCOGxGAEAAwIAA20AAz0E)

> [原图非题目：主人手绘的函数图像草图，$xOy$ 坐标系中一条由缓到陡上升的曲线，旁注 $f(x)$]

这道题还是画图最好理解，严谨证明感觉会很神秘。

其实本质上感觉这道题的后推前应该利用凹函数的定义，直接说明这个成立就好了（因为所有的点都落在割线之下，所以可以推导出割线单调递增），而割线单调递增不可以推导出凹函数。

![2.1.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvRq0Z5TLLANI2-95k9l49XKO6F2mgACCRBrG6jnkFaWxp-XpFIy1gEAAwIAA3gAAz0E)

> 设 $\lim\limits_{x\to x_0^+}f'(x)=\lim\limits_{x\to x_0^-}f'(x)=1$，则（ ）。
>
> - A. $f(x)$ 在 $x=x_0$ 处必可导且 $f'(x_0)=1$
> - B. $f(x)$ 在 $x=x_0$ 处必连续但不可导
> - C. $f(x)$ 在 $x=x_0$ 处必存在极限但不连续
> - D. $f(x)$ 分别在 $x=x_0$ 处的某去心左邻域与去心右邻域内单调递增
>
> 设 $f(x)=\begin{cases}\frac{1}{(x-1)^\alpha}\sin\frac{1}{(x-1)^\beta},&x>1,\\ 0,&x\le1\end{cases}$（$\alpha<0$，$\beta>0$），若 $f'(x)$ 在 $x=1$ 处连续，则（ ）。
>
> - A. $\alpha<-1$ 且 $\alpha+\beta<-1$
> - B. $\alpha<-1$ 且 $\alpha+\beta\le-1$
> - C. $\alpha\le-1$ 且 $\alpha+\beta<-1$
> - D. $\alpha\le-1$ 且 $\alpha+\beta\le-1$

第 28 题错选为 A。为低级错误。重刷错题时依旧跳入这个坑。导函数连续不意味着该点导数存在，例如可去间断点？并不是这么理解的。

这道题有点偷换概念的意思在这里，函数左极限等于右极限等于这个点的值，那么才是连续的，函数左极限等于右侧极限只能说明在该点处极限存在，这个概念很久以前就搓过，但是 1 刷的时候没反应过来。导函数的左右极限相等等于某个值也是一个道理，题目并没有说它等于该点的具体值，所以 A 是错的。

第 29 题错选为 D。低级错误，本题是考察导函数连续，而我自己在做的时候只考虑了普通的连续，从而只推导出后面那个条件，并且在做这题的时候错误的使用了等价无穷小来解这道题，应该使用定义推导。

![2.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvVq0Z5uXeNV_nNukPoaxUFPDk1ZJwACChBrG6jnkFb_OuJngUnnqgEAAwIAA3gAAz0E)

> $\lim\limits_{x\to\infty}\left(\frac{x+k}{x-k}\right)^x=\lim\limits_{x\to\infty}[f(x)-f(x-1)]$，则 $k=$ ______。
>
> 设 $y=f(x)$ 在 $(-\infty,+\infty)$ 内连续，且其导函数 $f'(x)$ 的图形如图 2-3 所示，其中 $x=0$ 和 $x=x_5$ 是 $f'(x)$ 的铅直渐近线，则 $y=f(x)$ 极值点的个数为______，拐点的个数为______。
>
> - [图示] 图 2-3 为导函数 $f'(x)$ 的曲线：$x=0$ 与 $x=x_5$ 处各有一条虚线表示的铅直渐近线，$x$ 轴上自左至右依次标有 $x_1,x_2,x_3,x_4,x_5,x_6$。

第 2 空错答为 2，重刷又错了。对于第 1 空，考虑零点以及改变正负性的点，所以可以得到 x1，x3，O，x4，对于第 2 空，考虑改变单调性的点，所以可以得到 x2，x5，x6。尤其是注意 x6，x6 是驻点，但是不是极值点，但是它是拐点，因为它改变了单调性，被迷惑了。

![2.3.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvZq0Z6BHyvPqeBe3Ebk3hf8Uu5h3AACCxBrG6jnkFaw0e6HD_mIZwEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $\lim\limits_{x\to0^+}\frac{f(x)}{x}=\lim\limits_{x\to1^-}\frac{f(x)}{x-1}=1$，证明：
>
> （Ⅰ）至少存在一点 $\xi\in(0,1)$，使得 $f(\xi)=0$；
>
> （Ⅱ）至少存在一点 $\eta\in(0,1)$，使得 $f''(\eta)=f(\eta)$。

第 2 问思路混乱。利用罗尔原话来捋清楚思路，重刷的时候猛然理解。两边同时加上一个 f’(η)，构造一次函数 g(x)，这个 g(x) 是需要两个零点可以得到证明得到答案，从而知道 g(x) 再往上构造一次的函数 f(x) 需要三个零点，从而很轻松的推导出逻辑。

![2.3.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvdq0Z6QxV86ZLRtt6Bz11uBzAlPJQACDBBrG6jnkFYoWI3Gk1ghdwEAAwIAA3gAAz0E)

> 在 $x=0$ 的右邻域内，用多项式 $c+ax+bx^2$ 近似表示函数 $f(x)=(1+x)^{\frac{1}{x}}$，使其误差是比 $x^2$ 高阶的无穷小 $(x\to0^+)$，求 $a,b$ 的值。
>
> 设 $f(x)$ 在 $[a,b]$ 上可导，证明：
>
> （Ⅰ）若 $f'_+(a)f'_-(b)<0$，则存在 $\xi\in(a,b)$，使得 $f'(\xi)=0$；
>
> （Ⅱ）若 $f'_+(a)\ne f'_-(b)$，则对介于 $f'_+(a)$ 和 $f'_-(b)$ 之间的每个实数 $\mu$，都存在 $\xi\in(a,b)$，使得 $f'(\xi)=\mu$。

第 8 题缪用泰勒展开，例如想对 $\exp\left(\frac{\ln(x+1)}{x}\right)$ 展开，那得先对 $\ln(x+1)$ 对 $x=0$ 展开，然后再对 $e^x$ 进行展开，也可以直接对 $\exp\left(\frac{\ln(x+1)}{x}\right)$ 对 $1$ 展开，但得二次展开，否则你的得到的只是 $\frac{\ln(x+1)}{x}$ 的表达式。
然后在做这题的时候要注意计算，先展开再合并，不要跳步。

第 9 题在基础 30 讲第 6 章的第 3 题是一样的题目，具体是利用费马定理，也就是可导取极值导函数必为 0。

![2.3.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvhq0Z7lZcRRwAsa7dLG9CafrJF-RgACDRBrG6jnkFbatIKGd0Ns_AEAAwIAA3gAAz0E)

> 已知 $f(x)$ 可导，证明：曲线 $y=f(x)\,(f(x)>0)$ 与曲线 $y=f(x)\sin x$ 在交点处相切。
>
> 设 $R=R(x)$ 是抛物线 $y=\sqrt{x}$ 上任一点 $M(x,y)\,(x\ge1)$ 处的曲率半径，$s=s(x)$ 是该抛物线上介于点 $A(1,1)$ 与 $M$ 之间的弧长，计算 $3R\frac{d^2R}{ds^2}-\left(\frac{dR}{ds}\right)^2$ 的值。

第 17 题，误用洛必达法则，和之前的情况一样，在不能洛的地方洛了。并且在错题重刷的时候超时，且没有注意到这题应该 x 有多个选项。本题有两种思路，第一种是利用微分，第二种是利用 f(x)=\*\*\*+O(x) 去做，而对于后面那种方法，尤其需要注意***是什么。另外还有低级错误，面对因式分解提取公共项，一定也要算出来。

并且这题其实可以不用导数的定义去做，直接求导就好了

第 18 题不想算，所以没做。重做的时候在进行计算的时候需要注意从根号里提东西的时候的次数，此外还需要注意一件事，那就是利用链式法则的时候是相乘，而不是相加。另外还需要注意，这道题求的是弧长，而不是距离长度。变限积分不一定要立刻算出来，可以看看有没有求导。

![2.3.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvlq0Z8L1xzLNYziB_WLrW2lsF8ZewACDhBrG6jnkFa4imVeJGiNdwEAAwIAA3gAAz0E)

> 设 $f(x)$ 在区间 $(a,b)$ 内可导，$f'(x)$ 在 $(a,b)$ 内严格单调增加。对任意的 $x_1,x_2\in(a,b)$，且 $x_1\ne x_2$，$0<\lambda<1$。证明：$f[\lambda x_1+(1-\lambda)x_2]<\lambda f(x_1)+(1-\lambda)f(x_2)$。

属于低级错误，求导错误，这道题直接令其中一个 x 为变量然后求导去算就好了，1 刷时是求导错误。

## 880 综合 1 刷第 3 章

![3.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvpq0aArnkr_lmQPUKNFNBoN0NFj1gACDxBrG6jnkFYvTNCaV44iiwEAAwIAA3gAAz0E)

> 设 $f(x)=\lim\limits_{n\to\infty}\frac{\ln(e^n+x^n)}{n}\,(x>0)$，则 $F(x)=\int_1^xf(t)dt$ 在区间 $[1,+\infty)$ 上（ ）。
>
> - A. 不连续
> - B. 连续但不可导
> - C. 可导但二阶不可导
> - D. 二阶可导

本题没有上手做，纯凭感觉，错题重刷时也没什么头绪。再次看了答案才反应过来，这道题的做法应该是：看到 $e^n$ 和 $x^n$，所以想到去凑 $\left(\frac{x}{e}\right)^n$，或者反过来，去凑无穷小。尤其需要注意的是，这道题在化简前者的时候，应该将 $x$ 视为一个常量，而不是变量看待。

![3.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvtq0aBPqww75FzAcQtni_CfSX2GNAACEBBrG6jnkFZTikw_JDwlGgEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[0,1]$ 上可导，$f(x)>0$，$f'(x)<0$，$F(x)=\int_0^xf(t)dt$，则在 $x\in(0,1)$ 内，有（ ）。
>
> - A. $xF(1)>2\int_0^1F(x)dx$
> - B. $F(1)>2\int_0^1F(x)dx$
> - C. $F(x)<2\int_0^1F(x)dx$
> - D. $F(x)>2\int_0^1F(x)dx$
>
> 设函数 $f(x)$ 在 $[0,a]\,(a>0)$ 上有二阶连续导数，且 $f(0)=0$，$f''(x)>0$，则下列选项正确的是（ ）。
>
> - A. $3\int_0^axf(x)dx<2\int_0^aaf(x)dx$
> - B. $3\int_0^axf(x)dx>2\int_0^aaf(x)dx$
> - C. $2\int_0^axf(x)dx>3\int_0^aaf(x)dx$
> - D. $2\int_0^axf(x)dx<3\int_0^aaf(x)dx$

第 9 题采用特值法。比较好的做法是数形结合，然后利用凹凸函数，割线去做。另外以后看到这种题，可以考虑一下两边同时积分，而不是直接变成变限积分，思路来源于莫名其妙出现的 $2$。

第 10 题是函数求导问题，求导求错了，但是即便是当时订正，我也是直接根据选项去设函数去计算，本质也算特值法？但是感觉也只能用这种方法来计算。

![3.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBvxq0aBkN34NlRlNp0XXsIgGsA7bbQACERBrG6jnkFZIllhLIZt5pAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $\left(0,\frac{\pi}{2}\right)$ 内可导，$f(x)>0$，$\lim\limits_{x\to\frac{\pi}{2}^-}f(x)=1$，且 $\lim\limits_{t\to0}\left[\frac{f(x+t\sin x)}{f(x)}\right]^{\frac{1}{t}}=e^{\frac{\sin x-\cos x}{[?]}}$，则 $f(x)=$ ______。

本题错误原因来自于在进行最后几步构建函数的时候，理解错误。理解错误大致来源于直接对 $\frac{y'}{y}$ 脑子构建，没有踏踏实实算。现在回想起来，应该是对微分方程理解不熟练。

![3.2.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBv1q0aB1M_PIAmPzW5jCvuQ27ts67wACEhBrG6jnkFax7YaUfW1p4QEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $(0,+\infty)$ 内可导，且 $f(1)=3$，$f(x)$ 的反函数为 $g(x)$，且 $\int_2^{f(\ln x+1)}g(t)dt=x\ln x$，则 $g'(3)=$ ______。

第 17 题没有想明白为什么可以先算出来再去积分，现在想来，应该是被中间需要断开给误解了。事实上只需要算出来积分，然后分别求极限即可。

第 18 题属于低级错误，把积分下限 $1$ 看成了 $0$。

第 19 题想到了洛，但是洛的合理性在哪里？事实上，这道题是趋于 $0^+$，所以将区间分为两部分，$0\sim1$ 和 $1\sim+\infty$，显然，后面那部分是收敛的，但是前面那部分不是，所以上面是无穷！

第 20 题错误原因和 17 题类似。

第 21 题错误原因为换元法经典错误，也就是想当然的积分上下限，而对于错题重刷的时候，抄错了符号。

第 22 题对积分的定义理解不深刻，只理解了 $\frac{1}{n}$，没有理解其他的。事实上，应该这么理解定义：底边边长和采样点。对于区间 $[u,v]$，假设分为 $n$ 份，那么底边边长自然是 $\frac{v-u}{n}$，而采样点则是 $u+\frac{(v-u)i}{n}$，这道题和前面第 15 章最后一题二刷那里错误类似，对于坐标的理解。一定要画图。

![3.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBv5q0aCQARV5--t6tZ4KWFZB8hgSUQACExBrG6jnkFYCmP4MAAEXObEBAAMCAANtAAM9BA)

> 求下列积分：
>
> （Ⅰ）设 $f(x)=\int_1^x\frac{dt}{\sqrt{1+t^4}}$，求 $I=\int_0^1x^2f(x)dx$；
>
> （Ⅱ）设 $f(x)=\int_1^xe^{-t^2}dt$，求 $I=\int_0^1xf(x)dx$。
>
> 设 $f(\sin^2x)=\frac{x}{\sin x}$，求 $I=\int\frac{\sqrt{x}}{\sqrt{1-x}}f(x)dx$。
>
> 计算积分 $I=\int e^{\sin x}\cdot\frac{x\cos^3x-\sin x}{\cos^2x}dx$。
>
> 计算 $I=\int\frac{e^{-\sin x}\cdot\sin 2x}{\sin^4\left(\frac{\pi}{4}-\frac{x}{2}\right)}dx$。
>
> 设 $f(\ln x)=\frac{\ln(1+x)}{x}$，求 $I=\int f(x)dx$。

第 1 题的第 1 问使用牛莱公式代入的时候错误；第 2 问错误来源是变限积分的上限没有求导。

第 2 题直接没做。感觉是没敢作，但是其实把 $f(x)$ 解出来就做出来了。可能是思路走错了，被第 1 问影响了认为是分部积分。

第 3 问没想到怎么做。错题重刷时其实也想错了，不应该先想分部积分，把希望放在赌老师刚好凑出来，应该先去思考怎么凑进去，尤其是 e 以及三角函数。

第 4 问没去做，应该是嫌麻烦。重刷时想当然了，注意 $e$ 的上面是 $-\sin x$，而不是 $\sin x$，我在换元法的时候用的是 $\sin x$，然后 $e$ 却没变。

第 5 问题目抄错了，上面的 $x$ 本来是代对了，然后再抄一次抄成了 $x$。

![3.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBv9q0aCqTUb7ceO17CRMs0gOLJG-dAACFBBrG6jnkFYmzQ9jRng1ZgEAAwIAA20AAz0E)

> 求极限 $\lim\limits_{x\to0}\frac{\frac{1}{2}\int_0^xx\sqrt{4-x^2u^2}du-2x}{\sqrt{1+2x^3}-1}$。
>
> 设 $f(x)$ 连续，$\lim\limits_{x\to0}\frac{f(x)}{x}=2$，求 $\lim\limits_{x\to0}\frac{\int_0^xf(x)f(x-t)dt}{\int_0^xtf(x-t)dt}$。
>
> 设 $f(x)$ 在 $(-\infty,0]$ 上连续，且满足
>
> $\int_0^xtf(t^2-x^2)dt=\frac{x^2}{1+x^2}-\frac{1}{2}\ln(1+x^2)$，
>
> 求函数 $f(x)$ 及其极值。

第 7 题。本题属于低级错误，将 $u$ 以为可以直接提到外面去做。

第 8 题。本题没有注意到一个条件，那就是 $f(x)$ 仅为连续，所以不可以换元后直接求导，而是注意到 $\frac{f(x)}{x}$ 存在，从而去把 $f(x)$ 给消去，错题重刷的时候犯了一个经典的错误标准的零分，把已经提取到外面的 $2$ 给漏了，提的时候还提醒了自己要记得，结果回头就忘了。

第 9 题。本题没敢做。重刷一下，其实只是计算量有点大，不难。

![3.3.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwABatGgv4B8Xdfv3MIHrzjSNtf_dnAAAhUQaxuo55BWSK8PBLBYNsABAAMCAAN4AAM9BA)

> 设 $f(x)=x^2$，$f[g(x)]=-x^2+2x+3$，且 $g(x)\ge0$。
>
> （Ⅰ）求 $g(x)$ 的定义域与值域；
>
> （Ⅱ）求 $\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac{k}{n}e^{\frac{k}{n}}\cdot\frac{1}{n+g(x)}$。

本题第 2 问计算错误，使用牛莱公式时的带入正负号计算错误，没有稳扎稳打写出来，只是脑测。

![3.3.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwFq0aDe1P5bvbMjZGyvH_5Y23ISoQACFhBrG6jnkFbfpydiGOJLuAEAAwIAA3gAAz0E)

> 设 $a_n=\int_0^{\frac{\pi}{4}}\tan^nx\,dx$，证明：$\frac{1}{2(n+1)}<a_n<\frac{1}{2(n-1)}\,(n\ge2)$。
>
> 设 $a_n=\int_0^{\frac{\pi}{2}}x\sin^nx\,dx\,(n=1,2,\cdots)$。
>
> （Ⅰ）证明：$a_n=\frac{n-1}{n}a_{n-2}\,(n=3,4,\cdots)$；
>
> （Ⅱ）求 $\lim\limits_{n\to\infty}\frac{a_n}{a_{n-1}}$。
>
> 求积分 $I_n=\int_0^1x\ln^nx\,dx\,(n\ge0\text{ 且为整数})$ 的递推关系，并计算 $I_n$。
>
> （Ⅰ）求积分 $I_n=\int\frac{1}{(x^2+a^2)^n}dx\,(n\ge1,a>0)$ 的递推关系；
>
> （Ⅱ）计算 $I=\int\frac{3x+4}{(x^2+2x+2)^2}dx$。

第 22 题，答案采用三角换元，我自己是采用分部积分计算出 $a_n$ 和 $a_{n-2}$ 的关系，然后不会做了。对于这种题，联想一下单调性便可以迎刃而解（类似 $\cos x$，也就是基础 30 讲第 2 讲的题）

都 23 题，没想到怎么做。但是考虑将 $x$ 凑进去，会发现此路不通，所以只能试着把 $\sin x$ 凑进去，就是别人凑好的。对于第 2 问其实也没想到，但是其实也是和 22 题类似，利用简单的单调性就可以放缩出来，对于这类题一定要注意单调性。

第 24 题求出递推关系之后想当然认为 $I_{n-1}$ 递推出来的东西还是 $n$。

第 25 题采用了将下面凑进去的方法（直接消耗 2 次方），此路不通，所以换路，只能直接分部积分。我是觉得，这道题应该先考虑我自己方法的合理性，显然是不合理的，因为还得额外去讨论 $n=1$ 的情况（毕竟是直接凑进去一个 2 次方）

![3.3.28](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwJq0aD0AblPhUhRYFYrQufn8X5cCwACFxBrG6jnkFZAjjI5fWyZogEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $[a,b]$ 上二阶可导，且 $f''(x)>0$。证明：
>
> $f\left(\frac{a+b}{2}\right)<\frac{1}{b-a}\int_a^bf(x)dx<\frac{f(a)+f(b)}{2}$。
>
> 设 $f(x)$ 在 $[a,b]\,(a<b)$ 上连续，并且 $\int_a^bf(x)dx=\int_a^bxf(x)dx=0$。证明：至少存在不同的 $\xi_1,\xi_2\in(a,b)$，使得 $f(\xi_1)=f(\xi_2)=0$。

第 28 题想到了把 $b$ 代换为 $x$，但是落实的时候没有处理好 $x-a$，导致计算困难。答案采用了一个很神秘的方法，我认为这不是我能掌握的。但是对于这题，只要把 $x-a$ 乘过去，然后用拉格朗日中值定理就可以很轻松的证明。

第 29 题第一反应是设 $g(x)$ 把上面两个条件串起来然后求导。但是应该是有问题的，这样不可以充分利用条件。对于这道题，知道是一定要中间踩一个点，但是这个点是什么。由于原函数是 $F(x)$，那么也就是要找一个 $F(x_0)=0$，所以考虑分部积分。

![3.3.43](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwNq0aEOvb4VqIhWlLXr4Sn34qEOzAACGBBrG6jnkFYlfHO6kQJ6cQEAAwIAA3gAAz0E)

> 设 $f(x)=\begin{cases}\lim\limits_{n\to\infty}\frac{x}{1+x^n-e^{nx}},&x\ne0,\\ 0,&x=0,\end{cases}$ 曲线 $y=f(x)$ 与 $y=\frac{1}{2}x$ 以及 $x=1$ 所围图形为 $D$。
>
> （Ⅰ）求 $D$ 的面积；
>
> （Ⅱ）求 $D$ 绕 $x$ 轴旋转一周所得旋转体的体积。
>
> 设曲线 $y=\sin x$ 在 $x\in[0,n\pi]\,(n=1,2,\cdots)$ 上与 $x$ 轴所围成的区域为 $D$，$D$ 绕 $y$ 轴旋转一周所得旋转体的体积为 $a_n$。
>
> （Ⅰ）求 $a_n$；
>
> （Ⅱ）求极限 $\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac{2k\pi^2}{a_n}\sin\frac{k\pi}{2n}$。
>
> 将半径为 $R$ 的球沉入水中，它与水面相切，设球的密度与水的密度相等，现将球从水中取出，问至少需要做功多少？
>
> 设图 3-1 所示的三角形薄板为同一等腰三角形薄板，已知其底为 $2b$、高为 $h$，将其垂直放入静水中，图 (a) 是其底与水面相齐，图 (b) 是其顶点与水面相齐，设图 (a) 与图 (b) 薄板一侧所受压力分别为 $P_1$ 和 $P_2$，求 $\frac{P_2}{P_1}$。
>
> - [图示] 图 3-1 给出同一等腰三角形薄板的两种放置方式：(a) 中顶点在下、底边 $x$ 轴与水面相齐；(b) 中顶点与水面 $x$ 轴相齐、底边在下。
>
> 已知曲线 $L$ 的极坐标方程为 $r=1+\cos\theta\,\left(0\le\theta\le\frac{\pi}{2}\right)$。
>
> （Ⅰ）求曲线 $L$ 在 $\theta=\frac{\pi}{4}$ 对应点处的切线 $T$ 的直角坐标方程；
>
> （Ⅱ）求曲线 $L$、切线 $T$ 与 $x$ 轴所围图形的面积。
>
> 求曲线 $y=3-|x^2-1|$ 与 $x$ 轴围成封闭图形绕直线 $y=3$ 旋转所得旋转体的体积。

第 43 题极限求错了，原因是没想明白 $\frac{0}{-1}=0$，而不是 $-1$。

第 44 题没写。

第 45 题到这里才想明白抽球做功（或者水）都是对重力做功。

第 46 题没写。

第 47 题没想明白 $x=r(\theta)\cos\theta$，把这个想明白之后就解出来了

第 48 题没算完。与基础 30 讲第 10 讲课后题最后一题是一样的。

![3.3.49](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwRq0aEkCv8Pa_PmsKtSmdxzEyT_8wACGRBrG6jnkFY1GXYBQGAyNwEAAwIAA3gAAz0E)

> 设心形线 $r=4(1+\cos\theta)$ 与 $\theta=0$、$\theta=\frac{\pi}{2}$ 所围图形为 $D$，求 $D$ 绕极轴旋转一周所得旋转体的体积。
>
> 设 $D$ 是位于曲线 $y=\frac{1}{x(\ln x)^{a+1}}\,(a>0,\,2\le x<+\infty)$ 下方、$x$ 轴上方的无界区域，求：
>
> （Ⅰ）$D$ 的面积 $S(a)$；
>
> （Ⅱ）$S(a)$ 的最小值。
>
> 设 $f(x)$ 连续且严格单调递减。
>
> （Ⅰ）证明：当 $x\in(0,1)$ 时，有 $x\int_0^1f(t)dt\le\int_0^xf(t)dt\le xf(0)$；
>
> （Ⅱ）若 $\int_0^1f(t)dt\ge0$，$f(0)\le1$，$x_1\in(0,1)$，$x_n=\int_0^{x_{n-1}}f(t)dt\,(n=1,2,\cdots)$，证明：$\lim\limits_{n\to\infty}x_n$ 存在，并求其值。
>
> 求心形线 $r=1+\cos\theta$ 与 $r=3\cos\theta$ 所围公共部分图形的面积。

第 49 题没算完。

第 50 题求导错误：$f(x)=\frac{(\ln 2)^{-x}}{x}$，求导没有对下面的 $x$ 求导。

第 51 题没想出来第 1 步怎么推。

第 52 题搞错积分上下限。

![3.3.54](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwVq0aE4OWRcNuVuLZW45B08V7xXQwACGhBrG6jnkFYqCcZPw2iaKwEAAwIAA3gAAz0E)

> 设有一质量为 $m$ 的均匀杆 $AB$，$A$、$B$ 的坐标分别为 $\left(-\frac{l}{2},0\right)$ 与 $\left(\frac{l}{2},0\right)$，单位质量的质点 $C$ 的坐标为 $(0,a)\,(a>0)$。
>
> （Ⅰ）求杆 $AB$ 与质点 $C$ 的相互吸引力；
>
> （Ⅱ）当质点 $C$ 沿 $y$ 轴正向移向无穷远处时，求克服吸引力所做的功。
>
> 设非负函数 $f(x)$ 在区间 $[0,1]$ 上有连续的二阶导数，且 $f(1)=1$，$f''(x)<0$。证明：
>
> （Ⅰ）当 $x\in[0,1]$ 时，有 $\int_0^xf(t)dt\ge\frac{1}{2}[xf(x)+x]$；
>
> （Ⅱ）$\int_0^1\left(\frac{2}{3}-x\right)f(x)dx\ge\frac{1}{6}$。

第 54 题没想明白 $\cos\theta$ 是什么。

第 55 题没有证明出来=是对的。

## 880 综合 1 刷第 4 章

![4.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwZq0aFWPp8y21a0oY4f15q5qehpewACGxBrG6jnkFbz0a7FU5D4bQEAAwIAA3gAAz0E)

> 设 $f(x,y)$ 在点 $(0,0)$ 的某邻域内连续，且 $\lim\limits_{x\to0,\,y\to0}\frac{f(x,y)-f(0,0)}{|x|+y^{[?]}}=-1$，则 $f(x,y)$ 在点 $(0,0)$ 处（ ）。
>
> - A. 取得极小值
> - B. 取得极大值
> - C. 不取得极值
> - D. 无法确定是否取得极值

本题错选为 A，为低级错误。

![4.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwdq0aFo7QpAIE9h_6JoD5LrOxb1jQACHBBrG6jnkFZurkYjLO1BsAEAAwIAA3gAAz0E)

> 设 $F(x,y)$ 在点 $(x_0,y_0)$ 的某邻域内有二阶连续偏导数，且 $F(x_0,y_0)=0$，$F'_x(x_0,y_0)=0$，$F'_y(x_0,y_0)>0$，$F''_{xx}(x_0,y_0)<0$，则由方程 $F(x,y)=0$ 确定的隐函数 $y=y(x)$ 在 $x=x_0$ 处（ ）。
>
> - A. 取得极小值
> - B. 取得极大值
> - C. 不取得极值
> - D. 不能确定是否取得极值

本题没做。现在突然反应过来，这道题就是隐函数存在定理，也就是基础 30 讲第 13 章感觉到懵逼的点。

![4.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwhq0aGT0Rnlqo_TFXQpkbmKFZu1awACHRBrG6jnkFbOvg6EBQABGzUBAAMCAANtAAM9BA)

> 设 $z=\frac{2x}{x^2-y^2}$，则 $\left.\frac{\partial^nz}{\partial y^n}\right|_{(2,1)}=$ ______。

本题没考虑将 $2$ 和 $1$ 代入导致错误。

![4.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwlq0b9oHc0NgYy9AczPbS8pn92jwQACNxBrG6jnkFbudNalJcExbwEAAwIAA20AAz0E)

> 已知 $x+y-z=e^z$，$xe^z=\tan t$，$y=\cos t$，求 $\left.\frac{d^2z}{dt^2}\right|_{t=0}$。

计算错误。

![4.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwpq0b-konEnipwZf2_twCbCUaC3ngACORBrG6jnkFZXGvnvm4wqxQEAAwIAA3gAAz0E)

> 求函数 $f(x,y)=(1+y)^2+(1+x)^2$ 在条件 $x^2+y^2+xy=3$ 下的最大值。

条件最值没有求出全的可能最值，只求了一部分。

![4.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwtq0b-3mQIx_D04V3o52D0hzMJTigACOhBrG6jnkFbLpKZF8ltaRwEAAwIAA20AAz0E)

> 求 $f(x,y)=\frac{1}{y^2}e^{-\frac{1}{2y^2}\left[(x-a)^2+(y-1)^2\right]}$（$y\neq0$，$a$ 为常数）的极值。

本题想利用圆的极值去做，但是忽略了极值也是被底下分母 $y^2$ 所影响。

![4.3.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBwxq0b_IkYH2v-gb-X2gg7CHmeLtlgACOxBrG6jnkFZrPt3P1-AQHQEAAwIAA3gAAz0E)

> 设 $f(x,y)$ 有一阶连续的偏导数，在 $(1,1)$ 的某邻域内，$f(x,y)=e^{x^2+y^2-2}+o(\rho)$，其中 $\rho=\sqrt{(x-1)^2+(y-1)^2}$，又 $g(x,y)=f(e^{-xy},xy)$。
>
> （Ⅰ）求 $dg(x,y)\big|_{(1,1)}$；
>
> （Ⅱ）计算 $\lim\limits_{t\to0}\frac{g(1+\sin t,1)-g(1,1-\tan t)}{t}$。
>
> 设
>
> $f(x,y)=\begin{cases}xy\sin\frac{1}{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0),\end{cases}$
>
> 讨论 $f(x,y)$ 在点 $(0,0)$ 处是否可微，偏导数 $\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}$ 在点 $(0,0)$ 处是否连续。
>
> 设中心在原点的椭圆为 $x^2-4xy+5y^2=1$，求该椭圆的长半轴与短半轴。
>
> 设 $x=x(y)$，$z=z(y)$ 由方程组 $\begin{cases}F(y-x,y-z)=0,\\G\left(xy,\frac{z}{y}\right)=0\end{cases}$ 确定，求 $\frac{dx}{dy},\frac{dz}{dy}$。
>
> 设 $\alpha,\beta$ 为正数，且 $\frac{1}{\alpha}+\frac{1}{\beta}=1$，求 $f(x,y)=\frac{1}{\alpha}x^{\alpha}+\frac{1}{\beta}y^{\beta}$ 在条件 $xy=1\,(x>0,y>0)$ 下的最小值。

第 16 题对记号的理解不够深刻，但是背后的本质是没有理解 $\mathrm{d}$ 这个符号（答案的做法太麻烦了）。D，也就是取全微分，利用全微分稳扎稳打去计算即可。

第 17 题对偏导数在点的连续判断错误（没有稳扎稳打去算，而只是猜了一个值）。

第 18 题则是完全没有想到转换为到圆点的最值（现在也没想明白），但是仔细想想，是不是椭圆的长半轴就是椭圆到原点的最大值？椭圆的短半轴是不是就是椭圆到原点的最小值？所以这道题就可以转换为条件最值去做。

第 19 题没具体去算。

第 20 题想用不等式去做，没做出来，其实用拉格朗日乘数法去做就可以了。

## 880 综合 1 刷第 5 章

![5.1.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBw1q0b_nuDKSH3r4ecXKVfQqXEhD7AACPBBrG6jnkFZgo-nLhjW0uQEAAwIAA3gAAz0E)

> $\lim\limits_{n\to\infty}\sum\limits_{i=1}^{n}\sum\limits_{j=1}^{n}\frac{1}{\left(1+\frac{i}{n}\right)(n^2+j^2)}=$（ ）。
>
> - A. $\frac{\pi}{4}\ln 2$
> - B. $\frac{\pi}{8}\ln 2$
> - C. $\frac{\pi}{2}\ln 2$
> - D. $\pi\ln 2$
>
> 积分 $I=\int_0^{\frac{\pi}{2}}d\theta\int_0^{+\infty}f(r\cos\theta,r\sin\theta)r\,dr=$（ ）。
>
> - A. $\int_0^1 dy\int_0^{\sqrt{[?]}}f(x,y)dx$
> - B. $\int_0^1 dy\int_0^{\sqrt{1-y^2}}f(x,y)dx$
> - C. $\int_0^1 dy\int_0^1 f(x,y)dx$
> - D. $\int_0^1 dx\int_0^{\sqrt{x-x^2}}f(x,y)dy$

第 3 题错选为 C。属于低级错误，$\arctan 1=\frac{\pi}{4}\ne\frac{\pi}{2}$。

第 4 题错选为 A。属于低级错误，$r\cos\theta=x\ne y$。

![5.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBw5q0cBbQMm6Fvmtr2MthbQflQABW6cAAj4Qaxuo55BWwIQLw6iX_KwBAAMCAAN4AAM9BA)

> 设 $D$ 是以 $(1,1)$、$(-1,1)$ 和 $(-1,-1)$ 为顶点的三角形区域，$D_1$ 是 $D$ 在第一象限的部分，且 $f(x,y)=xy+\iint_D f(x,y)\,dx\,dy$，其中 $f(x,y)$ 在 $D$ 上连续，则（ ）。
>
> - A. $\iint_D f(x,y)\,dx\,dy=\iint_{D_1}f(x,y)\,dx\,dy$
> - B. $\iint_D f(x,y)\,dx\,dy=2\iint_{D_1}f(x,y)\,dx\,dy$
> - C. $\iint_D f(x,y)\,dx\,dy=\iint_{D_1}f(y,x)\,dx\,dy$
> - D. $\iint_D f(x,y)\,dx\,dy=2\iint_{D_1}f(y,x)\,dx\,dy$

本题一刷时没看完题目，且没理解题目意思，错题重刷时完全没思路去解。

![5.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBw9q0cB-MTp30BhSjpG1uHijAAHcZT0AAj8Qaxuo55BW9Im1VlbS7bIBAAMCAAN4AAM9BA)

> 设 $D_t$ 是 $x^{\frac{2}{3}}+y^{\frac{2}{3}}=t^{\frac{2}{3}}$（$t>0$）所围区域，则 $\lim\limits_{t\to0^+}\frac{1}{t^2}\iint_{D_t}(\sin x+\cos y)\,dx\,dy=$（ ）。
>
> - A. $\frac{\pi}{8}$
> - B. $\frac{\pi}{4}$
> - C. $\frac{3\pi}{8}$
> - D. $\frac{\pi}{2}$

本题理解错上下限的定义，将 $t$ 当为第二变量的上限，而不是正确的值。

![5.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxBq0cCaq6xvuP-Yg3vNoQnGWSf8aQACQBBrG6jnkFaufN_lv7TLSAEAAwIAA3gAAz0E)

> 设 $D:|x|\le 1,0\le y\le 2$，计算 $I=\iint_D|y-x^2|\,dx\,dy$。

1 刷时理解错对称性；错题重刷时候，在 $-1$ 到 $1$ 化简成 $0$ 到 $1$ 时，同时在外侧和内测乘了一个 $2$，最后算出来答案的两倍。

![5.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxFq0cHHx2R8Sub9MEORYruAJO9WXgACQhBrG6jnkFZ6dtt5tbOtTAEAAwIAA3gAAz0E)

> 设 $D=\left\{(x,y)\left|(x-1)^2+(y-1)^2\le 1,x^2+y^2\le 1\right.\right\}$，计算 $I=\iint_D(2x-y^2)\,dx\,dy$。
>
> 设平面曲线 $(x+y)^3=xy$ 在第一象限所围区域为 $D$，计算
>
> $I=\iint_D\left[(x-y)^3+1\right]dx\,dy.$
>
> 设上半平面的有界区域 $D=\left\{(x,y)\left|1\le x^2+(y-|x|)^2\le 2,0\le y\right.\right\}$，计算
>
> $I=\iint_D\frac{x+1}{2x^2+y^2}dx\,dy.$
>
> 设曲线 $(x^2+y^2)^{\frac{3}{2}}=2\sqrt{2}xy$，$x\ge0,y\ge0$ 所围区域为 $D$，计算
>
> $I=\iint_D(x+2\sqrt{xy}-y)^2dx\,dy.$
>
> 设 $D=\{(x,y)|x^4+y^4\le 1,x\ge0,y\ge0\}$，计算
>
> $I=\iint_D(x^2+xy-y^2)dx\,dy.$

第 4 题一直想着用对称性化简，但是事实上这道题基本上是硬算。需要注意的是，在硬算的时候可以采用一个技巧，也就是不要把式子放在一起。例如我要硬算 $x^2-y$ 的积分，那么可以先算 $x^2$ 的积分，再去处理 $y$ 的积分，不要放在一起，放在一起非常容易乱。

第 5 题为理解问题，将 $x$，$y$ 代入为 $-x$，$-y$ 是关于原点对称。此外在错题重刷的时候，一定要想清楚自己这么化简是为了什么。显然这道题要求出 $r=r(\theta)$，从而进行换元法，而不是一开始就想着直接去拆开化简，最后画出来自己都不知道自己在做什么。做数学题一定不可以抱着试试的态度去做，一定要想清楚我这么做可能能得到什么。在计算积分的时候，对于三角函数，首先先直接考虑能不能用 $\sec$，而不是先化简（被以前写的东西误解了）

第 6 题需要注意对称性，前面一直在那里错误的使用对称性，这道题应该使用对称性的反而没有用对称性。

第 7 题为低级错误。令 $2\theta=t$，结果求 $\mathrm{d}$ 的时候忘记系数了。

第 8 题为低级错误。$Y=(1-x^4)^{1/4}$，而不是开根号。

![5.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxJq0cHgf1uFLZSVesdL2Pv30M2uEwACQxBrG6jnkFZj_rRiWyFyhQEAAwIAA3gAAz0E)

> 计算 $I=\int_{-\frac{\sqrt{2}}{2}}^{\frac{\sqrt{2}}{2}}dx\int_{|x|}^{\sqrt{1-x^2}}e^{-(x^2+y^2)}\sin(x^2+y^2)\,dy$。
>
> 求极限 $\lim\limits_{t\to0^+}\frac{1}{t^4}\int_0^t dx\int_x^t\sin(xy)^2\,dy$。
>
> 设 $D_t=\{(x,y)|0\le x\le 2t,0\le y\le t,t>0\}$，$f(x,y)$ 在 $D_t$ 上有二阶连续偏导数，求 $F(t)=\iint_{D_t}f''_{xy}(x,y)\,dx\,dy$，并计算 $\lim\limits_{t\to0^+}\frac{F(t)}{t}$。
>
> 设 $D=\left\{(\theta,r)\left|0\le\theta\le\frac{\pi}{2},0\le r\le 1\right.\right\}$，计算 $I=\iint_D r^3e^{r^2\sin^2\theta}\sin 2\theta\,d\theta\,dr$。

第 10 题为低级错误，积分上下限错误。

第 11 题我其实没有看懂我那个时候是怎么做的，感觉本质是因为没有理解清楚积分中值定理。现在是理解了，这里还包括变限积分求导，可以把二维的变限积分，里面的那个写成一个函数，因为本质上其实就是一个函数来看待，这样的话会非常舒服。这道题积分中值定理是走不下去的。

第 12 题应该是直接用的 $f(x,y)-f(0,0)$。想当然解，没有根据具体的定义去具体代入。

第 13 题为低级错误，在最后使用牛莱公式代入得时候错了。

![5.3.15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxNq0cH2Nm3tObjjs4UJBYWB3mx7ZAACRBBrG6jnkFYWXMBGBPXZcQEAAwIAA3gAAz0E)

> 设 $D=\{(x,y)|0\le x\le 1,0\le y\le x\}$，计算 $I=\iint_D\arcsin(2\sqrt{x-x^2})\,dx\,dy$。
>
> 设可导函数 $f(x)$ 满足 $\lim\limits_{x\to0}\frac{f(x)}{x}=1$，求极限 $\lim\limits_{t\to0^+}\frac{\int_0^t dx\int_{-\sqrt{t^2-x^2}}^{\sqrt{t^2-x^2}}\left[f(\sqrt{x^2+y^2})+2y\right]dy}{t^3}$。
>
> 设
>
> $F(t)=\begin{cases}\iint_{x^2+y^2\le t^2}x\left[1-\frac{F(\sqrt{x^2+y^2})}{x^2+y^2}\right]dx\,dy,&t>0,\\0,&t=0\end{cases}$
>
> 在 $[0,+\infty)$ 上连续，求函数 $F(t)$ 的表达式。

第 15 题没算完，处理技巧不好。

第 16 题积分上下限错误。

第 17 题我这边打印出来的题错了，且需要注意这道题是求得是一个点，而不是函数，所以和函数的处理手段不一样。

![5.4.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxRq0cIM_RnatQ4x515krUSh2LDt7AACRRBrG6jnkFaAA8bqGl5tjgEAAwIAA3gAAz0E)

> 设 $f(x,y)$ 在区域 $0\le x\le 1,0\le y\le 1$ 上连续，$f(0,0)=0$，且 $f(x,y)$ 在点 $(0,0)$ 处可微，$f'_y(0,0)=1$，求 $\lim\limits_{x\to0^+}\frac{\int_0^{x^2}dt\int_x^{\sqrt{t}}f(t,u)\,du}{1-e^{-\frac{x^4}{4}}}$。
>
> 设 $D:x^2+y^2\le 4,x\ge0,y\ge0$，$f(x,y)$ 在 $D$ 上连续，且
>
> $f(x,y)=(x^2-y^2-x+y-1)+\iint_D f(u,v)\,du\,dv,$
>
> 求 $f(x,y)$。
>
> 设 $D$ 是由 $y=\sqrt{1-x^2}$，$y=\sqrt{4-x^2}$ 与 $x+y=0$ 及 $x$ 轴所围，且位于 $x+y\ge0$ 部分的区域，计算 $I=\iint_D\frac{\sqrt{x^2+y^2}}{x^2+2y^2}dx\,dy$。
>
> 设 $D=\{(x,y)|4\le x^2+y^2\le 9,x\ge0,y\ge0\}$，$f(x,y)$ 在 $D$ 上连续，且
>
> $f(x,y)=\sin(x\sqrt{x^2+y^2})+\frac{1}{x}\iint_D\frac{xf(x,y)}{x+y}dx\,dy,$
>
> 求 $I=\iint_D f(x,y)\,dx\,dy$。

第 19 题跳。错题重刷时应该知道，对于这种题先是变限积分，变形到只有一维的时候，再往下走只能用一维积分的中值定理，然后再用泰勒公式展开。这里对定义的理解感觉也有偏差。微分的定义。另外还需要注意，如果用积分中值定理得到的东西，需要夹逼定理之类的去搞，而不能想当然地去让它等价于 $x$。

第 20 题求的是 $f(x,y)$。求出来 $A$ 之后没有带回去。

第 21 题没有考虑定义域，导致积分上下限错误。

第 22 题积分错误，为 $\sin x$，$x\sin x$ 之类的变形积分错误。

![5.4.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxVq0cId9E7ZzAZEy9nhPeQDDJiDqgACRhBrG6jnkFYAAW2UxCLHzRQBAAMCAAN4AAM9BA)

> 设 $D:x^2+y^2\le 2tx,y\ge0\,(t>0)$，$f(u)$ 在 $u=0$ 处可导，且 $f(0)=0$，求
>
> $\lim_{t\to0^+}\frac{1}{t^4}\iint_D f(\sqrt{x^2+y^2})y\,dx\,dy.$

错用积分中值定理，对于变量的积分中值定理需要慎用。

## 880 综合 1 刷第 6 章

![6.1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxZq0cI3WhtbudtSEwYl9ChLKxV2cQACRxBrG6jnkFZz0FWuvPUQgAEAAwIAA3gAAz0E)

> 设 $y_1,y_2$ 是一阶线性非齐次微分方程 $y'+P(x)y=Q(x)$ 的两个解，若常数 $\lambda,\mu$，使得 $\lambda y_1+\mu y_2$ 是该方程的解，$\lambda y_1-\mu y_2$ 是对应的齐次微分方程的解，则（ ）。
>
> - A. $\lambda=-\frac{1}{2},\mu=-\frac{1}{2}$
> - B. $\lambda=\frac{1}{2},\mu=\frac{1}{2}$
> - C. $\lambda=\frac{1}{3},\mu=\frac{2}{3}$
> - D. $\lambda=\frac{2}{3},\mu=\frac{2}{3}$

本题没有能做到稳扎稳打去分析。

![6.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxdq0cJH1YB-p1snE-qFmXouq_2nsgACSBBrG6jnkFZ1O5WWkgOM_gEAAwIAA3gAAz0E)

> 设 $y=y(x)$ 是 $y''+ay'+by=0$ 的解，其中 $a,b$ 为正常数，则（ ）。
>
> - A. $\lim\limits_{x\to+\infty}y(x)=0$
> - B. $\lim\limits_{x\to+\infty}y(x)=+\infty$
> - C. $\lim\limits_{x\to+\infty}y(x)=-\infty$
> - D. $\lim\limits_{x\to+\infty}y(x)$ 不存在，且不为 $\infty$
>
> 设 $f(x)$ 是定义在 $\mathbf{R}$ 上的偶函数，且 $f(x)+f'(x)=2e^x$，若 $a[f(x)-e^x]\le x$ 在 $\mathbf{R}$ 上恒成立，则 $a$ 的取值范围为（ ）。
>
> - A. $(-\infty,0]$
> - B. $\left(-\infty,-\frac{1}{e}\right]$
> - C. $(-\infty,-1)$
> - D. $(-\infty,-e]$

第 6 题，注意正整数。

第 7 题，最后一小步错误，属于非常低级的错误。

![6.2.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxhq0cJWEDcx3RZAW_qI88Rv_kUaLQACSRBrG6jnkFZ4eUfTWZjHWwEAAwIAA3gAAz0E)

> 微分方程 $y'=\frac{y^2-x}{2y(x+1)}$ 的通解为 ______。

没想到怎么做。

![6.2.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxlq0cJrb2af5YKiJL527P5-xQ9bgwACShBrG6jnkFZkLkrLji-3fgEAAwIAA3gAAz0E)

> 微分方程 $y''+y=x+\cos x$ 的通解为 ______。
>
> 微分方程 $y''-y=\sin^2 x$ 的通解为 ______。

第 6 题，错误在于算出 $N=\frac{1}{2}$ 时，想当然写余项，而不是代入。

第 7 题，用了一个神秘的方法，解出来之后，没有思考二阶导只有 $2$ 个 $C$。

![6.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxpq0cJ-7zlAgzATD2eml40Sw3-xBQACSxBrG6jnkFbEE0Esg3H87QEAAwIAA3gAAz0E)

> 设函数 $y(x)$ 满足 $y''+2ay'+b^2y=0\,(a>b>0)$，且 $y(0)=1,y'(0)=1$，则 $\int_0^{+\infty}y(x)\,dx=$ ______。
>
> 设微分方程 $y''+ay'+y=0$ 的每一个解 $y(x)$ 在 $[0,+\infty)$ 上有界，则实数 $a$ 的取值范围为 ______。

第 9 题没去做。

第 10 题属于低级错误，有一个问题就是 $e^{\cos x}$，其后面是无界的。

![6.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxtq0cKaBSJ7asDa5U93QgOaNOg7VQACTBBrG6jnkFb1hAlmTNQXTgEAAwIAA3gAAz0E)

> 设 $y(x)$ 在 $[x_0,+\infty)$ 上有一阶连续导数，且 $\lim\limits_{x\to+\infty}[y'(x)+y(x)]=k$，求 $\lim\limits_{x\to+\infty}y(x)$。

没见过这类题。错题重刷时其实也没想到怎么做。

![6.3.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBxxq0cLBfhR3U0UusAyJjpU4pDvBFgACTRBrG6jnkFYHDBGlJwiLVQEAAwIAA3gAAz0E)

> 设 $f'(x)=1+\int_0^x[-6\cos 2t-f(t)]dt$，且 $f(0)=1$。计算 $I=\int_0^x\left[\frac{f(x)}{x+1}+f'(x)\ln(1+x)\right]dx$。
>
> 设 $y=y(x)$ 有一阶连续导数，$y(0)=1$，且满足
>
> $y'(x)+3\int_0^x y'(t)\,dt+2x\int_0^1 y(xu)\,du+e^{-x}=0,$
>
> 求 $y=y(x)$。

第 9 题最后一步错误，$\cos 2\pi=1\ne$ 其他。

第 10 题最后一步错误，解出来了 $y'$ 之后，进行下一步的时候抄错了符号。

![6.3.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBx1q0cLSjaQskJBNkM2U7O2-dSpGbQACThBrG6jnkFasWDuFabopwAEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $(0,+\infty)$ 内有定义，$f'(1)=1$，当 $x,y\in(0,+\infty)$ 时，满足
>
> $f(xy)=yf(x)+xf(y).$
>
> （Ⅰ）证明：$f(x)$ 在 $(0,+\infty)$ 内可导，且 $f'(x)=\frac{f(x)}{x}+1$；
>
> （Ⅱ）求函数 $f(x)$ 的极值。

没见过这类题，看到这种题应该是要往上凑的，错题冲刷的时候没想到。

然后后面都没做了。
