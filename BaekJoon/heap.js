class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  poll() {
    if (this.heap.length <= 1) return this.heap.pop();
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }
  add(a) {
    this.heap.push(a);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = parseInt((idx - 1) / 2);

    while (idx > 0) {
      if (this.heap[idx] >= this.heap[parent]) break;

      this.swap(idx, parent);
      idx = parent;
      parent = parseInt((idx - 1) / 2);
    }
  }
  bubbleDown() {
    let idx = 0;
    let left = (idx + 1) * 2 - 1;
    let right = (idx + 1) * 2;

    while (1) {
      let smaller = idx;
      if (this.heap[left] && this.heap[left] < this.heap[idx]) smaller = left;
      if (this.heap[right] && this.heap[right] < this.heap[idx])
        smaller = right;

      if (smaller === idx) break;

      this.swap(smaller, idx);
      idx = smaller;
      left = (idx + 1) * 2 - 1;
      right = (idx + 1) * 2;
    }
  }
}
