// 테트리스

const fs = require("fs");
const [[C, P], startHeight] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const blockShapes = [
  [],
  [[0, 0, 0, 0], [0]],
  [[0, 0]],
  [
    [0, 0, 1],
    [1, 0],
  ],
  [
    [1, 0, 0],
    [0, 1],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [2, 0],
    [0, 0, 0],
    [0, 0],
  ],
  [
    [0, 2],
    [1, 1, 0],
    [0, 0, 0],
    [0, 0],
  ],
];

const block = blockShapes[P];
let totalFitCount = 0;

for (const shape of block) {
  totalFitCount += countFit(shape);
}

function countFit(shape) {
  let count = 0;
  let offset = 0;

  for (let i = 0; i < C; i++) {
    offset = startHeight[i] - shape[0];
    let next = i + 1;
    while (next - i < shape.length) {
      if (startHeight[next] - offset !== shape[next - i]) {
        count--;
        break;
      } else {
        next++;
      }
    }
    count++;
  }
  return count;
}

console.log(totalFitCount);
