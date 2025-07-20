const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

const pCount = Math.floor(N / 6);

let rest = N - pCount * 6;

const pAmount = input[0][0] * pCount;
let min = pAmount + input[0][0];

for (const [_, single] of input) {
  const first = pAmount + single * rest;
  const second = single * N;

  min = Math.min(first, second, min);
}

console.log(min);
