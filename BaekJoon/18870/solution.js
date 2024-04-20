const fs = require("fs");
const [, input] = fs.readFileSync("./input.txt").toString().split("\n");
const numbers = input.split(" ").map(Number);
const indexMap = {};
const sortedUniqueNum = Array.from(new Set(numbers)).sort((a, b) => a - b);
indexMap[sortedUniqueNum[0]] = 0;

sortedUniqueNum.forEach((num, i) => {
  indexMap[num] = i;
});

const result = numbers.map((num) => indexMap[num]).join(" ");

console.log(result);
