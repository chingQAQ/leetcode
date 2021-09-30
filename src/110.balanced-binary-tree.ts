/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const deepDetection = (node: TreeNode | null): number => {
    if (node == null) return 0;

    const left = deepDetection(node.left);
    const right = deepDetection(node.right);

    if (Math.abs(left - right) > 1) return Infinity;

    return 1 + Math.max(left, right);
  }

  return !(deepDetection(root) === Infinity);
};

module.exports = isBalanced;

// @lc code=end
