const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
const input = [];
rl.on("line", function (line) {
  if (N === 0) {
    N = +line;
  } else {
    input.push(...line.split(" ").map(Number));
  }
  if (input.length >= N) rl.close();
}).on("close", function () {
  let map = {};
  let start = 0;
  let max = 0;
  let cnt = 0;

  for (let end = 0; end < N; end++) {
    if (!map[input[end]]) {
      map[input[end]] = 0;
      cnt++;
    }
    map[input[end]]++;

    while (cnt > 2) {
      map[input[start]]--;
      if (map[input[start]] === 0) {
        delete map[input[start]];
        cnt--;
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
  }
  console.log(max);
  process.exit();
});
