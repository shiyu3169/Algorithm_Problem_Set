/*
 * @lc app=leetcode id=27 lang=java
 *
 * [27] Remove Element
 */

// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
        int length = nums.length;
        for (int i = 0; i < length; i++) {
            if (nums[i] == val) {
                nums[i--] = nums[length-- - 1];
            }
        }
        return length;
    }
}
// @lc code=end
// 113/113 cases passed (2 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (36.1 MB)