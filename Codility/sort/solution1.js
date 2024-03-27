// NumberOfDiscIntersections

function solution(A) {
  let answer = 0;
  const point = [];
  for (let i = 0; i < A.length; i++) {
    const [start, end] = [i - A[i], i + A[i]];
    point.push([start, 1]);
    point.push([end, -1]);
  }

  point.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let active = 0;
  let intersections = 0;
  for (let i = 0; i < point.length; i++) {
    if (point[i][1] === 1) {
      intersections += active;
    }
    if (intersections > 10000000) return -1;
    active += point[i][1];
  }
  return intersections;
}

console.log(solution([1, 1, 1]));
