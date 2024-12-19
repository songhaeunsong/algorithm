const fs = require("fs");
const [[n], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < n - 2; i++) {
  let left = i + 1;
  let right = n - 1;

  while (left < right) {
    const sum = input[i] + input[left] + input[right];

    if (sum === 0) {
      if (input[left] === input[right]) {
        // 같은 값인 경우 조합 계산
        const occurrences = right - left + 1;
        count += (occurrences * (occurrences - 1)) / 2;
        break;
      }

      let lCount = 1;
      let rCount = 1;

      while (left + 1 < right && input[left] === input[left + 1]) {
        lCount++;
        left++;
      }

      while (right - 1 > left && input[right] === input[right - 1]) {
        rCount++;
        right--;
      }

      count += lCount * rCount;
      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(count);
