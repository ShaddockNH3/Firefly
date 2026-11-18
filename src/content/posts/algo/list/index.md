---
title: 链表
published: 2025-07-08
description: 虚拟头节点、双指针、快慢指针，代码随想录链表章的 Go 实现
category: 算法
series: 算法
seriesOrder: 2
track: Go 代码随想录
subject: 链表
tags:
  - Go
  - 代码随想录
  - 算法
unlisted: true
draft: false
---

链表这一章的核心其实只有一个东西：虚拟头节点。七道题里有五道用它统一了边界情况，剩下两道靠双指针。

## 203. 移除链表元素

> 给你一个链表的头节点 `head` 和一个整数 `val`，请你删除链表中所有满足 `Node.val == val` 的节点，并返回新的头节点。

[题目链接：203. 移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/)

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    // 1. 创建一个虚拟头节点，它的 Next 指向真正的头节点
	dummyHead := &ListNode{Val: -1, Next: head}
    // 2. 创建一个临时指针 tmp，从虚拟头节点开始遍历
	tmp := dummyHead

    // 3. 循环遍历，直到 tmp 的下一个节点为空
	for tmp.Next != nil {
        // 4. 判断 tmp 的 *下一个* 节点是否需要删除
		if tmp.Next.Val == val {
            // 如果需要，就跳过它，连接到下下个节点
			tmp.Next = tmp.Next.Next
            // 此时 tmp 不动，继续检查新的 tmp.Next
		} else {
            // 如果不需要，tmp 才向前移动一步
			tmp = tmp.Next
		}
	}
    // 5. 返回虚拟头节点的下一个节点，即新链表的头节点
	return dummyHead.Next
}
```

### 为什么要用虚拟头节点

直接在原链表上操作，会遇到一个麻烦的边界：要删的元素正好是头节点（比如 `[7,7,7]`、`val=7`）。这时得写额外的 `if-else` 不断更新 `head`，代码很快就乱了。

虚拟头节点相当于给这列火车加了一个永远不变的「隐形火车头」。它不装货物，只负责连接。原来的第一个车厢，就变成隐形火车头的下一节。

好处是**所有删除操作被统一了**：删头节点就是删隐形火车头的下一个节点，和删中间节点完全一样。

### 代码逻辑分解

1. `dummyHead := &ListNode{-1, head}`：造出隐形火车头，挂上真正的火车。
2. `tmp := dummyHead`：把手放在火车头上。`tmp` 永远是「正要检查的节点的前一个」。
3. `if tmp.Next.Val == val`：手伸出去，检查下一节车厢的货物。
4. `tmp.Next = tmp.Next.Next`：是就跳过这节，挂到下下节。**这时候手不动**，因为下一节可能还要删——连续多个要删的元素就是靠这个处理的。
5. `else { tmp = tmp.Next }`：货物是好的，手往前挪一格。
6. `return dummyHead.Next`：整列检查完，真正要的火车就是火车头后面那一串。

## 707. 设计链表

> 你可以选择单链表或双链表，实现 `get`、`addAtHead`、`addAtTail`、`addAtIndex`、`deleteAtIndex` 五个方法。

[题目链接：707. 设计链表](https://leetcode.cn/problems/design-linked-list/)

```go
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

type MyLinkedList struct {
	size      int
	dummyHead *ListNode
}

func Constructor() MyLinkedList {
	return MyLinkedList{
		size:      0,
		dummyHead: &ListNode{},
	}
}

func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.size {
		return -1
	}
	tmp := this.dummyHead.Next
	for i := 0; i < index; i++ {
		tmp = tmp.Next
	}
	return tmp.Val
}

func (this *MyLinkedList) AddAtHead(val int) {
	this.AddAtIndex(0, val)
}

