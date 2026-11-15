---
title: 张宇 1000 基础 2 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 张宇 1000 基础 2 刷
category: 考研
series: NPEE
seriesOrder: 7.12
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 张宇 1000 基础 2 刷第 1 章

![1.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzRq0crYvhZGBwT8MHiquIXQo5PwCwACZxBrG6jnkFYx2yw-RUgFvQEAAwIAA3gAAz0E)

> 设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上满足 $f(x)=f(x-\pi)+\sin x$，且 $f(x)=x$，$x\in[0,\pi)$，求 $f(x)$ 在 $[\pi,3\pi)$ 上的表达式。

属于低级错误，$x-\pi$ 没代入 $\sin x$ 里算。

![1.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzVq0crquDrt8wL5jKrQ7awHbG6fcQACaBBrG6jnkFYKP8yhVkPRVQEAAwIAA3gAAz0E)

> 设 $\lim\limits_{x\to0}\frac{\sin 2x+xf(x)}{x^3}=1$，则 $\lim\limits_{x\to0}\frac{2\cos x+f(x)}{x^2}=$（ ）。
>
> - A. $0$
> - B. $-\frac{2}{3}$
> - C. $\frac{4}{3}$
> - D. $\infty$

做的是对的，但是还是放在这里。主要的问题就是，在进行 $1+a$ 的时候，不是直接 $1+o(x)$，而是 $1+a$，然后下面的乘上去

![1.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzZq0cr6GsFpwh94hY-Z6c2wpkTp0gACaRBrG6jnkFbKc5IkxT3VDgEAAwIAA20AAz0E)

> $\lim\limits_{x\to0}\frac{\sqrt{1+2x}-\sqrt[3]{1+3x}}{\ln(1+x^2)}=$ ______。

属于低级错误，泰勒公式背错了，注意 $n(n-1)/2$，这个 $/2$ 忘了。

## 张宇 1000 基础 2 刷第 2 章

![2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzdq0csNotsMiEzVxVhCF7woRaTL3QACahBrG6jnkFZTE1s0wL5VKwEAAwIAA20AAz0E)

> 设数列 $\{x_n\}$ 满足 $x_{n+1}=\ln x_n+1$，$x_n>0$，$n=1,2,\cdots$，则 $\{x_n\}$（ ）。
>
> - A. 单调不减
> - B. 单调不增
> - C. 严格单调递增
> - D. 严格单调递减

本题错选为 D。想错了当且仅当（算想当然的低级错误）。本题当且仅当应为 $1$，而不是 $0$。

## 张宇 1000 基础 2 刷第 3 章

![3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzhq0ctUgDHhxDVOzsd2IH4a74rFsQACaxBrG6jnkFb5G6NocE7jLwEAAwIAA20AAz0E)

> 设 $f(x)$ 满足 $f(0)=0$，且 $f'(0)$ 存在，则 $\lim\limits_{x\to0}\frac{f(1-\cos x)}{\ln(1-x\sin x)}=$ ______。

低级错误，$1-\cos x$ 等价无穷小为 $\frac{1}{2}x^2$，而不是 $x^2$。

## 张宇 1000 基础 2 刷第 4 章

![4.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzlq0ctoyKqeZ2kJY0hvbIiFzfgRPwACbBBrG6jnkFYyEWjTZUFRLAEAAwIAA20AAz0E)

> 设 $\begin{cases}x=t-t^2,\\ te^{y}+y+1=0,\end{cases}$ 则 $\left.\frac{dy}{dx}\right|_{t=0}=$ ______。

低级错误。本题错误原因在于当 $t=0$ 代入的时候，$y$ 并不是 $0$，而应该计算出对应的值。

## 张宇 1000 基础 2 刷第 5 章

![5.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBkZq0KNukv4WzIn5CQJmW5YNOcpZ6wACrBNrG6jniFaQKwbtQvbyMwEAAwIAA3gAAz0E)

> 已知函数 $y=f(x)$ 连续，其二阶导函数的图像如图所示，则曲线 $y=f(x)$ 的拐点个数为（ ）。
>
> - [图示] 坐标系中给出 $f''(x)$ 的曲线，$x$ 轴上依次标有 $x_1$、$O$、$x_2$、$x_3$。
>
> - A. $1$
> - B. $2$
> - C. $3$
> - D. $4$

本题错选为 B。其实到这里为止，最终是理解对了，但是呢，想当然了，这道题是 $f''$，而不是 $f'$ 的函数。

做这种题要耐心。

错题重刷再次总结一下，

如果题目给的是 $f$ 和 $x$ 的关系，那么很难判断出拐点，对于极值点，直接观察局部最值即可，对于零点直接观察和 $x$ 轴的交点即可。

如果题目给的是 $f'$ 和 $x$ 的关系，那么可以通过 $f'$ 和 $x$ 的交点（需要变号）或者无穷变号，可以判断出是极值点，可以通过 $f'$ 的极值（包括无穷）判断拐点。

给的是 $f''$ 和 $x$ 的关系，观察其两边变号的 $0$ 点或者无穷点即可。

本质是要看清楚是什么关系。

![5.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBztq0czgF2eeT44PN_6QXvHMQO2XxwACbRBrG6jnkFbNqylf53xLKQEAAwIAA3gAAz0E)

