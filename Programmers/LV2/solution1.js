/* 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열 topping이 매개변수로 주어질 때, 롤케이크를 공평하게 자르는 방법의 수를 return 하도록 solution 함수를 완성해주세요.
토핑 종류 수가 같으면 공평한 걸로 가정*/

function solution(topping) {
  let answer = 0;
  for (let i = 0; i < topping.length; i++) {
    let fir_piece = topping.slice(0, i + 1);
    let sec_piece = topping.slice(i + 1);
    const set1 = new Set(fir_piece);
    const newArr1 = [...set1];
    const set2 = new Set(sec_piece);
    const newArr2 = [...set2];
    if (newArr1.length === newArr2.length) {
      answer += 1;
    }
  }
  return answer;
}
