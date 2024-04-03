// 블로그 (누적합)
// 제한: 1초, 512MB
// X,N < 250,000
// 방문자수 <= 8,000

const fs = require("fs");
const [[N, X], visits] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

const count = {};

let max = 0;

const prefixSums = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  prefixSums[i] = visits[i - 1] + prefixSums[i - 1];
}
for (let i = X; i <= N; i++) {
  const sum = prefixSums[i] - prefixSums[i - X];
  count[sum] = (count[sum] | 0) + 1;
  if (max < sum) max = sum;
}
max === 0 ? console.log("SAD") : console.log(`${max}\n${count[max]}`);
