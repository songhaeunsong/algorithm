// 단어 맞추기

const fs = require("fs");
const [[n], ...input] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(""));

for (let word of input) {
  let changeIdxs = findNextWord(word);
  if (changeIdxs.length !== 0) {
    [word[changeIdxs[0]], word[changeIdxs[1]]] = [
      word[changeIdxs[1]],
      word[changeIdxs[0]],
    ];
    word = [
      ...word.slice(0, changeIdxs[0] + 1),
      ...word.slice(changeIdxs[0] + 1).sort(),
    ];
  }
  console.log(word.join(""));
}

function findNextWord(word) {
  for (let left = word.length - 2; left >= 0; left--) {
    for (let right = word.length - 1; right > left; right--) {
      if (word[left] === word[right]) continue;
      if (
        [word[left], word[right]].join("") ===
        [word[left], word[right]].sort().join("")
      )
        return [left, right];
    }
  }
  return [];
}
