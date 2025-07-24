// 2로 몇 번 나누어질까

const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(BigInt);

function sum(n) {
  if (n === 0n) return 0n;
  if (n === 1n) return 1n;
  if (n % 2n === 1n) {
    return n / 2n + 2n * sum(n / 2n) + 1n;
  } else {
    return n / 2n + 2n * sum(n / 2n);
  }
}

console.log((sum(b) - sum(a - 1n)).toString());
