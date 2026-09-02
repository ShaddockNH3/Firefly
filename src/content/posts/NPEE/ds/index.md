---
title: 考研冲刺前的总结 —— 数据结构
published: 2026-09-02
description: 考研冲刺前的总结 —— 数据结构
tags: [数据结构, 考研, 总结]
category: 考研
draft: false
series: "考研冲刺前的总结"
seriesOrder: 3
---

## 前言

数据结构应该是相对来说比较轻松的一门了，毕竟有计算机基础。但是还是有比较多的小细节问题，以及一些其他需要注意的问题。

## 第 1 章 - 绪论

### 考纲 - 绪论

- 数据结构的基本概念
- 算法的基本概念
- 算法的时间复杂度和空间复杂度

### 数据结构的基本概念

首先辨析几个概念：数据，数据项，数据元素，数据对象，数据类型，数据结构。

数据是信息的载体，数据元素是数据的基本单位，数据元素由数据项组成。

例如一个喵娘结构体：

```c
typedef struct {
    int id; // 数据项
    char name[20]; // 数据项
    int age; // 数据项
} CatGirl; // 数据元素
```

数据对象是具有相同性质数据元素的集合，例如：

```c
CatGirl catGirls[100]; // 数据对象
```

数据类型指的是一个值的集合以及定义在此集合上的操作的总称。

而数据结构，是相互之间存在的一种或者多种的关系，必须存在逻辑结构，存储结构以及数据的运算。

算法的设计取决于逻辑结构，算法的实现取决于存储结构。（例如简单选择排序）

### 数据结构三要素

#### 逻辑结构

线性结构：线性表，栈，队列，串，数组，这其中很多都是相互包含的关系，不可混淆对应的概念。

非线性结构：集合，树，图。

#### 存储结构

顺序存储：顺序表，顺序队列，顺序栈。

链式存储：链表，链队列，链栈。

索引存储：索引表，散列表。

散列存储：散列表。

#### 数据运算

定义与实现。

### 算法的基本概念

算法具有五个基本特性：有穷性，确定性，可行性，输入，输出。

算法设计的要求：正确性，可读性，健壮性，高效率与低存储量需求。

算法效率的度量：时间复杂度，空间复杂度。

### 算法的时间复杂度

时间复杂度是指算法执行时间与问题规模之间的关系，需要辨析：
算法的时间复杂度并不代表问题规模。例如求邻接矩阵的出度和入度，
时间复杂度为 $O(n^2)$，但问题规模为 $O(n)$。

空间复杂度是指算法执行空间与问题规模之间的关系。

简单的算时间复杂度和空间复杂度就不写了，主要要注意如何计算难的，例如：

```c title="2022 真题"
int sum = 0;
for (int i = 1; i < n; i *= 2){
    for(int j = 0; j < i; j++){
        sum++;
    }
}
```

执行时间为 $1+2+4+8+\cdots+2^t$，其中 $2^t<n$。由等比数列求和公式可得
$\sum_{i=0}^{t}2^i=2^{t+1}-1<2n$，所以时间复杂度为 $O(n)$。

> **校验：** 原代码从 $i=0$ 开始执行 $i*=2$，循环变量不会变化；已改为从
> $i=1$ 开始，并按等比数列重新推导复杂度。

```c title="2025 真题"
int count = 0;
for (int i = 1; i*i <=n; i++){
    for(int j = 1;j<=i;j++){
        count++;
    }
}
```

显然，执行时间为 $1+2+3+\cdots+t$，其中 $t^2\le n$。由数列求和公式可得
$\sum_{i=1}^{t}i=\frac{t(t+1)}{2}$。由于 $t=\lfloor\sqrt{n}\rfloor$，所以时间复杂度为 $O(n)$。

## 第 2 章 - 线性表

### 考纲 - 线性表

- 线性表的基本概念
- 线性表的实现
- 顺序存储；链式存储
- 线性表的应用

### 线性表的定义与基本操作

定义指的是逻辑上的，无须考虑存储方式。

对于一个数据结构，需要考虑其操作方式，最简单的方式是：增、删、改、查、创、销。

而对于代码的具体实现，则需要考虑存储方式，例如顺序存储和链式存储。

### 线性表的顺序存储

```c
#define MAXSIZE 100

/* 顺序表的结构体定义 */
typedef struct ArrayList {
    int data[MAXSIZE];
    int length;
} ArrayList;

/* 初始化顺序表 */
bool InitList(ArrayList *L) {
    L->length = 0;
    return true;
}

/* 销毁顺序表 */
bool DestroyList(ArrayList *L) {
    L->length = 0;
    return true;
}

/* 清空顺序表 */
bool ClearList(ArrayList *L) {
    L->length = 0;
    return true;
}

/* 插入元素 */
bool ListInsert(ArrayList *L, int i, int e) {
    if(i < 1 || i > L->length + 1) return false;
    if(L->length >= MAXSIZE) return false;
    for(int j = L->length; j >= i; j--) {
        L->data[j] = L->data[j - 1];
    }
    L->data[i - 1] = e;
    L->length++;
    return true;
}

/* 删除元素 */
bool ListDelete(ArrayList *L, int i, int *e) {
    if(i < 1 || i > L->length) return false;
    *e = L->data[i - 1];
    for(int j = i; j < L->length; j++) {
        L->data[j - 1] = L->data[j];
    }
    L->length--;
    return true;
}

/* 获取元素 */
bool GetElem(const ArrayList *L, int i, int *e) {
    if(i < 1 || i > L->length) return false;
    *e = L->data[i - 1];
    return true;
}

/* 查找元素 */
int LocateElem(const ArrayList *L, int e) {
    for(int i = 0; i < L->length; i++) {
        if(L->data[i] == e) return i + 1;
    }
    return 0;
}
```

> **校验：** 原代码按值传递顺序表，导致插入、删除和清空无法修改原表；
> `ListDelete` 与 `GetElem` 也按值传递输出参数，并且对静态数组调用了 `free`。
> 已改为指针传递，使用 `int *e` 返回元素，并将销毁操作改为重置长度。

上述思路都非常清晰了其实，可以略过了。

### 线性表的链式存储

#### 带头节点的单链表

