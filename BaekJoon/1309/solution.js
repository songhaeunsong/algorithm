// 동물원

const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

const dp = new Array(N + 1).fill(0);
main();
console.log(dp[N] % 9901);

function main() {
  dp[1] = 3;

  if (N === 1) return;

  dp[2] = 7;

  if (N === 1) return;

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 2] + 2 * dp[i - 1]) % 9901;
  }
}
