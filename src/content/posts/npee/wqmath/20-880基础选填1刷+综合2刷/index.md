---
title: 880 基础选填 1 刷 + 综合 2 刷
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 880 基础选填 1 刷 + 综合 2 刷
category: 考研
series: NPEE
seriesOrder: 7.2
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
## 880 基础 1 刷选填第 2 章

可以注意一下 (1+2/n)^(n)

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCh5q6yt7dg-5oXwSEtU_gLsuecafHgAC0xVrGyUXYFfAqaD4HZSBfAEAAwIAA3cAAz0E)

这道题用特值法做对的，可以注意一下答案是用泰勒公式做的。

![20](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCh9q6ywPJazruE-opEeLXaW5ouYipQAC1RVrGyUXYFdjO-SP8t1ubwEAAwIAA3cAAz0E)

这道题做对了，不过可以注意一下 C 可以用振荡函数当特例。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiFq6zgI_2bk8huXbIZWKnZuwyukzAAC_xVrGyUXYFf6qUGDIB0PHAEAAwIAA3cAAz0E)

低级错误了，这类题应该很熟练才对。

不能想当然把前面那项直接改为 0，而是要展开分析。

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiBq6ze3BkTbZk0Wl_9dUWQuN3uw0QAC_hVrGyUXYFcaSuZI_i79mAEAAwIAA3kAAz0E)

正负。

![15](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiJq7FK7u4ZPHdeosXRDQwcVFhz1hQACfBdrG2nWYFeRygz6HZm2TQEAAwIAA3gAAz0E)

这道题错在以为左侧的形式是 f'(x^3)，但事实上这道题的左侧还没有对里面求导。

![16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiNq7FMAAeRCChdGO7tYX8sSwntWb9YAAn0Xaxtp1mBXljlHZo79OVABAAMCAAN5AAM9BA)

这道题是对的，但是可以注意简便方法，时刻记住：

(1+x)^n 的麦克劳林展开，这个总是忘记。

![26](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCi5q7cGKEL-lBOz5beUtjCe-oyUsUwAC9BlrG2nWcFdlOOLjArx57QEAAwIAA3cAAz0E)

后推前很容易用做题法理解，前推后可以这么理解：

就是说只能保证从 1 出发的那个斜率是单调递增的，但是如果凹凸性变化比斜率变化更剧烈，那么就不一定是凹。

比如说 x^3(1-x) 就不满足。

在高等数学与数学分析中，函数 $f(x)$ 在区间 $I$ 上是严格凹的（下凸），其充要条件为三点斜率单调性定理（即“三弦斜率递增性质”）：

对区间内任意满足 $x_1 < x_2 < x_3$ 的三点，有：$$\frac{f(x_2) - f(x_1)}{x_2 - x_1} < \frac{f(x_3) - f(x_1)}{x_3 - x_1} < \frac{f(x_3) - f(x_2)}{x_3 - x_2}$$

这个性质我突然一下子想起来了，很重要很重要，因为 25 年的证明题貌似考的就是这玩意。

拓宽一下思路。

![30](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCi9q7cKQp9NNKkIuStFzzqVRUo2PLAAC9RlrG2nWcFeL5Sp8iIZQNQEAAwIAA3cAAz0E)

错选为 D。求曲率圆啥的没什么问题，二次泰勒，没除以 2。

## 880 综合 2 刷第 2 章

对于带绝对值的参数方程，可以注意以下几类解法，不要一条路走到死：

1. 转换为原本的方程，常用于很显然可以转换的时候，如果带三角函数或者带根式的时候，慎重
2. 分类讨论后，利用参数方程求到的性质（尤其注意，1 是反套路，但是反套路做多了，正套路别不会了）

## 880 综合 2 刷第 3 章

![3.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADV2rDhjYzqcZd65_KxjHbbBi0eq_bAAKCEmsbgF8gVg3xNiPfVPiYAQADAgADeAADPQQ)

