import { TreeNode } from '../lib';

const minDepth = (root: TreeNode | null): number =>  {
  if (root == null) return 0;

  const depthDetect = (node: TreeNode | null): number => {
    if (node == null) return 0;
    if (node.left == null) return depthDetect(node.right) + 1;
    if (node.right == null) return depthDetect(node.left) + 1;
    return Math.min(depthDetect(node.left), depthDetect(node.right)) + 1;
  };

  return depthDetect(root);
};

test('expect use TreeNode input [3,9,20,null,null,15,7], the minimum depth is 2.', () => {
  const root: TreeNode = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
      20,
      new TreeNode(15),
      new TreeNode(7)
    )
  );
  const expected = 2 as number;
  const actual = minDepth(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [2,null,3,null,4,null,5,null,6], the minimum depth is 5.', () => {
  const root: TreeNode = new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(
        4,
        null,
        new TreeNode(
          5,
          null,
          new TreeNode(
            6
          )
        )
      )
    )
  );
  const expected = 5 as number;
  const actual = minDepth(root);

  expect(actual).toEqual(expected);
});

test('expect use TreeNode input [1], the minimum depth is 1.', () => {
  const root: TreeNode = new TreeNode(
    1
  );
  const expected = 1 as number;
  const actual = minDepth(root);

  expect(actual).toEqual(expected);
})

test('expect use TreeNode input [], the minimum depth is 0.', () => {
  const root = null;
  const expected = 0 as number;
  const actual = minDepth(root);

  expect(actual).toEqual(expected);
})


test('expect use TreeNode input [1,2,3,4,5], the minimum depth is 2.', () => {
  const root: TreeNode = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(
        4
      ),
      new TreeNode(
        5
      ),
    ),
    new TreeNode(
      3
    ),
  );
  const expected = 2 as number;
  const actual = minDepth(root);

  expect(actual).toEqual(expected);
});
