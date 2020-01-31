/*
 * @lc app=leetcode id=136 lang=java
 *
 * [136] Single Number
 */

// @lc code=start
class Solution {
    public int singleNumber(int[] nums) {
        int result = nums[0];
        for (int i = 1; i < nums.length; i++) {
            result ^= nums[i];
        }
        return result;
    }
}
// @lc code=end
// 16/16 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5.19 % of java submissions (42.2 MB)