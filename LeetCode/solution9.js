// Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let firstIdx = 0;
  let secondIdx = height.length - 1;

  while (firstIdx !== secondIdx) {
    const firstHeight = height[firstIdx];
    const secondHeight = height[secondIdx];
    const containerHeight = Math.min(firstHeight, secondHeight);

    const amount = containerHeight * (secondIdx - firstIdx);
    max = Math.max(amount, max);

    firstHeight > secondHeight ? secondIdx-- : firstIdx++;
  }
  return max;
};
