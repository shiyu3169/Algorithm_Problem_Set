/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if (strs.length === 0) {
//     return '';
//   }
//   let prefix = '';
//   const firstStr = strs.shift();
//   for (let i = 0; i < firstStr.length; i++) {
//     for (str of strs) {
//       if (str.slice(i, i + 1) !== firstStr[i]) {
//         return prefix;
//       }
//     }
//     prefix += firstStr[i];
//   }
//   return prefix;
// };

var longestCommonPrefix = function(strs) {
  if (strs === undefined || strs.length === 0) {
    return '';
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
// @lc code=end

// 118/118 cases passed (52 ms)
// Your runtime beats 92.73 % of javascript submissions
// Your memory usage beats 18.75 % of javascript submissions (35.8 MB)
