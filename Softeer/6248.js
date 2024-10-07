const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let adj = new Map();
let adjR = new Map();

for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  if (!adj.has(x)) adj.set(x, []);
  if (!adjR.has(y)) adjR.set(y, []);
  adj.get(x).push(y);
  adjR.get(y).push(x);
}

let [s, t] = input[m + 1].split(" ").map(Number);

let fromS = new Array(n + 1).fill(0);
let fromT = new Array(n + 1).fill(0);
let toS = new Array(n + 1).fill(0);
let toT = new Array(n + 1).fill(0);

fromS[t] = 1;
dfs(s, adj, fromS);

fromT[s] = 1;
dfs(t, adj, fromT);

dfs(s, adjR, toS);
dfs(t, adjR, toT);

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (fromS[i] === 1 && fromT[i] === 1 && toS[i] === 1 && toT[i] === 1) {
    cnt++;
  }
}

console.log(cnt - 2);

function dfs(start, adjMap, visit) {
  let stack = [start];
  while (stack.length > 0) {
    let now = stack.pop();
    if (visit[now] === 1) continue;
    visit[now] = 1;
    if (adjMap.has(now)) {
      for (let next of adjMap.get(now)) {
        if (visit[next] === 0) {
          stack.push(next);
        }
      }
    }
  }
}
