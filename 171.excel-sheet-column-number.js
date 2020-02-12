/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var titleToNumber = function(s) {
//   let colNumber = 0;
//   const lastIndex = s.length - 1;
//   for (i = 0; i < s.length; i++) {
//     if (i === lastIndex) {
//       colNumber += s.charCodeAt(i) - 64;
//     } else {
//       colNumber += (s.charCodeAt(i) - 64) * Math.pow(26, lastIndex - i);
//     }
//   }
//   return colNumber;
// };

var titleToNumber = function(s) {
  let colNumber = 0;
  for (
    i = 0;
    i < s.length;
    colNumber = colNumber * 26 + (s.charCodeAt(i) - 64), i++
  ) {}
  return colNumber;
};
// @lc code=end
// 1000/1000 cases passed (64 ms)
// Your runtime beats 94.25 % of javascript submissions
// Your memory usage beats 66.67 % of javascript submissions (35.6 MB)
