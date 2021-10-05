/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const isSymmetric = (root: TreeNode | null): boolean => {
	if (root == null || root.val == null) { return true; }

	if (root == null || root.val == null) { return true; }

	const leftStack: Array<TreeNode> = [];
	const rightStark: Array<TreeNode> = [];

	if (root.left != null) {
		if (root.right == null) { return false; }

		leftStack.push(root.left);
		rightStark.push(root.right);
	} else if (root.right != null) { return false; }

	while (leftStack.length || rightStark.length) {
		if ((leftStack.length + rightStark.length) % 2 != 0) { return false; }

		const main = <TreeNode>leftStack.pop();
		const mirror = <TreeNode>rightStark.pop();

		if (main.val != mirror.val) { return false; }

		if (main.left != null) {
			if (mirror.right == null) { return false; }

			leftStack.push(main.left);
			rightStark.push(mirror.right);
		} else if (mirror.right != null) { return false; }

		if (main.right != null) {
			if (mirror.left == null) { return false; }

			leftStack.push(main.right);
			rightStark.push(mirror.left);
		} else if (mirror.left != null) { return false; }
	}

	return true;
};

module.exports = isSymmetric;
// @lc code=end
