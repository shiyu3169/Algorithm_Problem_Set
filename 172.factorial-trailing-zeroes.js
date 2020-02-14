/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var trailingZeroes = function(n) {
//   return n === 0 ? 0 : parseInt(n / 5) + trailingZeroes(parseInt(n / 5));
// };

var trailingZeroes = function(n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};
// @lc code=end
// 502/502 cases passed (56 ms)
// Your runtime beats 90.11 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (33.9 MB)
