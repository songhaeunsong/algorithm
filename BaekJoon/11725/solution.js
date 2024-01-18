// 트리의 부모 찾기
const fs = require("fs");
const [num, ...input] = fs.readFileSync("./input.txt").toString().split("\n");

const graph = [];

for (let i = 0; i < num + 1; i++) {
  graph[i] = [];
}
const answer = [];
input.forEach((edge) => {
  const [from, to] = edge.split(" ");
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  const visited = [];
  visited[start] = true;
  const queue = [start];
  let front = 0;

  while (front < queue.length) {
    const cur = queue[front++];

    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }
};

bfs(1);
let result = "";
answer.forEach((ans) => (result += ans + "\n"));
console.log(result);
