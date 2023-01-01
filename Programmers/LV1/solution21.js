function solution(food) {
  let left = "";
  for (let i = 1; i < food.length; i++) {
    left += `${i}`.repeat(Math.floor(food[i] / 2));
  }
  return left + "0" + [...left].reverse().join("");
}

// Math.floor() 숫자 내림하여 반환
// repeat(i) 문자열 i번 반복
// reverse() 순서 거꾸로 출력 (배열만 가능!)
