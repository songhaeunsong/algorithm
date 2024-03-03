function solution(n) {
  let answer = n;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
