// 체스

const fs = require("fs");
const [[R, C], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const board = Array.from({ length: R }, () => new Array(C).fill(0));
const queens = [];
const knights = [];
let safeArea = R * C;

const qMove = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];

const kMove = [
  [2, 1],
  [-2, 1],
  [2, -1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

// board에 queen, knight, pawn 넣기

input.forEach((type, idx) => {
  let i = 0;
  while (i < type.length) {
    if (i === 0) {
      safeArea -= type[i];
      i++;
      continue;
    }
    if (idx === 0) {
      // queen
      queens.push([type[i] - 1, type[i + 1] - 1]);
    } else if (idx === 1) {
      // knight
      knights.push([type[i] - 1, type[i + 1] - 1]);
    }
    board[type[i] - 1][type[i + 1] - 1] = 3 - idx;

    i += 2;
  }
});

// queen, knight 이동 시뮬레이션

queens.forEach(([x, y]) => {
  for (const [dx, dy] of qMove) {
    let [targetR, targetC] = [x + dx, y + dy];

    while (
      targetC >= 0 &&
      targetC < C &&
      targetR >= 0 &&
      targetR < R &&
      board[targetR][targetC] !== 1 &&
      board[targetR][targetC] !== 2
    ) {
      if (board[targetR][targetC] === 0) {
        board[targetR][targetC] = 3;
        safeArea--;
      }
      targetR += dx;
      targetC += dy;
    }
  }
});

knights.forEach(([x, y]) => {
  for (const [dx, dy] of kMove) {
    let [targetR, targetC] = [x + dx, y + dy];
    if (
      targetC >= 0 &&
      targetC < C &&
      targetR >= 0 &&
      targetR < R &&
      !board[targetR][targetC]
    ) {
      board[targetR][targetC] = 2;
      safeArea--;
    }
  }
});

console.log(safeArea);
