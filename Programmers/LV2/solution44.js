// 모음 사전
function solution(word) {
  let answer = word.length;

  const pow = [781, 156, 31, 6, 1];
  const char = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  for (let i = 0; i < word.length; i++) {
    answer += char[word[i]] * pow[i];
  }
  return answer;
}
