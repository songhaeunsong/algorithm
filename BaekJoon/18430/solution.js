const fs = require("fs");
const [[N, M], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const types = [
  [
    [1, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [0, -1],
  ],
  [
    [-1, 0],
    [0, 1],
  ],
  [
    [-1, 0],
    [0, -1],
  ],
];

const visited = Array.from({ length: N }, () => new Array(M).fill(0));
let max = 0;

backtracking(0, 0);

console.log(max);

function backtracking(start, sum) {
  max = Math.max(sum, max);

  for (let ij = start; ij < N * M; ij++) {
    const centerX = parseInt(ij / M);
    const centerY = ij % M;

    if (visited[centerX][centerY]) continue;

    visited[centerX][centerY] = 1;

    for (let direction of types) {
      const [firstX, firstY] = [
        centerX + direction[0][0],
        centerY + direction[0][1],
      ];

      const [secondX, secondY] = [
        centerX + direction[1][0],
        centerY + direction[1][1],
      ];

      if (
        firstX < 0 ||
        firstX >= N ||
        firstY < 0 ||
        firstY >= M ||
        visited[firstX][firstY]
      )
        continue;

      if (
        secondX < 0 ||
        secondX >= N ||
        secondY < 0 ||
        secondY >= M ||
        visited[secondX][secondY]
      )
        continue;

      visited[firstX][firstY] = 1;
      visited[secondX][secondY] = 1;

      backtracking(
        ij + 1,
        sum +
          board[centerX][centerY] * 2 +
          board[firstX][firstY] +
          board[secondX][secondY]
      );

      visited[firstX][firstY] = 0;
      visited[secondX][secondY] = 0;
    }
    visited[centerX][centerY] = 0;
  }
}
