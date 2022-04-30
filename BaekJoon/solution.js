const fs = require("fs");
const inputdata = fs
  .readFileSync("/dev/algorithm/BaekJoon")
  .toString()
  .split("")
  .map((item) => +item);
const [a, b] = inputdata;

if (a === b) console.log("==");
else {
  let answer = a > b ? ">" : "<";
  console.log(answer);
}
