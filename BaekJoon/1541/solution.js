// 잃어버린 괄호

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("-");

const parenthesized = input.map((expression) => {
  return expression.split("+").reduce((acc, cur) => acc + Number(cur), 0);
});

const answer = parenthesized.reduce((acc, cur, idx) => {
  return idx === 0 ? acc + cur : acc - cur;
});

console.log(answer);
