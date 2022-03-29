/*정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. */

function solution(num) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < num.length - 1; i++)
    for (let j = i + 1; j < num.length; j++) arr.push(num[i] + num[j]);

  answer = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return answer.sort((a, b) => a - b);
}

//const answer = [...new Set(arr)] (= filter,indexOf와 같은 역할)