> 已知曲线 $y=f(x)$ 在其点 $(0,1)$ 处的曲率圆方程为 $(x-1)^2+y^2=2$，且当 $x\to0$ 时，二阶可导函数 $f(x)$ 与 $a+bx+cx^2$ 的差为 $o(x^2)$，则（ ）。
>
> - A. $a=0$，$b=1$，$c=\frac{3}{2}$
> - B. $a=1$，$b=0$，$c=1$
> - C. $a=1$，$b=1$，$c=-1$
> - D. $a=1$，$b=0$，$c=-1$

本题属于低级错误 + 不会做，排除法可以显然知道 A 必然是错的，但是我在排除了 BD 后选了 A。

从曲率圆的定义出发，显然可以得到 $y=1$，$y'=1$，$|y''|=2$。但是这一步之后就没法推下去了，因为不知道是取 $2$ 还是 $-2$。根据曲率圆定义，该点的导数与导数的导数和曲率圆一致，所以可以得到 $y''=2$。尤其需要注意，因为泰勒展开的时候，第 3 项是 $\frac{1}{2}$，所以最终 $c=-1$。

## 张宇 1000 基础 2 刷第 6 章

![6.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBzxq0cz4niQAAc915GWsRtYtn0W7jZ8AAm4Qaxuo55BWiIhxJFQg-aYBAAMCAAN4AAM9BA)

> 设函数 $f(x)=ae^x-bx\ (a>0)$ 有两个零点，则 $\frac{b}{a}$ 的取值范围是（ ）。
>
> - A. $\left(0,\frac{1}{e}\right)$
> - B. $(0,e)$
> - C. $\left(\frac{1}{e},+\infty\right)$
> - D. $(e,+\infty)$

本题错选为 B。属于低级错误，和 16 题类似的，算着算着忘了自己在做什么。我的方法是求 $x-x\ln x$，其中 $x$ 是 $\frac{b}{a}$，也就是当它小于 $0$ 的时候，也就是 $\frac{b}{a}>e$ 的时候，而不是在算本来的和这个函数有 $2$ 个交点。忘记求什么是一个很严重的问题。

![6.12](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBz1q0c0MAAGwVx1qp7Z64zA6rBs4Nu8AAm8Qaxuo55BWd99n2nGyE3gBAAMCAAN4AAM9BA)

> (1) 将 $\sin x$ 在 $x=0$ 处展开成一阶带拉格朗日余项的泰勒公式；
>
> (2) 证明 $\left|\frac{\sin x}{x}-1\right|\le\frac{1}{2}|x|$，$x\ne0$。
>
> 求曲线 $y=e^{-\frac{x}{2}}$ 与曲线 $y=x^3-3x$ 的交点个数。

第 12 题没有理解清楚泰勒展开。事实上对 $\sin x$ 在 $x=0$ 处的展开，并非是根据已知公式得出最终结论，而是根据泰勒公式本身得到，也就是说，存在 $x^2$ 项。

第 13 题属于低级错误，求到三阶导的时候，忘记加负号。

![6.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBz5q0c0hOu__hO7u6nk-uAABYwLy5uUAAnAQaxuo55BWTKw3zatVX7QBAAMCAAN4AAM9BA)

> 设常数 $k>0$，函数 $f(x)=\frac{1}{\ln x-\frac{x}{e}+k}$ 在 $(0,+\infty)$ 内的间断点个数为（ ）。
>
> - A. $3$
> - B. $2$
> - C. $1$
> - D. $0$

本题错选为 D。属于低级错误，忘记自己要做什么了。显然，$k=\frac{x}{e}-\ln x$，求出来图像长啥样了之后，我们应该求的是 $k$ 与函数的交点，而不是求其本身全 $>0$ 而导致的没有零点。

![6.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB0Bq0c1JGSbpV-cDbZQ8aze6euYAATUAAnIQaxuo55BWNXPAkUwP0cABAAMCAAN4AAM9BA)

> 设 $a_0+\frac{a_1}{2}+\cdots+\frac{a_n}{n+1}=0$（$a_i$ 为实数，$i=0,1,2,\cdots,n$），则在区间 $(0,1)$ 内，方程 $a_0+a_1x+\cdots+a_nx^n=0$（ ）。
>
> - A. 没有实根
> - B. 至少有一个实根
> - C. 仅有一个实根
> - D. 是否有实根不能判定

本题错选为 C，理解错罗尔原话与罗尔定理的区别。对于罗尔原话，是从底向上，对于 $f^{(n)}(x)$ 不变号且不为 $0$，$n$ 的系数即为 $f(x)$ 至多有 $n$ 个零点。从上到下为罗尔定理，为存在以及至少。

不要想当然，认认真真分析，已知条件是让你用罗尔定理的，用完之后是存在，而不是唯一。

## 张宇 1000 基础 2 刷第 7 章

![7.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACBz9q0c0zm4OhX4P8NRP7f4TKo_hmtgACcRBrG6jnkFY86riQffW-cgEAAwIAA3gAAz0E)

