// 캐슬 디펜스

const fs = require("fs");
const [[N, M, D], ...matrix] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const attackers = new Array(M).fill(0);
const caseLen = (M * (M - 1) * (M - 2)) / 6;
const attackCases = new Array(caseLen);
const newMatrix = new Array(M).fill(0);
let max = 0;
caseIdx = 0;

const dx = [0, -1, 0];
const dy = [-1, 0, 1];

backtracking(0, 0, 0);

for (const attackCase of attackCases) {
  const count = simulate(JSON.parse(JSON.stringify(matrix)), attackCase);
  max = Math.max(count, max);
}

console.log(max);

function backtracking(start, count) {
  if (count === 3) {
    attackCases[caseIdx++] = [...attackers];
    return;
  }
  for (let i = start; i < M; i++) {
    attackers[i] = 1;
    backtracking(i + 1, count + 1);
    attackers[i] = 0;
  }
}

function simulate(mtrx, attack) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    const died = new Set();
    for (let y = 0; y < M; y++) {
      if (attack[y]) {
        const queue = [];
        if (mtrx[N - 1][y]) {
          died.add(`[${N - 1},${y}]`);
          continue;
        }
        queue.push([N - 1, y, 1]);
        findEnemy(mtrx, queue, died);
      }
    }

    Array.from(died)
      .map(JSON.parse)
      .forEach(([r, c]) => {
        count++;
        mtrx[r][c] = 0;
      });

    mtrx.pop();
    mtrx.unshift([...newMatrix]);
  }
  return count;
}

function findEnemy(mtrx, queue, died) {
  while (queue.length) {
    const [x, y, depth] = queue.shift();

    if (depth >= D) return;

    for (let i = 0; i < 3; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (mtrx[nx][ny]) {
        died.add(`[${nx},${ny}]`);
        return;
      } else queue.push([nx, ny, depth + 1]);
    }
  }
}
