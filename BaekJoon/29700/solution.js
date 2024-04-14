// 우당탕탕 영화예매
// 1 초, 1024 MB
// 1 <= N <= 1000
// 1 <= M <= 5000
// 1 <= K <= 10

// 결과: 79836 KB, 384 ms

const fs = require("fs");
const fileContent = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = fileContent.shift().split(" ").map(Number);
const graph = fileContent.map((str) => str.split(""));

let answer = 0;
for (let r = 0; r < N; r++) {
  checkRow(graph[r]);
}

function checkRow(arr) {
  let count = 0;
  for (let i = 0; i < K; i++) {
    if (arr[i] === "0") count++;
  }
  if (count === K) answer++;

  for (let i = K; i < M; i++) {
    if (arr[i - K] === "0") count--;
    if (arr[i] === "0") count++;

    if (count === K) answer++;
  }
}
console.log(answer);
