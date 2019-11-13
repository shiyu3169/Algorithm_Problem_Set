/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);

  function binarySearch(arr, target, start, end) {
    if (start > end) return start;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  }
};
// @lc code=end
// 62/62 cases passed (52 ms)
// Your runtime beats 81.52 % of javascript submissions
// Your memory usage beats 62.5 % of javascript submissions (33.8 MB)
