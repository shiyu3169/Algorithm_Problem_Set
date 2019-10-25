/**
 * Q1 Given a 32-bit signed integer, reverse digits of an integer.
 * Runtime: 84 ms, faster than 26.26% of JavaScript online submissions
 * for Reverse Integer. Memory Usage: 35.8 MB, less than 85.42% of JavaScript online submissions for Reverse Integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = 0;
  const min_value = -2147483648;
  const max_value = 2147483647;
  while (x !== 0) {
    let pop = x % 10;
    x = parseInt(x / 10, 10);
    rev = rev * 10 + pop;
    if (rev < min_value || rev > max_value) {
      return 0;
    }
  }
  return rev;
};

/**
 * Q2 Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Runtime: 44 ms, faster than 99.45% of JavaScript online submissions for Two Sum.
 * Memory Usage: 35 MB, less than 28.93% of JavaScript online submissions for Two Sum.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const rev = [];

  for (let i = 0; i < nums.length; i++) {
    if (rev[target - nums[i]] !== undefined) {
      return [rev[target - nums[i]], i];
    }
    rev[nums[i]] = i;
  }
};

console.log(twoSum([1, 2, 5, 7], 9));
