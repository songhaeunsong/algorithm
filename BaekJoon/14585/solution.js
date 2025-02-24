const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const candyLocation = Array.from({ length: 301 }, () => new Array(301).fill(0));
const dp = Array.from({ length: 301 }, () => new Array(301).fill(0));
for (const [r, c] of input) {
  candyLocation[r][c] = 1;
}

for (let i = 0; i < 301; i++) {
  for (let j = 0; j < 301; j++) {
    const pi = i - 1;
    const pj = j - 1;
    if (pi >= 0) {
      if (candyLocation[i][j]) {
        dp[i][j] = Math.max(dp[i][j], dp[pi][j] + M - i - j);
      } else dp[i][j] = Math.max(dp[i][j], dp[pi][j]);
    }
    if (pj >= 0) {
      if (candyLocation[i][j])
        dp[i][j] = Math.max(dp[i][j], dp[i][pj] + M - i - j);
      else dp[i][j] = Math.max(dp[i][j], dp[i][pj]);
    }
  }
}

if (M > 600) {
  console.log(dp[300][300]);
} else {
  let max = 0;

  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= M; j++) {
      max = Math.max(dp[i][j], max);
    }
  }

  console.log(max);
}
