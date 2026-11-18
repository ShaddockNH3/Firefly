---
title: 图论
published: 2025-08-31
description: 深搜、广搜与岛屿类问题，代码随想录图论章的 Go 实现
category: 算法
series: 算法
seriesOrder: 10
track: Go 代码随想录
subject: 图论
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

图论这一章只讲两个模板，剩下八道题都是在它们上面加一个条件。

## 深搜模板

```c++
void dfs(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本节点所连接的其他节点) {
        处理节点;
        dfs(图，选择的节点); // 递归
        回溯，撤销处理结果
    }
}
```

和回溯的模板一模一样——图论里的 DFS 就是回溯换了张皮：选择变成「相邻节点」，终止条件变成「到终点」或「走出边界」。

网格题的「相邻」通常是上下左右四个方向，所以每道题开头都有这么一行：

```go
var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}
```

### 卡码网的题目长什么样

这一章除了 797，都是卡码网的题——没有现成的函数签名，要自己写 `main` 读输入。所以每道题的完整代码都是下面这个骨架 + 中间的核心逻辑：

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

**这三个地方当初都踩过**：

1. **数组必须按 `n`、`m` 动态开**，写死大小（比如固定 50×50）会 RE——测试数据一超就崩。
2. **`fmt.Scan` 和 `fmt.Scanln` 不一样**：读两个数用 `Scanln(&n, &m)` 没问题，但在循环里逐个读最好用 `Scan`，`Scanln` 遇到换行会提前结束。
3. **Go 的 `main` 只认 `main` 函数**，写成 `solve()` 再在 `main` 里调用也可以，但别忘了真的调用。

后面每道题只写核心函数，外面那层 IO 就是上面这个模板。

## 797. 所有可能的路径

> 给你一个有 `n` 个节点的有向无环图，找出所有从节点 0 到节点 n-1 的路径。

