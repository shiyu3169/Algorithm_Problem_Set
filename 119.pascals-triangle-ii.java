import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=119 lang=java
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<Integer>();
        row.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            for (int j = i - 1; j >= 1; j--) {
                row.set(j, row.get(j - 1) + row.get(j));
            }
            row.add(1);
        }
        return row;
    }
}
// @lc code=end
// 34/34 cases passed (1 ms)
// Your runtime beats 89.94 % of java submissions
// Your memory usage beats 6.17 % of java submissions (37.2 MB)