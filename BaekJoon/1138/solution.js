// 한 줄로 서기

const fs = require("fs");
const [[N], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const orders = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const personNumber = i + 1;
  const order = input[i];
  let idx = 0;
  let count = -1;

  while (idx < N) {
    if (!orders[idx]) count++;

    if (count === order) {
      orders[idx] = personNumber;
      break;
    }

    idx++;
  }
}

console.log(orders.join(" "));
