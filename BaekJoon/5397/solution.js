// 키로거 (실버 2)
// 1 초	256 MB
// (1 ≤ L ≤ 1,000,000) (문자열 길이)

const fs = require("fs");
const [, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const answer = input.map((line) => decode(line.split("")).join(""));

function decode(codeStr) {
  const left = [];
  const right = [];
  for (const code of codeStr) {
    if (code === "<") {
      if (left.length) right.push(left.pop());
    } else if (code === ">") {
      if (right.length) password.push(right.pop());
    } else if (code === "-") {
      if (left.length) left.pop();
    } else {
      left.push(code);
    }
  }

  return [...left, ...right.reverse()];
}

console.log(answer.join("\n"));
