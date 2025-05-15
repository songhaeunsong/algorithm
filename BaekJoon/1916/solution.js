// 최소비용 구하기

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a][0], this.heap[a][1], this.heap[b][0], this.heap[b][1]] = [
      this.heap[b][0],
      this.heap[b][1],
      this.heap[a][0],
      this.heap[a][1],
    ];
  }

  add(a) {
    this.heap.push(a);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length <= 1) return this.heap.pop();
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = parseInt((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[idx][1] >= this.heap[parent][1]) break;
      this.swap(idx, parent);
      idx = parent;
      parent = parseInt((idx - 1) / 2);
    }
  }
  bubbleDown() {
    let idx = 0;
    let leftChild = (idx + 1) * 2 - 1;
    let rightChild = (idx + 1) * 2;

    while (true) {
      let smaller = idx;
      if (
        this.heap.length > leftChild &&
        this.heap[leftChild][1] < this.heap[idx][1]
      )
        smaller = leftChild;
      if (
        this.heap.length > rightChild &&
        this.heap[rightChild][1] < this.heap[idx][1]
      )
        smaller = rightChild;

      if (idx === smaller) break;
      this.swap(idx, smaller);
      idx = smaller;
      leftChild = (idx + 1) * 2 - 1;
      rightChild = (idx + 1) * 2;
    }
  }
}

const fs = require("fs");
const [[N], [M], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [start, end] = input.pop();

const edges = Array.from({ length: N + 1 }, () => []);

for (const [from, to, cost] of input) {
  edges[from].push([to, cost]);
}

console.log(dijkstra(start));

function dijkstra(start) {
  const pq = new MinHeap();
  const dist = Array.from({ length: N + 1 }, () => Infinity);
  dist[start] = 0;
  pq.add([start, 0]);

  while (!pq.isEmpty()) {
    const [node, cost] = pq.poll();

    if (cost > dist[node]) continue;

    for (const [nextNode, nextCost] of edges[node]) {
      if (dist[nextNode] > cost + nextCost) {
        dist[nextNode] = cost + nextCost;
        pq.add([nextNode, dist[nextNode]]);
      }
    }
  }
  return dist[end];
}
