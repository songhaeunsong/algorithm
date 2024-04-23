// 암기왕

const fs = require("fs");
const [T, ...inputLines] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

for (let t = 0; t < +T; t++) {
  const input = inputLines.slice(4 * t, 4 * (t + 1));
  const reference = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const valuesToCheck = input[3].split(" ").map(Number);
  console.log(reference, valuesToCheck);

  const result = valuesToCheck.map((value) => {
    return binarySearch(value, reference);
  });

  console.log(result.join("\n"));
}

function binarySearch(value, reference) {
  let left = 0;
  let right = reference.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (reference[mid] === value) return 1;
    if (reference[mid] < value) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}
