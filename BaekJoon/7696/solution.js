// 반복하지 않는 수

const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .toString()
  .split("\n")
  .map(Number);

input.pop();
const list = [];
const answer = [];

bfs();

for (const target of input) {
  answer.push(list[target - 1]);
}

console.log(answer.join("\n"));

function bfs() {
  const queue = [];

  for (let i = 1; i <= 9; i++) {
    const used = 1 << i;
    queue.push([i, used]);
    list.push(i);
  }

  let head = 0;

  while (queue.length > head) {
    if (list.length >= 1_000_000) break;

    const [num, used] = queue[head++];

    for (let i = 0; i <= 9; i++) {
      if ((used & (1 << i)) !== 0) continue;
      const newNum = num * 10 + i;
      const newUsed = used | (1 << i);

      list.push(newNum);
      queue.push([newNum, newUsed]);
    }
  }
}
