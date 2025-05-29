const fs = require("fs");
const num = +fs.readFileSync(0).toString().trim();

const dp = Array.from({ length: num + 1 }, () => new Array(10).fill(0n));

console.log(main().toString());

function main() {
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1n;
  }

  if (num === 1) return 9n;

  for (let i = 2; i <= num; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j + 1];
      } else if (j === 9) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
      }
    }
  }

  const mod = 1000000000n;
  return dp[num].reduce((acc, cur) => acc + cur, 0n) % mod;
}
