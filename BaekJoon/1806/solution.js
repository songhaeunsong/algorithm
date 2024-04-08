// 부분합 (누적합 풀이)
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

const answer = [];
const prefixSums = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  prefixSums[i] = input[i - 1] + prefixSums[i - 1];
}

let gap = 1;

for (let i = 1; i <= N; i++) {
  while (gap <= i) {
    const sum = prefixSums[i] - prefixSums[i - gap];
    if (sum >= S) {
      answer.push(gap);
      break;
    }

    gap++;
  }
  gap = 1;
}

console.log(Math.min(...answer) | 0);
