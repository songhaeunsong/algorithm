// 조합 0의 개수
// 제한: 2초, 128MB
// 2초: 1억번의 연산 가능,

const fs = require("fs");
const [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((x) => +x);

const getTwoFive = (x) => {
  let five = 0;
  let two = 0;

  // two = 2의 배수 개수 + 4의 배수 개수 + ...
  for (let i = 2; i <= x; i *= 2) {
    two += parseInt(x / i);
  }
  // five = 5의 배수 개수 + 25의 배수 개수 + ...
  for (let i = 5; i <= x; i *= 5) {
    five += parseInt(x / i);
  }
  return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));

// 메모리가 작고 시간이 길게 주어졌기 때문에 dp 말고 for문 함수 3번 호출하기
