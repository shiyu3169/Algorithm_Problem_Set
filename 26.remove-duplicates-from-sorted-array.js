/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};
// @lc code=end
// 161/161 cases passed (64 ms)
// Your runtime beats 93.82 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (36.8 MB)
