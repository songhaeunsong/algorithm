const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.sort((a, b) => a - b);

let min = Infinity;
const solutions = [0, 0, 0];

main();
console.log(solutions.join(" "));

function main() {
  for (let i = 0; i < N; i++) {
    for (let j = i + 2; j < N; j++) {
      const target = (input[i] + input[j]) * -1;
      const result = findMid(i, j, target);
      for (const mid of result) {
        const abs = Math.abs(target - input[mid]);
        if (min > abs) {
          min = abs;
          solutions[0] = input[i];
          solutions[1] = input[mid];
          solutions[2] = input[j];
        }
        if (abs === 0) return;
      }
    }
  }
}

function findMid(i, j, target) {
  let left = i + 1;
  let right = j - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (input[mid] === target) return [mid];
    if (input[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  const result = [];
  if (left < j) result.push(left);
  if (right > i) result.push(right);
  return result;
}
