// 게임 (이분탐색으로 풀기)

const fs = require("fs");
const [Y, X] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

function countGame(X, Y) {
  let left = 0;
  let right = 1000000000;
  let Z = Math.floor((X * 100) / Y);
  if (Z >= 99) return -1;
  Z++;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    const newZ = Math.floor((100 * (X + mid)) / (Y + mid));
    if (newZ < Z) left = mid + 1;
    else right = mid;
  }
  return left;
}
console.log(countGame(X, Y));
