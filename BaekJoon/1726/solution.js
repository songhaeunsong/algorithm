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

const visited = Array.from({ length: N }, () => new Array(M).fill(Infinity));

bfs();
console.log(min);

function bfs() {
  const queue = [[startx, starty, sdirection, 0]];
  let head = 0;

  visited[startx][starty] = 0;

  while (queue.length > head) {
    const [x, y, d, count] = queue[head++];

    if (x === goalx && y === goaly) {
      min = Math.min(min, count + directionChanges[d][gdirection]);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 3; j++) {
        const [nx, ny] = [x + dx[i] * j, y + dy[i] * j];
        const ncount = count + directionChanges[d][i] + 1;

        if (
          nx < 0 ||
          nx >= N ||
          ny < 0 ||
          ny >= M ||
          visited[nx][ny] <= ncount ||
          board[nx][ny]
        )
          break;

        visited[nx][ny] = ncount;

        queue.push([nx, ny, i, ncount]);
      }
    }
  }
}