> 已知某圆柱体底面半径与高随时间变化的速率分别为 $2\ \mathrm{cm/s}$、$-3\ \mathrm{cm/s}$，且圆柱体的体积与表面积随时间变化的速率分别为 $-100\pi\ \mathrm{cm^3/s}$、$40\pi\ \mathrm{cm^2/s}$，则圆柱体的底面半径与高分别为（ ）。
>
> - A. $5\ \mathrm{cm}$，$5\ \mathrm{cm}$
> - B. $10\ \mathrm{cm}$，$5\ \mathrm{cm}$
> - C. $5\ \mathrm{cm}$，$10\ \mathrm{cm}$
> - D. $10\ \mathrm{cm}$，$10\ \mathrm{cm}$
>
> 一物体在距离同一水平面上的地面观测器 $10\ \mathrm{m}$ 处离地匀速垂直上升，其速度为 $a\ \mathrm{m/s}$。若该物体上升到离地 $20\ \mathrm{m}$ 时，观测器视线倾角的变化率为 $\frac{1}{10}$，则 $a=$（ ）。
>
> - A. $1$
> - B. $2$
> - C. $3$
> - D. $5$

第 4 题没想到圆柱体的表面积不只是有侧面积，还有底面积。

第 5 题则是做出来 $\frac{5}{10}=\frac{a}{10}$，然后脑子抽了选了 B。

## 张宇 1000 基础 2 刷第 8 章

![8.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Fq0y833nJ0obbetpAErx0OZLjcUQACkBlrG-BrmFaclzQQTHZ6igEAAwIAA3gAAz0E)

> 设函数 $g(x)$ 在 $\left[0,\frac{\pi}{2}\right]$ 上连续，若在 $\left(0,\frac{\pi}{2}\right)$ 内 $g'(x)\ge0$，则对任意的 $x\in\left(0,\frac{\pi}{2}\right)$，有（ ）。
>
> - A. $\int_x^{\frac{\pi}{2}}g(t)\,dt\ge\int_x^{\frac{\pi}{2}}g(\sin t)\,dt$
> - B. $\int_x^1 g(t)\,dt\le\int_x^1 g(\sin t)\,dt$
> - C. $\int_x^1 g(t)\,dt\ge\int_x^1 g(\sin t)\,dt$
> - D. $\int_x^{\frac{\pi}{2}}g(t)\,dt\le\int_x^{\frac{\pi}{2}}g(\sin t)\,dt$

本题错选为 D。理解错误，函数不等式两边同时求导，这个符号可能会变。移过去然后积分中值定理就好了。

其实这道题移过去设函数就好了。

![8.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Jq0y9NEiVTw5ZkS3cHtTqL2MV6qQACkRlrG-BrmFZAGAc9StUvCAEAAwIAA3gAAz0E)

> 设 $a,b$ 为常数，$\int_0^1\frac{\ln x}{x^a\left(\tan\frac{\pi}{2}x\right)^b}\,dx$ 收敛，则（ ）。
>
> - A. $a+b>1$ 且 $b>-2$
> - B. $a+b<1$ 且 $b>-2$
> - C. $a+b>1$ 且 $b<-2$
> - D. $a+b<1$ 且 $b<-2$

本题错选为 D。对于这道题，已经捋清楚 $p$ 积分了，所以从中间拆。但是，需要注意的是，拆完之后，后面那一项仍然是对 $a$，也就是对有限值，所以得 $p<1$。

## 张宇 1000 基础 2 刷第 9 章

一元积分学的计算，心不在焉。

![9.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Nq0zC_AdT4iDj5med1AWDvxl4ltgACkxlrG-BrmFbn4ipAWZc7ZwEAAwIAA20AAz0E)

> 计算不定积分 $\int\frac{e^{2x}}{\sqrt{e^x-1}}\,dx$。

本题采用换元法的时候，忘记 $\mathrm{d}x=\cdots\,\mathrm{d}t$ 了，属于低级错误。

![9.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Rq0zD3U9wuLtvbP2ObqiIdgCwskgAClBlrG-BrmFbCH5hZT5iJXAEAAwIAA20AAz0E)

> 设 $y=\frac{x}{\sqrt{1+x^2}}$，则 $\int_{\frac{1}{2}}^{\frac{\sqrt{3}}{2}}xy\,dy=$ ______。

本题考虑过将 $x$ 和 $y$ 的关系互换，但是还是使用的是 $\mathrm{d}y=\cdots\,\mathrm{d}x$ 的方法。需要注意，得换上下限（本题这里没换上下限，导致算出来非常奇怪）

![9.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Vq0zEVBNBZL-PlXHi747NusomlLwAClRlrG-BrmFZybOfuOBNcegEAAwIAA3gAAz0E)

> 设 $f(x)$ 在 $x=0$ 的某邻域内连续，在 $x=0$ 处可导，且 $f(0)=0$，$\varphi(x)=\begin{cases}\frac{1}{x^2}\int_0^x f(t)\,dt,&x\ne0\\ 0,&x=0\end{cases}$，则 $\varphi(x)$ 在 $x=0$ 处（ ）。
>
> - A. 不连续
> - B. 连续但不可导
> - C. 可导但 $\varphi'(x)$ 在 $x=0$ 处不连续
> - D. 可导且 $\varphi'(x)$ 在 $x=0$ 处连续

本题错选为 A，显然，$\frac{x}{x}=1\ne\frac{1}{x}$。

