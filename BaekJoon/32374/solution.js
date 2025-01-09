const fs = require("fs");
const [[N, M], ...info] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

info[0].sort((a, b) => b - a);
info[1].sort((a, b) => b - a);

const selectedMap = {};
for (const selected of info[2]) {
  selectedMap[selected] = (selectedMap[selected] || 0) + 1;
}

for (let i = 0; i < N; i++) {
  const box = info[1][i];

  if (selectedMap[box]) {
    selectedMap[box]--;
    info[1][i] = 0;
  }
}

info[1].sort((a, b) => b - a);

for (const giftSize of info[0]) {
  const boxIdx = binarySearch(giftSize);

  if (boxIdx !== -1) {
    console.log(giftSize);
    break;
  }
}

function binarySearch(target) {
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (info[1][mid] >= target) left = mid + 1;
    else right = mid - 1;
  }

  return info[1][right] < target ? -1 : right;
}
