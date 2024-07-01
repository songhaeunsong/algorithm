// 그림

const fs = require("fs");
const [[R, C], ...board] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from({ length: R }, () => new Array(C).fill(0));

function DFS(r, c) {
  let depth = 1;
  for (let i = 0; i < 4; i++) {
    const nx = r + dx[i];
    const ny = c + dy[i];

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= R ||
      ny >= C ||
      visited[nx][ny] ||
      board[nx][ny] === 0
    )
      continue;
    visited[nx][ny] = 1;
    depth += DFS(nx, ny);
  }
  return depth;
}

let max = 0;
let count = 0;
for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    if (!visited[r][c] && board[r][c] === 1) {
      visited[r][c] = 1;
      count++;
      const drawingArea = DFS(r, c);
      max = Math.max(max, drawingArea);
    }
  }
}

console.log(`${count}\n${max}`);
