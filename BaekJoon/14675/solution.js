// 단절점과 단절선

const fs = require("fs");
const fileContent = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const edgeNum = Number(fileContent[0]);
const edges = fileContent.slice(1, edgeNum);
const queries = fileContent.slice(edgeNum + 1);

const graph = Array.from({ length: edgeNum + 1 }, () => []);
edges.forEach((edge) => {
  const [from, to] = edge.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

let result = "";
queries.forEach((query) => {
  const [t, k] = query.split(" ").map(Number);
  if (t === 1) {
    result += graph[k].length > 1 ? "yes\n" : "no\n";
  } else {
    result += "yes\n";
  }
});

console.log(result);
