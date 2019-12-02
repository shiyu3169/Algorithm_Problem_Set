/*
 * @lc app=leetcode id=67 lang=java
 *
 * [67] Add Binary
 */

// @lc code=start
class Solution {
    public String addBinary(String a, String b) {
        int i = a.length() - 1, j = b.length() - 1, carry = 0;
        String solution = "";

        while (i >= 0 || j >= 0 || carry == 1) {
            int first = (i < 0) ? 0 : a.charAt(i--) - '0';
            int second = (j < 0) ? 0 : b.charAt(j--) - '0';

            solution = (char) ('0' + first ^ second ^ carry) + solution;
            carry = (first + second + carry) >> 1;
        }

        return solution;
    }
}
// @lc code=end
// 294/294 cases passed (1 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (36.2 MB)