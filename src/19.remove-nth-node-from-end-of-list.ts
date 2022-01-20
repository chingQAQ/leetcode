/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let start = new ListNode();

	let fast = start;

	let slow = start;

	let count = 0;

	start.next = head;

	while (fast != null) {
		if (count++ > n) {
			slow = slow.next;
		}

		fast = fast.next;
	}

	slow.next = slow.next.next;

	return start.next;
}
// @lc code=end

module.exports = removeNthFromEnd;