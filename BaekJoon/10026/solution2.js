// 적록색약 (BFS 풀이)

const fs = require("fs");
const [N, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const graph = input.map((str) => str.split(""));
let count = 0;
let daltonismCount = 0;
const visited = Array.from({ length: +N }, () =>
  Array.from({ length: +N }, () => 0)
);

const queue = [];
let head = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function BFS(type) {
  while (queue.length > head) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= +N || ny < 0 || ny >= +N || visited[nx][ny] === 1)
        continue;

      if (graph[nx][ny] === type[0] || graph[nx][ny] === type[1]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (!visited[r][c]) {
      queue.push([r, c]);
      BFS([graph[r][c], graph[r][c]]);
      count++;
    }
  }
}

visited.forEach((row) => row.fill(0)); // visited 초기화

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (!visited[r][c]) {
      queue.push([r, c]);
      if (graph[r][c] === "B") BFS(["B", "B"]);
      else BFS(["R", "G"]);
      daltonismCount++;
    }
  }
}

console.log(`${count} ${daltonismCount}`);
