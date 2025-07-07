// 한번 열면 멈출 수 없어

const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let usedStresses = 0;
const stresses = new Array(N).fill(0);

main();
console.log(`${usedStresses}\n${stresses.join("\n")}`);

function main() {
  for (let i = 1; i < N; i++) {
    [input[i][0], input[i][1]] = setRange(i - 1, i);
  }

  let cur = input[N - 1][0];
  stresses[N - 1] = cur;

  for (let i = N - 2; i >= 0; i--) {
    if (input[i][1] <= cur) {
      cur = input[i][1];
    } else if (input[i][0] >= cur) {
      cur = input[i][0];
    }
    stresses[i] = cur;
  }
}

function setRange(first, second) {
  if (input[first][0] >= input[second][1]) {
    usedStresses += input[first][0] - input[second][1];
    return [input[second][1], input[second][1]];
  }
  if (input[first][1] <= input[second][0]) {
    usedStresses += input[second][0] - input[first][1];

    return [input[second][0], input[second][0]];
  }
  return [
    Math.max(input[first][0], input[second][0]),
    Math.min(input[first][1], input[second][1]),
  ];
}
