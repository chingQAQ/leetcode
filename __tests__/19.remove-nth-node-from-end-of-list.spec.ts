import { ListNode } from '../lib';

/*
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let resultHead = head;

	let pHead = resultHead;

	let pTail = resultHead;

	let prev = null;

	let count = 0;

	while (pTail?.next != null && pHead != null) {
		if (++count >= n) {
			prev = pHead;
			pHead = pHead.next;
		}

		pTail = pTail.next;
	}

	if (prev && pHead) {
		prev.next = pHead.next;
	}

	if (!prev && pHead) {
		resultHead = pHead.next;
	}

	return null ?? resultHead;
}
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

test('expect use TreeNode head = [1,2,3,4,5], n = 2, output [1,2,3,5].', () => {
	const head: ListNode = new ListNode(
		1, new ListNode(
			2, new ListNode(
				3, new ListNode(
					4, new ListNode(
						5, null
					)
				)
			)
		)
	);

	const n = 2;

	const expected: ListNode = new ListNode(
		1, new ListNode(
			2, new ListNode(
				3, new ListNode(
					5, null
				)
			)
		)
	);

	const actual = removeNthFromEnd(head, n);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode head = [1], n = 1, output [].', () => {
	const head: ListNode = new ListNode(
		1, null
	);

	const n = 1;

	const expected = null;

	const actual = removeNthFromEnd(head, n);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode head = [1,2], n = 1, output [1].', () => {
	const head: ListNode = new ListNode(
		1, new ListNode(
			2, null
		)
	);

	const n = 1;

	const expected: ListNode = new ListNode(1, null);

	const actual = removeNthFromEnd(head, n);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode head = [1,2,3], n = 3, output [2,3].', () => {
	const head: ListNode = new ListNode(
		1, new ListNode(
			2, new ListNode(
				3, null
			)
		)
	);

	const n = 3;

	const expected: ListNode = new ListNode(2, new ListNode(3, null));

	const actual = removeNthFromEnd(head, n);

	expect(actual).toEqual(expected);
});

export default removeNthFromEnd;
