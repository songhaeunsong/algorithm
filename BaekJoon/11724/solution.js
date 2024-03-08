// 연결 요소의 개수

const fs = require("fs");
const [test, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = test.split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = {};
let answer = 0;

for (let str of input) {
  const [from, end] = str.split(" ").map(Number);

  graph[from].push(end);
  graph[end].push(from);
}

function dfs(parent, node) {
  for (let next of graph[node]) {
    if (next !== parent && !visited[next]) {
      visited[next] = 1;
      dfs(node, next);
    }
  }
}

for (let node = 1; node <= N; node++) {
  if (!visited[node]) {
    dfs(0, node);
    answer++;
  }
}

console.log(answer);
