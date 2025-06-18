// 빌런 호석

const fs = require("fs");
const [N, K, P, x] = fs.readFileSync(0).toString().trim().split(" ");

const X = x.padStart(K, "0");

const lights = [
  [0, 1, 1, 1, 1, 1, 1], // 0
  [0, 0, 1, 1, 0, 0, 0], // 1
  [1, 1, 1, 0, 1, 1, 0], // 2
  [1, 1, 1, 1, 1, 0, 0], // 3
  [1, 0, 1, 1, 0, 0, 1], // 4
  [1, 1, 0, 1, 1, 0, 1], // 5
  [1, 1, 0, 1, 1, 1, 1], // 6
  [0, 1, 1, 1, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 1, 1, 0, 1], // 9
];

const changes = Array.from({ length: 10 }, () => new Array(10).fill(0));

for (let i = 0; i < 10; i++) {
  for (let j = i + 1; j < 10; j++) {
    let count = 0;
    for (let k = 0; k < 7; k++) {
      if (lights[i][k] !== lights[j][k]) count++;
    }

    changes[i][j] = count;
    changes[j][i] = count;
  }
}

let totalCount = 0;
backtracking(0, +P, []);
console.log(totalCount);

function backtracking(round, remain, changed) {
  if (round === +K) {
    const changedNum = +changed.join("");
    if (changedNum <= +N && changedNum !== +X && changedNum > 0) {
      totalCount++;
    }

    return;
  }

  const current = +X[round];

  for (let i = 0; i < 10; i++) {
    if (round === 0 && i > +N[0]) continue;

    if (remain >= changes[current][i]) {
      backtracking(round + 1, remain - changes[current][i], [...changed, i]);
    }
  }
}
