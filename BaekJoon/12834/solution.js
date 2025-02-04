class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
    swap(a, b) {
      [this.heap[a][0], this.heap[a][1], this.heap[b][0], this.heap[b][1]] = [this.heap[b][0], this.heap[b][1], this.heap[a][0], this.heap[a][1]];
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
        if (this.heap[idx][1] >= this.heap[parent][1]) break;
  
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
        if (this.heap[left] && this.heap[left][1] < this.heap[idx][1]) smaller = left;
        if (this.heap[right] && this.heap[right][1] < this.heap[idx][1])
          smaller = right;
  
        if (smaller === idx) break;
  
        this.swap(smaller, idx);
        idx = smaller;
        left = (idx + 1) * 2 - 1;
        right = (idx + 1) * 2;
      }
    }
  }
  
const fs = require("fs");
const [[N,V,E], goals, team, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number));
const pq = new MinHeap();
let answer = 0;
const edges = Array.from({length: E+1}, () => [])

for(const [from, to, cost] of input){
    edges[from].push([to, cost]);
    edges[to].push([from, cost]);
}

for(let goal of goals){
    answer += dijkstra(goal);
}

console.log(answer);

function dijkstra (goal) {
    const dist = new Array(E+1).fill(Infinity);
    dist[goal] = 0;
    pq.add([goal, 0])

    while(pq.size()){
        const [n, c] = pq.poll();

        if(dist[n] < c) continue;

        for(const [nn, nc] of edges[n]){
            if(dist[nn] > c + nc) {
                dist[nn] = c + nc;
                pq.add([nn, dist[nn]]);
            }
        }
    }

    let sum = 0;
    for(const t of team){
        const cost = dist[t];
        if(cost === Infinity){
            sum -= 1; 
        }
        else sum += cost;
    }

    return sum;
}



