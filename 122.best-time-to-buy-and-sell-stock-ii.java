/*
 * @lc app=leetcode id=122 lang=java
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        if (prices.length < 2) {
            return profit;
        }
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }
}
// @lc code=end
// 201/201 cases passed (1 ms)
// Your runtime beats 90.56 % of java submissions
// Your memory usage beats 100 % of java submissions (36.9 MB)