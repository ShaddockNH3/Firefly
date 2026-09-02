---
title: 考研冲刺前的总结 —— 数据结构
published: 2026-09-01
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

#### KMP 算法及其改进

以 a b a b a a 为例：

| 下标 $j$ | 0 | 1 | 2 | 3 | 4 | 5 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **字符 $P[j]$** | `a` | `b` | `a` | `b` | `a` | `a` |
| **子串 $P[0 \dots j]$** | `a` | `ab` | `aba` | `abab` | `ababa` | `ababaa` |
| **最长前后缀** | 无 | 无 | `a` | `ab` | `aba` | `a` |
| **`next`** | **0** | **0** | **1** | **2** | **3** | **1** |
| **`nextval`** | **0** | **0** | **0** | **0** | **0** | **1** |

手算 next 和 nextval 数组。

这类题需要注意移动距离和下标不要搞混淆了。

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

#### 关键路径

利用软件工程里学的 4 个活动时间，求出关键路径，不需要按照王道书的方法求。

4 个活动时间：最早开始时间、最早结束时间、最晚开始时间、最晚结束时间。

最早开始时间：从前往后推，活动的最早开始时间等于其所有前驱活动最早结束时间的最大值。

最早结束时间：从前往后推，$\mathrm{EF}=\mathrm{ES}+\text{活动时间}$。

最晚开始时间：从后往前推，$\mathrm{LS}=\mathrm{LF}-\text{活动时间}$。

最晚结束时间：从后往前推，活动的最晚结束时间等于其所有后继活动最晚开始时间的最小值。

关键路径是总持续时间最长的路径，关键活动通常满足总时差为 $0$。

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

叶子节点指的是 “空” 结点，即非索引结点，为数据结点。

### 散列表

#### 散列函数

- 除留余数法
- 二次散列法
- 平方取中法
- 数字分析法

可以注意，除留余数法一般选取质数作为模数。

对于平方取中和数字分析法，可以理解为对关键字进行平方运算或分析关键字的一部分作为散列地址。

比如说手机尾号就可以采用数字分析法。

#### 冲突处理 - 开放定址法

- 线性探测法，又称线性探测再散列法。
- 二次探测法，又称二次探测再散列法。
- 双散列法
- 伪随机数法

这里主要是记住一下名字问题，考研中对于上面出现的词汇都有用到过。

#### 冲突处理 - 拉链法

拉链法是链地址法，将冲突的元素存储在链表中。

主要处理一下散列表 ASL 和查找失败 ASL，并且注意计算的时候，要注意散列表本身的长度。

#### 散列表的装填因子与 ASL

## 第 8 章 - 排序

### 插入排序

插入排序可以理解为扑克牌的排序，每次将一个元素插入到已排序的序列中，直到所有元素都插入到已排序的序列中。

适用于顺序表和链表。

#### 直接插入排序

```c
void insertSort(int A[], int n) {
    for (int i = 1; i < n; i++) {
        int temp = A[i];
        int j = i - 1;
        while (j >= 0 && A[j] > temp) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = temp;
    }
}
```

为稳定排序。

#### 折半插入排序

```c
void binaryInsertSort(int A[], int n) {
    for (int i = 1; i < n; i++) {
        int temp = A[i];
        int left = 0, right = i - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (A[mid] > temp) right = mid - 1;
            else left = mid + 1;
        }
        for (int j = i; j > left; j--) {
            A[j] = A[j - 1];
        }
        A[left] = temp;
    }
}
```

仅仅是改变了比较次数，但是移动次数不变。

为稳定排序。

#### 希尔排序

希尔排序不确定时间复杂度，但是时间复杂度范围在 $O(n^{1.3})$ 到 $O(n^2)$ 之间。

主要理解这个算法的思想，按照轴，以及比较次数，默认是按照插入排序，并不是一个稳定的排序算法。

### 交换排序

#### 冒泡排序

需要注意的是，考研范围内的冒泡排序是默认如果扫一趟没有发生交换，则认为已经排序完成。

```c
void bubbleSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                int temp = A[j];
                A[j] = A[j + 1];
            }
        }
    }
}
```

#### 快速排序

