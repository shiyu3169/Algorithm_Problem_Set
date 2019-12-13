/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while (n > 0)
    // We go from back to start.
    // If last element in nums2 is biggest we put it there, else we put last element
    // of nums1 there
    // Then we check the second last element
    // Repeat, until nums2 is empty
    nums1[m + n - 1] =
      m === 0 || nums2[n - 1] > nums1[m - 1] ? nums2[--n] : nums1[--m];
};
// @lc code=end
// 59/59 cases passed (56 ms)
// Your runtime beats 72.14 % of javascript submissions
// Your memory usage beats 23.08 % of javascript submissions (34.5 MB)
