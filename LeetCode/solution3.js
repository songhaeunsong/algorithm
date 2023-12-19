// Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let firstWord = "";
  let secondWord = "";

  let checkPalindromic = (idx) => {
    let count = 0;
    let front = idx + 1;
    let back = idx - 1;

    while (back >= 0 && front <= s.length) {
      if (s[front] === s[back]) {
        count++;
        front++;
        back--;
      } else return count;
    }

    return count;
  };

  let checkEvenPalindromic = (backIdx, frontIdx) => {
    let count = 0;
    let front = frontIdx + 1;
    let back = backIdx - 1;

    while (back >= 0 && front <= s.length) {
      if (s[front] === s[back]) {
        count++;
        front++;
        back--;
      } else return count;
    }

    return count;
  };

  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === s[idx + 1]) {
      let evenTries = checkEvenPalindromic(idx, idx + 1);
      secondWord =
        evenTries >= secondWord.length / 2
          ? s.slice(idx - evenTries, idx + evenTries + 2)
          : secondWord;
    }

    let oddTries = checkPalindromic(idx);
    firstWord =
      oddTries > Math.floor(firstWord.length / 2)
        ? s.slice(idx - oddTries, idx + oddTries + 1)
        : firstWord;
  }
  if (firstWord === "" && secondWord === "") return s[0];

  return firstWord.length > secondWord.length ? firstWord : secondWord;
};
