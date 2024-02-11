// 피보나치 함수

const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const memory = [];
fibonacci(40);

input.shift();
while (input.length > 0) {
  const idx = input.shift();
  console.log(memory[idx].join(" "));
}

function fibonacci(n) {
  if (memory[n]) return memory[n];

  if (n === 0) {
    memory[n] = [1, 0];
  } else if (n === 1) {
    memory[n] = [0, 1];
  } else {
    if (!memory[n - 1]) fibonacci(n - 1);
    if (!memory[n - 2]) fibonacci(n - 2);

    memory[n] = [
      memory[n - 1][0] + memory[n - 2][0],
      memory[n - 1][1] + memory[n - 2][1],
    ];
  }

  return memory[n];
}
