int patition(int A[],int l,int r){
    int p=A[l];
    while(l<r){
        while(p<=A[r]&&l<r){
            r--;
        }
        A[l]=A[r];
        while(A[l]<=p&&l<r){
            l++;
        }
        A[r]=A[l];
    }
    A[l]=p;
    return l;
}

void Qsort(int A[],int l,int r){
    if(l>=r){
        return;
    }
    int p=patition(A, l, r);
    Qsort(A,l,p-1);
    Qsort(A,p+1,r);
}

int solve1(int A[],int n){
    Qsort(A,0,n-1);
    int candidate=A[(n-1)/2];
    int cnt=0;
    for(int i=0;i<n;i++){
        if (A[i]==candidate){
            cnt+=1;
        }
    }
    if (cnt>n/2){
        return candidate;
    }
    return -1;
}

int solve2(int A[],int n){
    int hasmap[n];
    for(int i=0;i<n;i++){
        hasmap[A[i]]++;
    }
    for(int i=0;i<n;i++){
        if(hasmap[i]>n/2){
            return i;
        }
    }
    return -1;
}

int solve3(int A[],int n){
    int candidate=A[0];
    int curr=1;
    for(int i=1;i<n;i++){
        if(A[i]!=candidate){
            curr--;
        }else{
            curr++;
        }
        if(curr==0){
            candidate=A[i];
            curr=1;
        }
    }
    int cnt=0;
    for(int i=0;i<n;i++){
        if (A[i]==candidate){
            cnt+=1;
        }
    }
    if (cnt>n/2){
        return candidate;
    }
    return -1;
}
