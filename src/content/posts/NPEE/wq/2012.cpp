struct LNode{
    char data;
    LNode* next;
};

int getLength(LNode* L){
    LNode* tmp=L->next;
    int sum=0;
    while(tmp!=0){
        sum++;
        tmp=tmp->next;
    }
    return sum;
}

LNode* solve(LNode* str1,LNode* str2){
    int n1=getLength(str1);
    int n2=getLength(str2);

    LNode* curr1=str1->next;
    LNode* curr2=str2->next;

    int n=0;

    if(n1>n2){
        for(int i=0;i<n1-n2;i++){
            curr1=curr1->next;
        }
    }else{
        for(int i=0;i<n2-n1;i++){
            curr2=curr2->next;
        }
    }
    while (curr1 != nullptr && curr2 != nullptr){
        if(curr1==curr2){
            return curr1;
        }
        curr1=curr1->next;
        curr2=curr2->next;
    }
    return nullptr;
}
