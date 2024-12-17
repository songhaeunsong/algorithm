const fs = require("fs");
const [[N, M], [s, e], ...bridges] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

bridges.sort((a, b) => b[2] - a[2]);

let flag = false;
const parent = Array.from({ length: N + 1 }, (_, i) => i);

const find = (x) => {
  if (parent[x] !== x) parent[x] = find(parent[x]);
  return parent[x];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) parent[rootB] = rootA;
};

for (const [h1, h2, k] of bridges) {
  union(h1, h2);

  if (find(s) === find(e)) {
    flag = true;
    console.log(k);
    break;
  }
}

if (!flag) console.log(0);
