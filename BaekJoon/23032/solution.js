const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const prefix = new Array(N + 1).fill(0);
let min = [Infinity, 0]; // 차와 합

for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + input[i - 1];
}

for (let i = 0; i <= N; i++) {
  for (let j = i + 2; j <= N; j++) {
    findMin(i, j);
  }
}
console.log(min[1]);

function findMin(start, end) {
  const total = prefix[end] - prefix[start];

  let left = start + 1;
  let right = end - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const firstTeam = prefix[mid] - prefix[start];
    const secondTeam = total - firstTeam;

    const E = Math.abs(firstTeam - secondTeam);
    const S = firstTeam + secondTeam;

    if (min[0] > E || (min[0] === E && min[1] < S)) {
      min[0] = E;
      min[1] = S;
    }

    if (firstTeam < secondTeam) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
