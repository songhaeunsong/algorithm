// 두 배열의 합

const fs = require("fs");
const [[T], [N], NArr, [M], MArr] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const NPrefix = new Array(N + 1).fill(0);
const MPrefix = new Array(M + 1).fill(0);
let result = 0;

for (let n = 1; n <= N; n++) {
  NPrefix[n] = NArr[n - 1] + NPrefix[n - 1];
}

for (let m = 1; m <= M; m++) {
  MPrefix[m] = MArr[m - 1] + MPrefix[m - 1];
}

const mMap = {};
// const nMap = {};

for (let i = 0; i <= M; i++) {
  for (let j = i + 1; j <= M; j++) {
    const msum = MPrefix[j] - MPrefix[i];
    mMap[msum] = (mMap[msum] || 0) + 1;
  }
}

const mKeys = Object.keys(mMap);
mKeys.sort((a, b) => a - b);

for (let i = 0; i <= N; i++) {
  for (let j = i + 1; j <= N; j++) {
    const sum = NPrefix[j] - NPrefix[i];
    const target = T - sum;
    if (mMap[target]) {
      result += mMap[target];
    }
  }
}

console.log(result);
