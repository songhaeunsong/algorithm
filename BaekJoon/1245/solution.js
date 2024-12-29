const fs = require("fs");
const [[N, M], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dx = [0, 1, 0, -1, 1, 1, -1, -1];
const dy = [1, 0, -1, 0, 1, -1, 1, -1];
const visited = Array.from({ length: N }, () => new Array(M).fill(0));

let count = 0;

for (let target = 500; target > 0; target--) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && board[i][j] === target) {
        visited[i][j] = 1;
        bfs(i, j);
        count++;
      }
    }
  }
}

console.log(count);

function bfs(r, c) {
  const queue = [];
  queue.push([r, c]);
  visited[r][c] = 1;
  let head = 0;

  while (queue.length > head) {
    const [x, y] = queue[head++];
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;
      if (board[x][y] >= board[nx][ny]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}
