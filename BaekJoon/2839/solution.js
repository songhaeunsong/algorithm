const fs = require("fs");
fileContent = fs.readFileSync("./input.txt").toString();
let input = Number(fileContent);
// "/dev/stdin"
function solution(target) {
  const dp = [[3, 5]];
  let amount = 0;

  let fc = () => {
    fc();
  };
}

console.log(solution(input));
