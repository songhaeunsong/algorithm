// 센서

const fs = require("fs");
const [[N], [K], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);
const gaps = [];

let total = input[N - 1] - input[0];
for (let i = 1; i < N; i++) {
  const gap = input[i] - input[i - 1];
  gaps.push(gap);
}

gaps.sort((a, b) => b - a);

if (K >= N) console.log(0);
else {
  for (let i = 0; i < K - 1; i++) {
    total -= gaps[i];
  }

  console.log(total);
}
