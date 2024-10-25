const fs = require("fs");
const N = +fs.readFileSync(0).toString();

const dp = new Array(N + 1).fill(0);
const sum = new Array(N + 1).fill(0);

dp[0] = 1;
dp[1] = 2;
sum[0] = 1;
sum[1] = 3;

for (let i = 2; i <= N; i++) {
    dp[i] = (sum[i - 1] * 2 + dp[i - 2]) % 1000000007;
    sum[i] = (sum[i - 1] + dp[i]) % 1000000007;
}

console.log(dp[N]);