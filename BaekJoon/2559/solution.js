// 수열
// 제한: 1초, 128MB
// N은 2 이상 100,000 이하
// K는 1과 N 사이의 정수
// 수들은 모두 -100 이상 100 이하

const fs = require("fs");
const [[N, K], input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

let answer = [];
const prefixSums = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  prefixSums[i] = input[i - 1] + prefixSums[i - 1];
}

for (let i = K; i <= N; i++) {
  const sum = prefixSums[i] - prefixSums[i - K];
  answer.push(sum);
}
console.log(Math.max(...answer));
