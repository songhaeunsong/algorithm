const fs = require("fs");
const [[N, M, B], ...matrix] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let min = Infinity;
let height = 0;

for (let goal = 0; goal <= 256; goal++) {
  let newCount = countBlock(goal, B);

  if (min >= newCount) {
    min = newCount;
    height = goal;
  }
}

function countBlock(goal, inventory) {
  let total = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (goal > matrix[x][y]) {
        inventory -= goal - matrix[x][y];
        total += goal - matrix[x][y];
      } else if (goal < matrix[x][y]) {
        inventory += matrix[x][y] - goal;
        total += (matrix[x][y] - goal) * 2;
      }
    }
  }
  return inventory < 0 ? Infinity : total;
}
console.log(`${min} ${height}`);
