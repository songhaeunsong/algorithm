// 게임 개발

const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = Array.from({ length: N }, () => []);
const indegrees = new Array(N).fill(0);
const weights = new Array(N).fill(0);
const result = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const time = input[i][0];
  weights[i] = time;

  for (let j = 1; j < input[i].length - 1; j++) {
    const node = input[i][j] - 1;
    edges[node].push(i);
    indegrees[i]++;
  }
}

const queue = [];
let head = 0;

indegrees.forEach((indegree, idx) => {
  if (indegree === 0) {
    queue.push(idx);
    result[idx] = weights[idx];
  }
});

while (queue.length > head) {
  const n = queue[head++];

  for (const nn of edges[n]) {
    indegrees[nn]--;
    result[nn] = Math.max(result[nn], result[n] + weights[nn]);
    if (indegrees[nn] === 0) {
      queue.push(nn);
    }
  }
}

console.log(result.join("\n"));
