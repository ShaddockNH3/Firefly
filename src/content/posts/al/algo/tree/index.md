---
title: 二叉树
published: 2025-08-16
description: 递归三要素、层序遍历与二叉搜索树，代码随想录二叉树章的 Go 实现
category: 算法
series: 算法
seriesOrder: 8
track: 算法学习
subject: Go 代码随想录
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

二叉树这一章题最多，但真正的新东西只有三个：**递归三要素**、**层序遍历的队列模板**、**BST 中序遍历等于有序数组**。

## 递归三要素

写递归最怕凭感觉画符。定住这三条，代码基本不会错：

1. 确定递归函数的**参数和返回值**
2. 确定**终止条件**（Base Case）
3. 确定**单层递归的逻辑**

### 144. 二叉树的前序遍历

[题目链接：144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

```go
// 别忘了导入 "slices" 包 (Go 1.21+)
import "slices"

func postorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	ans := []int{}
	stack := []*TreeNode{root}
	for len(stack) > 0 {
		// 1. 弹出“中”节点
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		// 2. 处理“中”节点
		ans = append(ans, node.Val)
		// 3.  和前序遍历相反：先压入左孩子
		if node.Left != nil {
			stack = append(stack, node.Left)
		}
		// 4.  再压入右孩子
		if node.Right != nil {
			stack = append(stack, node.Right)
		}
	}

    // --- 你的宝贵经验！ ---
	// 5. 得到的 ans 是“中右左”顺序，我们把它翻转
    // slices.Reverse 是原地操作，没有返回值！
	slices.Reverse(ans)
    // 所以我们再单独返回已经被修改好的 ans
	return ans
}
```

三要素对号入座：参数是当前节点和收集结果的容器，终止条件是节点为空，单层逻辑是「记录自己 → 走左边 → 走右边」。

为什么要传 `&result`？切片是值传递，函数里 `append` 后长度变了，外面的变量拿不到新长度。传指针最直接，也可以返回切片层层接住。

### 94 / 145. 中序与后序

把 `append` 挪位置就是另外两种：

- **中序**：`traversal(left)` → `append` → `traversal(right)`
- **后序**：`traversal(left)` → `traversal(right)` → `append`

前序是「进节点就收」，中序是「左走完再收」，后序是「左右都走完才收」。记这一句就够。

## 迭代遍历

递归能做的，栈都能做。

### 前序

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func preorderTraversal(root *TreeNode) []int {
    // 初始化结果集
    result := []int{}
    // 调用递归辅助函数，注意传入 result 的地址
    traversal(root, &result)
    return result
}

// 递归辅助函数
func traversal(node *TreeNode, result *[]int) {
    // 2. 终止条件
    if node == nil {
        return
    }

    // 3. 单层递归逻辑 (中 -> 左 -> 右)
    *result = append(*result, node.Val) // 中
    traversal(node.Left, result)      // 左
    traversal(node.Right, result)     // 右
}
```

**压栈顺序和访问顺序相反**，这是唯一要记的点。

### 中序

中序不能照抄前序，因为「访问」和「处理」的时机不同：

```go
stack := []*TreeNode{}
cur := root

for cur != nil || len(stack) > 0 {
	// 一路向左，把沿途节点压栈
	for cur != nil {
		stack = append(stack, cur)
		cur = cur.Left
	}
	// 弹出来处理
	cur = stack[len(stack)-1]
	stack = stack[:len(stack)-1]
	ans = append(ans, cur.Val)
	// 转向右子树
	cur = cur.Right
}
```

### 后序

最省事的写法：前序改成「根右左」，最后整体反转，得到「左右根」。

## 层序遍历

```go
// 万能模板：二叉树层次遍历
func levelOrder(root *TreeNode) [][]int {
    if root == nil {
        return [][]int{}
    }
    ans := [][]int{}
    queue := []*TreeNode{root} // 用切片模拟队列
    for len(queue) > 0 {
        levelSize := len(queue)
        levelAns := []int{}
        // 关键：只循环当前层的节点数
        for i := 0; i < levelSize; i++ {
            node := queue[0]
            queue = queue[1:] // 出队
            levelAns = append(levelAns, node.Val)
            if node.Left != nil {
                queue = append(queue, node.Left) // 孩子入队
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
        ans = append(ans, levelAns)
    }
    return ans
}
```

`levelSize` 是整个模板的灵魂：它把「这一层」和「下一层」分开。

### 116. 填充每个节点的下一个右侧节点指针

[题目链接：116. 填充每个节点的下一个右侧节点指针](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

层序遍历时，每层除最后一个节点外，都把 `Next` 指向队列里的下一个：

```go
for i := 0; i < levelSize; i++ {
	node := queue[0]
	queue = queue[1:]
	// 不是本层最后一个，就指向下一个
	if i < levelSize-1 && len(queue) > 0 {
		node.Next = queue[0]
	}
	// 孩子入队
}
```

### 104. 二叉树的最大深度

层序遍历的层数就是深度，`length` 累加即可。

## 226. 翻转二叉树

[题目链接：226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

```go
func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	// 使用切片模拟队列
	queue := []*TreeNode{root}

	for len(queue) > 0 {
		// 出队
		node := queue[0]
		queue = queue[1:]

		// 交换左右孩子
		node.Left, node.Right = node.Right, node.Left

		// 将（交换后的）新左右孩子入队
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	return root
}
```

**不能用中序**：中序会把同一棵子树换两次，等于没换。这题是个陷阱题，写完要自己推一遍。

## 101. 对称二叉树

[题目链接：101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

对称比的不是「左孩子等于右孩子」，而是「左子树的左边 vs 右子树的右边」。

```go
func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}

	queue_left, queue_right := []*TreeNode{root.Left}, []*TreeNode{root.Right}

	for len(queue_left) > 0 && len(queue_right) > 0 {
		// 检查当前层的节点数量是否一致
		if len(queue_left) != len(queue_right) {
			return false
		}

		level_len := len(queue_left)
		for i := 0; i < level_len; i++ {
			node_left := queue_left[0]
			queue_left = queue_left[1:]

			node_right := queue_right[0]
			queue_right = queue_right[1:]

			// 核心比较逻辑
			if node_left == nil && node_right == nil {
				continue
			}
			if node_left == nil || node_right == nil || node_left.Val != node_right.Val {
				return false
			}

			// 将子节点按镜像顺序入队
			queue_left = append(queue_left, node_left.Left)
			queue_left = append(queue_left, node_left.Right)
			queue_right = append(queue_right, node_right.Right)
			queue_right = append(queue_right, node_right.Left)
		}
	}

	// 最后确保两个队列都为空
	return len(queue_left) == len(queue_right)
}
```

两个 `if` 的顺序不能反：先判「都为空」，再判「一个为空」。反了会让空节点走进取值逻辑，直接 panic。

迭代版用队列成对入队，逻辑一样。

## 100. 相同的树

[题目链接：100. 相同的树](https://leetcode.cn/problems/same-tree/)

对称的「对照组」：比较的是同侧。

```go
if p == nil && q == nil {
	return true
}
if p == nil || q == nil {
	return false
}
queue := []*TreeNode{p, q}
for len(queue) > 0 {
	node1, node2 := queue[0], queue[1]
	queue = queue[2:]
	if node1.Val != node2.Val {
		return false
	}
	// 左左、右右成对入队
}
```

## 222. 完全二叉树的节点个数

[题目链接：222. 完全二叉树的节点个数](https://leetcode.cn/problems/count-complete-tree-nodes/)

按普通二叉树数要 O(n)，用栈/队列都能写：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	// 1. 分别计算从 root 出发，一路向左和一路向右的深度
	leftNode, rightNode := root, root
	leftHeight, rightHeight := 0, 0
	for leftNode != nil {
		leftHeight++
		leftNode = leftNode.Left
	}
	for rightNode != nil {
		rightHeight++
		rightNode = rightNode.Right
	}

	// 2. 如果左右深度相同，说明这是一棵“满二叉树”
	if leftHeight == rightHeight {
		// 直接套用公式 2^h - 1
		return (1 << leftHeight) - 1
	}

	// 3. 如果深度不同，则递归地去数左右子树的节点
	return 1 + countNodes(root.Left) + countNodes(root.Right)
}
```

**走过的弯路**：第一版就是上面这个朴素遍历——不管它是不是完全二叉树，一律当普通树数。能过，但完全没用到「完全」这个条件，等于把题目降级成了 104。

后来才用上性质：完全二叉树的左右子树高度如果相同，左子树一定是满的，节点数直接 `2^h`，只需要递归右边。复杂度从 O(n) 降到 O(log²n)。

## 110. 平衡二叉树

[题目链接：110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// isBalanced 是主函数，负责调用“深度检查官”并解读最终报告
func isBalanced(root *TreeNode) bool {
    // 如果最终报告不是“警报 -1”，就说明整棵树是平衡的
	return getDepth(root) != -1
}

// getDepth 是我们的“深度检查官”，采用后序遍历（自底向上）
func getDepth(node *TreeNode) int {
	// 终止条件：空树是平衡的，深度为 0
	if node == nil {
		return 0
	}

	// 1. 先去问左右孩子的情况（左、右）
	leftDepth := getDepth(node.Left)
	// 如果左边已经拉响了警报，直接把警报传上去，不用再看右边了
	if leftDepth == -1 {
		return -1
	}

	rightDepth := getDepth(node.Right)
	// 如果右边拉响了警报，也直接把警报传上去
	if rightDepth == -1 {
		return -1
	}

	// 2. 处理“中”节点：根据孩子们的报告，判断自己
	// 如果左右高度差大于 1，自己这里就不平衡了，拉响警报！
	if abs(leftDepth - rightDepth) > 1 {
		return -1
	}

	// 如果一切安好，就向上级汇报自己的真实深度
	return 1 + max(leftDepth, rightDepth)
}

// 辅助函数
func abs(x int) int {
	if x < 0 { return -x }
	return x
}
func max(a, b int) int {
	if a > b { return a }
	return b
}
```

**走过的弯路**：最初是自顶向下写的——对每个节点求一次左右子树高度，再递归判断左右子树是否平衡。逻辑对，但同一棵子树的高度被反复计算，复杂度 O(n²)，n 大了就超时。

改成自底向上：`getDepth` 在返回高度的同时就判断平衡，不平衡直接抛 `-1`，不再往上算。

## 257. 二叉树的所有路径

[题目链接：257. 二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)

回溯第一次出现在树里：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

type PathState struct {
	Node *TreeNode
	Path string
}

func binaryTreePaths(root *TreeNode) []string {
	if root == nil {
		return []string{}
	}

	ans := []string{}
	stack := []PathState{}

	stack = append(stack, PathState{
		Node: root,
		Path: strconv.Itoa(root.Val),
	})

	for len(stack) > 0 {
		state := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		node := state.Node
		path := state.Path

		if node.Left == nil && node.Right == nil {
			ans = append(ans, path)
		}

		if node.Right != nil {
			stack = append(stack, PathState{
				Node: node.Right,
				Path: path + "->" + strconv.Itoa(node.Right.Val),
			})
		}
		if node.Left != nil {
			stack = append(stack, PathState{
				Node: node.Left,
				Path: path + "->" + strconv.Itoa(node.Left.Val),
			})
		}
	}

	return ans
}
```

另一种写法是用栈存 `{节点, 当前路径}`，不用回溯——把路径当值传下去，天然不会互相污染。

## 404. 左叶子之和

[题目链接：404. 左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)

**只有父节点能判断左叶子**，节点自己不知道自己是左是右。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func sumOfLeftLeaves(root *TreeNode) int {
    // 1. 递归的终止条件：如果当前节点是空的，直接返回 0
    if root == nil {
        return 0
    }

    // 2. 核心判断：站在父节点 root 的视角，判断它的左孩子是不是一个叶子节点
    if root.Left != nil && root.Left.Left == nil && root.Left.Right == nil {
        // 如果是，那么总和 = 当前找到的左叶子的值 + 在右子树中继续寻找的结果
        return root.Left.Val + sumOfLeftLeaves(root.Right)
    } else {
        // 如果不是，那么总和 = 在左子树中寻找的结果 + 在右子树中寻找的结果
        return sumOfLeftLeaves(root.Left) + sumOfLeftLeaves(root.Right)
    }
}
```

那三个条件缺一不可：`root.Left != nil` 保证有左孩子，后两个保证它是叶子。

## 513. 找树左下角的值

[题目链接：513. 找树左下角的值](https://leetcode.cn/problems/find-bottom-left-corner-tree/)

两个思路：

**层序**：最后一层的第一个，写起来最简单。

**递归**：记录最大深度和该深度下第一个访问到的值。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func findBottomLeftValue_BFS(root *TreeNode) int {
    // 如果根节点为空，虽然题目保证不会，但好习惯是加上判断
    if root == nil {
        return 0
    }

    // 我们最终的结果
    resValue := 0
    // 我们的队列，初始时只有根节点
    queue := []*TreeNode{root}

    // 只要队列里还有节点，就说明还有下一层需要处理
    for len(queue) > 0 {
        // 获取当前层的节点数量
        levelSize := len(queue)

        // 遍历当前这一整层的所有节点
        for i := 0; i < levelSize; i++ {
            // 从队列头部取出一个节点
            node := queue[0]
            queue = queue[1:]

            // 关键！如果是这一层的第一个节点 (i==0)，
            // 我们就用它的值来更新（覆盖）结果。
            if i == 0 {
                resValue = node.Val
            }

            // 把当前节点的左、右孩子（如果存在）加入队列尾部，
            // 供下一轮循环使用。
            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
    }

    return resValue
}
```

因为先走左边，所以「第一次到达某深度」的一定是最左边那个。

## 112. 路径总和

[题目链接：112. 路径总和](https://leetcode.cn/problems/path-sum/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func hasPathSum(root *TreeNode, targetSum int) bool {
    // res 旗帜，一旦为 true，所有探索都会尽快停止
    res := false
    // current_sum 背包，记录当前路径和
    current_sum := 0

    // 1. 先用 var 声明递归函数变量
    var backtracking func(*TreeNode)

    // 2. 再给变量赋值，定义函数体
    // (小优化：targetSum 作为外部变量，在闭包内可见，无需作为参数传递)
    backtracking = func(node *TreeNode) {
        // 高效的剪枝：如果节点为空或已找到答案，则无需继续
        if node == nil || res {
            return
        }

        // --- 前进 ---
        current_sum += node.Val

        // --- 在叶子节点处判断 ---
        if node.Left == nil && node.Right == nil && current_sum == targetSum {
            res = true
            // 注意：这里设置完 res=true 后，不能立刻 return，
            // 因为还需要执行函数末尾的回溯操作，以保证程序的优雅退出。
        }

        // --- 递归探索 ---
        backtracking(node.Left)
        backtracking(node.Right)

        // --- 回溯！---
        // 探索完一个节点的所有子路径后，必须“撤销”当前节点的影响
        current_sum -= node.Val
    }

    backtracking(root)
    return res
}
```

用递减代替累加，省一个参数。

## 113. 路径总和 II

[题目链接：113. 路径总和 II](https://leetcode.cn/problems/path-sum-ii/)

在 112 的基础上要收集所有路径，于是变成回溯：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

func pathSum(root *TreeNode, targetSum int) [][]int {
    // res: 最终的结果集
    res := [][]int{}
    // path: 当前正在探索的路径
    path := []int{}

    // 声明一个递归函数变量，以在函数体内调用自身
    var backtracking func(*TreeNode, int)

    // 定义递归函数
    backtracking = func(node *TreeNode, currentSum int) {
        // 1. 递归终止条件：走到空节点，说明此路不通
        if node == nil {
            return
        }

        // --- 前进 (做选择) ---
        // 将当前节点加入路径，并更新路径和
        path = append(path, node.Val)
        currentSum += node.Val

        // --- 判断是否是符合条件的叶子节点 ---
        if node.Left == nil && node.Right == nil && currentSum == targetSum {
            // 找到了一个解！
            // 关键：必须创建 path 的一个【副本】存入结果中！
            // 否则 res 中所有的路径都会指向同一个底层数组，最后都变成空的。
            temp := make([]int, len(path))
            copy(temp, path)
            res = append(res, temp)
            // 注意！这里不能 return，因为必须执行末尾的回溯操作！
        }

        // --- 递归探索 (遍历“选择列表”) ---
        // 选择一：走向左孩子
        backtracking(node.Left, currentSum)
        // 选择二：走向右孩子
        backtracking(node.Right, currentSum)

        // --- 后退 (撤销选择) ---
        // 探索完当前节点的所有子路径后，必须恢复状态，
        // 将当前节点从路径中移除，为探索兄弟节点做准备。
        path = path[:len(path)-1]
        // currentSum 状态的恢复，可以通过参数传递的方式隐式完成，无需手动减去。
    }

    backtracking(root, 0)
    return res
}
```

**走过的弯路**：习惯性套用组合题的模板（`for` 循环枚举选项 + 回溯），写到树里发现对不上。

差别在于：组合题的选择是「同一层里挑一个」，所以需要 `for`；树的「选择」是固定的两个分支（左、右），`for` 就没意义了，直接两次递归即可。

反过来，树里必须自己管好 `path` 的进和出，因为递归返回时要把当前节点从路径里弹掉——这一点组合题里是 `for` 循环自动帮你处理的。

## 106. 从中序与后序遍历序列构造二叉树

[题目链接：106. 从中序与后序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

后序的最后一个元素是根。在中序里找到它，左边是左子树、右边是右子树，然后递归。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
    return buildTree(root1,root2)
}

func buildTree(root1 *TreeNode,root2 *TreeNode)*TreeNode{
    // 对 nil 的处理非常棒！
    if root1==nil&&root2==nil{
        return nil
    }else if root1!=nil&&root2==nil{
        root := root1
        return root // 正确地返回了存在的节点
    }else if root1==nil&&root2!=nil{
        root := root2
        return root // 正确地返回了存在的节点
    }else{
        // 正确地创建了合并节点
        root := &TreeNode{Val:(root1.Val+root2.Val)}
        // 正确地接收并安装了左子树
        root.Left=buildTree(root1.Left,root2.Left)
        // 嘿！这里有一个小小的笔误哦~
        root.Right=buildTree(root2.Right,root2.Right)
        // 正确地交付了当前建好的部分
        return root
    }
}
```

`mp` 这一手把每次查找从 O(n) 降到 O(1)，整体从 O(n²) 到 O(n)。

切数组下标容易错，建议传区间下标而不是真的切片。

## 654. 最大二叉树

[题目链接：654. 最大二叉树](https://leetcode.cn/problems/maximum-binary-tree/)

和 106 一个模子，只是「找根」的方式不同：不查表，直接扫一遍最大值。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// 总工程师：启动项目，并返回最终成果
func constructMaximumBinaryTree(nums []int) *TreeNode {
    // 将整个图纸交给项目经理
    return buildTree(nums, 0, len(nums)-1)
}

// 项目经理：负责一小块区域的建造，并返回建好的部分
func buildTree(nums []int, left int, right int) *TreeNode {
    // 任务单为空，直接汇报“无物”
    if left > right {
        return nil
    }

    // 勘探地形，找到区域核心
    maxi := left
    for i := left + 1; i <= right; i++ {
        if nums[i] > nums[maxi] {
            maxi = i
        }
    }

    // 搭建当前区域的主楼
    root := &TreeNode{Val: nums[maxi]}

    // 派人建造左翼，并接收、安装成果
    root.Left = buildTree(nums, left, maxi-1)
    // 派人建造右翼，并接收、安装成果
    root.Right = buildTree(nums, maxi+1, right)

    // 将自己负责的、已组装完毕的建筑部分，交付给上级
    return root
}
```

## 617. 合并二叉树

[题目链接：617. 合并二叉树](https://leetcode.cn/problems/merge-binary-tree/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
    return buildTree(root1,root2)
}

func buildTree(root1 *TreeNode,root2 *TreeNode)*TreeNode{
    // 对 nil 的处理非常棒！
    if root1==nil&&root2==nil{
        return nil
    }else if root1!=nil&&root2==nil{
        root := root1
        return root // 正确地返回了存在的节点
    }else if root1==nil&&root2!=nil{
        root := root2
        return root // 正确地返回了存在的节点
    }else{
        // 正确地创建了合并节点
        root := &TreeNode{Val:(root1.Val+root2.Val)}
        // 正确地接收并安装了左子树
        root.Left=buildTree(root1.Left,root2.Left)
        // 嘿！这里有一个小小的笔误哦~
        root.Right=buildTree(root2.Right,root2.Right)
        // 正确地交付了当前建好的部分
        return root
    }
}
```

**走过的弯路**：最初把合并规则拆成四种情况写（都有、只有左、只有右、都空），代码又长又容易漏。

后来发现前三种其实是一回事——只要有一边是 `nil`，直接返回另一边就行。四种情况塌缩成两个 `if`。

最后还留过一个笔误：递归时把 `root1.Left` 传成了 `root.Left`（自己的左孩子），结果树越合并越乱。这种笔误不看代码是找不到的，只能跑例子。

## 700. 二叉搜索树中的搜索

[题目链接：700. 二叉搜索树中的搜索](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// 主函数，调用我们的递归辅助函数
func searchBST(root *TreeNode, val int) *TreeNode {
    return searchval(root, val)
}

// 递归辅助函数
func searchval(root *TreeNode, val int) *TreeNode {
    // 如果走到了空节点，说明没找到，返回 nil
    if root == nil {
        return nil
    }

    // 如果当前节点的值就是要找的，直接返回当前节点
    if root.Val == val {
        return root
    }

    // 核心：利用 BST 的性质，决定下一步的方向
    if val < root.Val {
        // 如果目标值更小，那它只可能在左子树
        return searchval(root.Left, val)
    } else {
        // 如果目标值更大，那它只可能在右子树
        return searchval(root.Right, val)
    }
}
```

BST 的「二分导航」：每步排除一半，O(h)。

## 98. 验证二叉搜索树

[题目链接：98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

**走过的弯路**：一开始的直觉是「检查每个节点和左右孩子的大小关系」，看起来合理，但只保证局部有序，不保证全局。

当时撞的反例是 `[5, 1, 7, nil, nil, 6, 8]`：节点 7 和它的孩子 6、8 是合规的，可 6 待在 5 的右子树里，破坏了「5 右边所有节点都大于 5」。

从这次失败里才想明白：每个节点不仅要和父节点比，还要和**所有祖先**比——也就是要给它一个由祖先确定的取值范围。于是才有了 `minVal` / `maxVal` 两个参数。

```go
import "math"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    // 启动审判程序，初始范围是 (负无穷，正无穷)
    return isValid(root, math.MinInt64, math.MaxInt64)
}

// 辅助函数：大法官的审判程序
// 负责审判 node 的值是否严格在 (lower, upper) 开区间内
func isValid(node *TreeNode, lower, upper int) bool {
    // 1. 递归出口：空树是合法的 BST
    if node == nil {
        return true
    }

    // 2. 审判当前节点：值必须在规定的开区间内
    if node.Val <= lower || node.Val >= upper {
        return false
    }

    // 3. 分别审判左右子树，并更新审判区间
    //    只有左右子树都合法，最终结果才合法
    return isValid(node.Left, lower, node.Val) &&
           isValid(node.Right, node.Val, upper)
}
```

另一种写法：中序遍历，比较「当前值是否大于前一个值」。BST 的中序是严格递增的，只要有一次不递增就否掉。

## 530. 二叉搜索树的最小绝对差

[题目链接：530. 二叉搜索树的最小绝对差](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)

中序拿到有序数组，最小差一定在相邻两个元素之间。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func getMinimumDifference(root *TreeNode) int {
    // 1. 准备一个数组，用来存放中序遍历的结果
    res := []int{}
    // 2. 调用中序遍历函数，填充数组
    inorder_die(root, &res) // 你用了迭代法，非常棒！

    // 3. 遍历这个已经有序的数组，寻找最小差值
    minnum := abs(res[1] - res[0])
    for i := 2; i < len(res); i++ {
        minnum = min(minnum, abs(res[i]-res[i-1]))
    }
    return minnum
}

// 迭代法的中序遍历 (你代码中使用的)
func inorder_die(root *TreeNode,result *[]int){
	stack := []*TreeNode{}
	curr := root
    for curr!=nil||len(stack)>0{
        for curr!=nil{
            stack = append(stack, curr)
			curr = curr.Left
        }
        node := stack[len(stack)-1]
        stack = stack[:len(stack)-1]

        *result = append(*result, node.Val)
        curr = node.Right
    }
}

// 递归法的中序遍历 (你代码中也写了，同样完全正确！)
func inorder(node *TreeNode,result *[]int){
    if node == nil {
        return
    }

    inorder(node.Left, result)
    *result = append(*result, node.Val)
    inorder(node.Right, result)
}
```

不用额外数组也行：中序时只记 `prev` 节点，边遍历边算差。

## 501. 二叉搜索树中的众数

[题目链接：501. 二叉搜索树中的众数](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)

中序是有序的，相同的值一定扎堆，所以可以「在途盘点」：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// 主函数，调用我们的递归辅助函数
func searchBST(root *TreeNode, val int) *TreeNode {
    return searchval(root, val)
}

// 递归辅助函数
func searchval(root *TreeNode, val int) *TreeNode {
    // 如果走到了空节点，说明没找到，返回 nil
    if root == nil {
        return nil
    }

    // 如果当前节点的值就是要找的，直接返回当前节点
    if root.Val == val {
        return root
    }

    // 核心：利用 BST 的性质，决定下一步的方向
    if val < root.Val {
        // 如果目标值更小，那它只可能在左子树
        return searchval(root.Left, val)
    } else {
        // 如果目标值更大，那它只可能在右子树
        return searchval(root.Right, val)
    }
}
```

遍历时维护当前值的出现次数，超过最大就换答案，等于最大就追加上去。

## 236. 二叉树的最近公共祖先

[题目链接：236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

自底向上找，用后序：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    // 终止条件 1：走到空节点，说明没找到
    if root == nil {
        return nil
    }
    // 终止条件 2：当前节点就是要找的目标之一
    if root == q || root == p {
        return root
    }

    // 分别去左、右子树寻找目标
    leftResult := lowestCommonAncestor(root.Left, p, q)
    rightResult := lowestCommonAncestor(root.Right, p, q)

    // 在当前节点汇总结果
    // 1. 如果左右子树都返回了结果，说明 p,q 分居两侧，当前 root 就是 LCA
    if leftResult != nil && rightResult != nil {
        return root
    }
    // 2. 如果只有右子树有结果，说明 p,q 都在右子树，LCA 也在右子树
    if leftResult == nil && rightResult != nil {
        return rightResult
    }
    // 3. 如果只有左子树有结果，说明 p,q 都在左子树，LCA 也在左子树
    if leftResult != nil && rightResult == nil {
        return leftResult
    }
    // 4. 如果左右子树都没有结果，说明此路不通
    return nil
}
```

**走过的弯路（也是最关键的一次思维转变）**：一开始总觉得 `lowestCommonAncestor` 就该「直接找出 LCA」，越想越绕。

真正的解法是把它的**使命**改掉——它不负责找答案，它只回答一个问题：

> 这棵子树里，有没有 p 或者 q？有的话是哪一个碰到先？

于是返回值只有三种：`nil`（一个都没有）、`p` 或 `q`（找到一个）、当前节点（两边各找到一个，说明它就是分叉点）。

使命一改，递归就通了。为什么是后序：只有先知道左右子树的结果，才能判断当前节点是不是分叉点。

## 235. 二叉搜索树的最近公共祖先

[题目链接：235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)

BST 版本简单得多，利用大小关系直接导航：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    // 终止条件 1：走到空节点，说明没找到
    if root == nil {
        return nil
    }
    // 终止条件 2：当前节点就是要找的目标之一
    if root == q || root == p {
        return root
    }

    // 分别去左、右子树寻找目标
    leftResult := lowestCommonAncestor(root.Left, p, q)
    rightResult := lowestCommonAncestor(root.Right, p, q)

    // 在当前节点汇总结果
    // 1. 如果左右子树都返回了结果，说明 p,q 分居两侧，当前 root 就是 LCA
    if leftResult != nil && rightResult != nil {
        return root
    }
    // 2. 如果只有右子树有结果，说明 p,q 都在右子树，LCA 也在右子树
    if leftResult == nil && rightResult != nil {
        return rightResult
    }
    // 3. 如果只有左子树有结果，说明 p,q 都在左子树，LCA 也在左子树
    if leftResult != nil && rightResult == nil {
        return leftResult
    }
    // 4. 如果左右子树都没有结果，说明此路不通
    return nil
}
```

一次往下走，O(h)。

## 701. 二叉搜索树中的插入操作

[题目链接：701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func insertIntoBST(root *TreeNode, val int) *TreeNode {
    // 1. 如果花园是空的，新果实自己就是树根
    if root == nil {
        return &TreeNode{Val: val}
    }

    // pre 是“记忆工具”，记住父节点；tmp 是“园丁”，负责探路
    var pre *TreeNode
    tmp := root

    // 2. 循环探路，直到找到一个空位（tmp == nil）
    for tmp != nil {
        // 记住来时的路
        pre = tmp
        // 根据 BST 的性质决定前进方向
        if tmp.Val < val {
            tmp = tmp.Right
        } else { // 题目保证 val 不重复
            tmp = tmp.Left
        }
    }

    // 3. 创造新果实
    newNode := &TreeNode{Val: val}

    // 4. 把新果实挂在正确的枝丫上
    if pre.Val < val {
        pre.Right = newNode
    } else {
        pre.Left = newNode
    }

    // 返回花园的入口（原树的根节点）
    return root
}
```

BST 插入不需要旋转，找到空位挂上就行——这也是它比平衡树简单的地方。

## 450. 删除二叉搜索树中的节点

[题目链接：450. 删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-binary-search-tree/)

四种情况必须列全：

1. 没孩子：直接删，返回 `nil`；
2. 只有左孩子：左孩子顶上；
3. 只有右孩子：右孩子顶上；
4. 都有：右子树的最小节点（或左子树最大）替换，然后删掉那个节点。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func deleteNode(root *TreeNode, key int) *TreeNode {
    // 递归出口：如果树为空，直接返回
    if root == nil {
        return nil
    }

    // --- 寻找阶段 ---
    if key < root.Val {
        // 去左子树执行删除，并用返回的新左子树替换旧的
        root.Left = deleteNode(root.Left, key)
    } else if key > root.Val {
        // 去右子树执行删除，并用返回的新右子树替换旧的
        root.Right = deleteNode(root.Right, key)
    } else { // --- 找到节点，执行手术 ---
        // 情况 1: 右子树为空（包含叶子节点情况）
        if root.Right == nil {
            return root.Left
        }
        // 情况 2: 左子树为空
        if root.Left == nil {
            return root.Right
        }
        // 情况 3: 左右子树都存在
        // 1. 找到右子树的最左节点（继承者）
        successor := root.Right
        for successor.Left != nil {
            successor = successor.Left
        }
        // 2. “灵魂互换”，用继承者的值覆盖当前节点
        root.Val = successor.Val
        // 3. 转化为去右子树删除那个继承者
        root.Right = deleteNode(root.Right, successor.Val)
    }

    // 返回（可能被修改过的）当前子树的根节点
    return root
}
```

第 4 种最容易写漏：替换之后还要把原来的左子树接上。

## 669. 修剪二叉搜索树

[题目链接：669. 修剪二叉搜索树](https://leetcode.cn/problems/trim-a-binary-search-tree/)

不在 `[low, high]` 范围内的节点要删掉，但它的孩子可能还在范围内。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func trimBST(root *TreeNode, low int, high int) *TreeNode {
    // 递归出口：如果当前是空节点，修剪后还是空节点
    if root == nil {
        return nil
    }

    // --- 在当前节点做决定 ---

    // 如果当前节点值太小
    if root.Val < low {
        // 那么整个左子树也一定都太小，必须全部舍弃。
        // 我们只需要去右子树里继续寻找和修剪，
        // 并完全信任递归调用的返回值就是这片区域修剪后的新根。
        return trimBST(root.Right, low, high)
    }

    // 如果当前节点值太大
    if root.Val > high {
        // 那么整个右子树也一定都太大，必须全部舍弃。
        // 完全信任对左子树的递归调用。
        return trimBST(root.Left, low, high)
    }

    // --- 如果当前节点值不大不小，刚刚好 ---
    // 那么当前节点在修剪后依然是根节点。
    // 但它的左右孩子还需要继续修剪。
    root.Left = trimBST(root.Left, low, high)
    root.Right = trimBST(root.Right, low, high)

    // 将修剪好的当前节点返回给上级
    return root
}
```

关键在 `return trimBST(root.Right, ...)`：不是返回 `root.Right` 原样，而是要递归修剪它。

## 108. 将有序数组转换为二叉搜索树

[题目链接：108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

取中间做根，左右递归：

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */

// 主函数：启动组建任务
func sortedArrayToBST(nums []int) *TreeNode {
    // 将整个士兵队列 (0 到 len(nums)-1) 交给组建函数
    return getTree(nums, 0, len(nums)-1)
}

// 递归函数：负责组建一个小分队，并返回其队长
func getTree(nums []int, left, right int) *TreeNode {
    // 1. 如果手下没有士兵了，就返回 nil
    if left > right {
        return nil
    }

    // 2. 找到中间的士兵，任命为队长（根节点）
    // 这样写 (left + (right-left)/2) 是为了防止 left+right 整数溢出，是好习惯哦！
    mid := left + (right-left)/2
    root := &TreeNode{Val: nums[mid]}

    // 3. 递归地去组建左翼和右翼分队
    // 左翼分队的范围是 [left, mid-1]
    root.Left = getTree(nums, left, mid-1)
    // 右翼分队的范围是 [mid+1, right]
    root.Right = getTree(nums, mid+1, right)

    // 4. 将组建好的、完整的当前分队，向上汇报
    return root
}
```

**走过的弯路**：递归调用最初写成了

```go
root.Left = getTree(nums, 0, mid-1)          // 错
root.Right = getTree(nums, mid+1, len(nums)-1) // 错
```

左边传 `0`、右边传 `len(nums)-1`，等于每个子树的「队长」都去管整支军队，结果无限递归。

正确写法是把当前区间的 `left` / `right` 传下去，子问题只处理自己那一段。

取中间保证了高度平衡。这题和 654 是反过来的：654 从数组建树靠「最大值」，这题靠「中位数」。

## 538. 把二叉搜索树转换为累加树

[题目链接：538. 把二叉搜索树转换为累加树](https://leetcode.cn/problems/convert-bst-to-greater-tree/)

每个节点变成「比它大的所有值之和」，用**反向中序**（右 → 中 → 左），一路累加。

有个坑：`sum` 必须是指针、闭包变量或者用返回值传，不能直接值传递。

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 * Val int
 * Left *TreeNode
 * Right *TreeNode
 * }
 */
func convertBST(root *TreeNode) *TreeNode {
    // 1. 在外部函数定义我们的“魔法背包”sum
    sum := 0

    // 2. 声明并定义一个“闭包”辅助函数
    var NInorder func(*TreeNode)
    NInorder = func(node *TreeNode) {
        // 递归的出口
        if node == nil {
            return
        }

        // --- 核心逻辑：反向中序遍历 ---

        // a. 先去右子树，把所有比当前节点大的值都处理完
        NInorder(node.Right)

        // b. 处理当前节点
        // 把当前节点的值，加入到共享的 sum 中
        sum += node.Val
        // 用累加后的 sum，更新当前节点的值
        node.Val = sum

        // c. 最后去左子树，处理比当前节点小的值
        NInorder(node.Left)
    }

    // 3. 启动递归
    NInorder(root)
    // 4. 返回被原地修改好的树
    return root
}
```

```go
// 正确写法
sum := 0
var traverse func(node *TreeNode)
traverse = func(node *TreeNode) {
	if node == nil {
		return
	}
	traverse(node.Right)
	sum += node.Val
	node.Val = sum
	traverse(node.Left)
}
```

Go 里没有引用传参，想让递归共享状态，只能靠指针、闭包捕获或者返回值。

## BST 的两个超能力

三十道题做下来，BST 的题都能归到两句话。

**一、中序遍历 = 有序数组**：

| 题 | 树的问题 | 翻译成数组 |
| --- | --- | --- |
| 98 验证 BST | 是否合法 | 中序是否严格递增 |
| 530 最小绝对差 | 任意两节点的最小差 | 有序数组相邻元素的最小差 |
| 501 众数 | 出现最多的值 | 有序数组里出现最多的元素 |
| 538 累加树 | 大于它的所有值之和 | 反向中序，累加前缀和 |

**二、查找可以二分**：

| 题 | 用法 |
| --- | --- |
| 700 搜索 | 比根大往右，小往左 |
| 701 插入 | 找到空位挂上，不用旋转 |
| 450 删除 | 分四种情况，靠大小关系定位 |
| 235 最近祖先 | 第一个落在 `[p, q]` 区间内的节点就是答案 |
| 669 修剪 | 超出范围就跳过整棵子树 |

## 这一章的收获

三十道题，三个地基：

- **递归三要素**：参数返回值、终止条件、单层逻辑。定住这三条，写递归不用猜。
- **层序模板**：`levelSize` 是命门，一层一层处理。
- **BST = 有序数组**：这句话让 98、530、501、538 从「树」变成「数组」。

剩下那些看着花哨的（路径、构造、修剪），都是在这三条上加一个条件。
