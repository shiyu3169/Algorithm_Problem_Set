/*
 * @lc app=leetcode id=108 lang=java
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums.length == 0) {
            return null;
        }
        TreeNode head = BSTBuilder(nums, 0, nums.length - 1);
        return head;
    }

    public TreeNode BSTBuilder(int[] nums, int low, int high) {
        if (low > high) {
            return null;
        }

        int mid = (low + high) / 2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = BSTBuilder(nums, low, mid - 1);
        node.right = BSTBuilder(nums, mid + 1, high);
        return node;
    }
}
// @lc code=end
// 32/32 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 48.45 % of java submissions (37.7 MB)