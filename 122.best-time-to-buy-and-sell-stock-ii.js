/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let diff = 0;
  if (prices.length > 0) {
    prices.reduce((acc, next) => {
      console.log(acc, next);
      if (next > acc) {
        diff += next - acc;
      }
      return next;
    });
  }
  return diff;
};
// @lc code=end
// 201/201 cases passed (64 ms)
// Your runtime beats 38.49 % of javascript submissions
// Your memory usage beats 90.48 % of javascript submissions (35.3 MB)
