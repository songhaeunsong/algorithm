const fs = require("fs");
const [num, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const numbers = input.map(Number);

numbers.sort((a, b) => a - b);

let left = 0;
let right = 1;
let min = Infinity;

while (right < n) {
  const target = numbers[right] - numbers[left];

  if (target === m) {
    min = Math.min(min, target);

    break;
  }
  if (target < m) {
    right++;
    continue;
  }
  min = Math.min(min, target);
  left++;
}

console.log(min);
