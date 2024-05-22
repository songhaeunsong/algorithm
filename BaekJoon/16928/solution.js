// 뱀과 사다리 게임

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ladders = input
  .slice(1, 1 + N)
  .map((line) => line.split(" ").map(Number));
const snakes = input.slice(1 + N).map((line) => line.split(" ").map(Number));
const board = new Array(101).fill(0);
const visited = new Array(101).fill(0);

for (const ladder of ladders) {
  board[ladder[0]] = ladder[1];
}

for (const snake of snakes) {
  board[snake[0]] = snake[1];
}

function bfs(start) {
  const queue = [[start, 0]];
  visited[start] = 1;
  let head = 0;

  while (queue.length > head) {
    const [end, depth] = queue[head++];
    if (end === 100) return depth;

    for (let i = 1; i <= 6; i++) {
      const next = end + i;
      if (next > 100 || visited[next]) continue;
      if (board[next]) {
        visited[next] = 1;
        visited[board[next]] = 1;
        queue.push([board[next], depth + 1]);
        continue;
      }
      visited[next] = 1;
      queue.push([next, depth + 1]);
    }
  }
}
const diceCount = bfs(1);
console.log(diceCount);
