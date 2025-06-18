// 여행 가자

const fs = require("fs");
const [[N], [M], ...gragh] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const plans = gragh.pop();
const parents = Array.from({ length: N }, (_, i) => i);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (!gragh[i][j]) continue;
    const fi = find(i);
    const fj = find(j);
    if (fi !== fj) union(fi, fj);
  }
}

let parent = find(plans[0] - 1);
console.log(isPossiblePlan() ? "YES" : "NO");

function isPossiblePlan() {
  for (const p of plans) {
    if (parent !== find(p - 1)) return 0;
  }
  return 1;
}

function find(a) {
  if (a !== parents[a]) parents[a] = find(parents[a]);
  return parents[a];
}

function union(a, b) {
  const fa = find(a);
  const fb = find(b);
  parents[fa] = fb;
}
console.log(parents);
