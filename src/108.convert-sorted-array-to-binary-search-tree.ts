/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
	if (nums.length === 0) { return null; }

	if (nums.length === 1) { return new TreeNode(nums[0]); }

	const mid = Math.floor(nums.length / 2);
	const node = new TreeNode(nums[mid]);

	node.left = sortedArrayToBST(nums.slice(0, mid));
	node.right = sortedArrayToBST(nums.slice(mid + 1));

	return node;
};

module.exports = sortedArrayToBST;
// @lc code=end
