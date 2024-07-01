// 파이프 옮기기 1

const fs = require("fs");
const inputLines = fs.readFileSync("input.txt").toString().split("\n");
const N = +inputLines.shift();
const grid = inputLines.map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(3).fill(0))
);
dp[0][1][0] = 1;

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (grid[x][y] === 1) continue;

    if (y + 1 < N && grid[x][y + 1] === 0) {
      dp[x][y + 1][0] += dp[x][y][0] + dp[x][y][2];
    }

    if (x + 1 < N && grid[x + 1][y] === 0) {
      dp[x + 1][y][1] += dp[x][y][1] + dp[x][y][2];
    }

    if (
      x + 1 < N &&
      y + 1 < N &&
      grid[x + 1][y + 1] === 0 &&
      grid[x + 1][y] === 0 &&
      grid[x][y + 1] === 0
    ) {
      dp[x + 1][y + 1][2] += dp[x][y][0] + dp[x][y][1] + dp[x][y][2];
    }
  }
}

const routeCount =
  dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2];
console.log(routeCount);
