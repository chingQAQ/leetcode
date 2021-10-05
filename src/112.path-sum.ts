/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
	const sum = (root: TreeNode | null, counter: number): boolean | number => {
		if (root == null) { return false; }

		if (!root.left && !root.right && counter - root.val === 0) { return true; }

		return <number>sum(root.left, counter - root.val) || <number>sum(root.right, counter - root.val);
	};

	return <boolean>sum(root, targetSum);
};

module.exports = hasPathSum;
// @lc code=end
