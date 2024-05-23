// 이모티콘

const fs = require("fs");
const N = +fs.readFileSync("./input.txt").toString();

const visited = Array.from({ length: 1001 }, () => new Array(1001).fill(0));
const queue = [[1, 0, 0]];
visited[1][0] = 0;
let answer = 0;

while (queue.length) {
  const [cnt, copy, count] = queue.shift();
  if (cnt === N) {
    answer = count;
    break;
  }

  if (cnt - 1 > 0 && !visited[cnt - 1][copy]) {
    visited[cnt - 1][copy] = 1;
    queue.push([cnt - 1, copy, count + 1]);
  }
  if (cnt + copy <= 1000 && !visited[cnt + copy][copy]) {
    visited[cnt + copy][copy] = 1;
    queue.push([cnt + copy, copy, count + 1]);
  }
  if (!visited[cnt][cnt]) {
    visited[cnt][cnt] = 1;
    queue.push([cnt, cnt, count + 1]);
  }
}

console.log(answer);
