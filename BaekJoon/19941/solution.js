// 햄버거 분배

const fs = require("fs");
const [num, inputStr] = fs.readFileSync(0).toString().trim().split("\n");

const [N, K] = num.split(" ").map(Number);
const input = inputStr.split("");
let count = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "P") {
    for (let k = -K; k <= K; k++) {
      if (input[i + k] === "H") {
        input[i + k] = "E";
        count++;
        break;
      }
    }
  }
}
console.log(count);
