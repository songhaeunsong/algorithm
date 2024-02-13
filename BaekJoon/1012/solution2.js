// 유기농 배추 DFS 풀이

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
      dfs(i, j);
    }
    if (j === -1) i++;
  }

  function dfs(x, y) {
    if (x < 0 || x >= M || y < 0 || y >= N || graph[x][y] !== 1) {
      return;
    }

    graph[x][y] = 0;

    for (let k = 0; k < 4; k++) {
      dfs(x + dx[k], y + dy[k]);
    }
  }
  console.log(answer);
}
