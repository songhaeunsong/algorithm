// 화장실의 규칙

class MaxHeap {
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
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  compare(a, b) {
    if (a[0] !== b[0]) return a[0] > b[0];
    if (a[1] !== b[1]) return a[1] > b[1];
    return a[2] < b[2];
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

    while (idx > 0 && this.compare(this.heap[idx], this.heap[parent])) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  bubbleDown() {
    let idx = 0;
    let leftChild = (idx + 1) * 2 - 1;
    let rightChild = (idx + 1) * 2;

    while (true) {
      let bigger = idx;
      if (this.heap.length > leftChild) {
        if (this.compare(this.heap[leftChild], this.heap[bigger]))
          bigger = leftChild;
      }

      if (this.heap.length > rightChild) {
        if (this.compare(this.heap[rightChild], this.heap[bigger]))
          bigger = rightChild;
      }

      if (idx === bigger) break;

      this.swap(idx, bigger);
      idx = bigger;
      leftChild = (idx + 1) * 2 - 1;
      rightChild = (idx + 1) * 2;
    }
  }
}

const fs = require("fs");
const [[N, M, K], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const pq = new MaxHeap();

const len = Math.min(M, N);

for (let i = 0; i < len; i++) {
  pq.add([...input[i], i, i]);
}

let count = 0;

while (1) {
  const [D, H, lineNumber, idx] = pq.poll();

  if (idx === K) break;
  count++;

  const nextIdx = idx + M;

  if (nextIdx < N) {
    pq.add([...input[nextIdx], lineNumber, nextIdx]);
  }
}

console.log(count);
