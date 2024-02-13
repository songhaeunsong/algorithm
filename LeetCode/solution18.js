//2108. Find First Palindromic String in the Array

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let answer = "";

  let left = 0;
  let right = 0;
  for (let word of words) {
    if (word.length === 1) return word;

    if (word.length % 2 === 0) {
      left = word.length / 2 - 1;
      right = word.length / 2;
    } else {
      left = Math.floor(word.length / 2) - 1;
      right = Math.floor(word.length / 2) + 1;
    }
    while (word[left] === word[right]) {
      if (left === 0) {
        answer = word;
        break;
      }
      left--;
      right++;
    }
    if (answer !== "") break;
  }
  return answer;
};
