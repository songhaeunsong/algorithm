// Integer to Roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let answer = "";

  let pushSymbol = (n, symbol) => {
    for (let i = 0; i < n; i++) {
      answer += symbol;
    }
  };

  let currentNum = num;
  if (currentNum / 1000 >= 1) {
    pushSymbol(Math.floor(currentNum / 1000), "M");
    currentNum -= Math.floor(currentNum / 1000) * 1000;
  }
  if (Math.floor(currentNum / 100) === 9) {
    answer += "CM";
    currentNum -= 900;
  }
  if (Math.floor(currentNum / 100) === 4) {
    answer += "CD";
    currentNum -= 400;
  }
  if (currentNum / 500 >= 1) {
    pushSymbol(Math.floor(currentNum / 500), "D");
    currentNum -= Math.floor(currentNum / 500) * 500;
  }
  if (currentNum / 100) {
    pushSymbol(Math.floor(currentNum / 100), "C");
    currentNum -= Math.floor(currentNum / 100) * 100;
  }
  if (Math.floor(currentNum / 10) === 9) {
    answer += "XC";
    currentNum -= 90;
  }
  if (Math.floor(currentNum / 10) === 4) {
    answer += "XL";
    currentNum -= 40;
  }
  if (currentNum / 50 >= 1) {
    pushSymbol(Math.floor(currentNum / 50), "L");
    currentNum -= Math.floor(currentNum / 50) * 50;
  }
  if (currentNum / 10 >= 1) {
    pushSymbol(Math.floor(currentNum / 10), "X");
    currentNum -= Math.floor(currentNum / 10) * 10;
  }
  if (Math.floor(currentNum) === 9) {
    answer += "IX";
    currentNum -= 90;
  }
  if (Math.floor(currentNum) === 4) {
    answer += "IV";
    currentNum -= 40;
  }

  if (currentNum / 5 >= 1) {
    pushSymbol(Math.floor(currentNum / 5), "V");
    currentNum -= Math.floor(currentNum / 5) * 5;
  }
  if (currentNum / 1 >= 1) {
    pushSymbol(Math.floor(currentNum / 1), "I");
    currentNum -= Math.floor(currentNum / 1);
  }
  return answer;
};
