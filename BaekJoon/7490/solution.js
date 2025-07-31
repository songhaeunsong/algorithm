// 0 만들기

const fs = require("fs");
const [_, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

for (const number of input) {
  backtracking(1, "1", number);

  answer.push("");
}

console.log(answer.join("\n"));

function backtracking(idx, expr, N) {
  if (idx === N) {
    if (eval(expr.split(" ").join("")) === 0) answer.push(expr);
    return;
  }

  backtracking(idx + 1, expr + ` ${idx + 1}`, N);

  backtracking(idx + 1, expr + `+${idx + 1}`, N);

  backtracking(idx + 1, expr + `-${idx + 1}`, N);
}
