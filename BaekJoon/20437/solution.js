// 문자열 게임 2

const fs = require("fs");
const [T, ...input] = fs.readFileSync(0).toString().trim().split("\n");

const answerArr = [];
let testIdx = 0;

for (let t = 0; t < T; t++) {
  const [W, K] = input.slice(testIdx, testIdx + 2);
  answerArr.push(main(W, +K));
  testIdx += 2;
}

console.log(answerArr.join("\n"));

function main(w, k) {
  let answer = "";

  const map = {};
  let maxValue = 0;

  for (const char of w) {
    map[char] = (map[char] || 0) + 1;
    maxValue = Math.max(map[char], maxValue);
  }

  const finded = find(w, k, map, maxValue);
  answer = finded === -1 ? -1 : finded.join(" ");

  return answer;
}

function find(w, k, map, maxValue) {
  if (maxValue < k) return -1;
  if (k === 1) return [1, 1];

  let left = 0;
  let right = 0;

  let currentCount = 0;
  let min = Infinity;
  let max = 0;

  while (left < w.length) {
    if (right >= w.length) {
      left++;
      currentCount = 0;
      right = left;
      continue;
    }
    if (map[w[left]] < k) {
      left++;
      right = left;
      continue;
    }

    if (w[left] !== w[right]) {
      right++;
      continue;
    }

    currentCount++;

    if (currentCount === k) {
      min = Math.min(right - left + 1, min);
      max = Math.max(right - left + 1, max);
      left++;
      right = left;
      currentCount = 0;
    } else {
      right++;
    }
  }
  return [min, max];
}
