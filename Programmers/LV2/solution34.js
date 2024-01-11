// n^2 배열 자르기

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    const value = Math.max(row, col) + 1;
    answer.push(value);
  }

  return answer;
}
