const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt").toString().split("\n");

const N = +inputLines[0];
const input = inputLines[1].split(" ").map(Number);
const M = +inputLines[2];

function search() {
  let left = 1; // 상한액 최소
  let right = Math.max(...input); // 상한액 최대

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let sum = input.reduce((acc, cur) => (acc += cur < mid ? cur : mid), 0);

    if (sum <= M) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

console.log(search());
