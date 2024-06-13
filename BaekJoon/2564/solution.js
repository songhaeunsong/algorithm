const fs = require("fs");
const [[X, Y], _, ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const distanceData = Array.from({ length: input.length }, () => 0);

input.forEach(([area, position], idx) => {
  if (area === 1) {
    distanceData[idx] = position;
  } else if (area === 2) {
    distanceData[idx] = 2 * X + Y - position;
  } else if (area === 3) {
    distanceData[idx] = (X + Y) * 2 - position;
  } else {
    distanceData[idx] = X + position;
  }
});

const myLocation = distanceData.pop();

const mins = distanceData.map((store) => {
  let minDistance = Math.abs(store - myLocation);
  return Math.min(minDistance, (X + Y) * 2 - minDistance);
});

console.log(mins.reduce((acc, cur) => acc + cur, 0));
