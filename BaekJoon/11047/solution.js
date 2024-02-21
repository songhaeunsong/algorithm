// 동전 0
const fs = require("fs");
const [n, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
let [N, K] = n.split(" ").map(Number);

let answer = 0;
for (let i = input.length - 1; i >= 0; i--) {
  const coin = Number(input[i]);
  const count = Math.floor(K / coin);
  answer += count;
  K = Math.floor(K % coin);
}

console.log(answer);
