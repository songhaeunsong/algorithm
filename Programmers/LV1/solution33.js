// 실패율

function solution(N, stages) {
  const answer = [];
  const map = {};
  for (let stage of stages) {
    map[stage] = (map[stage] | 0) + 1;
  }
  let players = stages.length;
  for (let i = 1; i <= N; i++) {
    if (!map[i]) answer.push([i, 0]);
    else {
      answer.push([i, map[i] / players]);
      players -= map[i];
    }
  }
  return answer.sort((a, b) => b[1] - a[1] || a[0] - b[0]).map((i) => i[0]);
}
