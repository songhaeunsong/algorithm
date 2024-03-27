// N과 M
const fs = require("fs");
const [N, M] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

let result = "";
function findCombination(arr) {
  if (arr.length === M) {
    result += arr.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!arr.includes(i)) {
      arr.push(i);
      findCombination(arr);
      arr.pop();
    }
  }
}
findCombination([], 1);

console.log(result);
