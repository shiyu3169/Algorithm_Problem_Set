/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (num of nums) {
    sum = sum < 0 ? num : sum + num;
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
// @lc code=end
// 202/202 cases passed (56 ms)
// Your runtime beats 85.14 % of javascript submissions
// Your memory usage beats 5.55 % of javascript submissions (36.2 MB)
