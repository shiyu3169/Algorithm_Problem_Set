/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const cache = {};
  const length = nums.length;
  for (num of nums) {
    if (num in cache) {
      cache[num]++;
    } else {
      cache[num] = 1;
    }
    if (cache[num] > length / 2) {
      return num;
    }
  }
  throw 'There is no majority element in given array';
};

// var majorityElement = function(nums) {
//   // Boyer-Moore Voting Algorithm
// http://www.cs.utexas.edu/~moore/best-ideas/mjrty/

//   let count = 0,
//     candidate = 0;

//   for (let num of nums) {
//     if (count == 0) {
//       candidate = num;
//     }
//     count += num === candidate ? 1 : -1;
//   }

//   return candidate;
// };
// @lc code=end
// 44/44 cases passed (68 ms)
// Your runtime beats 55.99 % of javascript submissions
// Your memory usage beats 28.57 % of javascript submissions (38 MB)
