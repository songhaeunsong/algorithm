// UCPC는 무엇의 약자일까?

const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();
const len = str.length;

const targets = ["U", "C", "P", "C"];
let targetId = 0;
for (let i = 0; i < len; i++) {
  if (str[i] === targets[targetId]) {
    targetId++;
  }
  if (targetId === 4) break;
}

console.log(targetId === 4 ? "I love UCPC" : "I hate UCPC");
