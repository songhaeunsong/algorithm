// 모든 순열
// 제한: 1초, 256MB
// N(1 ≤ N ≤ 8)

const fs = require("fs");
const N = +fs.readFileSync("./input.txt").toString().trim();

const visited = Array.from({ length: N + 1 }, () => 0);
const result = [];
function backtracking(combination) {
  if (combination.length === N) result.push(combination.join(" "));
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      combination.push(i);
      backtracking(combination);
      combination.pop(i);
      visited[i] = 0;
    }
  }
}
backtracking([]);
console.log(result.join("\n"));