func (this *MyLinkedList) AddAtTail(val int) {
	this.AddAtIndex(this.size, val)
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index < 0 || index > this.size {
		return
	}
	// tmp 指针用于寻找插入位置的前驱节点
	tmp := this.dummyHead
	for i := 0; i < index; i++ {
		tmp = tmp.Next
	}
	newNode := &ListNode{Val: val, Next: tmp.Next}
	tmp.Next = newNode
	this.size++
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.size {
		return
	}
	// tmp 指针用于寻找删除位置的前驱节点
	tmp := this.dummyHead
	for i := 0; i < index; i++ {
		tmp = tmp.Next
	}
	tmp.Next = tmp.Next.Next
	this.size--
}
```

### 结构与节点分离

- `ListNode` 是积木，只存 `Val` 和 `Next`。
- `MyLinkedList` 是大管家，自己不存数据，只管两件事：`size` 记录长度（O(1) 拿长度），`dummyHead` 是固定不变的入口。

### 虚拟哨兵的威力

`dummyHead` 不计入长度、不存有效数据，但它让代码变得异常干净：

- **统一入口**：不管链表空不空，所有操作都从 `dummyHead` 开始。
- **简化操作**：`AddAtHead` 就是在 `dummyHead` 后面插入；删头节点就是让 `dummyHead` 跳过第一个。
- **不用判空**：不需要写一堆 `if head == nil`，因为前驱节点永远存在。

`AddAtIndex` 和 `DeleteAtIndex` 里那句 `tmp := this.dummyHead`，正是这个思想：先找到要操作位置的前一个节点，再改它的 `Next`。`index = 0` 的时候，这个「前一个」也一定存在。

## 206. 反转链表

> 反转一个单链表。输入 `1->2->3->4->5->NULL`，输出 `5->4->3->2->1->NULL`。

[题目链接：206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    // 处理空链表或只有一个节点的链表，无需翻转
	if head == nil || head.Next == nil {
		return head
	}

    // 初始化两个指针
	pre := head
	tmp := head.Next

    // 关键一步：断开原头节点的链接，让它成为新链表的尾巴
	pre.Next = nil

    // 循环遍历，直到把所有节点都“策反”
	for tmp != nil {
        // 1. nex 指针负责“记住”下一个要处理的节点，防止链表断裂
		nex := tmp.Next
        // 2. 核心：让当前节点 tmp 的指针，指向前一个节点 pre
		tmp.Next = pre
        // 3. pre 和 tmp 指针都向前移动一步
		pre = tmp
		tmp = nex
	}

    // 循环结束后，pre 指向的就是新的头节点
	return pre
}
```

### 指针反向，节点转身

一列只能前进的小火车 `1 -> 2 -> 3 -> nil`，要让它掉头。车厢不能动，只能改挂钩的方向。

需要三只手：

- `pre`：指向已经翻转好的那部分的头。
- `tmp`：当前正要翻转的节点。
- `nex`：临时记住 `tmp` 的下一个节点，免得改完指向就找不到后面的队伍。

以 `1 -> 2 -> 3` 为例：

**初始**：`pre` 指 1，`tmp` 指 2。执行 `pre.Next = nil`，节点 1 的尾巴断开，它现在是新链表的尾巴。

**第一轮（tmp 是 2）**：`nex` 记住 3；`2.Next = 1`，链条变成 `2 -> 1 -> nil`；`pre` 移到 2，`tmp` 移到 3。

**第二轮（tmp 是 3）**：`nex` 记住 `nil`；`3.Next = 2`，变成 `3 -> 2 -> 1 -> nil`；`pre` 移到 3，`tmp` 变成 `nil`。

**结束**：`tmp` 为 `nil`，返回 `pre`，正好指向新的头节点 3。

整个过程就像拎着第一个节点，从第二个开始依次撕下来，再倒着插回第一个前面。

## 24. 两两交换链表中的节点

> 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。不能只改节点内部的值，必须真的交换节点。