错题重刷仍然错误。我记得答案是 D。然而选了 C。可导性可以讨论，但是导函数连续呢？通过可导的定义求出那一点的导数，然后求出全局的导数再逼近那一个点。

![9.20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9Zq0zEzmEkUrqCC8RKfCIbGVgeNjwAClhlrG-BrmFbAJSe-Fsh3igEAAwIAA3gAAz0E)

> 设 $a_n=\int_0^1 x^n\sqrt{1-x^2}\,dx\ (n=0,1,2,\cdots)$，则 $\lim\limits_{n\to\infty}\left(\frac{a_n}{a_{n-2}}\right)^n=$ ______。
>
> $\int_{\sqrt{5}}^{5}\frac{1}{\sqrt{|x^2-9|}}\,dx=$ ______。

第 20 题采用华理士公式，但是一开始的时候把 $I_n$ 的华理士公式写错了，从而引发连锁错误。

第 21 题属于低级错误，拆开后 $x^2-9$ 写成 $+$。

![9.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9dq0zFMbxmpPQObPA7attmX_j-T1gAClxlrG-BrmFZtsH2kT-VbOQEAAwIAA20AAz0E)

> $\int_{-\frac{1}{2}}^{\frac{1}{2}}\frac{|x|(\arcsin x+\arccos x)}{\sqrt{1-x^2}}\,dx=$ ______。

本题属于低级错误，误认为可以直接取 $2$，实则有一个问题，那就是 $\arccos x$ 不是偶函数也不是奇函数！

## 张宇 1000 基础 2 刷第 10 章

![10.3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9hq0zFkQ43FZWf3399zE9Banj65ogACmBlrG-BrmFY2j1kboMw9pwEAAwIAA3gAAz0E)

> 如图所示，抛物线 $y=(\sqrt{2}-1)x^2$ 把曲线 $y=x(b-x)\ (b>0)$ 与 $x$ 轴所围成的闭区域分成面积为 $S_A$ 与 $S_B$ 的两部分，则（ ）。
>
> - [图示] 第一象限中画出 $y=x(b-x)$ 与 $y=(\sqrt{2}-1)x^2$，两曲线在 $O$ 与 $b$ 之间相交，交点左侧区域标 $S_A$，右侧阴影区域标 $S_B$，两条曲线与 $x$ 轴交于 $O$、$b$。
>
> - A. $S_A<S_B$
> - B. $S_A=S_B$
> - C. $S_A>S_B$
> - D. $S_A$ 与 $S_B$ 的大小关系与 $b$ 的数值有关

本题没做，感觉计算太麻烦了。本题计算感觉麻烦的原因是：分别算 $S_A$ 和 $S_B$，但是这道题可以用 $S_A+S_B-S_A$ 的方法来计算 $S_B$，如此计算就会很方便。积累一个技巧。

![10.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9lq0zGDPzpHbP6hPa-jSBjUAXxSPgACmRlrG-BrmFb6nnKRKdw0JQEAAwIAA3gAAz0E)

> 曲线 $y=x^2e^{-x^2}\ (0\le x<+\infty)$ 绕 $x$ 轴旋转一周所得延展到无穷远的旋转体的体积为 ______。
>
> 曲线 $f(x)=x\ln x\ (0<x\le2)$ 绕 $x$ 轴旋转一周所得旋转体的体积为 ______。

![10.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9pq0zGNsJgFfB-1jGk34xNJiqls8AACmhlrG-BrmFZvuqf2wBRmKQEAAwIAA20AAz0E)

> 设平面区域 $D=\left\{(x,y)\left|0\le y\le\frac{\sqrt{x^2-1}}{x^2},\ \sqrt{2}\le x\le2\right.\right\}$，求：
>
> (1) $D$ 的面积；
>
> (2) $D$ 绕 $x$ 轴旋转一周所成旋转体的体积。

这三题放一起讲。这三题都是没乘 $2\pi$，有一个很严肃的问题，对于这类题现在统一用二重积分去做，不要再用一维的公式了，这几题都是一维和二维的公式搞混了。

![10.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9tq0zGmhSvlNHWgYz6tXJQn1MFSVAACmxlrG-BrmFZTjuju7Rok0wEAAwIAA3gAAz0E)

> 曲线 $y=x^2$ 从点 $(1,1)$ 到点 $(2,4)$ 的一段弧绕 $y$ 轴旋转一周所得旋转体的侧面积为 ______。

想当然直接写 $1$，而不是代入计算。

## 张宇 1000 基础 2 刷第 11 章

![11.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB9xq0zJUuPE6tuVeLIKBnPLO9DuTGgACnRlrG-BrmFY05-I8LPQ5swEAAwIAA20AAz0E)

> 设 $f(x)=\int_x^{x+1}\sin u^2\,du$，证明：当 $x>0$ 时，有 $|f(x)|\le\frac{1}{x}$。

感觉这个不会做不是我的问题。换元然后分部积分，对于这类题算是一个可以总结的通法。

## 张宇 1000 基础 2 刷第 12 章

![12.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB91q0zLxQtvKTlS5qFw1kJiHo8bklwACnhlrG-BrmFZGjBheZRVAnQEAAwIAA3gAAz0E)

