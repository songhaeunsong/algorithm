// 부분합 (투 포인터)
// 0.5초, 128MB
// N (10 ≤ N < 100,000)
// S (0 < S ≤ 100,000,000)
//수열의 원소 10,000 이하의 자연수

const fs = require("fs");
const [[N, S], input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

let start = 0;
let end = 0;
let cnt = input[start];
const answer = [];

while (end < N) {
  if (cnt >= S) {
    answer.push(end - start + 1);
    cnt -= input[start++];
  }
  if (cnt < S) {
    end++;
    cnt += input[end];
  }
}

console.log(Math.min(...answer) | 0);
