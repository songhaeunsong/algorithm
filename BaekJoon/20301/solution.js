// 반전 요세푸스

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.count === 0;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevFront = this.front;
      cachedPrevFront.prev = node;

      this.front = node;

      node.next = cachedPrevFront;
    }

    this.count += 1;
    return this.count;
  }

  shift() {
    if (this.count === 0) return null;

    const value = this.front.value;

    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return value;
  }

  push(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevRear = this.rear;
      cachedPrevRear.next = node;

      node.prev = cachedPrevRear;

      this.rear = node;
    }

    this.count += 1;

    return this.count;
  }

  pop() {
    if (this.count === 0) return;

    const value = this.rear.value;

    if (this.count === 1) {
      this.init();
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }

    return value;
  }
}

const fs = require("fs");
const [N, K, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let isRightDirection = true;
let removeCount = 0;
const deque = new Deque();

const answer = [];
for (let i = 1; i <= N; i++) {
  deque.push(i);
}

while (!deque.isEmpty()) {
  if (isRightDirection) {
    for (let i = 1; i < K; i++) {
      deque.push(deque.shift());
    }

    answer.push(deque.shift());
  } else {
    for (let i = 1; i < K; i++) {
      deque.unshift(deque.pop());
    }
    answer.push(deque.pop());
  }
  removeCount++;

  if (removeCount === M) {
    isRightDirection = !isRightDirection;
    removeCount = 0;
  }
}

console.log(answer.join("\n"));
