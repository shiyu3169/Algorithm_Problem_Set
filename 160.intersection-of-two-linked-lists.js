/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;

  while (a != b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
// @lc code=end
// 45/45 cases passed (84 ms)
// Your runtime beats 81.66 % of javascript submissions
// Your memory usage beats 72.73 % of javascript submissions (42.9 MB)
