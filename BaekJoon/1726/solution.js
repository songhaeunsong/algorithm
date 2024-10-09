const fs = require("fs");
const [[N, M], ...board] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [goalx, goaly, gdirection] = board.pop().map((i) => i - 1);
const [startx, starty, sdirection] = board.pop().map((i) => i - 1);

let min = Infinity;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const directionChanges = [
  [0, 2, 1, 1],
  [2, 0, 1, 1],
  [1, 1, 0, 2],
  [1, 1, 2, 0],
];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => new Array(4).fill(Infinity))
);

bfs();
console.log(min);

function bfs() {
  const queue = [[startx, starty, sdirection, 0]];
  let head = 0;

  visited[startx][starty][sdirection] = 0;

  while (queue.length > head) {
    const [x, y, d, count] = queue[head++];

    if (x === goalx && y === goaly && d === gdirection) {
      min = Math.min(min, count);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const ncount = count + directionChanges[d][i];
      if (visited[x][y][i] > ncount) {
        visited[x][y][i] = ncount;
        queue.push([x, y, i, ncount]);
      }
    }

    for (let j = 1; j <= 3; j++) {
      const [nx, ny] = [x + dx[d] * j, y + dy[d] * j];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || board[nx][ny]) break;

      if (visited[nx][ny][d] > count + 1) {
        visited[nx][ny][d] = count + 1;
        // console.log([x, y, d, count]);
        // console.log([nx, ny, d, count + 1]);
        queue.push([nx, ny, d, count + 1]);
      }
    }
  }
}
