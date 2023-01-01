/*Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
eo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요. */
function solution(brown, yellow) {
  let divisor = [];
  let sum = brown + yellow;
  for (let i = 0; i <= yellow; i++) {
    if (yellow % i === 0 && i <= yellow / i) divisor.push(i);
  } //yellow 가로,세로 길이 구하기

  for (let j = 0; j < divisor.length; j++) {
    let pcs = (divisor[j] + yellow / divisor[j]) * 2 + 4;
    if (pcs === brown) {
      return [sum / (divisor[j] + 2), divisor[j] + 2];
    }
  }
}
