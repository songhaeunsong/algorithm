//[1차] 캐시
function solution(cacheSize, cities) {
  let count = 0;
  let arr = [];
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toLowerCase();
    let cacheHit = arr.filter((e) => e !== cities[i]); //같은 이름의 도시가 있는지 검색
    if (cacheHit.length !== arr.length) {
      //있다면
      count += 1; //cache hit
      arr = cacheHit; //도시 캐싱 시 최근 참조된 상태로 변경
    } else count += 5; // 없다면 cache miss

    if (arr.length === cacheSize) {
      //cache miss이면서, 캐시크기에 걸리는 상황
      arr.shift(); //오래된 항목을 제거한다.
    }
    arr.push(cities[i]);
  }
  return count;
}
