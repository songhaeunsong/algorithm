function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let wire of wires) {
    const [from, to] = wire;
    graph[from].push(to);
    graph[to].push(from);
  }
  const store = {};

  let answer = n - 1;
  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i];
    let difference = n - 1;
    if (graph[v1].length !== 1) difference = dfs(v1, v2);
    if (difference <= 1) return difference;
    if (answer > difference) answer = difference;
  }

  function dfs(node, except) {
    let sum = 1;
    if (graph[node].length === 1) return 1;
    for (let next of graph[node]) {
      if (next !== except) {
        if (store[next]) sum += store[next];
        else {
          let nextSum = dfs(next);
          store[next] = nextSum;
          sum += nextSum;
        }
      }
    }
    return n - sum;
  }
  return answer;
}
