// N+1 행사

const fs = require("fs");
const [[M], event, goal] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const answer = [];

for (let i = 0; i < M; i++) {
  const count = binarySearch(event[i], goal[i]);
  answer.push(count);
}

console.log(answer.join(" "));

function binarySearch(n, a) {
  if (a === 0) return 0;
  if (n === 1) return 1;

  let left = 0;
  let right = a;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 몇개 살까

    let notUsed = mid;
    let totalCount = mid;

    while (notUsed >= n) {
      const gottenCount = Math.floor(notUsed / n);
      const remain = notUsed % n;
      notUsed = gottenCount + remain;

      totalCount += gottenCount;

      if (totalCount > a) break;
    }

    if (totalCount < a) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

function getTotal(buy, n) {
  let total = buy;
  let bonus = Math.floor(buy / n);
  while (bonus > 0) {
    total += bonus;
    bonus = Math.floor(bonus / n);
  }
  return total;
}