> 边长为 $a$ 的正方形平板置于水面下，且一个顶点与水面相齐，其中一条对角线与水面垂直，如图所示。记水的密度为 $\rho$，重力加速度为 $g$，则其一侧所受的静水压力为 ______。
>
> - [图示] 正方形平板的一个顶点与水面（虚线）相切，一条对角线竖直，四条边均标 $a$。
>
> 将地面上质量为 $1$ 的物体铅直向上举高，记地球半径为 $R$，质量为[?]

对于这类题，需要注意，我建系之后，是 $x_2-x_1$，而不是 $f_2-f_1$。做的时候就感觉不对劲了，因为要保持一个东西是一样的。对于这道题也就是保持 $y$ 是一样的额，那么是 $x_2-x_1$。

![12.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB95q0zMmIZLK0Np4JDm-Sow3wGgQBAACnxlrG-BrmFYdyLP18Bpn5gEAAwIAA3gAAz0E)

> 在一个高为 $1\,\mathrm{m}$ 的圆柱形容器内储存某种液体，并将容器横放。底面圆的方程为 $x^2+y^2=1$（单位：$\mathrm{m}$）. 如果容器内存满了液体后，以 $0.2\,\mathrm{m}^3/\mathrm{min}$ 的速率将液体从容器顶端抽出。
>
> (1) 当液面在 $y=0$ 时，求液面下降的速率；
>
> (2) 如果 $1\,\mathrm{m}^3$ 液体所受重力为 $1\,\mathrm{N}$，求抽全部液体需做多少功？

对于这道题，知道要去表达 $V$ 的体积，但是没想到用变限积分的形式去表达，所以做起来非常的困难。

![12.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB99q0zM4HQblFnBM9WlU2t99XuCrMQACoBlrG-BrmFaACkSKGhG0DAEAAwIAA3gAAz0E)

> 设一单位质量细杆的长为 1，$G$ 为引力常数。当质量为 $a$ 的质点在细杆延长线上距杆右端点的 $\frac{1}{2}$ 处移至 $\frac{1}{3}$ 处时，引力做功大小为（ ）.
>
> - A. $Ga\ln\frac{4}{3}$
> - B. $Ga\ln\frac{5}{3}$
> - C. $Ga\ln 2$
> - D. $Ga\ln 3$

没做。稳扎稳打分析即可，先算引力再算做功

## 张宇 1000 基础 2 刷第 13 章

![13.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Bq0zNbfhJdvJawkk-kaDY5RWJJxQACoRlrG-BrmFaRYdgRipDHvwEAAwIAA20AAz0E)

> 设 $f\left(x+y,\frac{x}{y}\right)=x^2-xy+y^2$，则 $f'_x(x,y)=$ ______.
>
> 设函数 $f(x,y)=\sqrt{|xy|}$，求 $\frac{\partial[f(x,y)]}{\partial x}$.

第 8 题一下没想出来怎么做，所以跳了。事实上直接令 $uv$ 即可。

第 9 题其实终于理解怎么做了，但是没有考虑完全（也就是对于 y 的讨论）

![13.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Fq0zOgdlYfHh-wJ4_XRsHM-OkP9AACohlrG-BrmFZvnSDmnaS0iAEAAwIAA3gAAz0E)

> 设函数 $f(u,v)$ 具有二阶连续偏导数，函数 $g(x,y)=xy-f\left(\frac{y}{x},\frac{x}{y}\right)$，求 $x^2\frac{\partial^2 g}{\partial x^2}+2xy\frac{\partial^2 g}{\partial x\partial y}+y^2\frac{\partial^2 g}{\partial y^2}$.

直接跳了。

![13.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Jq0zPOH-1zK7clR7pLbx4kvMtppgACoxlrG-BrmFa_yEu7og74cgEAAwIAA3gAAz0E)

> 设 $f(x,y)$ 在有界闭区域 $D$ 上连续，在 $D$ 内有一阶偏导数。若 $f(x,y)$ 在 $D$ 的边界 $\partial D$ 上的值均为 0，且 $\frac{\partial[f(x,y)]}{\partial x}+\frac{\partial[f(x,y)]}{\partial y}=f(x,y)$，则 $f(x,y)$（ ）.
>
> - A. 在 $D$ 内有正的最大值
> - B. 在 $D$ 内有负的最小值
> - C. 只在 $D$ 的边界 $\partial D$ 上取到最大值
> - D. 在 $D$ 的边界 $\partial D$ 上可以取到最小值
>
> 设 $f(x,y)$ 在平面有界闭区域 $D$ 上具有二阶连续偏导数，且满足 $\frac{\partial^2 f}{\partial x\partial y}>0$ 与 $\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=0$，则（ ）.
>
> - A. $f(x,y)$ 的最小值点和最大值点都在 $D$ 的内部
> - B. $f(x,y)$ 的最小值点和最大值点都在 $D$ 的边界上
> - C. $f(x,y)$ 的最小值点在 $D$ 的内部，最大值点在 $D$ 的边界上
> - D. $f(x,y)$ 的最大值点在 $D$ 的内部，最小值点在 $D$ 的边界上

第 18 题不会做。全设为 $0$ 即可。感觉这道题主要是语文阅读理解，这道题一定要注意是 D。

第 19 题属于低级错误，做出来了但是选项选错了。

## 张宇 1000 基础 2 刷第 14 章

