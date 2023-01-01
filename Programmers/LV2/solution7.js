function solution(n) {
  let sum = 0;
  let answer = 1;
  let j = parseInt(n / 2) + 1;
  if (n < 3) return 1;
  for (j; j > 0; j--) {
    for (let i = j; i > 0; i--) {
      sum += i;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) break;
    }
    if (sum < n) {
      break;
    } else sum = 0;
  }
  return answer;
}
