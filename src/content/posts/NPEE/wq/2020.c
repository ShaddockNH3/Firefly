#include<stdio.h>

int abs(int x){
    if(x<0){
        return -x;
    }
    return x;
}

int get_D(int a,int b,int c){
    return abs(a-b)+abs(b-c)+abs(c-a);
}

int solve1(int S1[],int S2[],int S3[],int n1,int n2,int n3){
    int min_D=get_D(S1[0],S2[0],S3[0]);
    int ans_a=0,ans_b=0,ans_c=0;
    for(int i=0;i<n1;i++){
        for(int j=0;j<n2;j++){
            for(int k=0;k<n3;k++){
                int curr=get_D(S1[i],S2[j],S3[k]);
                if(curr<min_D){
                    ans_a=i;
                    ans_b=j;
                    ans_c=k;
                    curr=min_D;
                }
            }
        }
    }
    printf("%d %d %d",S1[ans_a],S2[ans_b],S3[ans_c]);
    return min_D;
}

/*
不妨设 a<=b<=c，则 D=2(c-a)
所以也就是从 S1，S2，S3 中选取一个最大的 a 和最小的 c，其中 a 和 c 不属于同一个 S
*/

int my_abs(int x) {
    return x < 0 ? -x : x;
}
// 辅助函数：判断 a 是否是三者中的最小值
int is_min(int a, int b, int c) {
    return (a <= b && a <= c);
}
// 核心求解函数
int findMinDistance(int S1[], int n1, int S2[], int n2, int S3[], int n3) {
    int i = 0, j = 0, k = 0;
    
    // 纯手动定义 32 位有符号整型的最大值 (0x7fffffff = 2147483647)，代替 INT_MAX
    int min_dist = 0x7fffffff;
    
    // 只要有一个数组扫描到尾部，就说明无法再通过增大最小值来缩小差距了
    while (i < n1 && j < n2 && k < n3) {
        // 计算当前三元组距离 D = |a-b| + |b-c| + |c-a|
        int cur_dist = my_abs(S1[i] - S2[j]) + my_abs(S2[j] - S3[k]) + my_abs(S3[k] - S1[i]);
        
        // 尝试更新全局最小距离
        if (cur_dist < min_dist) {
            min_dist = cur_dist;
        }
        
        // 贪心策略：谁最小，谁就往后移动一位，试图缩小跨度
        if (is_min(S1[i], S2[j], S3[k])) {
            i++;
        } else if (is_min(S2[j], S1[i], S3[k])) {
            j++;
        } else {
            k++;
        }
    }
    
    return min_dist;
}