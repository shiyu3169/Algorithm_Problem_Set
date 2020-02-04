/*
 * @lc app=leetcode id=141 lang=java
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list. class ListNode { int val; ListNode next;
 * ListNode(int x) { val = x; next = null; } }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null)
            return false;
        ListNode nextOne = head;
        ListNode nextTwo = head;
        while (nextTwo.next != null && nextTwo.next.next != null) {
            nextOne = nextOne.next;
            nextTwo = nextTwo.next.next;
            if (nextOne == nextTwo)
                return true;
        }
        return false;
    }

}

// @lc code=end
// 17/17 cases passed (0 ms)
// Your runtime beats 100 % of java submissions
// Your memory usage beats 5.71 % of java submissions (41 MB)