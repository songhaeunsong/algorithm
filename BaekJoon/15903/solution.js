// 카드 합체 놀이

class MinHeap {
  constructor() {
    this.heap = [];
  }

  sum() {
    return this.heap.reduce((acc, cur) => (acc = BigInt(acc) + BigInt(cur)), 0);
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
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

    while (idx > 0) {
      if (this.heap[idx] >= this.heap[parentIdx]) break;

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
const minHeap = new MinHeap();
const fs = require("fs");
const [[N, M], cards] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (const card of cards) {
  minHeap.add(card);
}

for (let i = 0; i < M; i++) {
  const first = minHeap.poll();
  const second = minHeap.poll();
  const sum = BigInt(first) + BigInt(second);
  minHeap.add(sum);
  minHeap.add(sum);
}

console.log(minHeap.sum().toString());
