// 빗물

const fs = require("fs");
const [[H, W], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const maxs = new Array(W).fill(0);
let answer = 0;

let max = 0;
for (let i = W - 1; i >= 0; i--) {
  max = Math.max(max, input[i]);
  maxs[i] = max;
}

let currentStart = 0;

while (currentStart < W) {
  const startMax = input[currentStart];
  const endMax = maxs[currentStart + 1];
  currentStart = simulate(Math.min(startMax, endMax), currentStart + 1);
}

function simulate(water, cur) {
  while (water > input[cur]) {
    answer += water - input[cur];
    cur++;
  }
  return cur;
}
console.log(answer);
