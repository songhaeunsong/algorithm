// 문자열 교환

const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();
const arr = str.split("");
const len = arr.length;

const changed = new Array(len).fill(0);

let min = Infinity;

backtracing(0, 0);
console.log(min);

function backtracing(start, changes) {
  let count = 1;

  let prev = null;
  for (const char of arr) {
    if (!prev) {
      prev = char;
      continue;
    }
    if (prev !== char) {
      count++;
      prev = char;
    }
  }

  if (count <= 3) {
    min = Math.min(changes, min);
    return;
  }

  for (let i = start; i < len; i++) {
    if (changed[i]) continue;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j] || changed[j]) continue;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      changed[j] = 1;
      backtracing(i + 1, changes + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      changed[j] = 0;
    }
  }
}
