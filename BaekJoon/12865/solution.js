// 평범한 배낭

const fs = require("fs");
const [[N, K], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(K + 1).fill(0));

for (let j = 1; j <= K; j++) {
  dp[0][j] = input[0][0] <= j ? input[0][1] : 0;
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j <= K; j++) {
    const [w, v] = input[i];
    if (w <= j) {
      dp[i][j] = Math.max(dp[i - 1][j], v + dp[i - 1][j - w]);
    } else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N - 1][K]);
