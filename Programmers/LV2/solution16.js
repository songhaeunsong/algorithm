//점프와 순간이동
function solution(n)
{
    let count = 1;
    while (n !== 1) {
        if(n%2 === 0)n = n/2;
        else{
            n = n-1
            count++;
        }
    }
    return count;
}