// 피보나치 함수

const fs = require("fs");
const [T, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const memory = [];
memory[0] = [1, 0];
memory[1] = [0, 1];

function fibonacci(num) {
  if (memory[num]) return memory[num].join(" ");
  for (let i = 2; i <= num; i++) {
    const one = memory[i - 1][0] + memory[i - 2][0];
    const zero = memory[i - 1][1] + memory[i - 2][1];
    memory[i] = [one, zero];
  }
  return memory[num].join(" ");
}

let answer = input.map((num) => {
  return fibonacci(num);
});

console.log(answer.join("\n"));
