// 부녀회장이 될테야

const fs = require("fs");
const [num, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const dp = Array.from({ length: 1 }, () => Array.from({ length: 15 }));

for (let i = 1; i <= 14; i++) {
  dp[0][i] = i;
}

function solution(k, n) {
  if (k < dp.length) {
    return dp[k][n];
  }

  for (let row = dp.length; row <= k; row++) {
    dp[row] = Array.from({ length: 15 }).fill(1);

    for (let col = 2; col <= 14; col++) {
      dp[row][col] = dp[row][col - 1] + dp[row - 1][col];
    }
  }

  return dp[k][n];
}

for (let i = 1; i < input.length; i += 2) {
  console.log(solution(input[i - 1], input[i]));
}
