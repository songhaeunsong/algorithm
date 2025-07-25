// 정보 상인 호석

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  add(a) {
    this.heap.push(a);
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
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parent]) break;

      this.swap(idx, parent);

      idx = parent;
    }
  }
  bubbleDown() {
    let idx = 0;

    while (1) {
      const left = (idx + 1) * 2 - 1;
      const right = (idx + 1) * 2;
      let bigger = idx;

      if (this.heap[left] && this.heap[left] > this.heap[bigger]) bigger = left;
      if (this.heap[right] && this.heap[right] > this.heap[bigger])
        bigger = right;
      if (idx === bigger) break;

      this.swap(idx, bigger);

      idx = bigger;
    }
  }
}

const fs = require("fs");
const [[n], ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

const N = +n;
const map = {};
let totalCost = 0;

for (let i = 0; i < N; i++) {
  const name = input[i][1];

  if (input[i][0] === "1") {
    if (!map[name]) map[name] = new MaxHeap();

    const k = +input[i][2];
    if (k === 0) continue;

    for (let j = 3; j < 3 + k; j++) {
      map[name].add(+input[i][j]);
    }
  } else {
    const buyingAmount = +input[i][2];

    for (let j = 0; j < buyingAmount; j++) {
      if (!map[name] || map[name].isEmpty()) break;
      const polled = map[name].poll();
      totalCost += polled;
    }
  }
}

console.log(totalCost);
