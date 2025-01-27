const fs = require("fs");

const [[n], ...scores] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const totalScore = Array(n).fill(0);

scores.forEach((round) => {
  for (let i = 0; i < n; i++) {
    totalScore[i] += round[i];
  }
});
scores.push(totalScore);

scores.forEach((score) => {
  const scoreCounter = {};
  score.forEach((s) => {
    scoreCounter[s] = (scoreCounter[s] || 0) + 1;
  });

  const scoreSet = Array.from(new Set(score)).sort((a, b) => b - a);

  const scoreMap = {};
  let token = 1;
  for (const s of scoreSet) {
    scoreMap[s] = token;
    token += scoreCounter[s];
  }

  const result = score.map((s) => scoreMap[s]);
  console.log(result.join(" "));
});
