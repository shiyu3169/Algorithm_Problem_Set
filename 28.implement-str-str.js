/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack === needle || needle === "") {
    return 0;
  }
  const haystackArray = haystack.split(needle);

  if (haystackArray.length <= 1) {
    return -1;
  }

  return haystackArray[0].length;
};
// @lc code=end
// 74/74 cases passed (44 ms)
// Your runtime beats 98.93 % of javascript submissions
// Your memory usage beats 89.29 % of javascript submissions (33.7 MB)
