// 초콜릿 보관함

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let startCase = 1;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
while (startCase < input.length) {
  const matrix = input.slice(startCase, startCase + 3);
  const response = input[startCase + 3];

  // 구현 시작
  function solution() {
    let chocolates = "";

    chocolates += matrix[0][0];

    let r = 0;
    let c = 1;
    let di = 0;

    while (r !== 0 || c !== 0) {
      chocolates += matrix[r][c];

      if (r + dx[di] > 2 || c + dy[di] > 2 || r + dx[di] < 0 || c + dy[di] < 0)
        di++;
      r += dx[di];
      c += dy[di];
    }

    let pieces = chocolates
      .split("X")
      .filter((str) => str.length > 0)
      .map((value) => value.length);

    if (pieces.length === 0) {
      return response === "0" ? 1 : 0;
    }

    if (
      pieces.length > 1 &&
      chocolates[0] === "O" &&
      chocolates[chocolates.length - 1] === "O"
    )
      pieces[0] += pieces.pop();

    return pieces.sort((a, b) => a - b).join(" ") === response.slice(2) ? 1 : 0;
  }

  console.log(solution());

  // 다음 테케

  startCase = startCase + 4;
}
