//행렬의 곱셈

function solution(arr1, arr2) {
  let answer = [];
  let newArr = [];
  let calculate = 0;

  for (let i in arr1) {
    for (let j in arr2[0]) {
      for (let k in arr2) {
        calculate += arr1[i][k] * arr2[k][j];
      }
      newArr.push(calculate);
      calculate = 0;
    }
    answer.push(newArr);
    newArr = [];
  }
  return answer;
}

/*
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x, y) => row.reduce((acc, cur, idx) => acc + cur * arr2[idx][y], 0)));
}
*/
