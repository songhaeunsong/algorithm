const fs = require("fs");
let K = +fs.readFileSync(0).toString().trim();

let size = 1;
while (K > size) {
  size *= 2;
}

let cuts = 0;
let remaining = size;

while (K > 0) {
  if (K >= remaining) {
    K -= remaining;
  } else {
    remaining /= 2;
    cuts += 1;
  }
}

console.log(size, cuts);
