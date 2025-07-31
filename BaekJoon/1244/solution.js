// 스위치 켜고 끄기

const fs = require("fs");
const [[switchN], switches, studentsN, ...students] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

for (const [gender, location] of students) {
  if (gender === 1) {
    for (let i = location - 1; i < switchN; i += location) {
      switches[i] = switches[i] === 0 ? 1 : 0;
    }
  } else {
    switches[location - 1] = switches[location - 1] === 0 ? 1 : 0;

    for (let i = 1; i <= Math.min(switchN - location, location - 1); i++) {
      const left = location - 1 - i;
      const right = location - 1 + i;
      if (switches[left] !== switches[right]) break;

      switches[left] = switches[left] === 0 ? 1 : 0;
      switches[right] = switches[right] === 0 ? 1 : 0;
    }
  }
}

let lines = Math.ceil(switchN / 20);
for (let i = 0; i < lines; i++) {
  console.log(switches.slice(i * 20, (i + 1) * 20).join(" "));
}
