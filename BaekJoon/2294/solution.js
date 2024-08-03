const fs = require("fs");
const [nums, ...inputs] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [n, k] = nums.split(" ").map(Number);
const coins = inputs.map(Number);
const dp = new Array(100001).fill(-1);

for(let c = 0; c < n; c++){
    dp[coins[c]] = 1;
}

for(let target = 1; target <= k; target++){
    if(dp[target] !== -1)continue;
    let min = Infinity;
    for(let c = 0; c < n; c++){
        const prev = dp[target - coins[c]] || -1;
        if(prev !== -1) min = Math.min(min, prev); 
    }
    if(min !== Infinity)dp[target] = min+1;    
}
console.log(dp[k]);