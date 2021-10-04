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
  if (root?.val == null) return false;

  const sum = (root: TreeNode | null, counter: number, targetSum?: number): boolean | number => {
    if (root == null) return counter === targetSum;

    let left = <number>sum(root.left, counter + root.val, targetSum);
    let right = <number>sum(root.right, counter + root.val, targetSum);

    return left || right;
  }

  if (!root.left || !root.right) {
    return <boolean>sum(root.left || root.right, 0, targetSum)
  }

  return <boolean>sum(root, 0, targetSum);
};

module.exports = hasPathSum;
// @lc code=end

