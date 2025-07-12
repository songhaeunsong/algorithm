// 숫자 정사각형

const fs = require("fs");
const [nums, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);

const board = input.map((i) => i.split("").map(Number));
let max = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const start = board[i][j];
    for (let k = i + 1; k < N; k++) {
      const l = k - i;

      if (j + l >= M) continue;

      const set = new Set();
      set.add(board[i][j]);
      set.add(board[k][j]);
      set.add(board[i][j + l]);
      set.add(board[k][j + l]);

      if (set.size === 1) {
        max = Math.max(max, (l + 1) * (l + 1));
      }
    }
  }
}

console.log(max);
