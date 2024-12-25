const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim();

console.log(N);

let path = [];

let num = 1;
path.push(num);

if (N % 3 === 2) {
  num++;
  path.push(num);
}

while (true) {
  num += 2;
  path.push(num);
  if (N % 3 === 0 && num === N) {
    path.push(num - 1);
    path.push(1);
    break;
  }

  num -= 1;
  path.push(num);
  if (N % 3 === 2 && num === N) {
    path.push(1);
    break;
  }

  num += 2;
  path.push(num);
  if ((N % 3 === 1 || N % 3 === 2) && num === N) {
    path.push(1);
    break;
  }
}

console.log(path.join(" "));
