/*
 * @lc app=leetcode id=38 lang=java
 *
 * [38] Count and Say
 */

// @lc code=start
class Solution {
    public String countAndSay(int n) {
        StringBuilder current = new StringBuilder("1");
        StringBuilder prev;
        int counter = 1;
        for (int i = 2; i <= n; i++) {
            prev = current;
            current = new StringBuilder();
            for (int j = 0; j < prev.length(); j++) {
                if (j == prev.length() - 1 || prev.charAt(j) != prev.charAt(j + 1)) {
                    current.append(counter).append(prev.charAt(j));
                    counter = 1;
                } else {
                    counter++;
                }
            }
        }

        return current.toString();
    }
}
// @lc code=end
// 18/18 cases passed (2 ms)
// Your runtime beats 64.98 % of java submissions
// Your memory usage beats 100 % of java submissions (34.3 MB)