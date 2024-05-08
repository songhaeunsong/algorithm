// Small World Network
// 1 초, 512 MB
// (1 ≤ N ≤ 100, 0 ≤ K ≤ N×(N-1)/2)

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const matrix = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Infinity)
);

for (let i = 0; i < N; i++) {
  matrix[i][i] = 0;
}
for (const [from, to] of input) {
  matrix[from - 1][to - 1] = 1;
  matrix[to - 1][from - 1] = 1;
}

function checkSmallWorld() {
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
          matrix[j][i] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if ((i !== j && matrix[i][j] === 0) || matrix[i][j] > 6) return 0;
    }
  }
  return 1;
}

const isSmall = checkSmallWorld();

console.log(isSmall ? "Small World!" : "Big World!");
