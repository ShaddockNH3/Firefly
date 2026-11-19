---
title: 数组
published: 2025-07-01
description: 二分、双指针、滑动窗口、前缀和，代码随想录数组章的 Go 实现
category: 算法
series: 算法
seriesOrder: 1
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

## 二分查找

二分查找不是一个具体的函数，而是一种算法思想。

**核心思想**：

> 在一个有序的集合中，通过每次将搜索范围缩小一半来快速定位目标。

**重要的前提**：

> 集合必须是有序的。没有这个前提，二分查找就不成立。

**为什么它那么快？(O(logn))**：

> 想象一下在一部 1024 页的字典里找一个单词。你不会一页一页翻（这是 O(n)）。你会先翻到中间第 512 页，看要找的单词在前半部分还是后半部分，一下就排除了 512 页。如此反复，每次都排除一半，很快就能找到。这就是对数级别的威力，数据量再大，查找次数也增长得很慢。

### 最基础的模板：寻找一个确切的值 (LeetCode 704)

这是二分查找最经典、最纯粹的形式，就像是学习走路的第一步。

**目标**：在一个没有重复元素的有序数组中，找到 `target` 的位置，找到返回下标，找不到返回 `-1`。

[题目链接：704. 二分查找](https://leetcode.cn/problems/binary-search/)

```go
func search(nums []int, target int) int {
    left, right := 0, len(nums)-1
    // 1. 只要搜索区间 [left, right] 还存在，就继续
    for left <= right {
        mid := left + (right - left) / 2 // 防溢出的 mid 计算法，非常棒！

        // 2. 核心的三段式判断
        if nums[mid] == target {
            // 找到了！直接返回，任务完成！
            return mid
        } else if nums[mid] > target {
            // 中间值太大了，目标肯定在左边
            right = mid - 1
        } else { // nums[mid] < target
            // 中间值太小了，目标肯定在右边
            left = mid + 1
        }
    }
    // 3. 循环结束了还没找到，说明不存在
    return -1
}
```

这个模板适合「没有重复元素」且「只要求找到一个」的场景。

### 重要的变种 I：寻找边界 (LeetCode 35, 34)

这是二分的第一次升级：不再满足于「找到就行」，而是要精确地找到一个位置——「它应该被插入的位置」或「它第一次出现的位置」。

**目标**：

- **[LeetCode 35](https://leetcode.cn/problems/search-insert-position/)**：找到 `target` 的插入位置。
- **[LeetCode 34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)**：找到 `target` 的起始和结束位置。

这两个问题的核心，都是在找左侧边界，也就是第一个大于或等于 `target` 的元素的位置。

**心态转变**：

> 用基础模板时，`nums[mid] == target` 意味着成功。但找左边界时，`nums[mid] == target` 只说明 `mid` 是一个潜在的答案，必须继续往左找，看有没有更靠前的。

**寻找左侧边界的模板**：

```go
// 这是一个更纯粹的“寻找左边界”函数
func findLeftBoundary(nums []int, target int) int {
    left, right := 0, len(nums)-1
    for left <= right {
        mid := left + (right - left) / 2

        if nums[mid] >= target {
            // 中间值大于或等于目标，说明它可能是答案，
            // 或者答案在它的左边。我们向左收缩！
            right = mid - 1
        } else { // nums[mid] < target
            // 中间值小于目标，那答案一定在它的右边。
            left = mid + 1
        }
    }
    // 循环结束后，left 就是第一个 >= target 的位置
    return left
}
```

**怎么用**：

- **35 `searchInsert`**：模板返回的 `left` 直接就是插入位置。
- **34 `searchRange`**：起始位置就是左边界；结束位置可以找 `target + 1` 的左边界再减一。
- **别忘了检查**：拿到 `leftBound` 之后要确认 `nums[leftBound]` 是不是真的等于 `target`，否则说明 `target` 根本不存在。

### 重要的变种 II：在概念空间上二分 (LeetCode 69, 367)

二分不只能用在给定的数组上，也能用在一个概念上、逻辑上有序的空间里，比如从 0 到 x 的所有整数。

**目标**：

- **[LeetCode 69](https://leetcode.cn/problems/sqrtx/)**：计算 `x` 的整数平方根。
- **[LeetCode 367](https://leetcode.cn/problems/valid-perfect-square/)**：判断 `num` 是不是完全平方数。

这两个问题的本质，都是在 `[0, x]` 这个范围里找一个满足条件的边界。对于 `mySqrt(x)`，要找的是最大的整数 `k`，使得 `k*k <= x`。

```go
func mySqrt(x int) int {
    if x == 0 || x == 1 {
        return x
    }
    left, right := 1, x
    var ans int
    for left <= right {
        mid := left + (right - left) / 2
        // 使用 mid <= x/mid 来防止 mid*mid 溢出，非常严谨！
        if mid <= x / mid {
            // 如果 mid 的平方 <= x，说明 mid 是一个可能的答案。
            // 我们把它记下来，然后去右边尝试寻找更大的可能答案！
            ans = mid
            left = mid + 1
        } else { // mid 的平方 > x
            // mid 太大了，答案一定在左边。
            right = mid - 1
        }
    }
    return ans
}
```

**怎么用**：

- **69 `mySqrt`**：上面的代码直接可用，`ans` 存的就是满足 `k*k <= x` 的那个最大的 `k`。
- **367 `isPerfectSquare`**：先用 `mySqrt(num)` 拿到整数平方根 `k`，再看 `k*k` 是不是正好等于 `num`。

### 总结与小贴士

1. **两大核心模板**：万变不离其宗。牢牢记住基础查找模板和寻找左侧边界模板，绝大多数问题都是它们的变种。
2. **明确搜索区间**：上面的例子都用的 `[left, right]` 闭区间，搭配 `while left <= right`，这是最不容易出错的一种写法。
3. **思考边界**：觉得二分很模糊的时候，先想清楚「我的目标是找一个确切的值，还是找一个满足条件的边界」。想清楚这个，问题就解决了一大半。

## 双指针：原地修改数组

这几道题都是同一个思想的体现——双指针法。

当时有好几道题我一下没反应过来，其实每一份代码里都有双指针的影子。

### 流派一：快慢指针

最经典的流派。一个慢指针 `left`，一个快指针 `right`。

- **慢指针 `left`**：走得慢，像守门员。`left` 左边的区域都是已经处理好的、符合最终要求的元素，只有需要接纳新成员时才向前移动。
- **快指针 `right`**：走得快，像探路先锋。负责遍历整个数组，去找需要保留的元素。

#### 27. 移除元素

> 给你一个数组 `nums` 和一个值 `val`，你需要原地移除所有数值等于 `val` 的元素。元素的顺序可能发生改变。然后返回 `nums` 中与 `val` 不同的元素的数量。

[题目链接：27. 移除元素](https://leetcode.cn/problems/remove-element/)

```go
func removeElement(nums []int, val int) int {
    // left 是慢指针，right 是快指针
    left, right := 0, 0
    nums_length := len(nums)

    for right < nums_length {
        // 快指针 right 发现了一个不等于 val 的元素
        // 就把它“扔”给慢指针 left
        if nums[right] != val {
            nums[left] = nums[right]
            // left 接收了一个新成员，向前一步，扩大自己的地盘
            left++
        }
        // 无论如何，快指针 right 都要继续前进，探索下一个元素
        right++
    }
    // 最后 left 的位置，就是新数组的长度
    return left
}
```

思路是：`right` 不断向前探索，一旦发现一个「好元素」（不等于 `val`），就把它放到 `left` 的位置上，然后 `left` 才向前移动。如果 `right` 发现的是「坏元素」（等于 `val`），`right` 直接跳过，`left` 原地待命，等下一个好元素。

#### 26. 删除有序数组中的重复项

> 给你一个非严格递增排列的数组 `nums`，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致。

[题目链接：26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

```go
func removeDuplicates(nums []int) int {
	nums_length := len(nums)
	if nums_length <= 1 { // 长度 0 或 1 时不需要处理
		return nums_length
	}

	// left 指向新数组的最后一个位置，right 负责探索
	left, right := 0, 1

	for ; right < nums_length; right++ {
		// right 发现了一个和 left 位置不同的新元素
		if nums[left] != nums[right] {
			// left 先向前一步，为新成员腾出位置
			left++
			nums[left] = nums[right]
		}
	}
	// left 是索引，长度要加一
	return left + 1
}
```

这和上一题几乎一样。因为数组有序，重复元素一定挨在一起。`left` 守着当前唯一元素的最后一个位置，`right` 向前探索，一旦 `nums[right]` 和 `nums[left]` 不一样，就说明来了新的不重复元素，`left` 把它收录进来。

### 流派二：快慢指针的变种 · 交换大法

#### 283. 移动零

> 给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。必须在不复制数组的情况下原地对数组进行操作。

[题目链接：283. 移动零](https://leetcode.cn/problems/move-zeroes/)

```go
func moveZeroes(nums []int) {
    // left 指向下一个非零元素应该被放置的位置
    // right 负责寻找非零元素
    left, right := 0, 0
    for right < len(nums) {
        // right 找到了一个非零元素
        if nums[right] != 0 {
            // 就把它和 left 指向的位置交换
            // 这个交换操作是精髓！
            nums[left], nums[right] = nums[right], nums[left]
            // left 完成了一次交换，向前移动，等待下一个非零元素
            left++
        }
        right++
    }
}
```

这题当时一下没反应过来，很正常，因为它和前面两题有个微妙但关键的区别。前两题不在乎被覆盖掉的元素是什么（反正都是要删掉的 `val` 或重复项），所以可以直接赋值覆盖。

但这一题要求把 0 移到末尾，意味着不能凭空覆盖掉 0，因为非零元素的相对顺序要保持。

所以这里的 `left` 扮演的是「非零元素区域」的边界：

1. `left` 左边（包括 `left`）都是处理好的非零元素；
2. `right` 作为探路先锋在数组中前进；
3. 当 `right` 找到非零元素时，它「理应」属于非零区域，而 `left` 正好指向这个区域的第一个空位（也就是第一个 0）；
4. 于是交换 `nums[left]` 和 `nums[right]`，一举两得：非零元素到了它该在的位置，0 则被往后换了一步；
5. `left` 前进一步，扩大非零区域。

`right` 遍历完整个数组后，所有非零元素都被换到了前面并保持相对顺序，0 自然就被换到了后面。

### 流派三：对撞指针

两个指针一个从头、一个从尾，相向而行，直到撞在一起。

#### 977. 有序数组的平方

> 给你一个按非递减顺序排序的整数数组 `nums`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

[题目链接：977. 有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)

```go
func absInt(x int) int {
    if x >= 0 { return x } else { return -x }
}

func sortedSquares(nums []int) []int {
    nums_length := len(nums)
    ans := make([]int, nums_length)
    left, right := 0, nums_length-1

    // k 指针负责从后往前填充新数组 ans
    for k := nums_length - 1; k >= 0; k-- {
        // 比较两端元素的绝对值大小
        if absInt(nums[right]) > absInt(nums[left]) {
            // 大的那个的平方，放到新数组的末尾
            ans[k] = nums[right] * nums[right]
            right-- // 右指针向左移动
        } else {
            ans[k] = nums[left] * nums[left]
            left++ // 左指针向右移动
        }
    }
    return ans
}
```

这题的妙处在于：有序数组（可能含负数）平方之后，最大值一定出现在原数组的最左端或最右端。比如 `[-10, -1, 5]`，平方后是 `[100, 1, 25]`，最大值 100 来自 -10。

所以左右指针分别指向头和尾，再用 `k` 指向新数组的尾部，每次比较两端绝对值，把大的那个的平方填进 `ans[k]`，然后移动对应的指针和 `k`，直到填满。

### 流派四：高级应用 · 独立移动的双指针

两个指针可能分别在两个独立的字符串上，或者有更复杂的移动逻辑。

#### 844. 比较含退格的字符串

> 给定 `s` 和 `t` 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等返回 `true`。`#` 代表退格字符。

[题目链接：844. 比较含退格的字符串](https://leetcode.cn/problems/backspace-string-compare/)

```go
func backspaceCompare(s string, t string) bool {
	i := len(s) - 1
	j := len(t) - 1
	skipS := 0
	skipT := 0

	for i >= 0 || j >= 0 {
		// 在 s 中找到下一个有效字符
		for i >= 0 {
			if s[i] == '#' { skipS++; i-- } else if skipS > 0 { skipS--; i-- } else { break }
		}
		// 在 t 中找到下一个有效字符
		for j >= 0 {
			if t[j] == '#' { skipT++; j-- } else if skipT > 0 { skipT--; j-- } else { break }
		}
		// 比较找到的有效字符
		if i >= 0 && j >= 0 {
			if s[i] != t[j] { return false }
		} else if i >= 0 || j >= 0 { // 一个还有字符，一个没了
			return false
		}
		i--
		j--
	}
	return true
}
```

为了达到 O(1) 的空间复杂度，不能创建新字符串，最好的方法就是从后往前遍历。两个指针 `i`、`j` 分别指向 `s`、`t` 的末尾，再用两个 `skip` 计数器模拟退格。

### 双指针小结

这几道题看起来各不相同，内核都是双指针：

- **快慢指针**：解决原地移除、去重这类问题，一个指针探索，一个指针构建。
- **交换指针**：解决移动零这类要保持相对顺序的问题，核心是交换。
- **对撞指针**：解决有序数组平方这类两端信息有用的问题，从两头向中间靠拢。
- **高级双指针**：解决比较退格字符串这类需要更复杂逻辑的比较问题。

## 滑动窗口：长度最小的子数组

### 209. 长度最小的子数组

> 给定一个含有 `n` 个正整数的数组和一个正整数 `target`。找出该数组中满足其总和大于等于 `target` 的长度最小的子数组，并返回其长度。如果不存在符合条件的子数组，返回 `0`。

[题目链接：209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)

```go
func minSubArrayLen(target int, nums []int) int {
	n := len(nums)
	left, right := 0, 0
	min_length := n + 1
	current_sum := 0

	for ; right < n; right++ {
		current_sum += nums[right]
		for current_sum >= target && left <= right {
			min_length = min(min_length, right-left+1)
			current_sum -= nums[left]
			left++
		}
	}

	if min_length == n+1 {
		return 0
	}
	return min_length
}
```

窗口题的关键只有一句：什么时候缩。这题是「和不小于 target 就缩」，缩到不满足再继续扩。

### 904. 水果成篮（没写完）

> 你正在探访一家农场，农场从左到右种植了一排果树。`fruits[i]` 是第 `i` 棵树上的水果种类。你有两个篮子，每个篮子只能装单一类型的水果，可以从任意一棵树开始采摘，每棵树恰好摘一个，一旦遇到不符合篮子类型的水果就必须停止。返回可以收集的水果最大数目。

[题目链接：904. 水果成篮](https://leetcode.cn/problems/fruit-into-baskets/)

思路还是滑动窗口，但条件换了：窗口内**水果种类不超过两种**。

写法上用 `map[int]int` 记窗口里每种水果的数量：

- 右端进来一种水果，计数加一；
- 种类超过 2，左端开始收缩，某种水果计数减到 0 就从 map 里删掉；
- 每次收缩完更新最大窗口长度。

和 209 的区别在于「收缩条件」：209 是和不够就扩、够了就缩；904 是种类超了才缩。窗口题的骨架完全一样，只有这一句换。

这题当时没写完，代码没留。

## 前缀和：区间和

### 卡码网 58. 区间和

> 给定一个整数数组 Array，计算该数组在每个指定区间内元素的总和。

[题目链接：卡码网 58. 区间和](https://kamacoder.com/problempage.php?pid=1070)

#### Phase 1：最初的想法 —— 暴力解法

看到「计算区间内元素的总和」，最直接的反应就是：来一个区间，就算一个区间的和。从区间起点加到终点，就完事了。

**第一个解法（暴力循环）**：

```go
package main

import (
	"fmt"
	"io"
)

func main() {
	// 1. 读取数组
	var n int
	fmt.Scan(&n)
	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	// 2. 预处理：构建前缀和数组
	// 我们创建一个比原数组长 1 的数组，这样处理边界更方便
	// prefixSums[i] 存储 arr[0]...arr[i-1] 的和
	prefixSums := make([]int, n+1)
	prefixSums[0] = 0 // 第一个元素前，和为 0
	for i := 0; i < n; i++ {
		prefixSums[i+1] = prefixSums[i] + arr[i]
	}

	// 3. 循环处理查询，直到文件末尾 (EOF)
	var start, end int
	for {
		_, err := fmt.Scan(&start, &end)
		if err == io.EOF {
			break
		}

		// 4. O(1) 复杂度计算结果并输出
		// 区间 [start, end] 的和 = prefixSums[end+1] - prefixSums[start]
		result := prefixSums[end+1] - prefixSums[start]
		fmt.Println(result)
	}
}
```

思路剖析：

1. 先把整个数组读入内存；
2. 进入循环，等待接收区间查询；
3. 每收到一个 `[start, end]`，就从 `arr[start]` 一个个加到 `arr[end]`；
4. 把总和打印出来。

**优点**：思路简单，写起来快。

**可以优化的点**：瓶颈在重复计算。如果数组有 10 万个元素、查询也有 10 万次，每次都从头加，同一个元素可能被加成千上万次。

#### Phase 2：前缀和

既然暴力太累，就想：有没有办法只算一次，就能应对所有查询？

这时候前缀和就登场了。核心是：用一次 O(n) 的预处理，换无数次 O(1) 的查询。

**什么是前缀和**：

新建一个辅助数组 `prefixSums`，`prefixSums[i]` 存的是原数组从第 0 个元素到第 `i-1` 个元素的累积和。

**它有什么用**：

有了这个数组，求任意区间 `[start, end]` 的和就变成一次减法：

```text
Sum(start, end)
= arr[start] + ... + arr[end]
= (arr[0] + ... + arr[end]) - (arr[0] + ... + arr[start-1])
= prefixSums[end+1] - prefixSums[start]
```

最优策略：

> 先花 O(n) 把前缀和数组建好。之后不管来多少次查询，都能用一次减法 O(1) 出答案。

```go
package main

import (
	"fmt"
	"io"
)

func main() {
	// 1. 读取数组
	var n int
	fmt.Scan(&n)
	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	// 2. 预处理：构建前缀和数组
	// 比原数组长 1，处理边界更方便
	// prefixSums[i] 存 arr[0]...arr[i-1] 的和
	prefixSums := make([]int, n+1)
	prefixSums[0] = 0
	for i := 0; i < n; i++ {
		prefixSums[i+1] = prefixSums[i] + arr[i]
	}

	// 3. 循环处理查询，直到文件末尾
	var start, end int
	for {
		_, err := fmt.Scan(&start, &end)
		if err == io.EOF {
			break
		}
		// 4. O(1) 计算结果
		fmt.Println(prefixSums[end+1] - prefixSums[start])
	}
}
```

思路剖析：

1. **预处理**：`prefixSums` 比 `arr` 长 1，`prefixSums[0]` 设为 0，`prefixSums[i+1]` 保存 `arr` 从 0 到 `i` 的和。这个 `+1` 可以让 `start = 0` 时不用特判。
2. **查询**：进入循环，不断接收 `start` 和 `end`。
3. **计算**：`prefixSums[end+1] - prefixSums[start]`。比如 `[0, 2]` 就是 `prefixSums[3] - prefixSums[0]`，正好是 `arr[0]+arr[1]+arr[2]`。
4. **结束**：`fmt.Scan` 读不到东西（返回 `io.EOF`）时，说明查询处理完了。

**优点**：时间复杂度 `O(n + q)`，`n` 是数组长度，`q` 是查询次数。预处理一次，之后每次查询都是常数时间。

### 前缀和总结

前缀和是解决**静态数组（元素不会变）的频繁区间查询**问题的标准做法。

它体现的是「预处理」这个思想：一次性的投入，换后续操作的效率。

## 开发商购买土地

### 卡码网 44. 开发商购买土地

> 一个城市区域被划分成 `n * m` 个连续的区块，每个区块有不同的权值，代表土地价值。A、B 两家公司要买这块地，只允许按横向或纵向划分成两个子区域，每个子区域至少含一个区块。求两家各自子区域土地总价值之差的最小值。

[题目链接：卡码网 44. 开发商购买土地](https://kamacoder.com/problempage.php?pid=1044)

#### Phase 1：最初的思路

刚看到这题时，最核心的想法是：遍历所有可能的切割方案，算出每种方案下两个区域的价值差，取最小的。

为了让「算子区域总和」这一步变快，前缀和就浮出来了。

```go
package main

import (
	"fmt"
	"math"
)

// min 函数，返回两个整数中较小的一个
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// abs 函数，返回一个整数的绝对值
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// get_prefix_sums 函数，计算一维数组的前缀和
func get_prefix_sums(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	}
	sums := make([]int, len(arr))
	sums[0] = arr[0]
	for i := 1; i < len(arr); i++ {
		sums[i] = sums[i-1] + arr[i]
	}
	return sums
}

func solve(arr [][]int) int {
	n := len(arr)
	m := len(arr[0])

	// 1. 修正：col_sums 大小为 m, row_sums 大小为 n
	col_sums := make([]int, m)
	row_sums := make([]int, n)
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			row_sums[i] += arr[i][j]
			col_sums[j] += arr[i][j]
		}
	}

	col_prefix_sums := get_prefix_sums(col_sums)
	row_prefix_sums := get_prefix_sums(row_sums)

	min_diff := math.MaxInt

	// 2. 修正：横向切割使用 row_prefix_sums，且循环边界到 n-2
	if n > 1 {
		total_row_sum := row_prefix_sums[n-1]
		for i := 0; i < n-1; i++ {
			top_sum := row_prefix_sums[i]
			bottom_sum := total_row_sum - top_sum
			diff := abs(top_sum - bottom_sum)
			min_diff = min(min_diff, diff)
		}
	}

	// 3. 修正：纵向切割使用 col_prefix_sums，且循环边界到 m-2
	if m > 1 {
		total_col_sum := col_prefix_sums[m-1]
		for j := 0; j < m-1; j++ {
			left_sum := col_prefix_sums[j]
			right_sum := total_col_sum - left_sum
			diff := abs(left_sum - right_sum)
			min_diff = min(min_diff, diff)
		}
	}

	return min_diff
}
```

先把每行、每列的和算出来，再对它们做前缀和，最后枚举行切和列切的每个位置，取差值最小的那个。

行和列各做一遍，两边的答案取小的。
