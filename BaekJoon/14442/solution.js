const fs = require("fs");
const [numsInput, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const [N, M, K] = numsInput.split(" ").map(Number);
const board = input.map((line) => line.split("").map(Number));

const dp = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => new Array(K + 1).fill(Infinity))
);

function bfs() {
  const queue = [];
  queue.push([0, 0, 1, 0]);
  dp[0][0][0] = 1;

  while (queue.length > 0) {
    const [x, y, count, breakCount] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (board[nx][ny] === 0 && dp[nx][ny][breakCount] > count + 1) {
        dp[nx][ny][breakCount] = count + 1;
        queue.push([nx, ny, count + 1, breakCount]);
      }

      if (
        board[nx][ny] === 1 &&
        breakCount < K &&
        dp[nx][ny][breakCount + 1] > count + 1
      ) {
        dp[nx][ny][breakCount + 1] = count + 1;
        queue.push([nx, ny, count + 1, breakCount + 1]);
      }
    }
  }

  return -1;
}

console.log(bfs());
