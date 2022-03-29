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
