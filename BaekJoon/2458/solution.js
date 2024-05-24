// 키 순서

const fs = require("fs");
const [[N, _], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const tallerStudents = Array.from({ length: N + 1 }, () => []);
const shorterStudents = Array.from({ length: N + 1 }, () => []);

for (const [short, tall] of input) {
  tallerStudents[short].push(tall);
  shorterStudents[tall].push(short);
}

function tallDFS(node, visited) {
  let count = 1;
  for (const taller of tallerStudents[node]) {
    if (!visited[taller]) {
      visited[taller] = 1;
      count += tallDFS(taller, visited);
    }
  }
  return count;
}

function shortDFS(node, visited) {
  let count = 1;
  for (const shorter of shorterStudents[node]) {
    if (!visited[shorter]) {
      visited[shorter] = 1;
      count += shortDFS(shorter, visited);
    }
  }
  return count;
}

let knownRankCount = 0;
for (let i = 1; i <= N; i++) {
  const visited = new Array(N + 1).fill(0);
  visited[i] = 1;
  const tallerSum = tallDFS(i, visited);
  const shorterSum = shortDFS(i, visited);
  if (tallerSum + shorterSum - 1 === N) {
    knownRankCount++;
  }
}

console.log(knownRankCount);
