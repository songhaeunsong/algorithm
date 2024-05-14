// 사탕 게임 (실버2) (브루트포스, 백트래킹)
// 1 초	128 MB
//  (3 ≤ N ≤ 50)

const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = +inputLines.shift();
const input = inputLines.map((row) => row.split(""));

let maxCandies = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    swap(i, j, i, j + 1);
    const horizontal = countMaxLength(input);
    swap(i, j, i, j + 1);

    swap(j, i, j + 1, i);
    const vertical = countMaxLength(input);
    swap(j, i, j + 1, i);

    maxCandies = Math.max(horizontal, vertical, maxCandies);
  }
}
console.log(maxCandies);

function swap(r1, c1, r2, c2) {
  const temp = input[r1][c1];
  input[r1][c1] = input[r2][c2];
  input[r2][c2] = temp;
}

function countMaxLength(graph) {
  let maxLength = 0;

  for (let i = 0; i < N; i++) {
    let rowCount = 1;
    let colCount = 1;

    for (let j = 1; j < N; j++) {
      // 행 검사
      if (graph[i][j] === graph[i][j - 1]) {
        rowCount++;
      } else {
        maxLength = Math.max(maxLength, rowCount);
        rowCount = 1;
      }

      // 열 검사
      if (graph[j][i] === graph[j - 1][i]) {
        colCount++;
      } else {
        maxLength = Math.max(maxLength, colCount);
        colCount = 1;
      }
    }

    maxLength = Math.max(maxLength, rowCount, colCount);
  }

  return maxLength;
}
