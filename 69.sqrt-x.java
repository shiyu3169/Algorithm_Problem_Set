/*
 * @lc app=leetcode id=69 lang=java
 *
 * [69] Sqrt(x)
 */

// @lc code=start
class Solution {
    public int mySqrt(int x) {
        long r = x;
        while (r * r > x) {
            r = (r + x / r) / 2;
        }
        return (int) r;
    }
}
// @lc code=end
// 1017/1017 cases passed (1 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5 % of java submissions (33.7 MB)