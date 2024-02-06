// 숫자 짝꿍

function solution(X, Y) {
  let nested = "";

  const countY = {};
  for (let i = 0; i < Y.length; i++) {
    const Ynum = Y[i];
    countY[Ynum] = (countY[Ynum] || 0) + 1;
  }

  const XArr = X.split("").sort((a, b) => b - a);

  for (let i = 0; i < X.length; i++) {
    const Xnum = XArr[i];
    if (countY[Xnum] && countY[Xnum] > 0) {
      nested += Xnum;
      countY[Xnum]--;
    }
    if (nested === "0") return "0";
  }

  return nested.length > 0 ? nested : "-1";
}
