// 가장 큰 정사각형

const fs = require("fs");
const [nums, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const board = input.map((line) => line.split("").map(Number));

const dx = [0, -1, -1];
const dy = [-1, -1, 0];

let maxRec = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let min = Infinity;

    if (board[i][j] === 0) continue;

    for (let di = 0; di < 3; di++) {
      const px = i + dx[di];
      const py = j + dy[di];
      if (px < 0 || py < 0 || board[px][py] === 0) {
        min = 0;
        break;
      }
      min = Math.min(min, board[px][py]);
    }

    if (min) board[i][j] = min + 1;
    maxRec = Math.max(maxRec, board[i][j]);
  }
}

console.log(maxRec * maxRec);
