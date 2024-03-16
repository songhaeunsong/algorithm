// 숫자 문자열과 영단어

function solution(s) {
  const englishToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let answer = "";
  let character = "";

  for (let i = 0; i < s.length; i++) {
    const number = Number(s[i]);

    isNaN(number) ? (character += s[i]) : (answer += s[i]);

    if (englishToNumber[character]) {
      answer += englishToNumber[character];
      character = "";
    }
  }
  return Number(answer);
}
