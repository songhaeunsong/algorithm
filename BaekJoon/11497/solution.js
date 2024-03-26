// 통나무 건너뛰기

const fs = require("fs");
const [, ...fileContent] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
let result = "";

while (idx < fileContent.length) {
  const [N, input] = [fileContent[idx], fileContent[idx + 1]];
  result += solution(+N, input) + "\n";
  idx += 2;
}
console.log(result);

function solution(N, arr) {
  const nums = arr
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const candidate = [nums[1] - nums[0], nums[N - 1] - nums[N - 2]];
  for (let i = 0; i < N - 2; i++) {
    const difference = nums[i + 2] - nums[i];
    candidate.push(difference);
  }
  return Math.max(...candidate);
}
