// 로프

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);
const weights = input.sort((a, b) => b - a);

function solution(input) {
  let max = input.reduce(
    (acc, cur, idx) => (acc = acc < cur * (idx + 1) ? cur * (idx + 1) : acc),
    0
  );
  return max;
}
console.log(solution(weights));
