const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);
let answer = 0;
let start = input[0][0];
let end = input[0][1];

for (let i = 1; i < N; i++) {
  const newStart = input[i][0];
  const newEnd = input[i][1];

  if (newStart > end) {
    answer += end - start;
    start = newStart;
    end = newEnd;
    continue;
  }

  end = Math.max(end, newEnd);
}

answer += end - start;

console.log(answer);
