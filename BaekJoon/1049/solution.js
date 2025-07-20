// 기타줄

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let minSingle = Infinity;
for (const [package, single] of input) {
  minSingle = Math.min(minSingle, single);
}

const answer = Math.min(
  input[0][0] * Math.floor(N / 6) + (N % 6) * minSingle,
  input[0][0] * Math.ceil(N / 6),
  N * minSingle
);

console.log(answer);
