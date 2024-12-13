const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);

const computers = new Array(N).fill(0);
const computerEnd = new Array(N).fill(0);

for (const [start, end] of input) {
  for (let i = 0; i < N; i++) {
    if (computerEnd[i] <= start) {
      computerEnd[i] = end;
      computers[i]++;
      break;
    }
  }
}
let totalCount = N;
for (let i = 0; i < N; i++) {
  if (computers[i] === 0) {
    totalCount = i;
    break;
  }
}

console.log(`${totalCount}\n${computers.slice(0, totalCount).join(" ")}`);
