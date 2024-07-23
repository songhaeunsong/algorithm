// 스택 수열

const fs = require("fs");
const [N, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);

const stack = [];
let result = "";

function simulate() { 
    let targetIdx = 0;

    for (let i = 1; i <= N; i++) { 
        if (stack.length === 0) { 
            stack.push(i);
            result += "+";
            continue;
        }

        while (stack[stack.length - 1] === input[targetIdx]) { 
            stack.pop();
            result += "-";
            targetIdx++;
        }

        if (stack[stack.length - 1] > input[targetIdx]) {
            return "NO"
        }
        else {
            stack.push(i);
            result += "+";
        }
    }
    for (let i = targetIdx; i < N; i++) { 
        if (input[i] !== stack[N - i - 1]) return "NO";
        result += "-";
    }
    return result.split("").join("\n");
    
}


console.log(simulate());