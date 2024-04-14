// 회전 초밥
// 1 초, 256 MB
// 2 ≤ N ≤ 30,000
// 2 ≤ d ≤ 3,000
// 2 ≤ k ≤ 3,000 (k ≤ N)
// 1 ≤ c ≤ d

// 결과: 14608 KB	196 ms

const fs = require("fs");
const fileContent = fs.readFileSync("./input.txt").toString().split("\n");
const [N, d, k, c] = fileContent.shift().split(" ").map(Number);
const sushi = fileContent.map(Number);

const eaten = {};
eaten[c] = 1;

let kind = 1;

for (let i = 0; i < k; i++) {
  if (!eaten[sushi[i]]) {
    eaten[sushi[i]] = 1;
    kind++;
  } else {
    eaten[sushi[i]]++;
  }
}

const counts = [kind];
let left = 0;
let right = k;

while (right < N) {
  if (!eaten[sushi[right]]) {
    eaten[sushi[right]] = 1;
    kind++;
  } else eaten[sushi[right]]++;

  eaten[sushi[left]]--;
  if (eaten[sushi[left]] === 0) kind--;

  counts.push(kind);

  left++;
  right++;
  if (right === k) break;
  if (right === N) right = 0;
}
console.log(Math.max(...counts));
