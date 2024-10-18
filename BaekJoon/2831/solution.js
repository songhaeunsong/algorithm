const fs = require("fs");
const [[N], menInput, womenInput] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const menWantShorter = [];
const menWantTaller = [];
const womenWantShorter = [];
const womenWantTaller = [];

for (const man of menInput) {
  if (man > 0) menWantTaller.push(man);
  else menWantShorter.push(man);
}

for (const woman of womenInput) {
  if (woman > 0) womenWantTaller.push(woman);
  else womenWantShorter.push(woman);
}

menWantShorter.sort((a, b) => b - a);
menWantTaller.sort((a, b) => a - b);
womenWantShorter.sort((a, b) => b - a);
womenWantTaller.sort((a, b) => a - b);

let manIdx = 0;
let womanIdx = 0;
let count = 0;

if (menWantShorter && womenWantTaller) {
  while (manIdx < menWantShorter.length && womanIdx < womenWantTaller.length) {
    if (-menWantShorter[manIdx] > womenWantTaller[womanIdx]) {
      count++;
      manIdx++;
      womanIdx++;
    } else {
      manIdx++;
    }
  }
}

manIdx = 0;
womanIdx = 0;
if (menWantTaller && womenWantShorter) {
  while (manIdx < menWantTaller.length && womanIdx < womenWantShorter.length) {
    if (menWantTaller[manIdx] < -womenWantShorter[womanIdx]) {
      count++;
      manIdx++;
      womanIdx++;
    } else {
      womanIdx++;
    }
  }
}

console.log(count);
