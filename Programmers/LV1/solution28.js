// 크기가 작은 부분문자열

console.time();
function solution(t, p) {
  let length = p.length;
  let answer = 0;
  const first = Number(p[0]);
  for (let i = 0; i <= t.length - length; i++) {
    if (Number(t[i]) > first) {
      continue;
    }
    if (Number(t[i]) < first) {
      answer++;
      continue;
    }
    if (Number(t.slice(i, i + length)) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("3141592", "271"));
console.timeEnd();
