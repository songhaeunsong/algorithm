/*조건문: 합
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오. */

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = +input[0];
let answer = 0;
for (let i = 1; i < n + 1; i++) {
  answer.push(i);
}
console.log(answer);
