// 나무 재테크

const fs = require("fs");
const fileContents = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dc = [0, 1, 0, -1, 1, 1, -1, -1];
const dr = [1, 0, -1, 0, 1, -1, 1, -1];

const [N, _, K] = fileContents[0];
const board = Array.from({ length: N }, () => new Array(N).fill(5));
const plus = fileContents.slice(1, N + 1);
const winter = fileContents.slice(N + 1).map(([r, c, a]) => [r - 1, c - 1, a]);

const dead = [];
const spring = [];

for (let k = 0; k < K; k++) {
  winter.sort((a, b) => b[2] - a[2]);

  // 봄

  while (winter.length > 0) {
    const [r, c, age] = winter.pop();
    if (board[r][c] >= age) {
      board[r][c] -= age;
      spring.push([r, c, age + 1]);
    } else {
      dead.push([r, c, age]);
    }
  }

  // 여름

  while (dead.length > 0) {
    const [r, c, age] = dead.pop();
    board[r][c] += Math.floor(age / 2);
  }

  // 가을
  while (spring.length > 0) {
    const [r, c, age] = spring.pop();
    if (age % 5 === 0) {
      for (let i = 0; i < 8; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr >= 0 && nc >= 0 && nr < N && nc < N) winter.push([nr, nc, 1]);
      }
    }
    winter.push([r, c, age]);
  }

  // 겨울
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      board[i][j] += plus[i][j];
    }
  }
}

console.log(winter.length);
