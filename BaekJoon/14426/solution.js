// 접두사 찾기

const fs = require("fs");
const fileContents = fs.readFileSync("./input.txt").toString().trim().split("\n").map(line=> line.trim());
const [N, _] = fileContents[0].split(" ").map(Number);
const words = fileContents.slice(1, N+1).sort();
const queries = fileContents.slice(N+1);

let totalCount = 0;

for (const prefix of queries) {
        if (binarySearch(words, prefix)) {
          totalCount++;
        }
}

console.log(totalCount);

function binarySearch(arr, prefix) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const isPrefix = arr[mid].startsWith(prefix);

        if (isPrefix) {
            return true;
        } else if (arr[mid] < prefix) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}
