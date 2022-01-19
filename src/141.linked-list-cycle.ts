/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
	if (head == null || head.next == null) { return false; }

	let slow = head.next;
	let fast = head.next.next;

	if (slow == null || fast == null) {
		return false;
	}

	while (slow != fast) {
		if (slow.next == null || fast.next == null) {
			return false;
		}

		slow = slow.next;
		fast = fast.next.next;

		if (slow == null || fast == null) {
			return false;
		}
	}

	return true;
}
// @lc code=end

module.exports = hasCycle;
