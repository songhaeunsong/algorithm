// 민겸 수

const fs = require("fs");
const mingyeoumNum = fs.readFileSync("./input.txt").toString().trim();

let start = 0;
let max = [];
let min = [];
for (let i = 0; i < mingyeoumNum.length; i++) {
  if (mingyeoumNum[i] === "K") {
    max.push(mingyeoumNum.slice(start, i + 1));
    start !== i && min.push(mingyeoumNum.slice(start, i));
    min.push(mingyeoumNum[i]);
    start = i + 1;
  }
}
if (start !== mingyeoumNum.length) {
  max.push(mingyeoumNum.slice(start));
  min.push(mingyeoumNum.slice(start));
}

let maxDecimal = "";
let minDecimal = "";
for (let i = 0; i < max.length; i++) {
  let chars = max[i];
  if (chars === "K") maxDecimal += "5";
  else if (chars[chars.length - 1] === "K") {
    maxDecimal += "5";
    for (let m = 0; m < chars.length - 1; m++) maxDecimal += "0";
  } else {
    for (let m = 0; m < chars.length; m++) maxDecimal += "1";
  }
}
for (let i = 0; i < min.length; i++) {
  let chars = min[i];
  if (chars === "K") minDecimal += "5";
  else {
    minDecimal += "1";
    for (let m = 0; m < chars.length - 1; m++) minDecimal += "0";
  }
}

console.log(`${maxDecimal}\n${minDecimal}`);
