/*
 * @lc app=leetcode id=121 lang=java
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int max = 0, min = Integer.MAX_VALUE;
        if (prices.length < 2) {
            return max;
        }
        for (int i = 0; i < prices.length; i++) {
            min = Math.min(min, prices[i]);
            max = Math.max(max, prices[i] - min);
        }
        return max;
    }
}
// @lc code=end
// 200/200 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (37 MB)