const fs = require("fs");
const [[N], ...edges] = fs.readFileSync(0).toString().trim().split("\n").map(line=>line.split(" ").map(Number));
edges.pop();

const friend = Array.from({length: N+1}, () => new Array(N+1).fill(Infinity))

const map = {};

for(const [from, to] of edges){
    friend[from][to] = 1;
    friend[to][from] = 1;
}

for(let i = 1; i <= N; i++){
    friend[i][i] = 0;
}

for(let k = 1; k <= N; k++){
    for(let i = 1; i <= N; i++){
        for(let j = 1; j <= N; j++){
            if(friend[i][k] !== Infinity && friend[k][j] !== Infinity) {
                friend[i][j] = Math.min(friend[i][j], friend[i][k] + friend[k][j]);
            }
        }
    }
}

let min = Infinity;

for(let i = 1; i <= N; i++){
    let count = 0;
    for(let j = 1; j <= N; j++){
        count = Math.max(count, friend[i][j]);
    }
    if(map[count]){
        map[count].push(i);
    }
    else{
        map[count] = [i];
    }

    if(min > count){
        min = count;
    }
}

console.log(`${min} ${map[min].length}\n${map[min].sort((a,b)=>a-b).join(" ")}`);

