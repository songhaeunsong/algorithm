const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const prevBoard = input.slice(0, N);
const nextBoard = input.slice(N);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let C = 0;
let target = [-1, -1];

console.log(main() ? "YES" : "NO");

function main() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (prevBoard[i][j] !== nextBoard[i][j]) {
        if (C === 0) {
          C = nextBoard[i][j] - prevBoard[i][j];
          target[0] = i;
          target[1] = j;
        }
      }
    }
  }

  if (C === 0) return 1;

  bfs();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (prevBoard[i][j] !== nextBoard[i][j]) {
        return 0;
      }
    }
  }

  return 1;
}

function bfs() {
  const queue = [];
  let head = 0;
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  queue.push([...target]);
  visited[target[0]][target[1]] = 1;
  const targetNumber = prevBoard[target[0]][target[1]];
  prevBoard[target[0]][target[1]] += C;

  while (queue.length > head) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;

      if (prevBoard[nx][ny] === targetNumber) {
        visited[nx][ny] = 1;
        prevBoard[nx][ny] += C;
        queue.push([nx, ny]);
      }
    }
  }
}
