// Game Addiction

const fs = require("fs");
const [H, N] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let start = 0;
let end = 0;

if (H > N) {
  start = N;
  end = H;
} else {
  start = H;
  end = N;
}

const dp = Array.from({ length: end + 1 }, () => new Array(end).fill(0));

for (let i = start; i <= end; i++) {
  for (let j = start; j <= end; j++) {
    if (i < j) continue;

    if (i === start && j === start) {
      dp[i][j] = 1;
      continue;
    }

    if (i === 0) {
      dp[i][j] = dp[i][j - 1];
      continue;
    }
    if (j === 0) {
      dp[i][j] = dp[i - 1][j];
      continue;
    }

    dp[i][j] = (dp[i - 1][j] || 0) + (dp[i][j - 1] || 0);
  }
}

console.log(dp[end][end]);
