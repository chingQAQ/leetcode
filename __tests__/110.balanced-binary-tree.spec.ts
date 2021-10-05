import { TreeNode } from '../lib';

const isBalanced = (root: TreeNode | null): boolean => {
	if (!root) { return true; }

	const deepDetection = (node: TreeNode | null): number => {
		if (node == null) { return 0; }

		const left = deepDetection(node.left);
		const right = deepDetection(node.right);

		if (Math.abs(left - right) > 1) { return Infinity; }

		return 1 + Math.max(left, right);
	};

	return !(deepDetection(root) === Infinity);
};

test('expect use TreeNode input [3,9,20,null,null,15,7], output true.', () => {
	const root: TreeNode = new TreeNode(
		3,
		new TreeNode(9),
		new TreeNode(
			20,
			new TreeNode(15),
			new TreeNode(7)
		)
	);
	const expected = true as boolean;
	const actual = isBalanced(root);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode input [1, 2, 2, 3, 3, null, null, 4, 4], output false.', () => {
	const root: TreeNode = new TreeNode(
		1,
		new TreeNode(
			2,
			new TreeNode(
				3,
				new TreeNode(4),
				new TreeNode(4)
			),
			new TreeNode(3)
		),
		new TreeNode(
			2
		)
	);
	const expected = false as boolean;
	const actual = isBalanced(root);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode input [1, 2,2, 3,null,null,3, 4,null,null,4], output false.', () => {
	const root: TreeNode = new TreeNode(
		1,
		new TreeNode(
			2,
			new TreeNode(
				3,
				new TreeNode(
					4
				),
				null
			),
			null
		),
		new TreeNode(
			2,
			null,
			new TreeNode(
				3,
				null,
				new TreeNode(
					4
				)
			)
		)
	);
	const expected = false as boolean;
	const actual = isBalanced(root);

	expect(actual).toEqual(expected);
});

test('expect use TreeNode input [], output true.', () => {
	const root: TreeNode = new TreeNode();
	const expected = true as boolean;
	const actual = isBalanced(root);

	expect(actual).toEqual(expected);
});