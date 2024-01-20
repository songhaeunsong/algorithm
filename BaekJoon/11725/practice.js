const fs = require("fs");
const [num, ...input] = fs.readFileSync("./input.txt").toString().split("\n");
// 그래프 만들어서 이어진 노드 집어넣기

// graph[from].push(to)
// graph[to].phsh(trom) 둘 다 해주기

// bfs 시작
// 방문한 배열(visited), 큐, 현재 큐의 인덱스(cur), 큐의 인덱스 필요(front 라는 숫자로 인덱스 표시),
// for문  next (graph[cur] 순회)
// 방문한 곳이 아니라면 !visited[next] => visited[next] = true 로 바꾸고, queue[next] = cur
const answer = [];
const graph = [];
for (let i = 0; i <= Number(num); i++) {
  graph[i] = [];
}

input.forEach((edge) => {
  const [from, to] = edge.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});
// console.log(graph);

function bfs(start) {
  const visited = [];
  visited[start] = true;
  const queue = [start];
  let first = 0;

  while (first < queue.length) {
    const cur = queue[first++];
    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        answer[next] = cur;
        queue.push(next);
      }
    }
  }

  return;
}
bfs(1);
let result = "";
answer.forEach((ans) => (result += ans + "\n"));

console.log(result);
