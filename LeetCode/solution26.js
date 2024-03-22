// 1. Two Sum
// 해시 맵으로 풀기

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const answer = [];
  const hashMap = new Map();
  nums.forEach((num, idx) => {
    hashMap.set(num, idx);
  });
  let cnt = nums.length - 1;

  while (cnt >= 0) {
    const difference = target - nums[cnt];
    const hashIdx = hashMap.get(difference);

    if (hashMap.has(difference) && hashIdx !== cnt) {
      answer.push(+hashIdx, cnt);
      break;
    }
    cnt--;
  }
  return answer;
};
