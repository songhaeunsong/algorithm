// 자동차 테스트

const fs = require("fs");
let [[n, q], input, ...goal] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));
const map = {};
let result = "";

input.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  map[input[i]] = (n - i - 1) * i;
}

for (const [g] of goal) {
  result += (map[g] || 0) + "\n";
}

console.log(result.trim());
