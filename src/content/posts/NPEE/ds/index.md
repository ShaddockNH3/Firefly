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

数据仅仅是单纯的数据，数据元素是数据的基本单位，由数据项组成数据元素。

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

时间复杂度是指算法执行时间与问题规模之间的关系，需要辨析的是，一个算法的时间复杂度并不代表问题的规模，例如求邻接矩阵的出度和入度，时间复杂度为 O(n^2)，但问题规模为 O(n)。

空间复杂度是指算法执行空间与问题规模之间的关系。

简单的算时间复杂度和空间复杂度就不写了，主要要注意如何计算难的，例如：

```c 2022 真题
int sum = 0;
for (int i = 0; i < n; i *= 2){
    for(int j = 0; j < i; j++){
        sum++;
    }
}
```

执行时间为 $1+2+4+8+…+2^t$，其中 $t<=log_2n$。前者由等比数列求和公式可得 $2^{t+1}-1 \leq n$，将 $t<=log_2n$ 代入，显然是 $n$ 的规模。所以时间复杂度为 $O(n)$。

```c 2025 真题
int count = 0, i, j;
for (int i = 1; i*i <=n; i++){
    for(int j = 1;j<=i;j++){
        count++;
    }
}
```

显然，执行时间为 $1+2+3+…+t$，其中 $t^2<=n$。前者由数列求和公式可得 $(1+t)t/2$，将 $t<=sqrt{n}$ 代入，显然是 $n$ 的规模。所以时间复杂度为 $O(n)$。

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
# define MAXSIZE 100

/* 顺序表的结构体定义 */
typedef struct ArrayList {
    int data[MAXSIZE];
    int length;
} ArrayList;

/* 初始化顺序表 */
bool InitList(ArrayList L) {
    L.length = 0;
    return true;
}

/* 销毁顺序表 */
bool DestroyList(ArrayList L) {
    free(L);
    return true;
}

/* 清空顺序表 */
bool ClearList(ArrayList L) {
    L.length = 0;
    return true;
}

/* 插入元素 */
bool ListInsert(ArrayList L, int i, int e) {
    if(i<1 || i>L.length+1) return false;
    if(L.length >= MAXSIZE) return false;
    for(int j = L.length; j>=i; j--) {
        L.data[j] = L.data[j-1];
    }
    L.data[i-1] = e;
    L.length++;
    return true;
}

/* 删除元素 */
bool ListDelete(ArrayList L, int i, int e) {
    if(i<1 || i>L.length) return false;
    e = L.data[i-1];
    for(int j = i; j<L.length; j++) {
        L.data[j-1] = L.data[j];
    }
    L.length--;
    return true;
}

/* 获取元素 */
bool GetElem(ArrayList L, int i, int e) {
    if(i<1 || i>L.length) return false;
    e = L.data[i-1];
    return true;
}

/* 查找元素 */
bool LocateElem(ArrayList L, int e) {
    for(int i = 0; i<L.length; i++) {
        if(L.data[i] == e) return i+1;
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

/* 初始化带头节点的单链表 */
bool InitList(LinkList L) {
    L LNode = new LNode;
    L->data = 0;
    L->next = NULL;
    return true;
}

/* 销毁带头节点的单链表 */
bool DestroyList(LinkList L) {
    free(L);
    return true;
}

/* 清空带头节点的单链表 */
bool ClearList(LinkList L) {
    L->next = NULL;
    return true;
}

/* 插入元素 */
bool ListInsert(LinkList L, int i, int e) {
    if(i<1) return false;
    LNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
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
    if(i<1) return false;
    LNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
    }
    LNode *q = p->next;
    *e = q->data;
    p->next = q->next;
    free(q);
    return true;
}

/* 获取元素 */
bool GetElem(LinkList L, int i, int e) {
    if(i<1) return false;
    LNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
    }
    e = p->data;
    return true;
}

