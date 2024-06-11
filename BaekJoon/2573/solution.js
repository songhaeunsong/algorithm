// 빙산 (BFS)
const fs = require("fs");
const [[N, M], ...matrix] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function bfs(x, y, targetVisited) {
  const queue = [[x, y]];
  visited[x][y]++;

  let head = 0;
  let seaCounts = [];

  while (queue.length > head) {
    const [cntX, cntY] = queue[head++];
    let seaCount = 0;

    for (let i = 0; i < 4; i++) {
      const nx = cntX + dx[i];
      const ny = cntY + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (visited[nx][ny] < targetVisited && matrix[nx][ny] !== 0) {
        visited[nx][ny]++;
        queue.push([nx, ny]);
      }
      if (matrix[nx][ny] === 0) seaCount++;
    }
    seaCounts.push(seaCount);
  }

  queue.forEach(([r, c], idx) => {
    matrix[r][c] - seaCounts[idx] < 0
      ? (matrix[r][c] = 0)
      : (matrix[r][c] -= seaCounts[idx]);
  });
}

function simulate() {
  let totalVisited = 0;

  while (1) {
    let icebergCount = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (matrix[i][j] !== 0 && visited[i][j] <= totalVisited) {
          bfs(i, j, totalVisited + 1);
          icebergCount++;
        }
      }
    }
    if (icebergCount > 1) return totalVisited;
    if (icebergCount === 0) return 0;
    else totalVisited++;
  }

  return 0;
}

console.log(simulate());
