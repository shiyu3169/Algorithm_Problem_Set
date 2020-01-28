import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=118 lang=java
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pascalTriangle = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            row.add(1);
            for (int j = 1; j < i; j++) {
                int prevLeft = pascalTriangle.get(i - 1).get(j - 1);
                int prevRight = pascalTriangle.get(i - 1).get(j);
                row.add(prevLeft + prevRight);
            }
            row.add(1);
            pascalTriangle.add(row);
        }
        if (numRows > 0) {
            pascalTriangle.get(0).remove(0);
        }
        return pascalTriangle;
    }
}
// @lc code=end
// 15/15 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 6.02 % of java submissions (37.1 MB)