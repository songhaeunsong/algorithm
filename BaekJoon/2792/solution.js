// 보석 상자

const fs = require("fs");
const inputLines = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = inputLines.shift().split(" ").map(Number);
const jewels = inputLines.map(Number);

function search() {
  let left = 1;
  let right = Math.max(...jewels); // 최대 질투심
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let count = 0; // 나누어주는 아이들 수
    for (let i = 0; i < jewels.length; i++) {
      count += Math.ceil(jewels[i] / mid);
    }
    if (count > N) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

console.log(search());
