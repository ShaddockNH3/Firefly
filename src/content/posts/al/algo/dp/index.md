---
title: 动态规划
published: 2025-08-24
description: 五步法、背包、打家劫舍与股票系列，代码随想录动态规划章的 Go 实现
category: 算法
series: 算法
seriesOrder: 9
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

动规和贪心的区别只有一句：**动规的当前状态由前面的状态推导出来，贪心是每步直接选局部最优**。

## 五步法

1. 确定 `dp` 数组以及下标的含义
2. 确定递推公式
3. `dp` 数组如何初始化
4. 确定遍历顺序（从左往右 / 从右往左）
5. 举例推导 `dp` 数组

调不出来的时候，按这三条自查：

- 这道题的递推公式我推了吗？
- 打印 `dp` 数组的日志了吗？
- 打印出来的和我想的一样吗？

九成的 bug 出在第一步——`dp[i]` 到底代表什么没想清楚，后面全歪。

## 509. 斐波那契数

[题目链接：509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/)

```go
func fib(n int) int {
    // 1. 处理好最基础的情况，这是 DP 的基石
    if n==0||n==1{
        return n
    }

    // 2. 我们不需要一个大数组，只需要两个变量来记录前两个状态
    pre,next:=0,1 // pre 代表 F(i-2), next 代表 F(i-1)

    // 3. 从 2 开始，一步步向我们的目标 n 迈进！
    for i:=2;i<=n;i++{
        // 这就是最关键的状态转移！
        // 新的 pre 就是旧的 next
        // 新的 next 就是旧的 pre + 旧的 next
        pre,next=next,pre+next
    }

    // 4. 当循环结束时，next 里存的就是我们想要的 F(n) 啦
    return next
}
```

`fib(5)` 会把 `fib(3)` 算好几遍，复杂度指数级。

```go
// DP 表版本
func fib_dp_table(n int) int {
	if n <= 1 {
		return n
	}
	dp := make([]int, n+1)
	dp[0], dp[1] = 0, 1
	for i := 2; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}
	return dp[n]
}
```

再往下就是状态压缩，只留两个变量滚动。这题当时写了递归 → 记忆化 → DP 表 → 滚动变量四个版本，过程比答案重要。

## 70. 爬楼梯

