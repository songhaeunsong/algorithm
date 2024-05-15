const fs = require("fs");
const [N, K] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const survived = new Array(N).fill(0);
let head = 0;
for (let i = 0; i < N; i++) {
  survived[i] = i + 1;
}

while (survived.length > K + head) {
  let start = survived[head];
  head++;
  survived.push(start);

  for (let i = 0; i < K - 1; i++) {
    head++;
  }
}

console.log(survived[head]);
