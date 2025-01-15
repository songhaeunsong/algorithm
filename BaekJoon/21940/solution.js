const fs = require("fs");
const [[N, _], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const cities = input.pop();
input.pop();
const map = {};
let minCityX = -1;
let minCost = Infinity;

const costs = Array.from({ length: N + 1 }, () =>
  new Array(N + 1).fill(Infinity)
);

for (let i = 0; i < N + 1; i++) {
  costs[i][i] = 0;
}

for (const [from, to, cost] of input) {
  costs[from][to] = cost;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (costs[i][k] !== Infinity && costs[k][j] !== Infinity)
        costs[i][j] = Math.min(costs[i][j], costs[i][k] + costs[k][j]);
    }
  }
}

for (let i = 1; i <= N; i++) {
  let max = 0;
  let cityX = -1;

  for (let j of cities) {
    if (max < costs[i][j] + costs[j][i]) {
      max = costs[i][j] + costs[j][i];
      cityX = i;
    }
  }
  if (max !== Infinity && minCost >= max) {
    if (!map[max]) map[max] = [];
    map[max].push(cityX);

    minCost = max;
    minCityX = cityX;
  }
}

const minKey = Object.keys(map).sort((a, b) => a - b);
console.log(map[minKey[0]].join(" "));
