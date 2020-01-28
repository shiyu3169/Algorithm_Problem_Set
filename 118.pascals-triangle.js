/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const pascalTriangle = [];
  for (let i = 0; i < numRows; i++) {
    pascalTriangle[i] = [];
    pascalTriangle[i][0] = 1;
    for (let j = 1; j < i; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
    pascalTriangle[i][i] = 1;
  }
  return pascalTriangle;
};
// @lc code=end
// 15/15 cases passed (48 ms)
// Your runtime beats 93.21 % of javascript submissions
// Your memory usage beats 7.69 % of javascript submissions (34 MB)
