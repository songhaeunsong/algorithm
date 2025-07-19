// 흙길 보수하기

const fs = require("fs");
const [[N, L], ...puddles] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

puddles.sort((a, b) => a[0] - b[0]);

let count = 0;
let start = 0;

for (const [ps, pe] of puddles) {
  const max = Math.max(start, ps);
  if (max >= pe) continue;

  const newCount = Math.ceil((pe - max) / L);

  count += newCount;
  start = max + newCount * L;
}

console.log(count);
