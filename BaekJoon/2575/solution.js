// N번째 큰 수

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
  firstChild() {
    return this.heap[0];
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
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (this.heap[index] >= this.heap[parentIdx]) break;

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
      if (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[smallerIdx])
        smallerIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[smallerIdx])
        smallerIdx = rightIdx;

      if (smallerIdx === index) break;

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minHeap = new MinHeap();

let N = -1;
let count = 0;
rl.on("line", function (line) {
  if (N === -1) {
    N = parseInt(line);
    return;
  }
  line.split(" ").forEach((value) => {
    minHeap.add(+value);
    if (minHeap.getSize() >= N) minHeap.poll();
  });
  count++;

  if (count === N) rl.close();
}).on("close", function () {
  console.log(minHeap.firstChild());

  process.exit();
});
