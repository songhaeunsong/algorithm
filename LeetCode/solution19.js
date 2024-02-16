// 1481. Least Number of Unique Integers after K Removals

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
  const map = {};
  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  const amounts = Object.values(map).sort((a, b) => a - b);
  let sum = 0;
  let result = amounts.length;

  for (const amount of amounts) {
    sum += amount;
    if (sum === k) return result - 1;
    if (sum > k) return result;
    result--;
  }
};
