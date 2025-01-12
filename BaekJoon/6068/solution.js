// 시간 관리하기

const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => b[1] - a[1]);

let wakeUpTime = Infinity;
let isImpossible = false;

for (const [used, deadline] of input) {
  wakeUpTime = Math.min(deadline, wakeUpTime) - used;

  if (wakeUpTime < 0) {
    isImpossible = true;
    break;
  }
}

console.log(isImpossible ? -1 : wakeUpTime);
