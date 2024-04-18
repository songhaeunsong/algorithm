// 피로도

function solution(k, dungeons) {
  let maxClears = 0;

  function explore(visited, power) {
    maxClears = Math.max(maxClears, visited.length);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited.includes(i)) {
        const [requiredPower, usedPower] = dungeons[i];
        if (power >= requiredPower) {
          visited.push(i);
          explore(visited, power - usedPower);
          visited.pop();
        }
      }
    }
  }

  explore([], k);
  return maxClears;
}
