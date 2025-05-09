const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

const dp = Array.from({ length: N + 1 }, (_, i) => i);

for (let i = 4; i <= N; i++) {
  for (let j = 1; j <= i - 3; j++) {
    dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
  }
}

console.log(dp[N]);
