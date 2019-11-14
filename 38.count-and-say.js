/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

//  Worst description ever
// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = "1";
  let counter = 1;
  for (let i = 2; i <= n; i++) {
    let strArray = str.split("");
    str = "";
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j] === strArray[j + 1]) {
        counter++;
      } else {
        str += counter;
        str += strArray[j];
        counter = 1;
      }
    }
  }
  return str;
};
// @lc code=end
console.log(countAndSay(4));
// 18/18 cases passed (52 ms)
// Your runtime beats 91.05 % of javascript submissions
// Your memory usage beats 33.33 % of javascript submissions (35.8 MB)
