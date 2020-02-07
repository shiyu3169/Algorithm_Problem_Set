/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//   const cache = {};
//   for (let i = 0; i < numbers.length; i++) {
//     let remaining = target - numbers[i];
//     if (remaining in cache) {
//       return [cache[remaining] + 1, i + 1];
//     }
//     cache[numbers[i]] = i;
//   }
//   throw 'input has no solution';
// };
var twoSum = function(numbers, target) {
  const solution = [];
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let result = numbers[left] + numbers[right];
    if (result === target) {
      solution[0] = left + 1;
      solution[1] = right + 1;
      break;
    } else if (result < target) {
      left++;
    } else {
      right--;
    }
  }
  return solution;
};

// @lc code=end
// 17/17 cases passed (48 ms)
// Your runtime beats 98.16 % of javascript submissions
// Your memory usage beats 21.74 % of javascript submissions (35.3 MB)
