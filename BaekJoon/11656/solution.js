// 접미사 배열

const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();
const len = str.length;

const arr = [];

let currentStr = "";
for (let i = len - 1; i >= 0; i--) {
  currentStr = str[i] + currentStr;

  arr.push(currentStr);
}

console.log(arr.sort().join("\n"));
