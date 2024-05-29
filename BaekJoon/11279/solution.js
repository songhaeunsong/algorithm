// 최대힙

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  poll() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;

      let biggestIdx = idx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] > this.heap[biggestIdx]
      ) {
        biggestIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] > this.heap[biggestIdx]
      ) {
        biggestIdx = rightIdx;
      }
      if (biggestIdx === idx) break;

      this.swap(idx, biggestIdx);
      idx = biggestIdx;
    }
  }
}

const fs = require("fs");
const [N, ...inputs] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const maxHeap = new MaxHeap();
const result = [];

for (const input of inputs) {
  if (input === 0) {
    result.push(maxHeap.poll());
    continue;
  }
  maxHeap.add(input);
}

console.log(result.join("\n"));
