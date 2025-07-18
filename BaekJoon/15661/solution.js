// 링크와 스타트

const fs = require("fs");
const [[N], ...synergies] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let min = Infinity;

const team = new Array(N).fill(0);
team[0] = 1;

combinate(1, 1);
console.log(min);

function combinate(start, count) {
  if (count === N - 1) return;

  for (let i = start; i < N; i++) {
    team[i] = 1;
    const gap = compareAbility();
    min = Math.min(gap, min);
    combinate(i + 1, count + 1);
    team[i] = 0;
  }
}

function compareAbility() {
  let sumOfLink = 0;
  let sumOfStart = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (team[i] === 1 && team[j] === 1) {
        sumOfStart += synergies[i][j] + synergies[j][i];
        continue;
      }
      if (team[i] === 0 && team[j] === 0) {
        sumOfLink += synergies[i][j] + synergies[j][i];
        continue;
      }
    }
  }

  return Math.abs(sumOfLink - sumOfStart);
}
