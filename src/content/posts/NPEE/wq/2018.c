int solve(int A[],int n){
    int hasmap[n+1];
    for(int i=0;i<n+1;i++){
        hasmap[i]=0;
    }
    for(int i=0;i<n;i++){
        if(A[i]<=n&&A[i]>0){
            hasmap[A[i]]=1;
        }
    }
    for(int i=1;i<n+1;i++){
        if(hasmap[i]==0){
            return i;
        }
    }
    return n+1;
}