// 1043. Partition Array for Maximum Sum

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var maxSumAfterPartitioning = function (arr, k) {
  let N = arr.length;
  let dp = new Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    let max = 0;
    let maxSum = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      max = Math.max(max, arr[i - j]);
      maxSum = Math.max(maxSum, dp[i - j] + max * j);
    }
    dp[i] = maxSum;
  }

  return dp[N];
};

// 다른 사람 풀이

// var maxSumAfterPartitioning = function (arr, k) {
//   const N = arr.length;
//   const K = k + 1;

//   const dp = Array(K).fill(0);

//   for (let start = N - 1; start >= 0; start--) {
//     let currMax = 0;
//     const end = Math.min(N, start + k);

//     for (let i = start; i < end; i++) {
//       currMax = Math.max(currMax, arr[i]);
//       dp[start % K] = Math.max(
//         dp[start % K],
//         dp[(i + 1) % K] + currMax * (i - start + 1)
//       );
//       console.log(start % K, dp[start % K]);
//     }
//   }
//   return dp[0];
// };
