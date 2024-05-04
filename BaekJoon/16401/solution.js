// 과자 나눠주기

const fs = require("fs");
const [[M, N], snack] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function search() {
  let left = 0;
  let right = Math.max(...snack);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (const snackLength of snack) {
      if (snackLength >= mid) count += Math.floor(snackLength / mid);
      if (count >= M) break;
    }
    if (count >= M) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}
console.log(search());
