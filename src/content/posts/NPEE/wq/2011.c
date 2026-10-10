int patition(int A[],int l,int r){
    int p=A[l];
    while(l<r){
        while(A[r]>=p&&l<r){
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
    int mid=patition(A, l, r);
    Qsort(A,l,mid-1);
    Qsort(A,mid+1,r);
}

int solve1(int S1[],int S2[],int L){
    int S[2*L];
    for(int i=0;i<L;i++){
        S[i]=S1[i];
        S[i+L]=S2[i];
    }
    Qsort(S, 0, 2 * L - 1);
    return S[L-1];
}

int solve2(int S1[],int S2[],int L){
    int S[2*L];
    int i=0,j=0;
    for(int k=0;k<L;k++){
        if (S1[i]<=S2[j]){
            S[k]=S1[i];
            i++;
        }else{
            S[k]=S2[j];
            j++;
        }
    }
    return S[L-1];
}

int solve3(int S1[],int S2[],int L){
    int pre=S1[0];
    int i=0,j=0;
    for(int k=0;k<L;k++){
        if (S1[i]<=S2[j]){
            pre=S1[i];
            i++;
        }else{
            pre=S2[j];
            j++;
        }
    }
    return pre;
}

int solve4(int A[], int B[], int n) {
    int s1 = 0, d1 = n - 1; // 序列A的起止下标
    int s2 = 0, d2 = n - 1; // 序列B的起止下标
    int m1, m2;
    
    while (s1 != d1 || s2 != d2) {
        m1 = (s1 + d1) / 2;
        m2 = (s2 + d2) / 2;
        
        if (A[m1] == B[m2]) {
            return A[m1]; // 两个中位数相等，直接返回
        }
        
        if (A[m1] < B[m2]) { // A的中位数较小，舍弃A前半部分和B后半部分
            if ((s1 + d1) % 2 == 0) { // 元素个数为奇数
                s1 = m1;     // 包含中间点
                d2 = m2;     // 包含中间点
            } else {                 // 元素个数为偶数
                s1 = m1 + 1; // 舍弃前半部分
                d2 = m2;     // 保留后半部分
            }
        } else {             // B的中位数较小，舍弃B前半部分和A后半部分
            if ((s1 + d1) % 2 == 0) { // 元素个数为奇数
                d1 = m1;
                s2 = m2;
            } else {                 // 元素个数为偶数
                d1 = m1;
                s2 = m2 + 1;
            }
        }
    }
    return A[s1] < B[s2] ? A[s1] : B[s2];
}
