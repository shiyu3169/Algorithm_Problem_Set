/*
 * @lc app=leetcode id=101 lang=java
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return isSameTree(root, root);
    }

    private boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null)
            return true;
        if (p == null || q == null || p.val != q.val)
            return false;
        return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
    }
}
// @lc code=end
// 195/195 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 74.15 % of java submissions (37.3 MB)