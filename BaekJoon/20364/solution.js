const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const visited = {};

let result = "";

input.forEach((des) => {
  let next = Number(des);
  let occupied = 0;
  while (next !== 1) {
    if (visited[next]) {
      occupied = next;
    }
    next = Math.floor(next / 2);
  }

  result += occupied + "\n";
  visited[Number(des)] = true;
});

console.log(result);
