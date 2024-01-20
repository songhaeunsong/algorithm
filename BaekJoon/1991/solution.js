// 트리 순회

const fs = require("fs");
const [num, ...input] = fs.readFileSync("./input.txt").toString().split("\n");

const tree = {};
input.forEach((str) => {
  const [node, left, right] = str.split(" ");
  tree[node] = [left, right];
});

let result = "";

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
