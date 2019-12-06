/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  r = x;
  while (r * r > x) {
    r = ((r + x / r) / 2) | 0;
  }
  return r;
};
// @lc code=end
// 1017/1017 cases passed (68 ms)
// Your runtime beats 87.8 % of javascript submissions
// Your memory usage beats 72.22 % of javascript submissions (35.6 MB)
