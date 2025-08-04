// 카드컨트롤

const fs = require("fs");
const [_, input] = fs.readFileSync(0).toString().trim().split("\n");

const cards = input.split(" ");
let answer = Infinity;

const visited = {};
visited[cards.join("")] = 1;

bruteforce(cards, 0);
console.log(answer);

function bruteforce(cards, count) {
  const isJunseokWin = checkScore(cards);

  if (isJunseokWin) {
    answer = Math.min(answer, count);
    return;
  }

  for (let i = 1; i < cards.length; i++) {
    const newCards = [cards[i], ...cards.slice(0, i), ...cards.slice(i + 1)];

    const newCardsStr = newCards.join("");
    if (visited[newCardsStr] <= count + 1) continue;

    visited[newCardsStr] = count + 1;
    bruteforce(newCards, count + 1);
  }
}

function checkScore(cards) {
  let p1Score = 0;
  let p2Score = 0;

  for (let i = 0; i < cards.length; i += 2) {
    if (cards[i] === "O") p1Score++;
    if (cards[i + 1] === "O") p2Score++;
  }

  return p1Score > p2Score;
}
