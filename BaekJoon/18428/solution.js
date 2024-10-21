const fs = require("fs");
const [n, ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const N = +n;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const teachers = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === "T") teachers.push([i, j]);
  }
}

let isSafe = 0;
backtracking(0, 0);

console.log(isSafe ? "YES" : "NO");

function backtracking(start, count) {
  if (isSafe) return;
  if (count === 3) {
    let safeCount = 0;
    for (const [r, c] of teachers) {
      safeCount += checkTeacher(r, c);
    }

    if (safeCount === teachers.length) isSafe = 1;
    return;
  }
  for (let i = start; i < N * N; i++) {
    const r = parseInt(i / N);
    const c = i % N;

    if (board[r][c] === "X") {
      board[r][c] = "O";
      backtracking(i + 1, count + 1);
      board[r][c] = "X";
    }
  }
}

function checkTeacher(r, c) {
  for (let i = 0; i < 4; i++) {
    let nr = r + dx[i];
    let nc = c + dy[i];

    while (nr >= 0 && nr < N && nc >= 0 && nc < N) {
      if (board[nr][nc] === "S") return 0;
      if (board[nr][nc] === "O") break;

      nr += dx[i];
      nc += dy[i];
    }
  }
  return 1;
}