```c
void partition(int A[], int l, int r) {
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

### 选择排序

简单选择排序，使用于数组和链表。

```c
void selectSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (A[j] < A[minIndex]) minIndex = j;
        }
        int temp = A[i];
        A[i] = A[minIndex];
        A[minIndex] = temp;
    }
}
```

为不稳定排序。

#### 堆排序

采用双亲表示法，具体而言，对于从小到大的排序，首先是建立一个大根堆，然后根据大根堆的性质，将堆顶元素与待排序的最后一个元素交换，然后调整堆，直到堆为空。

为稳定算法。

这里需要注意比较次数，例如从下往上比较，即便是停下来了，也是和上面那个元素比较完之后，才确认当前为止。

堆排序时间复杂度为 O(n + nlogn)，其中建堆花费 O(n)，每次调整堆需要花费 logn 的时间，总共需要调整 n 次堆，所以最终是 O(n+nlogn)。

需要消耗 O(n) 空间复杂度。

### 归并排序

归并排序，采用分治法，具体而言，对于从小到大的排序，首先是将待排序的序列分成两个子序列，然后对两个子序列进行排序，然后合并两个子序列。

```c
void merge(int A[], int l, int mid, int r) {
    int i = l, j = mid + 1, k = 0;
    int temp[r - l + 1];
    while (i <= mid && j <= r) {
        if (A[i] <= A[j]) temp[k++] = A[i++];
        else temp[k++] = A[j++];
    }
    // 如果左边还有剩余，则将左边剩余的元素放入 temp 中
    while (i <= mid) temp[k++] = A[i++];
    // 如果右边还有剩余，则将右边剩余的元素放入 temp 中
    while (j <= r) temp[k++] = A[j++];
    // 将 temp 中的元素放入 A 中
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

需要消耗 O(n) 空间复杂度。

### 基数排序

基数排序不是基于比较的算法，而是基于分配和收集的算法。

准备桶：因为是十进制，我们准备 0 到 9 一共 10 个桶。

第一轮（按个位分配与收集）：

分配：看每个数的个位数，把它们分别扔进对应的桶里。
收集：按 0 到 9 号桶的顺序，把里面的米袋依次倒出来排成一排。此时，个位数小的肯定排在前面。

第二轮（按十位分配与收集）：

分配：拿刚才收集好的顺序，看它们的十位数，再次分别扔进 0 到 9 号桶。
收集：再次按 0 到 9 号桶顺序倒出来。

以此类推：直到处理完最高位（百位）。处理完最后一轮收集后，所有数据就已经整整齐齐地排好序了。

两种处理方式：

LSD（Least Significant Digit）：从最低位（个位）开始往高位排，最常用，实现也最简单。

MSD（Most Significant Digit）：从最高位开始排，通常需要用递归去分治处理子桶。

复杂度与特性：

时间复杂度：$O(d \cdot (n + k))$

$n$ 是待排元素个数。
$d$ 是数字的最大位数（比如最大三位数 $d=3$）。
$k$ 是基数（比如十进制 $k=10$）。
如果 $d$ 很小，它的运行速度几乎是线性的。

空间复杂度：$O(n + k)$（需要额外的桶空间来装数据）。

稳定性：稳定！每次收集时一定要保证先放进桶里的先出来（FIFO），否则上一轮排好的相对顺序就被打乱了。

### 计数排序

即首先记录每个元素出现的次数，然后根据这个次数去还原。

### 各种排序方法的比较

| 排序方法 | 最好时间复杂度 | 最坏时间复杂度 | 平均时间复杂度 | 空间复杂度 | 稳定性 | 适用存储结构 | 核心考点与特征简评 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **直接插入排序** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **稳定** | 顺序表、链表 | 序列基本有序或数据量小时效率最高；链表插入无需移动元素。 |
| **折半插入排序** | $O(n \log_2 n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **稳定** | 仅顺序表 | 仅利用二分查找减少了比较次数，元素移动次数未变；不支持链表。 |
| **希尔排序** | $O(n)$ | $O(n^2)$ | 约 $O(n^{1.3})$ | $O(1)$ | **不稳定** | 仅顺序表 | 缩小增量排序；跳跃式比较插入导致相同元素相对顺序被打乱。 |
| **冒泡排序** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **稳定** | 顺序表、链表 | 增加交换标志位可使最好时间达 $O(n)$；每趟均有一个元素到达全局最终位置。 |
| **快速排序** | $O(n \log_2 n)$ | $O(n^2)$ | $O(n \log_2 n)$ | 最优 $O(\log_2 n)$最差 $O(n)$ | **不稳定** | 顺序表 | 内部排序中综合平均性能最好；空间开销主要来自递归调用栈；序列基本有序时退化为最差。 |
| **简单选择排序** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **不稳定** | 顺序表、链表 | 比较次数与序列初始状态完全无关，恒为 $n(n - 1)/2$；移动次数最少。 |
| **堆排序** | $O(n \log_2 n)$ | $O(n \log_2 n)$ | $O(n \log_2 n)$ | $O(1)$ | **不稳定** | 仅顺序表 | 适合从海量数据中选出 Top-K；建堆时间复杂度为 $O(n)$，筛选调整为 $O(\log_2 n)$。 |
| **二路归并排序** | $O(n \log_2 n)$ | $O(n \log_2 n)$ | $O(n \log_2 n)$ | $O(n)$ | **稳定** | 顺序表、链表 | 性能稳定，时间复杂度与初态无关；辅助数组空间开销大（$O(n)$）。 |
| **基数排序** | $O(d(n + r))$ | $O(d(n + r))$ | $O(d(n + r))$ | $O(r)$ | **稳定** | 顺序表、链表 | 非基于比较的分配式排序；$d$ 为关键字位数，$r$ 为基数（如十进制 $r=10$）。 |
| **计数排序** | $O(n + k)$ | $O(n + k)$ | $O(n + k)$ | $O(k)$ | **稳定** | 顺序表 | 非基于比较的排序；$k$ 为数值范围（$Max - Min + 1$），$k \le O(n)$ 时线性高效。 |

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

#### 空间换时间（哈希 / 缓存）

核心本质：利用额外的存储空间（如哈希表、前缀数组、备忘录）预存信息，将耗时的重复查找从 $O(n)$ 降到 $O(1)$。
应用场景：两数之和（查哈希表看补数是否存在）、计数排序、前缀和、动态规划状态记录。

#### 双指针思想

核心本质：利用序列的有序性或方向性，通过两个下标协同移动，将两重暴力循环 $O(n^2)$ 压缩成一次线性扫描 $O(n)$。
常见分类：

对撞指针（一头一尾向中间靠拢）：有序数组求和、回文串判定、二分查找。
快慢指针 / 滑动窗口（同向不同速）：链表判环、寻找链表中点、原地去重（如移除零）、变长子数组极值。

#### 划分思想

核心本质：选取一个基准，单趟扫描将数据严格分割为“小于基准”和“大于基准”的两部分，确定基准的最终排位。
应用场景：

快速排序：递归对划分出的左右两段继续排序。
快速选择（Quick Select）：找第 $k$ 大/小元素，每次只递归进入一边，平均时间复杂度降为 $O(n)$。

#### 归并思想（Merge / 分治合并）

核心本质：“先分后治、由底至上”。将原序列递归切分成单元素有序段，再通过双指针将两个有序子序列合并为一个更大的有序序列。
应用场景：

归并排序：时间复杂度极度稳定在 $O(n \log_2 n)$。
求逆序对个数：在合并有序数组的过程中顺便统计逆序数。
合并多个有序链表/数组。

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

### 代码题 - 树相关

如果考代码题，一定是基于三种遍历去考。首先需要思考到底是基于先序遍历，中序遍历还是后序遍历，然后思考遍历左子树之前需要做什么，之后需要做什么，遍历右子树之前需要做什么，之后需要做什么。

#### 计算 WPL

```c
int wpl = 0;

void calculateWPL(TreeNode *root, int depth) {
    if (root == nullptr) return;
    if (root->left == nullptr && root->right == nullptr) wpl += depth * root->weight;
    calculateWPL(root->left, depth + 1);
    calculateWPL(root->right, depth + 1);
}

int getWPL(TreeNode *root) {
    calculateWPL(root, 1);
    return wpl;
}
```

#### 计算树的深度

```c
// 利用递归计算树的深度
int getDepth(TreeNode *root) {
    if (root == nullptr) return 0;
    int leftDepth = getDepth(root->left);
    int rightDepth = getDepth(root->right);
    return max(leftDepth, rightDepth) + 1;
}

// 利用层次遍历计算树的深度
int getDepth(TreeNode *root) {
    if (root == nullptr) return 0;
    int queue[MAX_SIZE];
    int front = 0, rear = 0;
    queue[rear++] = root;
    int depth = 0;
    while (front != rear) {
        depth++;
        int size = rear - front;
        for (int i = 0; i < size; i++) {
            TreeNode *node = queue[front++];
            if (node->left != nullptr) queue[rear++] = node->left;
            if (node->right != nullptr) queue[rear++] = node->right;
        }
    }
    return depth;
}
```

#### 中序遍历输出带符号的中缀表达式

将给定的表达式二叉树转换为等价的中缀表达式。

思路为除了深度为根和叶子结点之外，遍历左子树之前需要输出左括号，遍历右子树之后需要输出右括号。

```c
// 二叉树结点定义
typedef struct node {
    char data[10]; // 存储操作数或操作符
    struct node *left, *right;
} BTree;

// 递归转换并输出中缀表达式
void BtreeToExp(BTree *root, int deep) {
    if (root == NULL) {
        return; // 空树直接返回
    }
    
    // 判断是否为叶子结点
    if (root->left == NULL && root->right == NULL) {
        // 叶子结点为操作数，直接输出
        printf("%s", root->data);
    } else {
        // 分支结点（操作符）：若不是根结点（deep > 1），则加左括号
        if (deep > 1) {
            printf("(");
        }
        
        // 递归遍历左子树
        BtreeToExp(root->left, deep + 1);
        
        // 访问当前根结点的操作符
        printf("%s", root->data);
        
        // 递归遍历右子树
        BtreeToExp(root->right, deep + 1);
        
        // 分支结点（操作符）：若不是根结点（deep > 1），则加右括号
        if (deep > 1) {
            printf(")");
        }
    }
}

// 对外接口函数（从深度 1 开始调用）
void BtreeToE(BTree *root) {
    BtreeToExp(root, 1);
}
```

#### 计算树的平衡因子

```c
int calculateBalanceFactor(TreeNode *root) {
    if (root == nullptr) return;
    int leftHeight = getHeight(root->left);
    int rightHeight = getHeight(root->right);
    root->balanceFactor = leftHeight - rightHeight;
    return max(leftHeight, rightHeight) + 1;
}
```

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

- **核心本质与应用**：
  - 用于解决**有向无环图（DAG）**中的任务依赖排序（如编译依赖、课程先修顺序）。
  - 亦可用于**有向图判环**（若拓扑排序输出的顶点数小于总顶点数，说明存在环）。
- **算法思路**：
  - 统计每个顶点的入度，将入度为 0 的顶点入队；
  - 每次出队一个顶点并输出，同时将其所有邻接点的入度减 1；
  - 若邻接点入度减为 0，则入队；重复此过程直至队列为空。

```c
// 拓扑排序代码（邻接表存储）
bool TopologicalSort(ALGraph G) {
    int indegree[MAX_VERTEX_NUM] = {0};
    // 统计各顶点的入度
    for (int i = 0; i < G.vexnum; i++) {
        for (ArcNode *p = G.vertices[i].firstarc; p != NULL; p = p->nextarc) {
            indegree[p->adjvex]++;
        }
    }

    int queue[MAX_VERTEX_NUM], front = 0, rear = 0;
    for (int i = 0; i < G.vexnum; i++) {
        if (indegree[i] == 0) queue[rear++] = i; // 入度为0入队
    }

    int count = 0;
    while (front < rear) {
        int u = queue[front++];
        printf("%d ", u);
        count++;
        for (ArcNode *p = G.vertices[u].firstarc; p != NULL; p = p->nextarc) {
            int v = p->adjvex;
            if (--indegree[v] == 0) {
                queue[rear++] = v; // 入度减为0入队
            }
        }
    }
    return count == G.vexnum; // 若count等于顶点数，说明无环
}
```

#### BFS 思想的应用（无权图单源最短路径）

- **核心本质与应用**：
  - 利用广度优先搜索逐层向外扩张的“波纹”特性，第一次访问到某个顶点时所走的边数，就是从起点到该顶点的**最短路径长度**。
  - 广泛应用于迷宫寻路、社交网络“六度分割”人际距离计算。
- **算法思路**：
  - 维护 `visited` 数组、距离数组 `d[]`（初始化为无穷大）以及路径前驱数组 `path[]`；
  - 起点入队，其距离置为 0；
  - 每次队头出队，遍历其所有未访问过的邻接点，更新邻接点距离为当前距离加 1，记录前驱并将其入队。

```c
// BFS求无权图单源最短路径
void BFS_ShortestPath(Graph G, int u) {
    int d[MAX_VERTEX_NUM];       // 存储到各结点的最短路径长度
    int path[MAX_VERTEX_NUM];    // 存储路径前驱
    bool visited[MAX_VERTEX_NUM] = {false};
  
    for (int i = 0; i < G.vexnum; i++) {
        d[i] = INF;
        path[i] = -1;
    }
  
    int queue[MAX_VERTEX_NUM], front = 0, rear = 0;
    d[u] = 0;
    visited[u] = true;
    queue[rear++] = u;

    while (front < rear) {
        int curr = queue[front++];
        for (int w = FirstNeighbor(G, curr); w >= 0; w = NextNeighbor(G, curr, w)) {
            if (!visited[w]) {
                d[w] = d[curr] + 1;  // 路径长度加1
                path[w] = curr;      // 记录前驱
                visited[w] = true;
                queue[rear++] = w;
            }
        }
    }
}
```

#### DFS 思想的应用（深度优先搜索）

- **核心本质与应用**：
  - 采用“不撞南墙不回头”的穷举/回溯思想，探索从起点出发能够触达的所有可能状态。
  - 常见应用：**无向图连通分量计数**、**寻找所有可行路径**、**八皇后/全排列回溯搜索**、**二叉树遍历**。
- **算法思路**：
  - 访问当前结点并打上已访问标记；
  - 递归访问与当前结点相邻且尚未访问的每一个邻接点；
  - 递归返回时完成回溯。

```c
// DFS遍历图及应用（统计连通分量）
bool visited[MAX_VERTEX_NUM] = {false};

void DFS(Graph G, int v) {
    visited[v] = true;
    visit(v); // 访问顶点操作
    for (int w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w)) {
        if (!visited[w]) {
            DFS(G, w); // 递归深入
        }
    }
}

// 遍历整张图，计算连通分量个数
int DFSTraverse(Graph G) {
    int component_count = 0;
    for (int v = 0; v < G.vexnum; v++) {
        if (!visited[v]) {
            DFS(G, v);
            component_count++; // 每次DFS调用完代表发现一个新的连通分量
        }
    }
    return component_count;
}
```

### 应用题 - 线性表的操作

#### 受限链表的设计

#### 受限队列的设计

### 应用题 - 树

#### 树高，树深等相关计算

树高、树深等相关计算

树高与结点数的极值关系：

设二叉树高度为 $h$：

结点数最多为：$2^h - 1$（满二叉树状态）。
结点数最少为：$h$（退化为单支树）。

设结点总数为 $n$：

完全二叉树的高度为：$\lfloor \log_2 n \rfloor + 1$ 或 $\lceil \log_2 (n + 1) \rceil$。

度与结点的严格计数公式：

总结点数等于所有结点的度数之和加一：$n = n_0 + n_1 + n_2 + \dots + n_m + 1$。
对于二叉树，度为零的叶子结点数永远比度为二的分支结点数多一个：$n_0 = n_2 + 1$。

树的度与高度推导：

度为 $m$ 的树中，第 $i$ 层最多拥有 $m^{i-1}$ 个结点。
高度为 $h$ 的 $m$ 叉树最多拥有 $\frac{m^h - 1}{m - 1}$ 个结点。

#### 哈夫曼树的应用

带权路径长度定义：

树中所有叶子结点的权值与其到达根结点的路径长度（边数）乘积的总和：
$WPL = \sum_{i=1}^{n} w_i \times l_i$

哈夫曼树的核心性质：

在所有包含相同叶子权值的扩充二叉树中，哈夫曼树的带权路径长度最小，因此也叫最优二叉树。
无单分支结点：哈夫曼树中只有度为零和度为二的结点，不存在度为一的结点。若初始权值叶子数为 $n$，则最终哈夫曼树的总结点数严格为 $2n - 1$。
求带权路径长度的巧算技巧：等于所有非叶子分支结点的权值之和（合并过程中产生的所有新结点的累加和）。

#### 哈夫曼思想

前缀编码思想：
任何一个字符的编码都不能是另一个字符编码的前缀，从而确保在没有分隔符的情况下依然可以无二义性地解码。哈夫曼编码中每个字符均位于叶子结点，因此天然满足前缀编码特性。

如何编码：
将每个字符及其出现频次作为权值构建哈夫曼树；
约定分支走向：通常规定走向左孩子的边标记为 0，走向右孩子的边标记为 1；
从根结点出发向下遍历到各个叶子结点，将沿途边上的数字依次拼接，即得到该字符的二进制哈夫曼编码（高频字符路径短、编码短；低频字符路径长、编码长，实现数据最优压缩）。

如何解码：
从哈夫曼树的根结点出发，依次读入待解码的二进制流；
遇到 0 走左分支，遇到 1 走右分支；
一旦落到叶子结点，立即输出该叶子对应的字符；
随后指针立刻重新返回根结点，继续读入后续位，周而复始。

#### 并查集的基本操作

核心存储：采用双亲表示法（数组），数组索引代表元素编号，数组值存储父结点的索引；根结点的父索引存储负数（负数的绝对值通常代表该集合中的元素总个数）。

查操作与路径压缩：
沿父指针向上寻找所属集合的树根。
路径压缩优化：在递归查找根结点的回溯过程中，将沿途经过的所有结点的父指针直接指向根结点。使整棵树的高度在查询后瞬间压缩到接近常数阶。

并操作与按秩合并：
将两棵集合树的根结点相连，一棵作为另一棵的子树。
按秩合并优化（小树挂大树）：将较矮的树或结点数较少的树合并到较高的树下，防止树退化成单链，保证后续操作的高效性。

### 应用题 - 图

#### 最小生成树及其应用

普里姆算法：

策略：以“顶点”为中心向外扩张。每次选择距离当前已生成连通子图距离最近的一个新顶点加入集合。

时间特性与适用：时间复杂度取决于顶点数，为顶点数的平方阶（与边数无直接影响），非常适合求解稠密图的最小生成树。

克鲁斯卡尔算法：

策略：以“边”为中心贪心选取。将所有边按权值升序排列，借助并查集检测是否成环，若不构成环则收录该边，直至选够顶点数减一条边。

时间特性与适用：时间消耗主要在边的排序上，复杂度为边数乘以其对数阶，非常适合求解稀疏图的最小生成树。

实际应用：通信网络铺设、公路电网规划，以最小的总建造成本联通所有城市或终端。

#### 迪杰斯特拉算法的应用

也是手算。

#### 关键路径的判断

主要掌握手算法，不说了。

### 应用题 - 查找

#### 二叉搜索树，平衡二叉树与红黑树的辨析

二叉搜索树：

特征：左子树所有结点值小于根结点，右子树所有结点值大于根结点，中序遍历结果严格单调递增。
缺陷：由于未对平衡性作约束，若插入有序序列，极易退化成一根单链表，使得查找的最坏时间复杂度退化为线性阶 $O(n)$。

平衡二叉树：

特征：在二叉搜索树的基础上，严格要求任一结点的左右子树高度差绝对值不超过 1。
性能与平衡代价：

查找性能极其优秀，树高严格控制在对数阶，查找时间复杂度稳定为 $O(\log_2 n)$。
不足：由于平衡条件过于严苛，在频繁进行动态插入与删除时，需要触发极其频繁的旋转操作（单旋与双旋）来维持平衡，维护开销过大。

红黑树：

特征：一种弱平衡二叉搜索树，通过对结点着色（红/黑）满足五大规则（根黑、叶黑、红不相邻、任意结点到叶结点的黑高相同）。
平衡程度：从根到任意叶子的最长可能路径不超过最短可能路径的两倍。
综合辨析与优势：

相比平衡二叉树，红黑树牺牲了微弱的绝对平衡性，换来了在频繁增删节点时旋转次数的大幅降低（插入最多两次旋转，删除最多三次旋转）。
因此在频繁动态修改的系统级底层应用（如内存管理、集合容器底层实现）中，红黑树的综合运行效率显著优于平衡二叉树。

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
