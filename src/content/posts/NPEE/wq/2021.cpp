const int MAXV=114514;

typedef struct{
    int numVertices,numEdges;
    char VerticesList[MAXV];
    int Edge[MAXV][MAXV];
}MGragh;

int IsExistEL(MGragh G){
    int cnt=0;
    for(int i=0;i<MAXV;i++){
        int curr_sum=0;
        for(int j=0;j<MAXV;j++){
            curr_sum+=G.Edge[i][j];
        }
        if(curr_sum%2!=0){
            cnt+=1;
        }
    }
    if(cnt==0||cnt==2){
        return 1;
    }
    return 0;
}
