// 랜선 자르기

const fs = require("fs");
const [test, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const [, N] = test.split(" ").map(Number);
const cable = input.map(Number);

const sum = cable.reduce((acc, cur) => acc + cur, 0);

function search() {
  let left = 1;
  let right = parseInt(sum / N);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cableCount = cable.reduce((acc, cur) => acc + parseInt(cur / mid), 0);
    if (cableCount < N) right = mid - 1;
    else left = mid + 1;
  }
  return right;
}
console.log(search());
