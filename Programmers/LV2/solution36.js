// [1차] 뉴스 클러스터링

function solution(str1, str2) {
  let union = 0;
  let intersection = 0;

  let getPairs = (str) => {
    const hashMap = {};
    for (let i = 0; i < str.length - 1; i++) {
      const left = str.charCodeAt(i);
      const right = str.charCodeAt(i + 1);
      if (left >= 65 && left <= 90 && right >= 65 && right <= 90) {
        const word = str[i] + str[i + 1];
        hashMap[word] ? hashMap[word]++ : (hashMap[word] = 1);
      }
    }
    return hashMap;
  };

  const words1 = getPairs(str1.toUpperCase());
  const words2 = getPairs(str2.toUpperCase());

  if (Object.keys(words1).length === 0 && Object.keys(words2).length === 0)
    return 65536;
  if (Object.keys(words1).length === 0 || Object.keys(words2).length === 0)
    return 0;

  let words1Length = 0;

  for (let key in words1) {
    words1Length += words1[key];
    if (words2[key]) {
      intersection += Math.min(words1[key], words2[key]);
    }
  }

  const words2Length = Object.values(words2).reduce((acc, cur) => acc + cur, 0);
  union = words1Length + words2Length - intersection;

  return Math.floor((65536 * intersection) / union);
}
