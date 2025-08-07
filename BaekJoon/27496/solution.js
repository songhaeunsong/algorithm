// 발머의 피크 이론

const fs = require("fs");
const [[N, L], A] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const prefix = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  prefix[i + 1] = A[i] + prefix[i];
}

let count = 0;
let maxCount = 0;

for (let i = 1; i <= N; i++) {
  const alcoholContent = prefix[i] - (prefix[i - L] || 0);

  if (alcoholContent >= 129 && alcoholContent <= 138) {
    maxCount = Math.max(maxCount, ++count);
  }
}

console.log(maxCount);
