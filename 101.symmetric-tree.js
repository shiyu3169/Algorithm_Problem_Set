/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  return isSameTree(root, root);
  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  }
};

// @lc code=end
// 195/195 cases passed (64 ms)
// Your runtime beats 55.28 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (35.6 MB)
