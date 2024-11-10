class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
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

    while (idx > 0 && this.heap[parentIdx][2] > this.heap[idx][2]) {
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
        right < size && this.heap[right][2] < this.heap[left][2] ? right : left;
      if (this.heap[smallerIdx][2] >= this.heap[idx][2]) break;

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

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(" ").map(Number));
let answer = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const pq = new MinHeap();
const maxSlope = Array.from({ length: N }, () => Array(N).fill(Infinity));
maxSlope[0][0] = 0;
pq.add([0, 0, 0]);

while (!pq.isEmpty()) {
  const [x, y, slope] = pq.poll();

  if (x === N - 1 && y === N - 1) {
    answer = slope;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      const currentSlope = Math.abs(board[x][y] - board[nx][ny]);
      const max = Math.max(slope, currentSlope);

      if (max < maxSlope[nx][ny]) {
        maxSlope[nx][ny] = max;
        pq.add([nx, ny, max]);
      }
    }
  }
}

console.log(answer);
