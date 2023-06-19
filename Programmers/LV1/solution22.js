//자릿수 더하기
function solution(n) {
  let answer = 0;
  let arr = String(n).split("");
  for (let el in arr) answer += Number(arr[el]);

  return answer;
}
