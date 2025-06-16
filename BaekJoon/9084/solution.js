// 동전

const fs = require("fs");
const [T, ...fileContents] = fs.readFileSync(0).toString().trim().split("\n");

let idx = 0;

for (let t = 0; t < +T; t++) {
  const [[N], input, [goal]] = fileContents
    .slice(idx, idx + 3)
    .map((i) => i.split(" ").map(Number));

  console.log(main(N, input, goal));

  idx += 3;
}

function main(N, input, goal) {
  const dp = new Array(goal + 1).fill(0);
  const newDp = new Array(goal + 1).fill(0);

  for (let i = 1; i <= goal; i++) {
    if (i % input[0] === 0) dp[i] = 1;
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j <= goal; j++) {
      const coin = input[i];
      if (j < coin) {
        newDp[j] = dp[j];
        continue;
      }

      let count = 0;
      newDp[j] = j % coin === 0 ? 1 : 0;

      while (j >= coin * count) {
        newDp[j] += dp[j - coin * count];
        count++;
      }
    }

    newDp.forEach((d, i) => {
      dp[i] = d;
    });
  }

  return dp[goal];
}
