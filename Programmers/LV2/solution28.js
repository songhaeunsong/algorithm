// 연속 부분 수열 합의 개수

function solution(elements) {
  const inbox = new Set();
  for (let i = 1; i <= elements.length; i++) {
    const newElements = elements.concat(elements.slice(0, i));
    for (let k = 0; k < elements.length; k++) {
      inbox.add(newElements.slice(k, k + i).reduce((a, b) => a + b));
    }
  }
  return inbox.size;
}
