// 겹치는 건 싫어

const fs = require("fs");
const [[N, K], sequence] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const counts = new Array(100001).fill(0);
let max = 0;

let left = 0;
let right = 0;

while (right < N) {
  if (counts[sequence[right]] >= K) {
    counts[sequence[left++]]--;
  } else {
    counts[sequence[right++]]++;
  }

  max = Math.max(right - left, max);
}

console.log(max);
