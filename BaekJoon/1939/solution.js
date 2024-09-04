// 중량 제한
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  add(a) {
    this.heap.push(a);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop();

    let value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[parent][1] >= this.heap[idx][1]) break;
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  bubbleDown() {
    let idx = 0;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;

    while (1) {
      let bigger = idx;
      if (this.heap[left] && this.heap[bigger][1] < this.heap[left][1])
        bigger = left;
      if (this.heap[right] && this.heap[bigger][1] < this.heap[right][1])
        bigger = right;
      if (bigger === idx) break;

      this.swap(idx, bigger);
      idx = bigger;
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

const [start, end] = input.pop().map(Number);
// const edges = Array.from({ length: N + 1 }, () => new Map());
const edges = Array.from({ length: N + 1 }, () => []);
const pq = new MaxHeap();
const dist = new Array(N + 1).fill(0);

for (const temp of input) {
  let from = temp[0];
  let to = temp[1];
  let cost = temp[2];

  edges[from].push([to, cost]);
  edges[to].push([from, cost]);
}

pq.add([start, Infinity]);
dist[start] = Infinity;

while (pq.size() > 0) {
  const [to, cost] = pq.poll();

  if (to === end) break;
  if (dist[to] > cost) continue;
  for (const [nextTo, nextCost] of edges[to]) {
    const target = Math.min(cost, nextCost);
    if (dist[nextTo] < target) {
      dist[nextTo] = target;
      pq.add([nextTo, dist[nextTo]]);
    }
  }
}

console.log(dist[end]);