```c++
/* 带头节点的单链表的结构体定义 */
struct LNode {
    int data;
    struct LNode *next;
};

using LinkList = LNode *;

/* 初始化带头节点的单链表 */
bool InitList(LinkList &L) {
    L = new LNode{0, nullptr};
    return true;
}

/* 销毁带头节点的单链表 */
bool DestroyList(LinkList &L) {
    while (L != nullptr) {
        LNode *next = L->next;
        delete L;
        L = next;
    }
    return true;
}

/* 清空带头节点的单链表 */
bool ClearList(LinkList L) {
    if (L == nullptr) return false;
    while (L->next != nullptr) {
        LNode *node = L->next;
        L->next = node->next;
        delete node;
    }
    return true;
}

/* 插入元素 */
bool ListInsert(LinkList L, int i, int e) {
    if (L == nullptr || i < 1) return false;
    LNode *p = L;
    for (int j = 1; j < i; j++) {
        if (p->next == nullptr) return false;
        p = p->next;
    }
    LNode *s = new LNode;
    s->data = e;
    s->next = p->next;
    p->next = s;
    return true;
}

/* 删除元素 */
bool ListDelete(LinkList L, int i, int *e) {
    if (L == nullptr || e == nullptr || i < 1) return false;
    LNode *p = L;
    for (int j = 1; j < i; j++) {
        if (p->next == nullptr) return false;
        p = p->next;
    }
    LNode *q = p->next;
    if (q == nullptr) return false;
    *e = q->data;
    p->next = q->next;
    delete q;
    return true;
}

/* 获取元素 */
bool GetElem(LinkList L, int i, int *e) {
    if (L == nullptr || e == nullptr || i < 1) return false;
    LNode *p = L;
    for (int j = 1; j <= i; j++) {
        if (p->next == nullptr) return false;
        p = p->next;
    }
    *e = p->data;
    return true;
}

/* 查找元素 */
int LocateElem(LinkList L, int e) {
    if (L == nullptr) return 0;
    LNode *p = L->next;
    for (int i = 1; p != nullptr; i++) {
        if (p->data == e) return i;
        p = p->next;
    }
    return 0;
}
```

> **校验：** 原代码初始化时修改了局部指针，插入位置从首元结点开始，
> 删除和查找还缺少边界处理，`LocateElem` 也没有移动指针；已改为引用传递，
> 从头结点定位前驱，并补充空指针、越界和释放结点处理。

可以在操作系统中充当队列使用。

#### 带头结点的循环单链表

```c++
/* 带头结点的循环单链表的结构体定义 */
struct LNode {
    int data;
    struct LNode *next;
};

using LinkList = LNode *;

/* 头插法创建带头结点的循环单链表，可用于逆序 */
bool CreateList_H(LinkList &L, int n) {
    L = new LNode{0, nullptr};
    L->next = L;
    for (int i = 0; i < n; i++) {
        LNode *s = new LNode;
        s->data = i;
        s->next = L->next;
        L->next = s;
    }
    return true;
}

/* 尾插法创建带头结点的循环单链表，可用于正序 */
bool CreateList_R(LinkList &L, int n) {
    L = new LNode{0, nullptr};
    L->next = L;
    LNode *r = L;
    for (int i = 0; i < n; i++) {
        LNode *s = new LNode;
        s->data = i;
        s->next = L;
        r->next = s;
        r = s;
    }
    return true;
}

/* 插入元素 */
bool ListInsert(LinkList L, int i, int e) {
    if (L == nullptr || i < 1) return false;
    LNode *p = L;
    for (int j = 1; j < i; j++) {
        p = p->next;
        if (p == L) return false;
    }
    LNode *s = new LNode;
    s->data = e;
    s->next = p->next;
    p->next = s;
    return true;
}

/* 删除元素 */
bool ListDelete(LinkList L, int i, int *e) {
    if (L == nullptr || e == nullptr || i < 1) return false;
    LNode *p = L;
    for (int j = 1; j < i; j++) {
        p = p->next;
        if (p == L) return false;
    }
    LNode *q = p->next;
    if (q == L) return false;
    *e = q->data;
    p->next = q->next;
    delete q;
    return true;
}
```

> **校验：** 原代码先将循环单链表置为非循环状态，创建完成后又把头结点
> 直接连回自身，导致已创建结点丢失；删除时也释放了错误的结点。已统一使用
> 头结点自环初始化，并按“前驱结点 + 待删结点”完成插入和删除。

### 带头节点的双链表

```c++
/* 双链表的结构体定义 */
struct DNode {
    int data;
    struct DNode *next;
    struct DNode *prev;
};

using DList = DNode *;

/* 插入元素 */
bool ListInsert(DList L, int i, int e) {
    if (L == nullptr || i < 1) return false;
    DNode *p = L;
    for (int j = 1; j < i; j++) {
        if (p->next == nullptr) return false;
        p = p->next;
    }
    DNode *s = new DNode;
    s->data = e;
    s->next = p->next;
    if (p->next != nullptr) p->next->prev = s;
    p->next = s;
    s->prev = p;
    return true;
}

/* 删除元素 */
bool ListDelete(DList L, int i, int *e) {
    if (L == nullptr || e == nullptr || i < 1) return false;
    DNode *p = L;
    for (int j = 1; j < i; j++) {
        if (p->next == nullptr) return false;
        p = p->next;
    }
    DNode *q = p->next;
    if (q == nullptr) return false;
    *e = q->data;
    p->next = q->next;
    if (q->next != nullptr) q->next->prev = p;
    delete q;
    return true;
}
```

### 带头节点的循环双链表

```c++
/* 带头节点的循环双链表的结构体定义 */
struct DNode {
    int data;
    struct DNode *next;
    struct DNode *prev;
};

/* 初始化带头节点的循环双链表 */
bool InitList(DList &L) {
    L = new DNode;
    L->next = L;
    L->prev = L;
    return true;
}

/* 插入元素 */
bool ListInsert(DList L, int i, int e) {
    if (L == nullptr || i < 1) return false;
    DNode *p = L;
    for (int j = 1; j < i; j++) {
        p = p->next;
        if (p == L) return false;
    }
    DNode *s = new DNode;
    s->data = e;
    s->next = p->next;
    p->next->prev = s;
    p->next = s;
    s->prev = p;
    return true;
}

/* 删除元素 */
bool ListDelete(DList L, int i, int *e) {
    if (L == nullptr || e == nullptr || i < 1) return false;
    DNode *p = L;
    for (int j = 1; j < i; j++) {
        p = p->next;
        if (p == L) return false;
    }
    DNode *q = p->next;
    if (q == L) return false;
    *e = q->data;
    q->next->prev = q->prev;
    q->prev->next = q->next;
    delete q;
    return true;
}
```

> **校验：** 双链表插入时应从头结点定位待插位置的前驱，删除时应定位待删
> 结点；原代码从首元结点开始，导致位置整体偏移。已修正定位方式，并同步维护
> 前驱、后继指针及循环双链表的头结点引用。

### 静态链表

不需要非常掌握，不过操作系统中，显式链接法采用的是静态链表。

### 性能比较

| 操作 | 顺序表 | 链表 |
| --- | --- | --- |
| 插入 | $O(n)$ | $O(1)$ |
| 删除 | $O(n)$ | $O(1)$ |
| 查找 | $O(n)$ | $O(n)$ |
| 访问 | $O(1)$ | $O(n)$ |

注意，这里链表的插入和删除的前提是设置了特定的指针。

## 第 3 章 - 栈与队列

