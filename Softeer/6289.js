// 우물 안 개구리


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(a, b){
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]];
    }

    add(a) {
        this.heap.push(a);
        this.bubbleUp();
    }

    poll(){
        if(this.heap.length <= 1) return this.heap.pop();
        let value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return value;
    }

    bubbleUp(){
        let idx = this.heap.length-1;
        let parent = parseInt((idx-1)/2);

        while(idx > 0){
            if(this.heap[parent] >= this.heap[idx]) break;
            this.swap(idx, parent);
            idx = parent;
            parent = parseInt((idx-1)/2);
        }

    }
    bubbleDown(){
        let idx = 0;
        let left = (idx + 1) * 2 - 1;
        let right = (idx + 1) * 2 ;

        while(1){
            let bigger = idx;
            if(this.heap[left] && this.heap[left] > this.heap[idx]) bigger = left
            if(this.heap[right] && this.heap[right] > this.heap[idx]) bigger = right

            if(bigger === idx) break;
            this.swap(idx, bigger);
            idx = bigger;
            left = (idx + 1) * 2 - 1;
            right = (idx + 1) * 2 ;
        }
    }
}

const fs = require("fs");
const [[N,M], w, ...edges] = fs.readFileSync(0).toString().trim().split("\n").map(line => line.split(" ").map(Number));

let count = 0;

const friend = Array.from({length: N}, () => new MaxHeap());

for(const [from, to] of edges){
    friend[from - 1].add(w[to - 1]);
    friend[to - 1].add(w[from - 1]);
}


for(let i = 0; i < N; i++){
    if(!friend[i].size()){
        count++;
        continue;
    }
    const my = w[i];
    const currentMax = friend[i].poll();

    if(my > currentMax)count++;
}




console.log(count);