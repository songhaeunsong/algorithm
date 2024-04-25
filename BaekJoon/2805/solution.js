// 나무 자르기

const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt").toString().split("\n");

const [, M] = inputLines[0].split(" ").map(Number);
const input = inputLines[1].split(" ").map(Number);

function searchHeight() {
  let left = 1;
  let right = Math.max(...input);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let remainder = 0;

    for (const num of input) {
      if (num > mid) {
        remainder += num - mid;
      }
      if (remainder >= M) break;
    }

    if (remainder >= M) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

console.log(searchHeight());
