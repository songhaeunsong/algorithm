// 오목

const fs = require("fs");
const board = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: 19 }, () =>
  Array.from({ length: 19 }, () => new Array(4).fill(0))
);
const dx = [1, 0, 1, 1];
const dy = [0, 1, 1, -1];
let winner = [];

function simulate() {
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (board[i][j] !== 0) {
        winner = countCircle(board[i][j], i, j);
        if (winner.length) {
          console.log(`${winner[0]}\n${winner[1] + 1} ${winner[2] + 1}`);
          return;
        }
      }
    }
  }
  console.log("0");
}

function countCircle(player, row, column) {
  for (let i = 0; i < 4; i++) {
    let r = row;
    let c = column;
    let count = 0;

    while (board[r][c] === player && visited[r][c][i] === 0) {
      visited[r][c][i] = 1;

      count++;
      r = r + dx[i];
      c = c + dy[i];
      if (r < 0 || c < 0 || r >= 19 || c >= 19) break;
    }
    if (count === 5) {
      return c < column ? [player, r - 1, c + 1] : [player, row, column];
    }
  }
  return [];
}

simulate();