这道题一开始没做出来，不过后面冷静下来了，也是想出来要怎么做。也就是先把 $f(x)$ 画出来，然后再去讨论 $F(x)$。但是，我分别讨论 $x>e$ 和 $x<e$ 之后，画出 $f(x)$ 图像，然后就直接选了 B。显然 $f(x)$ 连续但不可导，所以 $F(x)$ 是可导的。

对于结论 $F(x)$ 可不可导，如果 $f(x)$ 是连续的，或者有可去间断点，那么 $F(x)$ 可导；如果 $f(x)$ 有跳跃间断点，那么 $F(x)$ 连续但不可导。

这道题结论的应用出现了很大的问题。

![3.1.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADWGrDhzrc-9wBN3_XonPlWL-Vy6UmAAKDEmsbgF8gVmcU5r67TvqpAQADAgADeAADPQQ)

本题完全没有思路。

这道题总结两个点，第一是如果出现了米奇妙妙 $\frac{1}{2}$，可以从对 $x^2$ 从 $0$ 到 $1$ 的积分思考，第二是数形结合，这道题应该利用函数的凹凸性绘图来解答。

![3.1.13](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADWWrDh4I5O3_cn9QGyS9Q49laHJNyAAKEEmsbgF8gVtH9T4LFbwO1AQADAgADeAADPQQ)

本题没什么思路。碰到这类题，应该从奇偶性下手，将原式切分为 $-b$ 到 $0$ 进行讨论，再利用对称性，就迎刃而解了。

![3.1.14](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADWmrDk2E76_hTBddf5LXZyVC3DTZjAAKrEmsbgF8gVtXMYTLHy2zzAQADAgADeAADPQQ)

本题依旧没什么思路。然而这道题不应该。使用求 $A$ 的面积的公式，也就是 $\frac{1}{2}\int_0^{\pi}r^2\,\mathrm{d}\theta$。没反应过来，其实也可以利用二重积分去算，但是对这类题确实太少见了。

然而在知道这个去化简之后，还是有点不会做。一定要记住，无论对什么区间划分，都是划分为 n 份。所以最后应该是：

$$
\frac{b-a}{n}\left(a+\frac{(b-a)i}{n}\right)
$$

遇到不会的时候，一定要把这个式子套上去看。

![3.1.16](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADW2rDlWqjeTiZR8yRm51X9uLHX_UtAALEEmsbgF8gVnlGziXpEf03AQADAgADeAADPQQ)

错选为 C，属于低级错误。这道题第一步的时候换元法，抄成了 $s+x/t=u$。

![3.1.21](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADXGrDmRRcqP42gyJn5rZV4_rCBa_5AALIEmsbgF8gVhtBCKs_SgjzAQADAgADeAADPQQ)

错选为 B。属于低级错误，$x^{1-p}$ 下去的时候，$x^p$ 不应该消掉。

![3.2.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADXWrDnqPXWEeugZlsz_J0OvaiAQO5AALREmsbgF8gVgehAAHzTIRtVAEAAwIAA3gAAz0E)

答案是对的，但是方法是错的。这道题不可以把德塔 x 丢进去。正确的解法应该是拆，然后换元前面的。

![3.2.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADXmrDn4FKiLMOC0ihwzlLgVqLfOc_AALSEmsbgF8gVg2TZ368QSE5AQADAgADeAADPQQ)

很多东西不明确。第一是极坐标的面积公式，其实依旧可以用二重积分去推；第二是积分的定义域，定义域一定要看清楚是 $0$ 到 $\frac{\pi}{4}$，而不是 $0$ 到 $\frac{\pi}{2}$。

![3.2.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADX2rDoAfmQvVzY3BCnWfD-NFhDUq3AALTEmsbgF8gVkeSivyjazEtAQADAgADeAADPQQ)

其实这些题目之前都做过，但是还是不会做。这道题应该用换元法做，令 $x=r\cos\theta$，$y=r\sin\theta$。主要是破题口问题，计算要小心，这道题计算也不好算。

![3.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADYGrDosaZwh8tZ9AC0tuotm60emyMAALdEmsbgF8gVtDKTMD4TlBMAQADAgADeAADPQQ)

