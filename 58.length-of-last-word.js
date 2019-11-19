/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().length - s.trim().lastIndexOf(" ") - 1;
};
// @lc code=end
// 59/59 cases passed (48 ms)
// Your runtime beats 91.11 % of javascript submissions
// Your memory usage beats 65.38 % of javascript submissions (33.8 MB)
