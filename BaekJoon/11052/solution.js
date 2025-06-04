// 카드 구매하기

const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = new Array(N).fill(0);
dp[0] = input[0];

for (let i = 1; i < N; i++) {
  dp[i] = input[i];
  for (let j = 0; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[j] + input[i - j - 1]);
  }
}
console.log(dp[N - 1]);
