//괄호 회전하기

function solution(s) {
  const pair = { "}": "{", "]": "[", ")": "(" };
  let arr = s.split("");
  let result = 0;

  let isRight = (arr) => {
    let stack = [];
    for (let el of arr) {
      if (pair[el] === undefined) stack.push(el);
      else if (stack[stack.length - 1] !== pair[el]) return false;
      else stack.pop();
    }
    return stack.length === 0 ? true : false;
  };

  for (let i = 0; i < s.length; i++) {
    if (isRight(arr)) result++;
    arr.push(arr.shift());
  }
  return result;
}
