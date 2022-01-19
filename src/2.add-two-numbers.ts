/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let carry = 0;
	let sum = 0;

	let l3: ListNode | null = new ListNode();

	let head = l3;

	while (l1 || l2 || carry > 0) {
		sum = 0;

		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}

		sum += carry;

		l3.next = new ListNode((sum % 10));

		carry = ~~(sum / 10);

		l3 = l3.next;
	}

	return head.next;
}

module.exports = addTwoNumbers;
// @lc code=end
