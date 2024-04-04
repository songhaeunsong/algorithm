// 2차원 배열의 합

// 제한: 2초, 128MB
// N, M(1 ≤ N, M ≤ 300)
// K(1 ≤ K ≤ 10,000)
// 배열에 포함되어 있는 수는 절댓값이 10,000보다 작거나 같은 정수

const fs = require("fs");
const fileContent = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));
const [N, M] = fileContent.shift();
const table = fileContent.slice(0, N);
const answer = [];
const prefixSums = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

for (let r = 1; r <= N; r++) {
  for (let c = 1; c <= M; c++) {
    prefixSums[r][c] =
      table[r - 1][c - 1] +
      prefixSums[r][c - 1] +
      prefixSums[r - 1][c] -
      prefixSums[r - 1][c - 1];
  }
}

for (let i = N + 1; i < fileContent.length; i++) {
  solution(fileContent[i]);
}

function solution([startX, startY, endX, endY]) {
  const sum =
    prefixSums[endX][endY] -
    prefixSums[startX - 1][endY] -
    prefixSums[endX][startY - 1] +
    prefixSums[startX - 1][startY - 1];

  answer.push(sum);
}

console.log(answer.join("\n"));
