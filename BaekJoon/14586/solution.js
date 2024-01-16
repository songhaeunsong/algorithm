const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
// "/dev/stdin"
let num = 0;
const dominoes = [];
input.map((str) =>
  str === input[0]
    ? (num = Number(str))
    : dominoes.push(str.split(" ").map(Number))
);
dominoes.sort((a, b) => a[0] - b[0]);

solution(num, dominoes);
function solution(num, dominoes) {
  // 왼쪽에서부터 마지막으로 넘어지는 블록의 인덱스 저장 배열
  const leftFallen = new Array(num).fill(0);
  // 오른쪽에서부터 마지막으로 넘어지는 블록의 인덱스 저장 배열
  const rightFallen = new Array(num).fill(0);

  // 각 블록의 인덱스별로 왼쪽으로 넘어뜨렸을 때 마지막으로 넘어지는 블록의 인덱스 구하기
  for (let i = 0; i < num; i++) {
    let leftIndex = i - 1;
    while (leftIndex >= 0 && dominoes[leftIndex][1] === 1) {
      leftIndex--;
    }
    leftFallen[i] = leftIndex;

    let rightIndex = i + 1;
    while (rightIndex < num && dominoes[rightIndex][1] === 2) {
      rightIndex++;
    }
    rightFallen[i] = rightIndex;
  }

  // 최종 결과를 저장할 dp 배열 초기화
  const dp = new Array(num).fill(Number.MAX_SAFE_INTEGER);

  // 도미노의 첫 번째부터 마지막까지 각각 왼쪽부터 최소 횟수 업데이트
  for (let i = 0; i < num; i++) {
    if (dominoes[i][1] === 1) {
      dp[i] = Math.min(dp[i], 1 + (leftFallen[i] >= 0 ? dp[leftFallen[i]] : 0));
    } else {
      dp[i] = Math.min(
        dp[i],
        1 + (rightFallen[i] < num ? dp[rightFallen[i]] : 0)
      );
    }
  }

  // 결과 출력
  console.log(dp);
}
