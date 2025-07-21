// 등수 구하기

const fs = require("fs");
const [[N, myScore, P], input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

console.log(findMyLank());

function findMyLank() {
  if (!input) return 1;

  let answer = input.length + 1;

  for (let i = 0; i < N; i++) {
    if (myScore === input[i] && input.length === P && input[i] === input.at(-1))
      break;
    if (myScore >= input[i]) {
      answer = i + 1;
      break;
    }
  }
  return answer > P ? -1 : answer;
}
