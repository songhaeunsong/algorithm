// 숫자 짝꿍

function solution(X, Y) {
  let g = [X, Y].sort((a, b) => a.length - b.length);
  let nested = "";

  g = g.map((ele) => {
    let objCount = ele.split("").reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    return objCount;
  });

  for (let key of Object.keys(g[0])) {
    if (g[1][key]) {
      let count = Math.min(g[0][key], g[1][key]);
      nested += key.repeat(count);
    }
  }

  nested = nested
    .split("")
    .sort((a, b) => b - a)
    .join("");

  if (nested[0] === undefined) return "-1";
  else if (nested[0] === "0") return "0";
  else return nested;
}
