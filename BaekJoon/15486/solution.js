const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = new Array(N).fill(0);

const endtimes = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const [T, _] = input[i];
  const end = T + i - 1;
  if (end >= N) continue;
  endtimes[end].push(i);
}

for (let i = 0; i < N; i++) {
  dp[i] = i === 0 ? 0 : Math.max(dp[i], dp[i - 1]);

  if (endtimes[i].length === 0) continue;

  for (const start of endtimes[i]) {
    const prev = i - input[start][0] < 0 ? 0 : i - input[start][0];
    dp[i] = Math.max(dp[i], input[start][1] + dp[prev]);
  }
}

console.log(dp[N - 1]);
