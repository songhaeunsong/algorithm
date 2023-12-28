// String to Integer (atoi)

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    let changeToInt32 = (number) => {
        const MIN = Math.pow(-2,31);
        const MAX = Math.pow(2,31)-1;
        if(isNaN(number))return 0;
        if(number > MAX) return MAX;
        if(number < MIN) return MIN;
        return number; 
    } 
    let numberStr = ""
    for(let i = 0; i < s.length; i++){
        const target = s[i];
        if(numberStr.length > 0 && (isNaN(Number(target)) || target === " "))break;

        if(target === "-"|| target === "+")numberStr += target;
        else if(isNaN(Number(target))) break;

        if(!isNaN(Number(target)) && target !== " ")numberStr += target;
    }
    const answer = changeToInt32(Number(numberStr));
    return answer;
};