// 나이트의 이동

const fs = require("fs");
const fileContent = fs.readFileSync("./input.txt").toString().split("\n");
const testCase = fileContent.shift();

const dx = [1, 1, 2, 2, -1, -1, -2, -2];
const dy = [2, -2, -1, 1, 2, -2, -1, 1];
for (let i = 0; i < testCase; i++) {
  const [I, start, goal] = fileContent.slice(i * 3, (i + 1) * 3);

  const answer = moveChess(
    +I,
    start.split(" ").map(Number),
    goal.split(" ").map(Number)
  );
  console.log(answer);
}

function moveChess(I, start, goal) {
  const board = Array.from({ length: I }, () =>
    Array.from({ length: I }, () => 0)
  );

  const queue = [[...start, 0]];
  let head = 0;

  while (queue.length > head) {
    const [targetX, targetY, count] = queue[head++];
    board[targetX][targetY] = 1;

    if (targetX === goal[0] && targetY === goal[1]) {
      return count;
    }
    for (let i = 0; i < 8; i++) {
      const nx = targetX + dx[i];
      const ny = targetY + dy[i];

      if (nx >= 0 && nx < I && ny >= 0 && ny < I && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
}
