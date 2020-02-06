/*
 * @lc app=leetcode id=160 lang=java
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start

//  Definition for singly-linked list.
// class ListNode {
//     int val;
//     ListNode next;

//     ListNode(int x) {
//         val = x;
//         next = null;
//     }
// }

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null)
            return null;
        ListNode a = headA;
        ListNode b = headB;
        while (a != b) {
            a = a == null ? headB : a.next;
            b = b == null ? headA : b.next;
        }
        return a;
    }

}
// @lc code=end
// 45/45 cases passed (1 ms)
// Your runtime beats 98.84 % of java submissions
// Your memory usage beats 5.71 % of java submissions (43.1 MB)