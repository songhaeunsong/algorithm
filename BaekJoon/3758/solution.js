// KCPC (구현 - 정렬)

const fs = require("fs");
const [N, ...input] = fs.readFileSync("./input.txt").toString().split("\n");

let testStart = 0;
for (let i = 0; i < +N; i++) {
  const [n, k, t, m] = input[testStart].split(" ").map(Number);
  const entries = input
    .slice(testStart + 1, m + testStart + 1)
    .map((line) => line.split(" ").map(Number));

  // 구현 시작
  const scores = Array.from({ length: n + 1 }, () =>
    Array.from({ length: k + 1 }, () => 0)
  );

  const result = Array.from({ length: n }, () =>
    Array.from({ length: 4 }, () => 0)
  );

  result.forEach((arr, i) => (arr[0] = i + 1));

  entries.forEach(([i, j, s], idx) => {
    if (scores[i][j] < s) {
      scores[i][j] = s;
    }
    result[i - 1][1]++;
    result[i - 1][3] = idx;
  });
  scores.forEach((score, i) => {
    score.forEach((value) => {
      if (value > 0) {
        result[i - 1][2] += value;
      }
    });
  });

  // 순위
  result.sort((a, b) => b[2] - a[2] || a[1] - b[1] || a[3] - b[3]);

  for (let idx = 0; idx < n; idx++) {
    if (result[idx][0] === t) {
      console.log(idx + 1);
      break;
    }
  }

  // 테이스케이스 1개 끝

  testStart = m + testStart + 1;
}
