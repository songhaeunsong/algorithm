// RGB거리

const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = Array.from({ length: N }, () => [0, 0, 0]);
dp[0][0] = input[0][0];
dp[0][1] = input[0][1];
dp[0][2] = input[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i][2];
}

console.log(Math.min(...dp[N - 1]));
