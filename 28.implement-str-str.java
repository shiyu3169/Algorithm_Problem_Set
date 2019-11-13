/*
 * @lc app=leetcode id=28 lang=java
 *
 * [28] Implement strStr()
 */

// @lc code=start
class Solution {
    public int strStr(String s, String t) {
        if (t.isEmpty())
            return 0; // edge case: "",""=>0 "a",""=>0
        for (int i = 0; i <= s.length() - t.length(); i++) {
            if (s.substring(i, i + t.length()).equals(t)) {
                return i;
            }
        }
        return -1;
    }
}
// @lc code=end
// 74/74

// cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 70.23 % of java submissions (37.6 MB)