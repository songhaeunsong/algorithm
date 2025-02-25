const fs = require("fs");
const [[T], _, ...coins] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dp = new Array(T + 1).fill(0);
dp[0] = 1;

for (const [type, amount] of coins) {
  for (let sum = T; sum >= type; sum--) {
    for (let i = 1; i <= amount; i++) {
      if (sum - type * i < 0) break;
      dp[sum] += dp[sum - type * i];
    }
  }
}

console.log(dp[T]);
