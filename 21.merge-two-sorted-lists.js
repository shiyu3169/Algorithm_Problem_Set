/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// AC
var mergeTwoLists = function(l1, l2) {
  const mergedHead = { val: -1, next: null };
  let current = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  return mergedHead.next;
};

// Recursive
// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// @lc code=end
// 208/208 cases passed (60 ms)
// Your runtime beats 85.06 % of javascript submissions
// Your memory usage beats 35.9 % of javascript submissions (35.7 MB)
