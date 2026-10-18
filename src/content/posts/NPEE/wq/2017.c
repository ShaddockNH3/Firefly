#include <stddef.h>
#include <stdio.h>

typedef struct node{
    char data[10];
    struct node *left,*right;
}BTree;

void inorder(struct node *BTree, int depth){
    if(BTree==NULL){
        return;
    }
    if(!(BTree->left==NULL&&BTree->right==NULL || depth==1)){
        printf("(");
    }
    inorder(BTree->left, depth+1);
    // printf("%c",BTree->data[0]);
    printf("%s",BTree->data);
    inorder(BTree->right, depth+1);
    if(!(BTree->left==NULL&&BTree->right==NULL || depth==1)){
        printf(")");
    }
}

void solve(struct node *BTree){
    inorder(BTree, 1);
}
