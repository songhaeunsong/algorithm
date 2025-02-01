const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let answer = 0;

let left = 0;
let right = 0;
const map = {};

while (left <= right) {
  if (right === N) {
    answer += right - left++;
    continue;
  }
  if (map[input[right]]) {
    map[input[left]]--;
    answer += right - left++;
    continue;
  }

  map[input[right]] = (map[input[right]] || 0) + 1;
  right++;
}

console.log(answer);
