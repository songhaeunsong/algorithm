// 보물

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let answer = 0;
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

for (let i = 0; i < A.length; i++) {
  answer += A[i] * B[i];
}
console.log(answer);
