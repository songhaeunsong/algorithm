//H-index
function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  let hIndex = citations.length;
  while (1) {
    let filtered = citations.filter((e) => e >= hIndex);
    if (
      filtered.length >= hIndex &&
      citations.length - filtered.length <= hIndex
    )
      break;
    hIndex--;
  }
  return hIndex;
}
