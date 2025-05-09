const fs = require("fs");
const [[N, M], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let totalAmount = N * N;
let minTime = Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      totalAmount--;
    }
  }
}

combinate(0, 0);

console.log(minTime === Infinity ? -1 : minTime);

function combinate(start, count) {
  if (count === M) {
    bfs();
    return;
  }
  for (let ij = start; ij < N * N; ij++) {
    const i = parseInt(ij / N);
    const j = ij % N;

    if (board[i][j] === 2) {
      board[i][j] = 3;
      combinate(ij + 1, count + 1);
      board[i][j] = 2;
    }
  }
}

function bfs() {
  const queue = [];
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));

  let virusCount = M;

  let head = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 3) {
        queue.push([i, j, 0]);
        visited[i][j] = 1;
      }
    }
  }

  while (queue.length > head) {
    const [x, y, time] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny] === 1)
        continue;

      if (board[nx][ny] === 0 || board[nx][ny] === 2) {
        visited[nx][ny] = 1;
        virusCount++;
        queue.push([nx, ny, time + 1]);
      }
    }

    if (queue.length === head && virusCount === totalAmount) {
      minTime = Math.min(minTime, time);
    }
  }
}
