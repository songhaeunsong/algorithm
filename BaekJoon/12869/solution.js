
const fs = require("fs");
const [[N], input] = fs.readFileSync(0).toString().trim().split("\n").map(line => line.split(" ").map(Number));

const attacks = [[9,3,1], [9,1,3], [3,1,9], [3,9,1], [1, 3,9], [1,9,3]];

const dp = Array.from({length:61}, () => Array.from({length:61}, () => new Array(61).fill(Infinity)));

for(let i = 0; i < 3-N; i++){
    input.push(0);
}

dfs(...input, 0);


function dfs(first, second, third, count){
    if(dp[first][second][third] <= count) return;

    dp[first][second][third] = count;


    for(let i = 0; i < 6; i++){
        const nextf = Math.max(0, first - attacks[i][0])
        const nexts = Math.max(0, second - attacks[i][1])
        const nextt=  Math.max(0, third  - attacks[i][2])
    
        dfs(nextf,nexts,nextt, count+1);
    }
}

console.log(dp[0][0][0]);