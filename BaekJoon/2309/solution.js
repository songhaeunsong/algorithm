const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0) - 100;
  let left = 0;
  let right = arr.length - 1;
  let target = arr[left] + arr[right];
  while (sum !== target) {
    sum > target ? left++ : right--;
    target = arr[left] + arr[right];
  }
  return arr
    .filter((num) => num !== arr[left] && num !== arr[right])
    .join("\n");
}
console.log(solution(input));
