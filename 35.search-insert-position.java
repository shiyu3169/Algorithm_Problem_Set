/*
 * @lc app=leetcode id=35 lang=java
 *
 * [35] Search Insert Position
 */

// @lc code=start
class Solution {
    public int searchInsert(int[] nums, int target) {
        return binarySearch(nums, target, 0, nums.length - 1);

    }

    int binarySearch(int[] arr, int tar, int start, int end) {
        if (start > end)
            return start;
        int mid = Math.round((start + end) / 2);
        if (arr[mid] == tar)
            return mid;
        if (arr[mid] > tar)
            return binarySearch(arr, tar, start, mid - 1);
        if (arr[mid] < tar)
            return binarySearch(arr, tar, mid + 1, end);
        return 0;
    }
}
// @lc code=end
// 62/62 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (39.1 MB)