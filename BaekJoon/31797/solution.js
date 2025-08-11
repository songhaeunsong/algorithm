// 아~파트 아파트

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const sequence = [];
for (let i = 0; i < M; i++) {
  sequence.push([i + 1, input[i][0]]);
  sequence.push([i + 1, input[i][1]]);
}

sequence.sort((a, b) => a[1] - b[1]);

const tmp = N % (M * 2);
const target = (tmp === 0 ? M : tmp) - 1;

console.log(sequence[target][0]);