[题目链接：24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	// 使用虚拟头节点，可以统一所有操作，避免对头节点的特殊处理
	dummyHead := &ListNode{Next: head}
	// temp 是一个游标，永远指向需要交换的那一对节点的前一个节点
	temp := dummyHead

	// 循环条件：必须保证 temp 后面至少还有两个节点，才能进行交换
	for temp.Next != nil && temp.Next.Next != nil {
		// 拿出要交换的两个节点
		node1 := temp.Next
		node2 := temp.Next.Next

		// --- 核心的四步交换逻辑 ---
		temp.Next = node2       // 1. temp 的下一个指向 node2
		node1.Next = node2.Next // 2. node1 的下一个指向 node2 原来的下一个
		node2.Next = node1      // 3. node2 的下一个指向 node1

		// 4. 移动游标 temp，为下一轮交换做准备
		temp = node1
	}

	return dummyHead.Next
}
```

### 四步穿针引线

以 `dummy -> 1 -> 2 -> 3` 为例：

**第一步 `temp.Next = node2`**：让 `temp` 越过 node1 直接指向 node2，为交换后的新头部铺路。

**第二步 `node1.Next = node2.Next`**：让 node1 指向 node2 原来的下一个（3），把交换后位于队尾的 node1 接到后面的链表上，防止断裂。

**第三步 `node2.Next = node1`**：最核心的翻转，node2 指向 node1。此时 `dummy -> 2 -> 1 -> 3` 已经成形。

**第四步 `temp = node1`**：游标移到 node1，因为它现在是下一对节点（3 和 4）的前驱。

**走过的弯路**：这题的指针变化确实绕，当时第一遍看完还是「似懂非懂」，隔天再看又断片。

真正想通是在纸上画图——把 `dummy -> 1 -> 2 -> 3` 的四个中间状态各画一遍，盯着「谁指向谁」看。四步之后发现规律了：**先让前驱跳过两个节点、再让第一个指向第三个、最后让第二个指回第一个**。顺序不能乱，先做第二步会断链。

这四步在纸上画两遍就记住了，光看代码容易绕。

## 19. 删除链表的倒数第 N 个节点

> 给你一个链表，删除链表的倒数第 n 个结点，并返回头结点。进阶：一趟扫描实现。

[题目链接：19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	// 1. 创建虚拟头节点，以防要删除的是真正的头节点
	dummyHead := &ListNode{Val: -1, Next: head}

	// 2. 创建快慢两个指针，都从虚拟头节点出发
	fir, sec := dummyHead, dummyHead

	// 3. 快指针 sec 先向前走 n+1 步 (下面解释为什么是 n+1)
    // 实际上你的代码是先走 n 步，然后判断 sec.Next，效果一样
	for i := 0; i <= n; i++ {
		sec = sec.Next
	}

	// 4. 快慢指针同步前进，直到快指针到达终点
	for sec != nil {
		fir = fir.Next
		sec = sec.Next
	}

	// 5. 此时 fir 指向的是要删除节点的前一个节点，执行删除
	fir.Next = fir.Next.Next

	return dummyHead.Next
}
```

### 一趟扫描靠的是距离差

如果先遍历一遍求长度 `L`，再走 `L-n` 步，就是两趟。一趟的做法是让快指针先领先 n 个节点，然后两个指针同步走；快指针到终点时，慢指针正好在倒数第 n 个位置——因为它们之间始终保持 n 个身位的差距。

### 为什么还是要虚拟头节点

边界情况：`head = [1,2,3]`、`n = 3`，要删的是头节点。按上面的思路得找节点 1 的前一个，但它没有前一个。

`dummyHead` 作为「隐形的 0 号节点」放在 `head` 前面，保证每个要删的节点都有前驱。两个指针都从它出发，`fir` 最后会稳稳停在要删节点的前一个位置，删头节点也一样。

时间 O(L)，空间 O(1)。

## 面试题 02.07. 链表相交

> 给你两个单链表的头节点 `headA` 和 `headB`，找出并返回两个单链表相交的起始节点。没有交点返回 `null`。

