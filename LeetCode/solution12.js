// 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let answer = [];
  let targetIdx = 0;
  let left = targetIdx + 1;
  let right = nums.length - 1;

  let moveRight = (cur, idx) => {
    while (nums[cur] === nums[idx]) {
      idx++;
    }
    return idx;
  };

  let moveLeft = (cur, idx) => {
    while (nums[cur] === nums[idx]) {
      idx--;
    }
    return idx;
  };

  while (nums[targetIdx] <= 0 && targetIdx < nums.length - 2) {
    const sum = nums[targetIdx] + nums[left] + nums[right];
    if (sum === 0) {
      answer.push([nums[targetIdx], nums[left], nums[right]]);
      left = moveRight(left, left + 1);
    } else if (sum > 0) right = moveLeft(right, right - 1);
    else if (sum < 0) left = moveRight(left, left + 1);

    if (left >= right) {
      targetIdx = moveRight(targetIdx, targetIdx + 1);
      left = targetIdx + 1;
      right = nums.length - 1;
    }
  }

  return answer;
};
