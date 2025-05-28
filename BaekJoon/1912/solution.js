const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = new Array(N).fill(0);
dp[0] = input[0];
let max = dp[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1], 0) + input[i];

  max = Math.max(dp[i], max);
}

console.log(max);
