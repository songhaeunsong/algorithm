// 타겟 넘버

function solution(numbers, target) {
  let way = 0;
  const sum = numbers.reduce((acc, cur) => (acc += cur), 0);
  const negativeSum = (sum - target) / 2;

  const check = (arr, n) => {
    arr.forEach((v, idx) => {
      if (v === n) {
        way++;
        check(arr.slice(idx + 1, arr.length), n - v);
      }
      if (v < n) check(arr.slice(idx + 1, arr.length), n - v);
    });
  };
  check(numbers, negativeSum);
  return way;
}
