---
title: 字符串
published: 2025-07-23
description: 双指针反转、三次翻转、KMP，代码随想录字符串章的 Go 实现
category: 算法
series: 算法
seriesOrder: 4
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

字符串这一章表面上在讲反转，实际上在讲两件事：**双指针怎么在字符数组上动**，以及**KMP 为什么这么难写对**。

Go 的 string 不可变，所以所有原地操作都得先转成 `[]byte`。

## 344. 反转字符串

> 编写一个函数，将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出，必须原地修改。

[题目链接：344. 反转字符串](https://leetcode.cn/problems/reverse-string/)

```go
// 辅助函数：翻转 byte 切片的指定部分
func reverseString(s []byte, left int, right int) {
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}

func reverseStr(s string, k int) string {
	t := []byte(s)
	n := len(s)

	// 核心循环：步长为 2k，处理每一个大区间
	for i := 0; i < n; i += 2 * k {
		// 计算需要翻转的区间的右边界
		// a. 理论上的右边界是 i + k - 1
		// b. 字符串的实际右边界是 n - 1
		// c. 我们要取这两者中较小的一个，来优雅地处理所有边界情况
		right := min(i+k-1, n-1)

		// 对计算出的 [i, right] 区间进行翻转
		reverseString(t, i, right)
	}
	return string(t)
}

// min 函数用于安全地计算右边界
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```

双指针首尾互换，向中间靠拢，碰头就停。这题是所有「反转」类问题的地基。

`left < right` 和 `left <= right` 都能过，前者少一次无意义的自交换。

## 541. 反转字符串 II

> 给定一个字符串 `s` 和一个整数 `k`，从开头算起，每计数至 `2k` 个字符，就反转这 `2k` 个字符中的前 `k` 个。如果剩余字符少于 `k` 个，就把剩余的全部反转。

[题目链接：541. 反转字符串 II](https://leetcode.cn/problems/reverse-string-ii/)

```go
// 辅助函数：翻转 byte 切片的指定部分
func reverseString(s []byte, left int, right int) {
	for left < right {
		s[left], s[right] = s[right], s[left]
		left++
		right--
	}
}

func reverseStr(s string, k int) string {
	t := []byte(s)
	n := len(s)

	// 核心循环：步长为 2k，处理每一个大区间
	for i := 0; i < n; i += 2 * k {
		// 计算需要翻转的区间的右边界
		// a. 理论上的右边界是 i + k - 1
		// b. 字符串的实际右边界是 n - 1
		// c. 我们要取这两者中较小的一个，来优雅地处理所有边界情况
		right := min(i+k-1, n-1)

		// 对计算出的 [i, right] 区间进行翻转
		reverseString(t, i, right)
	}
	return string(t)
}

// min 函数用于安全地计算右边界
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```

关键在于 `right` 那一行：理论上要翻到 `i+k-1`，但字符串可能不够长，所以取 `min`。这样「剩余不足 k 个」的情况自动被覆盖，不用写特判。

当时对这题的评价是「**看图写话**」——它没有隐蔽的算法，考的是把题目规则逐句翻译成代码，以及边界情况处理得细不细。`min` 那一行就是翻译的成果：题目说「不足 k 个就全翻」，代码里就是「右边界取较小的那个」。

## 卡码网 54. 替换数字

> 给定一个字符串 `s`，它包含小写字母和数字字符。将字符串中的每个数字字符替换为 `"number"`。

[题目链接：卡码网 54. 替换数字](https://kamacoder.com/problempage.php?pid=1064)

### 思路一：strings.Builder

```go
package main

import (
	"fmt"
)

func solve() {
	var str string
	fmt.Scanln(&str)

	cnt := 0
	for _, c := range str {
		if c <= '9' && c >= '0' {
			cnt++
		}
	}

	ans_length := len(str) - cnt + cnt*6
	ans := make([]byte, ans_length)
	ans_i := ans_length - 1

	for str_i := len(str) - 1; str_i >= 0; str_i-- {
		char := str[str_i]
		if char <= '9' && char >= '0' {
			// 逆序写入 "number"
			ans[ans_i] = 'r'; ans_i--
			ans[ans_i] = 'e'; ans_i--
			ans[ans_i] = 'b'; ans_i--
			ans[ans_i] = 'm'; ans_i--
			ans[ans_i] = 'u'; ans_i--
			ans[ans_i] = 'n'; ans_i--
		} else {
			ans[ans_i] = char
			ans_i--
		}
	}

	fmt.Println(string(ans))
}

func main() {
	solve()
}
```

预知要频繁拼接时，`strings.Builder` 是最省事的做法：它有个内部缓冲，不会像 `+` 那样每拼一次就造一个新字符串。

### 思路二：原地扩展

先扫一遍数出数字个数，算出新长度，把 `[]byte` 扩容，再从后往前填。这样每个字符只搬一次，空间也是 O(1)（不考虑扩容本身）。

两种都行，刷题时用 Builder 更快写完。

## 151. 翻转字符串里的单词

> 给你一个字符串 `s`，反转其中单词的顺序。单词之间用单个空格分隔，结果中不要有多余空格。

[题目链接：151. 翻转字符串里的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)

```go
import "strings"

// 辅助函数：翻转 byte 切片的指定部分
func reverseBytes(b []byte, left, right int) {
	for left < right {
		b[left], b[right] = b[right], b[left]
		left++
		right--
	}
}

func reverseWords(s string) string {
	// --- 第一步：净化字符串 ---
	// 1a. 去除首尾的所有空格
	s = strings.TrimSpace(s)
	if s == "" {
		return ""
	}
	b := []byte(s)

	// 1b. 使用快慢指针，压缩单词间的多个空格为单个
	slow, fast := 0, 0
	for fast < len(b) {
		// 当 fast 遇到空格，并且它前面也是空格时，就跳过这个 fast
		if b[fast] == ' ' && b[fast-1] == ' ' {
			fast++
			continue
		}
		b[slow] = b[fast]
		slow++
		fast++
	}
	b = b[:slow] // 截取净化后的有效部分

	// --- 第二步：整体翻转 ---
	reverseBytes(b, 0, len(b)-1)

	// --- 第三步：局部翻转每个单词 ---
	wordStart := 0
	for i := 0; i <= len(b); i++ {
		// 当遇到空格或到达字符串末尾时，说明一个单词结束了
		if i == len(b) || b[i] == ' ' {
			reverseBytes(b, wordStart, i-1)
			wordStart = i + 1 // 更新下一个单词的起始点
		}
	}

	return string(b)
}
```

思路是「整体翻转 + 单词翻转」：`"the sky is blue"` 整体翻转变成 `"eulb si yks eht"`，此时单词顺序对了但每个单词是反的，再逐词翻回来即可。

麻烦的其实是空格清理，所以第一步和第二步先把空格规整掉。

## 卡码网 55. 右旋字符串

> 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定字符串 `s` 和正整数 `k`，输出右旋转 `k` 位后的字符串。

[题目链接：卡码网 55. 右旋字符串](https://kamacoder.com/problempage.php?pid=1065)

```go
package main

import (
	"fmt"
)

func solve() {
	var str string
	fmt.Scanln(&str)

	cnt := 0
	for _, c := range str {
		if c <= '9' && c >= '0' {
			cnt++
		}
	}

	ans_length := len(str) - cnt + cnt*6
	ans := make([]byte, ans_length)
	ans_i := ans_length - 1

	for str_i := len(str) - 1; str_i >= 0; str_i-- {
		char := str[str_i]
		if char <= '9' && char >= '0' {
			// 逆序写入 "number"
			ans[ans_i] = 'r'; ans_i--
			ans[ans_i] = 'e'; ans_i--
			ans[ans_i] = 'b'; ans_i--
			ans[ans_i] = 'm'; ans_i--
			ans[ans_i] = 'u'; ans_i--
			ans[ans_i] = 'n'; ans_i--
		} else {
			ans[ans_i] = char
			ans_i--
		}
	}

	fmt.Println(string(ans))
}

func main() {
	solve()
}
```

这就是「三次翻转」：整体转一次，再把两段各自转回来。

`k %= n` 不能省，`k` 大于长度时会越界。

## 28. 找出字符串中第一个匹配项的下标（strStr）

> 给你两个字符串 `haystack` 和 `needle`，请你在 `haystack` 字符串中找出 `needle` 字符串的第一个匹配项的下标。不存在返回 `-1`。

[题目链接：28. 找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)

### 这道题上的成长足迹

学 KMP 的过程里踩了一串坑，记下来免得再踩一遍：

- **最初的尝试**：朴素双层循环，思路直接，是问题的良好起点。
- **`getNext` 的陷阱**：
  - 忘了 `make([]int, 0, n)` 创建的是**零长度**切片，直接按下标赋值会 `panic`。
  - 回溯逻辑写成 `j--`，正确写法是 `j = next[j-1]`。
- **`strStr` 匹配的误解**：
  - 混淆了暴力匹配和 KMP 的循环结构。
  - 错误地让 `haystack` 的指针 `i` 跳跃，而 KMP 里应该回溯的是 `needle` 的指针 `j`。
- **深入的思考**：
  - 把 `next` 数组和「轴对称」联系起来——两者不一样，但这个联想挺有意思。
  - 想不通为什么 `getNext` 从 `i=1, j=0` 开始，而 `strStr` 从 `i=0, j=0` 开始。

### 解法一：朴素匹配

```go
func getNext(s string) []int {
	next := make([]int, len(s))
	j := 0
	for i := 1; i < len(s); i++ {
		for j > 0 && s[i] != s[j] {
			j = next[j-1]
		}
		if s[i] == s[j] {
			j++
		}
		next[i] = j
	}
	return next
}

func strStr(haystack string, needle string) int {
    if len(needle) == 0 { return 0 }
	next := getNext(needle)
	m, n := len(haystack), len(needle)

	j := 0
	for i := 0; i < m; i++ {
		for j > 0 && haystack[i] != needle[j] {
			j = next[j-1]
		}
		if haystack[i] == needle[j] {
			j++
		}

		if j == n {
			return i - n + 1
		}
	}
	return -1
}
```

### 解法二：KMP

KMP 的核心是 `next` 数组——它记录「匹配失败时，模式串该退回到哪里」，从而让文本串指针不回头。

```go
func getNext(s string) []int {
	next := make([]int, len(s))
	j := 0
	for i := 1; i < len(s); i++ {
		for j > 0 && s[i] != s[j] {
			j = next[j-1]
		}
		if s[i] == s[j] {
			j++
		}
		next[i] = j
	}
	return next
}

func strStr(haystack string, needle string) int {
    if len(needle) == 0 { return 0 }
	next := getNext(needle)
	m, n := len(haystack), len(needle)

	j := 0
	for i := 0; i < m; i++ {
		for j > 0 && haystack[i] != needle[j] {
			j = next[j-1]
		}
		if haystack[i] == needle[j] {
			j++
		}

		if j == n {
			return i - n + 1
		}
	}
	return -1
}
```

两个函数长得几乎一样，区别只在起点：`getNext` 从 `i=1, j=0` 开始（自己匹配自己），`strStr` 从 `i=0, j=0` 开始（文本串匹配模式串）。当初就是卡在这里想不通。

## 459. 重复的子字符串

> 给定一个非空的字符串 `s`，检查它是否可以由它的一个子串重复多次构成。

[题目链接：459. 重复的子字符串](https://leetcode.cn/problems/repeated-substring-pattern/)

这题当时空着没写。两种常见做法：一是 KMP 求 `next` 后看最小重复单元长度能否整除总长；二是把 `s + s` 拼起来，去掉首尾各一个字符后看 `s` 还在不在里面。

## 附：Go 子串常用库函数

刷题时这些够用，省得手写。

**查找与判断**：

| 函数 | 作用 |
| --- | --- |
| `strings.Contains(s, sub)` | 是否包含子串 |
| `strings.Index(s, sub)` | 首次出现的下标，没有返回 -1 |
| `strings.LastIndex(s, sub)` | 最后一次出现的下标 |
| `strings.HasPrefix(s, p)` | 是否以 p 开头 |
| `strings.HasSuffix(s, p)` | 是否以 p 结尾 |
| `strings.Count(s, sub)` | 子串出现次数（空串返回长度 +1） |

**分割与拼接**：

| 函数 | 作用 |
| --- | --- |
| `strings.Split(s, sep)` | 按分隔符切分 |
| `strings.Fields(s)` | 按空白切分，自动忽略多余空格 |
| `strings.Join(arr, sep)` | 用分隔符拼回去 |
| `strings.Repeat(s, n)` | 重复 n 次 |
| `strings.ReplaceAll(s, old, new)` | 全部替换 |

**大小写与裁剪**：

| 函数 | 作用 |
| --- | --- |
| `strings.ToUpper(s)` / `ToLower(s)` | 转大小写 |
| `strings.TrimSpace(s)` | 去掉首尾空白 |
| `strings.Trim(s, cutset)` | 去掉首尾指定字符 |
| `strings.TrimPrefix(s, p)` / `TrimSuffix(s, p)` | 去前缀 / 后缀 |

`[]byte` 和 `string` 之间用 `[]byte(s)` / `string(b)` 互转，每次转换都会拷贝一份，循环里转来转去会拖慢速度——尽量在一次转换后把活干完。
