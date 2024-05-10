// 트럭
// 1 초	512 MB
// n (1 ≤ n ≤ 1,000) , w (1 ≤ w ≤ 100) and L (10 ≤ L ≤ 1,000), a1, a2, ⋯ , an (1 ≤ ai ≤ 10)

const fs = require("fs");
const [[n, w, L], input] = fs
  .readFileSync(0)
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const bridge = Array.from({ length: w }, () => 0);
let count = 0;
let sumOfWeight = 0;
let next = 0;

while (next < n) {
  sumOfWeight -= bridge.shift();
  count++;

  if (sumOfWeight + input[next] <= L) {
    bridge.push(input[next]);
    sumOfWeight += input[next];
    next++;
  } else {
    bridge.push(0);
  }
}

count += w;

console.log(count);
