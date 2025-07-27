// 합 구하기

const fs = require("fs");
const [[N], A, M, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const prefix = new Array(N + 1).fill(0);
const answer = [];

for (let i = 1; i <= N; i++) {
  prefix[i] = A[i - 1] + prefix[i - 1];
}

for (const [start, end] of input) {
  answer.push(prefix[end] - prefix[start - 1]);
}
console.log(answer.join("\n"));
