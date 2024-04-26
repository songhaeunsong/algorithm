const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = inputLines.shift().split(" ").map(Number);
const moneyToUse = inputLines.map(Number);
function search() {
  const maxMoney = Math.max(...moneyToUse);
  let left = maxMoney;
  let right = maxMoney * N;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let sum = 0;
    let count = 1;

    for (const money of moneyToUse) {
      sum += money;
      if (sum > mid) {
        count++;
        sum = money;
      }
      if (count > M) break;
    }
    if (count > M) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}
console.log(search());
