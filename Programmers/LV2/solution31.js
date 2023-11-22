// 더 맵게

function solution(scoville, K) {
  let count = 0;
  scoville.sort((a, b) => b - a);

  while (scoville[scoville.length - 1] < K) {
    if (scoville.length === 1) return -1;
    const first = scoville.pop();
    const second = scoville.pop();
    const mixedDish = first + second * 2;

    scoville.push(mixedDish);
    count++;
    scoville.sort((a, b) => b - a);
  }
  return count;
}
