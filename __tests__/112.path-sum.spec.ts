import { TreeNode } from '../lib';

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {

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
      )
    ),
    new TreeNode(
      8,
      new TreeNode(13),
      new TreeNode(
        4,
        new TreeNode(
          1
        )
      )
    )
  );
  const targetSum = 22 as number;
  const expected = true;
  const actual = hasPathSum(root, targetSum);

  expect(actual).toEqual(expected);
})
