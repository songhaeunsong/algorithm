const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const edges = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));
edges.unshift([0]);

const firstSpreaders = input.at(-1).split(" ").map(Number);

const believed = new Array(N + 1).fill(-1);
const countOfNearBeliever = Array.from({ length: N + 1 }, (_, i) =>
  Math.ceil((edges[i].length - 1) / 2)
);

const queue = [];
let head = 0;
for (const spreader of firstSpreaders) {
  believed[spreader] = 0;
  for (const listener of edges[spreader]) {
    if (listener === 0) break;
    countOfNearBeliever[listener]--;
  }
  queue.push([spreader, 0]);
}

const belivers = Array.from({ length: N + 1 }, () => new Set());

while (queue.length > head) {
  const [spreader, time] = queue[head++];

  for (const listener of edges[spreader]) {
    if (listener === 0 || believed[listener] !== -1) continue;

    if (countOfNearBeliever[listener] <= 0) {
      belivers[time].add(listener);
    }
  }

  if (queue.length === head) {
    for (const nextBeliver of belivers[time]) {
      queue.push([nextBeliver, time + 1]);
      believed[nextBeliver] = time + 1;

      for (const listener of edges[nextBeliver]) {
        if (listener === 0) break;
        countOfNearBeliever[listener]--;
      }
    }
  }
}

believed.shift();
console.log(believed.join(" "));
