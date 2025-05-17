// 네트워크 연결

const fs = require("fs");
const [[N], [M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const parents = Array.from({ length: N + 1 }, (_, i) => i);
let sum = 0;
let connected = 0;

input.sort((a, b) => a[2] - b[2]);

console.log(main());

function main() {
  for (const [from, to, cost] of input) {
    const fa = find(from);
    const fb = find(to);

    if (fa !== fb) {
      connected++;
      sum += cost;
      union(from, to);
    }

    if (connected === N - 1) return sum;
  }
}

function union(a, b) {
  const fa = find(a);
  const fb = find(b);

  if (fa !== fb) parents[fa] = fb;
}

function find(a) {
  if (parents[a] !== a) parents[a] = find(parents[a]);
  return parents[a];
}
