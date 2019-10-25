/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const rev = [];

  for (let i = 0; i < nums.length; i++) {
    if (rev[target - nums[i]] !== undefined) {
      return [rev[target - nums[i]], i];
    }
    rev[nums[i]] = i;
  }
};
// @lc code=end
// 29/29 cases passed (48 ms)
// Your runtime beats 97.91 % of javascript submissions
// Your memory usage beats 78.93 % of javascript submissions (34.6 MB)
