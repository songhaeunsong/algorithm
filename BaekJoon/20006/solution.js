// 랭킹전 대기열

const fs = require("fs");
const [num, ...input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ")); // input : 레벨, 닉네임

const [p, m] = num.map(Number); // 플레이어 수,  방의 정원

const answer = [];

const rooms = [];
const roomMember = [];

for (let i = 0; i < p; i++) {
  const level = +input[i][0];
  const name = input[i][1];

  let isEnteredRoom = 0;
  // 2. 입장 가능한 방이 있다면 입장시킨 후 방의 정원이 모두 찰 때까지 대기시킨다. 이때 입장이 가능한 방이 여러 개라면 먼저 생성된 방에 입장한다.
  if (rooms.length) {
    let roomId = 0;
    while (roomId < rooms.length) {
      const [start, end, isStarted] = rooms[roomId];

      if (isStarted) {
        roomId++;
        continue;
      }

      if (level >= start && level <= end) {
        roomMember[roomId].push(i);
        isEnteredRoom = 1;

        // 3. 방의 정원이 모두 차면 게임을 시작시킨다.
        if (roomMember[roomId].length === m) rooms[roomId][2] = 1;

        break;
      }
      roomId++;
    }
  }

  // 1. 플레이어가 입장을 신청하였을 때 매칭이 가능한 방이 없다면 새로운 방을 생성하고 입장시킨다. 이떄 해당 방에는 처음 입장한 플레이어의 레벨을 기준으로 -10부터 +10까지 입장 가능하다.
  if (!isEnteredRoom) {
    rooms.push([level - 10, level + 10, m === 1 ? 1 : 0]);
    roomMember.push([i]);
  }
}

for (let i = 0; i < rooms.length; i++) {
  const room = rooms[i];
  const members = roomMember[i];

  answer.push(room[2] ? "Started!" : "Waiting!");

  answer.push(
    members
      .map((m) => input[m])
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map((m) => m.join(" "))
      .join("\n")
  );
}
console.log(answer.join("\n"));
