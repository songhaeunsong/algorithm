// 경쟁적 전염

const fs = require("fs");
const [[N, K], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [S, X, Y] = input.pop();

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from({ length: N }, () => new Array(N).fill(0));
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] !== 0) {
      visited[i][j] = 1;
      queue.push([i, j, input[i][j], 0]);
    }
  }
}

bfs();
console.log(input[X - 1][Y - 1]);

function bfs() {
  queue.sort((a, b) => a[2] - b[2]);
  let head = [];

  while (queue.length > head) {
    const [x, y, virusNumber, time] = queue[head++];

    if (time === S) return;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N || visited[nx][ny]) continue;
      visited[nx][ny] = 1;
      input[nx][ny] = virusNumber;
      queue.push([nx, ny, virusNumber, time + 1]);
    }
  }
}
