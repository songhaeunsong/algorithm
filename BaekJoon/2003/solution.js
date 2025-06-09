// 수들의 합 2

const fs = require("fs");
const [[N, M], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const prefix = new Array(N + 1).fill(0);
let count = 0;

for (let i = 0; i < N; i++) {
  prefix[i + 1] = input[i] + prefix[i];
}

for (let i = 0; i <= N; i++) {
  for (let j = i + 1; j <= N; j++) {
    if (prefix[j] - prefix[i] === M) count++;
  }
}

console.log(count);
