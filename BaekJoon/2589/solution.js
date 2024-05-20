// 보물섬

const fs = require("fs");
let [nums, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = nums.split(" ").map(Number);
const treasureMap = input.map((line) => line.split(""));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let max = 0;

function BFS(row, column) {
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  const queue = [[row, column, 0]];
  visited[row][column] = 1;
  let head = 0;

  while (queue.length > head) {
    const [targetX, targetY, depth] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = targetX + dx[i];
      const ny = targetY + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (!visited[nx][ny] && treasureMap[nx][ny] === "L") {
        visited[nx][ny] = 1;
        queue.push([nx, ny, depth + 1]);
      }
    }
  }
  if (queue[head - 1][2] > max) {
    max = queue[head - 1][2];
  }
}

for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (treasureMap[r][c] === "L") BFS(r, c);
  }
}

console.log(max);
