// 2178 미로 탐색

const fs = require("fs");
const [nums, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = nums.split(" ").map(Number);
let graph = [];
for (let str of input) {
  graph.push(str.split("").map(Number));
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (arr) => {
  let queue = [];
  queue.push({ x: 0, y: 0 });

  while (queue.length) {
    const target = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = target.x + dx[i];
      const nextY = target.y + dy[i];

      // 범위가 잘못된 경우
      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) {
        continue;
      }

      // 0인 경우 (길이 아님)
      if (arr[nextX][nextY] !== 1) {
        continue;
      }

      // 1인 경우
      arr[nextX][nextY] = arr[target.x][target.y] + 1;
      queue.push({ x: nextX, y: nextY });
    }
  }
  return arr[N - 1][M - 1];
};

const answer = bfs(graph);
console.log(answer);
