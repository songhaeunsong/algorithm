const fs = require("fs");
const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const distance = K < N ? N - K : K - N;
const ways = new Array(distance + 1).fill(0);
const visited = new Array(100001).fill(-1);

let minTime = distance;

bfs(N);
console.log(`${minTime}\n${ways[minTime]}`);

function bfs(start) {
  const queue = [[start, 0]];
  let head = 0;

  let flag = false;
  visited[start] = 0;

  if (start === K) {
    minTime = 0;
    ways[minTime]++;
    return;
  }

  while (queue.length > head) {
    const [current, count] = queue[head++];

    const nextCount = count + 1;
    if (nextCount > minTime) continue;

    const next = [current + 1, current - 1, current * 2];

    for (const n of next) {
      if (isInRange(n)) {
        if (n === K) {
          ways[nextCount]++;

          if (!flag) {
            minTime = nextCount;
            flag = true;
          }
        } else if (visited[n] === -1 || visited[n] >= nextCount) {
          visited[n] = nextCount;
          queue.push([n, nextCount]);
        }
      }
    }
  }
}

function isInRange(coor) {
  if (coor < 0 || coor > 100000) return false;
  return true;
}
