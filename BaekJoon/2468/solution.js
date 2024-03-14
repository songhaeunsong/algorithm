// 안전 영역

const fs = require("fs");
const [num, ...graph] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const N = Number(num);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs(row, column, repose) {
  const queue = [[row, column]];
  graph[row][column] = repose;

  while (queue.length) {
    let [targetX, targetY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = targetX + dx[i];
      const nextY = targetY + dy[i];

      if (nextX >= N || nextY >= N || nextX < 0 || nextY < 0) continue;
      if (graph[nextX][nextY] > repose) {
        graph[nextX][nextY] = repose;
        queue.push([nextX, nextY]);
      }
    }
  }
}

let answer = 0;
for (let h = 100; h >= 0; h--) {
  let count = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (graph[r][c] > h) {
        bfs(r, c, h);
        count++;
      }
    }
  }
  if (answer < count) answer = count;
}

console.log(answer);
