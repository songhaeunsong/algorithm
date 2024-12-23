class Minheap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a][0], this.heap[a][1], this.heap[b][0], this.heap[b][1]] = [
      this.heap[b][0],
      this.heap[b][1],
      this.heap[a][0],
      this.heap[a][1],
    ];
  }

  size() {
    return this.heap.length;
  }

  add(a) {
    this.heap.push(a);
    this.bubbleUp();
  }

  poll() {
    if (this.size() <= 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }

  bubbleUp() {
    let idx = this.size() - 1;
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
    let left = (idx + 1) * 2 - 1;
    let right = (idx + 1) * 2;

    while (1) {
      let smaller = idx;
      if (this.heap[left] && this.heap[left][1] < this.heap[idx][1])
        smaller = left;
      if (this.heap[right] && this.heap[right][1] < this.heap[idx][1])
        smaller = right;

      if (smaller === idx) break;

      this.swap(idx, smaller);
      idx = smaller;
      left = (idx + 1) * 2 - 1;
      right = (idx + 1) * 2;
    }
  }
}

const fs = require("fs");
const [[N], friendLocation, [M], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const edges = Array.from({ length: N + 1 }, () => []);
for (let [from, to, distance] of input) {
  edges[from].push([to, distance]);
  edges[to].push([from, distance]);
}

const minDist = Array.from({ length: N + 1 }, () => [Infinity, 0]);
minDist[0][0] = 0;

for (const friend of friendLocation) {
  dijkstra(friend);
}

minDist.sort((a, b) => b[0] - a[0]);
console.log(minDist[0][1]);

function dijkstra(start) {
  const dist = new Array(N + 1).fill(Infinity);
  const pq = new Minheap();
  pq.add([start, 0]);
  dist[start] = 0;

  while (pq.size()) {
    const [to, cost] = pq.poll();

    if (dist[to] < cost) continue;

    for (const [nextTo, nextCost] of edges[to]) {
      if (dist[nextTo] > nextCost + cost) {
        dist[nextTo] = nextCost + cost;
        pq.add([nextTo, dist[nextTo]]);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (minDist[i][0] > dist[i]) {
      minDist[i][0] = dist[i];
      minDist[i][1] = i;
    }
  }
}
