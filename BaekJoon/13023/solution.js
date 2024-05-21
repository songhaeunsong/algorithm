// ABCDE

const fs = require("fs");
const [[n, _], ...inputs] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = Array.from({ length: n }, () => []);

for (const input of inputs) {
  const [from, to] = input;
  edges[from].push(to);
  edges[to].push(from);
}

function dfs(node, visited, depth) {
  if (depth === 5) return true;
  for (const next of edges[node]) {
    if (!visited[next]) {
      visited[next] = 1;

      const pathExists = dfs(next, visited, depth + 1);
      if (pathExists) return true;

      visited[next] = 0;
    }
  }
  return false;
}

let pathFound = false;

for (let i = 0; i < n; i++) {
  const newVisited = new Array(n).fill(0);
  newVisited[i] = 1;

  pathFound = dfs(i, newVisited, 1);
  if (pathFound) break;

  newVisited[i] = 0;
}
pathFound ? console.log(1) : console.log(0);
