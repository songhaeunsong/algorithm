function solution(x) {
  let str = x.toString();
  const arr = [...str];
  let div = 0;
  for (let i = 0; i < arr.length; i++) {
    div += Number(arr[i]);
  }
  return str % div === 0 ? true : false;
}