/* 查找元素 */
bool LocateElem(LinkList L, int e) {
    LNode *p = L->next;
    for(int i = 0; i<L->length; i++) {
        if(p->data == e) return i+1;
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

/* 头插法创建带头结点的循环单链表，可用于逆序 */
bool CreateList_H(LinkList L, int n) {
    L = new LNode;
    L->next = NULL;
    for(int i = 0; i<n; i++) {
        LNode *s = new LNode;
        s->data = i;
        s->next = L->next;
        L->next = s;
    }
    L->next = L;
    return true;
}

/* 尾插法创建带头结点的循环单链表，可用于顺序 */
bool CreateList_R(LinkList L, int n) {
    L = new LNode;
    L->next = NULL;
    LNode *r = L;
    for(int i = 0; i<n; i++) {
        LNode *s = new LNode;
        s->data = i;
        s->next = NULL;
        r->next = s;
        r = s;
    }
    r->next = L;
    return true;
}

/* 插入元素 */
bool ListInsert(LinkList L, int i, int e) {
    if(i<1) return false;
    LNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
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
    if(i<1) return false;
    LNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
    }
    *e = p->data;
    p->next = p->next->next;
    free(p->next);
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

/* 插入元素 */
bool ListInsert(DList L, int i, int e) {
    if(i<1) return false;
    DNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
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
    if(i<1) return false;
    DNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
    }
    *e = p->data;
    p->next->prev = p->prev;
    p->prev->next = p->next;
    free(p);
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
bool InitList(DList L) {
    L = new DNode;
    L->next = L;
    L->prev = L;
    return true;
}

/* 插入元素 */
bool ListInsert(DList L, int i, int e) {
    if(i<1) return false;
    DNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
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
    if(i<1) return false;
    DNode *p = L->next;
    for(int j = 0; j<i-1; j++) {
        p = p->next;
    }
    *e = p->data;
    p->next->prev = p->prev;
    p->prev->next = p->next;
    free(p);
    return true;
}
```

### 静态链表

不需要非常掌握，不过操作系统中，显式链接法采用的是静态链表。

### 性能比较

| 操作 | 顺序表 | 链表 |
| --- | --- | --- |
| 插入 | O(n) | O(1) |
| 删除 | O(n) | O(1) |
| 查找 | O(n) | O(n) |
| 访问 | O(1) | O(n) |

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

/* 初始化栈 */
bool InitStack(Stack *S) {
    S = new StackNode;
    S->next = NULL;
    return true;
}

/* 入栈 */
bool Push(Stack *S, int x) {
    StackNode *p = new StackNode;
    p->data = x;
    p->next = S->next;
    S->next = p;
    return true;
}

/* 出栈 */
bool Pop(Stack *S, int *x) {
    if(S->next == NULL) return false;
    *x = S->next->data;
    StackNode *p = S->next;
    S->next = S->next->next;
    free(p);
    return true;
}

/* 获取栈顶元素 */
bool GetTop(Stack *S, int *x) {
    if(S->next == NULL) return false;
    *x = S->next->data;
    return true;
}

/* 判断栈是否为空 */
bool IsEmpty(Stack *S) {
    return S->next == NULL;
}

/* 判断栈是否满 */
bool IsFull(Stack *S) {
    return S->next == NULL;
}
```

### 队列的顺序存储

采用循环队列模拟队列，并且 front 和 rear 可以采用均指向第一个元素的方法，然后 rear 回退一格即为初始状态。

对于下面的代码，front 指向当前元素，rear 指向当前元素的下一个元素。

```c++
// 无须封装，直接采用一个固定长度的数组进行模拟
int queue[MAXSIZE];
int front = 0;
int rear = 0;

// 入队
bool EnQueue(int x) {
    if((rear+1)%MAXSIZE == front) return false;
    queue[rear] = x;
    rear = (rear+1)%MAXSIZE;
    return true;
}

// 出队
bool DeQueue(int *x) {
    if(front == rear) return false;
    *x = queue[front];
    front = (front+1)%MAXSIZE;
    return true;
}

// 获取队头元素
bool GetFront(int *x) {
    if(front == rear) return false;
    *x = queue[front];
    return true;
}

// 判断队列是否为空
bool IsEmpty() {
    return front == rear;
}

// 判断队列是否满
bool IsFull() {
    return (rear+1)%MAXSIZE == front;
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
2. 遇到右括号，出栈，判断是否匹配。
3. 如果栈为空，则匹配成功。
4. 如果栈不为空，则匹配失败。

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

而十字链表法是有向图的方法，可以用于存储稀疏矩阵。

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

对于树的算法，一定是基于上述四种遍历进行修改的。

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

尤其需要注意的是，假设该树的线索指示为 1，那么该结点一定是叶子结点 ... ... 吗？不一定！只有当 ltag == 1 且 rtag == 1 的时候，该结点才是叶子结点。

模拟一遍，如果是中序遍历线索化，且现在只是正常的先序遍历，那么可以遍历吗？

只需要修改条件即可，把 root -> lchild != nullptr 改为 root -> ltag ==0 && root -> lchild != nullptr，把 root -> rchild != nullptr 改为 root -> rtag ==0 && root -> rchild != nullptr。

中序遍历线索化，节点的前驱为左子树的最右结点，后继为右子树的最左结点。

先序遍历线索化，无法找到前驱，后继为若 p 有左孩子，其先序后继就是它的左孩子 p->lchild，若 p 没有左孩子、但有右孩子，其先序后继就是它的右孩子 p->rchild。

后序遍历线索化，若 p 有右孩子，其后序前驱就是它的右孩子 p->rchild，若 p 没有右孩子、但有左孩子，其后序前驱就是它的左孩子 p->lchild。无法找到后继。

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

兄弟孩子表示法，指的是左孩子右兄弟。

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

WPL 为带权路径长度，指的是每个叶子结点的权值乘以该结点到根结点的路径长度之和。

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
int find(int x) {
    while(parent[x] != -1) {
        x = parent[x];
    }
    return parent[x];
}
// 朴素版本合并
void union(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
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
void union(int x, int y) {
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

- 图是由顶点集 V 和边集 E 组成的数据结构，记作 G = (V, E)。
- 图的顶点数记作 n，边数记作 e。
- 完全图：任意两个顶点之间都有边，记作 Kn。
- 子图：图 G' = (V', E') 是图 G = (V, E) 的子图，如果 V' 是 V 的子集，E' 是 E 的子集。
- 连通图：如果图中任意两个顶点之间都存在路径，则称该图是连通图。
- 极大联通子图：如果图 G 的某个子图是连通图，并且不存在更大的连通子图，则称该子图是极大联通子图。（适用于无向图），概念等同于连通分量
- 极小连通子图：如果图 G 的某个子图是连通图，并且不存在更小的连通子图，则称该子图是极小连通子图。（即最小生成树）（适用于无向图）
- 连通分量：如果图 G 的某个子图是连通图，并且不存在更大的连通子图，则称该子图是连通分量。
- 强连通图：如果图中任意两个顶点之间都存在路径，则称该图是强连通图。（适用于有向图）
- 弱连通图：如果图中任意两个顶点之间都存在路径，则称该图是弱连通图。（适用于有向图）
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

广度优先搜索，指的是从图的某个顶点出发，沿着一条路径一直走到底，然后回溯，继续走其他路径。

广度优先可以生成广度优先生成树，采用邻接矩阵存储表示唯一，采用邻接表存储不唯一。

#### 深度优先

深度优先搜索，指的是从图的某个顶点出发，沿着一条路径一直走到底，然后回溯，继续走其他路径。

深度优先可以生成深度优先生成树，采用邻接矩阵存储表示唯一，采用邻接表存储不唯一。

#### 存储结构与性能比较

广度优先：邻接矩阵 O(n^2)，邻接表 O(n+e)
深度优先：邻接矩阵 O(n^2)，邻接表 O(n+e)

#### 图的连通性与遍历

对于联通无向图，只需要一次遍历；对于非联通无向图，需要连通分量个数的遍历。

而对于有向图，情况比较复杂，得分为强联通和弱联通讨论。强联通是顺着箭头走，任何两个人可以相互连着，而弱联通是不管箭头方向，只要不散架即可。

需要注意，强连通图 a 到 b，且 b 到 a 都可以到，所以才有方向。

### 图的应用

#### 最小生成树

- Prim 算法

  每次选取一个点，然后选取该点连接的权值最小的边，直到所有点都被选取。

- kruskal 算法

  每次选取一条权值最小的边，直到所有点都被选取。

二者选取出来的最小生成树可能不一样，但是权值一定是一样的。

对于这种题，一定是要注意题设给的条件，比如说权值最小的边的总数，或者干脆权值各不相同。

所以上述是 “可能” 不一样。

#### 最短路径

- Dijkstra 算法

- Floyd 算法

#### 有向图无环图应用

#### 拓扑排序

#### 关键路径
