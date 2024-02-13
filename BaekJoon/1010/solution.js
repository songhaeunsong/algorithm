// 다리 놓기

const fs = require("fs");

const [caseLength, ...fileContent] = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");

const input = fileContent.map((line) => line.split(" ").map(Number));

const dp = Array(30)
  .fill(1)
  .map(() => Array(30).fill(1));

for (let row = 1; row < 30; row++) {
  for (let col = row + 1; col < 30; col++) {
    dp[row][col] = row === 1 ? col : dp[row][col - 1] + dp[row - 1][col - 1];
  }
}

input.forEach((i) => console.log(dp[i[0]][i[1]]));
