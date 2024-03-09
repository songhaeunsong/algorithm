// 수들의 합

const fs = require("fs");
const num = Number(fs.readFileSync("./input.txt").toString().trim());

function solution(num) {
  let cnt = num;
  let count = 2;

  while (cnt > 0) {
    cnt -= count;
    if (cnt <= 0) break;
    count++;
  }
  return count - 1;
}

console.log(solution(num));
