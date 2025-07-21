// 택배 배송

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  add(a) {
    this.heap.push(a);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length <= 1) return this.heap.pop();
    let value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);

      if (this.heap[idx][1] >= this.heap[parent][1]) break;
      this.swap(idx, parent);

      idx = parent;
    }
  }
  bubbleDown() {
    let idx = 0;

    while (1) {
      let left = (idx + 1) * 2 - 1;
      let right = (idx + 1) * 2;

      let smaller = idx;

      if (this.heap[left] && this.heap[left][1] < this.heap[smaller][1])
        smaller = left;

      if (this.heap[right] && this.heap[right][1] < this.heap[smaller][1])
        smaller = right;

      if (smaller === idx) break;

      this.swap(idx, smaller);
      idx = smaller;
    }
  }
}

const fs = require("fs");
const [[N, M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const edges = Array.from({ length: N + 1 }, () => []);
for (const [from, to, cost] of input) {
  edges[from].push([to, cost]);
  edges[to].push([from, cost]);
}

console.log(dijkstra(1));

function dijkstra(start) {
  const dist = new Array(N + 1).fill(Infinity);
  const pq = new MinHeap();
  pq.add([start, 0]);
  dist[1] = 0;

  while (!pq.isEmpty()) {
    const [node, cost] = pq.poll();

    if (dist[node] < cost) continue;

    for (const [nextNode, nextCost] of edges[node]) {
      if (dist[nextNode] > cost + nextCost) {
        dist[nextNode] = cost + nextCost;
        pq.add([nextNode, dist[nextNode]]);
      }
    }
  }
  return dist[N];
}

// console.log(input);
