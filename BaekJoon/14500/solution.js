// 테트로미노

const fs = require("fs");
const [[N, M], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const shapes = [
  // shape1
  [
    [-1, 0],
    [0, -1],
    [1, 0],
  ],
  [
    [0, -1],
    [1, 0],
    [0, 1],
  ],
  [
    [-1, 0],
    [1, 0],
    [0, 1],
  ],
  [
    [-1, 0],
    [0, -1],
    [0, 1],
  ],
  // shape2
  [
    [0, 1],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [0, -1],
    [0, -2],
    [1, 0],
  ],
  [
    [0, -1],
    [-1, 0],
    [-2, 0],
  ],
  [
    [0, 1],
    [0, 2],
    [-1, 0],
  ],
  [
    [1, 0],
    [2, 0],
    [0, -1],
  ],
  [
    [0, -1],
    [0, -2],
    [-1, 0],
  ],
  [
    [0, 1],
    [-1, 0],
    [-2, 0],
  ],
  // shape3
  [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  // shape4
  [
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [-1, 0],
    [-1, 1],
    [-2, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  // shape 5
  [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
];

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const shapeMax = findMaxShapeSum(i, j);
    max = Math.max(max, shapeMax);
  }
}

console.log(max);

function findMaxShapeSum(x, y) {
  let max = 0;
  for (let i = 0; i < 19; i++) {
    const shape = shapes[i];
    let sum = board[x][y];
    for (let j = 0; j < 3; j++) {
      const [nx, ny] = [x + shape[j][0], y + shape[j][1]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) break;
      sum += board[nx][ny];

      if (j === 2) {
        max = Math.max(max, sum);
      }
    }
  }
  return max;
}
