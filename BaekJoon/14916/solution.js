// 거스름돈

const fs = require("fs");
const num = Number(fs.readFileSync("./input.txt").toString());

const dp = [];
dp[2] = 1;
dp[4] = 2;
dp[5] = 1;
dp[6] = 3;
dp[7] = 2;

function solution(num) {
  if (dp[num]) return dp[num];
  for (let i = 8; i <= num; i++) {
    if (dp[i - 5]) dp[i] = solution(i - 5) + 1;
    else if (dp[i - 2]) dp[i] = solution(i - 2) + 1;
  }
  return dp[num];
}

num === 1 || num === 3 ? console.log(-1) : console.log(solution(num));
