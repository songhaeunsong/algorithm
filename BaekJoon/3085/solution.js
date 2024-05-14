// 사탕 게임 (실버2) (브루트포스, 백트래킹)
// 1 초	128 MB
//  (3 ≤ N ≤ 50)

const fs = require("fs");
const inputLines = fs.readFileSync(0).toString().trim().split("\n");
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
    let valueOfRow = 1;
    let keyOfRow = graph[i][0];
    let valueOfColumn = 1;
    let keyOfColumn = graph[0][i];
    for (let j = 1; j < N; j++) {
      if (graph[i][j] === keyOfRow) valueOfRow++;
      else {
        keyOfRow = graph[i][j];
        maxLength = Math.max(maxLength, valueOfRow);
        valueOfRow = 1;
      }
      if (graph[j][i] === keyOfColumn) valueOfColumn++;
      else {
        keyOfColumn = graph[j][i];
        maxLength = Math.max(maxLength, valueOfColumn);
        valueOfColumn = 1;
      }
    }
    maxLength = Math.max(maxLength, valueOfColumn, valueOfRow);
  }
  return maxLength;
}
