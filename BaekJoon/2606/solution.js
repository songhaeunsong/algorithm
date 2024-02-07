// 바이러스

let [N, E, ...edges] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n");
let graph = Array.from({ length: Number(N) + 1 }, () => []);
let visited = { 1: 1 };
let answer = 0;

for (let i = 0; i < Number(E); i++) {
  const [from, to] = edges[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function dfs(from) {
  for (let to of graph[from]) {
    if (!visited[to]) {
      visited[to] = 1;
      answer++;
      dfs(to);
    }
  }
}
dfs(1);
console.log(answer);
