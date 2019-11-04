import java.util.ArrayList;

/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
    public boolean isValid(String s) {
        ArrayList<String> isOpenArray = new ArrayList<String>();
        for (int i = 0; i < s.length(); i++) {
            String isOpen = "";
            if (!isOpenArray.isEmpty()) {
                isOpen = isOpenArray.remove(isOpenArray.size() - 1);
            }
            if (isOpen.equals("") && (s.charAt(i) == ')' || s.charAt(i) == ']' || s.charAt(i) == '}')) {
                return false;
            } else if (isOpen.equals("(") && (s.charAt(i) == '}' || s.charAt(i) == ']')) {
                // System.out.println(1);
                return false;
            } else if (isOpen.equals("[") && (s.charAt(i) == ')' || s.charAt(i) == '}')) {
                // System.out.println(2);
                return false;
            } else if (isOpen.equals("{") && (s.charAt(i) == ')' || s.charAt(i) == ']')) {
                // System.out.println(3);
                return false;
            } else if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
                if (isOpen != "") {
                    isOpenArray.add(isOpen);
                }
                isOpenArray.add(String.valueOf(s.charAt(i)));
            }
        }
        // System.out.println(4);
        return isOpenArray.isEmpty();
    }
}
// @lc code=end
// 76/76 cases passed (2 ms)
// Your runtime beats 62.15 % of java submissions
// Your memory usage beats 100 % of java submissions (34.4 MB)