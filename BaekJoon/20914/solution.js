// QWERTY 자판

const fs = require("fs");
const [_, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const qwertyKeyboard = {
  Q: ["W", "A"],
  W: ["Q", "E", "A", "S"],
  E: ["W", "R", "S", "D"],
  R: ["E", "T", "D", "F"],
  T: ["R", "Y", "F", "G"],
  Y: ["T", "U", "G", "H"],
  U: ["Y", "I", "H", "J"],
  I: ["U", "O", "J", "K"],
  O: ["I", "P", "K", "L"],
  P: ["O", "L"],
  A: ["Q", "W", "S", "Z"],
  S: ["W", "E", "A", "D", "Z", "X"],
  D: ["E", "R", "S", "F", "X", "C"],
  F: ["R", "T", "D", "G", "C", "V"],
  G: ["T", "Y", "F", "H", "V", "B"],
  H: ["Y", "U", "G", "J", "B", "N"],
  J: ["U", "I", "H", "K", "N", "M"],
  K: ["I", "O", "J", "L", "M"],
  L: ["O", "P", "K"],
  Z: ["A", "S", "X"],
  X: ["S", "D", "Z", "C"],
  C: ["D", "F", "X", "V"],
  V: ["F", "G", "C", "B"],
  B: ["G", "H", "V", "N"],
  N: ["H", "J", "B", "M"],
  M: ["J", "K", "N"],
};

const answer = [];

for (const str of input) {
  let time = 1;
  for (let i = 1; i < str.length; i++) {
    time += countTime(str[i - 1], str[i]);
  }
  answer.push(time);
}

console.log(answer.join("\n"));

function countTime(start, end) {
  const visited = {};
  const queue = [[start, 0]];
  visited[start] = 1;
  let head = 0;

  while (queue.length > head) {
    const [curr, count] = queue[head++];

    if (curr === end) return count + 1;

    for (const next of qwertyKeyboard[curr]) {
      if (visited[next]) continue;

      visited[next] = 1;
      queue.push([next, count + 2]);
    }
  }
}
