//Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charObj = {};
  const wordLengthArr = [];
  let count = 0;
  let validIdx = 0;

  s.split("").forEach((char, idx) => {
    if (charObj[char] && charObj[char] > validIdx) {
      wordLengthArr.push(count);
      validIdx = charObj[char];

      count = idx + 1 - charObj[char];
      charObj[char] = idx + 1;
    } else {
      charObj[char] = idx + 1;
      count++;
    }
  });
  wordLengthArr.push(count);
  return Math.max(...wordLengthArr, 0);
};
