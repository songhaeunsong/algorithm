// 후보 추천하기

const fs = require("fs");
const [N, C, input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const priority = Array.from({ length: 101 }, () =>
  Array.from({ length: 2 }, () => -1)
);
const cnt = {};
let count = 0;

input
  .split(" ")
  .map(Number)
  .forEach((pick, idx) => {
    if (count < +N) {
      if (priority[pick][0] === -1) {
        cnt[pick] = 1;
        priority[pick][0] = idx;
        priority[pick][1] = 1;
        count++;
      } else priority[pick][1]++;
      return;
    }

    if (cnt[pick]) {
      priority[pick][1]++;
      return;
    }

    let out = -1;
    for (const key in cnt) {
      if (out === -1) {
        out = +key;
        continue;
      }
      if (
        priority[out][1] === priority[key][1] &&
        priority[out][0] > priority[key][0]
      )
        out = +key;
      else if (priority[out][1] > priority[key][1]) out = +key;
    }
    priority[out][0] = -1;
    priority[out][1] = -1;

    delete cnt[out];

    priority[pick][0] = idx;
    priority[pick][1] = 1;
    cnt[pick] = 1;
  });

console.log(
  Object.keys(cnt)
    .sort((a, b) => a - b)
    .join(" ")
);
