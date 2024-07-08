// 이상한 술집

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let n = 0;
let k = 0;
let max = 0;
const input = [];

rl.on('line', (line) => {
    if(n === 0 ){
        [n, k] = line.split(" ").map(Number);
    }else{
        const num = +line;
        input.push(num)
        if(max < num) max = num;
    }
    if(input.length === n) rl. close();
});
  
rl.on('close', () => {
    let left = 1;
    let right = max;

    while(left <= right){
        const target = Math.floor((left + right)/2);
        let count = 0;
        for(const num of input){
            count += Math.floor(num / target);
            if(count >= k)break;
        }
        if(count >= k)left = target + 1;
        else right = target - 1;
    }
    console.log(right)
  process.exit();
});