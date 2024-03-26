// 부분수열의 합

const fs = require("fs");
const [[N, S], input] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let result = 0;
const combination = 0;

function findCombination(currentCombination, startIndex) {
  for (let i = startIndex; i < N; i++) {
    currentCombination += input[i];

    if (currentCombination === S) result++;
    findCombination(currentCombination, i + 1);
    currentCombination -= input[i];
  }
}
findCombination(combination, 0);
console.log(result);
