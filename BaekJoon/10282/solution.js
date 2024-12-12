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
const fileContents = fs.readFileSync(0).toString().trim().split("\n");
const N = +fileContents.shift();
let idx = 0;
for (let i = 0; i < N; i++) {
  const [n, d, c] = fileContents[idx].split(" ").map(Number);
  idx += d + 1;
  const dependencies = fileContents
    .slice(idx - d, idx)
    .map((line) => line.split(" ").map(Number));
  console.log(main(n, d, c, dependencies));
}

function main(n, d, c, dependencies) {
  const edges = Array.from({ length: n + 1 }, () => []);
  for (const [to, from, seconds] of dependencies) {
    edges[from].push([to, seconds]);
  }

  const pq = new MinHeap();
  const dist = new Array(n + 1).fill(Infinity);

  pq.add([c, 0]);
  dist[c] = 0;

  while (!pq.isEmpty()) {
    const [infected, second] = pq.poll();

    if (dist[infected] < second) continue;
    for (const [next, nextSecond] of edges[infected]) {
      if (dist[next] > nextSecond + second) {
        dist[next] = nextSecond + second;
        pq.add([next, dist[next]]);
      }
    }
  }

  let count = 0;
  let totalSeconds = 0;
  for (const d of dist) {
    if (d !== Infinity) {
      count++;
      totalSeconds = Math.max(d, totalSeconds);
    }
  }
  return `${count} ${totalSeconds}`;
}
