function solution(info, query) {
  let answer = [];
  let targetLength = info[0].split(" ").length;

  let nthQuery = (index) => {
    const queries = query[index].split(" and ");
    const lastQuery = queries[queries.length - 1].split(" ");
    queries.pop();
    queries.push(...lastQuery);
    return queries;
  };
  let indexArr = [];
  let infos = info.map((s, idx) => {
    indexArr.push(idx);
    return s.split(" ");
  });

  let count = 0;

  let nthCheck = (info, query, indexArr, target) => {
    const accordedinfoIdx = [];

    indexArr.forEach((index) => {
      if (
        target === targetLength - 1 &&
        Number(query[target]) <= Number(info[index][target])
      )
        count++;
      if (query[target] === "-") accordedinfoIdx.push(index);
      else if (query[target] === info[index][target])
        accordedinfoIdx.push(index);
    });
    if (target !== targetLength - 1) {
      nthCheck(infos, query, accordedinfoIdx, target + 1);
    }

    return count;
  };

  for (let i = 0; i < query.length; i++) {
    answer.push(nthCheck(infos, nthQuery(i), indexArr, 0));
    count = 0;
  }
  return answer;
}
