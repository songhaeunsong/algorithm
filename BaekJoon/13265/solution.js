// 색칠하기

const fs = require("fs");
const [T, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n");

let start = 0;
for (let t = 0; t < T; t++) { 
    const [circleCount, lineCount] = input[start].split(" ").map(Number);
    solution(circleCount, input.slice(start + 1, start + lineCount + 1));
    start = start + lineCount + 1;
    
}

function solution(N, edges) { 
    let answer = true;
    const nodeInfo = Array.from({ length: N + 1 }, () => []);
    const color = new Array(N + 1).fill(0);
    // 1 -> color1
    // 2 -> color2
    
    for (const edge of edges) { 
        const [from, to] = edge.split(" ").map(Number);
        nodeInfo[from].push(to);
        nodeInfo[to].push(from);
    }

    const startNode = edges[0].split(" ")[0];
    const queue = [startNode];
    color[startNode] = 1;
    let head = 0;

    while(queue.length > head){
        const node = queue[head++];
        for(let i = 0; i < nodeInfo[node].length; i++){
            const next = nodeInfo[node][i];

            if(color[next] === color[node]){
                answer = false;
                break;
            }

            if(!color[next]){
                color[next] = color[node] === 1 ? 2 : 1; 
                queue.push(next);
            }
        }
    }

    console.log(answer ? "possible":"impossible");
}