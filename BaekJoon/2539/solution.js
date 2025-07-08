// 모자이크

const fs = require("fs");
const [[r, c], [max], wrongN, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
console.log(binarySearch());

function binarySearch() {
  let left = 1;
  let right = 1000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let isTooSmallPaper = 0;
    let count = 0;

    let paperEnd = 0;
    let inputIdx = 0;

    while (inputIdx < wrongN) {
      if (input[inputIdx][1] <= paperEnd) {
        if (input[inputIdx][0] > mid) {
          isTooSmallPaper = 1;
          break;
        }
        inputIdx++;
      } else {
        paperEnd = input[inputIdx][1] + mid - 1;
        count++;
      }
      if (count > max) break;
    }

    if (isTooSmallPaper || count > max) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}