![14.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Nq0zPvXOPl-MBDq1R0TWl3w4JFLQACpRlrG-BrmFaAWh7_JfgIyQEAAwIAA3gAAz0E)

> 已知曲线 $L$ 的极坐标方程为 $r=\sin 3\theta\left(0\le\theta\le\frac{\pi}{3}\right)$，$D$ 为曲线 $L$ 围成的区域，则 $\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y=$ ______.

本题错误原因在理解错 $x=r\cos\theta$，应该直接算，而不是将 $r(\theta)$ 代入。对于这类题应该是二重积分的时候不用代，对于一重的时候要。

![14.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Rq0zQIEzjavx7gpmh4nVA3tY3VBAACphlrG-BrmFYJOnYxIwAB_C4BAAMCAAN4AAM9BA)

> 计算二重积分 $\iint_D\sqrt{1-x^2-y^2}\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\,|\,x^2+y^2\le y\}$

犯了一个经典的错误，标准的零分，拆根号的时候要注意正负号。

![14.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Vq0zQ4m6ynw8U07xChcvsfP87oyQACpxlrG-BrmFaECxWmo-zKsAEAAwIAA3gAAz0E)

> 计算 $\iint_D f(x,y)\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\,|\,x^2+y^2\ge 2x\}$，$f(x,y)=\begin{cases}y,&1\le x\le 2,\ 0\le y\le x,\\0,&\text{其他}.\end{cases}$
>
> 设平面区域 $D=\{(x,y)\,|\,x+y\le 1,\ x\ge 0,\ y\ge 0\}$，计算 $\iint_D\frac{e^{-(x+y)}}{\sqrt{xy}}\,\mathrm{d}\sigma$.

这两题都还没写，直接跳了先。

![14.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-Zq0zRqSnp57_jpYuchu0PYGZFTSAACqBlrG-BrmFb_N2Erq_ueKQEAAwIAA3gAAz0E)

> 计算 $I=\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 是 $x^2+y^2\le a^2$ 和 $\left(x-\frac{a}{2}\right)^2+y^2\ge\frac{a^2}{4}$ 的公共部分，$a>0$.
>
> 计算 $\iint_D\sqrt{\frac{1-x^2-y^2}{1+x^2+y^2}}\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 为圆 $x^2+y^2=1$ 所包围的在第一象限内的区域。

第 23 题最后一小步错了，$I_1-I_2$ 减错误。

第 24 题则是整体代换后，反而漏了原本的 $u$。

这两题都属于非常低级的错误。

## 张宇 1000 基础 2 刷第 15 章

![15.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-dq0zSCTBrSrC1CYAbAVfjktx_lpgACqRlrG-BrmFZSKz_HirfLTQEAAwIAA3gAAz0E)

> (2) 求曲线 $y(x)$ 的斜渐近线。
>
> 以 $yOz$ 面上的平面曲线段 $y=f(z)(z\ge 0)$ 绕 $z$ 轴旋转一周所成旋转曲面与 $xOy$ 面围成一个无上盖容器（见图），现以 $3\,\mathrm{cm}^3/\mathrm{s}$ 的速率把水注入容器内，水面的面积以 $\pi\,\mathrm{cm}^2/\mathrm{s}$ 的速率增大。已知容器底面积为 $16\pi\,\mathrm{cm}^2$，求曲线 $y=f(z)$ 的方程。
>
> - [图示] 旋转容器示意图，竖轴为 $z$，水平轴为 $y$ 与 $x$，图中标出原点 $O$ 及母线 $y=f(z)$

本题没有理解具体的含义，实则稳扎稳打一个个分析就可以分析出来（也就是经典怕了，而不是不会做）。

![15.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-hq0zSUCyniqN0J_kczrLglprpYMAACqhlrG-BrmFYHOb-ARqbi9QEAAwIAA3gAAz0E)

> 设 $\varphi(x)$ 为连续函数，$|\varphi(x)|\le k$（$k$ 为常数），求微分方程 $\frac{\mathrm{d}y}{\mathrm{d}x}+y=\varphi(x)$ 满足初始条件 $y(0)=0$ 的特解 $y(x)$，并证明当 $x\ge 0$ 时，有 $|y(x)|\le k(1-e^{-x})$.

这道题其实是对的，但是对的比较模糊，我不知道为什么可以证明出 $C=-1$。细想之下，发现可以把通解公式变为变限积分的形式，从而轻松求解出来。

![15.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-lq0zSjXc506QABwfH8r2Fv6wrklTQAAqsZaxvga5hWMZo7wZekct8BAAMCAAN4AAM9BA)

> 已知某常系数齐次线性微分方程的通解为 $y=C_1+e^x(C_2\cos 2x+C_3\sin 2x)$，则该微分方程为 ______.

属于低级错误，想当然以为 $a\pm2i$，没有 $a$。

![15.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-pq0zS3hcZQMFK6vWBFbs8TRJndvwACrBlrG-BrmFafyq8nELMr4AEAAwIAA20AAz0E)

> 求微分方程 $y''-2y'+y=2(3x^2-2)e^x$ 的通解。

属于低级错误。本题错误原因在算出来所有东西后往回带（即带 $y''$ 之类的时候），$-2y'$ 的中间一部没有 $\times2$。

