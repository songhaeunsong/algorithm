// TieRopes

function solution(K, A) {
  let cnt = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    cnt += A[i];
    if (cnt >= K) {
      count++;
      cnt = 0;
    }
  }
  return count;
}
