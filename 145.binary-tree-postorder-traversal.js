/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
  const res = []
  let pre = []
  let cur = root
  while (pre.length || cur) {
    if (cur) {
      pre.push(cur)
      res.unshift(cur.val)
      cur = cur.right
    } else {
      let temp = pre.pop()
      cur = temp.left
    }
  }
  return res
}
// @lc code=end
// 68/68 cases passed (101 ms)
// Your runtime beats 13.41 % of javascript submissions
// Your memory usage beats 91.39 % of javascript submissions (38.4 MB)
