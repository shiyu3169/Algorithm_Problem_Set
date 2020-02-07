/*
 * @lc app=leetcode id=167 lang=java
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int[] solution = new int[2];
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int result = numbers[left] + numbers[right];
            if (result == target) {
                solution[0] = left + 1;
                solution[1] = right + 1;
                break;
            } else if (result < target) {
                left++;
            } else {
                right--;
            }
        }
        return solution;
    }
}
// @lc code=end
// 17/17 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5.22 % of java submissions (43.1 MB)