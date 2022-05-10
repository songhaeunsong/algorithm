/*반복문: 구구단 */

const fs = require("fs");
const n = fs.readFileSync(0).toString().trim().split("\n").map(Number);

for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
