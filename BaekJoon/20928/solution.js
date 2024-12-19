const fs = require("fs");
const [[n, m], p, x] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let flag = true;
let cnt = 0;
let e = p[0] + x[0];
let i = 1;

while (e < m) {
  let maxReach = e;

  while (i < n && p[i] <= e) {
    maxReach = Math.max(maxReach, p[i] + x[i]);
    i++;
  }

  if (maxReach === e) {
    flag = false;
    break;
  }

  e = maxReach;
  cnt++;
}

console.log(!flag ? -1 : cnt);
