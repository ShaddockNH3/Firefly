typedef struct node{
    int data;
    struct node *next;
} NODE;

int get_length(NODE *L){
    int len = 0;
    NODE *tmp = L->next;
    while(tmp != nullptr){
        len++;
        tmp = tmp->next;
    }
    return len;
}

void reverse(NODE *L){
    NODE *curr = L->next;
    L->next = nullptr; // 断开旧连接，防止自己指自己成环
    while(curr != nullptr){
        NODE *tmp = curr->next;
        curr->next = L->next;
        L->next = curr;
        curr = tmp;
    }
}

void solve(NODE *L){
    int len = get_length(L);
    if(len <= 2){
        return;
    }
    NODE *pre = L, *curr = L->next;
    for(int i = 0; i < len / 2; i++){
        pre = pre->next;
        curr = curr->next;
    }
    pre->next = nullptr;

    NODE *L2 = new NODE;
    L2->next = curr;
    reverse(L2);

    pre = L->next;
    curr = pre->next;
    while(curr != nullptr){
        NODE *tmp = L2->next;
        L2->next = tmp->next;

        pre->next = tmp;
        tmp->next = curr;
        curr = curr->next;
        pre = pre->next->next;
    }

    if(L2->next != nullptr){
        pre->next = L2->next;
    }

    delete L2;
}