// 먹을 것인가 먹힐 것인가

const fs = require("fs");
const [T, ...inputLines] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

for (let t = 0; t < +T; t++) {
  const input = inputLines.slice(3 * t, 3 * (t + 1));
  const sizeA = input[1].split(" ").map(Number);
  const sizeB = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const result = sizeA.reduce(
    (acc, size) => (acc += searchFeed(size, sizeB)),
    0
  );

  console.log(result);
}

function searchFeed(value, reference) {
  // value보다 작으면서 가장 가까운 수 찾기
  let left = 0;
  let right = reference.length - 1;

  if (reference[left] >= value) return 0;
  if (reference[right] < value) return right + 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (reference[mid] < value) left = mid + 1;
    else right = mid;
  }
  return right;
}
