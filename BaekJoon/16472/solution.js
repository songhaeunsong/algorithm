const fs = require("fs");
const [N, input] = fs.readFileSync(0).toString().trim().split("\n");
const map = new Map();

let left = 0;
let right = 0;
let max = 0;

map.set(input[left], 1);

while (left <= right) {
  if (right >= input.length) break;

  const len = map.size;

  if (len > Number(N)) {
    map.set(input[left], map.get(input[left]) - 1);
    if (map.get(input[left]) === 0) map.delete(input[left]);
    left++;
    continue;
  }

  if (len === Number(N)) {
    max = Math.max(max, right - left + 1);
  }

  right++;
  if (right < input.length) {
    map.set(input[right], (map.get(input[right]) || 0) + 1);
  }
}

console.log(max === 0 ? input.length : max);
