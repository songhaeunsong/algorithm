// 호석이 두 마리 치킨
// 1 초, 512 MB
// 2 ≤ N ≤ 100
// N-1 ≤ M ≤ N×(N - 1)/2

const fs = require("fs");
const [[N, M], ...edges] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const distanceMatrix = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => Infinity)
);

for (let i = 1; i <= N; i++) {
  distanceMatrix[i][i] = 0;
}

for (const [from, to] of edges) {
  distanceMatrix[from][to] = 1;
  distanceMatrix[to][from] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      const target = distanceMatrix[i][k] + distanceMatrix[k][j];
      if (target < distanceMatrix[i][j]) distanceMatrix[i][j] = target;
    }
  }
}

let firstLocation = 1;
let secondLocation = 2;
let minRoundTrip = Infinity;

for (let fir = 1; fir < N; fir++) {
  for (let sec = fir + 1; sec <= N; sec++) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      sum += 2 * Math.min(distanceMatrix[fir][i], distanceMatrix[sec][i]);
    }
    if (minRoundTrip > sum) {
      minRoundTrip = sum;
      firstLocation = fir;
      secondLocation = sec;
    }
  }
}

console.log(`${firstLocation} ${secondLocation} ${minRoundTrip}`);
