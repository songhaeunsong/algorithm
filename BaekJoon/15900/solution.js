// 나무 탈출

const fs = require("fs"); // 제출시 삭제
const path = "./input.txt"; // 제출시 삭제
const readline = require("readline");

const rl = readline.createInterface({
  //input: process.stdin,
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let N = 0;
let graph = [];
let num = 0;

rl.on("line", (line) => {
  if (!N) {
    N = Number(line);
    graph = Array.from({ length: N + 1 }, () => []);
  } else {
    const [from, to] = line.split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
    num++;
  }
  if (num === N - 1) {
    main();
  }
});

function main() {
  let sum = 0;

  let insertTree = (parent, root, depth) => {
    let cur = graph[root];
    if (cur.length === 1 && cur[0] === parent) sum += depth;
    else {
      cur.forEach((node) => {
        if (node !== parent) {
          insertTree(root, node, depth + 1);
        }
      });
    }
  };

  insertTree(0, 1, 0);
  console.log(sum % 2 === 0 ? "No" : "Yes");
}
