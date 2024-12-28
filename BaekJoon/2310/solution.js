const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;
while (input[idx] !== "0") {
  const N = +input[idx];

  const edges = Array.from({ length: N + 1 }, () => []);
  const info = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= N; i++) {
    const [type, price, ...nexts] = input[idx + i].split(" ");
    nexts.pop();
    info[i] = [type, +price];
    edges[i] = nexts.map(Number);
  }

  console.log(main(info, edges, N));
  idx += N + 1;
}

function main(info, edges, N) {
  const visited = new Array(N + 1).fill(0);

  let isCompleted = false;
  const dfs = (node, currentPrice, count) => {
    if (isCompleted) return;
    if (count === N + 1) return;

    for (const nn of edges[node]) {
      if (visited[nn]) continue;

      const nextPrice = play(currentPrice, info[nn]);

      if (nextPrice < 0) continue;

      if (nn === N) {
        isCompleted = true;
        return 1;
      }

      visited[nn] = 1;
      dfs(nn, nextPrice, count + 1);
      visited[nn] = 0;
    }
  };

  const firstPrice = play(0, info[1]);
  visited[1] = 1;
  dfs(1, firstPrice, 0);

  return isCompleted ? "Yes" : "No";
}

function play(current, [type, price]) {
  let nextPrice = current;
  if (type === "L") {
    nextPrice = leprechaun(current, price);
  } else if (type === "T") {
    nextPrice = troll(current, price);
  }
  return nextPrice;
}
function leprechaun(current, price) {
  if (current > price) return current;
  return Math.min(current + price, price);
}

function troll(current, price) {
  return current - price;
}
