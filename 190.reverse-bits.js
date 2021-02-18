/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 1. Transfer the input n into string based by 2
  // 2. Add leading 0 if the string length is less than 32
  // 3. Transfer the string into an array of char
  // 4. Reverse the Array
  // 5. Transfer it back to string
  // 6. Parse it back to number
  return parseInt(
    n.toString(2).padStart(32, "0").split("").reverse().join(""),
    2
  )
}
// @lc code=end
// 600/600 cases passed (100 ms)
// Your runtime beats 40.14 % of javascript submissions
// Your memory usage beats 53.68 % of javascript submissions (40.5 MB)
