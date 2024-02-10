// 다리 놓기

const fs = require("fs");

const [caseLength, ...fileContent] = fs
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");

const input = fileContent.map((line) => line.split(" ").map(Number));

const dp = Array(30)
  .fill(1)
  .map(() => Array(30).fill(1));

for (let row = 1; row < 30; row++) {
  for (let col = row + 1; col < 30; col++) {
    dp[row][col] = row === 1 ? col : dp[row][col - 1] + dp[row - 1][col - 1];
  }
}

input.forEach((i) => console.log(dp[i[0]][i[1]]));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const graph = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);

for (let content of input) {
  const [x, y] = content어쩌고;
  graph[x][y] = 1;
}

const queue = [];
queue.push([0, 0]);

while (queue.length) {
  const [targeX, targetY] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nextX = targetX + dx[i];
    const nextY = target + dy[i];

    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
    if (graph[nextX][nextY] !== 1) continue;

    graph[nextX][nextY] = 어쩌구; // 지났다는 표시
    queue.push([nextX, nextY]);
  }
}
return 어쩌구;
