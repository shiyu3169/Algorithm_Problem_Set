/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const row = [1];

  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j >= 1; j--) {
      row[j] = row[j - 1] + (row[j] || 0);
    }
  }
  return row;
};
// @lc code=end
getRow(3);
// 34/34 cases passed (56 ms)
// Your runtime beats 61.89 % of javascript submissions
// Your memory usage beats 40 % of javascript submissions (34.6 MB)
