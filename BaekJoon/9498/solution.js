/*시험성적 */
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);

if (a > 89) console.log("A");
else if (a > 79) console.log("B");
else if (a > 69) console.log("C");
else if (a > 59) console.log("D");
else console.log("F");
