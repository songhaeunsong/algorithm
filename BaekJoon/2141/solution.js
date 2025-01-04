const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);
let right = input.reduce((acc, cur) => acc + cur[1], 0);
let left = 0;

for (let i = 0; i < N; i++) {
  left += input[i][1];
  right -= input[i][1];
  if (left >= right) {
    console.log(input[i][0]);
    break;
  }
}
