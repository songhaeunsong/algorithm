const fs = require("fs");
const [[N, _], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const fanSet = new Set();
input.pop().forEach((fan) => fanSet.add(fan));
input.pop();

const edges = Array.from({ length: N + 1 }, () => []);

for (const [from, to] of input) {
  edges[from].push(to);
}

const visited = new Array(N + 1).fill(0);
let isWay = false;

visited[1] = 1;
if (!fanSet.has(1)) dfs(1);

function dfs(node) {
  if (isWay) return;

  if (!edges[node].length) {
    isWay = true;
    return;
  }

  for (const next of edges[node]) {
    if (fanSet.has(next) || visited[next]) continue;
    visited[next] = 1;
    dfs(next);
  }
}
console.log(isWay ? "yes" : "Yes");
