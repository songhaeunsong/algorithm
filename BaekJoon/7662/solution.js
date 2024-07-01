// 이중 우선순위 큐
class Heap {
  constructor() {
    this.minHeap = [];
    this.maxHeap = [];
    this.map = {};
  }

  swap(mode, i1, i2) {
    mode === 1
      ? ([this.minHeap[i1], this.minHeap[i2]] = [
          this.minHeap[i2],
          this.minHeap[i1],
        ])
      : ([this.maxHeap[i1], this.maxHeap[i2]] = [
          this.maxHeap[i2],
          this.maxHeap[i1],
        ]);
  }
  getSize() {
    return this.minHeap.length;
  }
  getMin() {
    let i = 0;
    while (i < this.minHeap.length) {
      if (!this.map[this.minHeap[i]]) return this.minHeap[i];
      i++;
    }
    return -1;
  }
  getMax() {
    let i = 0;
    while (i < this.maxHeap.length) {
      if (!this.map[this.maxHeap[i]]) return this.maxHeap[i];
      i++;
    }
    return -1;
  }

  add(value) {
    this.minHeap.push(+value);
    this.maxHeap.push(+value);
    this.minBubbleUp();
    this.maxBubbleUp();
  }
  pollMin() {
    if (this.getSize() === 0) return null;

    if (this.getSize() === 1) {
      const value = this.minHeap.pop();
      this.map[value] = 1;
      return value;
    }
    const value = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();
    this.minBubbleDown();
    if (this.map[value] === 1) return this.pollMin();

    this.map[value] = 1;
    return value;
  }
  pollMax() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) {
      const value = this.maxHeap.pop();
      this.map[value] = 1;
      return value;
    }
    const value = this.maxHeap[0];
    this.maxHeap[0] = this.maxHeap.pop();
    this.maxBubbleDown();
    if (this.map[value] === 1) return this.pollMax();

    this.map[value] = 1;
    return value;
  }

  minBubbleUp() {
    let idx = this.minHeap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.minHeap[idx] >= this.minHeap[parentIdx]) break;

      this.swap(1, idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  maxBubbleUp() {
    let idx = this.maxHeap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0) {
      if (this.maxHeap[idx] <= this.maxHeap[parentIdx]) break;

      this.swap(0, idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  minBubbleDown() {
    let idx = 0;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let size = this.minHeap.length;

    while (left < size) {
      let smallerIdx =
        right < size && this.minHeap[right] < this.minHeap[left] ? right : left;
      if (this.minHeap[smallerIdx] >= this.minHeap[idx]) break;

      this.swap(1, smallerIdx, idx);
      idx = smallerIdx;
      left = 2 * idx + 1;
      right = 2 * idx + 2;
    }
  }

  maxBubbleDown() {
    let idx = 0;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let size = this.maxHeap.length;

    while (left < size) {
      let smallerIdx =
        right < size && this.maxHeap[right] < this.maxHeap[left] ? right : left;
      if (this.maxHeap[smallerIdx] <= this.maxHeap[idx]) break;

      this.swap(0, smallerIdx, idx);
      idx = smallerIdx;
      left = 2 * idx + 1;
      right = 2 * idx + 2;
    }
  }
}
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream("./input.txt"),
  output: process.stdout,
});

let answer = [];
let N = 0;
let data = [];

rl.on("line", function (line) {
  data.push(line.trim());
}).on("close", function () {
  const N = parseInt(data[0]);
  let idx = 1;
  for (let i = 0; i < N; i++) {
    const calcN = parseInt(data[idx]);
    const commands = data.slice(idx + 1, idx + 1 + calcN);
    solution(commands);
    idx += calcN + 1;
  }

  console.log(answer.join("\n"));
  process.exit();
});
function solution(data) {
  const heap = new Heap();

  for (const d of data) {
    const [type, num] = d.split(" ");
    if (type === "I") {
      heap.add(num);
      continue;
    }
    if (num === "-1") {
      heap.pollMin();
      continue;
    }
    heap.pollMax();
  }
  let max = heap.getMax();
  let min = heap.getMin();
  if (max === -1) answer.push("EMPTY");
  else answer.push(`${max} ${min}`);
}
