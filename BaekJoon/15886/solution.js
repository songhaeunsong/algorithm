// 내 선물을 받아줘 2

const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const N = +n;

const visited = new Array(N).fill(0);
let unionNumber = 1;
for (let i = 0; i < N; i++) {
  if (!visited[i]) {
    visited[i] = unionNumber++;
    checkUnion(i);
  }
}

function checkUnion(i) {
  if (input[i] === "E") {
    if (visited[i + 1]) {
      visited[i] = visited[i + 1];
      return;
    }
    visited[i + 1] = visited[i];
    checkUnion(i + 1);
  }
  if (input[i] === "W") {
    if (visited[i - 1]) {
      visited[i] = visited[i - 1];
      return;
    }

    visited[i - 1] = visited[i];
    checkUnion(i - 1);
  }
}

const unionNumbers = new Set();

for (let i = 0; i < N; i++) {
  unionNumbers.add(visited[i]);
}

console.log(unionNumbers.size);
