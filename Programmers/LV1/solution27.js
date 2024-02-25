// 햄버거 만들기

function solution(ingredient) {
    let stack = [];
    let count = 0;
    for(let num of ingredient){
        stack.push(num)
        if(stack.length < 4) continue;
        let sliced = stack.slice(-4).join("");
        if(sliced ==="1231") {
            stack.splice(-4);
            count++;
        }
    }
    return count;
}