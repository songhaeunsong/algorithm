const fs = require("fs");
const [nums, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);
const board = Array.from({ length: N }, () => []);
const goal = Array.from({ length: M }, () => []);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let count = 0;

for (let i = 0; i < N; i++) {
  board[i] = input[i].split(" ").map(Number);
}

for (let i = N; i < input.length; i++) {
  goal[i - N] = input[i].split(" ").map(Number);
}

board[goal[0][0] - 1][goal[0][1] - 1] = 1;
backtracking(1, goal[0][0] - 1, goal[0][1] - 1);

console.log(count);

function backtracking(next, x, y) {
  if (next === M) {
    count++;
    return;
  }

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny]) continue;

    board[nx][ny] = 1;
    if (nx === goal[next][0] - 1 && ny === goal[next][1] - 1) {
      backtracking(next + 1, nx, ny);
    } else backtracking(next, nx, ny);

    board[nx][ny] = 0;
  }
}
