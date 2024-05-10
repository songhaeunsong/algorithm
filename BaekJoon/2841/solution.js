// 외계인의 기타 연주 (실버 1)
// 1 초	256 MB
// (1 ≤ N ≤ 500,000, 2 ≤ P ≤ 300,000)

const fs = require("fs");
const [, ...melody] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const stringStack = Array.from({ length: 7 }, () => []);
let count = 0;

for (const [string, fret] of melody) {
  const targetStack = stringStack[string];
  if (!targetStack.length) {
    targetStack.push(fret);
    count++;
    continue;
  }
  while (targetStack.at(-1) > fret) {
    targetStack.pop();
    count++;
  }
  if (targetStack.at(-1) !== fret) {
    targetStack.push(fret);
    count++;
  }
}
console.log(count);
