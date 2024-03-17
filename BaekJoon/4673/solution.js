let answer = "";
const arr = new Array(10001).fill(0);
arr[0] = 1;

for (let num = 1; num < 10001; num++) {
  const digits = num.toString().split("").map(Number);
  const sum = [num, ...digits].reduce((acc, cur) => acc + cur, 0);

  if (sum <= 10000) arr[sum] = 1;
}
arr.forEach((value, index) => {
  if (value === 0) answer += index + "\n";
});
console.log(answer);
