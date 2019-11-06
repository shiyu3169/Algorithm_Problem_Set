/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        int i = nums.length > 0 ? 1 : 0;
        for (int n : nums)
            if (n > nums[i - 1])
                nums[i++] = n;
        return i;
    }
}
// @lc code=end
// 161/161 cases passed (1 ms)
// Your runtime beats 97.69 % of java submissions
// Your memory usage beats 26.07 % of java submissions (41.2 MB)