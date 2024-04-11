// 두 용액
// N은 2 이상 100,000
// 원소 -1,000,000,000 이상 1,000,000,000 이하

const fs = require("fs");
const [N, fileContent] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const input = fileContent
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let minSum = Infinity;
let left = 0;
let right = +N - 1;
let answerPair = "";

while (left < right) {
  const sum = input[left] + input[right];
  const diff = Math.abs(input[left] + input[right]);
  if (diff < minSum) {
    minSum = diff;
    answerPair = `${input[left]} ${input[right]}`;
  }
  if (sum === 0) break;
  if (sum > 0) right--;
  if (sum < 0) left++;
}
console.log(answerPair);
