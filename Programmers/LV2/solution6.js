function solution(s) {
  let count = 0;
  let count_0 = 0;
  while (s.length !== 1) {
    let decimal = s.replace(/0/g, "");
    count_0 += s.length - decimal.length;
    s = decimal.length.toString(2);
    count++;
  }
  return [count, count_0];
}
