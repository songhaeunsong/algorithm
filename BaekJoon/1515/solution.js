// 수 이어 쓰기

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const len = input.length;

let current = 1;
let idx = 0;

while (idx < len) {
  for (const s of current.toString()) {
    if (input[idx] === s) {
      idx++;
    }
  }
  current++;
}

console.log(current - 1);
