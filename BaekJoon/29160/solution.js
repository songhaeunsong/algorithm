// 나의 FIFA팀 가치는?

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  maxValue() {
    return this.heap[0];
  }
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  add(value) {
    this.heap.push(value);

    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[parentIdx] > this.heap[idx]) break;

      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  poll() {
    this.heap[0]--;

    let idx = 0;
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;

    while (1) {
      let bigger = idx;

      if (this.heap[right] > this.heap[bigger]) bigger = right;
      if (this.heap[left] > this.heap[bigger]) bigger = left;

      if (bigger === idx) break;
      this.swap(bigger, idx);
      idx = bigger;
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const fs = require("fs");
const [[_, K], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const candidates = Array.from({ length: 12 }, () => new MaxHeap());
let pickedSum = 0;

for (const [position, value] of input) {
  candidates[position].add(value);
}

// 1년동안
let i = 0;
while (i < K) {
  candidates.forEach((position) => {
    if (position.size() === 0) return;
    position.poll();
  });

  i++;
}

candidates.forEach((position) => {
  if (position.size() === 0) return;
  pickedSum += position.maxValue();
});

console.log(pickedSum);
