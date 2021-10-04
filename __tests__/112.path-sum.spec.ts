﻿import { TreeNode } from '../lib';

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
  } else

  return <boolean>sum(root, 0, targetSum);
};

test('expect use TreeNode input [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22, the return is true.', () => {
  const root: TreeNode = new TreeNode(
    5,
    new TreeNode(
      4,
      new TreeNode(
        11,
        new TreeNode(
          7
        ),
        new TreeNode(
          2
        )
      ),
      null
    ),
    new TreeNode(
      8,
      new TreeNode(
        13,
        new TreeNode(
          1
        )
      ),
      new TreeNode(
        4,
      )

    )
  );
  const targetSum = 22 as number;
  const expected = true;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1, 2, 3], targetSum = 5, the return is false.', () => {
  const root: TreeNode = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3)
  );
  const targetSum = 5 as number;
  const expected = false;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1, 2], targetSum = 0, the return is false.', () => {
  const root: TreeNode = new TreeNode(
    1,
    new TreeNode(2)
  );
  const targetSum = 0 as number;
  const expected = false;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1, 2], targetSum = 1, the return is false.', () => {
  const root: TreeNode = new TreeNode(
    1,
    new TreeNode(2)
  );
  const targetSum = 1 as number;
  const expected = false;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [1], targetSum = 1, the return is true.', () => {
  const root: TreeNode = new TreeNode(
    1
  );
  const targetSum = 1 as number;
  const expected = true;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [], targetSum = 0, the return is true.', () => {
  const root: any = [];
  const targetSum = 0 as number;
  const expected = false;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})
