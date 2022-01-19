import { ListNode } from '../lib';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let carry = 0;

	let l3: ListNode | null = new ListNode();

	let head = l3;

	while (l1 || l2 || carry !== 0) {
		let sum = 0;

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

test('expect [2,4,3] merge [5,6,4] to be [7,0,8]', () => {
	const l1: ListNode = new ListNode(
		2, new ListNode(
			4, new ListNode(
				3, null
			)
		)
	);
	const l2: ListNode = new ListNode(
		5, new ListNode(
			6, new ListNode(
				4, null
			)
		)
	);
	const expected: ListNode = new ListNode(
		7, new ListNode(
			0, new ListNode(
				8, null
			)
		)
	);
	const actual = addTwoNumbers(l1, l2);

	expect(actual).toEqual(expected);
});

test('expect [0] merge [0] to be [0]', () => {
	const l1: ListNode = new ListNode(
		0
	);
	const l2: ListNode = new ListNode(
		0
	);
	const expected: ListNode = new ListNode(
		0
	);
	const actual = addTwoNumbers(l1, l2);

	expect(actual).toEqual(expected);
});

test('expect [9, 9, 9, 9, 9, 9, 9] merge [9, 9, 9, 9] to be [8,9,9,9,0,0,0,1]', () => {
	const l1: ListNode = new ListNode(
		9, new ListNode(
			9, new ListNode(
				9, new ListNode(
					9, new ListNode(
						9, new ListNode(
							9, new ListNode(
								9
							)
						)
					)
				)
			)
		)
	);
	const l2: ListNode = new ListNode(
		9, new ListNode(
			9, new ListNode(
				9, new ListNode(
					9
				)
			)
		)
	);
	const expected: ListNode = new ListNode(
		8, new ListNode(
			9, new ListNode(
				9, new ListNode(
					9, new ListNode(
						0, new ListNode(
							0, new ListNode(
								0, new ListNode(
									1
								)
							)
						)
					)
				)
			)
		)
	);
	const actual = addTwoNumbers(l1, l2);

	expect(actual).toEqual(expected);
});

export default addTwoNumbers;