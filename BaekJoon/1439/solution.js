// 뒤집기

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

let count = 0;
for (let i = 0; i < input.length - 1; i++) {
  if (input[i] !== input[i + 1]) count++;
}
console.log(count % 2 === 0 ? count / 2 : (count + 1) / 2);
