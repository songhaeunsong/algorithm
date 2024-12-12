const fs = require("fs");
const [nums, ...input] = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);
const times = input.map(Number).sort((a, b) => a - b);

console.log(binarySearch());

function binarySearch() {
  let left = BigInt(1);
  let right = BigInt(times.at(-1)) * BigInt(M);

  while (left <= right) {
    const mid = (left + right) / BigInt(2);
    let count = BigInt(0);
    for (const time of times) {
      count += mid / BigInt(time);
      if (count > BigInt(M)) break;
    }
    if (count >= BigInt(M)) right = mid - BigInt(1);
    else left = mid + BigInt(1);
  }

  return left.toString();
}
