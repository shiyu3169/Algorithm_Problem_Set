/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).split("0").join("").length
}
// @lc code=end
// 601/601 cases passed (96 ms)
// Your runtime beats 58.9 % of javascript submissions
// Your memory usage beats 80.45 % of javascript submissions (39.8 MB)
