// 작업

const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = Array.from({ length: N }, () => []);
const works = Array.from({ length: N }, () => new Array(2).fill(-1)); // 시간과 선행 작업 개수
const times = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  works[i][0] = input[i][0]; // 시간
  works[i][1] = input[i][1]; // 선행 작업 수
  if (i === 0) continue;
  for (let j = 2; j < input[i].length; j++) {
    edges[input[i][j] - 1].push(i);
  }
}
const queue = [];
let head = 0;
let totalTime = 0;
works.forEach(([time, count], idx) => {
  if (count === 0) {
    queue.push([idx, time]);
  }
});

while (queue.length > head) {
  const [work, timeSum] = queue[head++];
  totalTime = Math.max(timeSum, totalTime);

  for (const next of edges[work]) {
    let count = --works[next][1];
    let time = works[next][0];
    times[next].push(timeSum);
    if (count === 0) {
      queue.push([next, Math.max(...times[next]) + time]);
    }
  }
}
console.log(totalTime);
