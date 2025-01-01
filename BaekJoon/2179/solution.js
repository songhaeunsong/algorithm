const fs = require("fs");
const [lenStr, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const len = +lenStr;

const map = {};
let longestPrefix = "";
let maxCount = 0;
const answer = [];

for (const str of input) {
  let key = "";
  for (const character of str) {
    key += character;
    map[key] = (map[key] || 0) + 1;
  }
}

for (const key in map) {
  const keyLen = key.length;
  if (keyLen > maxCount && map[key] >= 2) {
    maxCount = keyLen;
    longestPrefix = key;
  }
}

for (const str of input) {
  if (answer.length === 2) break;

  if (str.startsWith(longestPrefix)) {
    answer.push(str);
  }
}

console.log(
  answer.length === 2 ? answer.join("\n") : `${input[0]}\n${input[1]}`
);
