// 신입사원
const fs = require("fs");
const [testCase, ...fileContent] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let idx = 0;
let result = [];
for (let i = 0; i < Number(testCase); i++) {
  let length = Number(fileContent[idx++]);
  let next = idx + length;
  let arr = fileContent
    .slice(idx, next)
    .map((input) => input.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  solution(length, arr);
  idx = next;
}

console.log(result.trim());

function solution(count, grades) {
  let answer = 0;
  let min = count + 1;
  for (let [, second] of grades) {
    if (second < min) {
      answer++;
      min = second;
    }
  }
  result += answer + "\n";
}
