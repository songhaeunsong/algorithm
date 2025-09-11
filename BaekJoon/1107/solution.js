// https://www.acmicpc.net/problem/1107

const fs = require("fs");
const [goal, N, notWorkingOnes] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let min = Math.abs(goal - 100);
const goalLen = goal.toString().length;

const notWorkingOnesSet = new Set();

if (N > 0) {
  for (const nwo of notWorkingOnes) {
    notWorkingOnesSet.add(nwo);
  }
}

const workingOnes = [];

for (let i = 0; i <= 9; i++) {
  if (!notWorkingOnesSet.has(i)) workingOnes.push(i);
}

console.log(simulate());

function simulate() {
  if (min === 0 || workingOnes.length === 0) return min;
  backtracking([]);

  return min;
}

function backtracking(arr) {
  if (arr.length) {
    const currentNumber = +arr.join("");
    min = Math.min(min, Math.abs(currentNumber - goal) + arr.length);

    if (currentNumber >= goal || arr.length > goalLen) return;
  }

  for (const wo of workingOnes) {
    backtracking([...arr, wo]);
  }
}
