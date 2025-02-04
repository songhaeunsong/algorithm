const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");

const [N, M, H] = input[0].split(" ").map(Number);
let dp = Array(H + 1).fill(0);
for (let j = 1; j <= N; j++) {
  const blocks = input[j].split(" ").map(Number);
  const temp = [...dp];
  for (let b of blocks) {
    dp[b] += 1;
    for (let i = b + 1; i <= H; i++) {
      if (temp[i - b]) {
        dp[i] += temp[i - b];
        dp[i] %= 10007;
      }
    }
  }
}
console.log(dp[H] % 10007);