### 考纲 - 栈与队列

- 栈与队列的基本概念
- 栈和队列的顺序存储结构
- 栈和队列的链式存储结构
- 多维数组存储
- 特殊矩阵的压缩存储
- 栈、队列和数组的应用

### 栈与队列的基本概念

栈是先进后出，队列是先进先出

### 栈的顺序存储

需要注意对于栈顶指针，初始化时，可以采用均指向第一个元素的方法，然后栈顶指针回退一格，就是初始状态。

```c++
// 无须封装，直接采用一个固定长度的数组进行模拟
int stack[MAXSIZE];
int top = -1;

// 入栈
bool Push(int x) {
    if(top == MAXSIZE-1) return false;
    stack[++top] = x;
    return true;
}

// 出栈
bool Pop(int *x) {
    if(top == -1) return false;
    *x = stack[top--];
    return true;
}

// 获取栈顶元素
bool GetTop(int *x) {
    if(top == -1) return false;
    *x = stack[top];
    return true;
}

// 判断栈是否为空
bool IsEmpty() {
    return top == -1;
}

// 判断栈是否满
bool IsFull() {
    return top == MAXSIZE-1;
}
```

### 栈的链式存储

采用带头结点的单链表，头插法模拟栈。

```c++
/* 栈的链式存储的结构体定义 */
struct StackNode {
    int data;
    struct StackNode *next;
};

using Stack = StackNode *;

/* 初始化栈 */
bool InitStack(Stack &S) {
    S = new StackNode{0, nullptr};
    return true;
}

/* 入栈 */
bool Push(Stack S, int x) {
    if (S == nullptr) return false;
    StackNode *p = new StackNode;
    p->data = x;
    p->next = S->next;
    S->next = p;
    return true;
}

/* 出栈 */
bool Pop(Stack S, int *x) {
    if (S == nullptr || x == nullptr || S->next == nullptr) return false;
    *x = S->next->data;
    StackNode *p = S->next;
    S->next = S->next->next;
    delete p;
    return true;
}

/* 获取栈顶元素 */
bool GetTop(Stack S, int *x) {
    if (S == nullptr || x == nullptr || S->next == nullptr) return false;
    *x = S->next->data;
    return true;
}

/* 判断栈是否为空 */
bool IsEmpty(Stack S) {
    return S == nullptr || S->next == nullptr;
}

/* 判断栈是否满 */
bool IsFull(Stack) {
    return false;
}
```

> **校验：** 链式栈没有固定数组容量，原代码把“空”误作为“满”，并且初始化
> 只修改了局部指针；已改为引用初始化，链式栈的 `IsFull` 固定返回 `false`。

### 队列的顺序存储

采用循环队列模拟队列，`front` 指向队头元素，`rear` 指向下一个入队位置；
初始化时令二者相等。

对于下面的代码，front 指向当前元素，rear 指向当前元素的下一个元素。

```c++
// 无须封装，直接采用一个固定长度的数组进行模拟
int queue[MAXSIZE];
int front = 0;
int rear = 0;

// 入队
bool EnQueue(int x) {
    if ((rear + 1) % MAXSIZE == front) return false;
    queue[rear] = x;
    rear = (rear + 1) % MAXSIZE;
    return true;
}

// 出队
bool DeQueue(int *x) {
    if (x == nullptr || front == rear) return false;
    *x = queue[front];
    front = (front + 1) % MAXSIZE;
    return true;
}

// 获取队头元素
bool GetFront(int *x) {
    if (x == nullptr || front == rear) return false;
    *x = queue[front];
    return true;
}

// 判断队列是否为空
bool IsEmpty() {
    return front == rear;
}

// 判断队列是否满
bool IsFull() {
    return (rear + 1) % MAXSIZE == front;
}
```

### 队列的链式存储

采用带头结点的单链表，尾插法 / 头插法模拟队列。

这里不展开讲了，这里得细分为很多种情况：

单链表、循环单链表、双链表、循环双链表。

每种情况都有各的优势，需要具体情况具体分析。

### 受限队列 / 双端队列

受限队列指的是队列的插入和删除操作受到限制，例如只能从一端插入，但是从两端删除，或者只能从两端插入，但是从一端删除。

双端队列指的是双端均可以插入和删除。

### 括号匹配

使用栈来实现括号匹配，具体思路是：

1. 遍历字符串，遇到左括号入栈。
2. 遇到右括号时，若栈为空则匹配失败；否则出栈并判断类型是否匹配。
3. 遍历结束后，只有栈为空才表示匹配成功。

```c++
bool isMatch(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (st.empty()) return false; // 栈空了却没有左括号来配对
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false; // 类型不匹配
            }
        }
    }
    return st.empty(); // 遍历完后栈必须为空才算完全匹配
}
```

### 中缀表达式转后缀表达式

中缀表达式转后缀表达式，具体思路是：

1. 遍历中缀表达式，遇到数字直接输出，遇到符号入栈。
2. 如果遇到左括号，则入栈。
3. 如果遇到右括号，则出栈，直到遇到左括号。
4. 如果栈顶元素优先级 >= 当前元素，则出栈，直到栈顶元素优先级 < 当前元素。
5. 最后将栈里的元素依次出栈，即为后缀表达式。

转前缀需要把 ( 和 ) 的处理逻辑对调，且运算符优先级的出栈条件（>= / >）有细微差别。

### 后缀表达式求值

使用栈来实现表达式求值，具体思路是：

1. 遍历字符串，遇到数字入栈。
2. 遇到运算符，出栈两个元素，进行运算，将结果入栈。
3. 如果栈里恰好有一个元素，则该元素就是结果。

需要注意，先出栈的是右操作数，后出栈的是左操作数。

如果是前缀表达式求值，那么需要从后往前遍历，其他步骤相同。

### 栈在递归中的应用

递归的本质是栈，例如斐波那契数列：

