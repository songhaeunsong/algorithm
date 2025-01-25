const fs = require("fs");
const [[N], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const maxCount = parseInt((N * N) / 2);
let max = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from({ length: N }, () => new Array(N).fill(0));

dfs(0, 0, 0);
console.log(max);

function dfs(start, beauty, count) {
  if (count === 4 || count === maxCount) {
    max = Math.max(max, beauty);
    return;
  }

  for (let ij = start; ij < N * N; ij++) {
    const i = parseInt(ij / N);
    const j = ij % N;

    if (visited[i][j]) continue;

    for (let d = 0; d < 4; d++) {
      const [ni, nj] = [i + dx[d], j + dy[d]];
      if (ni < 0 || ni >= N || nj < 0 || nj >= N || visited[ni][nj]) continue;
      visited[i][j] = 1;
      visited[ni][nj] = 1;

      dfs(ij + 1, beauty + board[i][j] + board[ni][nj], count + 1);

      visited[i][j] = 0;
      visited[ni][nj] = 0;
    }
  }
}
