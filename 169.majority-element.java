/*
 * @lc app=leetcode id=169 lang=java
 *
 * [169] Majority Element
 */

// @lc code=start
class Solution {
    public int majorityElement(int[] nums) {
        int major = nums[0], count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (count == 0) {
                count++;
                major = nums[i];
            } else {
                count += major == nums[i] ? 1 : -1;
            }
        }
        return major;
    }
}
// @lc code=end
// 44/44 cases passed (1 ms)
// Your runtime beats 99.79 % of java submissions
// Your memory usage beats 70.59 % of java submissions (41.6 MB)