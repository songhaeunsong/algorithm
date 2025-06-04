const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const inputSet = new Set();
for (const [i] of input) {
  inputSet.add(i);
}

const dp = Array.from({ length: N + 1 }, () => new Array(201).fill(Infinity));
dp[1][0] = 0;

if (!inputSet.has(2)) dp[2][1] = 1;

for (let i = 3; i <= N; i++) {
  if (inputSet.has(i)) continue;
  for (let j = 1; j < 200; j++) {
    if (inputSet.has(i - j)) continue;

    if (j >= i) continue;

    dp[i][j] = Math.min(dp[i - j][j], dp[i - j][j - 1], dp[i - j][j + 1]) + 1;
  }
}

let min = Infinity;

for (let i = 1; i < 200; i++) {
  min = Math.min(dp[N][i], min);
}

console.log(min === Infinity ? -1 : min);
