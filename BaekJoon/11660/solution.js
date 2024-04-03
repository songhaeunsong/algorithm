// 구간 합 구하기 5
// 1초,	256MB
// (1 ≤ N ≤ 1024, 1 ≤ M ≤ 100,000)
// table 내부 숫자 <= 1,000

const fs = require("fs");
const fileContent = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));
const [N] = fileContent.shift();
const table = fileContent.slice(0, +N);

const prefixSums = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => 0)
);
for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    prefixSums[x][y] =
      table[x - 1][y - 1] +
      prefixSums[x - 1][y] +
      prefixSums[x][y - 1] -
      prefixSums[x - 1][y - 1];
  }
}
let result = [];

function solution([startX, startY, endX, endY]) {
  let sum =
    prefixSums[endX][endY] -
    prefixSums[startX - 1][endY] -
    prefixSums[endX][startY - 1] +
    prefixSums[startX - 1][startY - 1];

  result.push(sum);
}
for (let i = +N; i < fileContent.length; i++) {
  solution(fileContent[i]);
}

console.log(result.join("\n"));
