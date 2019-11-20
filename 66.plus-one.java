/*
 * @lc app=leetcode id=66 lang=java
 *
 * [66] Plus One
 */

// @lc code=start
class Solution {
    public int[] plusOne(int[] digits) {
        int l = digits.length - 1;
        while (l >= 0) {
            digits[l]++;
            if (digits[l] <= 9) {
                return digits;
            } else {
                digits[l] = 0;
                l--;
            }

        }
        int[] res = new int[digits.length + 1];
        res[0] = 1;
        return res;
    }
}
// @lc code=end
// cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 97.58 % of java submissions (35.1 MB)