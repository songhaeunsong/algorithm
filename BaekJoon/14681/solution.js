const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (a > 0) {
  if (b > 0) console.log("1");
  else if (b < 0) console.log("4");
} else if (a < 0) {
  if (b > 0) console.log("2");
  else if (b < 0) console.log("3");
}
