function solution(order) {
  const stack = [];
  let answer = 0;
  let box = 1;
  for (let i = 0; i < order.length; i++) {
    const target = order[i];

    while (box <= order.length + 1) {
      if (stack[stack.length - 1] === target) {
        answer++;
        stack.pop();
        break;
      }
      if (box === target) {
        answer++;
        box++;
        break;
      }
      stack.push(box++);
    }
  }
  return answer;
}
