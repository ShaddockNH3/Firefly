---
title: 贪心
published: 2025-08-08
description: 排序、区间、跳跃与分配，代码随想录贪心章的 Go 实现
category: 算法
series: 算法
seriesOrder: 7
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

贪心没有固定套路，只有一句话：**每一步都选当下看起来最好的那个**。

难的是证明「局部最优能推出全局最优」。做题时如果举不出反例，就先按贪心写，写完用几个边界例子怼一遍。

这一章十六道题，多数靠两个动作：**排序** 和 **找一个可维护的边界**。

## 455. 分发饼干

> 每个孩子有一个胃口值 `g[i]`，每块饼干有尺寸 `s[j]`。饼干尺寸大于等于胃口才能满足，每块饼干只能给一个孩子。求最多能满足几个孩子。

[题目链接：455. 分发饼干](https://leetcode.cn/problems/assign-cookies/)

贪心策略：用小饼干去满足小胃口，别拿大饼干浪费在小胃口上。

先把两边都排序，然后双指针推进，能喂就喂，喂不了换更大的饼干。

```go
func findContentChildren(g []int, s []int) int {
    cnt:=0
    for _,child:=range g{
        min_num:=getMin(s,child)
        if min_num!=math.MaxInt32{
            cnt+=1
        }
    }
    return cnt
}

func getMin(s[]int,child int)int{
    min_num:=math.MaxInt32
    index:=-1
    for i:=0;i<len(s);i++{
        if s[i]>=child{
            if min_num>=s[i]{
                min_num=s[i]
                index=i
            }
        }
    }
    if index!=-1{
        s[index]=math.MaxInt32 // 将用过的饼干标记为“极大”，防止重复使用
    }
    return min_num
}
```

**走过的弯路**：第一版是「对每个孩子，去饼干堆里找一块最小的、但能满足他的」。思路很自然，也能过，但每个孩子都要扫一遍饼干，而且那块饼干用过之后没有标记，容易重复发。

改双指针之后就干净了：两边都排好序，小的配小的，配不上就换更大的饼干。

## 376. 摆动序列

> 如果连续数字之间的差严格地在正数和负数之间交替，称为摆动序列。求最长摆动子序列的长度。

[题目链接：376. 摆动序列](https://leetcode.cn/problems/wiggle-subsequence/)

只数**拐点**，中间单调的部分直接跳过。

```go
// wiggleMaxLength 计算最长摆动子序列的长度。
// 这是结合了我们所有思考的、最健壮和优雅的贪心算法实现。
func wiggleMaxLength(nums []int) int {
	// 1. 边界情况：数组长度为 0 或 1，其本身就是最长的摆动序列。
	if len(nums) <= 1 {
		return len(nums)
	}

	// 2. 初始化变量：
	// count 的初始值为 1，代表我们的子序列至少包含第一个元素。
	count := 1
	// prev_diff 用来存储上一个有效拐点的差值方向。
	// 初始为 0，代表我们站在一个“平地”上，可以向任何方向走。
	prev_diff := 0

	// 3. 从第二个元素开始，遍历数组，寻找“拐点”。
	for i := 1; i < len(nums); i++ {
		// 计算当前步的差值
		curr_diff := nums[i] - nums[i-1]

		// 4. 判断是否为“拐点”（Wiggle）
		// 这是一个有效的拐点，当且仅当：
		// a) 从上坡或平地，转为下坡 (curr_diff < 0 && prev_diff >= 0)
		// b) 从下坡或平地，转为上坡 (curr_diff > 0 && prev_diff <= 0)
		if (curr_diff > 0 && prev_diff <= 0) || (curr_diff < 0 && prev_diff >= 0) {
			// 如果是有效的拐点，我们的摆动序列长度就增加 1
			count++
			// 并且，我们只在找到拐点时，才更新“上一个坡度”的状态。
			// 这能确保我们正确地处理了连续上坡/下坡的情况（我们只关心坡道尽头的那个拐点）。
			prev_diff = curr_diff
		}
	}

	return count
}
```

**走过的弯路（这题卡了最久）**：最初盯着「原序列里的摆动」，越想越复杂——要记住当前是上坡还是下坡、平台怎么算、删掉某个元素后会不会连累前后……补丁越打越多，还是过不了。

停下来重新读题才发现：**求的是子序列，可以跳过元素**。比如 `[1, 2, 10, 4]`，跳过 2 直接取 `[1, 10, 4]`，就是完美的上坡下坡。

思路一转，解法就变成了「数方向和上一步不同了几次」：连续上坡只取最高点，连续下坡只取最低点，中间那些没有信息量。

`prev_diff` 初始为 0 是关键：第一段无论往上还是往下都算一次摆动。等于 0 的情况（平台）不算新拐点，所以判断用的是 `<=` 和 `>=`。

## 53. 最大子数组和

> 给你一个整数数组 `nums`，找出一个具有最大和的连续子数组，返回其最大和。

[题目链接：53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

两种思路都记了。

**思路一：前缀和 + 滑动窗口**：

```go
import "math"

// 解法一：前缀和 + 滑动窗口
func maxSubArray_prefixSum(nums []int) int {
    // 边界情况处理
    if len(nums) == 0 {
        return 0
    }

    // 1. 预计算前缀和数组
    sums := getSums(nums)

    maxsize := math.MinInt
    left, right := 0, 0

    for right < len(nums) {
        // 如果 left 越界，说明之前的路都是负收益，重置 left
        if left > right {
            right = left
            if right >= len(nums) {
                break
            }
        }

        // 2. 计算当前窗口的和
        current_sum := getSub(sums, left, right)

        // 3. 比较并更新最大值
        if current_sum > maxsize {
            maxsize = current_sum
        }

        // 4. 贪心决策：如果当前窗口的和为负，则移动左边界
        if current_sum < 0 {
            left = right + 1
        }

        // 无论如何，右边界总是要前进的
        right++
    }
    return maxsize
}

// 辅助函数：计算前缀和
func getSums(nums []int) []int {
    sums := make([]int, len(nums))
    sums[0] = nums[0]
    for i := 1; i < len(nums); i++ {
        sums[i] = sums[i-1] + nums[i]
    }
    return sums
}

// 辅助函数：通过前缀和计算子数组的和
func getSub(sums []int, i int, j int) int {
    if i == 0 {
        return sums[j]
    }
    return sums[j] - sums[i-1]
}
```

**思路二：贪心（更短）**：

一旦当前累计和变成负数，就把它丢掉，从下一个数重新开始。因为负数只会拖累后面的和。

```go
sum, best := 0, math.MinInt
for _, v := range nums {
	sum += v
	if sum > best {
		best = sum
	}
	if sum < 0 {
		sum = 0 // 丢掉这段，重新开始
	}
}
```

## 122. 买卖股票的最佳时机 II

> 给你一个整数数组 `prices`，可以多次买卖（同一天可以先卖再买），求能获取的最大利润。

[题目链接：122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

把整段行情拆成无数个「涨一点就卖」的小交易，总利润和抓大波段是一样的。

```go
// 解法一：寻找波峰波谷
func maxProfit_peakValley(prices []int) int {
    if len(prices) <= 1 {
        return 0
    }

    maxProfit := 0
    i := 0
    for i < len(prices)-1 {
        // 步骤 1：找到一个谷底（价格不再下降的地方）
        for i < len(prices)-1 && prices[i] >= prices[i+1] {
            i++
        }
        valley := prices[i] // 这就是我们的买入点

        // 步骤 2：找到一个波峰（价格不再上升的地方）
        for i < len(prices)-1 && prices[i] <= prices[i+1] {
            i++
        }
        peak := prices[i] // 这就是我们的卖出点

        // 步骤 3：计算利润并累加
        maxProfit += peak - valley
    }

    return maxProfit
}
```

当时还写了个「找波峰波谷」的版本，逻辑更贴直觉但要维护两个游标，代码长一倍。上面这版三行就完了。

## 55. 跳跃游戏

> 给定非负整数数组 `nums`，你最初位于第一个下标，每个元素代表能跳的最大长度。判断能否到达最后一个下标。

[题目链接：55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)

把 `nums[i]` 想成「剩余步数（油量）」，每走一步消耗一格，同时可以加油。

```go
// 解法一：模拟“剩余步数/油量”
func canJump_fuelMethod(nums []int) bool {
    if len(nums) == 1 {
        return true
    }

    // current 代表我们可用的“剩余步数”
    current_fuel := 0
    for i := 0; i < len(nums)-1; i++ {
        // 在当前位置 i，我们总是选择一个更大的剩余步数
        // 1. nums[i]: 从当前位置 i 起跳，能提供的步数
        // 2. current_fuel: 从之前某个位置跳过来后，到 i 这里时还剩的步数
        if nums[i] > current_fuel {
            current_fuel = nums[i]
        }

        // 如果油量耗尽，就失败了
        if current_fuel == 0 {
            return false
        }

        // 每走一步，消耗一点油量
        current_fuel--
    }

    // 如果能走完循环，说明成功到达
    return true
}
```

另一种写法是维护「能到达的最远下标」，效果一样，代码更短：

```go
reach := 0
for i := 0; i < len(nums); i++ {
	if i > reach {
		return false
	}
	reach = max(reach, i+nums[i])
}
return true
```

## 45. 跳跃游戏 II

> 给定非负整数数组 `nums`，你最初位于第一个下标，求到达最后一个下标所需的最少跳跃次数。

[题目链接：45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/)

贪心策略是「边界扩张」：在当前这一跳能到达的范围内，找出下一跳能到的最远位置，跳一次就把边界推过去。

```go
// 解法：贪心算法 (边界扩张)
func jump(nums []int) int {
	// 数组长度为 1 或 0，不需要跳跃
	if len(nums) <= 1 {
		return 0
	}

	jumps := 0       // 跳跃次数，我们的最终答案
	current_end := 0 // 当前这次跳跃，能够到达的最远边界
	farthest := 0    // 在当前边界内探索时，能找到的、下一次跳跃能到达的最远方

	// 我们只需要遍历到倒数第二个元素
	// 因为当 i 到达倒数第二个元素时，farthest 总能覆盖到最后一个元素
	for i := 0; i < len(nums)-1; i++ {
		// 1. 考察与决策：在当前的可达范围内，尽力寻找下一次能跳到的最远方
		if i+nums[i] > farthest {
			farthest = i + nums[i]
		}

		// 2. 执行跳跃：当 i 走到了当前跳跃的边界时，我们必须进行下一次跳跃
		if i == current_end {
			jumps++             // 跳跃次数 +1
			current_end = farthest // 将我们刚才找到的最远方，设为下一次跳跃的新边界
		}
	}

	return jumps
}
```

关键是 `i == current_end` 这个判断：不是每一步都跳，而是「把这一跳的范围内所有落点都试一遍」，走到边界才结算一次。

## 1005. K 次取反后最大化的数组和

> 给定整数数组 `nums` 和整数 `k`，可以选一个下标把 `nums[i]` 变成 `-nums[i]`，重复 k 次（同一个下标可以选多次）。求修改后数组可能的最大和。

[题目链接：1005. K 次取反后最大化的数组和](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/)

贪心策略分两种情况：

- **还有负数**：翻绝对值最大的负数，收益最大。
- **全是正数**：剩下的次数只能翻正数，那就翻绝对值最小的，损失最小。

这题当时试了三个版本：

1. **两次排序**：先把负数按绝对值降序翻，翻完再排一次找最小正数，处理剩余次数。
2. **一次排序**：整体按绝对值降序排，从左往右翻，翻到 k 用完为止；如果 k 还有剩，就看剩余次数的奇偶，奇数就把最后一个（绝对值最小）再翻一次。
3. **代码随想录的思路**：直接按绝对值从大到小排，一遍扫过去。

第 2 种最好写：排序一次，遍历一次，剩下的次数用奇偶判断。

## 134. 加油站

> 有 `n` 个加油站环形排列，`gas[i]` 是第 i 站的油量，`cost[i]` 是从第 i 站到下一站的耗油。求能绕环路一周的出发站编号，无解返回 -1。

[题目链接：134. 加油站](https://leetcode.cn/problems/gas-station/)

两个变量：`total_tank` 看全局有没有解，`current_tank` 看从当前起点能不能走通。

```go
func canCompleteCircuit(gas []int, cost []int) int {
	// total_tank 负责记录全程的总油量盈亏，用于最终的全局判断
	total_tank := 0
	// current_tank 负责记录当前这次尝试的油量
	current_tank := 0
	// start_station 记录我们当前尝试的起点，初始为 0
	start_station := 0

	for i := 0; i < len(gas); i++ {
		// 每一站的油量变化，应该同时影响“全程记录”和“当前旅程记录”
		diff := gas[i] - cost[i]
		total_tank += diff
		current_tank += diff

		// 如果当前旅程的油箱为负，说明从 start_station 出发无法到达这里
		// 这触发了我们的“洞察二”
		if current_tank < 0 {
			// 那么，新的起点就只能是失败点的下一个位置
			start_station = i + 1
			// 并且，为新的旅程重置油箱，忘记之前的亏损
			current_tank = 0
		}
	}

	// 循环结束后，进行“洞察一”的全局判断
	// 如果总油量是亏损的，那肯定无解
	if total_tank < 0 {
		return -1
	}

	// 否则，因为解是唯一的，我们最后剩下的 start_station 一定是正确答案
	return start_station
}
```

`current_tank < 0` 时直接跳到 `i+1`，是因为这段路里任意一点出发都会在同一个地方断油——省掉了 O(n²) 的暴力验证。

## 135. 分发糖果

> `n` 个孩子站成一排，每个孩子有评分 `ratings[i]`。每个孩子至少 1 颗糖，相邻两个孩子中评分高的必须得到更多糖果。求最少需要多少颗糖。

[题目链接：135. 分发糖果](https://leetcode.cn/problems/candy/)

**两次遍历**：先从左往右满足「右边比左边高」，再从右往左满足「左边比右边高」，每次取较大值。

```go
import "math"

// candy 函数使用两次遍历的贪心策略来计算最少糖果数
func candy(ratings []int) int {
	n := len(ratings)
	if n == 0 {
		return 0
	}

	// 1. 初始化：满足规则一，每个孩子至少一个糖果
	candies := make([]int, n)
	for i := 0; i < n; i++ {
		candies[i] = 1
	}

	// 2. 第一次遍历：从左到右，处理“右边比左边评分高”的情况
	// 这一步保证了所有“上坡”路段的孩子，糖果数是递增的
	for i := 1; i < n; i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		}
	}

	// 3. 第二次遍历：从右到左，处理“左边比右边评分高”的情况
	// 这一步修正了“下坡”路段，并且不会破坏第一次遍历的结果
	for i := n - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			// 关键决策点！
			// 当前孩子的糖果数，必须既满足从左边看来的规则，也要满足从右边看来的规则。
			// 所以我们取两者中的较大值。
			// candys[i] 是第一次遍历后，满足左规则的值。
			// candys[i+1] + 1 是满足右规则所需要的值。
			if candies[i] < candies[i+1]+1 {
				candies[i] = candies[i+1] + 1
			}
			// 使用一个 max 函数会更简洁：
			// candies[i] = max(candies[i], candies[i+1] + 1)
		}
	}

	// 4. 计算总和
	totalCandies := 0
	for _, c := range candies {
		totalCandies += c
	}

	return totalCandies
}

// 辅助函数 (Go 标准库没有内置 max(int, int))
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```

不能一次遍历搞定，因为一个孩子同时受左右两边约束。第二次遍历取 `max` 而不是直接覆盖，是为了不破坏第一次的结果。

## 860. 柠檬水找零

> 每杯柠檬水 5 美元，顾客按顺序付 `5`、`10` 或 `20` 美元。判断能否给每位顾客正确找零。

[题目链接：860. 柠檬水找零](https://leetcode.cn/problems/lemonade-change/)

只要两个钱袋：五块和十块的数量。

- 收 5 块：直接收下；
- 收 10 块：找一张 5 块；
- 收 20 块：优先找「10 + 5」，没有的话找「5 + 5 + 5」。

优先用 10 块是关键——10 块只能用来找 20 的零，5 块更万能，得省着用。

```go
// lemonadeChange 函数使用贪心策略来判断是否能成功找零
func lemonadeChange(bills []int) bool {
    // 我们的两个小钱袋，一个放 5 美元，一个放 10 美元
    five := 0
    ten := 0

    // 按顺序处理每一位顾客
    for _, bill := range bills {
        if bill == 5 {
            // 收到 5 美元，直接放进口袋
            five++
        } else if bill == 10 {
            // 收到 10 美元，需要找一张 5 美元
            if five > 0 {
                five-- // 消耗一张 5 美元
                ten++  // 增加一张 10 美元
            } else {
                // 如果没有 5 美元找零，生意失败
                return false
            }
        } else { // bill == 20
            // 收到 20 美元，执行我们的贪心策略！
            // 优先尝试方案 A：一张 10 美元 + 一张 5 美元
            if ten > 0 && five > 0 {
                ten--
                five--
            } else if five >= 3 {
                // 方案 A 不行，再尝试方案 B：三张 5 美元
                five -= 3
            } else {
                // 两种方案都不行，生意失败
                return false
            }
        }
    }

    // 如果能顺利处理完所有顾客，生意成功！
    return true
}
```

## 406. 根据身高重建队列

> 假设有打乱顺序的一群人站成一个队列，数组 `people` 中每个元素 `[h, k]` 表示这个人的身高和前面身高大于等于他的人数。请重建这个队列。

[题目链接：406. 根据身高重建队列](https://leetcode.cn/problems/queue-reconstruction-by-height/)

**从矮到高排序**：按身高升序、k 升序，然后依次插到第 k 个空位上。

为什么从矮的开始？因为矮的人插进去，不影响已经站好的高个子——高个子看不到矮的，k 值不会变。

```go
import "sort"

// 解法一：从矮到高排序
func reconstructQueue_fromShortest(people [][]int) [][]int {
    // 1. 按身高从小到大排序，身高相同则按 k 值从小到大排序
    sort.Slice(people, func(i, j int) bool {
        if people[i][0] != people[j][0] {
            return people[i][0] < people[j][0]
        }
        return people[i][1] < people[j][1]
    })

    // 2. 创建一个全是“空位”的最终队伍
    // 我们用一个特殊值（比如 -1）来标记空位
    queue := make([][]int, len(people))
    for i := range queue {
        queue[i] = []int{-1, -1}
    }

    // 3. 依次将小朋友放入队伍
    for _, person := range people {
        k := person[1]
        empty_spaces := 0
        // 遍历最终队伍，寻找合适的空位
        for i := 0; i < len(queue); i++ {
            // 如果当前位置是空位
            if queue[i][0] == -1 {
                // 如果空位数已经满足 k 的要求
                if empty_spaces == k {
                    // 就把他放在这里！
                    queue[i] = person
                    break
                }
                // 否则，空位数 +1
                empty_spaces++
            }
        }
    }
    return queue
}
```

另一种写法是从高到矮排序，然后直接 `insert` 到第 k 个位置——Go 里没有现成的 insert，得自己搬元素，所以从矮到高那版更好写。

## 452. 用最少数量的箭引爆气球

> 气球用区间 `[xstart, xend]` 表示，一支箭可以引爆所有与它相交的气球。求引爆所有气球需要的最少箭数。

[题目链接：452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

按左边界排序，然后贪心：一支箭尽量射在「当前这组气球右边界的最小值」那里，能覆盖最多。

```go
import "sort"

func findMinArrowShots_interval(points [][]int) int {
	if len(points) == 0 {
		return 0
	}
	sort.Slice(points, func(i, j int) bool {
		return points[i][0] < points[j][0]
	})

	arrows := 1
	// right_boundary 记录当前重叠区间的最小右边界
	right_boundary := points[0][1]

	for i := 1; i < len(points); i++ {
		// 如果新区间与当前重叠区域没有交集
		if points[i][0] > right_boundary {
			arrows++ // 需要一支新箭
			right_boundary = points[i][1] // 开启一个新的重叠区域
		} else {
			// 否则，有交集，更新（缩小）重叠区域的右边界
			if points[i][1] < right_boundary {
				right_boundary = points[i][1]
			}
		}
	}
	return arrows
}
```

完整写法：

```go
func findMinArrowShots(points [][]int) int {
	if len(points) == 0 {
		return 0
	}
	sort.Slice(points, func(i, j int) bool {
		return points[i][0] < points[j][0]
	})

	count := 1
	for i := 1; i < len(points); i++ {
		// 左边界大于上一组的右边界，说明没重叠
		if points[i][0] > points[i-1][1] {
			count++
		} else {
			// 重叠，右边界收缩到两者最小值
			if points[i-1][1] < points[i][1] {
				points[i][1] = points[i-1][1]
			}
		}
	}
	return count
}
```

那步「修改 `points[i][1]`」就是在传递边界，不修改的话下一轮比较会用错右边界。

## 435. 无重叠区间

> 给定一个区间集合，返回需要移除区间的最小数量，使剩余区间互不重叠。

[题目链接：435. 无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/)

和引气球几乎一样，只是反过来数：重叠一次就要删一个。

按左边界排序后遍历，一旦发现重叠，就把当前区间的右边界改成两者较小值，同时计数加一。

```go
import "sort"

// 解法一：通过修改数组来传递状态
func eraseOverlapIntervals_modifyArray(intervals [][]int) int {
	if len(intervals) < 2 {
		return 0
	}
	// 1. 按左边界排序
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	count := 0
	for i := 1; i < len(intervals); i++ {
		// 2. 检查与前一个区间的重叠情况
		// 注意：这里的 intervals[i-1] 可能是上一次循环保留下来的优胜者
		if intervals[i][0] < intervals[i-1][1] {
			// 发生重叠，必须移除一个
			count++
			// 3. 贪心决策：谁的右边界更小，谁就成为新的“前一个区间”
			// 以便和 i+1 继续比较
			if intervals[i][1] > intervals[i-1][1] {
				// 如果前一个区间结束得更早，我们就保留它
				// 通过把它“传递”给当前区间，来影响下一次循环
				intervals[i] = intervals[i-1]
			}
			// 如果当前区间 intervals[i] 结束得更早，我们什么都不用做
			// 它自然会成为下一次循环的 intervals[i-1]
		}
	}
	return count
}
```

「保留右边界更小的」是在给后面留空间：右边界越小，和后面的区间越不容易重叠。

## 763. 划分字母区间

> 字符串 `s` 由小写字母组成，要把这个字符串划分成尽可能多的片段，同一字母最多出现在一个片段中。返回每个片段的长度。

[题目链接：763. 划分字母区间](https://leetcode.cn/problems/partition-labels/)

两遍扫描：

```go
func partitionLabels(s string) (partition []int) {
    // 1. 第一次遍历：勘探地形，绘制“藏宝图”
    // lastPos 数组记录了每个字母在字符串中最后一次出现的位置。
    lastPos := [26]int{}
    for i, c := range s {
        lastPos[c-'a'] = i
    }

    // 2. 第二次遍历：根据地图，开拓并划分疆土
    start, end := 0, 0 // start 是当前片段的起点，end 是当前片段理论上最远的边界
    for i, c := range s {
        // 更新当前片段需要到达的最远边界
        // 我们查看当前字母 c 的“最远位置”，和我们已知的“最远边界”end
        // 取两者中更远的那个，作为我们新的最远边界
        if lastPos[c-'a'] > end {
            end = lastPos[c-'a']
        }

        // 关键决策点！
        // 如果我们的遍历指针 i，正好走到了我们所记录的最远边界 end
        if i == end {
            // 这说明从 start 到 end 这个区间内的所有字母，
            // 它们的最远出现位置都已经被包含了进来。
            // 这是一个安全的切割点！
            partition = append(partition, end-start+1)
            // 更新下一个片段的起点
            start = end + 1
        }
    }
    return
}
```

第一遍先把每个字母的「最远位置」摸清楚，第二遍就是扩张 + 结算。

```go
func partitionLabels(s string) (partition []int) {
	lastPos := [26]int{}
	for i, c := range s {
		lastPos[c-'a'] = i // 第一遍：记每个字母最后出现的位置
	}

	start, end := 0, 0
	for i, c := range s {
		// 当前字母的最远位置比已知边界更远，就扩边界
		if lastPos[c-'a'] > end {
			end = lastPos[c-'a']
		}
		// 走到边界，切一段
		if i == end {
			partition = append(partition, end-start+1)
			start = end + 1
		}
	}
	return partition
}
```

`i == end` 这个判断是关键：它意味着「当前这一段里所有字母都不会再出现在后面了」，可以安全下刀。

## 56. 合并区间

> 以数组 `intervals` 表示若干区间的集合，合并所有重叠的区间。

[题目链接：56. 合并区间](https://leetcode.cn/problems/merge-intervals/)

按左边界排序，然后用一个变量追踪当前合并中的区间：

```go
import "sort"

// 解法一：使用独立变量来追踪当前合并的区间
func merge_vars(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	// 初始化结果集为一个空的篮子
	merged := make([][]int, 0)
	// 初始化第一个合并区间
	start := intervals[0][0]
	end := intervals[0][1]

	for i := 1; i < len(intervals); i++ {
		// 情况 A：新区间与当前合并区间不重叠
		if intervals[i][0] > end {
			// 将上一个合并好的区间放入结果集
			merged = append(merged, []int{start, end})
			// 开启一个新的合并区间
			start = intervals[i][0]
			end = intervals[i][1]
		} else {
			// 情况 B：有重叠，更新右边界
			if intervals[i][1] > end {
				end = intervals[i][1]
			}
		}
	}

	// 千万不要忘记把最后一个合并好的区间也放进去！
	merged = append(merged, []int{start, end})

	return merged
}
```

判断重叠用 `<=`（端点相接也算重叠）。扩展右边界时取 `max`，不能直接赋值。

```go
func merge(intervals [][]int) [][]int {
	if len(intervals) <= 1 {
		return intervals
	}
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	res := [][]int{intervals[0]}
	for i := 1; i < len(intervals); i++ {
		last := res[len(res)-1]
		if intervals[i][0] <= last[1] {
			// 重叠，扩右边界
			if intervals[i][1] > last[1] {
				last[1] = intervals[i][1]
			}
		} else {
			res = append(res, intervals[i])
		}
	}
	return res
}
```

## 738. 单调递增的数字

> 给定一个非负整数 `n`，找出小于或等于 `n` 的最大的单调递增整数（每位数字从左到右非严格递增）。

[题目链接：738. 单调递增的数字](https://leetcode.cn/problems/monotone-increasing-digits/)

从左往右找到第一个「断崖」（前一位大于后一位），然后向左回溯到这段相等数字的起点，把它减一，后面全部填 9。

```go
import "strconv"

// 解法一：从左到右遍历，找到问题点再向左回溯
func monotoneIncreasingDigits_original(n int) int {
	digitsArray := IntToSlice(n) // 辅助函数见文末

	for i := 1; i < len(digitsArray); i++ {
		// 1. 向前探索，找到第一个“断崖”
		if digitsArray[i-1] > digitsArray[i] {
			// 2. 向左回溯，找到“平原”的起点
			for i >= 2 && digitsArray[i-1] == digitsArray[i-2] {
				i--
			}
			// 3. 修正：将起点减一
			digitsArray[i-1]--
			// 4. 铺平后续：将起点之后的所有位都变成 9
			for j := i; j < len(digitsArray); j++ {
				digitsArray[j] = 9
			}
			return SliceToInt(digitsArray) // 辅助函数见文末
		}
	}
	// 如果没有断崖，直接返回原数
	return n
}
```

「向左回溯」那步容易漏。比如 `332`：断崖在第二位，但第一位也是 3，得回溯到第一位减一，变成 `299`，而不是 `329`。

```go
func monotoneIncreasingDigits(n int) int {
	digits := []int{}
	for n > 0 {
		digits = append([]int{n % 10}, digits...)
		n /= 10
	}

	for i := 1; i < len(digits); i++ {
		if digits[i-1] > digits[i] {
			// 向左回溯，找到平原的起点
			for i >= 2 && digits[i-1] == digits[i-2] {
				i--
			}
			digits[i-1]--
			// 后面全部填 9
			for j := i; j < len(digits); j++ {
				digits[j] = 9
			}
			break
		}
	}

	res := 0
	for _, d := range digits {
		res = res*10 + d
	}
	return res
}
```
