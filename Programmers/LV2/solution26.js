//튜플

function solution(s) {
  let answer = [];
  let obj = {};
  let arr = [];
  s = s.slice(2, s.length - 2).replace(/},{/g, ",");
  arr = s.split(",");
  for (let i of arr) obj[i] ? obj[i]++ : (obj[i] = 1);
  let sortObjectKeysByValue = (obj) => {
    const sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    return sortedKeys;
  };

  return sortObjectKeysByValue(obj).map((i) => Number(i));
}
