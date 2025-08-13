// 탈출

const fs = require("fs");
const [N, T, G] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = -1;
const isVisited = new Array(100_000).fill(0);

const queue = [[N, 0]];
let head = 0;
isVisited[N] = 1;

while (queue.length > head) {
  const [curr, count] = queue[head++];

  if (curr === G) {
    answer = count;
    break;
  }

  if (count === T) continue;

  let next = curr + 1;

  if (!isVisited[next]) {
    isVisited[next] = 1;
    queue.push([next, count + 1]);
  }

  next = curr * 2;
  if (next >= 99_999) continue;

  if (next !== 0) next -= Math.pow(10, next.toString().length - 1);

  if (!isVisited[next]) {
    isVisited[next] = 1;
    queue.push([next, count + 1]);
  }
}

console.log(answer === -1 ? "ANG" : answer);