这道题和第 5 题类似啊，都是凑出来一个 $p^2$，不同的是，这道题我想复杂了，硬是把那串式子给化简了，但是事实上不用化简直接算就完事了。

![3.2.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADYWrDqxP8d45EoN2MJpRoF2fdJA-DAALrEmsbgF8gVufA39x6zm4aAQADAgADbQADPQQ)

这道题做的是对的，但是需要注意方法。对于反常积分而言，不可以直接求导，而是应该利用取一点分开的方法讨论，这个方法在讨论 $p$ 积分那里比较常见，在这里也别忘了。

![3.2.9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADYmrD2qKnOEGwEXIlMW5tlUQ9frGpAAITFGsbgF8gVj1HvFU7Umm5AQADAgADeAADPQQ)

这道题大体做的是对的，但是，在求变限积分导数的时候，对 $-x^2$ 求导，求出来是 $-2x$，结果没有和前面的 $\frac{1}{2}$ 运算，就带着这个 $2$ 一直算到了最后。

![3.3.10](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADyWrE_Ti5cP2yeOazw_qysbVLxszYAAJJFGsbxNooVreaMixFSRxdAQADAgADbQADPQQ)

思路是对的，但是算错了，这道题草稿太乱了，也不知道哪算错了，再算一遍看看。（答案是 $1$ 我算出来 $2$）

找到了问题，$x^2$ 乘 $x$ 之后，求导还是按照 $x^2$ 求的。

以及最后一步 $\frac{x}{\sin x}$ 直接写成 $0$ 了。

![3.3.10 订正](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQADymrE_7e1yiINzXTkcC0U5qsrvo8NAAJPFGsbxNooVhFPq1-Wukz9AQADAgADeQADPQQ)

![3.3.22](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARJqxhKAC09nkEpCNUhNKx3dEcmKngACaxNrGz_BMFawMsCylzL1sQEAAwIAA3gAAz0E)

本题没什么思路，一刷的时候使用的是把 $\tan x$ 变成 $\sec x$，但是现在做不出来了。

原来的方法是很容易可以解出来 $a_n+a_{n-2}=\frac{1}{n-1}$，然后就不会做了。

再后面，显然 $a_n<a_{n-1}$，所以只要把 $a_n$ 替换为 $a_{n-2}$ 就可以做出来了，另一侧则是利用 $a_n$ 和 $a_{n-2}$ 的关系。

瞄了一眼答案，是用换元法，就迎刃而解了（但是做的时候抄漏了 $t^2$ 的 $2$）

![3.3.22 订](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARNqxhNDUJj3ZLbKmI_-XbWcNlrnkAACbhNrGz_BMFaJUtby0MJEOgEAAwIAA3kAAz0E)

![3.3.23](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARRqxhS7aN0sV-Usm4D0E07qmsnqtgACchNrGz_BMFYC5h-0_WlqLAEAAwIAA20AAz0E)

这道题的第一问不适合用华里士公式（循环论证了），而第二问则是没想明白要怎么证明 $a_n$ 的单调性，事实上只要做差相减即可。

并且，这道题答案给的复杂了，可以先用区间再现消去 $x$，然后就可以很轻松的证明了（这也是为什么答案直接一上来就把 $\sin x$ 凑进去的原因）。

![3.3.25](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARVqxhnQ-nnBByDjC1dAclPuwKdeKwACjBNrGz_BMFY25Imi7TVT5AEAAwIAA3gAAz0E)

这道题其实有思路，但是最后没做出来，一开始比分部积分是对的，然后就不会做了。

其实原因在于没有考虑 $+1-1$ 的操作。

![3.2.32](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARZqxiiWwU4ZDEbkZBINSyf7kVBuYAACoBNrGz_BMFblaEl3saC12QEAAwIAA3gAAz0E)

本题没想出来怎么做（第一问）

答案是利用区间再现。

所以，出现米奇妙妙 $\frac{1}{2}$ 的时候，可以从两方面考虑，一方面是 $x$ 从 $0$ 到 $1$ 的积分，第二是区间再现（尤其是三角函数和周期函数）

