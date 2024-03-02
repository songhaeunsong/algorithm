// A+B

const [a, b] = require("fs").readFileSync("./input.txt").toString().split(" ");
console.log(+a + +b);
