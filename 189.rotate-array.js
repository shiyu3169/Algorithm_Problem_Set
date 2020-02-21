/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   while (k > 0) {
//     if (k > nums.length) {
//       k -= nums.length;
//     } else {
//       const num = nums.pop();
//       nums.unshift(num);
//       k--;
//     }
//   }
// };

var rotate = function(nums, k) {
  // k %= nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
// @lc code=end
// 34/34 cases passed (52 ms)
// Your runtime beats 99.75 % of javascript submissions
// Your memory usage beats 94.74 % of javascript submissions (35 MB)
