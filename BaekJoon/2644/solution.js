// 촌수계산

const fs = require("fs");
const [[N], [startNode, endNode], , ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
for (let edge of input) {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
}

let result = -1;
function dfs(start, parent, count) {
  for (let next of graph[start]) {
    if (next === endNode) {
      result = count + 1;
      return;
    }
    if (next === parent) {
      continue;
    }
    dfs(next, start, count + 1);
  }
  return result;
}

console.log(dfs(startNode, 0, 0));