![3.2.33](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARdqxjFhB3JIe7AQJn9qNWm72Z0F4AAC0BNrGz_BMFbac5BkQwKAngEAAwIAA3gAAz0E)

这道题做的是对的，利用的是换元法。

不过这道题还可以用拉格朗日中值定理，值得注意。

![3.2.35](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARhqxjKFTl0RyImU-uaMHVZTf4JPVAAC0RNrGz_BMFYR9hzivrDmDAEAAwIAA3gAAz0E)

值得注意的低级错误，最后一步算错了。这道题最后一步算出来是 $0$ 到 $\sqrt{3}$，对根号下的 $4-x^2$ 积分，此时可以利用几何法，但是要注意并不是 $\frac{2}{3}\pi$。

![3.2.36](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARlqxjMbJErozudfKAcIpmLslYVsFAAC1RNrGz_BMFaC1_EGHzoX3QEAAwIAA3gAAz0E)

本题单纯没算完，计算量太大了（三角函数的 $4$ 次方，并且还是 $\frac{\pi}{4}$ 到 $\frac{\pi}{2}$），这道题可以采用直角坐标系的方法来算。

![3.2.37](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACARpqxjMxd37LW4ufrc9SyoUR159JfgAC1hNrGz_BMFanNlM1SYi_hQEAAwIAA3gAAz0E)

注意定义域，$x$ 的定义域是 $0$ 到 $\pi$，而没有 $\pi$ 到 $2\pi$，以此类推。

## 880 综合 2 刷第 4 章

![4.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_dq0zwvUP26gb2FGnR52h0ibe-BGAACzxlrG-BrmFbZ17Kmb3AEZQEAAwIAA3gAAz0E)

本题错选为 D，是以为要考虑 $x$ 和 $y$ 单独的路径。

对二重积分极限的定义理解错误。

$$
\lim_{\substack{x \to 0 \\ y \to 0}} \frac{f(x,y)}{x^2 + y^2} = 1
$$

这是二重极限，在多元微积分的定义里，二重极限写作：

$$
\lim_{(x,y) \to (0,0)} g(x,y) = A
$$

它的严格 $\varepsilon$-$\delta$ 定义是：对于任意的 $\varepsilon > 0$，都存在 $\delta > 0$，使得只要距离满足：

$$
0 < \sqrt{x^2 + y^2} < \delta
$$

就有 $|g(x,y) - A| < \varepsilon$。

而不是偏导数所想的只对 $x$ 或 $y$ 有要求。

![4.2.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_hq003ideUXK8Xu7HB1jNzhK-QRPQAC8BlrG-BrmFZM7xafYrovhQEAAwIAA3gAAz0E)

经典的错误，标准的零分，$x^2+y^2$ 套到平房里，又想当然没有加一整个的平方，从而引起错误。

![4.3.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_lq004LHDyQyArXRXaveOQ307fq8gAC8RlrG-BrmFZ2KOzqSdcK8gEAAwIAA3gAAz0E)

计算量奇大无比，最后的问题是 $\frac{\mathrm{d}z}{\mathrm{d}t}$ 算错了，这个应该是 $\frac{1}{2}$，而我当成 $1$ 算了，所以最后错了。

最后应该是 $\left(-6-\frac{1}{2}\right)/4$，我自己是把 $-\frac{1}{2}$ 代成 $1$ 算了。

![4.3.4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACB_tq01dmsvSLm6h1eUcnSSDMGEJhOAACCxprG-BrmFbCS2iJ2a-YZAEAAwIAA3gAAz0E)

漏解。

![4.3.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDFq1Khfotb6LjYd66URk28hWUPErgACgRJrG1-fqVauNliWVW86qQEAAwIAA3gAAz0E)

这道题确实有说法，计算出来了 3 个式子之后，会发现前两个只有 $0$ 解。由于 $0$ 解不满足第 3 个式子，所以前两个式子线性相关！

这个思想的迁移确实非常精彩！