## 张宇 1000 基础 2 刷线代第 1 章

![1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-tq0zUhgIsxhlIEVGEnpJTPzYt7JAACrRlrG-BrmFZ6CLaB-F4DWQEAAwIAA3gAAz0E)

> 设 $n$ 阶行列式 $D_n=\begin{vmatrix}2&1&0&\cdots&0\\1&2&1&\cdots&0\\0&1&2&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&2\end{vmatrix}$，则（ ）.
>
> - A. $D_1,D_2,\cdots,D_n$ 为等比数列
> - B. $D_1,D_2,\cdots,D_n$ 为等差数列
> - C. $D_n$ 为范德蒙德行列式
> - D. $D_n=n$

本题错选为 A，为经验主义（按照经验感觉是 A，然后没去算）

## 张宇 1000 基础 2 刷线代第 2 章

![2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-xq0zUxJYooCsCVk3diu6vmFQMWYAACrhlrG-BrmFZqOgN3-MefvgEAAwIAA20AAz0E)

> 设 $A,B$ 为 3 阶矩阵，且 $AB=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}$，则必有（ ）.
>
> - A. 互换矩阵 $A^{-1}$ 的第 1,2 行得矩阵 $B$
> - B. 互换矩阵 $A^{-1}$ 的第 1,2 列得矩阵 $B^{-1}$
> - C. 互换矩阵 $A$ 的第 1,2 行得矩阵 $B^{-1}$
> - D. 互换矩阵 $A$ 的第 1,2 列得矩阵 $B^{-1}$

本题错选为 B，属于低级错误，和 1 刷时情况类似，也是只考虑了一边，然后没看清楚题目。

## 张宇 1000 基础 2 刷线代第 4 章

![4.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-1q0zVEiLXL4n6SETAZ9eOgwJI8ugACrxlrG-BrmFY404qEWP8jaAEAAwIAA3gAAz0E)

> 设 $A$ 为 $n(n>2)$ 阶方阵，$r(A^*)=1$，$\alpha_1,\alpha_2$ 是非齐次线性方程组 $Ax=b$ 的两个不同解，$k$ 为任意常数，则方程组 $Ax=b$ 的通解为（ ）.
>
> - A. $(k-1)\alpha_1+k\alpha_2$
> - B. $(k-1)\alpha_1-k\alpha_2$
> - C. $(k+1)\alpha_1+k\alpha_2$
> - D. $(k+1)\alpha_1-k\alpha_2$

本题错选为 B。辨析一下 B 和 D。齐次通解 + 特解。想错了，想着如果是 D 的话展开可能会抵消。但是事实上如果把 $B$ 代入原方程，那么就会解出来 $-b$。

![4.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-5q0zVUlHfFykVRFHgO-N1v00CokQACsBlrG-BrmFbWhbpsP5KJDgEAAwIAA3gAAz0E)

> 设齐次线性方程组（Ⅰ）$\begin{cases}x_1+3x_3+5x_4=0,\\x_1-x_2-2x_3+2x_4=0,\\2x_1-x_2+x_3+3x_4=0,\end{cases}$ 在线性方程组（Ⅰ）的基础上增添一个方程 $ax_1+bx_2+cx_3+dx_4=0$，得（Ⅱ）$\begin{cases}x_1+3x_3+5x_4=0,\\x_1-x_2-2x_3+2x_4=0,\\2x_1-x_2+x_3+3x_4=0,\\ax_1+bx_2+cx_3+dx_4=0.\end{cases}$ 问 $a,b,c,d$ 满足什么条件时，方程组（Ⅰ），（Ⅱ）是同解方程组？并求出此时方程组（Ⅱ）的通解。

属于低级错误，$2+(-5)=-3\ne-7$。

## 张宇 1000 基础 2 刷线代第 5 章

![5.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB-9q0zVjMbMU_jIGg63dD1tzZcYyCwACsRlrG-BrmFagyqdguAn0LgEAAwIAA3gAAz0E)

> 已知 $A$ 为 2 阶方阵，可逆矩阵 $P=[\alpha,\beta]$ 使得 $P^{-1}AP=\begin{bmatrix}1&0\\0&2\end{bmatrix}$，$Q=[\beta,\alpha]$，则 $Q^{-1}A^*Q=$ ______.

$P^{-1}A^{-1}P=\lambda^{-1}\ne\lambda$。

![5.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Bq0zV0Np8KjcRyN-Pj0ARF834T6QACshlrG-BrmFbekkFt905hYAEAAwIAA3gAAz0E)

> (1) 设 $A,B$ 是 $n$ 阶矩阵，$A$ 有特征值 $\lambda=1,2,\cdots,n$. 证明 $AB$ 和 $BA$ 有相同的特征值且 $AB\sim BA$.
>
> (2) 对一般的 $n$ 阶矩阵 $A,B$，是否必有 $AB\sim BA$？说明理由。

没有想到从特征值的角度走。

![5.17](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Fq0zWFqNTbJg-eIAIjGA25jfDiVAACsxlrG-BrmFaw6DbUv6kdSgEAAwIAA3gAAz0E)

> 已知 $A$ 是 3 阶矩阵，$r(A)=1$，则 $\lambda=0$ 是 $A$ 的特征值，其重数（ ）.
>
> - A. 必为 2
> - B. 可能为 2 或 3
> - C. 可能为 1 或 2
> - D. 可能为 1,2 或 3