[题目链接：面试题 02.07. 链表相交](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

### 方法一：双指针（走过对方来时的路）

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    lenA, lenB := 0, 0
    for tmp := headA; tmp != nil; tmp = tmp.Next {
        lenA++
    }
    for tmp := headB; tmp != nil; tmp = tmp.Next {
        lenB++
    }

    // pa 指向长链表，pb 指向短链表
    pa, pb := headA, headB
    if lenB > lenA {
        pa, pb = headB, headA
    }

    // 长链表的指针先走 diff 步
    diff := lenA - lenB
    if lenB > lenA {
        diff = lenB - lenA
    }
    for i := 0; i < diff; i++ {
        pa = pa.Next
    }

    // 两个指针同步前进，直到相遇
    for pa != pb {
        pa = pa.Next
        pb = pb.Next
    }

    return pa
}
```

**为什么可行**：设 A 的独有部分长 `a`，B 的独有部分长 `b`，公共部分长 `c`。

- `pa` 的路程：`a + c + b`
- `pb` 的路程：`b + c + a`

两者完全相等。速度相同、路程相同，所以必然在某个时刻相遇——有交点就在第一个交点相遇，没交点（`c = 0`）就在走完 `a + b` 后同时到达 `nil`。

### 方法二：哈希集合

先把 A 的所有节点地址塞进 `map`，再遍历 B，第一个能在 map 里查到的就是交点。

时间 O(m+n)，空间 O(m)。

### 方法三：长度差法

分别求两个链表的长度，让长的先走 `|m - n|` 步，然后两个指针一起走，相遇处就是交点。同样是 O(1) 空间，思路比方法一直白，但要写两遍求长度的循环。

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    lenA, lenB := 0, 0
    for tmp := headA; tmp != nil; tmp = tmp.Next {
        lenA++
    }
    for tmp := headB; tmp != nil; tmp = tmp.Next {
        lenB++
    }

    // pa 指向长链表，pb 指向短链表
    pa, pb := headA, headB
    if lenB > lenA {
        pa, pb = headB, headA
    }

    // 长链表的指针先走 diff 步
    diff := lenA - lenB
    if lenB > lenA {
        diff = lenB - lenA
    }
    for i := 0; i < diff; i++ {
        pa = pa.Next
    }

    // 两个指针同步前进，直到相遇
    for pa != pb {
        pa = pa.Next
        pb = pb.Next
    }

    return pa
}
```

## 142. 环形链表 II

> 给定一个链表的头节点 `head`，返回链表开始入环的第一个节点。如果无环返回 `null`。不允许修改链表。进阶：O(1) 空间。

[题目链接：142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

### 方法一：快慢指针（弗洛伊德的龟兔赛跑）

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	slow, fast := head, head

	// 第一阶段：判断有环 & 寻找相遇点
	for {
		// 如果 fast 或 fast.Next 为 nil，说明没有环
		if fast == nil || fast.Next == nil {
			return nil
		}
		slow = slow.Next
		fast = fast.Next.Next
		// 快慢指针相遇，说明有环，跳出第一阶段
		if slow == fast {
			break
		}
	}

	// 第二阶段：寻找环的入口
	// 让一个新指针 ptr 从头开始走
	ptr := head
	// slow 指针从相遇点开始走
	for ptr != slow {
		ptr = ptr.Next
		slow = slow.Next
	}

	// 它们相遇的地方，就是环的入口
	return ptr
}
```

**第一阶段**：慢指针每次一步，快指针每次两步。有环的话兔子迟早从后面追上乌龟；快指针走到 `nil` 就说明没环。

**第二阶段**：相遇之后派第三个指针 `ptr` 从头节点出发，和相遇点的 `slow` 同速前进，它们相遇的地方就是环的入口。

**为什么**：设头到环入口距离 `x`，环周长 `C`，相遇时 `slow` 走了 `s` 步（`fast` 走了 `2s`）。`fast` 比 `slow` 多走的 `s` 一定是 `C` 的整数倍，所以 `s = nC`。而 `s` 也等于 `x + k`（`k` 是入口到相遇点的距离），于是 `x = nC - k`。

绕圈的整数倍不影响位置，从相遇点走 `nC - k` 步，等价于走 `C - k` 步，而 `C - k` 正好是从相遇点回到入口的距离。

所以：从 `head` 走 `x` 步、从相遇点走 `C - k` 步，两个指针会同时到达环入口。

### 方法二：哈希集合（找入口）

遍历时把每个节点存进 `set`，第一次遇到已经在集合里的节点，就是环的入口。不用推导，空间 O(n)。

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 * Val int
 * Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	slow, fast := head, head

	// 第一阶段：判断有环 & 寻找相遇点
	for {
		// 如果 fast 或 fast.Next 为 nil，说明没有环
		if fast == nil || fast.Next == nil {
			return nil
		}
		slow = slow.Next
		fast = fast.Next.Next
		// 快慢指针相遇，说明有环，跳出第一阶段
		if slow == fast {
			break
		}
	}

	// 第二阶段：寻找环的入口
	// 让一个新指针 ptr 从头开始走
	ptr := head
	// slow 指针从相遇点开始走
	for ptr != slow {
		ptr = ptr.Next
		slow = slow.Next
	}

	// 它们相遇的地方，就是环的入口
	return ptr
}
```

存的是节点指针而不是值——`map[*ListNode]struct{}`，因为相交/成环判断靠的是「同一个节点」，不是「相同的值」。
