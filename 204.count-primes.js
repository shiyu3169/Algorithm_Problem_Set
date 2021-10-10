/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // create an array for all the numbers from 0 to n and marked them as true
    let isPrime = new Array(n).fill(true);
	// mark 1 as false as it is not prime for sure
    isPrime[1] = false;
	// start looping from 2 as we already mark 1 as Not Prime before
    for (let i = 2; i * i < n; i++) {
		// i.e. n = 100, i = 2, j = 4, 6, 8, ...
		// 4, 6, 8, ... will be marked as false and can be skipped
        if (!isPrime[i]) continue;
		// for any number n, its power n^2 is not prime
		// also for n^2 + n, n^2 + 2n, n^2 + 3n... are not primes as well
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }
	// to better understand the loop, here is an example:
	// n = 10, i starting from i = 2, i * i = 4 < 10, execute the loop
	// isPrime[2] = true, go to the second loop
	// j = i * i = 4, 4 < 10, execute the loop
	// isPrime[4] = false, j = j + i = 6, 6 < 10, isPrime[6] = false, so as isPrime[8] = false
	// now i = 3, i * i = 9 < 10, keep going
	// isPrime[3] = true, gogogo
	// j = i * i = 9 < 10, isPrime[9] = false, j = j + i = 12 > 10, stop the second for loop
	// then increment i to i = 4, i * i = 16 > 10, for loop ends
	// notice that we did not touch isPrime[5] and isPrime[7] so that both of them remain true
	// after the loops, isPrime = [true, false, true, true, false, true, false, true, false, false]
	// the first one, which is isPrime[0] = true, it doesn't matter because in the later time
	// we start counting from the number 1
    let count = 0;
	// simply counting the number of true in the array
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};
// @lc code=end
// 66/66 cases passed (523 ms)
// Your runtime beats 36.43 % of javascript submissions
// Your memory usage beats 64.28 % of javascript submissions (79.2 MB)
