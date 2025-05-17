// 줄 세우기

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const edges = Array.from({ length: N + 1 }, () => []);
const indegree = new Array(N + 1).fill(0);
const queue = [];
const result = [];

for (const [first, second] of input) {
  edges[first].push(second);
  indegree[second]++;
}

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
  }
}

let head = 0;
while (queue.length > head) {
  const node = queue[head++];
  result.push(node);

  for (const next of edges[node]) {
    indegree[next]--;
    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(result.join(" "));
