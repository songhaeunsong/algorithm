// 수도배관공사

const fs = require("fs");
const [[D, P], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = new Array(D + 1).fill(0);
const tmp = new Array(D + 1).fill(0);

if (input[0][0] <= D) dp[input[0][0]] = input[0][1];

for (let i = 1; i < P; i++) {
  for (let j = 1; j <= D; j++) {
    const [L, C] = input[i];

    if (L > j) {
      continue;
    }
    if (L === j) {
      tmp[j] = Math.max(dp[j], C);
    } else {
      tmp[j] = Math.max(dp[j], Math.min(C, dp[j - L]));
    }
  }
  tmp.forEach((t, i) => {
    dp[i] = t;
  });
}

console.log(dp[D]);
