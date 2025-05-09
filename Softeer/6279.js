const fs = require("fs");
const [nums, input] = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);

const visited = new Array(N).fill(0);
let count = 0;

for (let i = 1; i < N; i++) {
  if (input[i] === "H") continue;
  check(i - M);
}

function check(start) {
  for (let i = start; i <= start + 2 * M; i++) {
    if (!input[i]) continue;
    if (input[i] === "H" && !visited[i]) {
      visited[i] = 1;
      count++;
      return;
    }
  }
}
console.log(count);
