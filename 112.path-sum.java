/*
 * @lc app=leetcode id=112 lang=java
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null)
            return false;
        if (root.left == null && root.right == null && sum - root.val == 0)
            return true;
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}
// @lc code=end
// 114/114 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 36.47 % of java submissions (38.9 MB)