const fs = require("fs");
const data = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const N = data[0];
const chart = data.slice(1);

let stack = [chart[0]];
let maxi = chart[0];
let cnt = 0;

for (let i = 1; i < N; i++) {
  let val = chart[i];
  if (stack[0] > val) {
    stack.pop();
    stack.push(val);
  } else if (stack[0] < val) {
    cnt += val - stack[stack.length - 1];
    stack.pop();
    stack.push(val);
  } else {
  }
  if (val > maxi) {
    maxi = val;
  }
}

while (stack.length > 0) {
  let topVal = stack.pop();
  cnt += maxi - topVal;
}

console.log(cnt);
