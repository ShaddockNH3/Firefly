---
title: 哈希表
published: 2025-07-15
description: 计数数组、集合去重、双指针降重，代码随想录哈希表章的 Go 实现
category: 算法
series: 算法
seriesOrder: 3
track: Go 代码随想录
subject: 哈希表
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

哈希表这一章的题其实分两类：一类用「计数器」（数组或 map）判断元素出现过几次，一类用「排序 + 双指针」去重。选错了会写得很难受。

## 字母异位词专题

把这几道题放一起做是有道理的，它们的内核是同一个东西：**计数**。

### 什么是字母异位词

两段字符串互为字母异位词，本质是每种字母的数量完全相同，只是排列顺序不同。

比如 `"anagram"` 和 `"nagaram"`，都含有 `a:3`、`g:1`、`m:1`、`n:1`、`r:1`。

所以解决这类问题就是比较两串的字母成分表是否一致。

### 工具：计数器数组

这几题都限定了「仅包含小写字母」，所以可以直接开一个长度 26 的 `[26]int` 数组：

- `array[0]` 存 `'a'` 的数量
- `array[1]` 存 `'b'` 的数量
- ……

用 `字符 - 'a'` 就能把字母映射到下标。

### 242. 有效的字母异位词

> 给定两个字符串 `s` 和 `t`，判断 `t` 是否是 `s` 的字母异位词。

