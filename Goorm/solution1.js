// 장마

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const testNums = [];
  const input = [];
  for await (const line of rl) {
    if (testNums.length === 0) {
      testNums.push(...line.split(" ").map(Number));
    } else input.push(line.split(" ").map(Number));

    if (input.length === testNums[1] + 1) rl.close();
  }

  const [N, M] = testNums;
  const houses = input.shift();
  const drainage = new Array(N).fill(0);
  let count = 0;
  let day = 0;
  while (day < M) {
    const [start, end] = input[day];
    for (let r = start - 1; r < end; r++) {
      houses[r]++;
      if (drainage[r] === 0) drainage[r] = 1;
    }

    if ((day + 1) % 3 === 0) {
      drainage.forEach((v, i) => {
        houses[i] -= v;
        drainage[i] = 0;
        count = 0;
      });
    }

    day++;
  }

  console.log(houses.join(" "));

  process.exit();
})();
