// 도도의 음식 준비

const fs = require("fs");
const [[N, K, C], cookingTimes] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

cookingTimes.sort((a, b) => a - b);
let maxSum = 0;

console.log(binarySearch());

function binarySearch() {
  let left = 1;
  let right = 1000000 * K;

  while (left <= right) {
    const targetTotalTime = parseInt((left + right) / 2);

    maxSum = 0;
    backtracking(0, targetTotalTime, C, 0);

    if (maxSum >= K) right = targetTotalTime - 1;
    else left = targetTotalTime + 1;
  }

  return left;
}

function backtracking(start, targetTotalTime, remainC, sum) {
  if (start === N) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  const maxRemainC = Math.min(cookingTimes[start] - 1, remainC);
  for (let rc = maxRemainC; rc >= 0; rc--) {
    const tmp = parseInt(targetTotalTime / (cookingTimes[start] - rc));
    backtracking(start + 1, targetTotalTime, remainC - rc, sum + tmp);
  }
}
