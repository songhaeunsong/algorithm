// 1로 만들기

const fs = require("fs");
fileContent = fs.readFileSync("./input.txt").toString();
let input = Number(fileContent);

function solution(number) {
  const dp = new Array(number + 1).fill(0);

  for (let i = 2; i <= number; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[number];
}

console.log(solution(input));
