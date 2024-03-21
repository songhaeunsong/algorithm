// 단지번호붙이기

const fs = require("fs");
const [num, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(num);
const graph = input.map((i) => i.split("").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let result = 0;
let countArr = [];

function bfs(row, column) {
  const queue = [[row, column]];
  graph[row][column] = 0;
  let count = 1;

  while (queue.length) {
    const [targetX, targetY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = targetX + dx[i];
      const nextY = targetY + dy[i];

      if (
        nextX < N &&
        nextX >= 0 &&
        nextY < N &&
        nextY >= 0 &&
        graph[nextX][nextY] === 1
      ) {
        count++;

        graph[nextX][nextY] = 0;
        queue.push([nextX, nextY]);
      }
    }
  }
  return count;
}

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (graph[r][c] === 1) {
      const count = bfs(r, c);
      countArr.push(count);
      result++;
    }
  }
}

console.log(result + "\n" + `${countArr.sort((a, b) => a - b).join("\n")}`);
