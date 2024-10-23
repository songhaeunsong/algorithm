const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const child = Array.from({ length: n + 1 }, () => []);
const sz = new Array(n + 1).fill(0);
const pre = [0, ...input[1].split(" ").map(Number)];

for (let i = 2; i <= n; i++) {
  child[pre[i]].push(i);
}

for (let i = 2; i <= m + 1; i++) {
  const [index, weight] = input[i].split(" ").map(Number);
  sz[index] += weight;
}

function dfs(cur) {
  for (let nxt of child[cur]) {
    sz[nxt] += sz[cur];
    dfs(nxt);
  }
}

dfs(1);

console.log(sz.slice(1).join(" "));
