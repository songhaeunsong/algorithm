const fs = require("fs");
const [[N, M], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const totalSum = input.reduce((acc, cur) => acc + cur, 0);
console.log(binarySearch());

function binarySearch() {
  let left = 0;
  let right = totalSum;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    let count = 0;
    let current = 0;

    for (const correctCount of input) {
      current += correctCount;
      if (current >= mid) {
        count++;
        current = 0;
      }

      if (count >= M) break;
    }
    if (count < M) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}
