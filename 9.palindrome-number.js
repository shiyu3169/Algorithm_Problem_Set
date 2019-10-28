/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let rev = 0;
  let y = x;
  while (y > 0) {
    rev = parseInt(rev * 10 + (y % 10));
    y = parseInt(y / 10);
  }
  return rev == x;
};

console.log(isPalindrome(121));

// @lc code=end
// 11509/11509 cases passed (168 ms)
// Your runtime beats 96.89 % of javascript submissions
// Your memory usage beats 93.1 % of javascript submissions (44.9 MB)
