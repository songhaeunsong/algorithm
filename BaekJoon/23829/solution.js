// 인문예술탐사주간

const fs = require("fs");
const [[N, Q], trees, ...tatenPhoto] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

trees.sort((a, b) => a - b);

const answer = [];

const leftPrefix = new Array(N).fill(0);
const rightPrefix = new Array(N).fill(0);

for (let i = 1; i < N; i++) {
  const reversedI = N - i - 1;

  leftPrefix[i] = leftPrefix[i - 1] + (trees[i] - trees[i - 1]) * i;
  rightPrefix[reversedI] =
    rightPrefix[reversedI + 1] + (trees[reversedI + 1] - trees[reversedI]) * i;
}

for (const p of tatenPhoto) {
  const left = findLeft(p);
  const right = left + 1;

  let sum = 0;
  if (left >= 0) sum += leftPrefix[left] + (left + 1) * (p - trees[left]);
  if (right < N) sum += rightPrefix[right] + (N - right) * (trees[right] - p);

  answer.push(sum);
}

console.log(answer.join("\n"));

function findLeft(input) {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (trees[mid] < input) left = mid + 1;
    else right = mid - 1;
  }

  return right;
}
