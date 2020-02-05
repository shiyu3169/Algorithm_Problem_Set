/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin())
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
// 18/18 cases passed (120 ms)
// Your runtime beats 44.76 % of javascript submissions
// Your memory usage beats 18.75 % of javascript submissions (44.8 MB)
