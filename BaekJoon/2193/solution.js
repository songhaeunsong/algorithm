// 이친수

const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

console.log(dynamicProgramming().toString());

function dynamicProgramming() {
  if (N === 1) return 1n;

  const dp = Array.from({ length: N + 1 }, () => [0n, 0n]);
  dp[1][1] = 1n;

  for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }

  return dp[N][0] + dp[N][1];
}
