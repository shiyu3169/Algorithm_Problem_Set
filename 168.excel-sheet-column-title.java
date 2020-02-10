/*
 * @lc app=leetcode id=168 lang=java
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
class Solution {
    // public String convertToTitle(int n) {
    // return n == 0 ? "" : convertToTitle(--n / 26) + (char) ('A' + n % 26);
    // }
    public String convertToTitle(int n) {
        StringBuilder title = new StringBuilder();
        while (n > 0) {
            title.append((char) ('A' + --n % 26));
            n /= 26;
        }
        return title.reverse().toString();
    }
}
// @lc code=end
// 18/18 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5.13 % of java submissions (36.7 MB)