// 유기농 배추 BFS 풀이

const fs = require("fs");
const [testCase, ...fileContent] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

let nextCase = 0;
for (let i = 0; i < Number(testCase); i++) {
  const [M, N, amount] = fileContent[nextCase].split(" ").map(Number);
  const coordinates = fileContent.slice(nextCase + 1, nextCase + 1 + amount);

  main(M, N, coordinates);

  nextCase = nextCase + 1 + amount;
}

function main(M, N, coordinates) {
  let answer = 0;
  const graph = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => 0)
  );

  for (let coordinate of coordinates) {
    const [x, y] = coordinate.split(" ").map(Number);
    graph[x][y] = 1;
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let i = 0;
  let j = -1;
  while (i < M) {
    j = graph[i].indexOf(1);
    if (j !== -1) {
      answer++;
      bfs(i, j);
    }
    if (j === -1) i++;
  }

  function bfs(startX, startY) {
    let queue = [];
    queue.push({ x: startX, y: startY });
    graph[startX][startY] = 0;

    while (queue.length) {
      const target = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = target.x + dx[i];
        const nextY = target.y + dy[i];

        if (nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) {
          continue;
        }

        if (graph[nextX][nextY] !== 1) {
          continue;
        }
        graph[nextX][nextY] = 0;
        queue.push({ x: nextX, y: nextY });
      }
    }
  }
  console.log(answer);
}
