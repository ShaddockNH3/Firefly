struct LNode{
    int data;
    LNode* link;
};

int abs(int x){
    if (x<0){
        return -x;
    }
    return x;
}

void solve(LNode* L,int n){
    int hasmap[n+1];
    LNode* pre=L;
    LNode* curr=L->link;

    while(curr!=nullptr){
        if(hasmap[abs(curr->data)]==1){
            LNode* tmp=curr;
            pre->link=curr->link;
            delete tmp;
            curr=pre->link;
        }else {
            hasmap[abs(curr->data)]=1;
            pre=pre->link;
            curr=curr->link;
        }
    }
}