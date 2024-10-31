const fs = require("fs");
const [nums, _, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const [M, N] = nums.split(" ").map(Number);

const board = input.slice(0, M);
const targets = input.slice(M).map((line) => line.split(" ").map(Number));

const jPrefix = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
const iPrefix = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
const oPrefix = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    let J = 0;
    let I = 0;
    let O = 0;

    if (board[i][j] === "J") J++;
    else if (board[i][j] === "O") O++;
    else I++;

    jPrefix[i + 1][j + 1] =
      J + jPrefix[i][j + 1] + jPrefix[i + 1][j] - jPrefix[i][j];

    iPrefix[i + 1][j + 1] =
      I + iPrefix[i][j + 1] + iPrefix[i + 1][j] - iPrefix[i][j];

    oPrefix[i + 1][j + 1] =
      O + oPrefix[i][j + 1] + oPrefix[i + 1][j] - oPrefix[i][j];
  }
}

let answer = "";
for (const [sr, sc, er, ec] of targets) {
  answer +=
    jPrefix[er][ec] -
    jPrefix[sr - 1][ec] -
    jPrefix[er][sc - 1] +
    jPrefix[sr - 1][sc - 1];

  answer += " ";

  answer +=
    oPrefix[er][ec] -
    oPrefix[sr - 1][ec] -
    oPrefix[er][sc - 1] +
    oPrefix[sr - 1][sc - 1];

  answer += " ";

  answer +=
    iPrefix[er][ec] -
    iPrefix[sr - 1][ec] -
    iPrefix[er][sc - 1] +
    iPrefix[sr - 1][sc - 1];

  answer += "\n";
}
console.log(answer.trim());
