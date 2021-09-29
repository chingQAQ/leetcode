import { TreeNode } from '../lib';

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

test('expect the task list input number[]: [-10, -3, 0, 5, 9], output TreeNode[]: [0, -3, 9, -10, null, 5].', () => {
  const nums: number[] = [-10, -3, 0, 5, 9];
  const expected: TreeNode | null = new TreeNode(
    0,
    new TreeNode(-3, 
      new TreeNode(-10),
      null
    ),
    new TreeNode(9,
      new TreeNode(5)
    )
  );

  const actual = sortedArrayToBST(nums);

  expect(actual).toEqual(expected);
});

test('expect the task list input number[]: [1, 3], output TreeNode[]: [3, 1].', () => {
  const nums: number[] = [1, 3];
  const expected: TreeNode | null = new TreeNode(
    3,
    new TreeNode(1)
  );

  const actual = sortedArrayToBST(nums);

  expect(actual).toEqual(expected);
});

test('expect the task list input number[]: [0, 1, 2, 3, 4, 5], output TreeNode[]: [3, 1, 5, 0, 2, 4].', () => {
  const nums: number[] = [0, 1, 2, 3, 4, 5];
  const expected: TreeNode | null = new TreeNode(
    3,
    new TreeNode(
      1,
      new TreeNode(0),
      new TreeNode(2)
    ),
    new TreeNode(
      5,
      new TreeNode(4)
    )
  );

  const actual = sortedArrayToBST(nums);

  expect(actual).toEqual(expected);
});
