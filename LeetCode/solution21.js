// 1642. Furthest Building You Can Reach

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

const furthestBuilding = (heights, bricks, ladders) => {
  const arr = [];

  for (let i = 0; i < heights.length - 1; ++i) {
    const diff = heights[i + 1] - heights[i];

    if (diff > 0) {
      if (ladders > 0) {
        arr.push(-diff);
        ladders--;
      } else if (arr.length > 0 && -arr[0] < diff) {
        bricks += arr.shift();
        arr.push(-diff);
      } else {
        bricks -= diff;
      }

      if (bricks < 0) {
        return i;
      }
    }
  }

  return heights.length - 1;
};
