/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let l = digits.length - 1;
  while (l >= 0) {
    if (digits[l] < 9) {
      digits[l]++;
      break;
    } else if (l > 0) {
      digits[l] = 0;
      l--;
    } else {
      digits[l] = 0;
      digits.unshift(1);
      break;
    }
  }
  return digits;
};
// @lc code=end
// 109/109 cases passed (48 ms)
// Your runtime beats 95.84 % of javascript submissions
// Your memory usage beats 89.36 % of javascript submissions (33.7 MB)
