const fs = require("fs");
const [, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
const room = [];
input.forEach((i) => {
  const [start, end] = i.split(" ").map(Number);
  room.push([start, 1]);
  room.push([end, -1]);
});

room.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
let active = 0;
let max = 0;
for (let i = 0; i < room.length; i++) {
  active += room[i][1];
  max = Math.max(active, max);
}

console.log(max);
