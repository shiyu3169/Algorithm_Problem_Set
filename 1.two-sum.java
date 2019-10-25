
/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */
import java.util.Map;
import java.util.HashMap;

// @lc code=start
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) {
                result[1] = i;
                result[0] = map.get(target - nums[i]);
                return result;
            }
            map.put(nums[i], i);
        }
        return result;
    }
}
// @lc code=end
// 29/29 cases passed (2 ms)
// Your runtime beats 98.95 % of java submissions
// Your memory usage beats 90.03 % of java submissions (38.2 MB)