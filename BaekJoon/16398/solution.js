const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (input[i][j] > 0) {
      edges.push([input[i][j], i, j]);
    }
  }
}

edges.sort((a, b) => a[0] - b[0]);

const parent = Array.from({ length: N }, (_, index) => index);
const rank = Array(N).fill(0);
let minCost = 0;
let edgesUsed = 0;

for (const [cost, u, v] of edges) {
  if (union(parent, rank, u, v)) {
    minCost += cost;
    edgesUsed += 1;
    if (edgesUsed === N - 1) break;
  }
}

console.log(minCost);

function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, rank, x, y) {
  const fx = find(parent, x);
  const fy = find(parent, y);

  if (fx !== fy) {
    if (rank[fx] > rank[fy]) {
      parent[fy] = fx;
    } else if (rank[fx] < rank[fy]) {
      parent[fx] = fy;
    } else {
      parent[fy] = fx;
      rank[fx]++;
    }
    return true;
  }
  return false;
}
