// 점프왕 쩰리 (Small)

const answer = {
  success: "HaruHaru",
  fail: "Hing",
};

const fs = require("fs");
const [num, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const N = Number(num);

const graph = [];
for (let arr of input) {
  graph.push(arr.split(" ").map(Number));
}

function dfs(row, column) {
  if (graph[row][column] === -1) return answer.success;
  if (graph[row][column] === 0) return answer.fail;
  const target = graph[row][column];
  if (target + row < N) {
    let result = dfs(row + target, column);
    if (result === answer.success) return result;
  }
  if (target + column < N) {
    let result = dfs(row, column + target);
    if (result === answer.success) return result;
  }
  return answer.fail;
}
console.log(dfs(0, 0));