[题目链接：797. 所有可能的路径](https://leetcode.cn/problems/all-paths-from-source-to-target/)

```go
package main

// LeetCode 环境下不需要 main 和 solve，直接提交这个函数即可
func allPathsSourceTarget(graph [][]int) [][]int {
	result := [][]int{}
	// 探路笔记本，一开始就在起点，所以记下 {0}
	path := []int{0}
	n := len(graph)

	// 定义我们聪明的“探路猫咪”——DFS函数
	var dfs func(x int)

	dfs = func(x int) {
		// 4. 到达终点了吗？
		if x == n-1 {
			// 找到了！赶紧复印一份路径，放进成果集！
			tmp := make([]int, len(path))
			copy(tmp, path)
			result = append(result, tmp)
			// 这条路探索到头了，返回
			return
		}

		// 从当前房间x，遍历所有能直接到达的邻居node
		for _, node := range graph[x] {
			// 1. 选择前进 & 2. 记录足迹
			path = append(path, node)
			// 3. 继续探索
			dfs(node)
			// 5. 原路返回 (回溯！)
			path = path[:len(path)-1]
		}
	}

	// 从 0 号房间开始我们的探险之旅！
	dfs(0)

	return result
}
```

这题是模板本身：DAG 不会重复访问，所以不需要 `visited`，只要在终点收集路径。

`copy` 不能省，否则回溯会把结果集里的路径也改掉。

## 99. 岛屿数量（DFS）

> 给定一个由 `1`（陆地）和 `0`（水）组成的网格，计算岛屿的数量。上下左右相邻的陆地算同一个岛。

[题目链接：卡码网 99. 岛屿数量](https://kamacoder.com/problempage.php?pid=1171)

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

主循环扫一遍网格，遇到没访问过的陆地就计数加一，然后 DFS 把整块陆地标记掉。

**已经访问过的标记有两种写法**：开 `visit` 数组，或者直接把 `graph[i][j]` 改成 0（「把陆地淹掉」）。后者省一个二维数组，代码更短。

## 100. 岛屿的最大面积（DFS 带返回值）

> 求所有岛屿中面积最大的那个。

[题目链接：卡码网 100. 岛屿的最大面积](https://kamacoder.com/problempage.php?pid=1172)

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

和前两题的区别只在**返回值**：DFS 不是「标记完就完」，而是把子树的面积累加回来。树形 DP 的味道。

## 岛屿数量（BFS）

[题目链接：卡码网 99. 岛屿数量](https://kamacoder.com/problempage.php?pid=1171)

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

BFS 和 DFS 结果一样，区别在遍历顺序：BFS 一圈一圈扩，DFS 一条路走到底。

**什么时候必须用 BFS**：求最短路径。第一次到达就是最短，DFS 做不到。

## 102. 沉没孤岛

> 把不接触边界的岛屿全部沉掉（变成海）。

[题目链接：卡码网 102. 沉没孤岛](https://kamacoder.com/problempage.php?pid=1174)

思路是**反向标记**：先从四条边界出发，把所有和边界相连的陆地标记成「安全」（标成 2），剩下的陆地才是孤岛。

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

最后遍历一遍：`2` 还原成 `1`（这是挨着边界的岛，保留），`1` 改成 `0`（孤岛，沉掉）。

**走过的弯路**：最早这题一直 RE（越界）。原因是地图数组按固定大小开（比如固定 50×50），但测试数据比这个大，DFS 一走出去就崩。改成按读到的 `n`、`m` 动态开数组，问题就没了。

关键不是 DFS，而是想到**从边界往里搜**，而不是从每块陆地往外判断是否到边。

## 103. 水流问题

> 找出所有既能流到太平洋（左、上边界）又能流到大西洋（右、下边界）的格子。水只能从高往低流。

[题目链接：卡码网 103. 水流问题](https://kamacoder.com/problempage.php?pid=1175)

正向想是「从每个格子出发看能不能到边界」，那要遍历 n×m 次。

反向是「从边界出发，看能逆流到哪些格子」——每个格子只访问一次。

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

两组边界各跑一次 DFS，最后取 `visit1 && visit2` 的格子。

## 104. 建造最大岛屿

> 可以把一个 0 变成 1，求操作后最大的岛屿面积。

[题目链接：卡码网 104. 建造最大岛屿](https://kamacoder.com/problempage.php?pid=1176)

两步：

1. 给每块岛屿编号（2、3、4……），并记录每块的面积。
2. 枚举每个 0，看它四周有哪些编号，把面积加起来（**同一块岛只算一次**）。

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

枚举 0 的时候用 `set` 对四周编号去重——一个 0 的上下可能是同一块岛，不去重会算两遍。

**走过的弯路（两个）**：

1. **心急的 DFS**：最初在循环里写 `return dfs(...) + 1`，等于只往一个方向走了一步就把结果带回来了，其他三个方向的面积全丢了。改成先 `area := 1`，再把四个方向的结果**累加**进 `area`，最后才返回。
2. **重复计算的派对**：一个「凹」字形的岛，编号会同时出现在某个水洼的上方和左方，直接相加就把同一块岛算了两次。修正办法是 `guestList := make(map[int]bool)`，加之前先查有没有邀请过。

## 105. 岛屿的周长

> 求岛屿的周长。

[题目链接：卡码网 105. 岛屿的周长](https://kamacoder.com/problempage.php?pid=1178)

这题**不用 DFS**。遍历每个陆地格子，看它四边有几条边临水或越界，加起来就是周长。

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

不要看到「岛屿」就套 DFS——先看题目要什么。

## 127. 单词接龙

> 从 `beginWord` 到 `endWord`，每次只能改一个字母，且中间词必须在字典里，求最短转换序列长度。

[题目链接：127. 单词接龙](https://leetcode.cn/problems/word-ladder/)

求最短，用 BFS。每层把当前单词的每一位换成 a-z，看新词在不在字典里。

```go
package main

import (
	"fmt"
)

var dir = [][]int{
	{0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
	var n, m int
	fmt.Scanln(&n, &m)

	graph := make([][]int, n)
	visit := make([][]bool, n) // visit 数组在第一次DFS时避免重复遍历

	for i := 0; i < n; i++ {
		graph[i] = make([]int, m)
		visit[i] = make([]bool, m)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Scan(&graph[i][j])
		}
	}

    // --- 魔法片段 ①：修正后的、聪明的 DFS 探险家 ---
	var dfs func(x, y, a int) int
	dfs = func(x, y, a int) int {
		visit[x][y] = true // 标记自己已被普查过
		graph[x][y] = a    // 盖上新的门牌号

		area := 1 // 面积从自己开始算起

		for i := 0; i < 4; i++ {
			nextx := x + dir[i]
			nexty := y + dir[i]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

            // 【修正点】只去拜访那些还是'1'的、未被普查过的陆地
			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
                // 【修正点】将所有方向探索到的面积累加起来
				area += dfs(nextx, nexty, a)
			}
		}
		return area // 返回整个家族的总人口
	}

    // --- 第一步：户口普查 ---
	a := 2 // 门牌号从2开始
	mp := make(map[int]int) // 小本本，记录[门牌号 -> 人口]
	mp = 0 // 水域的面积是0，方便后续计算

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if !visit[i][j] && graph[i][j] == 1 { // 找到一个新家族
				mp[a] = dfs(i, j, a)
				a += 1
			}
		}
	}

    // --- 第二步：选址建桥 ---

	// 先处理特殊情况：如果地图上全是陆地，或者一个陆地都没有
	maxnum := 0
	isAllGrid := true
	for _, area := range mp {
		maxnum = max(maxnum, area) // 先找到已存在的最大岛屿面积
		if area > 0 {
			isAllGrid = false
		}
	}
	if len(mp) <= 1 && isAllGrid { // 如果mp里只有水(mp)，说明全是陆地
		fmt.Println(n*m)
		return
	}
    // 如果一个陆地都没有，那我们填一个水洼，最大就是1
	if maxnum == 0 && n*m > 0 {
		maxnum = 1
	}


	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if graph[i][j] == 0 { // 找到一个水洼作为建桥点
				current := 1 // 桥本身的面积是1
				// 【修正点】使用“派对邀请函”来防止重复计算
				guestList := make(map[int]bool)

				for k := 0; k < 4; k++ {
					nexti := i + dir[k]
					nextj := j + dir[k]

					if nexti < 0 || nexti >= n || nextj < 0 || nextj >= m {
						continue
					}

					islandID := graph[nexti][nextj] // 获取邻居的门牌号

					if islandID > 0 && !guestList[islandID] { // 如果是岛屿且没被邀请过
						current += mp[islandID] // 加上这个家族的人口
						guestList[islandID] = true // 在邀请函上登记
					}
				}
				maxnum = max(maxnum, current) // 更新最大面积记录
			}
		}
	}

	fmt.Println(maxnum)

}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	solve()
}
```

两个细节：

- **边扩展边删**：`delete(wordSet, newWord)` 就是 visited，不用另开数组。
- **层的计数**：要记录「当前层有多少个词」，否则算不出最短步数。

## 这一章的收获

十个题，两个模板：

- **DFS**：递归 + 回溯，适合「找所有方案」「判断连通」「统计面积」。
- **BFS**：队列 + 层数，适合「最短距离」。

真正花时间的不是模板，而是**换个方向想**：

- 沉没孤岛、水流问题都是「从边界反向搜」，比正向判断省一个量级。
- 建造最大岛屿是「先编号再拼接」，把一个 DP 问题拆成两步。
- 岛屿周长则提醒我，看到「岛屿」先别急着套 DFS，先看题目到底要什么。
