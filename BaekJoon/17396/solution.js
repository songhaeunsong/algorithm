class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
  getSize() {
    return this.heap.length;
  }

  getMin() {
    return this.heap[0];
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

  swap(i1, i2) {
    [this.heap[i1][0], this.heap[i1][1], this.heap[i2][0], this.heap[i2][1]] = [
      this.heap[i2][0],
      this.heap[i2][1],
      this.heap[i1][0],
      this.heap[i1][1],
    ];
  }
}

const fs = require("fs");
const [[N, _], outlook, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dist = new Array(N).fill(Infinity);
const edges = Array.from({ length: N }, () => []);

const pq = new MinHeap();

for (const [a, b, t] of input) {
  edges[a].push([b, t]);
  edges[b].push([a, t]);
}

outlook[N - 1] = 0;

pq.add([0, 0]);
dist[0] = 0;

while (!pq.isEmpty()) {
  const [node, cost] = pq.poll();
  if (dist[node] < cost) continue;
  for (const [next, nextCost] of edges[node]) {
    if (outlook[next] === 1) continue;
    if (dist[next] > cost + nextCost) {
      dist[next] = cost + nextCost;
      pq.add([next, dist[next]]);
    }
  }
}

console.log(dist[N - 1] === Infinity ? -1 : dist[N - 1]);
