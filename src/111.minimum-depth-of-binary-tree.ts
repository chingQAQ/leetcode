/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

const minDepth = (root: TreeNode | null): number => {
	if (root == null) { return 0; }

	const depthDetect = (node: TreeNode | null): number => {
		if (node == null) { return 0; }

		if (node.left == null) { return depthDetect(node.right) + 1; }

		if (node.right == null) { return depthDetect(node.left) + 1; }

		return Math.min(depthDetect(node.left), depthDetect(node.right)) + 1;
	};

	return depthDetect(root);
};

module.exports = minDepth;
// @lc code=end
