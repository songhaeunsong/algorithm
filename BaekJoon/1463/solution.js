// 1로 만들기

const fs = require("fs");
fileContent = fs.readFileSync("./input.txt").toString();
let input = Number(fileContent);

function solution(number) {
  const dp = new Array(number + 1);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;

  if (dp[number]) return dp[number];

  for (let i = 4; i <= number; i++) {
    let min = number;

    if (i % 3 === 0) min = Math.min(min, dp[i / 3]);
    if (i % 2 === 0) min = Math.min(min, dp[i / 2]);
    min = Math.min(min, dp[i - 1]);

    dp[i] = min + 1;
  }
  return dp[number];
}

console.log(solution(input));
