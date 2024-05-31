// 절댓값 힙
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

  poll() {
    if (this.heap.length === 0) return [0, 0];
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    while (index > 0) {
      if (this.heap[index][1] > this.heap[parentIdx][1]) break;
      if (
        this.heap[index][1] === this.heap[parentIdx][1] &&
        this.heap[index][0] > this.heap[parentIdx][0]
      )
        break;

      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (1) {
      let smallerIdx = index;
      if (
        this.heap[rightIdx] &&
        (this.heap[rightIdx][1] < this.heap[smallerIdx][1] ||
          (this.heap[rightIdx][1] === this.heap[smallerIdx][1] &&
            this.heap[rightIdx][0] < this.heap[smallerIdx][0]))
      )
        smallerIdx = rightIdx;
      if (
        this.heap[leftIdx] &&
        (this.heap[leftIdx][1] < this.heap[smallerIdx][1] ||
          (this.heap[leftIdx][1] === this.heap[smallerIdx][1] &&
            this.heap[leftIdx][0] < this.heap[smallerIdx][0]))
      )
        smallerIdx = leftIdx;

      if (smallerIdx === index) break;

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

const fs = require("fs");
const [_, ...inputs] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const minHeap = new MinHeap();

let result = [];
for (const input of inputs) {
  if (input === 0) {
    result.push(minHeap.poll()[0]);
    continue;
  }
  minHeap.add([input, Math.abs(input)]);
}

console.log(result.join("\n"));
