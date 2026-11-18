---
title: 栈与队列
published: 2025-07-28
description: 两个栈模拟队列、单调队列、逆波兰表达式，代码随想录栈与队列章的 Go 实现
category: 算法
series: 算法
seriesOrder: 5
track: Go 代码随想录
subject: 栈与队列
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

Go 没有内置的栈和队列，所以这几题都是拿切片手搓。好处是能看清每种结构的本质，坏处是边界条件得自己盯。

## 232. 用栈实现队列

> 请你仅使用两个栈实现先入先出队列。支持 `push`、`pop`、`peek`、`empty`。

[题目链接：232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)

```go
type MyQueue struct {
	stackIn  []int
	stackOut []int
}

func Constructor() MyQueue {
	return MyQueue{
		stackIn:  make([]int, 0),
		stackOut: make([]int, 0),
	}
}

func (this *MyQueue) Push(x int) {
	this.stackIn = append(this.stackIn, x)
}

// pour 辅助函数：仅在 stackOut 为空时，将 stackIn 的元素倒入 stackOut
func (this *MyQueue) pour() {
	if len(this.stackOut) == 0 {
		for len(this.stackIn) > 0 {
			val := this.stackIn[len(this.stackIn)-1]
			this.stackIn = this.stackIn[:len(this.stackIn)-1]
			this.stackOut = append(this.stackOut, val)
		}
	}
}

func (this *MyQueue) Pop() int {
	this.pour() // 在操作前，确保 stackOut 有“存货”
	if len(this.stackOut) == 0 {
		return -1 // 队列为空
	}
	val := this.stackOut[len(this.stackOut)-1]
	this.stackOut = this.stackOut[:len(this.stackOut)-1]
	return val
}

func (this *MyQueue) Peek() int {
	this.pour() // 在操作前，确保 stackOut 有“存货”
	if len(this.stackOut) == 0 {
		return -1 // 队列为空
	}
	return this.stackOut[len(this.stackOut)-1]
}

func (this *MyQueue) Empty() bool {
	return len(this.stackIn) == 0 && len(this.stackOut) == 0
}
```

两个栈，`stackIn` 管进，`stackOut` 管出。

关键在于 **`pour` 只在 `stackOut` 为空时才倒**。如果每次 Pop 都把 `stackIn` 全倒一遍，顺序就乱了——倒一次以后，`stackOut` 的栈顶正好是队列头，能连续弹干净，弹空了再倒。

这就像两个箱子倒水：A 箱往里倒，要喝的时候全部倒进 B 箱，B 箱的上面就是最早进去的那杯。

## 225. 用队列实现栈

> 请你仅使用两个队列实现一个后入先出的栈。支持 `push`、`pop`、`top`、`empty`。

