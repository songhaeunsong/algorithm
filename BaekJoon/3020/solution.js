const fs = require("fs");
const [nums, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);

const downside = {};
const upside = {};

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    downside[+input[i]] = (downside[+input[i]] || 0) + 1;
  } else upside[+input[i]] = (upside[+input[i]] || 0) + 1;
}

// console.log(downside);

const upCount = new Array(M + 2).fill(0);
const downCount = new Array(M + 2).fill(0);

let idx = 0;

const upkeys = Object.keys(upside);
upkeys.sort((a, b) => b - a);
for (let i = M; i >= 1; i--) {
  if (idx >= upkeys.length) {
    upCount[i] = upCount[i + 1];
    continue;
  }
  const key = +upkeys[idx];
  if (i > key) upCount[i] = upCount[i + 1];
  else {
    upCount[i] = upCount[i + 1] + upside[key];
    idx++;
  }
}

idx = 0;

const downkeys = Object.keys(downside);
downkeys.sort((a, b) => b - a);

for (let i = M; i >= 1; i--) {
  if (idx >= downkeys.length) {
    downCount[i] = downCount[i + 1];
    continue;
  }
  const key = +downkeys[idx];
  if (i > key) downCount[i] = downCount[i + 1];
  else {
    downCount[i] = downCount[i + 1] + downside[key];

    idx++;
  }
}

const map = {};
let min = Infinity;

for (let i = 1; i <= M; i++) {
  const count = upCount[i] + downCount[M - i + 1];
  if (map[count]) map[count]++;
  else map[count] = 1;
  min = Math.min(min, count);
}

console.log(`${min} ${map[min]}`);