[题目链接：70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

`dp[i]` 是「到达第 i 阶的方法数」。

```go
package main

import "fmt"

func solve() int {
    var M, N int
    // 1. 先读取 M, N 的值
    fmt.Scan(&M, &N)

    // 2. 根据 M, N 创建正确大小的数组
    weights := make([]int, M)
    values := make([]int, M)
    dp := make([]int, N+1)

    // 3. 读取物品数据
    for i := 0; i < M; i++ {
        fmt.Scan(&weights[i])
    }
    for i := 0; i < M; i++ {
        fmt.Scan(&values[i])
    }

    // 4. 核心 DP 逻辑
    // 遍历每一个物品
    for i := 0; i < M; i++ {
        // 倒序遍历背包容量，以保证 0-1 背包的性质
        for j := N; j >= weights[i]; j-- {
            // 做决策：是不放这个物品 (dp[j])，还是放 (dp[j-weights[i]]+values[i])
            dp[j] = max(dp[j], dp[j-weights[i]]+values[i])
        }
    }

    return dp[N]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    maxValue := solve()
    fmt.Println(maxValue)
}
```

爬到第 i 阶，要么从 i-1 走一步，要么从 i-2 走两步。

**当时的讨论**：`dp[0]` 该定义成几？定义成 1（「站在地面不动」也是一种方法）代码能过，但逻辑不严谨，面试被追问容易露馅。干脆从 1 开始定义，跳过这个坑。

## 746. 使用最小花费爬楼梯

[题目链接：746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)

```go
package main

import "fmt"

func solve() int {
    var M, N int
    // 1. 先读取 M, N 的值
    fmt.Scan(&M, &N)

    // 2. 根据 M, N 创建正确大小的数组
    weights := make([]int, M)
    values := make([]int, M)
    dp := make([]int, N+1)

    // 3. 读取物品数据
    for i := 0; i < M; i++ {
        fmt.Scan(&weights[i])
    }
    for i := 0; i < M; i++ {
        fmt.Scan(&values[i])
    }

    // 4. 核心 DP 逻辑
    // 遍历每一个物品
    for i := 0; i < M; i++ {
        // 倒序遍历背包容量，以保证 0-1 背包的性质
        for j := N; j >= weights[i]; j-- {
            // 做决策：是不放这个物品 (dp[j])，还是放 (dp[j-weights[i]]+values[i])
            dp[j] = max(dp[j], dp[j-weights[i]]+values[i])
        }
    }

    return dp[N]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    maxValue := solve()
    fmt.Println(maxValue)
}
```

注意加的是 `cost[i-1]`：**支付费用才能往上走**，算的是「离开那一阶」的费用。

## 62. 不同路径

[题目链接：62. 不同路径](https://leetcode.cn/problems/unique-paths/)

```go
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    // 1. 起点即终点：如果起点就是障碍物，直接返回 0，这是最高效的剪枝！
    if obstacleGrid[0][0] == 1 {
        return 0
    }

    m, n := len(obstacleGrid), len(obstacleGrid[0])
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
    }

    // 2. 遍历所有格子，根据我们的规则填充 dp 表
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            // 核心规则：只在当前格子是空地时，才计算路径数
            if obstacleGrid[i][j] == 0 {
                // 处理起点，这是所有路径的源头
                if i == 0 && j == 0 {
                    dp[i][j] = 1
                // 处理第一行，路径只能从左边来
                } else if i == 0 {
                    dp[i][j] = dp[i][j-1]
                // 处理第一列，路径只能从上面来
                } else if j == 0 {
                    dp[i][j] = dp[i-1][j]
                // 处理内部格子，路径是左边和上边的总和
                } else {
                    dp[i][j] = dp[i][j-1] + dp[i-1][j]
                }
            }
            // 如果当前格子是障碍物 (obstacleGrid[i][j] == 1),
            // 我们什么都不做。因为 Go 中 int 切片的默认值是 0,
            // 这天然地满足了 dp[i][j] = 0 的规则。太优雅了！
        }
    }

    // 3. 返回右下角格子的值，即为最终答案
    return dp[m-1][n-1]
}
```

## 63. 不同路径 II

[题目链接：63. 不同路径 II](https://leetcode.cn/problems/unique-paths-ii/)

多一个障碍，两个地方要改：

```go
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    // 1. 起点即终点：如果起点就是障碍物，直接返回 0，这是最高效的剪枝！
    if obstacleGrid[0][0] == 1 {
        return 0
    }

    m, n := len(obstacleGrid), len(obstacleGrid[0])
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
    }

    // 2. 遍历所有格子，根据我们的规则填充 dp 表
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            // 核心规则：只在当前格子是空地时，才计算路径数
            if obstacleGrid[i][j] == 0 {
                // 处理起点，这是所有路径的源头
                if i == 0 && j == 0 {
                    dp[i][j] = 1
                // 处理第一行，路径只能从左边来
                } else if i == 0 {
                    dp[i][j] = dp[i][j-1]
                // 处理第一列，路径只能从上面来
                } else if j == 0 {
                    dp[i][j] = dp[i-1][j]
                // 处理内部格子，路径是左边和上边的总和
                } else {
                    dp[i][j] = dp[i][j-1] + dp[i-1][j]
                }
            }
            // 如果当前格子是障碍物 (obstacleGrid[i][j] == 1),
            // 我们什么都不做。因为 Go 中 int 切片的默认值是 0,
            // 这天然地满足了 dp[i][j] = 0 的规则。太优雅了！
        }
    }

    // 3. 返回右下角格子的值，即为最终答案
    return dp[m-1][n-1]
}
```

**容易漏的地方**：第一行第一列的初始化，遇到障碍之后要停下——障碍后面的格子根本到不了，不能继续填 1。

## 343. 整数拆分

[题目链接：343. 整数拆分](https://leetcode.cn/problems/integer-break/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// memo 作为“记忆小本本”，避免重复计算
var memo map[*TreeNode][]int

func rob(root *TreeNode) int {
    memo = make(map[*TreeNode][]int)
    result := dfs(root)
    return max(result[0], result[1])
}

// dfs 函数的定义：
// 输入一个节点 root，返回一个长度为 2 的切片 result
// result[0] 表示：不偷 root 这家，能获得的最大金额
// result[1] 表示：偷 root 这家，能获得的最大金额
func dfs(root *TreeNode) []int {
    // 递归出口：空节点收益为 0
    if root == nil {
        return []int{0, 0}
    }
    // 查阅“小本本”，如果算过，直接返回结果
    if result, ok := memo[root]; ok {
        return result
    }

    // 后序遍历思想：先去处理左、右孩子，拿到它们的结果
    result_left := dfs(root.Left)
    result_right := dfs(root.Right)

    // --- 开始计算当前节点 root 的最优解 ---

    // 方案一：不偷 root
    // 如果不偷当前节点，那么左、右孩子就可以自由选择偷或不偷，我们都取它们各自的最优解
    val_not_rob := max(result_left[0], result_left[1]) + max(result_right[0], result_right[1])

    // 方案二：偷 root
    // 如果偷了当前节点，那么左、右孩子就都不能偷了
    val_rob := root.Val + result_left[0] + result_right[0]

    // 将计算结果封装
    result := []int{val_not_rob, val_rob}

    // 记入“小本本”再返回
    memo[root] = result

    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

三个候选：拆成两段 `j*(i-j)`、继续拆 `j*dp[i-j]`、保持之前的最优 `dp[i]`。

## 96. 不同的二叉搜索树

[题目链接：96. 不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func numTrees(n int) int {
    // dp[i] 表示用 i 个节点能构成的不同 BST 的数量
    dp := make([]int, n+1)

    // 初始化基础情况
    dp[0] = 1 // 空树是一种情况

    // 从节点数为 1 开始，依次计算到 n
    for i := 1; i <= n; i++ {
        // 依次尝试让每个节点都当一次根
        // j 代表左子树的节点数量 (从 0 到 i-1)
        for j := 0; j < i; j++ {
            // 当左子树有 j 个节点时，根节点占 1 个，
            // 那么右子树就有 i-1-j 个节点。
            // 根据乘法原理，总数是 dp[左] * dp[右]
            dp[i] += dp[j] * dp[i-1-j]
        }
    }

    return dp[n]
}

// 这是一个辅助函数，实际解题不需要
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

这题的价值是看出「卡特兰数」的形状：枚举根的位置，左右方案数相乘再求和。

`dp[0] = 1` 必须手写——空树也算一种方案，不设 1 整个乘法链就断了。

## 01 背包

> 有 M 件物品和一个容量为 N 的背包，第 i 件物品重量 `weight[i]`、价值 `value[i]`，每件只能用一次，求最大价值。

一维写法（滚动数组）：

```go
dp := make([]int, N+1) // dp[j]：容量 j 能装的最大价值

for i := 0; i < M; i++ {
	// 必须倒序：保证每件物品只用一次
	for j := N; j >= weights[i]; j-- {
		dp[j] = max(dp[j], dp[j-weights[i]]+values[i])
	}
}
```

**倒序是 01 背包的标志**。正序遍历时 `dp[j-weights[i]]` 可能已被本轮更新，等于同一件物品放了多次——那就变成完全背包了。

### 416. 分割等和子集

[题目链接：416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

翻译成背包：容量 `sum/2`，每个数字的重量和价值都是它本身，问能不能正好装满。

```go
func canPartition(nums []int) bool {
    sum := 0
    for _, num := range nums {
        sum += num
    }
    // 1. 如果总和是奇数，直接判定不可能
    if sum%2 == 1 {
        return false
    }
    // 2. 确定我们的“背包容量”
    N := sum / 2
    // 3. 创建 dp 数组，dp[j] 代表容量为 j 的背包能装的最大价值
    dp := make([]int, N+1)

    // 4. 套用 0-1 背包的一维优化模板
    // 遍历物品
    for i := 0; i < len(nums); i++ {
        // 倒序遍历背包容量
        for j := N; j >= nums[i]; j-- {
            // weights[i] 和 values[i] 都是 nums[i]
            dp[j] = max(dp[j], dp[j-nums[i]]+nums[i])
        }
    }

    // 5. 最终判断：我们凑出的最大和，是否正好等于背包容量？
    return dp[N] == N
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

### 1049. 最后一块石头的重量 II

[题目链接：1049. 最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)

和 416 几乎一样，尽量分成两堆接近的。

```go
func lastStoneWeightII(stones []int) int {
    // 1. 计算石头总重量
    stoneSum := 0
    for _, stone := range stones {
        stoneSum += stone
    }

    // 2. 确定背包容量为总重量的一半
    N := stoneSum / 2
    // 3. 创建 dp 数组，dp[j] 代表容量为 j 的背包能装的最大石头重量
    dp := make([]int, N+1)

    // 4. 套用 0-1 背包的一维优化模板
    // 遍历石头（物品）
    for i := 0; i < len(stones); i++ {
        // 倒序遍历背包容量
        for j := N; j >= stones[i]; j-- {
            dp[j] = max(dp[j], dp[j-stones[i]]+stones[i])
        }
    }

    // 5. 计算最终结果
    // dp[N] 是我们能凑出的最接近 stoneSum/2 的那一堆石头的重量
    // stoneSum - dp[N] 是另一堆石头的重量
    // 两者之差就是最后剩下的石头重量
    return stoneSum - 2*dp[N]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

答案不是 `dp[N]`，而是 `sum - 2*dp[N]`（两堆之差）。

### 494. 目标和

[题目链接：494. 目标和](https://leetcode.cn/problems/target-sum/)

设加正号的和为 `x`，加负号的为 `sum - x`，则 `x - (sum - x) = target`，得 `x = (target + sum) / 2`。

于是变成「装满容量 x 有多少种装法」。

```go
// 你最终掌握的完美解法
func findTargetSumWays(nums []int, target int) int {
    sum := 0
    for _, num := range nums {
        sum += num
    }

    // 绝对值剪枝与奇偶性剪枝
    if abs(target) > sum || (sum+target)%2 == 1 {
        return 0
    }

    // 目标正数和
    N := (sum + target) / 2

    // dp[j] 表示和为 j 的方法数
    dp := make([]int, N+1)
    dp[0] = 1 // 和为 0 的方法只有一种：什么都不选

    for _, num := range nums {
        for j := N; j >= num; j-- {
            dp[j] += dp[j-num]
        }
    }
    return dp[N]
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```

这是**求方案数**的背包：递推从 `max` 变成 `+=`，初始化从 0 变成 1。

两个剪枝：`|target| > sum` 直接 0；`(target+sum)` 是奇数直接 0。

**走过的弯路（三级演进）**：

1. **回溯法**：每个数选正或选负，`O(2^n)`。思路最直观，但 `n = 20` 就超时了。
2. **二维 DP**：`dp[i][j]` 表示前 i 个数凑成 j 的方案数。性能够了，但空间 `O(n*N)`，而且初始化容易写错。
3. **一维 DP**：滚动数组，空间 `O(N)`。就是上面这一版。

这题的收获不是公式，而是「回溯 → 二维 DP → 一维 DP」这条演进路线——很多背包题都可以这么推。

### 474. 一和零

[题目链接：474. 一和零](https://leetcode.cn/problems/ones-and-zeroes/)

二维费用的 01 背包：每个字符串同时消耗 `0` 和 `1`，所以 `dp` 二维，两层容量都倒序。

```go
// 你最终完成的完美解法
func findMaxForm(strs []string, m int, n int) int {
    // dp[i][j] 表示用 i 个 '0' 和 j 个 '1' 的容量，
    // 最多能装下多少个字符串（即子集的最大长度）
    dp := make([][]int, m+1)
    for i := range dp {
        dp[i] = make([]int, n+1)
    }

    // 遍历每一个物品 (字符串)
    for _, str := range strs {
        // 获取当前这个物品的“消耗”
        num0, num1 := getNum(str)

        // 遍历背包容量 (0 的数量)，必须从后往前！
        for i := m; i >= num0; i-- {
            // 遍历背包容量 (1 的数量)，也必须从后往前！
            for j := n; j >= num1; j-- {
                // 核心状态转移方程：
                // 决策：是不放这个 str，还是放这个 str
                dp[i][j] = max(dp[i][j], dp[i-num0][j-num1] + 1)
            }
        }
    }

    // 循环结束后，dp[m][n] 就是我们的答案
    return dp[m][n]
}

// 辅助函数：计算字符串中 0 和 1 的数量
func getNum(str string) (int, int) {
    num0, num1 := 0, 0
    for _, s := range str {
        if s == '0' {
            num0++
        } else if s == '1' {
            num1++
        }
    }
    return num0, num1
}

// 辅助函数：求最大值
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

## 完全背包

物品可以无限取，内层循环正序：

```go
package main

import "fmt"

func completeKnapsack2D(weights []int, values []int, capacity int) int {
	numItems := len(weights)
	// dp[i][j] 表示从前 i 种物品中选择，放入容量为 j 的背包的最大价值
	// 为了方便处理索引，我们让 dp 数组的大小为 (numItems+1) x (capacity+1)
	dp := make([][]int, numItems+1)
	for i := range dp {
		dp[i] = make([]int, capacity+1)
	}

	// 遍历物品
	for i := 1; i <= numItems; i++ {
		weight := weights[i-1] // 当前物品的重量
		value := values[i-1]  // 当前物品的价值

		// 遍历背包容量
		for j := 1; j <= capacity; j++ {
			// 默认不选第 i 个物品，价值等于只看前 i-1 个物品的情况
			dp[i][j] = dp[i-1][j]

			// 如果当前背包容量可以容纳下当前物品
			if j >= weight {
				// 比较 "不选第 i 个物品" 和 "选第 i 个物品" 哪个价值更大
				// dp[i][j-weight] + value 表示：
				// 为容量为 j-weight 的背包，继续从前 i 个物品中选择
				dp[i][j] = max(dp[i][j], dp[i][j-weight]+value)
			}
		}
	}

	return dp[numItems][capacity]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	weights := []int{1, 3, 4}
	values := []int{15, 20, 30}
	capacity := 4

	maxValue := completeKnapsack2D(weights, values, capacity)
	fmt.Printf("使用二维数组解决完全背包问题，最大价值是：%d喵~\n", maxValue) // 输出：60 (4 个物品 1)
}
```

二维写法里，正序取的是 `dp[i][j-weights[i]]`（本行），倒序取的是 `dp[i-1][...]`（上一行）——这就是 01 和完全的唯一区别。

### 两层循环的顺序决定「组合」还是「排列」

- **先物品后容量** → 组合数（`1,2` 和 `2,1` 算一种）
- **先容量后物品** → 排列数（`1,2` 和 `2,1` 算两种）

### 518. 零钱兑换 II

[题目链接：518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)

```go
// LeetCode 322 最终完美解法
import "math"

func coinChange(coins []int, amount int) int {
    // 魔法一：设置一个“无限大”的哨兵值，amount+1 是一个安全的上界
    infinity := amount + 1

    // dp[j] 定义：凑成金额 j 所需的最少硬币数
    dp := make([]int, amount+1)

    // 用哨兵值填充整个数组
    for i := 1; i <= amount; i++ {
        dp[i] = infinity
    }

    // 基准条件：凑成金额 0 需要 0 个硬币，这是所有计算的起点
    dp[0] = 0

    // 对于求最值问题，遍历顺序不影响最终结果
    // 先遍历物品或先遍历背包均可
    for _, coin := range coins {
        for j := coin; j <= amount; j++ {
            // 魔法二：比较并保留最优解（硬币数最少）
            // 确保 dp[j-coin] 不是一个不可达状态
            if dp[j-coin] != infinity {
                dp[j] = min(dp[j], dp[j-coin] + 1)
            }
        }
    }

    // 如果 dp[amount] 的值从未被更新过，说明无法凑成
    if dp[amount] == infinity {
        return -1
    }

    return dp[amount]
}

// 辅助函数
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

### 377. 组合总和 Ⅳ

[题目链接：377. 组合总和 Ⅳ](https://leetcode.cn/problems/combination-sum-iv/)

```go
func combinationSum4(nums []int, target int) int {
	// dp[j] 定义：凑成总和为 j 的排列数
	dp := make([]int, target+1)

	// dp[0] = 1: 基准，魔法的起点
	dp[0] = 1

	// 外层循环：以“背包的视角”开始，从小到大填充每一个容量
	for j := 1; j <= target; j++ {
		// 内层循环：对于当前容量 j，向所有“物品”寻求帮助
        for _,num:=range nums{
			// 如果物品 num 能放入（即 j>=num）
		    if j>=num{
				// 那么凑成 j 的方法数，就加上凑成 (j-num) 的方法数
				// 这完美诠释了“在所有凑成 j-num 的排列末尾加上 num”的过程
                dp[j]+=dp[j-num]
            }
        }
	}

	// 返回最终目标容量的答案
	return dp[target]
}
```

顺序反过来，`[1,2]` 和 `[2,1]` 就都被统计了。

### 322. 零钱兑换

[题目链接：322. 零钱兑换](https://leetcode.cn/problems/coin-change/)

```go
// LeetCode 322 最终完美解法
import "math"

func coinChange(coins []int, amount int) int {
    // 魔法一：设置一个“无限大”的哨兵值，amount+1 是一个安全的上界
    infinity := amount + 1

    // dp[j] 定义：凑成金额 j 所需的最少硬币数
    dp := make([]int, amount+1)

    // 用哨兵值填充整个数组
    for i := 1; i <= amount; i++ {
        dp[i] = infinity
    }

    // 基准条件：凑成金额 0 需要 0 个硬币，这是所有计算的起点
    dp[0] = 0

    // 对于求最值问题，遍历顺序不影响最终结果
    // 先遍历物品或先遍历背包均可
    for _, coin := range coins {
        for j := coin; j <= amount; j++ {
            // 魔法二：比较并保留最优解（硬币数最少）
            // 确保 dp[j-coin] 不是一个不可达状态
            if dp[j-coin] != infinity {
                dp[j] = min(dp[j], dp[j-coin] + 1)
            }
        }
    }

    // 如果 dp[amount] 的值从未被更新过，说明无法凑成
    if dp[amount] == infinity {
        return -1
    }

    return dp[amount]
}

// 辅助函数
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

**走过的弯路**：最初的版本是这样写的：

```go
for _, coin := range coins {
	for j := coin; j <= amount; j++ {
		if j == coin {
			dp[coin] = 1 // 想给「恰好一枚硬币」的金额铺底
		}
		dp[j] = dp[j-coin] + 1
	}
}
```

三个毛病：

1. `dp[j]` 直接被赋值，没有和历史最优比较——应该取 `min`；
2. `dp[coin] = 1` 是多余的，因为 `dp[coin-coin] + 1 = dp[0] + 1` 本来就能算出 1，只要 `dp[0] = 0`；
3. 没检查「前一个状态是否可达」，凑不出的金额会一路加一，最后返回一个看起来合理的假答案。

改完就是上面那版：初始化成哨兵、取 min、判断可达。

两个细节：**哨兵用 `amount+1`**（硬币数不可能超过 amount）；更新前先判断前一个状态是否可达。

### 279. 完全平方数

[题目链接：279. 完全平方数](https://leetcode.cn/problems/perfect-squares/)

```go
// 辅助函数，用于生成我们的“硬币列表”
// 即所有小于等于 n 的完全平方数
func getNums(n int) []int {
    nums := []int{}
    // 从 1 开始，生成 num*num 并添加到列表中
    for num := 1; num*num <= n; num++ {
        nums = append(nums, num*num)
    }
    return nums
}

// 主函数
func numSquares(n int) int {
    // 1. 准备“硬币”：生成完全平方数列表
    nums := getNums(n)

    // 2. 初始化 dp 数组，“背包”大小为 n
    dp := make([]int, n+1)

    // 3. 施展“魔法一”：用一个巨大值 (n+1) 来初始化 dp 数组，表示“不可达”
    // dp[0] 默认为 0，正好是我们的基准条件，无需改动
    for i := 1; i <= n; i++ {
        dp[i] = n + 1
    }

    // 4. 开始标准的完全背包流程
    // 先遍历“物品”（完全平方数）
    for _, num := range nums {
        // 再遍历“背包容量”（目标数字 1...n）
        for j := num; j <= n; j++ {
            // 5. 施展“魔法二”：比较并保留最优解
            dp[j] = min(dp[j], dp[j-num]+1)
        }
    }

    // 6. 返回最终答案
    return dp[n]
}

// min 函数是必须的辅助函数，这里未展示，但在实际运行中需要
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

之后就是 322 的完全背包：`dp[j] = min(dp[j], dp[j-i*i]+1)`。

### 139. 单词拆分

[题目链接：139. 单词拆分](https://leetcode.cn/problems/word-break/)

```go
func wordBreak(s string, wordDict []string) bool {
    wordSet := make(map[string]bool)
    for _, word := range wordDict {
        wordSet[word] = true
    }

    dp := make([]bool, len(s)+1)
    dp[0] = true

    for i := 1; i <= len(s); i++ {
        for j := 0; j < i; j++ {
            if dp[j] {
                word := s[j:i]
                if wordSet[word] {
                    dp[i] = true
                    break
                }
            }
        }
    }

    return dp[len(s)]
}
```

这题是**排列**：单词顺序有意义，所以先容量后物品。

当时还记下一个**错误写法**：按「物品在外、容量在内」遍历会漏解，因为单词之间的顺序被打乱了。

## 打家劫舍

### 198. 打家劫舍

[题目链接：198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// memo 作为“记忆小本本”，避免重复计算
var memo map[*TreeNode][]int

func rob(root *TreeNode) int {
    memo = make(map[*TreeNode][]int)
    result := dfs(root)
    return max(result[0], result[1])
}

// dfs 函数的定义：
// 输入一个节点 root，返回一个长度为 2 的切片 result
// result[0] 表示：不偷 root 这家，能获得的最大金额
// result[1] 表示：偷 root 这家，能获得的最大金额
func dfs(root *TreeNode) []int {
    // 递归出口：空节点收益为 0
    if root == nil {
        return []int{0, 0}
    }
    // 查阅“小本本”，如果算过，直接返回结果
    if result, ok := memo[root]; ok {
        return result
    }

    // 后序遍历思想：先去处理左、右孩子，拿到它们的结果
    result_left := dfs(root.Left)
    result_right := dfs(root.Right)

    // --- 开始计算当前节点 root 的最优解 ---

    // 方案一：不偷 root
    // 如果不偷当前节点，那么左、右孩子就可以自由选择偷或不偷，我们都取它们各自的最优解
    val_not_rob := max(result_left[0], result_left[1]) + max(result_right[0], result_right[1])

    // 方案二：偷 root
    // 如果偷了当前节点，那么左、右孩子就都不能偷了
    val_rob := root.Val + result_left[0] + result_right[0]

    // 将计算结果封装
    result := []int{val_not_rob, val_rob}

    // 记入“小本本”再返回
    memo[root] = result

    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

`dp` 多开一位，`dp[k]` 表示「前 k 家的最大金额」。偷了第 i 家就不能偷 i-1 家，所以接的是 `dp[i-1]`。

### 213. 打家劫舍 II

[题目链接：213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)

房子围成一圈，首尾不能同时偷，拆成两个线性问题：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// memo 作为“记忆小本本”，避免重复计算
var memo map[*TreeNode][]int

func rob(root *TreeNode) int {
    memo = make(map[*TreeNode][]int)
    result := dfs(root)
    return max(result[0], result[1])
}

// dfs 函数的定义：
// 输入一个节点 root，返回一个长度为 2 的切片 result
// result[0] 表示：不偷 root 这家，能获得的最大金额
// result[1] 表示：偷 root 这家，能获得的最大金额
func dfs(root *TreeNode) []int {
    // 递归出口：空节点收益为 0
    if root == nil {
        return []int{0, 0}
    }
    // 查阅“小本本”，如果算过，直接返回结果
    if result, ok := memo[root]; ok {
        return result
    }

    // 后序遍历思想：先去处理左、右孩子，拿到它们的结果
    result_left := dfs(root.Left)
    result_right := dfs(root.Right)

    // --- 开始计算当前节点 root 的最优解 ---

    // 方案一：不偷 root
    // 如果不偷当前节点，那么左、右孩子就可以自由选择偷或不偷，我们都取它们各自的最优解
    val_not_rob := max(result_left[0], result_left[1]) + max(result_right[0], result_right[1])

    // 方案二：偷 root
    // 如果偷了当前节点，那么左、右孩子就都不能偷了
    val_rob := root.Val + result_left[0] + result_right[0]

    // 将计算结果封装
    result := []int{val_not_rob, val_rob}

    // 记入“小本本”再返回
    memo[root] = result

    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

「环形拆成两条链」这个思路值得记住，别的环形题也能用。

### 337. 打家劫舍 III

[题目链接：337. 打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/)

树形 DP，每个节点返回两个值。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// memo 作为“记忆小本本”，避免重复计算
var memo map[*TreeNode][]int

func rob(root *TreeNode) int {
    memo = make(map[*TreeNode][]int)
    result := dfs(root)
    return max(result[0], result[1])
}

// dfs 函数的定义：
// 输入一个节点 root，返回一个长度为 2 的切片 result
// result[0] 表示：不偷 root 这家，能获得的最大金额
// result[1] 表示：偷 root 这家，能获得的最大金额
func dfs(root *TreeNode) []int {
    // 递归出口：空节点收益为 0
    if root == nil {
        return []int{0, 0}
    }
    // 查阅“小本本”，如果算过，直接返回结果
    if result, ok := memo[root]; ok {
        return result
    }

    // 后序遍历思想：先去处理左、右孩子，拿到它们的结果
    result_left := dfs(root.Left)
    result_right := dfs(root.Right)

    // --- 开始计算当前节点 root 的最优解 ---

    // 方案一：不偷 root
    // 如果不偷当前节点，那么左、右孩子就可以自由选择偷或不偷，我们都取它们各自的最优解
    val_not_rob := max(result_left[0], result_left[1]) + max(result_right[0], result_right[1])

    // 方案二：偷 root
    // 如果偷了当前节点，那么左、右孩子就都不能偷了
    val_rob := root.Val + result_left[0] + result_right[0]

    // 将计算结果封装
    result := []int{val_not_rob, val_rob}

    // 记入“小本本”再返回
    memo[root] = result

    return result
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

**走过的弯路（两次有创造性的错误尝试）**：

1. **按层打包**：把每一层当一间大房子，层内金额求和，变成线性数组再用「打家劫舍 I」求。行不通——它假设「偷了第 i 层就不能偷第 i+1 层任何节点」，但规则只禁止偷父子相连的节点，偷了根完全可以偷孙子。
2. **后序遍历序列化**：把树拍平成后序序列，再用线性解法。同样行不通——序列里相邻≠树里相邻，父子的距离可能很远，而相邻的两个可能毫无关系。

两次都栽在同一个念头上：**想把树拍平**。结论是必须顺着树的结构走，也就是树形 DP。

当时还写过「记忆化 map」的版本，能过但多余——后序遍历本身就是自底向上，不会重复计算。

## 股票系列

六道题是同一个状态机，状态数越来越多。

### 121. 买卖股票的最佳时机

[题目链接：121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

**贪心版**（更好写）：记录见过的最低价，每天算一次利润。

```go
// 你的代码 - LeetCode 123 (k=2)
func maxProfit(prices []int) int {
    if len(prices) == 0 {
        return 0
    }

    dp := make([][]int, len(prices))
    for i := range dp {
        dp[i] = make([]int, 5)
    }

    // 初始化：第 0 天，所有“买入”状态都是花掉当天的钱
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]

    for i := 1; i < len(prices); i++ {
        // 状态 0: 始终为 0，可以省略
        // dp[i][0] = dp[i - 1][0];

        // 状态 1: 第一次持有 = max(昨天就第一次持有，昨天无操作今天第一次买)
        dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])

        // 状态 2: 第一次卖出 = max(昨天就第一次卖出，昨天第一次持有今天卖了)
        dp[i][2] = max(dp[i-1][2], dp[i-1][1]+prices[i])

        // 状态 3: 第二次持有 = max(昨天就第二次持有，昨天第一次卖出今天第二次买)
        dp[i][3] = max(dp[i-1][3], dp[i-1][2]-prices[i])

        // 状态 4: 第二次卖出 = max(昨天就第二次卖出，昨天第二次持有今天卖了)
        dp[i][4] = max(dp[i-1][4], dp[i-1][3]+prices[i])
    }

    // 最终利润就是最后一天、最后一次卖出后的状态
    return dp[len(prices)-1][4]
}

func max(a, b int) int { if a > b { return a }; return b }
```

**DP 版**：每天两个状态。

```go
dp[i][0] = max(dp[i-1][0], -prices[i])            // 持有
dp[i][1] = max(dp[i-1][1], dp[i-1][0]+prices[i])  // 不持有
```

### 122. 买卖股票的最佳时机 II

[题目链接：122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

可以买卖多次，持有状态的来源变了：

```go
// 你的代码 - LeetCode 123 (k=2)
func maxProfit(prices []int) int {
    if len(prices) == 0 {
        return 0
    }

    dp := make([][]int, len(prices))
    for i := range dp {
        dp[i] = make([]int, 5)
    }

    // 初始化：第 0 天，所有“买入”状态都是花掉当天的钱
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]

    for i := 1; i < len(prices); i++ {
        // 状态 0: 始终为 0，可以省略
        // dp[i][0] = dp[i - 1][0];

        // 状态 1: 第一次持有 = max(昨天就第一次持有，昨天无操作今天第一次买)
        dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])

        // 状态 2: 第一次卖出 = max(昨天就第一次卖出，昨天第一次持有今天卖了)
        dp[i][2] = max(dp[i-1][2], dp[i-1][1]+prices[i])

        // 状态 3: 第二次持有 = max(昨天就第二次持有，昨天第一次卖出今天第二次买)
        dp[i][3] = max(dp[i-1][3], dp[i-1][2]-prices[i])

        // 状态 4: 第二次卖出 = max(昨天就第二次卖出，昨天第二次持有今天卖了)
        dp[i][4] = max(dp[i-1][4], dp[i-1][3]+prices[i])
    }

    // 最终利润就是最后一天、最后一次卖出后的状态
    return dp[len(prices)-1][4]
}

func max(a, b int) int { if a > b { return a }; return b }
```

从「买入」变成「上次卖出后再买入」。贪心版更短：所有上涨段加起来。

### 123 / 188. 最多两笔 / k 笔

状态扩成 `dp[i][j][0/1]`，`j` 是第几次交易的状态。188 把 2 换成 k，循环里多一层。

### 309. 最佳买卖股票时机含冷冻期

**这题当时跳过了，没写。** 思路是多加一个「冷冻」状态：卖出后第二天不能买。

### 714. 买卖股票的最佳时机含手续费

[题目链接：714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

卖出时减去手续费：

```go
// 你的代码 - LeetCode 123 (k=2)
func maxProfit(prices []int) int {
    if len(prices) == 0 {
        return 0
    }

    dp := make([][]int, len(prices))
    for i := range dp {
        dp[i] = make([]int, 5)
    }

    // 初始化：第 0 天，所有“买入”状态都是花掉当天的钱
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]

    for i := 1; i < len(prices); i++ {
        // 状态 0: 始终为 0，可以省略
        // dp[i][0] = dp[i - 1][0];

        // 状态 1: 第一次持有 = max(昨天就第一次持有，昨天无操作今天第一次买)
        dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])

        // 状态 2: 第一次卖出 = max(昨天就第一次卖出，昨天第一次持有今天卖了)
        dp[i][2] = max(dp[i-1][2], dp[i-1][1]+prices[i])

        // 状态 3: 第二次持有 = max(昨天就第二次持有，昨天第一次卖出今天第二次买)
        dp[i][3] = max(dp[i-1][3], dp[i-1][2]-prices[i])

        // 状态 4: 第二次卖出 = max(昨天就第二次卖出，昨天第二次持有今天卖了)
        dp[i][4] = max(dp[i-1][4], dp[i-1][3]+prices[i])
    }

    // 最终利润就是最后一天、最后一次卖出后的状态
    return dp[len(prices)-1][4]
}

func max(a, b int) int { if a > b { return a }; return b }
```

### 股票系列总结

通用解法：**先把「有几种状态」列清楚，再写状态转移**。

- 只能一笔：持有、不持有
- 可以多笔：同上，但买入价来自「上次卖出后」
- 最多 k 笔：加一维 j
- 有冷冻期：加一个冷冻状态
- 有手续费：卖出时扣

状态列错了，代码怎么写都别扭。

## 子序列系列

**只做到最长递增子序列，而且那个文件是空的。**

原计划接着做 LIS、公共子序列、编辑距离，但 8 月底就停在这儿了。这块留个坑。
