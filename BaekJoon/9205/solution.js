// 맥주 마시면서 걸어가기

const fs = require("fs");
const [t, ...input] = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;
for (let i = 0; i < +t; i++) {
  const n = +input[idx];
  const locations = input
    .slice(idx + 1, idx + n + 3)
    .map((i) => i.split(" ").map(Number))
    .sort((a, b) => a[0] - a[0]);

  idx += n + 3;

  console.log(main(n + 2, locations));
}

function main(n, locations) {
  const visited = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    visited[i][i] = 1;
  }

  const queue = [0];
  let head = 0;

  while (queue.length > head) {
    const idx = queue[head++];

    if (idx === n - 1) {
      return "happy";
    }

    for (let i = n - 1; i > 0; i--) {
      if (visited[idx][i]) continue;
      visited[idx][i] = 1;

      let dist =
        Math.abs(locations[idx][0] - locations[i][0]) +
        Math.abs(locations[idx][1] - locations[i][1]);

      if (dist > 1000) continue;

      if (i > 0 && i < n - 1) {
        dist %= 50;
      }

      queue.push(i);
    }
  }

  return "sad";
}
