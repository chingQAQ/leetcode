/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (root == null || root.val == null) return [];

  let ret: number[] = [];
  let stack: Array<TreeNode> = [];
  let currentNode: TreeNode | null = root;

  do {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = <TreeNode>currentNode.left;
    } else {
      const lastNode = <TreeNode>stack.pop();
      ret.push(lastNode.val);
      currentNode = <TreeNode>lastNode.right;
    }
  } while (stack.length !== 0 || currentNode != null);

  return ret;
}

module.exports = inorderTraversal;
// @lc code=end

