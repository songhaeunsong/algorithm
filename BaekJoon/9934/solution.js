// 완전 이진 트리

const fs = require("fs");
const [depth, input] = fs.readFileSync("./input.txt").toString().split("\n");
const nodes = input.split(" ").map(Number);

const tree = Array.from({ length: Number(depth) }, () => []);

function insertTree(arr, level) {
  if (arr.length === 1) {
    tree[level].push(arr[0]);
    return;
  }

  const rootIndex = Math.floor(arr.length / 2);
  tree[level].push(arr[rootIndex]);
  const left = arr.slice(0, rootIndex);
  const right = arr.slice(rootIndex + 1);
  insertTree(left, level + 1);
  insertTree(right, level + 1);
}

insertTree(nodes, 0);

let result = "";
tree.forEach((node) => {
  result += node.join(" ") + "\n";
});

console.log(result);
