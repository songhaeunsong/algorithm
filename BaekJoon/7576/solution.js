// 토마토
// 1 초, 256 MB
// 2 ≤ M,N ≤ 1,000

const fs = require("fs");
const [[M, N], ...graph] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

let days = 0;
let unripe = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const queue = [];
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (graph[r][c] === 1) queue.push([r, c, 0]);
    if (graph[r][c] === 0) unripe++;
  }
}
let head = 0;
while (queue.length > head) {
  const [targetX, targetY, count] = queue[head++];
  if (queue.length === head) days = count;

  for (let i = 0; i < 4; i++) {
    const nx = targetX + dx[i];
    const ny = targetY + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
      graph[nx][ny] = 1;
      unripe--;
      queue.push([nx, ny, count + 1]);
    }
  }
}
console.log(unripe === 0 ? days : -1);
