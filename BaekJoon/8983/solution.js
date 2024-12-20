const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [M, N, L] = input[0].split(" ").map(Number);
const MLocation = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const NLocation = input.slice(2).map((line) => line.split(" ").map(Number));

let count = 0;

NLocation.forEach(([x, y]) => {
  const pos = binarySearch(MLocation, x);

  const withinRange1 =
    pos < MLocation.length && Math.abs(MLocation[pos] - x) + y <= L;
  const withinRange2 = pos > 0 && Math.abs(MLocation[pos - 1] - x) + y <= L;

  if (withinRange1 || withinRange2) {
    count++;
  }
});

console.log(count);

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}
