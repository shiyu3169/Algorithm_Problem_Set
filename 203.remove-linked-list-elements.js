/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head
    // removing head if they are same val
    while(current && current.val === val) {
        current = current.next
    }
    if (!current) return current
    let start = current
    let prev = current
    current = current.next
    while(current) {
        if(current.val === val) {
            prev.next = current.next
        } else {
            prev = current
        }
        current = current.next
    }
    return start
};
// @lc code=end
// 66/66 cases passed (96 ms)
// Your runtime beats 59.3 % of javascript submissions
// Your memory usage beats 98.75 % of javascript submissions (42.8 MB)
