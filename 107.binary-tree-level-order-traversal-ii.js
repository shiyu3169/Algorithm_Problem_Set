/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
  let h = getHeight(root);
  const traversal = [];
  for (let depth = 1; depth <= h; depth++) {
    traversal.push(levelOrder(root, depth));
  }
  return traversal.reverse();
};

function getHeight(node) {
  if (!node) return 0;
  const left = getHeight(node.left);
  const right = getHeight(node.right);
  return Math.max(left, right) + 1;
}

function levelOrder(node, depth, level = []) {
  if (!node) return level;
  if (depth === 1) level.push(node.val);
  else if (depth > 1) {
    levelOrder(node.left, depth - 1, level);
    levelOrder(node.right, depth - 1, level);
  }
  return level;
}

// @lc code=end
// 34/34 cases passed (64 ms)
// Your runtime beats 33.6 % of javascript submissions
// Your memory usage beats 33.33 % of javascript submissions (35.6 MB)
