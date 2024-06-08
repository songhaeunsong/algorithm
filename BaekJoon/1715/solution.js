class MinHeap {
  constructor() {
    this.heap = [];
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

    while (idx > 0 && this.heap[parentIdx] > this.heap[idx]) {
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
        right < size && this.heap[right] < this.heap[left] ? right : left;
      if (this.heap[smallerIdx] >= this.heap[idx]) break;

      this.swap(smallerIdx, idx);
      idx = smallerIdx;
      left = 2 * idx + 1;
      right = 2 * idx + 2;
    }
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
}

const minHeap = new MinHeap();

const fs = require("fs");
const [N, ...cardSizes] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);

cardSizes.forEach((card) => minHeap.add(card));

let totalCost = 0;

while (minHeap.getSize() > 1) {
  const first = minHeap.poll();
  const second = minHeap.poll();
  const newBundle = first + second;
  totalCost += newBundle;
  minHeap.add(newBundle);
}

console.log(totalCost);
