// 알래스카

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let idx = 0;

const answer = [];
while (input[idx] !== 0) {
  const N = input[idx];
  const chargingStations = input
    .slice(idx + 1, idx + N + 1)
    .sort((a, b) => a - b);
  const isPossible = main(N, chargingStations);
  answer.push(isPossible ? "POSSIBLE" : "IMPOSSIBLE");
  idx += N + 1;
}

console.log(answer.join("\n"));

function main(N, chargingStations) {
  if (chargingStations[0] > 200 || chargingStations.at(-1) < 1322) return 0;
  for (let i = 0; i < N - 1; i++) {
    if (!(chargingStations[i] + 200 >= chargingStations[i + 1])) return 0;
  }

  return 1;
}
