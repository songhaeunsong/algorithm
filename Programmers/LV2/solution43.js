// 전력망을 둘로 나누기

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let wire of wires) {
    const [from, to] = wire;
    graph[from].push(to);
    graph[to].push(from);
  }

  let min = n - 2;

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i];
    let difference = n - 2;

    if (graph[v1].length !== 1 && graph[v2].length !== 1) {
      let sum = dfs(v1, v2);
      difference = Math.abs(n - sum * 2);
    }

    if (difference <= 1) return difference;
    if (min > difference) min = difference;
  }

  function dfs(node, except) {
    let sum = 1;

    if (graph[node].length === 1) return 1;
    for (let next of graph[node]) {
      if (next === except) continue;
      let nextSum = dfs(next, node);
      sum += nextSum;
    }
    return sum;
  }
  return min;
}
