/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right && sum - root.val === 0) return true;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
// @lc code=end
// 114/114 cases passed (88 ms)
// Your runtime beats 14.29 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (37 MB)
