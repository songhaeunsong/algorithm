// 단축키 지정

const fs = require("fs");
const [_, ...inputs] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const shortcutKeys = {};
const result = [];

for (const input of inputs) findShortCutKey(input);
console.log(result.join("\n"));

function findShortCutKey(sentence) {
  let words = sentence.split(" ");

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];

    if (!shortcutKeys[word[0].toUpperCase()]) {
      shortcutKeys[word[0].toUpperCase()] = 1;

      words[idx] = `[${word[0]}]${word.slice(1)}`;
      result.push(words.join(" "));
      return;
    }
  }

  let char = sentence.split("");
  let idx = 0;

  while (idx < char.length) {
    const target = char[idx].toUpperCase();
    if (char[idx] !== " " && !shortcutKeys[target]) {
      shortcutKeys[target] = 1;
      char[idx] = `[${char[idx]}]`;
      break;
    }
    idx++;
  }
  result.push(char.join(""));
  return;
}
