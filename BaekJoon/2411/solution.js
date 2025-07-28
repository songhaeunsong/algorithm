// 아이템 먹기

const fs = require("fs");
const [[N, M, A, B], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const board = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
let answer = 1;
const dx = [0, 1];
const dy = [1, 0];

const items = input.slice(0, A).sort((a, b) => a[0] - b[0] || a[1] - b[1]);

for (let i = A; i < input.length; i++) {
  board[input[i][0]][input[i][1]] = -1;
}

items.unshift([1, 1]);
items.push([N, M]);

for (let i = 0; i <= A; i++) {
  answer *= findRoutes(...items[i], ...items[i + 1]);
}

console.log(answer);

function findRoutes(sx, sy, ex, ey) {
  let count = 0;
  const queue = [[sx, sy]];
  let head = 0;

  while (queue.length > head) {
    const [x, y] = queue[head++];

    if (x === ex && y === ey) {
      count++;
      continue;
    }

    for (let i = 0; i < 2; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx > ex || ny > ey || board[nx][ny] === -1) continue;
      queue.push([nx, ny]);
    }
  }
  return count;
}
