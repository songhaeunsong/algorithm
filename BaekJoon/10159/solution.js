// 저울

const fs = require("fs");
const [num, _, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = +num;
const result = [];
const biggerNodes = Array.from({ length: N + 1 }, () => []);
const smallerNodes = Array.from({ length: N + 1 }, () => []);
input.forEach((edge) => {
    const [from, to] = edge.split(" ").map(Number);
    smallerNodes[from].push(to);
    biggerNodes[to].push(from);
})

for (let n = 1; n <= N; n++) { 
    const count = countKnownNodes(n);
    result.push(+N - count);
}

console.log(result.join("\n"));


function countKnownNodes(node) {
    let known = 1;
    const visited = new Array(N + 1).fill(0);
    visited[node] = 1;

    function bdfs(node) { 
        for (let i = 0; i < biggerNodes[node].length; i++) { 
            const next = biggerNodes[node][i];
            if (!visited[next]) { 
                visited[next] = 1;
                known++;
                bdfs(next);
            }
        }
    }

    function sdfs(node) { 
        for (let i = 0; i < smallerNodes[node].length; i++) { 
            const next = smallerNodes[node][i];
            if (!visited[next]) { 
                visited[next] = 1;
                known++;
                sdfs(next);
            }
        }
    }


    bdfs(node);
    sdfs(node);

    return known;
 }