// 완벽한 햄버거 만들기

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let input;
rl.on("line", (line) => {
  if (N === 0) N = +line;
  else {
    input = line.split(" ").map(Number);
    rl.close();
  }
});

rl.on("close", () => {
  function solution() {
    let change = [1];
    let sum = 0;

    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] === input[i + 1]) {
        sum += input[i];
        continue;
      }

      if (input[i] < input[i + 1]) {
        if (change[change.length - 1] !== 1) change.push(1);
      } else {
        if (change[change.length - 1] !== -1) change.push(-1);
      }

      if (change.length > 2) return 0;
      sum += input[i];
    }

    return sum + input.at(-1);
  }

  console.log(solution());
  process.exit();
});