[题目链接：225. 用队列实现栈](https://leetcode.cn/problems/implement-stack-using-queues/)

```go
type MyQueue struct {
	stackIn  []int
	stackOut []int
}

func Constructor() MyQueue {
	return MyQueue{
		stackIn:  make([]int, 0),
		stackOut: make([]int, 0),
	}
}

func (this *MyQueue) Push(x int) {
	this.stackIn = append(this.stackIn, x)
}

// pour 辅助函数：仅在 stackOut 为空时，将 stackIn 的元素倒入 stackOut
func (this *MyQueue) pour() {
	if len(this.stackOut) == 0 {
		for len(this.stackIn) > 0 {
			val := this.stackIn[len(this.stackIn)-1]
			this.stackIn = this.stackIn[:len(this.stackIn)-1]
			this.stackOut = append(this.stackOut, val)
		}
	}
}

func (this *MyQueue) Pop() int {
	this.pour() // 在操作前，确保 stackOut 有“存货”
	if len(this.stackOut) == 0 {
		return -1 // 队列为空
	}
	val := this.stackOut[len(this.stackOut)-1]
	this.stackOut = this.stackOut[:len(this.stackOut)-1]
	return val
}

func (this *MyQueue) Peek() int {
	this.pour() // 在操作前，确保 stackOut 有“存货”
	if len(this.stackOut) == 0 {
		return -1 // 队列为空
	}
	return this.stackOut[len(this.stackOut)-1]
}

func (this *MyQueue) Empty() bool {
	return len(this.stackIn) == 0 && len(this.stackOut) == 0
}
```

用一个队列就够：要弹栈顶，就把前面 `n-1` 个元素依次从队头搬到队尾，剩下的第一个就是要弹出的。

`Top` 更省事，直接返回队列最后一个元素——队列的尾巴就是栈顶。

Push 是 O(1)，Pop 是 O(n)。要全是 O(1) 得用双端队列，但那已经不算「用队列实现栈」了。

## 20. 有效的括号

> 给定一个只包括 `(`、`)`、`{`、`}`、`[`、`]` 的字符串，判断是否有效。有效要求：左括号必须用相同类型的右括号闭合，且闭合顺序正确。

[题目链接：20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)

```go
func isValid(s string) bool {
	// 优化：奇数长度的字符串肯定无效
	if len(s)%2 == 1 {
		return false
	}

	// 创建一个 map，key 是右括号，value 是对应的左括号
	pairs := map[byte]byte{
		')': '(',
		']': '[',
		'}': '{',
	}

	// 直接用 []byte 切片来模拟栈
	stack := []byte{}

	// 遍历字符串
	for i := 0; i < len(s); i++ {
		char := s[i]

		// 判断当前字符是不是一个“右括号”
		if _, ok := pairs[char]; ok {
			// 如果是右括号，我们需要进行配对
			// a. 检查栈是否为空，或者栈顶的左括号是否匹配
			if len(stack) == 0 || stack[len(stack)-1] != pairs[char] {
				return false
			}
			// b. 如果匹配，则“出栈”
			stack = stack[:len(stack)-1]
		} else {
			// 如果是“左括号”，就直接“入栈”
			stack = append(stack, char)
		}
	}

	// 遍历完整个字符串后，栈必须是空的才算有效
	return len(stack) == 0
}
```

三种失败情况要一起处理：

1. 右括号来了，栈却是空的（比如 `"]"`）；
2. 右括号和栈顶的左括号不是一对（比如 `"(]"`）；
3. 遍历完了栈里还剩左括号（比如 `"["`）。

用 map 把「右括号找左括号」这一步做成查表，比写一堆 `if` 干净。

## 1047. 删除字符串中的所有相邻重复项

> 给出由小写字母组成的字符串，重复项删除操作会选择两个相邻且相同的字母并删除。反复执行直到无法继续。

[题目链接：1047. 删除字符串中的所有相邻重复项](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/)

```go
func removeDuplicates(s string) string {
	// 使用 byte 切片来模拟栈
	stack := []byte{}

	// 遍历输入的字符串
	for i := 0; i < len(s); i++ {
		char := s[i]

		// 检查栈是否为空，以及当前字符是否和栈顶元素相同
		if len(stack) > 0 && stack[len(stack)-1] == char {
			// 如果相同，就出栈（消除一对）
			stack = stack[:len(stack)-1]
		} else {
			// 如果不同，或者栈是空的，就入栈
			stack = append(stack, char)
		}
	}

	// 最终栈里剩下的，就是消除后的结果
	return string(stack)
}
```

这题是栈的经典用法：栈顶永远存着「还没被消掉的前一个字符」，来一个一样的就消一对，来不一样的压进去。

`"abbaca"` 走一遍：`a` 入栈 → `b` 入栈 → 第二个 `b` 和栈顶相同，弹出 → `a` 和栈顶 `a` 相同，弹出 → `c` 入栈 → `a` 入栈，最后是 `"ca"`。

## 150. 逆波兰表达式求值

> 给你一个字符串数组 `tokens`，表示一个根据逆波兰表示法（后缀表达式）表示的算术表达式，求值。

[题目链接：150. 逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

```go
import "strconv"

func evalRPN(tokens []string) int {
	// 使用 int 切片来模拟一个操作数栈
	stack := []int{}

	for _, token := range tokens {
		// 尝试将 token 转换为数字
		num, err := strconv.Atoi(token)

		// 如果转换成功 (err == nil)，说明是数字
		if err == nil {
			// 数字直接入栈
			stack = append(stack, num)
		} else {
			// 如果转换失败，说明是运算符
			n := len(stack)
			// 从栈顶取出最近的两个数字
			num1, num2 := stack[n-2], stack[n-1]
			// 将这两个数字出栈
			stack = stack[:n-2]

			// 根据运算符进行计算
			switch token {
			case "+":
				stack = append(stack, num1+num2)
			case "-":
				stack = append(stack, num1-num2) // 注意顺序
			case "*":
				stack = append(stack, num1*num2)
			case "/":
				stack = append(stack, num1/num2) // 注意顺序
			}
		}
	}
	// 遍历结束后，栈里剩下的唯一一个数就是最终答案
	return stack[0]
}
```

后缀表达式的妙处是不用管括号和优先级：遇到数字就压栈，遇到运算符就弹出两个算完再压回去。

**注意减法除法的顺序**：先弹出的是右操作数，后弹出的是左操作数。`num1` 是左、`num2` 是右，写成 `num2 - num1` 就错了。

## 239. 滑动窗口最大值

> 给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从最左侧移动到最右侧。返回每个窗口中的最大值。

[题目链接：239. 滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)

这题要自己维护一个**单调递减的双端队列**：

```go
type MyQueue struct {
	deque []int
}

func NewMyQueue() *MyQueue {
	return &MyQueue{
		deque: make([]int, 0),
	}
}

func (m *MyQueue) Front() int {
	return m.deque[0]
}

func (m *MyQueue) Back() int {
	return m.deque[len(m.deque)-1]
}

func (m *MyQueue) Empty() bool {
	return len(m.deque) == 0
}

func (m *MyQueue) Push(x int) {
    // 核心：为了维持队列的单调递减，
    // 将队尾所有比新元素 x 小的数都“请”出去
	for !m.Empty() && x > m.Back() {
		m.deque = m.deque[:len(m.deque)-1]
	}
	m.deque = append(m.deque, x)
}

func (m *MyQueue) Pop(x int) {
    // 只有当要移除的元素 x 正好是队头的最大值时，
    // 才需要将队头弹出
	if !m.Empty() && x == m.Front() {
		m.deque = m.deque[1:]
	}
}

func maxSlidingWindow(nums []int, k int) []int {
	ans := []int{}
	deque := NewMyQueue()

	// 1. 初始化第一个窗口
	for i := 0; i < k; i++ {
		deque.Push(nums[i])
	}
	ans = append(ans, deque.Front())

	// 2. 开始滑动
	for i := k; i < len(nums); i++ {
        // a. 窗口左侧元素滑出
		deque.Pop(nums[i-k])
        // b. 窗口右侧元素滑入
		deque.Push(nums[i])
        // c. 记录当前窗口的最大值
		ans = append(ans, deque.Front())
	}

	return ans
}
```

两个关键点：

- **Push**：新元素进来时，把队尾所有比它小的都弹掉。因为那些元素比 x 小又比 x 早出窗口，永远不可能成为最大值了，留着没用。
- **Pop**：只有当滑出窗口的值正好等于队头时才弹出。如果滑出去的是个已经被挤掉的小值，队列里本来就没有它，什么也不用做。

主函数就是把窗口推进去：

```go
func maxSlidingWindow(nums []int, k int) []int {
	deque := NewMyQueue()
	ans := []int{}

	// 先把前 k 个放进去
	for i := 0; i < k; i++ {
		deque.Push(nums[i])
	}
	ans = append(ans, deque.Front())

	// 滑动窗口
	for i := k; i < len(nums); i++ {
		// 移出窗口的那个，如果正好是最大值才弹
		deque.Pop(nums[i-k])
		// 新的进去
		deque.Push(nums[i])
		ans = append(ans, deque.Front())
	}
	return ans
}
```

这样队头永远是当前窗口的最大值，每次取 `Front()` 就是 O(1)。整体 O(n)。

用暴力每次扫窗口是 O(nk)，这题就是用来逼你写出单调队列的。

## 附：优先队列

Go 没有现成的 `heapq`，要用标准库的 `container/heap`，实现 `Len`、`Less`、`Swap`、`Push`、`Pop` 五个方法。

这一节当时空着没写，等用到的时候再补一个完整例子（比如「前 K 个高频元素」那种题）。
