/*
 * @lc app=leetcode id=13 lang=java
 *
 * [13] Roman to Integer
 */

// @lc code=start
class Solution {
    public int romanToInt(String s) {
        int sum = 0;
        char[] arr = s.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            switch (arr[i]) {
            case 'I':
                // if next char is V
                if (i != arr.length - 1 && arr[i + 1] == 'V') {
                    sum += 4;
                    i++;
                    break;
                    // if next char is X
                } else if (i != arr.length - 1 && arr[i + 1] == 'X') {
                    sum += 9;
                    i++;
                    break;
                    // We know it is 1
                } else {
                    sum += 1;
                    break;
                }
            case 'V':
                sum += 5;
                break;
            case 'X':
                if (i != arr.length - 1 && arr[i + 1] == 'L') {
                    sum += 40;
                    i++;
                    break;
                } else if (i != arr.length - 1 && arr[i + 1] == 'C') {
                    sum += 90;
                    i++;
                    break;
                } else {
                    sum += 10;
                    break;
                }
            case 'L':
                sum += 50;
                break;
            case 'C':
                if (i != arr.length - 1 && arr[i + 1] == 'D') {
                    sum += 400;
                    i++;
                    break;
                } else if (i != arr.length - 1 && arr[i + 1] == 'M') {
                    sum += 900;
                    i++;
                    break;
                } else {
                    sum += 100;
                    break;
                }
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
            }
        }
        return sum;
    }
}
// @lc code=end
// 3999/3999 cases passed (3 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 100 % of java submissions (36.2 MB)