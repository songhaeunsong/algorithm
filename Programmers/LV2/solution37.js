function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const result = [];
  
    while (right < sequence.length) {
      if (sum < k) {
        right++;
        sum += sequence[right];
      } else if (sum > k) {
        sum -= sequence[left];
        left++;
      } else {
        result.push([left, right]);
        right++;
        sum += sequence[right];
      }
    }
  
    return result.sort(condition)[0];
  }
  
  function condition(a, b) {
    const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
    if (lenDiff !== 0) return lenDiff; 
    return a[0] - b[0];
  }