本题错选为 C。显然，$r(A)=1$，意味着重数至少为 $2$，这里是脑子抽了没有去验算。主要是要记住一下特例。

## 张宇 1000 基础 2 刷线代第 6 章

![6.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Jq0zWZ18-zJ7HeaUpnqskCaE2jmwACtBlrG-BrmFYb2pzm_P7l9gEAAwIAA3gAAz0E)

> 已知二次型 $f(x_1,x_2,x_3)=ax_1^2+ax_2^2+ax_3^2+2x_1x_2+2x_1x_3-2x_2x_3$ 对应的矩阵为 $A$，且其在正交变换 $x=Qy$ 下的标准形为 $y_1^2+y_2^2-2y_3^2$.
>
> (1) 求 $a$ 的值和正交矩阵 $Q$.
>
> (2) 设矩阵 $B=\begin{bmatrix}1&0&0\\c&b&0\\-1&-1&1\end{bmatrix}$，若 $A$ 与 $B$ 相似，求 $b,c$ 的值。在此情形下，是否存在正交矩阵 $P$，[?]

本题不想做，跳了。这里等略清醒的时候再看看。

![6.11](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Nq0zW1aWnKq6WDI-aNKRjZtKO3gQACtRlrG-BrmFZfUm-nQfbGcQEAAwIAA3gAAz0E)

> 设 $A$ 为 $n$ 阶方阵，有下列结论：
>
> ① 若 $A$ 的全部顺序主子式为正，则 $A$ 正定；
>
> ② 若 $A$ 相似于对角矩阵 $\Lambda$，则 $A$ 与 $\Lambda$ 合同；
>
> ③ 若 $A$ 与正定矩阵合同，则 $A$ 为正定矩阵。
>
> 则正确结论的个数为（ ）.
>
> - A. 0
> - B. 1
> - C. 2
> - D. 3
>
> 已知 $A$ 为 3 阶矩阵，$E$ 为 3 阶单位矩阵，且 $(aE+A)^2=\begin{bmatrix}1&0&1\\0&2&0\\1&0&1\end{bmatrix}$，$\mathrm{tr}(A)=2\sqrt{2}-3a$，$a$ 为常数。
>
> (1) 求矩阵 $A$；
>
> (2) 若 $A$ 正定，求 $a$ 的取值范围。

第 11 题错选为 C。需要注意实对称

第 12 题感觉非常神秘，我没想到怎么做啊！欸，好像是对的，只是这个 $a$ 不会被解出来罢了。这个做出来算出来 $A+aE$ 的特征值，而不是 $A$ 的特征值，前者的特征值算出来正好是 $0$，$\sqrt{2}$，$\sqrt{2}$。本质上是不自信带来的。
这道题的精彩之处是利用变形矩阵与原矩阵特征值和特征向量的关系。
还有就是，这类题似乎用 $Q$ 去算可以简便计算（毕竟 $Q$ 转置就是 $Q$ 的逆）

![6.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Rq0zXJ_sZQrIwOpGVJKrBWn3Au-AACthlrG-BrmFbGVl3NwYVO6AEAAwIAA3gAAz0E)

> 已知 $A=\begin{bmatrix}3&2&1\\2&2&1\\1&1&1\end{bmatrix}$，$\Lambda=\begin{bmatrix}2&0&0\\0&3&0\\0&0&1\end{bmatrix}$，求可逆矩阵 $C$，使得 $C^{\mathrm{T}}AC=\Lambda$.

没见过这类题，但是细想一下，其实就是配方法。但是需要两次配方法，这道题回头得再看看。

![6.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Vq0zXa_hZ-HSHBDknxPgalWGWIpQACtxlrG-BrmFYGWQAB-sUWvLcBAAMCAAN4AAM9BA)

> (1) 设二次型 $f(x,y,z)=y^2+2xz$，用正交变换 $x=Qy$ 将其化为标准形，并写出 $Q$；
>
> (2) 求函数 $g(x,y,z)=\frac{y^2+2xz}{x^2+y^2+z^2}(x^2+y^2+z^2\ne 0)$ 的最大值，并求出一个最大值点。

关于这类题得研究一下这种题的最大值点怎么解。实际上有个等价变化，然后取最大即可。这个什么 $uvw$，$-w\le w$ 也只是单纯因为可以凑出来。

![6.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_Zq0zXsZrBowBYyvd4Jg9mgSlC8owACuBlrG-BrmFYEEVxxZdNczwEAAwIAA3gAAz0E)

> 设 $A=\begin{bmatrix}1&1&1&\cdots&1\\1&2&3&\cdots&s\\1&2^2&3^2&\cdots&s^2\\\vdots&\vdots&\vdots&&\vdots\\1&2^{n-1}&3^{n-1}&\cdots&s^{n-1}\end{bmatrix}$，其中 $s,n$ 是正整数，证明 $A^{\mathrm{T}}A$ 是实对称矩阵，并就整数 $s,n$ 的情况讨论矩阵 $A^{\mathrm{T}}A$ 的正定性。

本题属于是脑子不清醒的产物，被意淫的答案影响了。事实上很简单。
