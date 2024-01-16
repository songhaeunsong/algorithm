// 설탕 배달 dp

const fs = require("fs");
fileContent = fs.readFileSync("./input.txt").toString();
let input = Number(fileContent);
// "/dev/stdin"
function solution(target) {
  let amountOfThree = 0;
  while (target >= 3) {
    if (target % 5 === 0) return target / 5 + amountOfThree;
    if (target === 3) return amountOfThree + 1;
    amountOfThree++;
    target -= 3;
  }
  return -1;
}

console.log(solution(input));
