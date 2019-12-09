/*
 * @lc app=leetcode id=70 lang=java
 *
 * [70] Climbing Stairs
 */

// @lc code=start
class Solution {
    public int climbStairs(int n) {
        if (n == 0 || n == 1 || n == 2)
            return n;
        int[] ways = new int[n];
        ways[0] = 1;
        ways[1] = 2;
        for (int i = 2; i < n; i++) {
            ways[i] = ways[i - 1] + ways[i - 2];
        }
        return ways[n - 1];
    }
}
// @lc code=end
// 45/45 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5.26 % of java submissions (33.1 MB)