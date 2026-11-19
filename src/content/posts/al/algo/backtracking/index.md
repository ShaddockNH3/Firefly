---
title: 回溯
published: 2025-08-02
description: 组合、子集、排列、N 皇后，代码随想录回溯章的 Go 实现
category: 算法
series: 算法
seriesOrder: 6
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

回溯本质上是**有组织的暴力枚举**。抽象成树之后，遍历过程就一句话：

> for 循环横向遍历，递归纵向遍历，回溯不断调整结果集。

for 循环的长度是这一层的选择数，递归的深度就是决策树的高度。

## 模板

```c++
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本层集合中元素) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```

Go 里写起来是三件事：`path = append(path, x)`、递归、`path = path[:len(path)-1]`。这三步顺序错了，结果就会莫名其妙。

## 组合模型：不在乎顺序

`[1, 2]` 和 `[2, 1]` 算同一种，所以要用 `startIndex` 当路标——下一层只能往后选。

### 77. 组合

> 给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

[题目链接：77. 组合](https://leetcode.cn/problems/combinations/)

```go
func combine(n int, k int) [][]int {
    res:=[][]int{}
    path:=[]int{}
    // 题目保证 nk 数据合法，所以可以省略检查
    backtracking(n, k, 1, &res, &path)
    return res
}

func backtracking(n int, k int, start int, res *[][]int, path *[]int) {
    // 终止条件：当路径长度等于 k 时，找到了一个组合
    if len(*path) == k {
        temp := make([]int, k)
        copy(temp, *path)
        *res = append(*res, temp)
        return
    }

    // for 循环是回溯的核心，它代表了在当前层级的所有选择
    for i := start; i <= n; i++ {
        // 1. 处理节点 (做出选择)
        *path = append(*path, i)
        // 2. 递归 (深入下一层)
        backtracking(n, k, i+1, res, path)
        // 3. 回溯 (撤销选择)
        *path = (*path)[:len(*path)-1]
    }
}
```

`copy` 那两行不能省。直接 `*res = append(*res, *path)` 会把切片的引用存进去，后面回溯一改，结果集里的内容也跟着变。

**走过的弯路**：第一版没有 `i <= n` 的剪枝，树的右边一大片枝根本不可能是答案，却照样递归到底。

剪枝的判断是：当前已经选了 `len(path)` 个，还需要 `k - len(path)` 个，剩下的可选数字只有 `n - i + 1` 个。不够就直接不进循环：

```go
// 还需要 k - len(path) 个，剩下的不够就停
for i := start; i <= n-(k-len(*path))+1; i++ {
```

这一行把 `n=20, k=10` 这种用例的耗时砍掉一个量级。

### 216. 组合总和 III

> 找出所有相加之和为 `n` 的 `k` 个数的组合，只使用 1 到 9，每种组合不能重复。

[题目链接：216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)

和 77 比多了一个 `sum` 参数，终止条件变成「长度等于 k **且** 和等于 n」。

```go
func combinationSum3(k int, n int) [][]int {
    res := [][]int{}
    path := []int{}
    backtracking(k, n, 1, &res, &path, 0)
    return res
}

func backtracking(k int, n int, start int, res *[][]int, path *[]int, sum int) {
    // 剪枝 1：如果 sum 已经大于 n，后续不可能成功，直接返回
    if sum > n {
        return
    }

    if sum == n && len(*path) == k {
        temp := make([]int, k)
        copy(temp, *path)
        *res = append(*res, temp)
        return
    }

    // 剪枝 2：通过限制 for 循环的上界来对“数量”进行剪枝
    for i := start; i <= 9-(k-len(*path))+1; i++ {
        // 剪枝 3：对“和”进行剪枝
        if sum+i > n {
            break // 如果当前和加上 i 就超了，那后续更大的 i 更没希望，直接结束本层循环
        }

        sum += i
        *path = append(*path, i)
        backtracking(k, n, i+1, res, path, sum)
        sum -= i
        *path = (*path)[:len(*path)-1]
    }
}
```

### 17. 电话号码的字母组合

> 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

[题目链接：17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

这题的树是多叉的：每个数字对应 3~4 个字母，第几层由数字的下标决定，所以不用 `startIndex`，用的是「处理到第几个数字」的下标。

```go
// LeetCode 17. 电话号码的字母组合
// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/

func letterCombinations(digits string) []string {
    // 步骤 6：处理边界情况，如果输入为空，直接返回空列表
    if len(digits) == 0 {
        return []string{}
    }

    // 初始化结果集、路径、和密码本
    res := []string{}
    path := []byte{}
    mp := map[byte]string{
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz",
    }

    // 步骤 2：派出我们的探险家，从第 0 个数字开始
    backtracking(digits, &res, &path, mp, 0)
    return res
}

// 我们的回溯探险家函数
// digits: 藏宝图 (为了效率，也可以用指针 *string)
// res: 宝藏库
// path: 当前走过的路径
// mp: 密码本 (map 是引用类型，直接传递即可)
// start: 当前在藏宝图的第几个位置
func backtracking(digits string, res *[]string, path *[]byte, mp map[byte]string, start int) {
    // 步骤 3：定义终止条件
    if len(*path) == len(digits) {
        // 找到一个完整的组合，复制一份放入宝藏库
        tmp := make([]byte, len(*path))
        copy(tmp, *path)
        *res = append(*res, string(tmp))
        return // 结束这条路径的探索
    }

    // 步骤 4：获取当前数字对应的字母选项
    letters := mp[digits[start]]

    // 步骤 5：遍历所有选项，执行回溯三部曲
    for i := 0; i < len(letters); i++ {
        letter := letters[i]

        // 1. 做出选择
        *path = append(*path, letter)
        // 2. 前进探索，处理下一个数字
        backtracking(digits, res, path, mp, start+1)
        // 3. 撤销选择，准备尝试下一个字母
        *path = (*path)[:len(*path)-1]
    }
}
```

注意 `start` 的含义和组合题不同：这里不是「从哪个元素开始选」，而是「处理到第几个数字」。所以递归传的是 `start+1`，循环里也不从 `start` 开始。

### 39. 组合总和

> 给定无重复元素的数组 `candidates` 和目标数 `target`，找出所有和为 `target` 的组合。每个数字可以无限次重复选取。

[题目链接：39. 组合总和](https://leetcode.cn/problems/combination-sum/)

和 77 的区别只在一行：递归时传 `i` 而不是 `i+1`，元素就能重复取。

```go
import "sort"

func combinationSum(candidates []int, target int) [][]int {
    res := [][]int{}
    path := []int{}

    // 关键优化点：对数组进行排序，是高效剪枝的前提！
    sort.Ints(candidates)

    // 为了代码简洁，可以不使用指针传递 candidates 和 path
    // sum 也可以在递归中计算，而不是作为参数传递
    backtracking(candidates, target, &res, path, 0)
    return res
}

func backtracking(candidates []int, target int, res *[][]int, path []int, start int) {
    // base case: target 被减为 0，说明找到了一个有效组合
    if target == 0 {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
        return
    }

    for i := start; i < len(candidates); i++ {
        // 剪枝：如果当前数字已经大于剩余的 target，那么后续更大的数字更不可能了
        if candidates[i] > target {
            break
        }

        // 1. 做出选择
        path = append(path, candidates[i])
        // 2. 递归探索：注意，下次还是从 i 开始，因为数字可以重复使用
        // 将 target 减去当前值，作为新的目标传入，避免了 sum 参数
        backtracking(candidates, target-candidates[i], res, path, i)
        // 3. 撤销选择
        path = path[:len(path)-1]
    }
}
```

这里用 `target` 递减代替 sum 递增，省一个参数。排序是为了「超出就 break」这个剪枝——不排序的话只能 continue，效率差一截。

### 40. 组合总和 II

> 给定可能有重复元素的数组 `candidates` 和目标数 `target`，找出所有和为 `target` 的组合。每个数字只能用一次，结果不能有重复组合。

[题目链接：40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)

```go
import "sort"

// LeetCode 40. 组合总和 II
// https://leetcode.cn/problems/combination-sum-ii/

func combinationSum2(candidates []int, target int) [][]int {
    res := [][]int{}
    path := []int{}

    // 步骤 1：排序，这是去重逻辑的基石
    sort.Ints(candidates)

    backtracking(candidates, target, &res, path, 0)
    return res
}

func backtracking(candidates []int, target int, res *[][]int, path []int, start int) {
    // base case: 找到了一个组合
    if target == 0 {
        tmp := make([]int, len(path))
        copy(tmp, path)
        *res = append(*res, tmp)
        return
    }

    // start 是本轮递归的起始位置
    for i := start; i < len(candidates); i++ {
        // 剪枝：如果当前数字已经大于剩余的 target，后续的数字更大，肯定无解
        if candidates[i] > target {
            break
        }

        // 灵魂去重逻辑！
        // i > start 保证了对于 [1, 2, 2, 2], 我们在选择组合 [1, 2(第一个)] 之后，
        // 不会再选择 [1, 2(第二个)] 和 [1, 2(第三个)]，避免了重复。
        // 同时，它也保证了我们不会错过 [2(第一个), 2(第二个)] 这样的有效组合。
        if i > start && candidates[i] == candidates[i-1] {
            continue
        }

        // 回溯三部曲
        path = append(path, candidates[i])
        // 递归探索：每个数字只能用一次，所以下一层从 i+1 开始
        backtracking(candidates, target-candidates[i], res, path, i+1)
        // 撤销选择
        path = path[:len(path)-1]
    }
}
```

核心在 for 循环里的那一句：

```go
if i > start && candidates[i] == candidates[i-1] {
	continue
}
```

这就是**树层去重**：同一层里，值相同的分支只走第一个，后面的跳过。`i > start` 保证的是「同层」，不是「同枝」——同一枝里允许用相同值的不同元素。

### 131. 分割回文串

> 给你一个字符串 `s`，请将 `s` 分割成一些子串，使每个子串都是回文串。返回所有可能的分割方案。

[题目链接：131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

这题的「选择」不是选元素，而是选**切割点**。第 `i` 层决定从哪里切一刀。

```go
import "strings"

func partition(s string) [][]string {
    res := [][]string{}
    path := []string{}

    // 派出探险家，从索引 0 开始我们的切割之旅
    backtracking(s, &res, &path, 0)
    return res
}

// 探险家函数：负责从 s 的 startIndex 位置开始，寻找所有回文分割方案
func backtracking(s string, res *[][]string, path *[]string, startIndex int) {
    // 终止条件：当起始索引已经到达字符串末尾，说明找到了一组完整的分割方案
    if startIndex == len(s) {
        // 复制一份当前路径，加入结果集
        tmp := make([]string, len(*path))
        copy(tmp, *path)
        *res = append(*res, tmp)
        return // 结束当前探索分支
    }

    // for 循环：尝试从 startIndex 开始的所有可能切割点
    for i := startIndex; i < len(s); i++ {
        // 校验：检查从 startIndex 到 i 的子串是否是回文
        if isPalindrome(s, startIndex, i) {
            // 如果是回文，说明这次切割是合法的
            str := s[startIndex : i+1]

            // --- 回溯三部曲 ---
            // 1. 做出选择：将切下的回文串加入路径
            *path = append(*path, str)
            // 2. 递归探索：派分身去处理剩下的字符串（从 i+1 开始）
            backtracking(s, res, path, i+1)
            // 3. 撤销选择：分身回来了，我收回刚才的选择，准备尝试下一种切法
            *path = (*path)[:len(*path)-1]

        } else {
            // 如果不是回文，放弃这种切法，继续扩大切割范围（i++）
            continue
        }
    }
}

// 得力小帮手：判断一个字符串的子串是否是回文
// 小贴士：这里的实现对于纯英文字符串是最高效的。
// 如果要完美支持中文等复杂字符，应该将 s 一次性转为 []rune 再进行判断。
func isPalindrome(s string, left int, right int) bool {
    for left < right {
        if s[left] != s[right] {
            return false
        }
        left++
        right--
    }
    return true
}
```

切割问题都能套这个模板：`for` 枚举切点，`startIndex` 表示下一段从哪开始，切到末尾就是一条完整路径。

### 93. 复原 IP 地址

> 给定一个只包含数字的字符串 `s`，返回所有可能的有效 IP 地址。有效地址由 4 段组成，每段 0~255，且不能有前导零。

[题目链接：93. 复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)

```go
import (
    "strconv"
    "strings"
)

func restoreIpAddresses(s string) []string {
    res := []string{}
    path := []string{}

    if len(s) < 4 || len(s) > 12 {
        return res
    }

    backtracking(s, &res, &path, 0)
    return res
}

func backtracking(s string, res *[]string, path *[]string, start int) {
    if len(*path) == 4 && start == len(s) {
        *res = append(*res, strings.Join(*path, "."))
        return
    }

    if len(*path) == 4 || start == len(s) {
        return
    }

    for i := start; i < len(s) && i < start+3; i++ {
        segment := s[start : i+1]

        // --- 将复杂的判断逻辑拆分成清晰的步骤 ---
        // 1. 校验前导零：长度大于 1 但以'0'开头，不合法
        if len(segment) > 1 && segment[0] == '0' {
            break // 后续的 "0xx" 更不合法，直接结束本轮循环
        }

        // 2. 转换成数字
        num, _ := strconv.Atoi(segment)

        // 3. 校验数值范围
        if num > 255 {
            break // 后续的 "256x" 更不合法，直接结束本轮循环
        }

        // --- 所有校验通过，是合法段！执行回溯三部曲 ---
        *path = append(*path, segment)
        backtracking(s, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

和 131 是一个模子：切点 + 合法性校验。

校验那一段是这题真正花时间的地方，当时的写法把所有情况塞进了一个长条件：

```go
if (len(cur_left) == 1 && cur_num == 0) ||
	(cur_num != 0 && !strings.HasPrefix(cur_left, "0") && cur_num <= 255 && cur_num > 0) {
	// 合法
}
```

意思拆开就是：**要么你就是单独一个 0，要么你不是 0、开头不是 0、并且在 1 到 255 之间**。

后来整理成三步，好读一些：

1. 先看前导零：`len(segment) > 1 && segment[0] == '0'` → 不合法；
2. 再看数值：`num > 255` → 不合法；
3. 段数也要卡：`len(*path) == 4` 但还没走完字符串 → 提前 return。

## 子集模型

子集和组合的区别在于**收集的位置**：组合是叶子节点收集，子集是每个节点都收集。

### 78. 子集

> 给你一个整数数组 `nums`，数组中的元素互不相同，返回该数组所有可能的子集。

[题目链接：78. 子集](https://leetcode.cn/problems/subsets/)

```go
import "sort"

// LeetCode 90. 子集 II
// https://leetcode.cn/problems/subsets-ii/

func subsetsWithDup(nums []int) [][]int {
    res := [][]int{}
    path := []int{}

    // 步骤 1：施展去重魔法的前提咒语 -> 排序！
    sort.Ints(nums)

    backtacking(nums, &res, &path, 0)
    return res
}

func backtacking(nums []int, res *[][]int, path *[]int, start int) {
    // 步骤 2：沿途收集策略，决策树的每个节点都是一个合法子集
    tmp := make([]int, len(*path))
    copy(tmp, *path)
    *res = append(*res, tmp)

    // 隐式的终止条件：当 for 循环无法进入时，递归自然结束
    for i := start; i < len(nums); i++ {
        // 步骤 3：施展核心去重咒语！
        // 在树的同一层中，如果当前数字和前一个数字相同，则跳过，避免产生重复分支
        if i > start && nums[i] == nums[i-1] {
            continue
        }

        // 经典的回溯三部曲
        *path = append(*path, nums[i])
        // 因为元素不可复用，所以下一层从 i+1 开始
        backtacking(nums, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

注意收集写在函数开头，`return` 都没有——因为空集也是子集，而叶子节点自然会退出。

### 90. 子集 II

> 给你一个整数数组 `nums`，其中可能包含重复元素，返回所有不重复的子集。

[题目链接：90. 子集 II](https://leetcode.cn/problems/subsets-ii/)

和 78 一样，先收集再递归，额外加两件事：`sort.Ints(nums)` 排序，for 循环里加树层去重。

```go
import "sort"

// LeetCode 90. 子集 II
// https://leetcode.cn/problems/subsets-ii/

func subsetsWithDup(nums []int) [][]int {
    res := [][]int{}
    path := []int{}

    // 步骤 1：施展去重魔法的前提咒语 -> 排序！
    sort.Ints(nums)

    backtacking(nums, &res, &path, 0)
    return res
}

func backtacking(nums []int, res *[][]int, path *[]int, start int) {
    // 步骤 2：沿途收集策略，决策树的每个节点都是一个合法子集
    tmp := make([]int, len(*path))
    copy(tmp, *path)
    *res = append(*res, tmp)

    // 隐式的终止条件：当 for 循环无法进入时，递归自然结束
    for i := start; i < len(nums); i++ {
        // 步骤 3：施展核心去重咒语！
        // 在树的同一层中，如果当前数字和前一个数字相同，则跳过，避免产生重复分支
        if i > start && nums[i] == nums[i-1] {
            continue
        }

        // 经典的回溯三部曲
        *path = append(*path, nums[i])
        // 因为元素不可复用，所以下一层从 i+1 开始
        backtacking(nums, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

### 491. 递增子序列

> 给定一个整型数组，返回所有长度大于等于 2 的递增子序列。可能有重复元素。

[题目链接：491. 递增子序列](https://leetcode.cn/problems/non-decreasing-subsequences/)

```go
func findSubsequences(nums []int) [][]int {
    res := [][]int{}
    path := []int{}
    backtracking(nums, &res, &path, 0)
    return res
}

// 探险家函数：从 nums 的 startIndex 位置开始，寻找所有合法的非递减子序列
func backtracking(nums []int, res *[][]int, path *[]int, startIndex int) {
    // 收集答案：只要当前路径长度>=2，它就是一个合法的解
    // 注意：这里会收集到重复的解，但后续的去重逻辑会保证最终 res 里的解不重复
    // （更优的做法是在 append 前用一个 map 对 res 去重，但当前解法也能通过）
    if len(*path) >= 2 {
        tmp := make([]int, len(*path))
        copy(tmp, *path)
        *res = append(*res, tmp)
    }

    // 如果探索已经到达终点，自然返回
    if startIndex == len(nums) {
        return
    }

    // “本层去重”的魔法清单！每一层递归都有一个全新的清单
    usedMap := make(map[int]bool)

    // for 循环：遍历从 startIndex 开始的所有选择
    for i := startIndex; i < len(nums); i++ {
        // --- 合法性校验 ---
        // 1. 递增校验：如果 path 不为空，且当前数字小于 path 的最后一个数字，则不合法
        if len(*path) > 0 && nums[i] < (*path)[len(*path)-1] {
            continue
        }

        // 2. 本层去重校验：如果当前数字在本层已经被用过了，则不合法
        if _, ok := usedMap[nums[i]]; ok {
            continue
        }

        // --- 所有校验通过，是合法的选择！ ---
        // 标记：将当前数字加入本层的“已用清单”
        usedMap[nums[i]] = true

        // --- 回溯三部曲 ---
        *path = append(*path, nums[i])
        backtracking(nums, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

这题不能排序（排序会破坏「递增子序列」的含义），所以不能用 `nums[i] == nums[i-1]` 那套去重。

关键在于分清**两种重复**：

- **解集中的重复**：`[4, 7]` 和 `[4, 7]` 不能出现两次，必须去掉；
- **子序列内部的重复**：`[4, 4, 7]` 里两个 4 是不同的位置，是合法的，不能误删。

解法是「层级 Map 去重」：在每次 `backtracking` 里开一个局部 `map`，只记录**这一层**用过哪些值。

```go
usedMap := make(map[int]bool)
for i := startIndex; i < len(nums); i++ {
	// 本层已经用过这个值，跳过
	if _, ok := usedMap[nums[i]]; ok {
		continue
	}
	// 不满足递增，跳过
	if len(*path) > 0 && nums[i] < (*path)[len(*path)-1] {
		continue
	}
	usedMap[nums[i]] = true
	// 递归 + 回溯
}
```

`usedMap` 声明在 for 循环**外面**、`backtracking` 里面，所以每层各有一份，互不影响。这就是它和全局 `used` 数组的区别。

## 排列模型：顺序很重要

`[1, 2]` 和 `[2, 1]` 是两种答案，所以不能用 `startIndex`（那样只能往后选），改用 `used` 数组记录哪些元素已经用过。

### 46. 全排列

> 给定一个没有重复数字的序列，返回其所有可能的全排列。

[题目链接：46. 全排列](https://leetcode.cn/problems/permutations/)

```go
func permute(nums []int) [][]int {
    res := [][]int{}
    path := []int{}
    // usedMap 用来记录在当前路径中，哪些数字已经被使用过了
    usedMap := make(map[int]bool)
    backtracking(nums, &res, &path, usedMap)
    return res
}

// 探险家函数：它的任务是基于当前的 path 和 usedMap，去寻找所有可能的排列
func backtracking(nums []int, res *[][]int, path *[]int, usedMap map[int]bool) {
    // 终止条件：当路径的长度等于原数组的长度时，说明找到了一个完整的排列
    if len(*path) == len(nums) {
        tmp := make([]int, len(nums))
        copy(tmp, *path)
        *res = append(*res, tmp)
        return // 找到一个解后，结束当前分支
    }

    // for 循环：在每一层，都从头开始遍历所有数字，寻找下一个可用的元素
    for i := 0; i < len(nums); i++ {
        // 剪枝/校验：如果当前数字已经在路径中被用过了，就跳过
        if usedMap[nums[i]] {
            continue
        }

        // --- 经典的回溯三部曲（排列版） ---
        // 1. 做出选择
        *path = append(*path, nums[i]) // 将数字加入路径
        usedMap[nums[i]] = true      // 在“已用清单”上做标记

        // 2. 递归探索
        backtracking(nums, res, path, usedMap)

        // 3. 撤销选择 (关键的回溯步骤！)
        *path = (*path)[:len(*path)-1] // 将数字从路径中移除
        delete(usedMap, nums[i])     // 在“已用清单”上擦掉标记，让它可以在其他分支中被重新使用
    }
}
```

用 `map` 记录值是否用过，前提是数组无重复。

**走过的弯路**：一开始只记得 `path` 要回滚，忘了 `used` 也要跟着回滚。结果是「当前路径结束了，但数字还挂在已用清单里」，后面整片分支都进不去。

正确做法是**两个一起改**：

```go
usedMap[nums[i]] = true
*path = append(*path, nums[i])

backtracking(nums, res, path, usedMap)

usedMap[nums[i]] = false      // 这一步最容易漏
*path = (*path)[:len(*path)-1]
```

`path` 有形（能看见长度变化），`used` 无形（看不见），所以后者更容易忘。

### 47. 全排列 II

> 给定一个可包含重复数字的序列，返回所有不重复的全排列。

[题目链接：47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)

```go
import "sort"

func permuteUnique(nums []int) [][]int {
    // 步骤 1：排序，是所有去重逻辑的基石
    sort.Ints(nums)
    res := [][]int{}
    path := []int{}
    // 步骤 2：创建一个 used 数组，记录每个“位置”是否被使用
    used := make([]bool, len(nums))
    backtracking(nums, &res, &path, used)
    return res
}

func backtracking(nums []int, res *[][]int, path *[]int, used []bool) {
    if len(*path) == len(nums) {
        tmp := make([]int, len(nums))
        copy(tmp, *path)
        *res = append(*res, tmp)
        return
    }

    for i := 0; i < len(nums); i++ {
        // --- 最终的、完美的“双重门禁”剪枝逻辑 ---

        // 门禁 1：如果当前位置的元素已经被用过了，直接跳过
        if used[i] {
            continue
        }

        // 门禁 2：如果当前元素和前一个元素相同，并且前一个元素是“刚刚被用完放回”的状态，
        // 那么当前元素的选择就会导致重复，必须跳过！
        if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
            continue
        }

        // --- 经典的回溯三部曲 ---
        *path = append(*path, nums[i])
        used[i] = true

        backtracking(nums, res, path, used)

        *path = (*path)[:len(*path)-1]
        used[i] = false
    }
}
```

去重条件是这题的全部难点：

```go
if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
	continue
}
```

`!used[i-1]` 是重点，它区分「同一层重复」和「同一枝重复」：

- `nums[i] == nums[i-1]` 且前一个**没用过** → 说明这一层前面刚用过同值的元素、并且已经回溯回来了，是同层重复，跳过；
- 前一个**用过了** → 说明它在当前这条枝上（同一个排列里），允许。

判断条件写成 `used[i-1]` 会漏掉一半答案，写成 `!used[i-1]` 才对。这地方当时来回改了三遍。

## 51. N 皇后

> 将 `n` 个皇后放置在 `n×n` 的棋盘上，使皇后彼此之间不能相互攻击。返回所有不同的解法。

[题目链接：51. N 皇后](https://leetcode.cn/problems/n-queens/)

```go
func solveNQueens(n int) [][]string {
    res := [][]string{}
    // path 用来存放棋盘的字符串表示
    path := []string{}
    // notes 备忘录，notes[row] = col 表示第 row 行的皇后放在了第 col 列
    notes := make([]int, n)

    backtracking(n, &notes, &res, &path, 0)
    return res
}

// 探险家函数：负责在第 row 行，为皇后寻找一个安全的位置
func backtracking(n int, notes *[]int, res *[][]string, path *[]string, row int) {
    // 终止条件：当 row == n 时，说明已经成功放好了 n 个皇后
    if row == n {
        // 复制一份 path，这是一个完整的解
        tmp := make([]string, n)
        copy(tmp, *path)
        *res = append(*res, tmp)
        return
    }

    // for 循环：遍历当前 row 行的所有列
    for col := 0; col < n; col++ {
        // 派出裁判进行检查
        if !check(notes, row, col) {
            continue // 如果不安全，就尝试下一列
        }

        // --- 经典的回溯三部曲 ---
        // 1. 做出选择
        (*notes)[row] = col          // 在备忘录里记录位置
        *path = append(*path, getQ(col, n)) // 在棋盘上画出这一行

        // 2. 递归探索：去下一行继续寻找位置
        backtracking(n, notes, res, path, row+1)

        // 3. 撤销选择：探索回来了，收回刚才的选择，为 for 循环的下一次尝试做准备
        *path = (*path)[:len(*path)-1]
        // (*notes)[row] = 0 // 这行可以不写，因为下一次循环会覆盖，但写上逻辑更清晰
    }
}

// 帮忙画出 "...Q.." 这样一行的工具函数
func getQ(col int, n int) string {
    tmp := make([]rune, n)
    for k := 0; k < n; k++ {
        tmp[k] = '.'
    }
    tmp[col] = 'Q'
    return string(tmp)
}

// 裁判函数：检查在 (row, col) 位置放皇后是否安全
func check(notes *[]int, row int, col int) bool {
    // 只需要检查之前已经放好的 0 到 row-1 行
    for prev_row := 0; prev_row < row; prev_row++ {
        prev_col := (*notes)[prev_row]

        // 检查三路冲突：
        // 1. prev_col == col: 是否在同一列
        // 2. prev_row - prev_col == row - col: 是否在左上 - 右下斜线
        // 3. prev_row + prev_col == row + col: 是否在右上 - 左下斜线
        if prev_col == col || prev_row-prev_col == row-col || prev_row+prev_col == row+col {
            return false // 只要有一个冲突，就不安全
        }
    }
    return true // 所有检查都通过了，是安全的
}
```

棋盘类问题的树是「行」：每层决定这一行的皇后放哪一列，层数就是行数。合法性检查要同时看三个方向：上面同列、左上对角线、右上对角线。

## 总结

这几天做下来的题，可以归成三个模型：

### 组合 / 子集模型（不在乎顺序）

- **基础版**：用 `startIndex` 当路标，下一层从 `i+1` 开始。
- **可重复取**：递归传 `i` 而不是 `i+1`。
- **子集**：决策树上每个节点都是答案，进入就收集。
- **去重版**：先 `sort`，再在 for 里加 `if i > start && nums[i] == nums[i-1] { continue }`。

### 排列模型（顺序重要）

- 不用 `startIndex`，用 `used` 记录用过的元素，每层从头挑。
- 有重复元素时，排序 + `nums[i] == nums[i-1] && !used[i-1]` 去重。

### 棋盘 / 切割模型

- 切割：`for` 枚举切点，`startIndex` 表示下一段起点。
- 棋盘：每层是一行，逐列尝试并检查冲突。

三个模型的骨架完全一样，区别只在三处：**收集的时机**、**下一层的起点**、**去重的条件**。把这三处想清楚，回溯就不用背模板了。
