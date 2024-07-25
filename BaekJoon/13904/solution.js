// 과제

class MinHeap { 
    constructor() { 
        this.heap = [];
    }

    sum() { 
        return this.heap.reduce((acc, cur) => acc + cur, 0);
    }

    swap(i1, i2) { 
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }

    size() { 
        return this.heap.length;
    }

    add(v) {
        this.heap.push(v);
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
            this.swap(idx, parentIdx)
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }
    bubbleDown() { 
        let idx = 0;
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;

        while (1) { 
            let smaller = idx;
            if (this.heap[left] && this.heap[left] < this.heap[smaller]) smaller = left;
            if (this.heap[right] && this.heap[right] < this.heap[smaller]) smaller = right;

            if (smaller === idx) break;

            this.swap(idx, smaller);
            idx = smaller;
            left = idx * 2 + 1;
            right = idx * 2 + 2;
        }
    }

}

const fs = require("fs");
const [_, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n").map((line) => line.split(" ").map(Number));
input.sort((a, b) => a[0] - b[0] ||  b[1] - a[1] );

const minHeap = new MinHeap();
minHeap.add(0);

for (const [time, score] of input) { 
    if (minHeap.size() < time) { 
        minHeap.add(score);
        continue;
    }
    const target = minHeap.poll();
        target > score ? minHeap.add(target) : minHeap.add(score);
    
}

console.log(minHeap.sum());