/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x = x / 10;
            if ((pop > 0 && rev > (Integer.MAX_VALUE - pop) / 10)
                    || (pop < 0 && rev < (Integer.MIN_VALUE - pop) / 10)) {
                return 0;
            }
            rev = rev * 10 + pop;
        }
        return rev;
    }
}
// @lc code=end
// 1032/1032 cases passed (1 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 11.66 % of java submissions (33.7 MB)