[题目链接：242. 有效的字母异位词](https://leetcode.cn/problems/valid-anagram/)

```go
func findAnagrams(s string, p string) []int {
    if len(s) < len(p) {
        return []int{}
    }

    ans := []int{}
    var array_p, array_s [26]int

    // 1. 初始化第一个窗口
    for i := 0; i < len(p); i++ {
        array_p[p[i]-'a']++
        array_s[s[i]-'a']++
    }

    // 2. 比较第一个窗口
    if array_s == array_p {
        ans = append(ans, 0)
    }

    // 3. 开始滑动窗口
    for i := len(p); i < len(s); i++ {
        // 新字符进入窗口
        array_s[s[i]-'a']++
        // 旧字符滑出窗口
        array_s[s[i-len(p)]-'a']--

        // 比较当前窗口
        if array_s == array_p {
            ans = append(ans, i-len(p)+1)
        }
    }

    return ans
}
```

思路：

1. 先比长度，不一样直接淘汰；
2. 开 26 格计数器；
3. 遍历 `s`，对应格子加一；
4. 遍历 `t`，对应格子减一；
5. 异位词的话，一加一减之后每格都该归零，最后扫一遍检查。

### 383. 赎金信

> 给你两个字符串：`ransomNote` 和 `magazine`，判断 `ransomNote` 能不能由 `magazine` 里面的字母构成。每个字母只能用一次。

[题目链接：383. 赎金信](https://leetcode.cn/problems/ransom-note/)

思路和上一题一样，只是方向反过来：先把 `magazine` 的字母数量统计进计数器，再遍历 `ransomNote` 一个个「扣库存」，扣到负数就说明不够。

```go
func canConstruct(ransomNote string, magazine string) bool {
	if len(ransomNote) > len(magazine) {
		return false
	}

	ans := make([]int, 26)
    // 你的这个写法非常巧妙！
    // 先把需要的字符（负数）记录下来
	for i := 0; i < len(ransomNote); i++ {
		index := ransomNote[i] - 'a'
		ans[index]--
	}

    // 再用杂志里的字符去“偿还”
	for j := 0; j < len(magazine); j++ {
		index := magazine[j] - 'a'
		ans[index]++
	}

    // 最后检查是不是所有“债务”都还清了（没有负数）
	for _, cnt := range ans {
		if cnt < 0 {
			return false
		}
	}
	return true
}
```

这个写法比「先统计 magazine 再扣」更简洁：**需求记负数，材料往上加，最后看有没有负数**。一趟记需求、一趟记材料，中间不用判断。

`ransomNote` 是需求清单，`magazine` 是材料仓库。

## 数组交集专题

349 和 350 像一对双胞胎，区别只在要不要管数量：

- **349**：要纯粹的不重复交集——「你们两家都有苹果吗」，只要回答有没有。这是 Set 的思想。
- **350**：要考虑数量——「你们家两个、我们家三个，能凑几对」。这是频率计数的思想。

### 349. 两个数组的交集

> 给定两个数组 `nums1` 和 `nums2`，返回它们的交集。输出结果中的每个元素一定唯一，顺序不限。

[题目链接：349. 两个数组的交集](https://leetcode.cn/problems/intersection-of-two-arrays/)

```go
func intersection(nums1 []int, nums2 []int) []int {
	set := make(map[int]struct{})
	for _, num := range nums1 {
		set[num] = struct{}{}
	}

	result_set := make(map[int]struct{})
	for _, num := range nums2 {
		if _, ok := set[num]; ok {
			result_set[num] = struct{}{}
		}
	}

	ans := make([]int, 0, len(result_set))
	for num := range result_set {
		ans = append(ans, num)
	}

	return ans
}
```

1. **建登记表**：遍历 `nums1`，塞进 `map[int]struct{}`。`struct{}` 不占内存，是 Go 里做集合的标准写法，顺便自动去重。
2. **查询**：遍历 `nums2`，每个数字去登记表里查一下。
3. **结果去重**：查到的放进另一个 `result_set`，靠 map 的 key 唯一性保证结果不重复（比如 `nums1=[2]`、`nums2=[2,2]`）。
4. **转输出**：把 key 拿出来就是答案。

### 350. 两个数组的交集 II

> 返回交集，但每个元素出现的次数要和它在两个数组中出现次数的较小值一致。

[题目链接：350. 两个数组的交集 II](https://leetcode.cn/problems/intersection-of-two-arrays-ii/)

```go
func intersect(nums1 []int, nums2 []int) []int {
    hasmap1:=make(map[int] int)

    for _,num:=range nums1{
        hasmap1[num]+=1
    }

    ans:=[]int{}

    for _,num:=range nums2{
        // 检查 num 在 hasmap1 中是否存在，并且数量 > 0
        if _,ok:=hasmap1[num]; ok && hasmap1[num]>0{
            // 如果满足条件，就将库存减一
            hasmap1[num]-=1
            // 并将该元素加入结果
            ans=append(ans,num)
        }
    }
    return ans
}
```

先把 `nums1` 的数按数量统计，再遍历 `nums2`，命中一次就扣一次库存——库存扣完就不再算，正好对应「取较小值」。

## 202. 快乐数

> 一个正整数，每次把它替换成各位数字的平方和，重复到变成 1，或陷入无限循环。变成 1 的就是快乐数。

[题目链接：202. 快乐数](https://leetcode.cn/problems/happy-number/)

```go
// getNext 函数负责计算一个数的各位数字平方和
func getNext(n int) int {
	sum := 0
	for n > 0 {
		digit := n % 10
		sum += digit * digit
		n = n / 10
	}
	return sum
}

func isHappy(n int) bool {
	// 创建一个 Set，用来记录所有出现过的数字
	set := make(map[int]struct{})

	// 循环的条件是：n 不等于 1 (我们的目标)
	for n != 1 {
        // 在把 n 加入 set 之前，先检查它是不是已经存在了
		if _, ok := set[n]; ok {
			// 如果 n 已经存在，说明我们遇到了循环，它不是快乐数
			return false
		}

		// 将当前数字 n 记录到 set 中
		set[n] = struct{}{}

		// 计算下一个 n
		n = getNext(n)
	}

	// 如果循环能够正常结束，说明 n 最终变成了 1
	return true
}
```

这题考的是**检测循环**：一旦某个数重复出现，就说明后面会无限重复下去，直接判定不是快乐数。

## 1. 两数之和

> 给定一个整数数组 `nums` 和目标值 `target`，找出和为目标值的两个整数，返回它们的下标。

[题目链接：1. 两数之和](https://leetcode.cn/problems/two-sum/)

```go
func twoSum(nums []int, target int) []int {
    // 创建一个哈希表，key 存数字，value 存该数字的下标
    hasmap := make(map[int]int)

    // 只需遍历一次数组
    for i, currentNum := range nums {
        // 计算我们需要寻找的“另一半”
        complement := target - currentNum

        // 在哈希表中查找“另一半”是否存在
        if complementIndex, ok := hasmap[complement]; ok {
            // 如果存在，说明找到了，立刻返回结果
            return []int{complementIndex, i}
        }

        // 如果没找到，就把当前数字和它的下标存入哈希表，供后续的数字查询
        hasmap[currentNum] = i
    }

    // 根据题目提示，一定有解，所以这里实际上不会执行到
    return nil
}
```

暴力解法是双层循环，O(n²)。这里把哈希表当成「登记处」：遍历一次，每遇到一个数就先问「我要的那一半之前在不在」，不在就把自己登记进去，等后面的数来找。

一次遍历 O(n)，代价是 O(n) 的空间。

## 454. 四数相加 II

> 给你四个整数数组 `nums1`、`nums2`、`nums3`、`nums4`，长度都是 `n`，计算有多少个元组 `(i, j, k, l)` 满足四个数之和为 0。

[题目链接：454. 四数相加 II](https://leetcode.cn/problems/4sum-ii/)

```go
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
    // 1. 创建一个“账本” map，记录 nums1 和 nums2 所有元素和的出现次数
	mp := make(map[int]int)
	for _, num1 := range nums1 {
		for _, num2 := range nums2 {
			sum := num1 + num2
			mp[sum]++ // 每出现一次这个和，就给它的计数+1
		}
	}

	// 2. 初始化最终答案计数器
	ans := 0

    // 3. 遍历 nums3 和 nums4，寻找能凑成 0 的“另一半”
	for _, num3 := range nums3 {
		for _, num4 := range nums4 {
			// 计算 (num3 + num4) 的相反数
			target := -(num3 + num4)
			// 在“账本”里查找这个“另一半”出现过多少次
			if count, ok := mp[target]; ok {
				// 找到了！把找到的次数累加到 ans 上
				ans += count
			}
		}
	}

	return ans
}
```

四个数组暴力是 O(n⁴)。把它拆成两组：前两组的和预先统计成账本（O(n²)），后两组边算边查（O(n²)）。整体降到 O(n²)。

注意累加的是 `count` 而不是 1——同样的和可能对应多个组合。

## 15. 三数之和 与 18. 四数之和

这两题和前面几题不一样，**不能用哈希表**，要用「排序 + 双指针」。因为要求结果不重复，哈希表去重会非常麻烦。

[题目链接：15. 三数之和](https://leetcode.cn/problems/3sum/)

核心代码（双指针那一段）：

```go
import "sort"

func fourSum(nums []int, target int) [][]int {
	ans := [][]int{}
	sort.Ints(nums)

	// 第一层循环：固定第一个数 nums[i]
	for i := 0; i < len(nums); i++ {
		// 对第一个数进行去重
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		// 第二层循环：固定第二个数 nums[j]
		for j := i + 1; j < len(nums); j++ {
			// 对第二个数进行去重
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			// 双指针：在 j 之后的部分寻找另外两个数
			left, right := j+1, len(nums)-1
			for left < right {
                // 使用 int64 防止溢出
				sum := int64(nums[i]) + int64(nums[j]) + int64(nums[left]) + int64(nums[right])

				if sum == int64(target) {
					ans = append(ans, []int{nums[i], nums[j], nums[left], nums[right]})
					// 对 left 和 right 去重
					for left < right && nums[left] == nums[left+1] {
						left++
					}
					for left < right && nums[right] == nums[right-1] {
						right--
					}
					left++
					right--
				} else if sum < int64(target) {
					left++
				} else {
					right--
				}
			}
		}
	}
	return ans
}
```

[题目链接：18. 四数之和](https://leetcode.cn/problems/4sum/)

四数之和就是在外面再套一层循环：

```go
func fourSum(nums []int, target int) [][]int {
	ans := [][]int{}
	sort.Ints(nums)

	for i := 0; i < len(nums); i++ {
		// 第一个数去重
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		for j := i + 1; j < len(nums); j++ {
			// 第二个数去重
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			left, right := j+1, len(nums)-1
			for left < right {
				// 用 int64，避免四个数相加溢出
				sum := int64(nums[i]) + int64(nums[j]) + int64(nums[left]) + int64(nums[right])

				if sum == int64(target) {
					ans = append(ans, []int{nums[i], nums[j], nums[left], nums[right]})
					for left < right && nums[left] == nums[left+1] {
						left++
					}
					for left < right && nums[right-1] == nums[right] {
						right--
					}
					left++
					right--
				} else if sum < int64(target) {
					left++
				} else {
					right--
				}
			}
		}
	}
	return ans
}
```

两题的关键都是**去重的时机**：排序之后，重复的元素一定相邻，所以每次移动指针前先跳过相同的值。位置错一步就会漏解或重复。

`int64` 那一步不是保险起见，是必须——`nums` 里可能有接近 `10^9` 的数，四个相加就溢出 `int32` 了。
