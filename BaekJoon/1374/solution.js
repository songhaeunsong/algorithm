// 강의실 (힙으로 구현)

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

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  replace(value) {
    this.heap[0] = value;
    this.bubbleDown();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[parentIdx] <= this.heap[idx]) break;

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
      let smallerIdx = idx;

      if (this.heap[left] && this.heap[left] < this.heap[smallerIdx])
        smallerIdx = left;
      if (this.heap[right] && this.heap[right] < this.heap[smallerIdx])
        smallerIdx = right;

      if (smallerIdx === idx) break;

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const fs = require("fs");
const [_, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const minHeap = new MinHeap();
input.sort((a, b) => a[1] - b[1] || a[2] - b[2]);

for (const lecture of input) {
  if (minHeap.getMin() <= lecture[1]) {
    minHeap.replace(lecture[2]);
    continue;
  }
  minHeap.add(lecture[2]);
}

console.log(minHeap.getSize());
