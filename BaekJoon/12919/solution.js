const fs = require("fs");
const [before, after] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(""));
let isPossible = false;
backtracking(after);

console.log(isPossible ? 1 : 0);

function backtracking(current) {
  if (isPossible) return;

  if (current.length <= before.length) {
    if (current.join("") === before.join("")) {
      isPossible = true;
    }
    return;
  }

  if (current.at(-1) === "A") {
    current.pop();

    backtracking(current);
    current.push("A");
  }

  if (current[0] === "B") {
    current.shift();
    backtracking([...current].reverse());
    current.unshift("B");
  }
}
