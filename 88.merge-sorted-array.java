/*
 * @lc app=leetcode id=88 lang=java
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        while (n > 0)
            // We go from back to start.
            // If last element in nums2 is biggest we put it there, else we put last element
            // of nums1 there
            // Then we check the second last element
            // Repeat, until nums2 is empty
            nums1[m + n - 1] = (m == 0 || nums2[n - 1] > nums1[m - 1]) ? nums2[--n] : nums1[--m];
    }
}
// @lc code=end
// 59/59 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (36 MB)