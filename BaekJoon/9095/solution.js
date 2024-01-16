// 1, 2, 3 더하기

const fs = require("fs");
const fileContent = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let input = fileContent.slice(1);

const dp = new Array(11);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

function solution(number) {
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  number.map((v) => console.log(dp[v]));
}

solution(input);
