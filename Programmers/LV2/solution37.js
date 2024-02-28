function solution(sequence, k) {
  let answer = [];
  let first = sequence.length - 1;
  let last = sequence.length - 1;
  let sum = sequence[last];

  while (last >= 0 && first >= 0) {
    if (sum === k) {
      if (answer.length === 0) {
        answer = [first, last];
        continue;
      }
      let gap = answer[1] - answer[0];
      let targetGap = last - first;
      if (gap >= targetGap) {
        answer = [first, last];
      }
      first--;
      sum += sequence[first];
    }
    if (sum > k) {
      sum -= sequence[last];
      last--;
    }
    if (sum < k) {
      first--;
      sum += sequence[first];
    }
  }

  return answer;
}
