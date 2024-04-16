// 큰 수 만들기

function solution(number, k) {
  let answer = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && answer[answer.length - 1] < number[i]) {
      k--;
      answer.pop();
    }
    if (answer.length < number.length - k) {
      answer.push(number[i]);
    }
  }
  return answer.join("");
}
