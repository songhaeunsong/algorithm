// 계수기 만들기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let input = [];
rl.on("line", function (line) {
  if (N === 0) N = +line;
  else {
    input.push(line);
    if (input.length === 3) rl.close();
  }
}).on("close", function () {
  let count = +input.pop();
  const [maxNum, cntNum] = input.map((line) => line.split(" ").map(Number));

  for (let i = N - 1; i >= 0; i--) {
    if (count === 0) break;
    cntNum[i] += count;
    let next = Math.floor(cntNum[i] / (maxNum[i] + 1));
    let remain = cntNum[i] % (maxNum[i] + 1);

    cntNum[i] = remain;
    count = next;
  }

  console.log(cntNum.join(""));

  process.exit();
});
