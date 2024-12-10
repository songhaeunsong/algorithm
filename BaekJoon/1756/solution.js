const fs = require("fs");
const [[D, _], ovenDiameter, pizzaDiameter] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let i = 1; i < D; i++) {
  ovenDiameter[i] = Math.min(ovenDiameter[i], ovenDiameter[i - 1]);
}

let bottom = D;
for (const pizza of pizzaDiameter) {
  while (bottom > 0 && ovenDiameter[bottom - 1] < pizza) {
    bottom--;
  }
  bottom--;
  if (bottom < 0) break;
}

console.log(bottom + 1);
