/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = []
  let rights = []
  let cur = root

  while (cur) {
    res.push(cur.val)
    if (cur.right) {
      rights.push(cur.right)
    }
    cur = cur.left
    if (!cur && rights.length) {
      cur = rights.pop()
    }
  }
  return res
}
// @lc code=end
// 69/69 cases passed (75 ms)
// Your runtime beats 50.7 % of javascript submissions
// Your memory usage beats 98.43 % of javascript submissions (38.2 MB)
