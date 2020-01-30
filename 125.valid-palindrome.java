/*
 * @lc app=leetcode id=125 lang=java
 *
 * [125] Valid Palindrome
 */

// @lc code=start
class Solution {
    public boolean isPalindrome(String s) {
        int head = 0;
        int tail = s.length() - 1;

        while (head < tail) {
            char sHead = s.charAt(head);
            char sTail = s.charAt(tail);
            if (!Character.isLetterOrDigit(sHead)) {
                head++;
            } else if (!Character.isLetterOrDigit(sTail)) {
                tail--;
            } else {
                if (Character.toLowerCase(sHead) != Character.toLowerCase(sTail)) {
                    return false;
                }
                head++;
                tail--;
            }
        }
        return true;
    }
}
// @lc code=end
// 476/476 cases passed (2 ms)
// Your runtime beats 99.5 % of java submissions
// Your memory usage beats 71.43 % of java submissions (38.8 MB)