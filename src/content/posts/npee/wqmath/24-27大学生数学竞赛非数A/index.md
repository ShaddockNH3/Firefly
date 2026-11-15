---
title: 27 大学生数学竞赛非数 A
published: 2026-10-01
image: /covers/npee-wqmath.webp
description: 考研冲刺前的总结 —— 错题本（数学） · 27 大学生数学竞赛非数 A
category: 考研
series: NPEE
seriesOrder: 7.24
tags:
  - 总结
track: "错题本"
subject: "数学错题本"
unlisted: true
draft: false
---
$$
\lim_{n\to\infty} \frac{1}{n} \left( \sqrt{1 + \sin\frac{\pi}{3n}} + \sqrt{1 + \sin\frac{2\pi}{3n}} + \cdots + \sqrt{1 + \sin\frac{3n\pi}{3n}} \right) = \frac{12}{\pi}
$$

原题长上面那样，很轻松可以得到答案，但是，我答案算成下面那个了：

$$
\lim_{n\to\infty} \frac{1}{3n} \left( \sqrt{1 + \sin\frac{\pi}{3n}} + \sqrt{1 + \sin\frac{2\pi}{3n}} + \cdots + \sqrt{1 + \sin\frac{3n\pi}{3n}} \right) = \frac{4}{\pi}
$$

事实上，在做这题的时候，我就想到我这道题可能会有问题（因为这类题错了特别多，还没去复盘）。

然后，还真错了。

本质我认为是这样，因为我以前都是只考虑分 n 份的情况，而没有考虑和总结过其他的情况，所以才导致错误。

所以，现在完完整整的辨析所有情况：

## 27 大学生数学竞赛非数 A 情况 1

$$
\lim_{n\to\infty} \frac{1}{n} \left( \sqrt{1 + \sin\frac{1}{n}} + \sqrt{1 + \sin\frac{2}{n}} + \cdots + \sqrt{1 + \sin\frac{n}{n}} \right) = \int_0^1 \sqrt{1 + \sin x} \, dx
$$

$$
\lim_{n\to\infty} \frac{1}{n} \sum_{i=1}^{n} \sqrt{1 + \sin\left(\frac{i}{n}\right)} = \int_0^1 \sqrt{1 + \sin x} \, dx
$$

这是最经典的形式，也就是最最最经典的从 0 到 1 积分，分 n 份，套到式子里：

$$
\lim_{n\to\infty} \sum_{i=1}^{tn} f\left( a + \frac{(b-a)i}{tn} \right) \cdot \frac{b-a}{tn} = \int_a^b f(x) \, dx
$$

其中，t=1，a=0，b=1

## 27 大学生数学竞赛非数 A 情况 2

$$
\lim_{n\to\infty} \frac{1}{3n} \left( \sqrt{1 + \sin\frac{\pi}{3n}} + \sqrt{1 + \sin\frac{2\pi}{3n}} + \cdots + \sqrt{1 + \sin\frac{3n\pi}{3n}} \right) = \frac{4}{\pi}
$$

这种情况，首先分析最后一项，3n/3n=1，最开始一项确实是 0（因为没有其他东西和了），可以判断出是 0-1 的积分区间。3n 的区间分 3n 份，恰到好处，所以最后就是从 0 到 1 的积分，不用做任何处理。

## 27 大学生数学竞赛非数 A 情况 3

$$
\lim_{n\to\infty} \frac{1}{n} \left( \sqrt{1 + \sin\frac{\pi}{3n}} + \sqrt{1 + \sin\frac{2\pi}{3n}} + \cdots + \sqrt{1 + \sin\frac{3n\pi}{3n}} \right) = \frac{12}{\pi}
$$

本题在上一题的基础上，修改最前面的步长，所以要补偿步长，即同时乘 3。

## 27 大学生数学竞赛非数 A 情况 4

$$
\lim_{n\to\infty} \frac{1}{n} \sum_{k=1}^n \sqrt{1 + \sin\left(\frac{k\pi}{3n}\right)}
$$

对于本题，底下是 3n，当成积分区间应该是 0-1 算，x 是 x/3。

## 27 大学生数学竞赛非数 A 情况 5

$$
\lim_{n\to\infty} \frac{1}{n} \sum_{k=1}^{n} \sqrt{1 + \sin\left(\pi\left(2 + \frac{k}{n}\right)\right)} = \int_2^3 \sqrt{1 + \sin(\pi x)} \, dx
$$

## 27 大学生数学竞赛非数 A 情况 6

$$
\lim_{n\to\infty} \frac{1}{n} \sum_{k=1}^{n} \sqrt{1 + \sin\left(\pi\left(2 + \frac{5k}{n}\right)\right)} = \frac{1}{5} \int_2^7 \sqrt{1 + \sin(\pi x)} \, dx
$$

现在才是真正的捋清楚了！
