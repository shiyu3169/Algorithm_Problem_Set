/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  return height(root);

  function height(node) {
    if (!node) return 0;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    if (leftHeight === false || rightHeight === false) {
      return false;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
// @lc code=end
// 227/227 cases passed (64 ms)
// Your runtime beats 89 % of javascript submissions
// Your memory usage beats 85.71 % of javascript submissions (37.5 MB)
