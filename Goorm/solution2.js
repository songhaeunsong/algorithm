// 구름이의 취미

const readline = require("readline");
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input;
  for await (const line of rl) {
    input = BigInt(line);
    rl.close();
  }
  const mod = BigInt(1000000007);
  let sum = ((input * (input + BigInt(1))) / BigInt(2)) % mod;
  console.log(((sum * sum) % mod).toString());
  process.exit();
})();
