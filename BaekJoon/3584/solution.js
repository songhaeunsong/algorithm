const fs = require("fs");
const fileContents = fs.readFileSync(0).toString().trim().split("\n");

const T = +fileContents[0];
let idx = 1;

for (let i = 0; i < T; i++) {
  const N = +fileContents[idx++];
  const edges = new Array(N + 1).fill(0);
  for (let j = idx; j < idx + N - 1; j++) {
    const [parent, node] = fileContents[j].split(" ").map(Number);
    edges[node] = parent;
  }
  idx += N;
  const [node1, node2] = fileContents[idx - 1].split(" ").map(Number);
  console.log(findParent(node1, node2, edges, N));
}

function findParent(n1, n2, edges, nodes) {
  const visited = new Array(nodes + 1).fill(0);
  visited[n1] = 1;

  while (n1) {
    visited[n1] = 1;
    n1 = edges[n1];
  }

  while (n2) {
    if (visited[n2]) return n2;
    n2 = edges[n2];
  }
}
