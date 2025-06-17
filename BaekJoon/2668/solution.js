const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
const N = input[0];
input[0] = 0;
const visited = new Array(N + 1).fill(0);
const contained = new Array(N + 1).fill(0);

let totalCount = 0;
for (let i = 1; i <= N; i++) {
  if (contained[i] || visited[i]) continue;

  visited[i] = 1;
  dfs(input[i], [i]);
  visited[i] = 0;
}

const answer = [
  totalCount,
  ...contained.reduce((acc, cur, i) => {
    if (cur) acc.push(i);
    return acc;
  }, []),
];

console.log(answer.join("\n"));

function dfs(start, nodes) {
  if (start === nodes[0]) {
    nodes.forEach((node) => {
      contained[node] = 1;
    });
    totalCount += nodes.length;
    return;
  }
  if (visited[start]) return;

  visited[start] = 1;
  dfs(input[start], [...nodes, start]);
  visited[start] = 0;
}
