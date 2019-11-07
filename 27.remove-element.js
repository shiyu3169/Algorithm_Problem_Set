/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] == val) {
      nums[i--] = nums[length-- - 1];
    }
  }
  return length;
};
// @lc code=end
// 113/113 cases passed (48 ms)
// Your runtime beats 95.85 % of javascript submissions
// Your memory usage beats 94.44 % of javascript submissions (33.7 MB)
