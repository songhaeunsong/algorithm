const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const stack = [];
let count = 0;

for (const [location, height] of input) {
  while (stack.length && stack.at(-1) > height) {
    count++;
    stack.pop();
  }

  if (height === 0) continue;

  if (!stack.length || stack.at(-1) < height) {
    stack.push(height);
  }
}

// console.log(stack);
count += stack.length;
console.log(count);
