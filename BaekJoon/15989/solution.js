// 1, 2, 3 더하기 4

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = 0;

for (const number of input) {
  max = Math.max(max, number);
}

const dp = Array.from({ length: max + 1 }, () => new Array(4).fill(0));

dp[1][1] = 1;

dp[2][1] = 1;
dp[2][2] = 1;

dp[3][1] = 2;
dp[3][3] = 1;

if (max > 3) {
  for (let i = 4; i <= max; i++) {
    dp[i][1] = dp[i - 1][3] + dp[i - 1][2] + dp[i - 1][1];
    dp[i][2] = dp[i - 2][3] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][3];
  }
}

console.log(input.map((i) => dp[i][1] + dp[i][2] + dp[i][3]).join("\n"));
