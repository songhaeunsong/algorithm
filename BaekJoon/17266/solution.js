// 어두운 굴다리

const fs = require("fs");
const [[N], [M], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let maxGap = input[0];
for (let i = 1; i < M; i++) {
  maxGap = Math.max(maxGap, Math.ceil((input[i] - input[i - 1]) / 2));
}

maxGap = Math.max(maxGap, N - input.at(-1));
console.log(maxGap);