```c++
int fib(int n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

### 队列与层次遍历

层次遍历的本质是队列，例如二叉树的层次遍历：

```c++
void levelOrder(TreeNode *root) {
    if (root == nullptr) return;
    queue<TreeNode *> q;
    q.push(root);
    while(!q.empty()) {
        TreeNode *node = q.front();
        q.pop();
        cout << node->val << " ";
        if(node->left) q.push(node->left);
        if(node->right) q.push(node->right);
    }
}
```

> **校验：** 原括号匹配说明把“中途栈为空”和“遍历结束时栈为空”混为一谈；
> 已改为在遇到右括号时检查栈，在遍历结束时检查剩余左括号。层次遍历原代码
> 未处理空树，已补充空指针判断，避免解引用空指针。

### 数组

#### 特殊矩阵的存储

对称矩阵，三角矩阵，三对角矩阵，可以采用一维数组存储。

具体需要区分行优先和列优先，以及 0 开头还是 1 开头。

#### 稀疏矩阵的存储

稀疏矩阵的存储方式：三元组、十字链表。

三元组法使用一个三元组来存储矩阵的非零元素，包括行号、列号和元素值。

十字链表法通过行、列两个方向的链接存储非零元素，适用于稀疏矩阵。

## 第 4 章 - 串

### 考纲 - 串

- 字符串的模式匹配

### 字符串的模式匹配

#### 朴素模式匹配算法

时间复杂度：$O(n*m)$，其中 $n$ 是主串长度，$m$ 是模式串长度。

#### KMP算法

手算 next 数组。

#### 改进的KMP算法

手算 nextval 数组。

## 第 5 章 - 树

### 考纲 - 树

### 树的基本概念

- 树高：树的根节点到叶子节点的最大路径长度，需要注意定义，一般来讲是根节点也算，但是具体题目得看要求
- 度：树的结点的子结点数
- 空树：没有结点的树
- 森林：多棵树的集合
- 满二叉树：除了叶子结点，每个结点都有两个子结点
- 完全二叉树：除了最后一层，其他层都是满的，最后一层从左到右填充
- 二叉树：每个结点最多有两个子结点
- m 叉树：每个结点最多有 m 个子结点

### 树的遍历与线索二叉树

#### 树的遍历

前序遍历：根节点 -> 左子树 -> 右子树

```c++
void preOrder(TreeNode *root) {
    if(root == NULL) return;
    cout << root->val << " ";
    preOrder(root->left);
    preOrder(root->right);
}
```

中序遍历：左子树 -> 根节点 -> 右子树

```c++
void inOrder(TreeNode *root) {
    if(root == NULL) return;
    inOrder(root->left);
    cout << root->val << " ";
    inOrder(root->right);
}
```

后序遍历：左子树 -> 右子树 -> 根节点

```c++
void postOrder(TreeNode *root) {
    if(root == NULL) return;
    postOrder(root->left);
    postOrder(root->right);
    cout << root->val << " ";
}
```

层次遍历：从上到下，从左到右

很多树的算法都可以在上述四种遍历的基础上修改。

也就是：先判断结束条件，然后判断采用哪种遍历，接下来判断做出递归之前要做什么，做出递归之后要做什么。

例如求树的每个结点的平衡因子，思路为采用后序遍历，先求出左子树和右子树的树高，然后计算当前结点的平衡因子。

后序遍历的做法：

```c++
int getBalanceFactor(TreeNode *root) {
    if(root == NULL) return 0;
    int leftHeight = getBalanceFactor(root->left);
    int rightHeight = getBalanceFactor(root->right);

    root->balanceFactor = leftHeight - rightHeight;
    return max(leftHeight, rightHeight) + 1;
}
```

#### 树的线索化

树的线索化，指的是将树的结点按照某种遍历方式进行线索化，使得每个结点都有两个指针，一个指向其前驱，一个指向其后继。

在线索二叉树中，`ltag` 或 `rtag` 为 `1` 表示对应指针是线索，
为 `0` 表示对应指针指向孩子。只有当 `ltag == 1` 且 `rtag == 1` 时，
该结点才是叶子结点。

如果是中序线索化，而现在要进行普通的先序遍历，不能直接把线索当作孩子访问。

需要把左、右孩子的判断分别改为
`root->ltag == 0 && root->lchild != nullptr` 和
`root->rtag == 0 && root->rchild != nullptr`。

中序线索化时，若左子树存在，结点的前驱是左子树的最右结点；
若右子树存在，结点的后继是右子树的最左结点。

先序线索化时，仅依靠左右指针通常不能直接找到前驱；
若 `p` 有左孩子，先序后继优先是 `p->lchild`，否则是 `p->rchild`
或向上回溯后找到的结点。

后序线索化时，若 `p` 有右孩子，后序前驱优先是 `p->rchild`；
否则是 `p->lchild`。后序后继通常需要父指针、栈或额外线索才能直接找到。

> **校验：** 原文把线索指针与孩子指针混用，并把“先序无法找前驱、
> 后序无法找后继”写成了无条件结论；已补充 `ltag`、`rtag` 的含义，
> 并明确这些结论依赖于是否有额外的父指针、栈或线索。

#### 已知先序遍历序列和中序遍历序列，求树

先序遍历的第一个元素为根节点，在中序遍历中找到根节点，根节点左侧为左子树，右侧为右子树。

递归处理左子树和右子树。

#### 已知后序遍历序列和中序遍历序列，求树

后序遍历的最后一个元素为根节点，在中序遍历中找到根节点，根节点左侧为左子树，右侧为右子树。

递归处理左子树和右子树。

#### 已知层次遍历和中序遍历序列，求树

层次遍历的第一个元素为根节点，在中序遍历中找到根节点，根节点左侧为左子树，右侧为右子树。

递归处理左子树和右子树。

### 树的存储结构

#### 双亲表示法

双亲表示法，指的是每个结点保存其双亲结点的下标。

#### 孩子表示法

孩子表示法，指的是每个结点保存其孩子结点的下标。

#### 孩子兄弟表示法

孩子兄弟表示法，指的是左孩子右兄弟。

#### 树的先序遍历

本质为二叉树的先序遍历。

#### 树的后序遍历

本质为二叉树的中序遍历。

#### 森林的先序遍历

本质为二叉树的先序遍历。

#### 森林的中序遍历

本质为二叉树的中序遍历。

### 哈夫曼树

哈夫曼树的构建，以及哈夫曼编码。

WPL（带权路径长度）为
$\mathrm{WPL}=\sum_{i=1}^{n}w_i l_i$，其中 $w_i$ 是叶子结点的权值，
$l_i$ 是该叶子结点到根结点的路径长度。

### 并查集

并查集的朴素实现以及优化

```c++
// 数组模拟
int parent[MAXSIZE];
void init(int n) {
    for(int i = 0; i < n; i++) {
        parent[i] = -1;
    }
}
// 朴素版本
int findNaive(int x) {
    while(parent[x] != -1) {
        x = parent[x];
    }
    return x;
}
// 朴素版本合并
void uniteNaive(int x, int y) {
    int rootX = findNaive(x);
    int rootY = findNaive(y);
    if(rootX != rootY) {
        parent[rootX] = rootY;
    }
}

// 优化版本压缩查找
int find(int x) {
    int root = x;
    while(parent[root] != -1) {
        root = parent[root];
    }
    // 得到 root 具体值后，把路径上所有的结点的 parent 都设置为 root
    int temp = x;
    while(temp != root) {
        int next = parent[temp];
        parent[temp] = root;
        temp = next;
    }
    return root;
}
// 按秩合并
void unite(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if(rootX != rootY) {
        if(rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if(rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootX] = rootY;
            rank[rootY]++;
        }
    }
}

