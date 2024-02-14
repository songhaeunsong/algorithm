// ATM

const fs = require("fs");
const [n, input] = fs.readFileSync("./input.txt").toString().split("\n");
const N = Number(n);
const times = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let total = 0;
for (let i = 0; i < N; i++) {
  total += times[i] * (N - i);
}
console.log(total);
