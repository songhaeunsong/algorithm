// Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (isNaN(x) || x < 0) return false;

    const xStr = String(x);
    const length = xStr.length;

    for (let i = 0; i < length / 2; i++) {
        if (xStr[i] !== xStr[length - 1 - i]) {
            return false;
        }
    }

    return true;
};