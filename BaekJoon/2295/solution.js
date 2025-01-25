const fs = require("fs");
const [N, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set();

input.sort((a, b) => b - a);

for (let num1 of input) {
  for (let num2 of input) {
    set.add(num1 + num2);
  }
}

let answer = 0;
findNum3();

console.log(answer);

function findNum3() {
  for (let sum of input) {
    for (let num3 of input) {
      if (set.has(sum - num3)) {
        answer = sum;
        return;
      }
    }
  }
}
