/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let isOpenArray = [];
  for (let i = 0; i < s.length; i++) {
    let isOpen = isOpenArray.pop();
    if (!isOpen && (s[i] === ')' || s[i] === ']' || s[i] === '}')) {
      return false;
    } else if (isOpen === '(' && (s[i] === '}' || s[i] === ']')) {
      return false;
    } else if (isOpen === '[' && (s[i] === ')' || s[i] === '}')) {
      return false;
    } else if (isOpen === '{' && (s[i] === ')' || s[i] === ']')) {
      return false;
    } else if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      if (isOpen) {
        isOpenArray.push(isOpen);
      }
      isOpenArray.push(s[i]);
    }
  }
  return isOpenArray.length === 0;
};
// @lc code=end
// 76/76 cases passed (48 ms)
// Your runtime beats 95.2 % of javascript submissions
// Your memory usage beats 10 % of javascript submissions (35.9 MB)
