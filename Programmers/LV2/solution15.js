//예상 대진표

function solution(n,a,b){
    let count = 1;
    if(a<b){
        while (a+1 !== b || b%2 !== 0){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count++;
        }
    }else if(a>b){
        while (b+1 !== a || a%2 !== 0){
        
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count++;
        }
    }
    return count;
}