class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(i1, i2) {
    [this.heap[i1][0], this.heap[i1][1], this.heap[i2][0], this.heap[i2][1]] = [
      this.heap[i2][0],
      this.heap[i2][1],
      this.heap[i1][0],
      this.heap[i1][1],
    ];
  }

  size() {
    return this.heap.length;
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0 && this.heap[parentIdx][1] > this.heap[idx][1]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  bubbleDown() {
    let idx = 0;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let size = this.heap.length;

    while (left < size) {
      let smallerIdx =
        right < size && this.heap[right][1] < this.heap[left][1] ? right : left;
      if (this.heap[smallerIdx][1] >= this.heap[idx][1]) break;

      this.swap(smallerIdx, idx);
      idx = smallerIdx;
      left = 2 * idx + 1;
      right = 2 * idx + 2;
    }
  }
}

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = Array.from({ length: N + 1 }, () => []);
const pq = new MinHeap();
for (const [from, to, cost] of input) {
  edges[from].push([to, cost]);
  edges[to].push([from, cost]);
}

let totalCost = 0;
let count = 0;

prim(1);

function prim(start) {
  const visited = new Array(N + 1).fill(0);
  pq.add([start, 0]);
  visited[start] = 0;

  while (!pq.isEmpty()) {
    const [node, cost] = pq.poll();

    if (visited[node]) continue;

    visited[node] = 1;
    totalCost += cost;
    count++;

    for (const [next, nextCost] of edges[node]) {
      pq.add([next, nextCost]);
    }
  }
}

if (count === N)
  console.log(input.reduce((sum, cur) => (sum += cur[2]), 0) - totalCost);
else console.log(-1);