```

> **校验：** 原代码的朴素查找在循环结束后返回了根结点的父值 `-1`，
> 两组函数还使用了 C++ 关键字 `union` 并造成同名冲突；已改为返回根下标，
> 并分别命名为 `findNaive`、`uniteNaive`、`find` 和 `unite`。

## 第 6 章 - 图

### 考纲 - 图

- 图的基本概念
- 图的存储以及基本操作
- 邻接矩阵；邻接表；十字链表；邻接多重表
- 图的遍历
- 深度优先搜索；广度优先搜索
- 图的基本应用
- 最小生成树（代价生成树）；最短路径；拓扑排序；关键路径

### 图的定义

- 图是由顶点集 $V$ 和边集 $E$ 组成的数据结构，记作 $G=(V,E)$。
- 图的顶点数记作 $n$，边数记作 $e$。
- 完全图：任意两个顶点之间都有边，记作 $K_n$。
- 子图：图 $G'=(V',E')$ 是图 $G=(V,E)$ 的子图，如果 $V'$ 是 $V$ 的子集，
  $E'$ 是 $E$ 的子集。
- 连通图：如果图中任意两个顶点之间都存在路径，则称该图是连通图。
- 极大连通子图：如果图 $G$ 的某个子图是连通图，并且不存在包含它的更大连通子图，
  则称该子图为极大连通子图（适用于无向图），也就是连通分量。
- 极小连通子图：如果一个连通子图删除任意一条边都会变得不连通，则称其为极小连通子图；
  无向图中的极小连通子图是树，但不一定是最小生成树。
- 连通分量：无向图的极大连通子图称为连通分量。
- 强连通图：有向图中任意两个顶点 $u,v$ 都满足 $u$ 可达 $v$ 且 $v$ 可达 $u$。
- 弱连通图：有向图忽略边的方向后得到的无向图是连通图。
- 简单路径：路径上顶点不重复的路径。（适用于有向图和无向图）
- 简单回路：路径上顶点不重复的回路。（适用于有向图和无向图）

### 图的存储

#### 邻接矩阵

邻接矩阵，指的是用一个二维数组来存储图的边。

入度：竖着遍历，出度：横着遍历

#### 邻接表

邻接表，指的是用一个一维数组来存储图的顶点，用链表来存储图的边，即边表结点。

入度：遍历每一个顶点和边；出度：遍历该顶点的边表结点。

#### 十字链表

主要是要掌握怎么看，看沿着左边走还是右边走。

主要是有向图的存储。

#### 邻接多重表

主要是要掌握怎么看，看沿着左边还是右边走。

主要用于无向图的存储。

### 图的遍历

#### 广度优先

广度优先搜索，指的是从图的某个顶点出发，先访问距离为 $1$ 的顶点，
再访问距离为 $2$ 的顶点，逐层向外扩展。

广度优先可以生成广度优先生成树。生成树是否唯一取决于邻接点的访问顺序，
与采用邻接矩阵还是邻接表没有必然关系。

与此同时，广度优先遍历可以用来求单源最短路径，只需要在遍历的同时记录每个点到起点的距离即可。

#### 深度优先

深度优先搜索，指的是从图的某个顶点出发，沿着一条路径尽可能深入，
到达不能继续访问的顶点后回溯，再访问其他路径。

深度优先可以生成深度优先生成树。生成树是否唯一同样取决于邻接点的访问顺序。

#### 存储结构与性能比较

广度优先：邻接矩阵 $O(n^2)$，邻接表 $O(n+e)$。
深度优先：邻接矩阵 $O(n^2)$，邻接表 $O(n+e)$。

#### 图的连通性与遍历

对于连通无向图，只需要从一个顶点开始遍历；对于非连通无向图，
需要从每个尚未访问的顶点开始遍历，遍历次数等于连通分量数。

对于有向图，需要区分强连通和弱连通：强连通要求任意两个顶点相互可达；
弱连通只要求忽略边方向后连通。

需要注意，强连通要求从 $a$ 到 $b$，以及从 $b$ 到 $a$ 都存在有向路径。

### 图的应用

#### 最小生成树

- Prim 算法

  每次从已选顶点集合与未选顶点集合之间的所有边中，选取权值最小的一条，
  将对应的未选顶点加入集合，直到选入所有顶点。

- kruskal 算法

  将所有边按权值从小到大排序，依次选取不会形成环的边，
  直到选取 $V-1$ 条边或图已经连通。

二者得到的最小生成树可能不一样，但在同一个带权无向连通图中，
最小生成树的总权值一定相同。

对于这种题，一定是要注意题设给的条件，比如说权值最小的边的总数，或者干脆权值各不相同。

所以上述是 “可能” 不一样。

#### 最短路径

- Dijkstra 算法

  - 凭感觉法

  - 手算算法：使用 `dist`、`path`、`visited` 分别记录当前最短距离、
    最短路径前驱和访问状态。每轮从未访问顶点中选取 `dist` 最小的顶点，
    再用它松弛所有出边，直到没有可改进的顶点。

  - 时间复杂度：$O(V^2)$。

  - 空间复杂度：$O(V)$。

  - 需要注意的点：Dijkstra 算法要求边权非负；它用于求最短路径，
    不能把“是否存在环”作为其主要判定功能。

- Floyd 算法

  - 手算法：

#### 有向图无环图应用

历年来只考过一次，中缀表达式的树表达转为图表达，尤其要注意变量一定是放在最底层且唯一的。

#### 拓扑排序

- 拓扑排序的描述是：选取入度为 0 的点，然后删除该点以及该点连接的边，重复上述过程，直到所有点都被删除。

- 拓扑排序的直接实现：

    ```c
    typedef struct Graph {
        int V;
        int E;
        int adj[MAXSIZE][MAXSIZE];
    } Graph;

    void getInDegree(Graph G, int inDegree[]) {
        for (int i = 0; i < G.V; i++) {
            inDegree[i] = 0;
        }
        for(int i = 0; i < G.V; i++) {
            for(int j = 0; j < G.V; j++) {
                if(G.adj[i][j] != 0) {
                    inDegree[j]++;
                }
            }
        }
    }

    bool topoSort(Graph G, int topo[]) {
        int inDegree[MAXSIZE] = {0};
        getInDegree(G, inDegree);
        int queue[MAXSIZE]; // 队列
        int front = 0, rear = 0;
        // 将入度为 0 的点入队
        for(int i = 0; i < G.V; i++) {
            if(inDegree[i] == 0) {
                queue[rear++] = i;
            }
        }
        // 队列不为空时，取出队头元素，输出队头元素，并将其所有邻接点的入度减 1
        // 如果邻接点的入度减 1 后为 0，则将该点入队
        int index = 0;
        while(front != rear) {
            int v = queue[front++];
            topo[index++] = v;
            // 遍历 v 的所有邻接点
            for(int i = 0; i < G.V; i++) {
                if(G.adj[v][i] != 0) {
                    inDegree[i]--;
                    if(inDegree[i] == 0) {
                        queue[rear++] = i;
                    }
                }
            }
        }
        return index == G.V; // 如果拓扑排序成功，则返回 true，否则返回 false
    }
    ```

  - 时间复杂度：$O(V^2)$。

  - 空间复杂度：$O(V^2)$。

  - 拓扑排序需要注意的点：若最终输出顶点数小于 $V$，则图中存在环。

> **校验：** 原代码未初始化入度数组，处理到一个入度降为 $0$ 的邻接点后又
> `break`，会漏掉同一顶点的其他邻接点；此外 `Graph` 的 `typedef` 不完整。
> 已补充初始化、删除 `break`，并补全类型别名。

#### 关键路径

利用软件工程里学的 4 个活动时间，求出关键路径，不需要按照王道书的方法求。

4 个活动时间：最早开始时间、最早结束时间、最晚开始时间、最晚结束时间。

最早开始时间：从前往后推，活动的最早开始时间等于其所有前驱活动最早结束时间的最大值。

最早结束时间：从前往后推，$\mathrm{EF}=\mathrm{ES}+\text{活动时间}$。

最晚开始时间：从后往前推，$\mathrm{LS}=\mathrm{LF}-\text{活动时间}$。

最晚结束时间：从后往前推，活动的最晚结束时间等于其所有后继活动最晚开始时间的最小值。

关键路径是总持续时间最长的路径，关键活动通常满足总时差为 $0$。

> **校验：** 原文把最早开始时间写成“最早结束时间减活动时间”，
> 把最晚结束时间写成“最晚开始时间加活动时间”，方向和定义均不对；
> 已按前向最大值、后向最小值修正四个时间量。

| 认知误区 | 修正结论 |
| :--- | :--- |
| 关键路径只有 $1$ 条 | 错误，可能同时存在多条等长的关键路径。 |
| 只要压缩关键活动，工期就一定会缩短 | 错误，多关键路径下单压一条无效；且过度压缩会导致路径转移。 |
| 非关键活动怎么延误都无所谓 | 错误，延误一旦超过总时差，就会变成新的关键路径并拖慢工期。 |
| 关键路径上的活动一旦确定就不会变 | 错误，动态调整活动时间会导致关键路径动态漂移。 |

## 第 7 章 - 查找

### 考纲 - 查找

- 查找的基本方法
- 顺序查找法
- 分块查找法
- 折半查找法
- 树形查找（二叉搜索树；平衡二叉树；红黑树）
- B 树及其基本操作、B+ 树的基本概念
- 散列表
- 查找算法的分析及应用

### ASL 分析

ASL 分析：平均查找长度，指的是查找成功时，需要查找的次数的平均值。

$$
\mathrm{ASL}_{\mathrm{success}}=\sum_{i=1}^{n} iP_i,
\qquad \sum_{i=1}^{n}P_i=1.
$$

其中，$n$ 是查找表中元素的个数，$P_i$ 是查找成功时第 $i$ 个元素的查找概率。

ASL 是查找成功时的平均查找长度；查找不成功时，应根据失败结点或失败区间的概率
单独计算平均查找长度。

> **校验：** 原公式在 $P_i$ 已表示概率时又乘以 $1/n$，会重复除以元素个数；
> 已改为概率加权和，并明确概率和为 $1$。

### 朴素查找与有序表查找的简单优化

朴素查找：顺序查找，直到找到为止。

有序表查找不成功的优化：使用顺序查找，如果要找的值已经比当前元素小，则直接返回不成功。

这两种均适用于顺序表和链表。

### 二分查找与二分查找树

二分查找：折半查找，每次将查找范围缩小一半，直到找到为止。

```c
int binarySearch(int A[], int n, int key) {
    int left = 0, right = n - 1;
    while(left <= right) {
        int mid = (left + right) / 2;
        if(A[mid] == key) return mid;
        else if(A[mid] < key) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

时间复杂度：$O(\log n)$。
空间复杂度：$O(1)$。

二分查找适用于顺序表。

二叉搜索树的查找效率取决于树高；只有树高为 $O(\log n)$ 时，
查找才具有对数级复杂度。根据序列从右向左构建并不能保证得到平衡树。

注意计算 ASL，空结点不能算次数。

### 分块查找

分块查找：将查找表分成若干块，每块中的元素可以是无序的，但块之间是有序的。

块间可以采用折半查找优化。

需要注意的是，块间按照数组存储，然后按照孩子表示法进行拉链，形成链表。

较常见的均匀分块方案是 $\sqrt{n}$ 块，每块约有
$\frac{n}{\sqrt{n}}=\sqrt{n}$ 个元素。

### 二叉搜索树

又叫二叉排序树。若规定关键字不重复，则满足左子树关键字
$<$ 根关键字 $<$ 右子树关键字，中序遍历结果递增。

如何判断一棵树是否是二叉搜索树，可以在中序遍历中检查关键字是否严格递增：

```c++
bool isBSTInOrder(TreeNode *root, long long &previous, bool &hasPrevious) {
    if (root == nullptr) return true;
    if (!isBSTInOrder(root->left, previous, hasPrevious)) return false;
    if (hasPrevious && root->val <= previous) return false;
    previous = root->val;
    hasPrevious = true;
    return isBSTInOrder(root->right, previous, hasPrevious);
}

bool isBST(TreeNode *root) {
    long long previous = 0;
    bool hasPrevious = false;
    return isBSTInOrder(root, previous, hasPrevious);
}
```

> **校验：** 原代码用返回值重载同名函数，这是 C++ 不允许的；递归还会调用到
> 错误的重载，且全局 `flag` 和 `0x80000000` 无法稳妥处理重复值及最小整数。
> 已改为显式传递中序状态，并使用 `long long` 保存前一个关键字。

### 二叉平衡树

二叉平衡树，即 AVL 树，满足左右子树高度差不超过 1。

若以结点数定义高度并令空树高度为 $-1$，则结点数最少的 AVL 树满足：

$$
N_{-1}=0,\qquad N_0=1,\qquad
N_h=N_{h-1}+N_{h-2}+1\quad(h\ge 1).
$$

它与斐波那契数列相关，但不能直接写成斐波那契数列前若干项的简单求和。

#### LL

表述为一个结点的左子树不平衡，是因为其左子树的左子树过高，
需要对失衡结点进行右旋。

#### LR

表述为一个结点的左子树不平衡，是因为其左子树的右子树过高，
需要先对左孩子左旋，再对失衡结点右旋。

#### RL

表述为一个结点的右子树不平衡，是因为其右子树的左子树过高，
需要先对右孩子右旋，再对失衡结点左旋。

#### RR

表述为一个结点的右子树不平衡，是因为其右子树的右子树过高，
需要对失衡结点进行左旋。

> **校验：** 原文把 AVL 的四种旋转方向全部写反，并遗漏了最少结点递推式中的
> `+1` 及初值；已按 LL、LR、RL、RR 的标准旋转方式和高度定义修正。

#### 计算二叉平衡树的平衡因子

```c
int getBalanceFactor(TreeNode* root) {
    // 利用后序遍历
    if(root == nullptr) return 0;
    int leftHeight = getHeight(root->left);
    int rightHeight = getHeight(root->right);
    root -> balanceFactor = leftHeight - rightHeight;
    return max(leftHeight, rightHeight) + 1;
}
```

### 红黑树

左根右，根黑，红不连，黑路同。

叶节点通常用黑色的空结点（`NIL`）表示。

### B 树 & B+ 树

| 比较维度 | $m$ 阶 B 树（B-Tree） | $m$ 阶 B+ 树（B+ Tree） |
| :--- | :--- | :--- |
| **非根内部子树数 $k$** | $\lceil m/2\rceil\le k\le m$ | 同左 |
| **非根内部关键字数 $n$** | $\lceil m/2\rceil-1\le n\le m-1$ | 同左，均为分隔键 |
| **根结点约束** | 非叶：$2\le k\le m$，$1\le n\le m-1$ | 非叶：$2\le k\le m$；索引数通常为 $k-1$ |
| **关键字与子树的关系** | 子树数 = 关键字数 $+1$ | 内部结点子树数 = 分隔关键字数 $+1$，叶子记录数另行规定 |

#### 数据存储与检索机制对比

B 树：每一个结点（包括根、内部结点、叶子结点）都同时存储关键字和实际数据记录（或数据指针）。只要在某一层命中关键字，就可以立刻返回数据，不需要走到叶子层。

B+ 树：所有实际数据记录全部且仅存储在叶子结点；非叶子结点只充当纯粹的“路由索引”，
不挂载实际数据。检索任何数据都必须一路走到最底层的叶子结点。

#### 叶子结点的连接（链表结构）

B 树：叶子结点之间相互独立，没有指针相连。

B+ 树：所有叶子结点按照关键字大小顺序排列，并通过双向（或单向）链表连接成一个有序链表。

#### 关键字重复性

B 树：各结点的关键字在全树中只出现一次，绝不重复。

B+ 树：叶子结点包含全树的所有关键字全集；出现在内部结点中的关键字，在其子树对应的叶子结点中依然会重复出现。

#### 需要注意

最后需要注意的是，B 树和 B+ 树的树高都不要把空指针或空结点计入。
B 树的叶子结点可以存储关键字和数据记录；B+ 树的实际数据记录统一存储在叶子结点。

> **校验：** 原文把 B 树的叶子结点误写成空结点，并将 B+ 树内部结点的关键字数
> 与子树数关系写反；已按常见“阶数等于最大子树数”的定义修正，并保留不同教材
> 对叶子装载量的定义差异。

### 散列表

#### 散列函数

- 除留余数法
- 二次散列法
- 平方取中法
- 数字分析法

#### 冲突处理 - 开放定址法

- 线性探测法，又称线性探测再散列法。
- 二次探测法，又称二次探测再散列法。
- 双散列法
- 伪随机数法

#### 冲突处理 - 拉链法

拉链法是链地址法，将冲突的元素存储在链表中。

主要处理一下散列表 ASL 和查找失败 ASL。

#### 散列表的装填因子与 ASL

## 第 8 章 - 排序

### 插入排序

#### 直接插入排序

#### 折半插入排序

#### 希尔排序

### 交换排序

#### 冒泡排序

#### 快速排序

### 选择排序

#### 简单选择排序

#### 堆排序

### 归并排序

### 基数排序

### 计数排序

### 各种排序方法的比较

### 外部排序

#### 外部排序三部曲

生成归并段 - 生成归并顺序 - 自下而上的归并

#### 生成归并段

土办法生成归并段

利用置换选择排序生成归并段

#### 生成归并顺序

不生成归并顺序随意归并

利用 k 叉哈夫曼树，即最佳归并树

#### 自下而上的归并

线性扫描归并：时间复杂度为 $O(Nk)$。

利用败者树进行归并：时间复杂度为 $O(N\log k)$。

## 真题辨析

### 代码题 - 数组相关

#### 数组相关基本操作

- 快速排序

```c++
  int partition(int A[], int l, int r) {
    int pivot = A[l];
    while (l < r) {
      while (l < r && A[r] >= pivot) r--;
      A[l] = A[r];
      while (l < r && A[l] <= pivot) l++;
      A[r] = A[l];
    }
    A[l] = pivot;
    return l;
  }
  void quickSort(int A[], int l, int r) {
    if (l >= r) return;
    int pivot = partition(A, l, r);
    quickSort(A, l, pivot - 1);
    quickSort(A, pivot + 1, r);
  }
  ```

- 归并排序

  ```c++
  void merge(int A[], int l, int mid, int r) {
    int i = l, j = mid + 1, k = 0;
    int temp[r - l + 1];
    while (i <= mid && j <= r) {
      if (A[i] <= A[j]) temp[k++] = A[i++];
      else temp[k++] = A[j++];
    }
    while (i <= mid) temp[k++] = A[i++];
    while (j <= r) temp[k++] = A[j++];
    for (int i = 0; i < k; i++) A[l + i] = temp[i];
  }
  void mergeSort(int A[], int l, int r) {
    if (l >= r) return;
    int mid = (l + r) / 2;
    mergeSort(A, l, mid);
    mergeSort(A, mid + 1, r);
    merge(A, l, mid, r);
  }
  ```

- 二分查找及其变式

  ```c++
  // 普通二分查找
  int binarySearch(int A[], int n, int key) {
    int left = 0, right = n - 1;
    while(left <= right) {
      int mid = (left + right) / 2;
      if(A[mid] == key) return mid;
      else if(A[mid] < key) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
  // 查找第一个大于等于 key 的元素
  int binarySearchFirst(int A[], int n, int key) {
    int left = 0, right = n;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (A[mid] >= key) right = mid;
      else left = mid + 1;
    }
    return left < n ? left : -1;
  }
  // 查找最后一个小于等于 key 的元素
  int binarySearchLast(int A[], int n, int key) {
    int left = 0, right = n;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (A[mid] <= key) left = mid + 1;
      else right = mid;
    }
    return left > 0 ? left - 1 : -1;
  }
  ```

> **校验：** 原代码的 `binarySearchFirst` 在 `A[mid] < key` 时不更新边界，
> 会陷入死循环；两个变式也只在恰好等于 `key` 时返回，无法处理“第一个大于等于”
> 或“最后一个小于等于”的情况。已改为半开区间写法。

### 代码题 - 链表相关

#### 单链表相关操作

- 反转链表（使用带头节点的单链表，头插法置换）

```c++
  void reverseList(ListNode *list) {
    if (list == nullptr) return;
    ListNode *prev = nullptr;
    ListNode *curr = list->next;
    while (curr != nullptr) {
      ListNode *next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }
    list->next = prev;
  }
  ```

- 反转链表（使用不带头节点的单链表，原地置换）

  ```c++
  ListNode *reverseList(ListNode *list) {
    ListNode *prev = nullptr;
    while (list != nullptr) {
      ListNode *next = list->next;
      list->next = prev;
      prev = list;
      list = next;
    }
    return prev;
  }
  ```

> **校验：** 原带头结点版本的循环条件一开始就为假，实际上没有执行反转；
> 无头结点版本只修改了局部变量 `list`，调用者拿不到新头结点。已分别改为
> 普通单链表反转，并让无头结点版本返回反转后的头指针。

### 代码题 - 树相关

如果考代码题，一定是基于三种遍历去考。首先需要思考到底是基于先序遍历，中序遍历还是后序遍历，然后思考遍历左子树之前需要做什么，之后需要做什么，遍历右子树之前需要做什么，之后需要做什么。

### 代码题 - 图相关

#### 计算邻接矩阵的度

```c
// 计算入度
int getIndegree(int G[N][N], int indegree[N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (G[j][i] == 1) indegree[i]++;
        }
    }
}
// 计算出度
int getOutdegree(int G[N][N], int outdegree[N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (G[i][j] == 1) outdegree[i]++;
        }
    }
}
```

#### 计算邻接表的度

```c
// 定义邻接表
typedef struct Node {
    int data;
    struct Node *next;
} Node;
typedef struct Graph {
    Node *vertices[N];
} Graph;

// 计算入度，需要在横着遍历的时候，加该结点的入度
int getIndegree(Graph G, int indegree[N]) {
    for (int i = 0; i < N; i++) {
        Node *p = G.vertices[i]->next;
        while (p != nullptr) {
            indegree[p->data]++;
            p = p->next;
        }
    }
}

// 计算出度，只需要 1 次邻接表即可
int getOutdegree(Graph G, int outdegree[N]) {
    for (int i = 0; i < N; i++) {
        Node *p = G.vertices[i]->next;
        while (p != nullptr) {
            outdegree[i]++;
            p = p->next;
        }
    }
}
```

#### 拓扑排序思想的应用

#### bfs 思想的应用（单源最短路径）

#### dfs 思想的应用（深度优先搜索）

### 应用题 - 线性表的操作

#### 受限队列的设计

### 应用题 - 树

#### 树高，树深等相关计算

#### 哈夫曼树的应用

哈夫曼树是带权路径长度。

#### 并查集的基本操作

### 应用题 - 图

### 应用题 - 查找

#### 二叉搜索树，平衡二叉树与红黑树的辨析

#### 哈希表的插入与冲突

方法：必须留档，也就是：

原数 - 散列过程 - 散列结果。

一定是要这么写，否则可能会出现低级错误。

其他问题不大，主要注意一下哈希表的长度在计算冲突时的处理，不要超过哈希表长度即可。

### 应用题 - 排序

#### 给定排序的分析

给出代码分析该排序是否稳定，主要是 = 相关的问题，在比较的时候有可能采用 >=，或者 >，这个操作会导致稳定 / 不稳定。

在这里还可能考比较次数，交换次数，排序趟数等，需要具体题目具体分析，需要看清楚题设。

#### 内部排序的思想应用

- 快排的划分思想

- 归并排序的归并思想

- 堆排序的堆调整思想

  堆排序首先需要建堆，建堆的时间复杂度为 $O(n)$，然后每次调整堆的时间复杂度为 $O(\log n)$，总共需要调整 n 次，所以堆排序的时间复杂度为 $O(n\log n + n)$。

#### 外部排序的应用

外部排序主要考置换选择排序。置换选择排序的主要流程为：

一边输出当前段的最小值，一边读入新数据；能接在后面的就继续接，接不上的就先冻结。即

设内存工作区（内部缓冲区）最多能容纳 $w$ 个记录。

1. 初始化（装满工作区）
  从外存输入文件中连续读入 $w$ 个记录，填满内存工作区。在内存中利用这 $w$ 个记录建立一个败者树（或最小堆），用于快速挑选最小值。

2. 选出并输出当前最小值
  从内存的有效记录中选出关键字最小的记录，记为 $MIN$（或 $last\_val$）。将该记录输出到外存的当前初始归并段文件中。

3. 读入新记录并进行“冷冻/激活”判定
  从输入文件中读入下一个新记录 $R$，填补刚才被输出记录空出来的内存位置。比较 $R$ 的关键字与刚刚输出的 $MIN$：
  情况 A（$R.key \ge MIN$）：
  说明新来的数据比刚输出的数据大（或相等），可以顺理成章地排在当前递增序列的后面。将 $R$ 标记为“有效”，继续参与当前归并段的最小者竞争。
  情况 B（$R.key < MIN$）：
  说明新来的数据比刚才输出的数据还要小，如果放进当前归并段就会破坏单调递增性！因此该记录不能放入当前归并段，将其打上标记（冻结/挂起），它不参与当前归并段的竞争，只能等待生成下一个归并段时再用。

4. 重复选择与置换
  重新调整败者树/堆，在内存中所有未被冻结的记录中选出新的最小值，输出到当前归并段，并更新 $MIN$。再次读入新数据，重复上述第 3 步的判断。

5. 归并段结束与重置
  随着数据不断读入，内存中被“冻结”的记录会越来越多。当内存工作区里的 $w$ 个记录全部被冻结（即没有未冻结记录可用）时：
  当前初始归并段生成完毕，封口结束。解除内存中所有 $w$ 个记录的冻结状态。用这 $w$ 个记录重新构建败者树，开启下一个全新的初始归并段。

6. 算法终止

重复上述过程，直到外存中所有的 $n$ 个待排序数据全部被读取并输出完毕。

与传统方法的比较：

传统方法（内部快排等）：每次只能把内存装满 $w$ 个数据，排好序直接输出为一段。所以每个归并段的长度固定就是 $w$。

置换-选择排序：由于新读入的数据只要 $\ge MIN$ 就能顺带输出，归并段就像“扫雪机”一样一边走一边往前推：

平均长度：约为内存容量的 $2w$；

最大长度：数据原本就有序时，可以达到 $n$（一次性把全部数据排完，只生成 $1$ 个归并段）；

最小长度：数据完全逆序时，长度为 $w$。

需要注意的是，这个生成的是归并段总数，也就是例如总共生成了 k 个归并段。

然后利用 m 叉哈夫曼树构造归并顺序，如果叶子节点数量 $k$ 不满足严格构成满 $m$ 叉树的条件，即 $(k - 1) \pmod{m - 1} \ne 0$ 时，还需要人为补上权值为 $0$，补充的数量为 $m - 1 - (k - 1) \pmod{m - 1}$。
