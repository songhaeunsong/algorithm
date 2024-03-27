// MaxNonoverlappingSegments

function solution(A, B) {
  let prevEnd = -1;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > prevEnd) {
      count++;
      prevEnd = B[i];
    }
  }
  return count;
}
