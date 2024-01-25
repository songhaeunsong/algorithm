// 상근이의 여행

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
let idx = 0;
for (let i = 0; i < N; i++) {
  const [n, m] = input[idx].split(" ").map(Number);
  const cases = input.slice(idx + 1, idx + m + 1);
  result += n - 1 + "\n";
  idx += m + 1;
}
console.log(result);
