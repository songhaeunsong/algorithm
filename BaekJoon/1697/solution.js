// 숨바꼭질

const fs = require("fs");
const [start, end] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const graph = new Array(100001).fill(0);

const queue = [[start, 0]];

while (queue.length) {
  const [target, count] = queue.shift();
  if (graph[target] === 1) {
    continue;
  }

  graph[target] = 1;

  if (target === end) {
    console.log(count);
    break;
  }

  const moves = [target - 1, target + 1, target * 2];

  for (let moved of moves) {
    if (moved >= 0 && moved <= 100000 && graph[moved] === 0) {
      queue.push([moved, count + 1]);
    }
  }
}
