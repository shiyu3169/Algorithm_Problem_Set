/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
// @lc code=end
// 32/32 cases passed (72 ms)
// Your runtime beats 39.47 % of javascript submissions
// Your memory usage beats 67.31 % of javascript submissions (37.5 MB)
