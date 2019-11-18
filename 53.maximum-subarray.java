/*
 * @lc app=leetcode id=53 lang=java
 *
 * [53] Maximum Subarray
 */

// @lc code=start
class Solution {
    public int maxSubArray(int[] nums) {
        int max = Integer.MIN_VALUE, sum = 0;
        for (int num : nums) {
            sum = sum < 0 ? num : sum + num;
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }
}
// @lc code=end
// 202/202 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 99.06 % of java submissions (37.7 MB)
