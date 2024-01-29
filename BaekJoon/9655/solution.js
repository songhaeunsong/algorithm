// 돌 게임

const fs = require("fs");
const N = Number(fs.readFileSync("./input.txt"));

let result = "";
const dp = new Array(N + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 1;

function count(num) {
  if (dp[num]) return dp[num];
  for (let i = 4; i <= num; i++) {
    dp[i] = count(i - 1) + 1;
  }
  return dp[num];
}

result = count(N);
console.log(result % 2 === 0 ? "CY" : "SK");
