const fs = require("fs");
const [[N, D], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);

let max = 0;
let left = 0;
let right = 0;
let sum = 0;

while (right < N) {
  if (input[right][0] - input[left][0] >= D) {
    sum -= input[left][1];
    left++;
  } else {
    sum += input[right][1];
    right++;
    max = Math.max(max, sum);
  }
}

console.log(max);
