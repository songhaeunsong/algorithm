// 주식 가격

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];

    prices.forEach((price, idx)=>{
        while(prices[stack[stack.length-1]] > price){
            const popped = stack.pop();
            answer[popped] = idx - popped;
        }
        stack.push(idx);

    })

    for (const idx of stack){
        answer[idx] = prices.length - idx - 1;
    }
    return answer;
}