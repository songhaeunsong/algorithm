const fs = require("fs");
const [[n, T], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const map = {};

for (const [x, y] of input) {
  map[`${x},${y}`] = 1;
}

console.log(bfs(0, 0));

function bfs(startX, startY) {
  let minCount = 0;
  const queue = [[startX, startY, 0]];
  map[`${startX},${startY}`] = 0;
  let head = 0;

  while (queue.length > head) {
    const [x, y, count] = queue[head++];

    if (y === T) {
      minCount = count;
      break;
    }

    for (let i = x - 2; i <= x + 2; i++) {
      for (let j = y - 2; j <= y + 2; j++) {
        if (map[`${i},${j}`] === 1) {
          map[`${i},${j}`] = 0;
          queue.push([i, j, count + 1]);
        }
      }
    }
  }
  return minCount ? minCount : -1;
}
