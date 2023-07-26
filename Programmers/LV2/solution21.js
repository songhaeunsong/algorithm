//귤 고르기

// 객체를 만들어 크기별 귤 갯수 정리하기 v
// 가장 큰 value부터 k에서 뺀다. type++
//k가 0 이하가 되면 return type
//해당 숫자가 없으면 key 만들고 value는 1
//해당 숫자가 있으면 해당 value +1

function solution(k, tangerine) {
  let type = 0;
  let tangObj = {};

  tangerine.forEach((number) => {
    if (tangObj[number]) tangObj[number]++;
    else tangObj[number] = 1;
  });
  const tangValue = Object.values(tangObj).sort((a, b) => b - a);
  tangValue.forEach((num) => {
    if (k - num <= 0) {
      k -= num;
      return;
    } else {
      k -= num;
      type++;
    }
  });
  return type + 1;
}
