const fs = require("fs");
const [[N, C], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

console.log(main());

function main() {
  // 1
  for (const num of input) {
    if (num === C) return 1;
  }

  input.sort((a, b) => a - b);

  // 2
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const sum = input[left] + input[right];
    if (sum === C) return 1;
    else if (sum < C) {
      // 3
      if (findThird(left, right, sum)) return 1;
      left++;
    } else right--;
  }

  function findThird(fir, sec, sum) {
    let left = fir + 1;
    let right = sec - 1;

    while (left <= right) {
      const mid = parseInt((left + right) / 2);
      if (input[mid] + sum < C) left = mid + 1;
      else right = mid - 1;
    }

    if (left <= fir || left >= sec) return 0;
    return sum + input[left] === C ? 1 : 0;
  }

  return 0;
}
