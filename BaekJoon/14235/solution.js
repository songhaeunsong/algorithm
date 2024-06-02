class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  poll() {
    if (this.heap.length === 0) return -1;
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0) {
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  bubbleDown() {
    let idx = 0;
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;

    while (1) {
      let biggerIdx = idx;
      if (this.heap[left] && this.heap[left] > this.heap[biggerIdx])
        biggerIdx = left;

      if (this.heap[right] && this.heap[right] > this.heap[biggerIdx])
        biggerIdx = right;

      if (biggerIdx === idx) break;

      this.swap(biggerIdx, idx);
      idx = biggerIdx;
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const maxHeap = new MaxHeap();
let result = [];
for (const cnt of input) {
  if (cnt === "0") {
    result.push(maxHeap.poll());
    continue;
  }
  cnt
    .trim()
    .split(" ")
    .slice(1)
    .map((present) => maxHeap.add(+present));
}

console.log(result.join("\n"));
