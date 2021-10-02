/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const pastResults = {};
  const isHappyHelper = (n) => {
    const digits = n.toString().split("");
    // let newN = 0;
    // for (let digit of digits) {
    //   newN = newN + Number(digit) * Number(digit);
    // }
    const newN = digits.reduce(
      (acc, cur) => acc + Number(cur) * Number(cur),
      0,
    );
    // console.log(newN)
    if (newN === 1) return true;
    if (pastResults[newN]) return false;
    pastResults[newN] = 1;
    // console.log(newN);
    return isHappyHelper(newN);
  };
  return isHappyHelper(n);
};
// @lc code=end
// console.log(isHappy(13));
// 402/402 cases passed (84 ms)
// Your runtime beats 62.44 % of javascript submissions
// Your memory usage beats 44.02 % of javascript submissions (40.6 MB)
