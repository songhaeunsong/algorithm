// 센티와 마법의 뽕망치

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  getMax() {
    return this.heap[0];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  poll() {
    const value = this.heap[0];
    this.heap[0] = this.heap[0] === 1 ? 1 : Math.floor(this.heap[0] / 2);
    this.bubbleDown();
    return value;
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[parentIdx] >= this.heap[idx]) break;
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
      let bigger = idx;
      if (this.heap[left] > this.heap[bigger]) bigger = left;
      if (this.heap[right] > this.heap[bigger]) bigger = right;

      if (bigger === idx) break;

      this.swap(bigger, idx);
      idx = bigger;
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const fs = require("fs");
const [nums, ...people] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const maxHeap = new MaxHeap();

const [N, H, T] = nums.split(" ").map(Number);

for (const tall of people) {
  maxHeap.add(+tall);
}

let count = 0;
while (count < T) {
  let value = maxHeap.poll();
  if (value < H) break;

  count++;
}

const tallest = maxHeap.getMax();
if (H === 1) console.log(`NO\n${tallest}`);
else if (tallest < H) {
  console.log(`YES\n${count}`);
} else {
  console.log(`NO\n${tallest}`);
}
