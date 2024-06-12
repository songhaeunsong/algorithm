// 크로스워드

const fs = require("fs");
const [_, ...matrix] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let words = [];

matrix.forEach((row) => {
  let arr = row.split("#").filter((word) => word.length > 1);
  words.push(...arr);
});

matrix.forEach((row) => {
  let arr = row.split("#").filter((word) => word.length > 1);
  words.push(...arr);
});

// 열과 행 교환
let transposedM = matrix.map((_, i) => matrix.map((row) => row[i]).join(""));

transposedM.forEach((row) => {
  let arr = row.split("#").filter((word) => word.length > 1);
  words.push(...arr);
});

console.log(words.sort()[0]);
