/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) {
    return false;
  }
  let nextOne = head;
  let nextTwo = head;
  while (nextTwo.next && nextTwo.next.next) {
    nextOne = nextOne.next;
    nextTwo = nextTwo.next.next;
    if (nextOne === nextTwo) {
      return true;
    }
  }
  return false;
};
// @lc code=end
// 17/17 cases passed (64 ms)
// Your runtime beats 84.09 % of javascript submissions
// Your memory usage beats 75 % of javascript submissions (36.6 MB)
