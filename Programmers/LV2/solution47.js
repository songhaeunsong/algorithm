function solution(k, dungeons) {
  let maxClears = 0;
  const dunseonVisited = Array.from({ length: dungeons.length }, () => 0);

  function explore(visited, power) {
    maxClears = Math.max(maxClears, visited.length);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {
        const [requiredPower, usedPower] = dungeons[i];
        if (power >= requiredPower) {
          visited[i] = 1;
          explore(visited, power - usedPower);
          visited[i] = 0;
        }
      }
    }
  }

  explore(dunseonVisited, k);
  return maxClears;
}
