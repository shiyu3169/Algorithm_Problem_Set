/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const sWithoutSpaceAndPunctuation = s.replace(/\W/g, '').toLowerCase();
  let i = 0;
  const length = sWithoutSpaceAndPunctuation.length;
  while (i < length / 2) {
    if (
      sWithoutSpaceAndPunctuation[i] !==
      sWithoutSpaceAndPunctuation[length - 1 - i]
    ) {
      return false;
    }
    i++;
  }
  return true;
};
// @lc code=end
// 476/476 cases passed (64 ms)
// Your runtime beats 99.29% of javascript submissions
// Your memory usage beats 100 % of javascript submissions (36.8 MB)
