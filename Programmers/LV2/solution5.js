/* "()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.*/

function solution(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    let num = s[i] === "(" ? 1 : -1;
    stackCount += num;
    if (stackCount === -1) return false;
  }
  return stackCount === 0 ? true : false;
}