![4.3.18](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDJq1Lq9BlwAATUtQLvldTHlwdnu3loAAr0Saxtfn6lW7rGsIlCIX1sBAAMCAAN4AAM9BA)

这道题我就觉得没必要继续算下去了，思路掌握了就可以。到原点的距离公式会设即可。

![4.3.18 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDNq1Lrqy8MN0KMYMVXknKG9pH9qcQACvhJrG1-fqVYor879lGJ94gEAAwIAA3kAAz0E)

![4.3.19](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDVq1LvNarw0I1sHZ1K25ruolpLMnAACwRJrG1-fqVYYkExaaKh1QwEAAwIAA3gAAz0E)

这道题我认为也是没必要去算了，会很神秘。我感觉到了现在这个阶段，我不想二刷 880 的原因可能是我没把握清楚题目难度，或者说我没办法判断这是不是怪偏难。

所以我说我认为策略有点问题，应该先写近些年的真题，然后再来二刷看看。

![4.3.19 解](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCDRq1Lurt7yP6pWpOqvMsQvH_h6UrQACvxJrG1-fqVbm4AtZXKR0ZAEAAwIAA3gAAz0E)

## 880 基础第 5 章选填

![5.1.2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChtq6e2-awQIo9RCR8ezKtm2UQw7ugAC6RhrG3LyUVeQfeWCLfmwTQEAAwIAA3cAAz0E)

本题失去判断力了。

即使这类题并不擅长，但也不能失去判断力。无论如何，都得先判断奇偶性、轮换对称性来化简。

抛开这种情况，再来讨论一下我并不擅长的这类题（也就是假设这道题只有正半边的情况），做题方法如下：

1. 判断 x 和 y 的取值范围
2. 绘制被积函数 = 0 情况的图像
3. 根据 x 和 y 的范围以及该图像向上（或者向外），>0 的时候，占比的范围
4. 实在不行，直接硬算出来

## 880 综合 2 刷第 5 章

![5.1.6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCh1q6fdDgsEkt1CA5hFxa9EdA4E6lQACcxZrGyUXUFde7grHPvU-MwEAAwIAA3cAAz0E)

这道题 1 刷的时候就没做出来，2 刷的时候还是没思路（不过做对了）。原因是什么呢？很简单，惯性思维。

本题并不需要一直去利用奇偶性拆分，而是可以得出 A=0（这个得出来了也选了 C），然后呢，然后就是排除 ABD，显然右侧都不为 0。

同时，本题犯了一个严重的错误，那就是变换 y=-x 轮换，这个操作本身合法，但是得出的信息为 0，直接根据题设代换即可（题目没要求对我这个条件进行讨论），也就是交换 x 和 y，管他合不合法，先换了再说，题设又不要求 f(x,y)=f(y,x)。

![5.1.7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChxq6fSXDZfNGEhDLjTvWWmhNqU2xQACChlrG3LyUVfH2bgSulMkXwEAAwIAA3kAAz0E)

这道题做对了（猜出来的），不过可以注意一下，遇到这类题的时候该怎么思考：

1. 交换积分上限
2. 二重积分的积分中值定理

## 880 基础第 6 章选填

![6.1.1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChhq6H3EINp8uutwDvi9EpaczbmlRQAC-xRrG3LySVfPycUVlKTEIwEAAwIAA3cAAz0E)

感觉被阴了这道题，需要注意 C 是任意常数，所以，这道题应该是 A，而不是 C，因为 C 选项的 C 可以小于 0。

## 880 综合 2 刷第 6 章

![6.1.5](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChlq6d78eDvfbPPlpYW_AAFemrjMQUwAAr4Yaxty8lFX0231jYXQx4IBAAMCAAN3AAM9BA)

这道题做的是对的，不过可以注意一下，λ+μ=1，而不是 1/2。也就是说，应该是之和，而不是 = 其中一个，这个我觉得和初高中的中位线相关。

![6.2.8](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACChpq6d_bGzuEqUKBQLuzS-fp4gpk3gACvxhrG3LyUVfzAxn8htAq0wEAAwIAA3cAAz0E)

