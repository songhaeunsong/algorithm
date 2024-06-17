// 봄버맨

const fs = require("fs");
const [nums, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const [R, C, N] = nums.split(" ").map(Number);
const board = input.map((line) => line.split(""));
const bomded = Array.from({ length: R }, () => new Array(C).fill(0));
const even = Array.from({ length: R }, () => new Array(C).fill("O"));

if (N === 1) console.log(input.join("\n"));
else if (N % 2 === 0) console.log(even.map((arr) => arr.join("")).join("\n"));
else simulate();

function simulate() {
  let count = 1;

  while (count !== N) {
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        if (board[x][y] === "O") {
          bomded[x][y] = 1;
          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

            bomded[nx][ny] = 1;
          }
        } else {
          if (!bomded[x][y]) board[x][y] = "O";
        }
      }
    }

    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        if (bomded[x][y] === 1) {
          board[x][y] = ".";
          bomded[x][y] = 0;
        } else {
          board[x][y] = "O";
        }
      }
    }
    count = count + 2;
  }

  console.log(board.map((arr) => arr.join("")).join("\n"));
}
