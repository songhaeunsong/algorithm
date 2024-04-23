// 숫자카드 2

const fs = require("fs");
const [, cardInput, , cardTypeInput] = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n");

const cards = cardInput.split(" ").map(Number);
const cardTypes = cardTypeInput.split(" ").map(Number);
const cardMap = {};

cards.forEach((card) => (cardMap[card] = (cardMap[card] || 0) + 1));
const result = cardTypes.map((type) => cardMap[type] || 0).join(" ");

console.log(result);
