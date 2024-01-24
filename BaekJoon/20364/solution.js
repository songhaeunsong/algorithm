const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const visited = {};

let result = "";

input.forEach((des) => {
  let next = des;
  let occupied = [0];
  while (next !== 0) {
    next = Math.floor(next / 2);

    if (visited[next]) {
      occupied.push(next);
    }
    if (next === 1) {
      result += occupied[occupied.length - 1] + "\n";
      visited[des] = true;
      break;
    }
  }
});

console.log(result);
