const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const adj = Array.from({ length: n + 1 }, () => []);
const adjR = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [x, y] = input.shift().split(" ").map(Number);
  adj[x].push(y);
  adjR[y].push(x);
}

const [s, t] = input.shift().split(" ").map(Number);

const fromS = new Array(n + 1).fill(0);
fromS[t] = 1;
dfs(s, adj, fromS);

const fromT = new Array(n + 1).fill(0);
fromT[s] = 1;
dfs(t, adj, fromT);

const toS = new Array(n + 1).fill(0);
dfs(s, adjR, toS);

const toT = new Array(n + 1).fill(0);
dfs(t, adjR, toT);

let count = 0;
for (let i = 1; i <= n; i++) {
  if (fromS[i] === 1 && fromT[i] === 1 && toS[i] === 1 && toT[i] === 1) {
    count++;
  }
}

console.log(count - 2);

function dfs(now, adj, visit) {
  if (visit[now] === 1) return;
  visit[now] = 1;
  for (const next of adj[now]) {
    dfs(next, adj, visit);
  }
}
