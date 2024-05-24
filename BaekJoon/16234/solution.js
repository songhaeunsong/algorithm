// 인구 이동

const fs = require("fs");
const [[N, L, R], ...populations] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function bfs(r, c, visited) {
  const queue = [[r, c]];
  let head = 0;
  let sum = 0;

  while (queue.length > head) {
    const [targetX, targetY] = queue[head++];

    sum += populations[targetX][targetY];

    for (let i = 0; i < 4; i++) {
      const nx = targetX + dx[i];
      const ny = targetY + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || visited[nx][ny]) continue;

      const diff = Math.abs(
        populations[targetX][targetY] - populations[nx][ny]
      );

      if (diff >= L && diff <= R) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  if (queue.length > 1) {
    const newPopulation = Math.floor(sum / queue.length);
    for (const [r, c] of queue) {
      populations[r][c] = newPopulation;
    }

    return 1;
  }
  return 0;
}

let open = 0;
let count = 0;
while (true) {
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => 0)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = 1;
        open += bfs(i, j, visited);
      }
    }
  }
  if (open === 0) break;

  open = 0;
  count++;
}

console.log(count);
