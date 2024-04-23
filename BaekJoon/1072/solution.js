// 게임 (수학으로 풀기)

const fs = require("fs");
const [Y, X] = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

function countGame(X, Y) {
  let cnt = Math.floor((X * 100) / Y);
  if (cnt >= 99) return -1;
  cnt++;
  const moreGame = Math.ceil((cnt * Y - 100 * X) / (100 - cnt));
  return moreGame;
}
console.log(countGame(X, Y));
