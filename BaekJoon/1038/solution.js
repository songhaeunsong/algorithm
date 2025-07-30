// 감소하는 수

const fs = require("fs");
const num = +fs.readFileSync(0).toString().trim();

console.log(main());

function main() {
  let answer = -1;
  const queue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let head = 0;
  while (queue.length > head) {
    const n = queue[head];
    if (head === num) {
      answer = n;
      break;
    }

    for (let i = 0; i < n % 10; i++) {
      queue.push(n * 10 + i);
    }
    head++;
  }
  return answer;
}
