// 이동하기

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i === 0 && j === 0) continue;

    if (i === 0) {
      input[i][j] += input[i][j - 1];
      continue;
    }
    if (j === 0) {
      input[i][j] += input[i - 1][j];
      continue;
    }

    input[i][j] += Math.max(
      input[i][j - 1],
      input[i - 1][j],
      input[i - 1][j - 1]
    );
  }
}

console.log(input[N - 1][M - 1]);
