const fs = require("fs");
const [[N, M], ...edges] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dist = new Array(N + 1).fill(Infinity);

dist[1] = 0;
let flag = 0;
for (let v = 0; v < N; v++) {
  for (const [from, to, cost] of edges) {
    if (dist[from] + cost < dist[to]) {
      dist[to] = dist[from] + cost;
      if (v === N - 1) {
        flag = true;
      }
    }
  }
}

const answer = [];
for (let i = 2; i <= N; i++) {
  if (dist[i] === Infinity) {
    dist[i] = -1;
  }
  answer.push(dist[i]);
}

console.log(flag ? -1 : answer.join("\n"));
