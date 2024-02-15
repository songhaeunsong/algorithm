const fs = require("fs");
const fileContent = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = fileContent[0].split(" ").map(Number);
const words = fileContent.slice(1, N + 1).sort();
const tests = fileContent.slice(N + 1);

let count = 0;

function binarySearch(test) {
  let left = 0;
  let right = N - 1;
  while (left <= right) {
    const target = Math.floor((left + right) / 2);
    const slicedWord = words[target].slice(0, test.length);
    if (test === slicedWord) {
      count++;
      return;
    }
    if (words[target] < test) {
      left++;
    } else {
      right--;
    }
  }
  return;
}

for (let test of tests) {
  binarySearch(test);
}

console.log(count);
