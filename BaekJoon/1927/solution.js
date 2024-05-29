// 최소힙

class MinHeap {
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
      if (this.heap[idx] >= this.heap[parentIdx]) break;
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

      let smallestIdx = idx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] < this.heap[smallestIdx]
      ) {
        smallestIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[smallestIdx]
      ) {
        smallestIdx = rightIdx;
      }
      if (smallestIdx === idx) break;

      this.swap(idx, smallestIdx);
      idx = smallestIdx;
    }
  }
}

const fs = require("fs");
const [_, ...inputs] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

function solution() {
  const minHeap = new MinHeap();

  for (const input of inputs) {
    if (input === 0) {
      result.push(minHeap.poll());
      continue;
    }
    minHeap.add(input);
  }
}

solution();
console.log(result.join("\n"));
