// 할인행사

function solution(want, number, discount) {
  var answer = 0;
  let startIndex = 0;
  let wishlist = [];

  for (let j = 0; j < want.length; j++) {
    for (let i = 0; i < number[j]; i++) {
      wishlist.push(want[j]);
    }
  }

  while (startIndex !== discount.length - 9) {
    let newArr = [...wishlist];

    for (let i = startIndex; i < startIndex + 10; i++) {
      if (newArr.includes(discount[i])) {
        newArr.splice(newArr.indexOf(discount[i]), 1);
      }
    }

    if (newArr.length === 0) {
      answer++;
    }
    startIndex++;
  }
  return answer;
}
