/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n < 27) return String.fromCharCode(n + 64);
  let title = '';
  while (n > 0) {
    let remainder = n % 26;
    remainder = remainder == 0 ? 26 : remainder;
    title = String.fromCharCode(remainder + 64) + title;
    n -= remainder;
    n /= 26;
  }
  return title;
};

// @lc code=end
// 18/18 cases passed (48 ms)
// Your runtime beats 90.54 % of javascript submissions
// Your memory usage beats 25 % of javascript submissions (33.9 MB)
