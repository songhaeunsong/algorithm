// 문자 해독

const fs = require("fs");
const [num, W, S] = fs.readFileSync(0).toString().trim().split("\n");

const [g, s] = num.split(" ").map(Number);

console.log(main());

function main() {
  let count = 0;

  const map = new Map();

  for (let i = 0; i < g; i++) {
    map.set(W[i], (map.get(W[i]) || 0) + 1);
  }

  for (let i = 0; i < g; i++) {
    if (map.has(S[i])) map.set(S[i], map.get(S[i]) - 1);
  }

  let left = 0;
  let right = g - 1;

  while (right < s) {
    const isSame = compare(map);

    if (isSame) count++;

    if (map.has(S[left])) map.set(S[left], map.get(S[left]) + 1);
    if (map.has(S[++right])) map.set(S[right], map.get(S[right]) - 1);

    left++;
  }

  function compare(map) {
    for (const [_, value] of map) {
      if (value !== 0) return 0;
    }

    return 1;
  }

  return count;
}
