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

while (gap <= N) {
  const sum = prefixSums[N] - prefixSums[N - gap];
  if (sum >= S) break;
  gap++;
}
answer.push(gap + 1);

console.log(answer);
// console.log(Math.min(...answer));
