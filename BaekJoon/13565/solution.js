// N과 M (2)

const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const answer = [];
backtracking(1, []);

console.log(answer.join("\n"));

function backtracking(start, arr) {
  if (arr.length === M) {
    answer.push(arr.join(" "));
    return;
  }
  for (let i = start; i <= N; i++) {
    backtracking(i + 1, [...arr, i]);
  }
}
