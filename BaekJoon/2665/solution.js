const fs = require("fs");
const [num, ...board] = fs.readFileSync(0).toString().trim().split("\n");

const n = +num;
const visited = Array.from({ length: n }, () => new Array(n).fill(0));

const dx = [0, 1, 0, - 1];
const dy = [1, 0, - 1, 0];


console.log(bfs(0, 0))

function bfs(r, c) {
    const deque = [[r, c, 0, 0]];
    while (deque.length) {

        const [x, y, depth, count] = deque.shift();
        if (x === n - 1 && y === n - 1) {
            return count;
        }
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny]) continue;

            visited[nx][ny] = 1;
            if (board[nx][ny] === "1") {
                deque.unshift([nx, ny, depth + 1, count]);
            }
            else {
                deque.push([nx, ny, depth + 1, count + 1]);
            }
        }
    }

}

