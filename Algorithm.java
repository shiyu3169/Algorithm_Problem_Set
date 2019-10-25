import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Algorithm {

  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] myIntArray = new int[] { 2, 7, 11, 15 };
    // System.out.println(Arrays.toString(solution.twoSum(myIntArray, 9)));
  }
}

class Solution {

  // Q1 Given a 32-bit signed integer, reverse digits of an integer.
  // Runtime: 1ms, faster than 100.00% of Java online submissions for Reverse
  // Integer.
  // Memory Usage: 33.5 MB, less than 11.66% of Java online submissions for
  // Reverse Integer.

  public int reverse(int x) {
    int rev = 0;
    while (x != 0) {
      int pop = x % 10;
      x = x / 10;
      if ((pop > 0 && rev > (Integer.MAX_VALUE - pop) / 10) || (pop < 0 && rev < (Integer.MIN_VALUE - pop) / 10)) {
        return 0;
      }
      rev = rev * 10 + pop;
    }
    return rev;
  }

  // Q2 Given an array of integers, return indices of the two numbers such that
  // they add up to a specific target.
  // Runtime: 2 ms, faster than 98.95% of Java online submissions for Two Sum.
  // Memory Usage: 38 MB, less than 96.33% of Java online submissions for Two Sum.
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
