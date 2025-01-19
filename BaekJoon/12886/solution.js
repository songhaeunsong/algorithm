const fs = require("fs");
const [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stoneCounts = Array.from({ length: 1501 }, () => new Array(1501).fill(0));
const sum = A + B + C;
stoneCounts[A][B] = 1;

console.log(bfs());

function bfs() {
  if (sum % 3 !== 0) return 0;

  const queue = [[A, B, C]];
  let front = 0;

  while (queue.length > front) {
    const [first, second, third] = queue[front++];

    if (first === second && second === third) return 1;

    let nextF = 0;
    let nextS = 0;
    let nextT = 0;

    [nextF, nextS] = compare(first, second);

    if (!stoneCounts[nextF][nextS]) {
      stoneCounts[nextF][nextS] = 1;
      queue.push([nextF, nextS, third]);
    }

    [nextF, nextT] = compare(first, third);

    if (!stoneCounts[nextF][second]) {
      stoneCounts[nextF][second] = 1;
      queue.push([nextF, second, nextT]);
    }

    [nextS, nextT] = compare(second, third);

    if (!stoneCounts[first][nextS]) {
      stoneCounts[first][nextS] = 1;
      queue.push([first, nextS, nextT]);
    }
  }
  return 0;
}

function compare(stone1, stone2) {
  if (stone1 === stone2) return [stone1, stone2];
  if (stone1 > stone2) {
    return [stone1 - stone2, stone2 * 2];
  }
  return [stone1 * 2, stone2 - stone1];
}
