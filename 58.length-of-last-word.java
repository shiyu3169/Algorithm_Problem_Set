/*
 * @lc app=leetcode id=58 lang=java
 *
 * [58] Length of Last Word
 */

// @lc code=start
class Solution {
    public int lengthOfLastWord(String s) {
        return s.trim().length() - s.trim().lastIndexOf(" ") - 1;
    }
}
// @lc code=end
// 59/59 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (35.9 MB)