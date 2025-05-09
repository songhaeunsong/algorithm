const fs = require("fs");
const [[N], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dpSum = Array.from({ length: N }, () => Array(N).fill(0));
const dpMax = Array.from({ length: N }, () => Array(N).fill(0));

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    const value = board[x][y];

    if (x === 0 && y === 0) {
      dpSum[x][y] = value;
      dpMax[x][y] = value;
    } else {
      let sumFromLeft = y > 0 ? dpSum[x][y - 1] + value : -Infinity;
      let sumFromTop = x > 0 ? dpSum[x - 1][y] + value : -Infinity;

      let maxFromLeft = y > 0 ? Math.max(dpMax[x][y - 1], value) : -Infinity;
      let maxFromTop = x > 0 ? Math.max(dpMax[x - 1][y], value) : -Infinity;

      if (sumFromLeft > sumFromTop) {
        dpSum[x][y] = sumFromLeft;
        dpMax[x][y] = maxFromLeft;
      } else if (sumFromLeft < sumFromTop) {
        dpSum[x][y] = sumFromTop;
        dpMax[x][y] = maxFromTop;
      } else {
        dpSum[x][y] = sumFromLeft;
        dpMax[x][y] = Math.max(maxFromLeft, maxFromTop);
      }
    }
  }
}

const result =
  Math.max(
    dpSum[N - 2][N - 1] + dpMax[N - 2][N - 1],
    dpSum[N - 1][N - 2] + dpMax[N - 1][N - 2]
  ) + board[N - 1][N - 1];

console.log(result);
