const fs = require("fs");
const fileContents = fs.readFileSync(0).toString().trim().split("\n");
const [N, M, f] = fileContents[0].split(" ").map(Number);
const board = fileContents
  .slice(1, N + 1)
  .map((line) => line.split(" ").map(Number));
let [startX, startY] = fileContents[N + 1].split(" ").map(Number);
startX--;
startY--;
let fuel = f;

const passenger = fileContents
  .slice(N + 2)
  .map((line) => line.split(" ").map(Number));

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

const costs = new Array(M).fill(0);

let idx = 2;
for (let i = 0; i < M; i++) {
  passenger[i][0]--;
  passenger[i][1]--;
  passenger[i][2]--;
  passenger[i][3]--;
}

for (const [sx, sy, ex, ey] of passenger) {
  board[sx][sy] = idx;
  idx++;
}

console.log(simulate());

function simulate() {
  for (let i = 0; i < M; i++) {
    // 승객 고르기
    const [passengerIdx, cost] = pickPassenger(startX, startY);
    if (!checkFuel(cost) || passengerIdx === -1) {
      return -1;
    }

    fuel -= cost;

    // 데려다 줄 수 있는지 확인
    const cost2 = checkNeededFuel(passenger[passengerIdx]);
    if (!checkFuel(cost2) || cost2 === -1) {
      return -1;
    }

    fuel += cost2;

    board[passenger[passengerIdx][0]][passenger[passengerIdx][1]] = 0;
    startX = passenger[passengerIdx][2];
    startY = passenger[passengerIdx][3];
  }

  return fuel;
}

function pickPassenger(taxiX, taxiY) {
  let min = -1;
  const p = [];
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));
  const queue = [[taxiX, taxiY, 0]];
  visited[taxiX][taxiY] = 1;
  let head = 0;

  while (queue.length > head) {
    const [x, y, depth] = queue[head++];
    if (board[x][y] > 1) {
      if (min === -1) min = depth;
      if (min === depth) p.push([x, y]);
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        visited[nx][ny] ||
        board[nx][ny] === 1
      )
        continue;

      visited[nx][ny] = 1;
      queue.push([nx, ny, depth + 1]);
    }
  }

  if (min === -1) return [-1, -1];
  let r = N;
  let c = N;

  for (const [tr, tc] of p) {
    if (r > tr) {
      r = tr;
      c = tc;
      continue;
    }
    if (r === tr && c > tc) {
      r = tr;
      c = tc;
      continue;
    }
  }
  return [board[r][c] - 2, min];
}

function checkNeededFuel([sx, sy, ex, ey]) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));
  const queue = [[sx, sy, 0]];
  visited[sx][sy] = 1;

  let head = 0;

  while (queue.length > head) {
    const [x, y, depth] = queue[head++];
    if (x === ex && y === ey) {
      return depth;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        visited[nx][ny] ||
        board[nx][ny] === 1
      )
        continue;

      visited[nx][ny] = 1;
      queue.push([nx, ny, depth + 1]);
    }
  }
  return -1;
}

function checkFuel(x) {
  if (fuel < x) return 0;
  return 1;
}
