// 스타트링크

const fs = require("fs");
const [F, S, G, U, D] = fs
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map(Number);

const visited = new Array(F + 1).fill(0);
const dy = [U, D * -1];

function BFS(f) {
  const queue = [[f, 0]];
  visited[f] = 1;
  let head = 0;

  while (queue.length > head) {
    const [cntf, depth] = queue[head++];
    if (cntf === G) return depth;

    for (let i = 0; i < 2; i++) {
      const nf = cntf + dy[i];

      if (nf < 1 || nf > F || visited[nf]) continue;
      visited[nf] = 1;
      queue.push([nf, depth + 1]);
    }
  }

  return "use the stairs";
}

console.log(BFS(S));
