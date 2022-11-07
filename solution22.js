/*길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] => 29 출력 */

function solution(A, B) {
  let answer = 0;
  const arr1 = A.sort(function (a, b) {
    return a - b; //오름차순
  });
  const arr2 = B.sort(function (a, b) {
    return b - a; //내림차순
  });

  for (let i = 0; i < A.length; i++) {
    answer += arr1[i] * arr2[i];
  }
  return answer;
}

/*
function solution(A,B){
 A.sort((a,b)=>a+b);
 B.sort((a,b)=>a-b);
 return A.reduce((acc, val, idx)=> acc + val*B[idx], 0);
} 
*/
