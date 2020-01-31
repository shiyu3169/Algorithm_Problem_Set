/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((acc, cur) => acc ^ cur);
};
// @lc code=end
// 16/16 cases passed (68 ms)
// Your runtime beats 53.13 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (35.2 MB)
