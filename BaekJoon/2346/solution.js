const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const size = Number(input[0]);
const numberArr = input[1].split(" ").map((str) => Number(str));

let answer = [1];
let target = 0;
let count = 1;

const dequeue = (idx) => {
  let num = numberArr[idx];
  numberArr[idx] = null;

  while (num > 0) {
    if (numberArr[(idx + 1) % size]) {
      idx = (idx + 1) % size;
      num--;
    } else {
      idx = (idx + 1) % size;
    }
  }

  while (num < 0) {
    if (numberArr[(idx - 1 + size) % size]) {
      idx = (idx - 1 + size) % size;
      num++;
    } else {
      idx = (idx - 1 + size) % size;
    }
  }

  count++;
  target = idx;
  answer.push(target + 1);
  count === size ? console.log(answer) : dequeue(target);
};

dequeue(target);
