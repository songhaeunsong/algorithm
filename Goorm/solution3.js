// 어려운 문제

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let number;
  for await (const line of rl) {
    number = +line;
    rl.close();
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    let result = (factorial * i).toString();
    while (result.length > 1) {
      let sum = 0;
      result.split("").forEach((v) => {
        sum += +v;
      });
      result = sum.toString();
    }
    factorial = +result;
  }

  console.log(factorial);

  process.exit();
})();
