/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
    const res = []
    let cur = root
    let prev = null
    while(cur) {
      if(!cur.left){
        res.push(cur.val)
        cur = cur.right
      } else {
        prev = cur.left
        while (prev && prev.right) {
          prev = prev.right
        }
        prev.right = cur
        const temp = cur
        cur = cur.left
        temp.left = null
      }
    }
    return res
};
// @lc code=end

// 68/68 cases passed (86 ms)
// Your runtime beats 19.26 % of javascript submissions
// Your memory usage beats 91.63 % of javascript submissions (38.4 MB)