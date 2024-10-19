const fs = require("fs");

const fileContents = fs.readFileSync(0).toString().split("\n");
const [T, W] = fileContents.shift().split(" ").map(Number);
const input = fileContents.map(Number);

let max = 0;
const dp = Array.from({ length: W + 1 }, () => Array(T + 1).fill(0));

for (let i = 1; i <= T; i++) {
  if (input[i - 1] === 1) {
    dp[0][i] = dp[0][i - 1] + 1;
    max = Math.max(max, dp[0][i]);
  }
}

for (let i = 1; i <= W; i++) {
  for (let j = 1; j <= T; j++) {
    if (
      (i % 2 === 0 && input[j - 1] === 1) ||
      (i % 2 === 1 && input[j - 1] === 2)
    ) {
      dp[i][j] = dp[i][j - 1] + 1;
    } else if (
      (i % 2 === 0 && input[j - 1] === 2) ||
      (i % 2 === 1 && input[j - 1] === 1)
    ) {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - 1] + 1);
    } else {
      dp[i][j] = dp[i][j - 1];
    }
    max = Math.max(max, dp[i][j]);
  }
}

console.log(max);
