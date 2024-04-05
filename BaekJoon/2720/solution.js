// 세탁소 사장 동혁

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(change) {
  let count = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    count[i] += Math.floor(change / coins[i]);
    change %= coins[i];
  }
  return count.join(" ");
}

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}
