// 숨바꼭질 3

const fs = require("fs");
const [N, K] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dx = [-1, 1];
const queue = [];
let head = 0;
const visited = Array.from({ length: 100001 }, () => 0);

queue.push([N, 0]);
visited[N] = 1;

function BFS() {
  while (queue.length > head) {
    const [target, depth] = queue[head];
    head++;
    if (target === K) return depth;

    if (target !== 0 && target < K) queue.push([2 * target, depth]);
    for (let i = 0; i < 2; i++) {
      const next = target + dx[i];
      if (next >= 0 && next < 100001 && !visited[next]) {
        visited[next] = 1;
        queue.push([next, depth + 1]);
      }
    }
  }
}

console.log(BFS());
