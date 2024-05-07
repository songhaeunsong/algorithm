// 경로 찾기
// 1초, 256MB

const fs = require("fs");
const [[N], ...graph] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let k = 0; k < graph.length; k++) {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][k] === 1 && graph[k][j] === 1) graph[i][j] = 1;
    }
  }
}

console.log(graph.map((arr) => arr.join(" ")).join("\n"));
