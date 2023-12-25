// Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  function isInt32(value) {
    return (
      Number.isInteger(value) &&
      value >= Math.pow(-2, 31) &&
      value <= Math.pow(2, 31) - 1
    );
  }

  if (!isInt32(x)) return 0;

  let answer = Number(String(Math.abs(x)).split("").reverse().join(""));

  if (x < 0) {
    answer *= -1;
  }
  return isInt32(answer) ? answer : 0;
};
