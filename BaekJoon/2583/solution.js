// 영역 구하기

const fs = require("fs");
const [nums, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const [M, N, k] = nums.split(" ").map(Number);

const graph = Array.from({ length: M }, () =>
  Array.from({ length: N }, () => 0)
);
for (let coordinate of input) {
  const [startX, startY, endX, endY] = coordinate.split(" ").map(Number);
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) graph[y][x] = 1;
  }
}

let answer = 0;
let areas = [];
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs(x, y) {
  const queue = [];
  let area = 0;
  queue.push([x, y]);

  while (queue.length) {
    const [targetX, targetY] = queue.shift();

    if (!graph[targetX][targetY]) {
      graph[targetX][targetY] = 1;
      area++;

      for (let i = 0; i < 4; i++) {
        const nextX = targetX + dx[i];
        const nextY = targetY + dy[i];

        if (nextX >= M || nextX < 0 || nextY >= N || nextY < 0) continue;
        if (graph[nextX][nextY] === 1) continue;
        queue.push([nextX, nextY]);
      }
    }
  }
  answer++;
  areas.push(area);
}

for (let x = 0; x < M; x++) {
  for (let y = 0; y < N; y++) {
    if (graph[x][y] === 0) bfs(x, y);
  }
}

console.log(answer);
console.log(areas.sort((a, b) => a - b).join(" "));
