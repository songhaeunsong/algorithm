// 추월

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let overtook = 0;
const visited = {};

const entrance = input.slice(0, +N);
const exit = input.slice(+N);

let etIdx = 0;
let exIdx = 0;
while (exIdx < +N) {
  if (visited[entrance[etIdx]] === 1) {
    etIdx++;
    continue;
  }

  if (entrance[etIdx] === exit[exIdx]) {
    etIdx++;
  } else {
    overtook++;
  }
  visited[exit[exIdx]] = 1;
  exIdx++;
}

console.log(overtook);
