// [1차] 비밀지도

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let password = "";
    const merged = arr1[i] | arr2[i];
    for (let j = 0; j < n; j++) {
      password = ((merged & (1 << j)) > 0 ? "#" : " ") + password;
    }

    answer.push(password);
  }

  return answer;
}
