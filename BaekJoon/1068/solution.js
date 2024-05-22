// 트리

const fs = require("fs");
const [N, input, D] = fs.readFileSync("./input.txt").toString().split("\n");
const nodes = input.split(" ").map(Number);
let startNode = 0;
const edges = Array.from({ length: +N }, () => []);
nodes.forEach((node, i) => {
  if (node === -1) {
    startNode = i;
    return;
  }
  if (i === +D) return;
  edges[node].push(i);
});

let leafCount = 0;
function search(node) {
  if (edges[node].length === 0) {
    leafCount++;
    return;
  }
  for (const next of edges[node]) search(next);
}

if (startNode !== +D) search(startNode);
console.log(leafCount);
