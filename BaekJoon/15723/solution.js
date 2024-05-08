// n단 논법
// 2 초, 128 MB
// n(2 ≤ n ≤ 26), m(1 ≤ m ≤ 10)

const fs = require("fs");
const inputLine = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = +inputLine[0];
const premises = inputLine.slice(1, N + 1);
const conclusions = inputLine.slice(N + 2);

const ALPHABET_SIZE = 26;

const graph = Array.from({ length: ALPHABET_SIZE }, () =>
  Array.from({ length: ALPHABET_SIZE }, () => 0)
);

for (const premise of premises) {
  const [fir, sec] = premise
    .split(" is ")
    .map((char) => char.charCodeAt(0) - 97);
  graph[fir][sec] = 1;
}

for (let k = 0; k < ALPHABET_SIZE; k++) {
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    for (let j = 0; j < ALPHABET_SIZE; j++) {
      if (i === j) continue;
      if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
    }
  }
}

for (const conclusion of conclusions) {
  const [fir, sec] = conclusion
    .split(" is ")
    .map((char) => char.charCodeAt(0) - 97);
  graph[fir][sec] ? console.log("T") : console.log("F");
}
