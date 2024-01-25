// 트리 만들기

const fs = require("fs");
const [n, m] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const tree = ["0 1", "1 2"];

let reef = 2;

for (let i = 2; i < n - 1; i++) {
  if (m === reef) {
    tree[i] = `${i} ${i + 1}`;
  }
  if (m > reef) {
    reef++;
    tree[i] = `1 ${i + 1}`;
  }
}
console.log(tree.join("\n"));
