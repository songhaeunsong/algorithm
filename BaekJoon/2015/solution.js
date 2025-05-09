// 수들의 합 4

const fs = require("fs");
const [[N, M], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const prefixSum = new Array(N + 1).fill(0);
const map = {};
let count = 0;

for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + input[i];
}

for (let i = 0; i < N; i++) {
  map[prefixSum[i]] = (map[prefixSum[i]] || 0) + 1;
  const target = prefixSum[i + 1] - M;
  count += map[target] || 0;
}

console.log(count);
