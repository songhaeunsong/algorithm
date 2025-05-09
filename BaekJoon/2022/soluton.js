const fs = require("fs");
const [x, y, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = 0;

let left = 1;
let right = Math.min(x, y);

while (left + 0.001 <= right) {
  const w = (left + right) / 2;

  const h1 = Math.sqrt(x * x - w * w);
  const h2 = Math.sqrt(y * y - w * w);

  const target = (h1 * h2) / (h1 + h2);

  if (target >= c) {
    answer = w;
    left = w;
  } else {
    right = w;
  }
}

console.log(answer.toFixed(4));