这道题也是对的，但我觉得也可以注意一下。

这道题的关键点在于求出 f(x)，但是不一定要利用 f(x)，也可以利用 f(a)。

## 880 基础选填 1 刷第 9 章

![6](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiRq7Lg-gxGQvV7KlWv1bgGFaRgCggACuxRrG2nWaFe8ohoYcMv97AEAAwIAA3cAAz0E)

错选为 A，本题应该选 D。

感觉属于是模型没转换过来，ax+by+c=0，这个 c 指的是常数，而不是变量值，所以不是 A，应该模型变为 D。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiVq7LnNKgNZ-0jdBh-Y1MJslBycCgACvhRrG2nWaFeaKXPjHvO4rwEAAwIAA3cAAz0E)

分析范式问题。

其实这道题想到了分析方法，另 x1a1+x2a2=-y1b1-y2b2，然后移动过来分析。最后的答案应该是 x1a1+x2a2，而不是求出来的解。

## 880 基础选填 1 刷第 10 章

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCiZq7aIvb_cBuWeREwUZ5045Qv-dfgACrRlrG2nWcFeZhVLkhDJ5ygEAAwIAA3cAAz0E)

本题排除了 A 和 C 之后，便无从下手。对于 A 和 C，显然应该是 (n1+n2)/2 作为特解即可。然而通解呢，因为 n1-n2 不能说明和 e1 线性无关，所以舍去。

综上应该选 B。

## 880 综合 2 刷第 10 章

![9](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCi1q7b3N5FpxQ6uzaUjbT4UenBLuEgAC7BlrG2nWcFfFleqsl7u6TwEAAwIAA3cAAz0E)

这道题也是真不会做，A 和 B 很容易排除，C 和 D 只能猜出来一个 C。

不过 C 的意思很明显，就是加一列线性无关的，那肯定不就是秩 +1 吗

![1](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCilq7biemZGzuiSmdn8VL1_fVXE7cgAC4hlrG2nWcFdbssXWBGNIegEAAwIAA3cAAz0E)

本题我的想法是将 A 拆开，然后就不会做了。事实上，按照我的想法继续下去就直接 Ax 就可以了，因为本质上是算 x。

更朴素一点的想法，其实直接 1,1,2,3 凑出来为 b，然后就解出来了。

![2](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCipq7bl23JRCMfs2VkK4vxDu_KycDwAC4xlrG2nWcFeVEBd1kXMplgEAAwIAA3cAAz0E)

这道题属于非常规题，确实没想出来怎么做。

本题本质上是求 x，所以将最终式同时左乘一个 A 的逆即可，然后就解出来了。

![3](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCixq7b1_KwcQFbOtyI2x6SmhGgAB4DUAAusZaxtp1nBXgNW_KFotJ90BAAMCAAN3AAM9BA)

我直接令 k=-1 做，然后肯定是错的。这道题不只是前面 e 的关系，还有后面的，都得考虑。

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCitq7b1cKHiPrtZFLm8ip1kMY41JPgAC6hlrG2nWcFcYPhYct3bAuAEAAwIAA3cAAz0E)

这道题我感觉属于是一下没反应过来：因为只需要把 a 提出去，然后用 λ 做就好了。

## 880 基础选填 1 刷第 11 章

![4](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCidq7aefm-R2x4k5hcRt797dfaw_DQACuxlrG2nWcFe1n9P6eB7l_QEAAwIAA3cAAz0E)

犯了一个经典的错误，标准的零分：

那就是 a 可以被解出来。

这类可以被解出来的，条件比较隐含的，我也错了特别多次，值得注意。

## 880 基础选填 1 刷第 12 章

![7](https://img.attilio.cc/api/cfile/AgACAgUAAyEGAAMBBU78tQACCihq7bK6iXcH6VeC5Pby0w0hA818oAAC0xlrG2nWcFd5wpggZQL6BQEAAwIAA3kAAz0E)

本题 AD 犹豫不决。对于 A，没给 C 是可逆的，所以排除。

## 880 综合 2 刷第 12 章

选择题第 8 题开始就没写了。
