// 게임 맵 최단거리 (BFS)

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length) {
    const [targetX, targetY, count] = queue.shift();

    if (targetX === n - 1 && targetY === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = targetX + dx[i];
      const ny = targetY + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, count + 1]);
      }
    }
  }
  return -1;
}
