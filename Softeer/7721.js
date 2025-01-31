const fs = require("fs");
const F = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(simulate(F));

function simulate(F) {
  const match = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ];

  function getProbabilities(i, j) {
    const Fi = F[i];
    const Fj = F[j];
    const denominator = 5 * (Fi + Fj);
    return {
      win_i: (4 * Fi) / denominator,
      win_j: (4 * Fj) / denominator,
      draw: (Fi + Fj) / denominator,
    };
  }

  function dfs(matchIndex, probabilities, scores) {
    if (matchIndex === match.length) {
      const sortedScores = scores
        .map((score, index) => ({ index, score }))
        .sort((a, b) => b.score - a.score || a.index - b.index);
      const topTwo = sortedScores.slice(0, 2);
      return topTwo.some((player) => player.index === 0) ? probabilities : 0;
    }

    const [i, j] = match[matchIndex];
    const { win_i, win_j, draw } = getProbabilities(i, j);

    let probabilitySum = 0;

    if (win_i > 0) {
      const newScores = [...scores];
      newScores[i] += 3;
      probabilitySum += dfs(matchIndex + 1, probabilities * win_i, newScores);
    }

    if (win_j > 0) {
      const newScores = [...scores];
      newScores[j] += 3;
      probabilitySum += dfs(matchIndex + 1, probabilities * win_j, newScores);
    }

    if (draw > 0) {
      const newScores = [...scores];
      newScores[i] += 1;
      newScores[j] += 1;
      probabilitySum += dfs(matchIndex + 1, probabilities * draw, newScores);
    }

    return probabilitySum;
  }

  const initialScores = [0, 0, 0, 0];
  const probability = dfs(0, 1, initialScores);
  return (probability * 100).toFixed(3);
}
