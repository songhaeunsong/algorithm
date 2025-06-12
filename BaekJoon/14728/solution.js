// 벼락치기

const fs = require("fs");
const [[N, T], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(T + 1).fill(0));

for (let j = 0; j <= T; j++) {
  dp[0][j] = input[0][0] <= j ? input[0][1] : 0;
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j <= T; j++) {
    const [K, S] = input[i];
    if (K <= j) {
      dp[i][j] = Math.max(dp[i - 1][j], S + dp[i - 1][j - K]);
    } else dp[i][j] = dp[i - 1][j];
  }
}
console.log(dp[N - 1][T]);
