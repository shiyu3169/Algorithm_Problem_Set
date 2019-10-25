/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = 0;
  const min_value = -2147483648;
  const max_value = 2147483647;
  while (x !== 0) {
    let pop = x % 10;
    x = parseInt(x / 10, 10);
    rev = rev * 10 + pop;
    if (rev < min_value || rev > max_value) {
      return 0;
    }
  }
  return rev;
};
// @lc code=end
// 1032/1032 cases passed (72 ms)
// Your runtime beats 78.84 % of javascript submissions
// Your memory usage beats 55.21 % of javascript submissions (35.9 MB)
