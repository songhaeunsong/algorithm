// 기능개발

function solution(progresses, speeds) {
  let answer = [];
  let days = [];
  let count = 1;
  let max = 0;

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  for (let i = 0; i < days.length; i++) {
    if (i === days.length - 1) answer.push(count);
    max = max < days[i] ? days[i] : max;
    if (max < days[i + 1]) {
      answer.push(count);
      count = 1;
    } else count++;
  }
  return answer;
}

// let days= progresses.map((progress, idx)=> Math.ceil((100 - progress)/speeds[idx]))
