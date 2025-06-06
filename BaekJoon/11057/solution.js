const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = +input[0];
const INF = 10_007;
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: 10 }).fill(0)
);
for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
}
for (let i = 2; i < n + 1; i++) {
  for (let j = 0; j < 10; j++) {
    for (let prev = j; prev >= 0; prev--) {
      dp[i][j] = (dp[i][j] + dp[i - 1][prev]) % INF;
    }
  }
}

console.log(dp[n].reduce((acc, cur) => (acc + cur) % INF, 0));
