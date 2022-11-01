/*조건문: A+B -3*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input[0];

let n = [];
for (let i = 1; i <= count; i++) {
  n = input[i].split(" ").map(Number);

  console.log(n[0] + n[1]);
}
