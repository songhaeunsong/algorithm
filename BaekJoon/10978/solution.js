const fs = require("fs");
const [T, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = new Array(T).fill("");

const dp = new Array(21).fill(0n);
dp[2] = 1n;

for (let i = 3; i <= 20; i++) {
  dp[i] = BigInt(i - 1) * (dp[i - 1] + dp[i - 2]);
}

for (let i = 0; i < T; i++) {
  answer[i] = dp[input[i]].toString();
}

console.log(answer.join("\n"));
