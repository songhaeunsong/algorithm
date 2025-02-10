const fs = require('fs');
const [[N,R,Q], ...input] = fs.readFileSync(0).toString().trim().split("\n").map(line => line.split(" ").map(Number));

const dp = new Array(N+1).fill(1);
const visited = new Array(N+1).fill(0);
const edges = Array.from({length: N+1}, () => []);
for(let i = 0; i < N-1; i++){
    const [from, to] = input[i];
    edges[from].push(to);
    edges[to].push(from);
}

visited[R] = 1;
dfs(R);

for(let i = N-1; i < N+Q-1; i++){
    const [target] = input[i];
    console.log(dp[target]);
}

function dfs(node){
    if(node !== R && edges[node].length === 1) {
        return dp[node];
    }

    for(const next of edges[node]){
        if(visited[next]) continue;
        visited[next] = 1
        dp[node] += dfs(next);
    }

    return dp[node];
}