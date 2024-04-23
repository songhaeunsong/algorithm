// 숫자 카드 2 (이진탐색으로 풀기)

const fs = require("fs");
const [, cardInput, , cardTypeInput] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

const cards = cardInput
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const cardTypes = cardTypeInput.split(" ").map(Number);

function countCards(type) {
  const firstPos = lowerBound(type);
  if (firstPos === cards.length || cards[firstPos] !== type) return 0;
  const lastPos = upperBound(type);
  return lastPos - firstPos;
}

function lowerBound(target) {
  let left = 0;
  let right = cards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (cards[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

function upperBound(target) {
  let left = 0;
  let right = cards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (cards[mid] > target) right = mid;
    else left = mid + 1;
  }
  return right;
}
const result = cardTypes.map((type) => countCards(type)).join(" ");

console.log(result);
