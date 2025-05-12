// 계단 오르기

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

function solution() {
  if (N === 1) return input[0];
  if (N === 2) return input[0] + input[1];

  const dp = new Array(N + 1).fill(0);

  dp[1] = input[0];
  dp[2] = input[0] + input[1];

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + input[i - 2]) + input[i - 1];
  }

  return dp[N];
}

console.log(solution());
