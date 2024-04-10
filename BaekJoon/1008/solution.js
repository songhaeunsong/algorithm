const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ").map(Number);
const [a, b] = input;
console.log(a / b);
