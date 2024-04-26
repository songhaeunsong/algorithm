// 기타 레슨

const fs = require("fs");
const [[N, M], [...lectures]] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function search() {
  const lectureMaxLength = Math.max(...lectures);
  let left = lectureMaxLength;
  let right = lectureMaxLength * N;

  while (left <= right) {
    let mid = parseInt((left + right) / 2); // 블루레이 크기
    let sum = 0;
    let count = 1; // 블루레이 개수
    for (const lecture of lectures) {
      sum += lecture;
      if (sum > mid) {
        count++;
        sum = lecture;
      }
      if (count > M) break;
    }
    if (count > M) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

console.log(search());
