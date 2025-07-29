// 가희와 여행가요

const fs = require("fs");
const [[n, Q], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.sort((a, b) => a[2] - b[2] || a[3] - b[3]);

const parents = Array.from({ length: n + 1 }, (_, i) => i);

const dist = Array.from({ length: n + 1 }, () => [1, 0, 0]); // count, cost, time
mst();

console.log(dist[1][0] < n ? -1 : `${dist[1][2]} ${dist[1][1]}`);

function mst() {
  for (const [from, to, cost, time] of input) {
    const fFrom = find(from);
    const fTo = find(to);

    if (fFrom === fTo) continue;

    let smaller = fFrom;
    let bigger = fTo;

    if (fFrom > fTo) {
      smaller = fTo;
      bigger = fFrom;
    }

    union(bigger, smaller);

    dist[smaller][0] += dist[bigger][0];
    dist[smaller][1] += cost + dist[bigger][1];
    dist[smaller][2] = Math.max(time, dist[bigger][2], dist[smaller][2]);

    if (dist[1][0] === n) break;
  }
}

function union(a, b) {
  const fa = find(a);
  const fb = find(b);

  parents[fa] = fb;
}
function find(a) {
  if (parents[a] !== a) parents[a] = find(parents[a]);
  return parents[a];
}
